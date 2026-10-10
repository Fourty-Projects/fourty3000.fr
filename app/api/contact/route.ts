import { NextResponse, type NextRequest } from "next/server";

/**
 * Reception des messages du formulaire de contact.
 *
 * Le navigateur n'appelle jamais le webhook directement : passer par ici
 * permet de valider les champs, de verifier le captcha et d'appliquer un
 * plafond d'envois, tout en gardant l'URL du webhook secrete.
 */

const MAX_NAME = 80;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;
const MIN_MESSAGE = 10;

/** Plafond d'envois par adresse IP, sur une fenetre glissante. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

interface RateRecord {
  count: number;
  firstSeen: number;
}

/**
 * Comptage en memoire du processus. Suffisant pour un site personnel ;
 * si le deploiement tourne en plusieurs instances, cette limite ne couvre
 * qu'une instance a la fois. Ce n'est pas critique : le captcha filtre
 * l'essentiel du spam.
 */
const rateStore = new Map<string, RateRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateStore.get(ip);

  if (!record || now - record.firstSeen > RATE_WINDOW_MS) {
    rateStore.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  record.count += 1;
  return record.count > RATE_LIMIT;
}

/** Nettoyage periodique pour eviter que la Map grossisse indefiniment. */
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateStore) {
      if (now - record.firstSeen > RATE_WINDOW_MS) rateStore.delete(ip);
    }
  }, RATE_WINDOW_MS).unref?.();
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Expression volontairement simple : on verifie la forme, pas l'existence
// de la boite. Un regexp exhaustif rejette des adresses valides.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Verifie le jeton Turnstile aupres de Cloudflare.
 * La verification doit imperativement se faire ici, cote serveur : la cle
 * secrete ne doit jamais atteindre le navigateur.
 */
async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token, remoteip: ip }),
      }
    );

    if (!response.ok) return false;

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    // Une erreur reseau ne doit pas laisser passer le message.
    return false;
  }
}

/**
 * Envoie le message au webhook configure.
 *
 * Discord sait afficher un "embed" : un bloc colore avec un titre, des
 * champs et un pied de page, beaucoup plus lisible qu'un texte brut.
 * On construit un embed, tout en conservant `content` et `text` pour que
 * la notification apparaisse dans la liste des salons.
 */
async function forwardToWebhook(payload: Record<string, string>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: false, configured: false, detail: "aucune URL configuree" };
  }

  // Limites Discord : titre 256, description 4096, champ 1024,
  // pied de page 2048, et 6000 caracteres au total pour l'ensemble.
  const truncate = (text: string, max: number) =>
    text.length > max ? `${text.slice(0, max - 1)}…` : text;

  const name = truncate(payload.name, 256);
  const email = truncate(payload.email, 256);

  // Un e-mail devient cliquable dans Discord : un simple Ctrl+clic
  // ouvre le client de messagerie.
  const mailto = `[${email}](mailto:${email})`;

  // Les adresses a throwaway ou de test n'ont pas vocation a etre
  // repondues : on le signale plutot que de pretendre le contraire.
  const disposable = /\b(mailinator|guerrillamail|10minutemail|yopmail|trashmail)\b/i;
  const isLikelyDisposable = disposable.test(email);

  // Le nom et l'avatar du webhook ne sont volontairement pas definis ici :
  // Discord reprend ceux configures dans les parametres du webhook, ce qui
  // laisse la main pour la personnalisation du salon.
  const body = {
    // Notification affichee dans la liste des salons.
    content: `📬 Nouveau message de ${truncate(payload.name, 80)}`,

    // Slack et services compatibles.
    text: `Nouveau message de ${payload.name} (${payload.email}) : ${payload.message}`,

    embeds: [
      {
        title: "📨 Nouveau message",
        description: truncate(payload.message, 4096),
        url: "https://fourty3000.fr/fr/contact",
        // Vert : message envoye avec succes.
        color: 0x2ecc71,
        fields: [
          {
            name: "👤 Nom",
            value: name,
            inline: true,
          },
          {
            name: "✉️ E-mail",
            value: mailto,
            inline: true,
          },
          {
            name: "📏 Longueur",
            value: `${payload.message.length} caractères`,
            inline: true,
          },
          ...(isLikelyDisposable
            ? [
                {
                  name: "⚠️ À vérifier",
                  value: "Adresse d'un service jetable : la réponse ne sera pas lue.",
                  inline: false,
                },
              ]
            : []),
          {
            name: "🔗 Répondre",
            value: `[Ouvrir un e-mail vers ${email}](mailto:${email}?subject=${encodeURIComponent(
              `Réponse à votre message sur fourty3000.fr`
            )})`,
            inline: false,
          },
        ],
        footer: {
          // La date est deja affichee par `timestamp` : on ne la repete
          // pas ici, Discord ajouterait un doublon.
          text: "Envoyé via le site web",
        },
        // Horodatage affiche en bas a droite de l'embed, en heure locale.
        timestamp: new Date().toISOString(),
      },
    ],

    // Champs separes, pour un collecteur JSON qui ignore les embeds.
    source: payload.source,
    name: payload.name,
    email: payload.email,
    message: payload.message,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Le detail aide a diagnostiquer depuis les journaux du serveur.
      // On ne renvoie jamais ce texte au navigateur.
      const detail = await response.text().catch(() => "");
      console.error(
        `[contact] webhook ${response.status} ${response.statusText} :`,
        detail.slice(0, 500)
      );
      return { ok: false, configured: true, detail: `${response.status}` };
    }

    return { ok: true, configured: true };
  } catch (error) {
    console.error("[contact] webhook injoignable :", error);
    return { ok: false, configured: true, detail: "reseau" };
  }
}

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Piège à robots : champ invisible que les humains ne remplissent pas.
  // Un robot qui remplit tout le formulaire le complète aussi.
  if (typeof body.website === "string" && body.website.length > 0) {
    // Réponse identique à un succès pour ne pas l'avertir.
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX_NAME);
  const email = clean(body.email, MAX_EMAIL).toLowerCase();
  const message = clean(body.message, MAX_MESSAGE);
  const captchaToken = clean(body.captchaToken, 2048);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (message.length < MIN_MESSAGE) {
    return NextResponse.json({ error: "message_too_short" }, { status: 400 });
  }

  const captchaValid = await verifyCaptcha(captchaToken, ip);
  if (!captchaValid) {
    return NextResponse.json({ error: "captcha_failed" }, { status: 400 });
  }

  try {
    const { ok } = await forwardToWebhook({
      source: "fourty3000.fr",
      name,
      email,
      message,
    });

    if (!ok) {
      return NextResponse.json({ error: "webhook_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "webhook_failed" }, { status: 502 });
  }
}