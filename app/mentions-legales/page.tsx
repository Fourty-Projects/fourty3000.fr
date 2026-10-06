import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.",
};

export default function LegalNotice() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Mentions légales</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Conformément à l&apos;article 6 III de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, les informations
          suivantes permettent d&apos;identifier l&apos;éditeur du site et
          l&apos;hébergeur.
        </p>

        <h2>Éditeur du site</h2>
        <ul>
          <li>
            Nom / dénomination sociale : <strong>[À COMPLÉTER]</strong>
          </li>
          <li>
            Statut juridique : <strong>[À COMPLÉTER : auto-entrepreneur, EI, EURL…]</strong>
          </li>
          <li>
            SIRET / SIREN : <strong>[À COMPLÉTER]</strong>
          </li>
          <li>
            Adresse du siège social : <strong>[À COMPLÉTER]</strong>
          </li>
          <li>
            Courriel : <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>
          </li>
          <li>
            Téléphone : <strong>[À COMPLÉTER — obligatoire uniquement pour les professionnels]</strong>
          </li>
        </ul>

        <h2>Directeur de la publication</h2>
        <p>
          <strong>[À COMPLÉTER — nom et prénom du directeur de la publication]</strong>
        </p>

        <h2>Hébergeur du site</h2>
        <ul>
          <li>
            Raison sociale : <strong>Amber Hosting</strong>
          </li>
          <li>
            Adresse : <strong>[À COMPLÉTER — adresse postale de l&apos;hébergeur]</strong>
          </li>
          <li>
            Téléphone : <strong>[À COMPLÉTER]</strong>
          </li>
        </ul>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          photographies, illustrations, code source, identité visuelle) est
          protégé par le droit de la propriété intellectuelle. Toute
          reproduction, représentation, modification ou exploitation, totale ou
          partielle, de tout ou partie de ces éléments est interdite sans
          autorisation écrite préalable de l&apos;éditeur.
        </p>
        <p>
          Les photographies restent la propriété de leurs auteurs respectifs et
          sont référencées avec leur source. Les Logiciels libres éventuellement
          utilisés restent soumis à leurs licences d&apos;origine.
        </p>

        <h2>Crédits</h2>
        <p>
          Site réalisé avec Next.js et Tailwind CSS. Les photographies
          proviennent d&apos;Unsplash.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative au site ou à l&apos;exercice de vos
          droits, vous pouvez écrire à{" "}
          <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}