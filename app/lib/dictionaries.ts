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
      language: "Changer de langue",
    },
    home: {
      tagline: "Développeur & passionné par l'IA",
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
      language: "Change language",
    },
    home: {
      tagline: "Developer & AI enthusiast",
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
      language: "Cambiar de idioma",
    },
    home: {
      tagline: "Desarrollador y apasionado de la IA",
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
      language: "Sprache wechseln",
    },
    home: {
      tagline: "Entwickler und KI-Enthusiast",
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
      language: "Cambia lingua",
    },
    home: {
      tagline: "Sviluppatore e appassionato di IA",
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
      language: "Mudar de idioma",
    },
    home: {
      tagline: "Programador e apaixonado por IA",
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
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
