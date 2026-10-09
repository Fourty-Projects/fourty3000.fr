import type { Locale } from "../i18n";
import type { LegalPage } from "./types";

const editorName = "Fourty3000";
const siteName = "Fourty3000.fr";
const email = "fourty3000@gmail.com";
const updated = "06/10/2026";

export const termsOfService: Record<Locale, LegalPage> = {
  fr: {
    heading: "Conditions générales d'utilisation",
    intro: `Les présentes conditions générales d'utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du site ${siteName} (ci-après « le Site »), édité par ${editorName}.`,
    updated,
    updatedLabel: "Dernière mise à jour :",
    sections: [
      {
        title: "Article 1 — Objet",
        blocks: [
          {
            type: "p",
            text: "Les présentes CGU ont pour objet de définir les conditions d'accès et d'utilisation du Site. Toute navigation sur le Site vaut acceptation pleine et entière des présentes CGU.",
          },
        ],
      },
      {
        title: "Article 2 — Accès au site",
        blocks: [
          {
            type: "p",
            text: "Le Site est accessible gratuitement, 24 h/24 et 7 j/7, sauf interruption pour maintenance ou cas de force majeure. L'éditeur ne garantit pas l'absence d interruptions ni l'absence d'erreurs.",
          },
        ],
      },
      {
        title: "Article 3 — Usage du site",
        blocks: [
          { type: "p", text: "L'utilisateur s'interdit :" },
          {
            type: "list",
            items: [
              "d'utiliser le Site à des fins illicites ou contraires à l'ordre public ;",
              "de tenter d'accéder à des comptes, systèmes ou données qui ne lui appartiennent pas, ou de contourner les mesures de sécurité ;",
              "de perturber, surcharger ou empêcher le fonctionnement normal du Site ;",
              "de copier, extraire, modifier ou reproduire tout ou partie des contenus du Site sans autorisation écrite préalable ;",
              "d'injecter du code malveillant, des virus ou toute technologie nuisible.",
            ],
          },
        ],
      },
      {
        title: "Article 4 — Propriété intellectuelle",
        blocks: [
          {
            type: "p",
            text: "Les contenus du Site (textes, images, photographies, illustrations, identité visuelle, code source) demeurent la propriété exclusive de l'éditeur ou de ses partenaires, et sont protégés par le droit de la propriété intellectuelle.",
          },
          {
            type: "p",
            text: "Les photographies restent la propriété de leurs auteurs respectifs et sont référencées avec leur source. Toute reproduction non autorisée est interdite.",
          },
        ],
      },
      {
        title: "Article 5 — Liens externes",
        blocks: [
          {
            type: "p",
            text: "Le Site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de données personnelles. Un lien vers un site tiers ne vaut pas approbation.",
          },
        ],
      },
      {
        title: "Article 6 — Responsabilité",
        blocks: [
          {
            type: "p",
            text: "L'éditeur met en œuvre les moyens raisonnables pour assurer la disponibilité et la sécurité du Site, mais ne peut garantir un fonctionnement ininterrompu ni l'absence d'altération, de perte ou de suppression de données. L'utilisateur reconnaît que ces risques ne peuvent être entièrement exclus et en accepte la survenance.",
          },
          {
            type: "p",
            text: "L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au Site, de son utilisation ou de l'impossibilité d'y accéder, sauf faute lourde ou intentionnelle.",
          },
        ],
      },
      {
        title: "Article 7 — Données personnelles",
        blocks: [
          {
            type: "p",
            text: "Le traitement des données personnelles est décrit dans la politique de confidentialité, qui fait partie intégrante des présentes CGU.",
          },
        ],
      },
      {
        title: "Article 8 — Droit applicable et juridiction compétente",
        blocks: [
          {
            type: "p",
            text: "Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord, les tribunaux français seront seuls compétents.",
          },
          {
            type: "p",
            text: "Pour les professionnels, les règles de compétence protectionnelles prévues par le Code de procédure civile s'appliquent.",
          },
        ],
      },
      {
        title: "Article 9 — Modification des CGU",
        blocks: [
          {
            type: "p",
            text: "L'éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les CGU en vigueur sont celles consultables sur cette page. L'utilisateur est invité à les consulter régulièrement.",
          },
        ],
      },
    ],
  },

  en: {
    heading: "Terms of service",
    intro: `These terms of service (the "Terms") govern access to and use of the ${siteName} website (the "Site"), published by ${editorName}.`,
    updated,
    updatedLabel: "Last updated:",
    sections: [
      {
        title: "Article 1 — Purpose",
        blocks: [
          {
            type: "p",
            text: "The purpose of these Terms is to define the conditions for accessing and using the Site. Any navigation of the Site constitutes full and unreserved acceptance of these Terms.",
          },
        ],
      },
      {
        title: "Article 2 — Access to the site",
        blocks: [
          {
            type: "p",
            text: "The Site is freely accessible 24 hours a day, 7 days a week, except during maintenance or in the event of force majeure. The publisher does not guarantee the absence of interruptions or of errors.",
          },
        ],
      },
      {
        title: "Article 3 — Use of the site",
        blocks: [
          { type: "p", text: "Users shall not:" },
          {
            type: "list",
            items: [
              "use the Site for unlawful purposes or contrary to public order;",
              "attempt to access accounts, systems or data that do not belong to them, or to circumvent security measures;",
              "disrupt, overload or prevent the normal operation of the Site;",
              "copy, extract, modify or reproduce all or part of the Site's content without prior written authorisation;",
              "inject malicious code, viruses or any harmful technology.",
            ],
          },
        ],
      },
      {
        title: "Article 4 — Intellectual property",
        blocks: [
          {
            type: "p",
            text: "The Site's content (texts, images, photographs, illustrations, visual identity, source code) remains the exclusive property of the publisher or its partners, and is protected by intellectual property law.",
          },
          {
            type: "p",
            text: "Photographs remain the property of their respective authors and are referenced with their source. Any unauthorised reproduction is prohibited.",
          },
        ],
      },
      {
        title: "Article 5 — External links",
        blocks: [
          {
            type: "p",
            text: "The Site may contain links to third-party sites. The publisher exercises no control over these sites and disclaims all liability as to their content, availability or personal data practices. A link to a third-party site does not constitute approval.",
          },
        ],
      },
      {
        title: "Article 6 — Liability",
        blocks: [
          {
            type: "p",
            text: "The publisher uses reasonable means to ensure the availability and security of the Site, but cannot guarantee uninterrupted operation nor the absence of alteration, loss or deletion of data. Users acknowledge that these risks cannot be entirely excluded and accept them.",
          },
          {
            type: "p",
            text: "The publisher cannot be held liable for direct or indirect damages resulting from access to the Site, its use, or the inability to access it, except in the case of gross or intentional fault.",
          },
        ],
      },
      {
        title: "Article 7 — Personal data",
        blocks: [
          {
            type: "p",
            text: "The processing of personal data is described in the privacy policy, which forms an integral part of these Terms.",
          },
        ],
      },
      {
        title: "Article 8 — Applicable law and jurisdiction",
        blocks: [
          {
            type: "p",
            text: "These Terms are governed by French law. In the event of a dispute, an amicable solution will be sought before any legal action. Failing agreement, the French courts alone shall have jurisdiction.",
          },
          {
            type: "p",
            text: "For professionals, the rules of protective jurisdiction set out in the Code of Civil Procedure apply.",
          },
        ],
      },
      {
        title: "Article 9 — Changes to the Terms",
        blocks: [
          {
            type: "p",
            text: "The publisher reserves the right to amend these Terms at any time. The Terms in force are those available on this page. Users are invited to consult them regularly.",
          },
        ],
      },
    ],
  },

  es: {
    heading: "Condiciones generales de uso",
    intro: `Las presentes condiciones generales de uso (en adelante, las «CGU») rigen el acceso y la utilización del sitio ${siteName} (en adelante, «el Sitio»), editado por ${editorName}.`,
    updated,
    updatedLabel: "Última actualización:",
    sections: [
      {
        title: "Artículo 1 — Objeto",
        blocks: [
          {
            type: "p",
            text: "Las presentes CGU tienen por objeto definir las condiciones de acceso y utilización del Sitio. Toda navegación por el Sitio supone la aceptación plena e incondicional de las presentes CGU.",
          },
        ],
      },
      {
        title: "Artículo 2 — Acceso al sitio",
        blocks: [
          {
            type: "p",
            text: "El Sitio es accesible gratuitamente, las 24 horas y los 7 días de la semana, salvo interrupciones por mantenimiento o causa de fuerza mayor. El editor no garantiza la ausencia de interrupciones ni de errores.",
          },
        ],
      },
      {
        title: "Artículo 3 — Uso del sitio",
        blocks: [
          { type: "p", text: "El usuario se prohíbe:" },
          {
            type: "list",
            items: [
              "utilizar el Sitio con fines ilícitos o contrarios al orden público;",
              "intentar acceder a cuentas, sistemas o datos que no le pertenezcan, o eludir las medidas de seguridad;",
              "perturbar, sobrecargar o impedir el funcionamiento normal del Sitio;",
              "copiar, extraer, modificar o reproducir todo o parte de los contenidos del Sitio sin autorización escrita previa;",
              "inyectar código malicioso, virus o cualquier tecnología dañina.",
            ],
          },
        ],
      },
      {
        title: "Artículo 4 — Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "Los contenidos del Sitio (textos, imágenes, fotografías, ilustraciones, identidad visual, código fuente) siguen siendo propiedad exclusiva del editor o de sus socios, y están protegidos por la legislación de propiedad intelectual.",
          },
          {
            type: "p",
            text: "Las fotografías siguen perteneciendo a sus autores respectivos y se referencian con su fuente. Queda prohibida cualquier reproducción no autorizada.",
          },
        ],
      },
      {
        title: "Artículo 5 — Enlaces externos",
        blocks: [
          {
            type: "p",
            text: "El Sitio puede contener enlaces a sitios de terceros. El editor no ejerce ningún control sobre estos sitios y declina toda responsabilidad respecto de su contenido, su disponibilidad o sus prácticas en materia de datos personales. Un enlace a un sitio de terceros no implica aprobación.",
          },
        ],
      },
      {
        title: "Artículo 6 — Responsabilidad",
        blocks: [
          {
            type: "p",
            text: "El editor emplea los medios razonables para asegurar la disponibilidad y la seguridad del Sitio, pero no puede garantizar un funcionamiento ininterrumpido ni la ausencia de alteración, pérdida o supresión de datos. El usuario reconoce que esos riesgos no pueden excluirse por completo y acepta su consecuencia.",
          },
          {
            type: "p",
            text: "El editor no podrá ser responsable de los daños directos o indirectos derivados del acceso al Sitio, de su utilización o de la imposibilidad de acceder a él, salvo culpa grave o intencionada.",
          },
        ],
      },
      {
        title: "Artículo 7 — Datos personales",
        blocks: [
          {
            type: "p",
            text: "El tratamiento de datos personales se describe en la política de privacidad, que forma parte integrante de las presentes CGU.",
          },
        ],
      },
      {
        title: "Artículo 8 — Legislación aplicable y jurisdicción competente",
        blocks: [
          {
            type: "p",
            text: "Las presentes CGU se rigen por el derecho francés. En caso de litigio, se buscará una solución amistosa antes de toda acción judicial. A falta de acuerdo, los tribunales franceses serán los únicos competentes.",
          },
          {
            type: "p",
            text: "Para los profesionales, se aplican las reglas de competencia protectora previstas en el Código de Procedimiento Civil.",
          },
        ],
      },
      {
        title: "Artículo 9 — Modificación de las CGU",
        blocks: [
          {
            type: "p",
            text: "El editor se reserva el derecho de modificar las presentes CGU en cualquier momento. Las CGU vigentes son las consultables en esta página. Se invita al usuario a consultarlas con regularidad.",
          },
        ],
      },
    ],
  },

  de: {
    heading: "Nutzungsbedingungen",
    intro: `Die vorliegenden Nutzungsbedingungen (nachfolgend „AGB“) regeln den Zugang und die Nutzung der Website ${siteName} (nachfolgend „die Website“), herausgegeben von ${editorName}.`,
    updated,
    updatedLabel: "Zuletzt aktualisiert:",
    sections: [
      {
        title: "Artikel 1 — Gegenstand",
        blocks: [
          {
            type: "p",
            text: "Gegenstand dieser AGB ist die Bestimmung der Bedingungen für den Zugang und die Nutzung der Website. Jede Navigation auf der Website stellt die vollständige und uneingeschränkte Annahme dieser AGB dar.",
          },
        ],
      },
      {
        title: "Artikel 2 — Zugang zur Website",
        blocks: [
          {
            type: "p",
            text: "Die Website ist rund um die Uhr, 24 Stunden an 7 Tagen pro Woche, kostenlos zugänglich, ausgenommen Unterbrechungen zu Wartungszwecken oder höherer Gewalt. Der Herausgeber gewährleistet weder die Unterbrechungsfreiheit noch die Fehlerfreiheit.",
          },
        ],
      },
      {
        title: "Artikel 3 — Nutzung der Website",
        blocks: [
          { type: "p", text: "Den Nutzern ist es untersagt:" },
          {
            type: "list",
            items: [
              "die Website für rechtswidrige Zwecke oder entgegen der öffentlichen Ordnung zu nutzen;",
              "auf Konten, Systeme oder Daten zuzugreifen, die ihnen nicht gehören, oder Sicherheitsmaßnahmen zu umgehen;",
              "den regulären Betrieb der Website zu stören, sie zu überlasten oder zu verhindern;",
              "sämtliche oder einen Teil der Inhalte der Website ohne vorherige schriftliche Genehmigung zu kopieren, zu extrahieren, zu verändern oder zu vervielfältigen;",
              "Schadcode, Viren oder andere schädliche Technologien einzuschleusen.",
            ],
          },
        ],
      },
      {
        title: "Artikel 4 — Geistiges Eigentum",
        blocks: [
          {
            type: "p",
            text: "Die Inhalte der Website (Texte, Bilder, Fotografien, Illustrationen, visuelle Identität, Quellcode) bleiben ausschließliches Eigentum des Herausgebers oder seiner Partner und sind durch das Urheberrecht geschützt.",
          },
          {
            type: "p",
            text: "Fotografien bleiben Eigentum ihrer jeweiligen Urheber und werden mit ihrer Quelle angegeben. Jede unbefugte Vervielfältigung ist untersagt.",
          },
        ],
      },
      {
        title: "Artikel 5 — Externe Links",
        blocks: [
          {
            type: "p",
            text: "Die Website kann Links zu Drittanbieter-Websites enthalten. Der Herausgeber übt keine Kontrolle über diese Websites aus und lehnt jede Haftung für deren Inhalt, Verfügbarkeit oder deren Umgang mit personenbezogenen Daten ab. Ein Link auf eine Drittanbieter-Website stellt keine Genehmigung dar.",
          },
        ],
      },
      {
        title: "Artikel 6 — Haftung",
        blocks: [
          {
            type: "p",
            text: "Der Herausgeber unternimmt angemessene Anstrengungen, um Verfügbarkeit und Sicherheit der Website sicherzustellen, kann jedoch weder einen unterbrechungsfreien Betrieb noch die Freiheit von Veränderung, Verlust oder Löschung von Daten garantieren. Die Nutzer erkennen an, dass diese Risiken nicht vollständig ausgeschlossen werden können, und übernehmen sie.",
          },
          {
            type: "p",
            text: "Der Herausgeber haftet nicht für direkte oder indirekte Schäden aus dem Zugang zur Website, ihrer Nutzung oder der Unmöglichkeit des Zugangs, es sei denn bei grobem oder vorsätzlichem Verschulden.",
          },
        ],
      },
      {
        title: "Artikel 7 — Personenbezogene Daten",
        blocks: [
          {
            type: "p",
            text: "Die Verarbeitung personenbezogener Daten ist in der Datenschutzerklärung beschrieben, die Bestandteil dieser AGB ist.",
          },
        ],
      },
      {
        title: "Artikel 8 — Anwendbares Recht und Gerichtsstand",
        blocks: [
          {
            type: "p",
            text: "Diese AGB unterliegen französischem Recht. Im Streitfall wird vor jeder Klage eine einvernehmliche Lösung angestrebt. Scheitert diese, sind ausschließlich die französischen Gerichte zuständig.",
          },
          {
            type: "p",
            text: "Für Berufstätige gelten die Regeln des Schutzgerichtsstands aus der Zivilprozessordnung.",
          },
        ],
      },
      {
        title: "Artikel 9 — Änderung der AGB",
        blocks: [
          {
            type: "p",
            text: "Der Herausgeber behält sich vor, diese AGB jederzeit zu ändern. Es gelten die auf dieser Seite einsehbaren AGB. Den Nutzern wird empfohlen, sie regelmäßig zu lesen.",
          },
        ],
      },
    ],
  },

  it: {
    heading: "Condizioni d'uso",
    intro: `Le presenti condizioni generali d'uso (di seguito «CGU») regolano l'accesso e l'utilizzo del sito ${siteName} (di seguito «il Sito»), a cura di ${editorName}.`,
    updated,
    updatedLabel: "Ultimo aggiornamento:",
    sections: [
      {
        title: "Articolo 1 — Oggetto",
        blocks: [
          {
            type: "p",
            text: "Le presenti CGU hanno lo scopo di definire le condizioni di accesso e di utilizzo del Sito. Qualsiasi navigazione sul Sito costituisce accettazione piena e incondizionata delle presenti CGU.",
          },
        ],
      },
      {
        title: "Articolo 2 — Accesso al sito",
        blocks: [
          {
            type: "p",
            text: "Il Sito è accessibile gratuitamente, 24 ore su 24 e 7 giorni su 7, salvo interruzioni per manutenzione o forza maggiore. L'editore non garantisce l'assenza di interruzioni né di errori.",
          },
        ],
      },
      {
        title: "Articolo 3 — Uso del sito",
        blocks: [
          { type: "p", text: "L'utente non può:" },
          {
            type: "list",
            items: [
              "utilizzare il Sito per finalità illecite o contrarie all'ordine pubblico;",
              "tentare di accedere ad account, sistemi o dati che non gli appartengono, né di aggirare le misure di sicurezza;",
              "disturbare, sovraccaricare o impedire il normale funzionamento del Sito;",
              "copiare, estrarre, modificare o riprodurre tutto o parte dei contenuti del Sito senza autorizzazione scritta preventiva;",
              "iniettare codice maligno, virus o qualsiasi tecnologia dannosa.",
            ],
          },
        ],
      },
      {
        title: "Articolo 4 — Proprietà intellettuale",
        blocks: [
          {
            type: "p",
            text: "I contenuti del Sito (testi, immagini, fotografie, illustrazioni, identità visiva, codice sorgente) restano proprietà esclusiva dell'editore o dei suoi partner e sono protetti dalla normativa sul diritto d'autore.",
          },
          {
            type: "p",
            text: "Le fotografie restano proprietà dei rispettivi autori e sono citate con la loro fonte. È vietata qualsiasi riproduzione non autorizzata.",
          },
        ],
      },
      {
        title: "Articolo 5 — Link esterni",
        blocks: [
          {
            type: "p",
            text: "Il Sito può contenere link a siti di terzi. L'editore non esercita alcun controllo su questi siti e declina ogni responsabilità per i loro contenuti, la loro disponibilità o le loro pratiche in materia di dati personali. Un link a un sito di terzi non costituisce approvazione.",
          },
        ],
      },
      {
        title: "Articolo 6 — Responsabilità",
        blocks: [
          {
            type: "p",
            text: "L'editore adotta i mezzi ragionevoli per assicurare la disponibilità e la sicurezza del Sito, ma non può garantire un funzionamento ininterrotto né l'assenza di alterazione, perdita o cancellazione di dati. L'utente riconosce che questi rischi non possono essere completamente esclusi e ne accetta la conseguenza.",
          },
          {
            type: "p",
            text: "L'editore non può essere ritenuto responsabile dei danni diretti o indiretti derivanti dall'accesso al Sito, dal suo utilizzo o dall'impossibilità di accedervi, salvo colpa grave o dolosa.",
          },
        ],
      },
      {
        title: "Articolo 7 — Dati personali",
        blocks: [
          {
            type: "p",
            text: "Il trattamento dei dati personali è descritto nell'informativa sulla privacy, che costituisce parte integrante delle presenti CGU.",
          },
        ],
      },
      {
        title: "Articolo 8 — Diritto applicabile e foro competente",
        blocks: [
          {
            type: "p",
            text: "Le presenti CGU sono soggette al diritto francese. In caso di controversia, si cercherà una soluzione amichevole prima di qualsiasi azione giudiziaria. In mancanza di accordo, i tribunali francesi saranno i soli competenti.",
          },
          {
            type: "p",
            text: "Per i professionisti si applicano le regole di competenza protettiva previste dal Codice di procedura civile.",
          },
        ],
      },
      {
        title: "Articolo 9 — Modifica delle CGU",
        blocks: [
          {
            type: "p",
            text: "L'editore si riserva il diritto di modificare le presenti CGU in qualsiasi momento. Le CGU vigenti sono quelle consultabili su questa pagina. Si invita l'utente a leggerle regolarmente.",
          },
        ],
      },
    ],
  },

  pt: {
    heading: "Condições gerais de utilização",
    intro: `As presentes condições gerais de utilização (a seguir, as «CGU») regem o acesso e a utilização do sítio ${siteName} (a seguir, «o Sítio»), editado por ${editorName}.`,
    updated,
    updatedLabel: "Última actualização:",
    sections: [
      {
        title: "Artigo 1 — Objecto",
        blocks: [
          {
            type: "p",
            text: "As presentes CGU têm por objectivo definir as condições de acesso e de utilização do Sítio. Qualquer navegação no Sítio constitui aceitação plena e integral das presentes CGU.",
          },
        ],
      },
      {
        title: "Artigo 2 — Acesso ao sítio",
        blocks: [
          {
            type: "p",
            text: "O Sítio é acessível gratuitamente, 24 horas por dia e 7 dias por semana, salvo interrupções por manutenção ou caso de força maior. O editor não garante a ausência de interrupções nem de erros.",
          },
        ],
      },
      {
        title: "Artigo 3 — Utilização do sítio",
        blocks: [
          { type: "p", text: "O utilizador não pode:" },
          {
            type: "list",
            items: [
              "utilizar o Sítio para fins ilícitos ou contrários à ordem pública;",
              "tentar aceder a contas, sistemas ou dados que não lhe pertencem, nem contornar as medidas de segurança;",
              "perturbar, sobrecarregar ou impedir o funcionamento normal do Sítio;",
              "copiar, extrair, modificar ou reproduzir todo ou parte dos conteúdos do Sítio sem autorização escrita prévia;",
              "injectar código maligno, vírus ou qualquer tecnologia prejudicial.",
            ],
          },
        ],
      },
      {
        title: "Artigo 4 — Propriedade intelectual",
        blocks: [
          {
            type: "p",
            text: "Os conteúdos do Sítio (textos, imagens, fotografias, ilustrações, identidade visual, código-fonte) permanecem propriedade exclusiva do editor ou dos seus parceiros, e estão protegidos pela legislação de propriedade intelectual.",
          },
          {
            type: "p",
            text: "As fotografias continuam a pertencer aos seus respectivos autores e são referenciadas com a sua fonte. É proibida qualquer reprodução não autorizada.",
          },
        ],
      },
      {
        title: "Artigo 5 — Ligações externas",
        blocks: [
          {
            type: "p",
            text: "O Sítio pode conter ligações para sítios de terceiros. O editor não exerce qualquer controlo sobre esses sítios e declina toda a responsabilidade quanto ao seu conteúdo, disponibilidade ou práticas em matéria de dados pessoais. Uma ligação para um sítio de terceiro não constitui aprovação.",
          },
        ],
      },
      {
        title: "Artigo 6 — Responsabilidade",
        blocks: [
          {
            type: "p",
            text: "O editor emprega os meios razoáveis para assegurar a disponibilidade e a segurança do Sítio, mas não pode garantir um funcionamento ininterrupto nem a ausência de alteração, perda ou supressão de dados. O utilizador reconhece que esses riscos não podem ser totalmente excluídos e aceita a sua consequência.",
          },
          {
            type: "p",
            text: "O editor não pode ser responsabilizado por danos directos ou indirectos decorrentes do acesso ao Sítio, da sua utilização ou da impossibilidade de lhe aceder, salvo culpa grave ou intencional.",
          },
        ],
      },
      {
        title: "Artigo 7 — Dados pessoais",
        blocks: [
          {
            type: "p",
            text: "O tratamento de dados pessoais está descrito na política de privacidade, que faz parte integrante das presentes CGU.",
          },
        ],
      },
      {
        title: "Artigo 8 — Direito aplicável e foro competente",
        blocks: [
          {
            type: "p",
            text: "As presentes CGU são regidas pelo direito francês. Em caso de litígio, procurar-se-á uma solução amigável antes de qualquer acção judicial. Não havendo acordo, os tribunais franceses serão os únicos competentes.",
          },
          {
            type: "p",
            text: "Para os profissionais, aplicam-se as regras de competência protectiva previstas no Código de Processo Civil.",
          },
        ],
      },
      {
        title: "Artigo 9 — Alteração das CGU",
        blocks: [
          {
            type: "p",
            text: "O editor reserva-se o direito de alterar as presentes CGU a qualquer momento. As CGU em vigor são as consultáveis nesta página. O utilizador é convidado a consultá-las regularmente.",
          },
        ],
      },
    ],
  },
};

export const termsPrivacyLink = email;
