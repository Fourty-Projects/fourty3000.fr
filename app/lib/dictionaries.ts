import { defaultLocale, type Locale } from "./i18n";

/**
 * Textes de l'interface, par langue.
 * Les textes variables utilisent des {placeholders}.
 *
 * Avertissement : les pages legales et les articles de blog n'existent qu'en
 * francais. Les autres langues affichent donc leur contenu en francais, avec
 * un encart le signalant.
 */
const dictionaries = {
  fr: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Articles et réflexions sur le développement.",
      projectsTitle: "Projets",
      projectsDescription: "Les projets de Fourty3000.",
      legalTitle: "Mentions légales",
      legalDescription:
        "Mentions légales du site : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.",
      termsTitle: "CGU",
      termsDescription:
        "Conditions générales d'utilisation du site : accès, usage, propriété intellectuelle et responsabilité.",
      privacyTitle: "Politique de confidentialité",
      privacyDescription:
        "Politique de confidentialité et traitement des données personnelles (RGPD) du site.",
      notFoundTitle: "Page introuvable",
      notFoundBody:
        "La page que vous cherchez n'existe pas ou a été déplacée.",
      notFoundLink: "Retour à l'accueil",
      errorTitle: "Une erreur est survenue",
      errorBody:
        "Un problème inattendu a interrompu le chargement de cette page.",
      errorRetry: "Réessayer",
    },
    nav: {
      blog: "Blog",
      projects: "Projets",
      contact: "Contact",
      language: "Changer de langue",
    },
    home: {
      tagline: "Développeur",
      introStart: "Je partage ici mes",
      projectsLink: "projets open source",
      introMiddle: "et mes",
      blogLink: "réflexions",
      introEnd: "Le code de ce site est",
      openSource: "open source",
      latestPosts: "Derniers articles",
      allPosts: "Tous les articles",
      projects: "Projets",
      allProjects: "Tous les projets",
      findMe: "Me retrouver",
    },
    blog: {
      title: "Blog",
      empty: "Aucun article publié pour le moment.",
    },
    projects: {
      title: "Projets",
      visit: "Visiter le site",
      previous: "Projet précédent",
      next: "Projet suivant",
      goTo: "Aller au projet {title}",
    },
    footer: {
      legalLinks: "Liens légaux",
      madeWith: "Fait avec ❤️ par",
      thanksTo: "grâce à",
      and: "et",
    },
    notice: {
      frenchOnly: "Cette page n'est disponible qu'en français.",
    },
    contact: {
      title: "Me contacter",
      intro:
        "Une question, une idée, un problème à signaler ? Écrivez-moi, je réponds.",
      name: "Nom",
      email: "E-mail",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@exemple.fr",
      messagePlaceholder: "Votre message",
      submit: "Envoyer",
      sending: "Envoi en cours…",
      success:
        "Message envoyé. Merci ! Je vous réponds dès que possible.",
      errorGeneric:
        "L'envoi a échoué. Réessayez, ou écrivez-moi directement par e-mail.",
      errorWebhookMissing:
        "Le formulaire est momentanément indisponible. Écrivez-moi par e-mail.",
      errorCaptcha: "La vérification anti-spam a échoué. Rechargez la page.",
      errorRateLimit:
        "Trop d'envois depuis ce navigateur. Réessayez dans quelques minutes.",
      captchaLabel: "Vérification anti-spam",
      fieldRequired: "Champ obligatoire",
      emailInvalid: "Adresse e-mail invalide",
      messageTooShort: "Le message doit faire au moins 10 caractères",
      rateLimited: "Trop de tentatives.",
      honeypotLabel: "Ne pas remplir ce champ",
    },
  },

  en: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Articles and thoughts on software development.",
      projectsTitle: "Projects",
      projectsDescription: "Fourty3000's projects.",
      legalTitle: "Legal notice",
      legalDescription:
        "Legal notice: publisher, publication manager, host and intellectual property.",
      termsTitle: "Terms of service",
      termsDescription:
        "Terms of service: access, use, intellectual property and liability.",
      privacyTitle: "Privacy policy",
      privacyDescription: "Privacy policy and personal data processing (GDPR).",
      notFoundTitle: "Page not found",
      notFoundBody: "The page you are looking for does not exist or has moved.",
      notFoundLink: "Back to home",
      errorTitle: "Something went wrong",
      errorBody: "An unexpected problem interrupted the loading of this page.",
      errorRetry: "Try again",
    },
    nav: {
      blog: "Blog",
      projects: "Projects",
      contact: "Contact",
      language: "Change language",
    },
    home: {
      tagline: "Developer",
      introStart: "I share my",
      projectsLink: "open source projects",
      introMiddle: "and my",
      blogLink: "thoughts",
      introEnd: "The code of this site is",
      openSource: "open source",
      latestPosts: "Latest posts",
      allPosts: "All posts",
      projects: "Projects",
      allProjects: "All projects",
      findMe: "Find me",
    },
    blog: {
      title: "Blog",
      empty: "No posts published yet.",
    },
    projects: {
      title: "Projects",
      visit: "Visit the site",
      previous: "Previous project",
      next: "Next project",
      goTo: "Go to project {title}",
    },
    footer: {
      legalLinks: "Legal links",
      madeWith: "Made with ❤️ by",
      thanksTo: "thanks to",
      and: "and",
    },
    notice: {
      frenchOnly: "This page is only available in French.",
    },
    contact: {
      title: "Contact me",
      intro:
        "A question, an idea, something to report? Write to me, I answer.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Your message",
      submit: "Send",
      sending: "Sending…",
      success: "Message sent. Thank you! I reply as soon as possible.",
      errorGeneric:
        "Sending failed. Try again, or write to me directly by email.",
      errorWebhookMissing:
        "The form is temporarily unavailable. Please write to me by email.",
      errorCaptcha: "Spam check failed. Reload the page.",
      errorRateLimit:
        "Too many sends from this browser. Try again in a few minutes.",
      captchaLabel: "Spam check",
      fieldRequired: "Required field",
      emailInvalid: "Invalid email address",
      messageTooShort: "The message must be at least 10 characters",
      rateLimited: "Too many attempts.",
      honeypotLabel: "Do not fill this field",
    },
  },

  es: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Artículos y reflexiones sobre desarrollo.",
      projectsTitle: "Proyectos",
      projectsDescription: "Los proyectos de Fourty3000.",
      legalTitle: "Aviso legal",
      legalDescription:
        "Aviso legal del sitio: editor, director de publicación, alojamiento y propiedad intelectual.",
      termsTitle: "Condiciones de uso",
      termsDescription:
        "Condiciones generales de uso del sitio: acceso, uso, propiedad intelectual y responsabilidad.",
      privacyTitle: "Política de privacidad",
      privacyDescription:
        "Política de privacidad y tratamiento de datos personales (RGPD).",
      notFoundTitle: "Página no encontrada",
      notFoundBody: "La página que buscas no existe o se ha movido.",
      notFoundLink: "Volver al inicio",
      errorTitle: "Se ha producido un error",
      errorBody:
        "Un problema inesperado ha interrumpido la carga de esta página.",
      errorRetry: "Reintentar",
    },
    nav: {
      blog: "Blog",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Cambiar de idioma",
    },
    home: {
      tagline: "Desarrollador",
      introStart: "Comparto aquí mis",
      projectsLink: "proyectos de código abierto",
      introMiddle: "y mis",
      blogLink: "reflexiones",
      introEnd: "El código de este sitio es",
      openSource: "de código abierto",
      latestPosts: "Últimas entradas",
      allPosts: "Todas las entradas",
      projects: "Proyectos",
      allProjects: "Todos los proyectos",
      findMe: "Encuéntrame",
    },
    blog: {
      title: "Blog",
      empty: "Todavía no hay entradas publicadas.",
    },
    projects: {
      title: "Proyectos",
      visit: "Visitar el sitio",
      previous: "Proyecto anterior",
      next: "Proyecto siguiente",
      goTo: "Ir al proyecto {title}",
    },
    footer: {
      legalLinks: "Enlaces legales",
      madeWith: "Hecho con ❤️ por",
      thanksTo: "gracias a",
      and: "y",
    },
    notice: {
      frenchOnly: "Esta página solo está disponible en francés.",
    },
    contact: {
      title: "Contacto",
      intro:
        "¿Una pregunta, una idea, algo que señalar? Escríbeme y te respondo.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@ejemplo.es",
      messagePlaceholder: "Tu mensaje",
      submit: "Enviar",
      sending: "Enviando…",
      success: "Mensaje enviado. ¡Gracias! Responderé lo antes posible.",
      errorGeneric:
        "El envío falló. Inténtalo de nuevo o escríbeme directamente por correo.",
      errorWebhookMissing:
        "El formulario no está disponible por ahora. Escríbeme por correo.",
      errorCaptcha:
        "La verificación antirrobó falló. Recarga la página.",
      errorRateLimit:
        "Demasiados envíos desde este navegador. Inténtalo de nuevo en unos minutos.",
      captchaLabel: "Verificación antirrobó",
      fieldRequired: "Campo obligatorio",
      emailInvalid: "Correo electrónico no válido",
      messageTooShort: "El mensaje debe tener al menos 10 caracteres",
      rateLimited: "Demasiados intentos.",
      honeypotLabel: "No rellenes este campo",
    },
  },

  de: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Artikel und Gedanken zur Softwareentwicklung.",
      projectsTitle: "Projekte",
      projectsDescription: "Die Projekte von Fourty3000.",
      legalTitle: "Impressum",
      legalDescription:
        "Impressum der Website: Herausgeber, Verantwortlicher für den Inhalt, Hoster und geistiges Eigentum.",
      termsTitle: "Nutzungsbedingungen",
      termsDescription:
        "Nutzungsbedingungen der Website: Zugang, Nutzung, geistiges Eigentum und Haftung.",
      privacyTitle: "Datenschutzerklärung",
      privacyDescription:
        "Datenschutzerklärung und Verarbeitung personenbezogener Daten (DSGVO).",
      notFoundTitle: "Seite nicht gefunden",
      notFoundBody:
        "Die gesuchte Seite existiert nicht oder wurde verschoben.",
      notFoundLink: "Zurück zur Startseite",
      errorTitle: "Ein Fehler ist aufgetreten",
      errorBody:
        "Ein unerwartetes Problem hat das Laden dieser Seite unterbrochen.",
      errorRetry: "Erneut versuchen",
    },
    nav: {
      blog: "Blog",
      projects: "Projekte",
      contact: "Kontakt",
      language: "Sprache wechseln",
    },
    home: {
      tagline: "Entwickler",
      introStart: "Ich teile hier meine",
      projectsLink: "Open-Source-Projekte",
      introMiddle: "und meine",
      blogLink: "Gedanken",
      introEnd: "Der Code dieser Website ist",
      openSource: "Open Source",
      latestPosts: "Neueste Beiträge",
      allPosts: "Alle Beiträge",
      projects: "Projekte",
      allProjects: "Alle Projekte",
      findMe: "Finde mich",
    },
    blog: {
      title: "Blog",
      empty: "Noch keine Beiträge veröffentlicht.",
    },
    projects: {
      title: "Projekte",
      visit: "Website besuchen",
      previous: "Vorheriges Projekt",
      next: "Nächstes Projekt",
      goTo: "Zum Projekt {title}",
    },
    footer: {
      legalLinks: "Rechtliche Links",
      madeWith: "Mit ❤️ erstellt von",
      thanksTo: "dank",
      and: "und",
    },
    notice: {
      frenchOnly: "Diese Seite ist nur auf Französisch verfügbar.",
    },
    contact: {
      title: "Kontakt",
      intro:
        "Eine Frage, eine Idee, etwas zu melden? Schreiben Sie mir, ich antworte.",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "sie@beispiel.de",
      messagePlaceholder: "Ihre Nachricht",
      submit: "Senden",
      sending: "Wird gesendet…",
      success:
        "Nachricht gesendet. Danke! Ich antworte so bald wie möglich.",
      errorGeneric:
        "Der Versand ist fehlgeschlagen. Versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
      errorWebhookMissing:
        "Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie mir per E-Mail.",
      errorCaptcha:
        "Die Spam-Prüfung ist fehlgeschlagen. Laden Sie die Seite neu.",
      errorRateLimit:
        "Zu viele Sendungen aus diesem Browser. Versuchen Sie es in wenigen Minuten erneut.",
      captchaLabel: "Spam-Prüfung",
      fieldRequired: "Pflichtfeld",
      emailInvalid: "Ungültige E-Mail-Adresse",
      messageTooShort: "Die Nachricht muss mindestens 10 Zeichen lang sein",
      rateLimited: "Zu viele Versuche.",
      honeypotLabel: "Füllen Sie dieses Feld nicht aus",
    },
  },

  it: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Articoli e riflessioni sullo sviluppo.",
      projectsTitle: "Progetti",
      projectsDescription: "I progetti di Fourty3000.",
      legalTitle: "Note legali",
      legalDescription:
        "Note legali del sito: editore, direttore della pubblicazione, hosting e proprietà intellettuale.",
      termsTitle: "Condizioni d'uso",
      termsDescription:
        "Condizioni generali d'uso del sito: accesso, utilizzo, proprietà intellettuale e responsabilità.",
      privacyTitle: "Informativa sulla privacy",
      privacyDescription:
        "Informativa sulla privacy e trattamento dei dati personali (GDPR).",
      notFoundTitle: "Pagina non trovata",
      notFoundBody: "La pagina che cerchi non esiste o è stata spostata.",
      notFoundLink: "Torna alla home",
      errorTitle: "Si è verificato un errore",
      errorBody:
        "Un problema imprevisto ha interrotto il caricamento di questa pagina.",
      errorRetry: "Riprova",
    },
    nav: {
      blog: "Blog",
      projects: "Progetti",
      contact: "Contatti",
      language: "Cambia lingua",
    },
    home: {
      tagline: "Sviluppatore",
      introStart: "Qui condivido i miei",
      projectsLink: "progetti open source",
      introMiddle: "e le mie",
      blogLink: "riflessioni",
      introEnd: "Il codice di questo sito è",
      openSource: "open source",
      latestPosts: "Ultimi articoli",
      allPosts: "Tutti gli articoli",
      projects: "Progetti",
      allProjects: "Tutti i progetti",
      findMe: "Trovami",
    },
    blog: {
      title: "Blog",
      empty: "Nessun articolo pubblicato finora.",
    },
    projects: {
      title: "Progetti",
      visit: "Visita il sito",
      previous: "Progetto precedente",
      next: "Progetto successivo",
      goTo: "Vai al progetto {title}",
    },
    footer: {
      legalLinks: "Link legali",
      madeWith: "Realizzato con ❤️ da",
      thanksTo: "grazie a",
      and: "e",
    },
    notice: {
      frenchOnly: "Questa pagina è disponibile solo in francese.",
    },
    contact: {
      title: "Contatti",
      intro:
        "Una domanda, un'idea, qualcosa da segnalare? Scrivimi, rispondo.",
      name: "Nome",
      email: "E-mail",
      message: "Messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "tu@esempio.it",
      messagePlaceholder: "Il tuo messaggio",
      submit: "Invia",
      sending: "Invio in corso…",
      success: "Messaggio inviato. Grazie! Rispondo il prima possibile.",
      errorGeneric:
        "Invio non riuscito. Riprova o scrivimi direttamente via e-mail.",
      errorWebhookMissing:
        "Il modulo non è disponibile al momento. Scrivimi via e-mail.",
      errorCaptcha:
        "La verifica antispam non è riuscita. Ricarica la pagina.",
      errorRateLimit:
        "Troppi invii da questo browser. Riprova tra qualche minuto.",
      captchaLabel: "Verifica antispam",
      fieldRequired: "Campo obbligatorio",
      emailInvalid: "Indirizzo e-mail non valido",
      messageTooShort: "Il messaggio deve contenere almeno 10 caratteri",
      rateLimited: "Troppi tentativi.",
      honeypotLabel: "Non compilare questo campo",
    },
  },

  pt: {
    meta: {
      blogTitle: "Blog",
      blogDescription: "Artigos e reflexões sobre desenvolvimento.",
      projectsTitle: "Projetos",
      projectsDescription: "Os projetos do Fourty3000.",
      legalTitle: "Aviso legal",
      legalDescription:
        "Aviso legal do site: editor, diretor de publicação, alojamento e propriedade intelectual.",
      termsTitle: "Termos de utilização",
      termsDescription:
        "Termos gerais de utilização do site: acesso, utilização, propriedade intelectual e responsabilidade.",
      privacyTitle: "Política de privacidade",
      privacyDescription:
        "Política de privacidade e tratamento de dados pessoais (RGPD).",
      notFoundTitle: "Página não encontrada",
      notFoundBody: "A página que procura não existe ou foi movida.",
      notFoundLink: "Voltar ao início",
      errorTitle: "Ocorreu um erro",
      errorBody:
        "Um problema inesperado interrompeu o carregamento desta página.",
      errorRetry: "Tentar novamente",
    },
    nav: {
      blog: "Blog",
      projects: "Projetos",
      contact: "Contacto",
      language: "Mudar de idioma",
    },
    home: {
      tagline: "Programador",
      introStart: "Partilho aqui os meus",
      projectsLink: "projetos de código aberto",
      introMiddle: "e as minhas",
      blogLink: "reflexões",
      introEnd: "O código deste site é",
      openSource: "de código aberto",
      latestPosts: "Publicações recentes",
      allPosts: "Todas as publicações",
      projects: "Projetos",
      allProjects: "Todos os projetos",
      findMe: "Encontre-me",
    },
    blog: {
      title: "Blog",
      empty: "Ainda não há publicações.",
    },
    projects: {
      title: "Projetos",
      visit: "Visitar o site",
      previous: "Projeto anterior",
      next: "Projeto seguinte",
      goTo: "Ir para o projeto {title}",
    },
    footer: {
      legalLinks: "Ligações legais",
      madeWith: "Feito com ❤️ por",
      thanksTo: "graças a",
      and: "e",
    },
    notice: {
      frenchOnly: "Esta página só está disponível em francês.",
    },
    contact: {
      title: "Contacto",
      intro:
        "Uma pergunta, uma ideia, algo a assinalar? Escreva-me, eu respondo.",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "O seu nome",
      emailPlaceholder: "voce@exemplo.pt",
      messagePlaceholder: "A sua mensagem",
      submit: "Enviar",
      sending: "A enviar…",
      success: "Mensagem enviada. Obrigado! Respondo assim que possível.",
      errorGeneric:
        "O envio falhou. Tente novamente ou escreva-me diretamente por e-mail.",
      errorWebhookMissing:
        "O formulário está temporariamente indisponível. Escreva-me por e-mail.",
      errorCaptcha:
        "A verificação antisspam falhou. Recarregue a página.",
      errorRateLimit:
        "Demasiados envios deste navegador. Tente novamente dentro de alguns minutos.",
      captchaLabel: "Verificação antisspam",
      fieldRequired: "Campo obrigatório",
      emailInvalid: "Endereço de e-mail inválido",
      messageTooShort: "A mensagem deve ter pelo menos 10 caracteres",
      rateLimited: "Demasiadas tentativas.",
      honeypotLabel: "Não preencha este campo",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
