import type { Metadata } from "next";
import { FrenchOnlyNotice } from "../../components/french-only-notice";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  return {
    title: dictionary.meta.legalTitle,
    description: dictionary.meta.legalDescription,
  };
}

export default async function LegalNotice({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";

  return (
    <section lang={activeLocale}>
      <h1 className="mb-8 text-2xl font-medium">Mentions légales</h1>
      <FrenchOnlyNotice locale={activeLocale} />
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
            Nom / dénomination sociale : <strong>Fourty3000</strong>
          </li>
          <li>
            Statut juridique : <strong>Personne physique</strong>
          </li>
          <li>
            Courriel : <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>
          </li>
        </ul>

        <h2>Directeur de la publication</h2>
        <p>
          <strong>Fourty3000</strong>
        </p>

        <h2>Hébergeur du site</h2>
        <ul>
          <li>
            Raison sociale : <strong>Fourty3000</strong>
          </li>
          <li>
            Adresse : <strong>Adresse personnelle, hébergement privé / encadré</strong>
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
          Site réalisé avec Next.js et Tailwind CSS.
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