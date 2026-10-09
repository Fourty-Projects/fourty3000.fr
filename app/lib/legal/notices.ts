import type { Locale } from "../i18n";
import type { LegalPage } from "./types";

const editorName = "Fourty3000";
const editorEmail = "fourty3000@gmail.com";

export const legalNotices: Record<Locale, LegalPage> = {
  fr: {
    heading: "Mentions légales",
    intro:
      "Conformément à l'article 6 III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, les informations suivantes permettent d'identifier l'éditeur du site et l'hébergeur.",
    sections: [
      {
        title: "Éditeur du site",
        blocks: [
          {
            type: "list",
            items: [
              "Nom / dénomination sociale : Fourty3000",
              "Statut juridique : Personne physique",
              `Courriel : ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Directeur de la publication",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Hébergeur du site",
        blocks: [
          {
            type: "list",
            items: [
              "Raison sociale : Fourty3000",
              "Adresse : Adresse personnelle, hébergement privé / encadré",
            ],
          },
        ],
      },
      {
        title: "Propriété intellectuelle",
        blocks: [
          {
            type: "p",
            text: "L'ensemble des contenus présents sur ce site (textes, images, photographies, illustrations, code source, identité visuelle) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, de tout ou partie de ces éléments est interdite sans autorisation écrite préalable de l'éditeur.",
          },
          {
            type: "p",
            text: "Les photographies restent la propriété de leurs auteurs respectifs et sont référencées avec leur source. Les logiciels libres éventuellement utilisés restent soumis à leurs licences d'origine.",
          },
        ],
      },
      {
        title: "Crédits",
        blocks: [
          { type: "p", text: "Site réalisé avec Next.js et Tailwind CSS." },
        ],
      },
      {
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: `Pour toute question relative au site ou à l'exercice de vos droits, vous pouvez écrire à ${editorEmail}.`,
          },
        ],
      },
    ],
  },

  en: {
    heading: "Legal notice",
    intro:
      "In accordance with article 6 III of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy, the following information identifies the publisher of the site and the hosting provider.",
    sections: [
      {
        title: "Site publisher",
        blocks: [
          {
            type: "list",
            items: [
              "Name / corporate name: Fourty3000",
              "Legal status: Natural person",
              `Email: ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Publication manager",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Hosting provider",
        blocks: [
          {
            type: "list",
            items: [
              "Company name: Fourty3000",
              "Address: Private address, private / supervised hosting",
            ],
          },
        ],
      },
      {
        title: "Intellectual property",
        blocks: [
          {
            type: "p",
            text: "All content present on this site (texts, images, photographs, illustrations, source code, visual identity) is protected by intellectual property law. Any reproduction, representation, modification or exploitation, in whole or in part, of any of these elements is prohibited without the publisher's prior written authorisation.",
          },
          {
            type: "p",
            text: "Photographs remain the property of their respective authors and are referenced with their source. Any free software used remains subject to its original licences.",
          },
        ],
      },
      {
        title: "Credits",
        blocks: [
          { type: "p", text: "Site built with Next.js and Tailwind CSS." },
        ],
      },
      {
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: `For any question about the site or to exercise your rights, you can write to ${editorEmail}.`,
          },
        ],
      },
    ],
  },

  es: {
    heading: "Aviso legal",
    intro:
      "De conformidad con el artículo 6.III de la ley francesa n.º 2004-575, de 21 de junio de 2004, sobre la confianza en la economía digital, la siguiente información identifica al editor del sitio y a su proveedor de alojamiento.",
    sections: [
      {
        title: "Editor del sitio",
        blocks: [
          {
            type: "list",
            items: [
              "Nombre / denominación social: Fourty3000",
              "Estatus jurídico: Persona física",
              `Correo electrónico: ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Director de la publicación",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Proveedor de alojamiento",
        blocks: [
          {
            type: "list",
            items: [
              "Razón social: Fourty3000",
              "Domicilio: Domicilio particular, alojamiento privado / tutelado",
            ],
          },
        ],
      },
      {
        title: "Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "La totalidad de los contenidos presentes en este sitio (textos, imágenes, fotografías, ilustraciones, código fuente, identidad visual) está protegida por la legislation de propiedad intelectual. Queda prohibida cualquier reproducción, representación, modificación o explotación, total o parcial, de todo o parte de estos elementos sin autorización escrita previa del editor.",
          },
          {
            type: "p",
            text: "Las fotografías siguen perteneciendo a sus autores respectivos y se referencian con su fuente. El software libre que pueda utilizarse sigue sujeto a sus licencias de origen.",
          },
        ],
      },
      {
        title: "Créditos",
        blocks: [
          { type: "p", text: "Sitio realizado con Next.js y Tailwind CSS." },
        ],
      },
      {
        title: "Contacto",
        blocks: [
          {
            type: "p",
            text: `Para cualquier cuestión relativa al sitio o para ejercer sus derechos, puede escribir a ${editorEmail}.`,
          },
        ],
      },
    ],
  },

  de: {
    heading: "Impressum",
    intro:
      "Gemäß Artikel 6 Abs. III des französischen Gesetzes Nr. 2004-575 vom 21. Juni 2004 über das Vertrauen in die digitale Wirtschaft ermöglichen die folgenden Angaben die Identifizierung des Herausgebers der Website und des Hostinganbieters.",
    sections: [
      {
        title: "Herausgeber der Website",
        blocks: [
          {
            type: "list",
            items: [
              "Name / Firmenbezeichnung: Fourty3000",
              "Rechtsform: Natürliche Person",
              `E-Mail: ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Verantwortlicher für den Inhalt",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Hostinganbieter",
        blocks: [
          {
            type: "list",
            items: [
              "Firmenname: Fourty3000",
              "Anschrift: Privatadresse, privates / beaufsichtigtes Hosting",
            ],
          },
        ],
      },
      {
        title: "Geistiges Eigentum",
        blocks: [
          {
            type: "p",
            text: "Sämtliche auf dieser Website enthaltenen Inhalte (Texte, Bilder, Fotografien, Illustrationen, Quellcode, visuelle Identität) sind durch das Urheberrecht geschützt. Jede Vervielfältigung, Wiedergabe, Änderung oder Verwertung dieser Elemente, ganz oder teilweise, ist ohne vorherige schriftliche Genehmigung des Herausgebers untersagt.",
          },
          {
            type: "p",
            text: "Fotografien bleiben Eigentum ihrer jeweiligen Urheber und werden mit ihrer Quelle angegeben. Verwendete freie Software unterliegt weiterhin ihren ursprünglichen Lizenzen.",
          },
        ],
      },
      {
        title: "Credits",
        blocks: [
          {
            type: "p",
            text: "Website erstellt mit Next.js und Tailwind CSS.",
          },
        ],
      },
      {
        title: "Kontakt",
        blocks: [
          {
            type: "p",
            text: `Bei Fragen zur Website oder zur Ausübung Ihrer Rechte können Sie an ${editorEmail} schreiben.`,
          },
        ],
      },
    ],
  },

  it: {
    heading: "Note legali",
    intro:
      "Ai sensi dell'articolo 6 comma III della legge francese n. 2004-575 del 21 giugno 2004 sulla fiducia nell'economia digitale, le informazioni seguenti consentono di identificare l'editore del sito e il fornitore di hosting.",
    sections: [
      {
        title: "Editore del sito",
        blocks: [
          {
            type: "list",
            items: [
              "Nome / denominazione sociale: Fourty3000",
              "Forma giuridica: Persona fisica",
              `Posta elettronica: ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Direttore della pubblicazione",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Fornitore di hosting",
        blocks: [
          {
            type: "list",
            items: [
              "Ragione sociale: Fourty3000",
              "Indirizzo: Indirizzo privato, hosting privato / sorvegliato",
            ],
          },
        ],
      },
      {
        title: "Proprietà intellettuale",
        blocks: [
          {
            type: "p",
            text: "Tutti i contenuti presenti su questo sito (testi, immagini, fotografie, illustrazioni, codice sorgente, identità visiva) sono protetti dalla normativa sul diritto d'autore. Qualsiasi riproduzione, rappresentazione, modifica o sfruttamento, totale o parziale, di tutti o parte di tali elementi è vietato senza la preventiva autorizzazione scritta dell'editore.",
          },
          {
            type: "p",
            text: "Le fotografie restano proprietà dei rispettivi autori e sono citate con la loro fonte. L'eventuale software libero utilizzato resta soggetto alle proprie licenze originarie.",
          },
        ],
      },
      {
        title: "Crediti",
        blocks: [
          { type: "p", text: "Sito realizzato con Next.js e Tailwind CSS." },
        ],
      },
      {
        title: "Contatti",
        blocks: [
          {
            type: "p",
            text: `Per qualsiasi domanda relativa al sito o per esercitare i suoi diritti, può scrivere a ${editorEmail}.`,
          },
        ],
      },
    ],
  },

  pt: {
    heading: "Aviso legal",
    intro:
      "Nos termos do artigo 6, n.º III, da lei francesa n.º 2004-575, de 21 de junho de 2004, relativa à confiança na economia digital, a informação seguinte identifica o editor do site e o prestador de alojamento.",
    sections: [
      {
        title: "Editor do site",
        blocks: [
          {
            type: "list",
            items: [
              "Nome / designação social: Fourty3000",
              "Estatuto jurídico: Pessoa singular",
              `Correio eletrónico: ${editorEmail}`,
            ],
          },
        ],
      },
      {
        title: "Diretor da publicação",
        blocks: [{ type: "p", text: editorName }],
      },
      {
        title: "Prestador de alojamento",
        blocks: [
          {
            type: "list",
            items: [
              "Denominação social: Fourty3000",
              "Morada: Morada privada, alojamento privado / vigiado",
            ],
          },
        ],
      },
      {
        title: "Propriedade intelectual",
        blocks: [
          {
            type: "p",
            text: "Todos os conteúdos presentes neste site (textos, imagens, fotografias, ilustrações, código-fonte, identidade visual) estão protegidos pela legislação de propriedade intelectual. É proibida qualquer reprodução, representação, modificação ou exploração, total ou parcial, de todos ou de parte destes elementos sem autorização escrita prévia do editor.",
          },
          {
            type: "p",
            text: "As fotografias continuam a pertencer aos seus respectivos autores e são referenciadas com a sua fonte. O software livre eventualmente utilizado continua sujeito às suas licenças de origem.",
          },
        ],
      },
      {
        title: "Créditos",
        blocks: [
          { type: "p", text: "Site realizado com Next.js e Tailwind CSS." },
        ],
      },
      {
        title: "Contacto",
        blocks: [
          {
            type: "p",
            text: `Para qualquer questão relativa ao site ou para exercer os seus direitos, pode escrever para ${editorEmail}.`,
          },
        ],
      },
    ],
  },
};
