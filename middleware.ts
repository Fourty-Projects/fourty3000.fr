import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./app/lib/i18n";

/**
 * Ajoute un prefixe de langue a toute URL qui n'en a pas.
 * Exemple : /blog -> /fr/blog
 *
 * Les fichiers statiques et les routes techniques sont exclus par le matcher
 * ci-dessous, donc aucune URL publique n'est redirigee.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retire le slash final pour uniformiser la comparaison (/fr/ -> /fr).
  const normalised =
    pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : "/";

  const firstSegment = normalised.split("/")[1];

  // L'URL porte deja une langue : on laisse passer.
  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Preference enregistree precedemment par le visiteur.
  const preferred = request.cookies.get("locale")?.value;
  const locale = preferred && isLocale(preferred) ? preferred : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname =
    normalised === "/" ? `/${locale}` : `/${locale}${normalised}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Exclut :
     * - les fichiers de Next.js (statique, image, data)
     * - les assets publics (toutes extensions possibles)
     * - les routes techniques deja servies a la racine (og, feed, sitemap, robots)
     * - le widget et les domaines tiers
     */
    "/((?!_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|og$|og/|feed|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
