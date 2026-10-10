import type { Locale } from "../i18n";
import type { LegalPage } from "./types";

const email = "fourty3000@gmail.com";
const updated = "10/10/2026";

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
            text: "Le site ne propose ni inscription, ni compte utilisateur. La simple consultation d'une page ne vous demande aucune donnée : les données décrites ci-dessous ne sont collectées que si vous utilisez activement le formulaire de contact ou la messagerie de discussion.",
          },
          {
            type: "p",
            text: "Le site fait appel à des services tiers qui peuvent traiter des données techniques vous concernant : mesure d'audience, vérification anti-spam et messagerie de discussion. Ces traitements sont décrits ci-dessous.",
          },
        ],
      },
      {
        title: "3. Données traitées et finalités",
        blocks: [
          {
            type: "p",
            text: "Formulaire de contact. Le site met à disposition un formulaire permettant de lui écrire. Il recueille uniquement votre nom, votre adresse électronique et le contenu de votre message. Aucune autre information n'est demandée.",
          },
          {
            type: "list",
            items: [
              "Base légale : consentement, donné par l'envoi volontaire du formulaire.",
              "Destinataire : l'éditeur, via un webhook Discord (Discord Inc., société de droit américain). Votre message est transmis aux serveurs de Discord, situés aux États-Unis : ce transfert en dehors de l'Union européenne est encadré par les garanties appropriées prévues par Discord, notamment un accord de traitement des données et des clauses contractuelles types. L'éditeur demeure le seul destinataire du contenu de vos messages.",
              "Durée : conservation de votre message pendant la durée de la conversation, puis suppression. Vous pouvez demander sa suppression à tout moment exerçant votre droit à l'effacement.",
            ],
          },
          {
            type: "p",
            text: "Vérification anti-spam (Cloudflare Turnstile). Le formulaire est précédé d'une vérification qui distingue les visiteurs humains des robots. Elle est conçue pour rester invisible, y compris lorsque votre navigateur ne dispose pas des interfaces utilisées : le prestataire traite alors votre adresse IP et des données techniques de votre navigateur, uniquement pour produire un jeton de validation. L'éditeur ne conserve aucune donnée issue de cette vérification.",
          },
          {
            type: "list",
            items: [
              "Base légale : intérêt légitime de l'éditeur à protéger son service contre les envois automatisés.",
              "Destinataire : Cloudflare, Inc.",
              "Durée : conservation par le prestataire limitée à la durée de la vérification, sans transfert à des tiers à des fins commerciales.",
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
            text: "Hébergement. Le site est hébergé sur une infrastructure gérée par l'éditeur lui-même, qui assure la conservation des journaux de connexion techniques nécessaires à la sécurité du service.",
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
            text: "Le site ne dépose aucun traceur de mesure d'audience et ne réalise aucun recoupement avec des données provenant d'autres services. Les seules données techniques traitées sont celles nécessaires au fonctionnement du site et à la sécurité du service.",
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
            text: "The site offers no registration and no user account. Simply browsing a page asks you for no data: the data described below is collected only if you actively use the contact form or the instant messaging widget.",
          },
          {
            type: "p",
            text: "The site nevertheless uses third-party services that may process technical data about you: spam verification and instant messaging. These processes are described below.",
          },
        ],
      },
      {
        title: "3. Data processed and purposes",
        blocks: [
          {
            type: "p",
            text: "Contact form. The site provides a form that lets you write to the publisher. It collects only your name, your email address and the content of your message. No other information is requested, and the form stores nothing in your browser.",
          },
          {
            type: "list",
            items: [
              "Legal basis: consent, given by voluntarily submitting the form.",
              "Recipient: the publisher, via a Discord webhook (Discord Inc., a US company). Your message is transmitted to Discord's servers, located in the United States: this transfer outside the European Union is covered by the appropriate safeguards provided by Discord, notably a data processing agreement and standard contractual clauses. The publisher remains the sole recipient of the content of your messages.",
              "Retention: your message is kept for the duration of the exchange, then deleted. You may request its deletion at any time by exercising your right to erasure.",
            ],
          },
          {
            type: "p",
            text: "Spam check (Cloudflare Turnstile). The form is preceded by a check that tells human visitors apart from bots. It is designed to remain invisible, including when your browser lacks the interfaces it normally uses: the provider then processes your IP address and technical browser data, solely to produce a validation token. The publisher keeps no data from this check.",
          },
          {
            type: "list",
            items: [
              "Legal basis: the publisher's legitimate interest in protecting the service against automated submissions.",
              "Recipient: Cloudflare, Inc.",
              "Retention: the provider keeps data for the duration of the check only, with no transfer to third parties for commercial purposes.",
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
            text: "Hosting. The site is hosted on infrastructure managed by the publisher, who keeps the technical connection logs needed for service security.",
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
            text: "The site sets no audience measurement tracker and carries out no matching with data from other services. The only technical data processed is that required for the site to run and for the security of the service.",
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
            text: "El sitio no ofrece registro ni cuenta de usuario. La simple consulta de una página no le solicita ningún dato: los datos descritos a continuación solo se recopilan si usted utiliza activamente el formulario de contacto o el widget de mensajería.",
          },
          {
            type: "p",
            text: "No obstante, el sitio recurre a servicios de terceros que pueden tratar datos técnicos sobre usted: verificación antispam y mensajería instantánea. Estos tratamientos se describen a continuación.",
          },
        ],
      },
      {
        title: "3. Datos tratados y finalidades",
        blocks: [
          {
            type: "p",
            text: "Formulario de contacto. El sitio ofrece un formulario que permite escribirle. Solo recopila su nombre, su dirección de correo electrónico y el contenido de su mensaje. No se solicita ninguna otra información, y el formulario no almacena nada en su navegador.",
          },
          {
            type: "list",
            items: [
              "Base jurídica: consentimiento, otorgado al enviar voluntariamente el formulario.",
              "Destinatario: el editor, a través de un webhook de Discord (Discord Inc., sociedad estadounidense). Su mensaje se transmite a los servidores de Discord, ubicados en Estados Unidos: dicha transferencia fuera de la Unión Europea está amparada por las garantías adecuadas previstas por Discord, en particular un acuerdo de tratamiento de datos y cláusulas contractuales tipo. El editor sigue siendo el único destinatario del contenido de sus mensajes.",
              "Conservación: su mensaje se conserva durante la duración del intercambio y después se suprime. Puede solicitar su supresión en cualquier momento ejerciendo su derecho a la supresión.",
            ],
          },
          {
            type: "p",
            text: "Verificación antispam (Cloudflare Turnstile). El formulario va precedido de una verificación que distingue a las personas de los robots. Está diseñada para permanecer invisible, incluso cuando su navegador carece de las interfaces que suele utilizar: el prestador trata entonces su dirección IP y datos técnicos del navegador, únicamente para producir un token de validación. El editor no conserva ningún dato de esta verificación.",
          },
          {
            type: "list",
            items: [
              "Base jurídica: interés legítimo del editor para proteger el servicio frente a envíos automatizados.",
              "Destinatario: Cloudflare, Inc.",
              "Conservación: el prestador conserva los datos solo durante la verificación, sin cesión a terceros con fines comerciales.",
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
            text: "Alojamiento. El sitio está alojado en una infraestructura gestionada por el propio editor, que conserva los registros técnicos de conexión necesarios para la seguridad del servicio.",
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
            text: "El sitio no implanta ningún rastreador de medición de audiencia ni realiza ningún cruce con datos procedentes de otros servicios. Los únicos datos técnicos tratados son los necesarios para el funcionamiento del sitio y la seguridad del servicio.",
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
            text: "Die Website bietet weder Registrierung noch Benutzerkonto an. Das blosse Aufrufen einer Seite fragt keine Daten von Ihnen ab: Die nachstehend beschriebenen Daten werden nur erhoben, wenn Sie das Kontaktformular oder das Messaging-Widget aktiv nutzen.",
          },
          {
            type: "p",
            text: "Die Website nutzt jedoch Dienste Dritter, die technische Daten über Sie verarbeiten können: Spam-Prüfung und Instant Messaging. Diese Verarbeitungen werden nachstehend beschrieben.",
          },
        ],
      },
      {
        title: "3. Verarbeitete Daten und Zwecke",
        blocks: [
          {
            type: "p",
            text: "Kontaktformular. Die Website stellt ein Formular bereit, über das Sie dem Herausgeber schreiben können. Es erhebt ausschließlich Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht. Weitere Angaben werden nicht abgefragt, und das Formular speichert nichts in Ihrem Browser.",
          },
          {
            type: "list",
            items: [
              "Rechtsgrundlage: Einwilligung, erteilt durch freiwilliges Absenden des Formulars.",
              "Empfänger: der Herausgeber, über einen Discord-Webhook (Discord Inc., eine US-amerikanische Gesellschaft). Ihre Nachricht wird an die Server von Discord in den Vereinigten Staaten übermittelt: Diese Übermittlung außerhalb der Europäischen Union wird durch die von Discord vorgesehenen geeigneten Garantien abgedeckt, insbesondere durch eine Auftragsverarbeitungsvereinbarung und Standardvertragsklauseln. Der Herausgeber bleibt der einzige Empfänger des Inhalts Ihrer Nachrichten.",
              "Speicherdauer: Ihre Nachricht wird für die Dauer des Schriftwechsels aufbewahrt und anschließend gelöscht. Sie können ihre Löschung jederzeit durch Ausübung Ihres Rechts auf Löschung verlangen.",
            ],
          },
          {
            type: "p",
            text: "Spam-Prüfung (Cloudflare Turnstile). Dem Formular ist eine Prüfung vorgeschaltet, die menschliche Besucher von Bots unterscheidet. Sie ist so gestaltet, dass sie unsichtbar bleibt, auch wenn Ihr Browser über die üblicherweise genutzten Schnittstellen nicht verfügt: Der Anbieter verarbeitet dann Ihre IP-Adresse und technische Browserdaten, ausschließlich zur Erzeugung eines Prüftokens. Der Herausgeber bewahrt aus dieser Prüfung keine Daten auf.",
          },
          {
            type: "list",
            items: [
              "Rechtsgrundlage: berechtigtes Interesse des Herausgebers, den Dienst vor automatisierten Einsendungen zu schützen.",
              "Empfänger: Cloudflare, Inc.",
              "Speicherdauer: Der Anbieter bewahrt die Daten nur für die Dauer der Prüfung auf, ohne Weitergabe an Dritte zu kommerziellen Zwecken.",
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
            text: "Hosting. Die Website wird auf einer vom Herausgeber selbst verwalteten Infrastruktur gehostet, die die für die Sicherheit des Dienstes erforderlichen technischen Verbindungsprotokolle aufbewahrt.",
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
            text: "Die Website setzt keinen Reichweitenmess-Tracker und führt keine Verknüpfung mit Daten anderer Dienste durch. Verarbeitet werden nur die technischen Daten, die für den Betrieb der Website und die Sicherheit des Dienstes erforderlich sind.",
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
            text: "Il sito non offre registrazione né account utente. La semplice consultazione di una pagina non vi chiede alcun dato: i dati descritti di seguito vengono raccolti solo se utilizzate attivamente il modulo di contatto o il widget di messaggistica.",
          },
          {
            type: "p",
            text: "Il sito fa tuttavia ricorso a servizi di terzi che possono trattare dati tecnici riguardanti voi: verifica antispam e messaggistica istantanea. Tali trattamenti sono descritti di seguito.",
          },
        ],
      },
      {
        title: "3. Dati trattati e finalità",
        blocks: [
          {
            type: "p",
            text: "Modulo di contatto. Il sito mette a disposizione un modulo che vi permette di scrivere all'editore. Raccoglie soltanto il vostro nome, il vostro indirizzo email e il contenuto del vostro messaggio. Non viene richiesta alcuna altra informazione.",
          },
          {
            type: "list",
            items: [
              "Base giuridica: consenso, rilasciato con l'invio volontario del modulo.",
              "Destinatario: l'editore, tramite un webhook di Discord (Discord Inc., società di diritto degli Stati Uniti). Il vostro messaggio viene trasmesso ai server di Discord, situati negli Stati Uniti: tale trasferimento al di fuori dell'Unione europea è disciplinato dalle garanzie appropriate previste da Discord, in particolare un accordo sul trattamento dei dati e clausole contrattuali standard. L'editore resta l'unico destinatario del contenuto dei vostri messaggi.",
              "Conservazione: il vostro messaggio viene conservato per la durata della conversazione e poi cancellato. Potete chiederne la cancellazione in qualsiasi momento esercitando il diritto alla cancellazione.",
            ],
          },
          {
            type: "p",
            text: "Verifica antispam (Cloudflare Turnstile). Il modulo è preceduto da una verifica che distingue le persone dai bot. È progettata per restare invisibile, anche quando il browser non dispone delle interfacce che normalmente utilizza: il fornitore tratta allora il vostro indirizzo IP e dati tecnici del browser, unicamente per produrre un token di validazione. L'editore non conserva alcun dato derivante da questa verifica.",
          },
          {
            type: "list",
            items: [
              "Base giuridica: legittimo interesse dell'editore a proteggere il servizio dagli invii automatizzati.",
              "Destinatario: Cloudflare, Inc.",
              "Conservazione: il fornitore conserva i dati solo per la durata della verifica, senza cessione a terzi per finalità commerciali.",
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
            text: "Hosting. Il sito è ospitato su un'infrastruttura gestita direttamente dall'editore, che conserva i registri tecnici di connessione necessari alla sicurezza del servizio.",
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
            text: "Il sito non imposta alcun tracciatore per la misurazione del pubblico e non effettua alcun collegamento con dati provenienti da altri servizi. Gli unici dati tecnici trattati sono quelli necessari al funzionamento del sito e alla sicurezza del servizio.",
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
            text: "O sítio não oferece registo nem conta de utilizador. A simples consulta de uma página não lhe pede qualquer dado: os dados descritos abaixo só são recolhidos se utilizar activamente o formulário de contacto ou o widget de mensagens.",
          },
          {
            type: "p",
            text: "Ainda assim, o sítio recorre a serviços de terceiros que podem tratar dados técnicos a si respeitantes: verificação antisspam e mensagens instantâneas. Esses tratamentos são descritos abaixo.",
          },
        ],
      },
      {
        title: "3. Dados tratados e finalidades",
        blocks: [
          {
            type: "p",
            text: "Formulário de contacto. O sítio disponibiliza um formulário que lhe permite escrever. Recolhe apenas o seu nome, o seu endereço de correio electrónico e o conteúdo da sua mensagem. Não é pedida qualquer outra informação.",
          },
          {
            type: "list",
            items: [
              "Fundamento jurídico: consentimento, prestado através do envio voluntário do formulário.",
              "Destinatário: o editor, através de um webhook do Discord (Discord Inc., sociedade de direito norte-americano). A sua mensagem é transmitida para os servidores do Discord, situados nos Estados Unidos: essa transferência para fora da União Europeia está abrangida pelas garantias adequadas previstas pelo Discord, nomeadamente um acordo de tratamento de dados e cláusulas contratuais-tipo. O editor continua a ser o único destinatário do conteúdo das suas mensagens.",
              "Conservação: a sua mensagem é conservada durante a duração da conversa e depois eliminada. Pode pedir a sua eliminação a qualquer momento exerciendo o seu direito ao apagamento.",
            ],
          },
          {
            type: "p",
            text: "Verificação antisspam (Cloudflare Turnstile). O formulário é precedido de uma verificação que distingue as pessoas dos robôs. Foi concebida para permanecer invisível, mesmo quando o seu navegador não dispõe das interfaces que normalmente utiliza: o prestador trata então o seu endereço IP e dados técnicos do navegador, unicamente para produzir um token de validação. O editor não conserva quaisquer dados provenientes dessa verificação.",
          },
          {
            type: "list",
            items: [
              "Fundamento jurídico: interesse legítimo do editor em proteger o serviço contra envios automatizados.",
              "Destinatário: Cloudflare, Inc.",
              "Conservação: o prestador conserva os dados apenas durante a verificação, sem cessão a terceiros para fins comerciais.",
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
            text: "Alojamento. O sítio está alojado numa infraestrutura gerida pelo próprio editor, que conserva os registos técnicos de ligação necessários à segurança do serviço.",
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
            text: "O sítio não implanta qualquer rastreador de medição de audiência nem faz qualquer cruzamento com dados provenientes de outros serviços. Os únicos dados técnicos tratados são os necessários ao funcionamento do sítio e à segurança do serviço.",
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
