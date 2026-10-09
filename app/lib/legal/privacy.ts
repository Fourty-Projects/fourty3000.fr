import type { Locale } from "../i18n";
import type { LegalPage } from "./types";

const email = "fourty3000@gmail.com";
const updated = "07/10/2026";

export const privacyPolicies: Record<Locale, LegalPage> = {
  fr: {
    heading: "Politique de confidentialité",
    intro: "La présente politique décrit la manière dont les données personnelles sont traitées dans le cadre de la consultation de ce site. Elle est établie conformément au Règlement (UE) 2016/679 (RGPD) et à la loi française n° 78-17 du 6 janvier 1978 modifiée.",
    updated,
    updatedLabel: "Dernière mise à jour :",
    sections: [
      {
        title: "1. Responsable du traitement",
        blocks: [
          {
            type: "p",
            text: `Le responsable du traitement des données est Fourty3000, joignable à l'adresse ${email}.`,
          },
        ],
      },
      {
        title: "2. Principes appliqués",
        blocks: [
          {
            type: "p",
            text: "Le site ne propose ni inscription, ni compte utilisateur, ni formulaire de contact. Aucune donnée ne vous est demandée à la visite.",
          },
          {
            type: "p",
            text: "Le site fait néanmoins appel à des services tiers qui peuvent traiter des données techniques vous concernant : mesure d'audience et messagerie de discussion. Ces traitements sont décrits ci-dessous.",
          },
        ],
      },
      {
        title: "3. Données traitées et finalités",
        blocks: [
          {
            type: "p",
            text: "Mesure d'audience. Le site utilise Vercel Analytics et Vercel Speed Insights, qui collectent des données techniques agrégées : pages consultées, performance de chargement, adresse IP tronquée, agent utilisateur, pays ou région. Ces outils ont vocation à produire des statistiques de trafic sans identifier les personnes.",
          },
          {
            type: "list",
            items: [
              "Base légale : intérêt légitime de l'éditeur à comprendre l'utilisation du site et à l'améliorer.",
              "Destinataire : Vercel Inc.",
              "Durée : durée limitée choisie par le prestataire, généralement inférieure à quatorze mois, puis suppression ou anonymisation.",
            ],
          },
          {
            type: "p",
            text: "Messagerie de discussion (Brevo Conversations). Le site affiche un widget de discussion instantanée fourni par Brevo (anciennement Sendinblue), société française de marketing email. Ce widget permet d'entrer en contact avec l'éditeur sans passer par un formulaire.",
          },
          {
            type: "p",
            text: "Lorsque vous ouvrez une conversation, les données que vous saisissez (message, et le cas échéant adresse électronique ou nom que vous indiquez) sont transmises à Brevo, qui les héberge. Le widget peut également déposer un identifiant technique dans votre navigateur afin de conserver votre session de discussion.",
          },
          {
            type: "list",
            items: [
              "Base légale : consentement, donné en ouvrant volontairement une conversation avec le widget.",
              "Destinataire : Brevo.",
              "Durée : déterminée par Brevo selon ses conditions d'hébergement. Vous pouvez demander leur suppression à tout moment en exerçant votre droit à l'effacement, ou en supprimant les conversations depuis l'interface du widget.",
            ],
          },
          {
            type: "p",
            text: "Aucune analyse comportementale ni décision automatisée n'est réalisée à partir de ces données, et elles ne font l'objet d'aucune cession à des tiers à des fins commerciales.",
          },
          {
            type: "p",
            text: "Hébergement. Le site est hébergé par Amber Hosting, qui assure la conservation des journaux de connexion techniques nécessaires à la sécurité du service.",
          },
        ],
      },
      {
        title: "4. Vos droits",
        blocks: [
          { type: "p", text: "Vous disposez des droits suivants :" },
          {
            type: "list",
            items: [
              "d'accès à vos données ;",
              "de rectification ;",
              "d'effacement (droit à l'oubli) ;",
              "de limitation du traitement ;",
              "d'opposition ;",
              "de portabilité ;",
              "de retirer votre consentement à tout moment.",
            ],
          },
          {
            type: "p",
            text: `Pour exercer ces droits, adressez une demande à ${email}. Une réponse sera apportée dans un délai d'un mois ou plus, selon la disponibilité de l'éditeur, ainsi que de la complexité de la demande. Vous pouvez également introduire une réclamation auprès de la CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — ou via le formulaire de réclamation en ligne.`,
          },
        ],
      },
      {
        title: "5. Sécurité",
        blocks: [
          {
            type: "p",
            text: "L'éditeur met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données contre la perte, l'accès non autorisé et la divulgation. Aucun système n'étant cependant infaillible, l'éditeur ne peut garantir une sécurité absolue.",
          },
        ],
      },
      {
        title: "6. Traceurs et consentement",
        blocks: [
          {
            type: "p",
            text: "Les traceurs utilisés pour la mesure d'audience sont exemptés de consentement lorsqu'ils respectent les conditions posées par la CNIL, notamment l'absence de recoupement avec d'autres données et une conservation limitée à la durée de la session.",
          },
          {
            type: "p",
            text: "Le widget de discussion, en revanche, permet un échange entre l'éditeur et le visiteur. Il ne peut pas être assimilé à un simple traceur d'audience. Vous pouvez refuser de l'utiliser sans que cela ne gêne la consultation du site.",
          },
        ],
      },
      {
        title: "7. Modification de la politique",
        blocks: [
          {
            type: "p",
            text: "Cette politique peut être mise à jour. La date de dernière mise à jour figure en haut de page.",
          },
        ],
      },
    ],
  },

  en: {
    heading: "Privacy policy",
    intro: "This policy describes how personal data is processed when browsing this site. It is drawn up in accordance with Regulation (EU) 2016/679 (GDPR) and French law no. 78-17 of 6 January 1978 as amended.",
    updated,
    updatedLabel: "Last updated:",
    sections: [
      {
        title: "1. Data controller",
        blocks: [
          {
            type: "p",
            text: `The data controller is Fourty3000, reachable at ${email}.`,
          },
        ],
      },
      {
        title: "2. Principles applied",
        blocks: [
          {
            type: "p",
            text: "The site offers no registration, user account or contact form. No data is requested from you when you visit.",
          },
          {
            type: "p",
            text: "The site nevertheless uses third-party services that may process technical data about you: audience measurement and instant messaging. These processes are described below.",
          },
        ],
      },
      {
        title: "3. Data processed and purposes",
        blocks: [
          {
            type: "p",
            text: "Audience measurement. The site uses Vercel Analytics and Vercel Speed Insights, which collect aggregated technical data: pages viewed, loading performance, truncated IP address, user agent, country or region. These tools are intended to produce traffic statistics without identifying individuals.",
          },
          {
            type: "list",
            items: [
              "Legal basis: the publisher's legitimate interest in understanding use of the site and improving it.",
              "Recipient: Vercel Inc.",
              "Retention: a limited period chosen by the provider, generally under fourteen months, then deletion or anonymisation.",
            ],
          },
          {
            type: "p",
            text: "Instant messaging (Brevo Conversations). The site displays an instant messaging widget provided by Brevo (formerly Sendinblue), a French email marketing company. The widget lets you contact the publisher without using a form.",
          },
          {
            type: "p",
            text: "When you open a conversation, the data you enter (your message, and any email address or name you provide) is transmitted to Brevo, which hosts it. The widget may also place a technical identifier in your browser in order to keep your conversation session.",
          },
          {
            type: "list",
            items: [
              "Legal basis: consent, given by voluntarily opening a conversation with the widget.",
              "Recipient: Brevo.",
              "Retention: determined by Brevo under its hosting terms. You can request deletion at any time by exercising your right to erasure, or by deleting conversations from the widget interface.",
            ],
          },
          {
            type: "p",
            text: "No behavioural analysis or automated decision-making is carried out from this data, and it is not passed on to third parties for commercial purposes.",
          },
          {
            type: "p",
            text: "Hosting. The site is hosted by Amber Hosting, which keeps the technical connection logs needed for service security.",
          },
        ],
      },
      {
        title: "4. Your rights",
        blocks: [
          { type: "p", text: "You have the following rights:" },
          {
            type: "list",
            items: [
              "of access to your data;",
              "of rectification;",
              "of erasure (right to be forgotten);",
              "of restriction of processing;",
              "of objection;",
              "of portability;",
              "to withdraw your consent at any time.",
            ],
          },
          {
            type: "p",
            text: `To exercise these rights, send a request to ${email}. A reply will be given within one month or longer, depending on the publisher's availability and the complexity of the request. You may also lodge a complaint with the CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — or via its online complaint form.`,
          },
        ],
      },
      {
        title: "5. Security",
        blocks: [
          {
            type: "p",
            text: "The publisher implements reasonable technical and organisational measures to protect data against loss, unauthorised access and disclosure. As no system is infallible, however, the publisher cannot guarantee absolute security.",
          },
        ],
      },
      {
        title: "6. Trackers and consent",
        blocks: [
          {
            type: "p",
            text: "Trackers used for audience measurement are exempt from consent where they comply with the conditions set by the CNIL, notably the absence of matching with other data and retention limited to the session duration.",
          },
          {
            type: "p",
            text: "The messaging widget, on the other hand, enables an exchange between the publisher and the visitor. It cannot be treated as a simple audience tracker. You may decline to use it without in any way hindering access to the site.",
          },
        ],
      },
      {
        title: "7. Changes to this policy",
        blocks: [
          {
            type: "p",
            text: "This policy may be updated. The last update date appears at the top of the page.",
          },
        ],
      },
    ],
  },

  es: {
    heading: "Política de privacidad",
    intro: "La presente política describe cómo se tratan los datos personales al consultar este sitio. Se elaborate conforme al Reglamento (UE) 2016/679 (RGPD) y a la ley francesa n.º 78-17 de 6 de enero de 1978, modificada.",
    updated,
    updatedLabel: "Última actualización:",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        blocks: [
          {
            type: "p",
            text: `El responsable del tratamiento es Fourty3000, accesible en ${email}.`,
          },
        ],
      },
      {
        title: "2. Principios aplicados",
        blocks: [
          {
            type: "p",
            text: "El sitio no ofrece registro, cuenta de usuario ni formulario de contacto. No se le solicita ningún dato durante la visita.",
          },
          {
            type: "p",
            text: "No obstante, el sitio recurre a servicios de terceros que pueden tratar datos técnicos sobre usted: medición de audiencia y mensajería instantánea. Estos tratamientos se describen a continuación.",
          },
        ],
      },
      {
        title: "3. Datos tratados y finalidades",
        blocks: [
          {
            type: "p",
            text: "Medición de audiencia. El sitio utiliza Vercel Analytics y Vercel Speed Insights, que recogen datos técnicos agregados: páginas visitadas, rendimiento de carga, dirección IP truncada, agente de usuario, país o región. Estas herramientas sirven para producir estadísticas de tráfico sin identificar a las personas.",
          },
          {
            type: "list",
            items: [
              "Base jurídica: interés legítimo del editor para comprender el uso del sitio y mejorarlo.",
              "Destinatario: Vercel Inc.",
              "Conservación: un plazo limitado elegido por el prestador, normalmente inferior a catorce meses, y posterior supresión o anonimización.",
            ],
          },
          {
            type: "p",
            text: "Mensajería instantánea (Brevo Conversations). El sitio muestra un widget de mensajería instantánea proporcionado por Brevo (antes Sendinblue), empresa francesa de marketing por correo. El widget permite ponerse en contacto con el editor sin usar un formulario.",
          },
          {
            type: "p",
            text: "Cuando abre una conversación, los datos que introduce (el mensaje y, en su caso, la dirección de correo o el nombre que indique) se transmiten a Brevo, que los aloja. El widget también puede depositar un identificador técnico en su navegador para conservar su sesión de conversación.",
          },
          {
            type: "list",
            items: [
              "Base jurídica: consentimiento, otorgado al abrir voluntariamente una conversación con el widget.",
              "Destinatario: Brevo.",
              "Conservación: la determinarán Brevo según sus condiciones de alojamiento. Puede solicitar su supresión en cualquier momento ejerciendo su derecho de supresión, o eliminando las conversaciones desde la interfaz del widget.",
            ],
          },
          {
            type: "p",
            text: "No se realiza ningún análisis de comportamiento ni decisión automatizada a partir de estos datos, y no se ceden a terceros con fines comerciales.",
          },
          {
            type: "p",
            text: "Alojamiento. El sitio está alojado por Amber Hosting, que conserva los registros técnicos de conexión necesarios para la seguridad del servicio.",
          },
        ],
      },
      {
        title: "4. Sus derechos",
        blocks: [
          { type: "p", text: "Usted dispone de los siguientes derechos:" },
          {
            type: "list",
            items: [
              "de acceso a sus datos;",
              "de rectificación;",
              "de supresión (derecho al olvido);",
              "de limitación del tratamiento;",
              "de oposición;",
              "de portabilidad;",
              "a retirar su consentimiento en cualquier momento.",
            ],
          },
          {
            type: "p",
            text: `Para ejercer estos derechos, dirija una solicitud a ${email}. Se responderá en un plazo de un mes o más, según la disponibilidad del editor y la complejidad de la solicitud. También puede presentar una reclamación ante la CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — o a través de su formulario de reclamaciones en línea.`,
          },
        ],
      },
      {
        title: "5. Seguridad",
        blocks: [
          {
            type: "p",
            text: "El editor implanta medidas técnicas y organizativas razonables para proteger los datos frente a la pérdida, el acceso no autorizado y la divulgación. No obstante, como ningún sistema es infalible, el editor no puede garantizar una seguridad absoluta.",
          },
        ],
      },
      {
        title: "6. Rastreadores y consentimiento",
        blocks: [
          {
            type: "p",
            text: "Los rastreadores utilizados para la medición de audiencia están exentos de consentimiento cuando cumplen las condiciones establecidas por la CNIL, en particular la ausencia de cruce con otros datos y una conservación limitada a la duración de la sesión.",
          },
          {
            type: "p",
            text: "El widget de mensajería, en cambio, permite un intercambio entre el editor y el visitante. No puede asimilarse a un simple rastreador de audiencia. Puede rechazarlo sin que ello entorpezca la consulta del sitio.",
          },
        ],
      },
      {
        title: "7. Modificación de la política",
        blocks: [
          {
            type: "p",
            text: "Esta política puede actualizarse. La fecha de última actualización figura al principio de la página.",
          },
        ],
      },
    ],
  },

  de: {
    heading: "Datenschutzerklärung",
    intro: "Diese Erklärung beschreibt, wie personenbezogene Daten beim Besuch dieser Website verarbeitet werden. Sie folgt der Verordnung (EU) 2016/679 (DSGVO) sowie dem französischen Gesetz Nr. 78-17 vom 6. Januar 1978 in seiner geänderten Fassung.",
    updated,
    updatedLabel: "Zuletzt aktualisiert:",
    sections: [
      {
        title: "1. Verantwortlicher für die Verarbeitung",
        blocks: [
          {
            type: "p",
            text: `Verantwortlicher für die Datenverarbeitung ist Fourty3000, erreichbar unter ${email}.`,
          },
        ],
      },
      {
        title: "2. Angewandte Grundsätze",
        blocks: [
          {
            type: "p",
            text: "Die Website bietet weder Registrierung noch Benutzerkonto noch Kontaktformular an. Beim Besuch werden Sie nicht nach Daten gefragt.",
          },
          {
            type: "p",
            text: "Die Website nutzt jedoch Dienste Dritter, die technische Daten über Sie verarbeiten können: Reichweitenmessung und Instant Messaging. Diese Verarbeitungen werden nachstehend beschrieben.",
          },
        ],
      },
      {
        title: "3. Verarbeitete Daten und Zwecke",
        blocks: [
          {
            type: "p",
            text: "Reichweitenmessung. Die Website nutzt Vercel Analytics und Vercel Speed Insights, die aggregierte technische Daten erheben: aufgerufene Seiten, Ladeleistung, gekürzte IP-Adresse, User-Agent, Land oder Region. Diese Werkzeuge sollen Verkehrsstatistiken erzeugen, ohne Personen zu identifizieren.",
          },
          {
            type: "list",
            items: [
              "Rechtsgrundlage: berechtigtes Interesse des Herausgebers, die Nutzung der Website zu verstehen und zu verbessern.",
              "Empfänger: Vercel Inc.",
              "Speicherdauer: ein vom Dienstleister gewählter begrenzter Zeitraum, in der Regel unter vierzehn Monaten, anschließend Löschung oder Anonymisierung.",
            ],
          },
          {
            type: "p",
            text: "Instant Messaging (Brevo Conversations). Die Website zeigt ein Instant-Messaging-Widget von Brevo (früher Sendinblue), einem französischen Unternehmen für E-Mail-Marketing. Mit dem Widget können Sie den Herausgeber ohne Formular kontaktieren.",
          },
          {
            type: "p",
            text: "Wenn Sie eine Unterhaltung eröffnen, werden die von Ihnen eingegebenen Daten (Ihre Nachricht und gegebenenfalls die von Ihnen angegebene E-Mail-Adresse oder Ihr Name) an Brevo übermittelt, das sie hostet. Das Widget kann außerdem eine technische Kennung in Ihrem Browser ablegen, um Ihre Unterhaltungssitzung zu erhalten.",
          },
          {
            type: "list",
            items: [
              "Rechtsgrundlage: Einwilligung, erteilt durch freiwilliges Eröffnen einer Unterhaltung mit dem Widget.",
              "Empfänger: Brevo.",
              "Speicherdauer: nach den Hostingbedingungen von Brevo. Sie können deren Löschung jederzeit durch Ausübung Ihres Rechts auf Löschung verlangen oder durch Löschen der Unterhaltungen in der Widget-Oberfläche.",
            ],
          },
          {
            type: "p",
            text: "Aus diesen Daten wird kein Verhaltensprofiling und keine automatisierte Entscheidungsfindung vorgenommen, und sie werden nicht zu kommerziellen Zwecken an Dritte abgegeben.",
          },
          {
            type: "p",
            text: "Hosting. Die Website wird von Amber Hosting gehostet, das die für die Sicherheit des Dienstes erforderlichen technischen Verbindungsprotokolle aufbewahrt.",
          },
        ],
      },
      {
        title: "4. Ihre Rechte",
        blocks: [
          { type: "p", text: "Sie haben die folgenden Rechte:" },
          {
            type: "list",
            items: [
              "Auskunft über Ihre Daten;",
              "Berichtigung;",
              "Löschung (Recht auf Vergessenwerden);",
              "Einschränkung der Verarbeitung;",
              "Widerspruch;",
              "Datenübertragbarkeit;",
              "Widerruf Ihrer Einwilligung jederzeit.",
            ],
          },
          {
            type: "p",
            text: `Zur Ausübung dieser Rechte richten Sie eine Anfrage an ${email}. Eine Antwort erfolgt innerhalb eines Monats oder später, je nach Verfügbarkeit des Herausgebers und Komplexität der Anfrage. Sie können außerdem eine Beschwerde bei der CNIL einreichen — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — oder über deren Online-Beschwerdeformular.`,
          },
        ],
      },
      {
        title: "5. Sicherheit",
        blocks: [
          {
            type: "p",
            text: "Der Herausgeber trifft angemessene technische und organisatorische Maßnahmen, um Daten vor Verlust, unbefugtem Zugriff und Offenlegung zu schützen. Da kein System fehlerfrei ist, kann der Herausgeber jedoch keine absolute Sicherheit garantieren.",
          },
        ],
      },
      {
        title: "6. Tracker und Einwilligung",
        blocks: [
          {
            type: "p",
            text: "Tracker zur Reichweitenmessung sind von der Einwilligung befreit, wenn sie die von der CNIL festgelegten Bedingungen erfüllen, insbesondere keine Verknüpfung mit anderen Daten und eine Speicherung nur für die Dauer der Sitzung.",
          },
          {
            type: "p",
            text: "Das Messaging-Widget ermöglicht dagegen einen Austausch zwischen Herausgeber und Besucher. Es lässt sich nicht mit einem einfachen Reichweitenmess-Tracker gleichsetzen. Sie können es ablehnen, ohne dass dadurch der Besuch der Website beeinträchtigt wird.",
          },
        ],
      },
      {
        title: "7. Änderung der Erklärung",
        blocks: [
          {
            type: "p",
            text: "Diese Erklärung kann aktualisiert werden. Das Datum der letzten Aktualisierung steht oben auf der Seite.",
          },
        ],
      },
    ],
  },

  it: {
    heading: "Informativa sulla privacy",
    intro: "La presente informativa descrive il modo in cui i dati personali vengono trattati durante la consultazione di questo sito. È redatta conformemente al Regolamento (UE) 2016/679 (GDPR) e alla legge francese n. 78-17 del 6 gennaio 1978, come modificata.",
    updated,
    updatedLabel: "Ultimo aggiornamento:",
    sections: [
      {
        title: "1. Titolare del trattamento",
        blocks: [
          {
            type: "p",
            text: `Il titolare del trattamento è Fourty3000, raggiungibile all'indirizzo ${email}.`,
          },
        ],
      },
      {
        title: "2. Principi applicati",
        blocks: [
          {
            type: "p",
            text: "Il sito non offre registrazione, account utente né moduli di contatto. Durante la visita non vi vengono richiesti dati.",
          },
          {
            type: "p",
            text: "Il sito fa tuttavia ricorso a servizi di terzi che possono trattare dati tecnici riguardanti voi: misurazione del pubblico e messaggistica istantanea. Tali trattamenti sono descritti di seguito.",
          },
        ],
      },
      {
        title: "3. Dati trattati e finalità",
        blocks: [
          {
            type: "p",
            text: "Misurazione del pubblico. Il sito utilizza Vercel Analytics e Vercel Speed Insights, che raccolgono dati tecnici aggregati: pagine consultate, prestazioni di caricamento, indirizzo IP troncato, user agent, paese o regione. Questi strumenti servono a produrre statistiche di traffico senza identificare le persone.",
          },
          {
            type: "list",
            items: [
              "Base giuridica: legittimo interesse dell'editore a comprendere l'uso del sito e a migliorarlo.",
              "Destinatario: Vercel Inc.",
              "Conservazione: un periodo limitato scelto dal fornitore, in genere inferiore a quattordici mesi, poi cancellazione o anonimizzazione.",
            ],
          },
          {
            type: "p",
            text: "Messaggistica istantanea (Brevo Conversations). Il sito mostra un widget di messaggistica istantanea fornito da Brevo (in passato Sendinblue), azienda francese di marketing via email. Il widget consente di contattare l'editore senza ricorrere a un modulo.",
          },
          {
            type: "p",
            text: "Quando aprite una conversazione, i dati che inserite (il messaggio e, se indicati, l'indirizzo email o il nome) vengono trasmessi a Brevo, che li ospita. Il widget può inoltre depositare un identificatore tecnico nel vostro browser per conservare la sessione di conversazione.",
          },
          {
            type: "list",
            items: [
              "Base giuridica: consenso, rilasciato aprendo volontariamente una conversazione con il widget.",
              "Destinatario: Brevo.",
              "Conservazione: secondo le condizioni di hosting di Brevo. Potete chiederne la cancellazione in qualsiasi momento esercitando il diritto alla cancellazione, oppure eliminando le conversazioni dall'interfaccia del widget.",
            ],
          },
          {
            type: "p",
            text: "Da questi dati non viene effettuata alcuna analisi comportamentale né decisione automatizzata, e non sono ceduti a terzi per finalità commerciali.",
          },
          {
            type: "p",
            text: "Hosting. Il sito è ospitato da Amber Hosting, che conserva i registri tecnici di connessione necessari alla sicurezza del servizio.",
          },
        ],
      },
      {
        title: "4. I vostri diritti",
        blocks: [
          { type: "p", text: "Avete i seguenti diritti:" },
          {
            type: "list",
            items: [
              "di accesso ai vostri dati;",
              "di rettifica;",
              "di cancellazione (diritto all'oblio);",
              "di limitazione del trattamento;",
              "di opposizione;",
              "di portabilità;",
              "di revocare il consenso in qualsiasi momento.",
            ],
          },
          {
            type: "p",
            text: `Per esercitare questi diritti, inviate una richiesta a ${email}. La risposta sarà fornita entro un mese o più, secondo la disponibilità dell'editore e la complessità della richiesta. Potete inoltre presentare un reclamo al CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — o tramite il suo modulo di reclamo online.`,
          },
        ],
      },
      {
        title: "5. Sicurezza",
        blocks: [
          {
            type: "p",
            text: "L'editore adotta misure tecniche e organizzative ragionevoli per proteggere i dati da perdita, accesso non autorizzato e divulgazione. Tuttavia, poiché nessun sistema è infallibile, l'editore non può garantire una sicurezza assoluta.",
          },
        ],
      },
      {
        title: "6. Tracciatori e consenso",
        blocks: [
          {
            type: "p",
            text: "I tracciatori utilizzati per la misurazione del pubblico sono esenti dal consenso quando rispettano le condizioni poste dal CNIL, in particolare l'assenza di collegamento con altri dati e una conservazione limitata alla durata della sessione.",
          },
          {
            type: "p",
            text: "Il widget di messaggistica, invece, consente uno scambio tra l'editore e il visitatore. Non può essere assimilato a un semplice tracciatore di pubblico. Potete rifiutarlo senza che ciò ostacoli la consultazione del sito.",
          },
        ],
      },
      {
        title: "7. Modifica dell'informativa",
        blocks: [
          {
            type: "p",
            text: "La presente informativa può essere aggiornata. La data dell'ultimo aggiornamento compare in cima alla pagina.",
          },
        ],
      },
    ],
  },

  pt: {
    heading: "Política de privacidade",
    intro: "A presente política descreve a forma como os dados pessoais são tratados na consulta deste sítio. Foi elaborada em conformidade com o Regulamento (UE) 2016/679 (RGPD) e com a lei francesa n.º 78-17, de 6 de Janeiro de 1978, na redacção alterada.",
    updated,
    updatedLabel: "Última actualização:",
    sections: [
      {
        title: "1. Responsável pelo tratamento",
        blocks: [
          {
            type: "p",
            text: `O responsável pelo tratamento dos dados é Fourty3000, contactável em ${email}.`,
          },
        ],
      },
      {
        title: "2. Princípios aplicados",
        blocks: [
          {
            type: "p",
            text: "O sítio não oferece registo, conta de utilizador nem formulário de contacto. Não lhe são pedidos dados durante a visita.",
          },
          {
            type: "p",
            text: "Ainda assim, o sítio recorre a serviços de terceiros que podem tratar dados técnicos a si respeitantes: medição de audiência e mensagens instantâneas. Esses tratamentos são descritos abaixo.",
          },
        ],
      },
      {
        title: "3. Dados tratados e finalidades",
        blocks: [
          {
            type: "p",
            text: "Medição de audiência. O sítio utiliza Vercel Analytics e Vercel Speed Insights, que recolhem dados técnicos agregados: páginas consultadas, desempenho de carregamento, endereço IP truncado, agente de utilizador, país ou região. Estas ferramentas servem para produzir estatísticas de tráfego sem identificar pessoas.",
          },
          {
            type: "list",
            items: [
              "Fundamento jurídico: interesse legítimo do editor para compreender a utilização do sítio e melhorá-lo.",
              "Destinatário: Vercel Inc.",
              "Conservação: um período limitado escolhido pelo prestador, normalmente inferior a catorze meses, seguido de supressão ou anonimização.",
            ],
          },
          {
            type: "p",
            text: "Mensagens instantâneas (Brevo Conversations). O sítio apresenta um widget de mensagens instantâneas fornecido pela Brevo (anteriormente Sendinblue), empresa francesa de marketing por correio electrónico. O widget permite contactar o editor sem recorrer a um formulário.",
          },
          {
            type: "p",
            text: "Quando abre uma conversa, os dados que introduz (a mensagem e, se indicar, o endereço de correio electrónico ou o nome) são transmitidos à Brevo, que os aloja. O widget pode ainda depositar um identificador técnico no seu navegador para conservar a sua sessão de conversa.",
          },
          {
            type: "list",
            items: [
              "Fundamento jurídico: consentimento, prestado ao abrir voluntariamente uma conversa com o widget.",
              "Destinatário: Brevo.",
              "Conservação: determinada pela Brevo segundo as suas condições de alojamento. Pode pedir a sua supressão a qualquer momento exercendo o seu direito ao apagamento, ou eliminando as conversas a partir da interface do widget.",
            ],
          },
          {
            type: "p",
            text: "Não é feita qualquer análise comportamental nem decisão automatizada a partir destes dados, e os mesmos não são cedidos a terceiros para fins comerciais.",
          },
          {
            type: "p",
            text: "Alojamento. O sítio está alojado pela Amber Hosting, que conserva os registos técnicos de ligação necessários à segurança do serviço.",
          },
        ],
      },
      {
        title: "4. Os seus direitos",
        blocks: [
          { type: "p", text: "Dispõe dos seguintes direitos:" },
          {
            type: "list",
            items: [
              "de acesso aos seus dados;",
              "de rectificação;",
              "de apagamento (direito ao esquecimento);",
              "de limitação do tratamento;",
              "de oposição;",
              "de portabilidade;",
              "de retirar o seu consentimento a qualquer momento.",
            ],
          },
          {
            type: "p",
            text: `Para exercer estes direitos, envie um pedido para ${email}. A resposta será dada no prazo de um mês ou mais, consoante a disponibilidade do editor e a complexidade do pedido. Pode também apresentar uma reclamação à CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — ou através do seu formulário de reclamação em linha.`,
          },
        ],
      },
      {
        title: "5. Segurança",
        blocks: [
          {
            type: "p",
            text: "O editor implementa medidas técnicas e organizativas razoáveis para proteger os dados contra perda, acesso não autorizado e divulgação. Como nenhum sistema é infalível, o editor não pode garantir uma segurança absoluta.",
          },
        ],
      },
      {
        title: "6. Rastreadores e consentimento",
        blocks: [
          {
            type: "p",
            text: "Os rastreadores utilizados para a medição de audiência estão dispensados de consentimento quando cumprem as condições definidas pela CNIL, nomeadamente a ausência de cruzamento com outros dados e uma conservação limitada à duração da sessão.",
          },
          {
            type: "p",
            text: "O widget de mensagens, pelo contrário, permite uma troca entre o editor e o visitante. Não pode ser equiparado a um simples rastreador de audiência. Pode recusá-lo sem que isso prejudique a consulta do sítio.",
          },
        ],
      },
      {
        title: "7. Alteração da política",
        blocks: [
          {
            type: "p",
            text: "Esta política pode ser actualizada. A data da última actualização consta no topo da página.",
          },
        ],
      },
    ],
  },
};
