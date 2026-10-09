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
    title: dictionary.meta.termsTitle,
    description: dictionary.meta.termsDescription,
  };
}

export default async function TermsOfService({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";

  return (
    <section lang={activeLocale}>
      <h1 className="mb-8 text-2xl font-medium">
        Conditions générales d&apos;utilisation
      </h1>
      <FrenchOnlyNotice locale={activeLocale} />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Les présentes conditions générales d&apos;utilisation (ci-après « CGU »)
          régissent l&apos;accès et l&apos;utilisation du site{" "}
          <strong>Fourty3000.fr</strong> (ci-après « le Site »), édité par{" "}
          <strong>Fourty3000</strong>.
        </p>
        <p>Dernière mise à jour : <strong>06/10/2026</strong></p>

        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes CGU ont pour objet de définir les conditions d&apos;accès
          et d&apos;utilisation du Site. Toute navigation sur le Site vaut
          acceptation pleine et entière des présentes CGU.
        </p>

        <h2>Article 2 — Accès au site</h2>
        <p>
          Le Site est accessible gratuitement, 24 h/24 et 7 j/7, sauf interruption
          pour maintenance ou cas de force majeure. L&apos;éditeur ne garantit
          pas l&apos;absence d&apos;interruptions ni l&apos;absence d&apos;erreurs.
        </p>

        <h2>Article 3 — Usage du site</h2>
        <p>L&apos;utilisateur s&apos;interdit :</p>
        <ul>
          <li>
            d&apos;utiliser le Site à des fins illicites ou contraires à
            l&apos;ordre public ;
          </li>
          <li>
            de tenter d&apos;accéder à des comptes, systèmes ou données qui ne
            lui appartiennent pas, ou de contourner les mesures de sécurité ;
          </li>
          <li>
            de perturber, surcharger ou empêcher le fonctionnement normal du
            Site ;
          </li>
          <li>
            de copier, extraire, modifier ou reproduire tout ou partie des
            contenus du Site sans autorisation écrite préalable ;
          </li>
          <li>
            d&apos;injecter du code malveillant, des virus ou toute technologie
            nuisible.
          </li>
        </ul>

        <h2>Article 4 — Propriété intellectuelle</h2>
        <p>
          Les contenus du Site (textes, images, photographies, illustrations,
          identité visuelle, code source) demeurent la propriété exclusive de
          l&apos;éditeur ou de ses partenaires, et sont protégés par le droit
          de la propriété intellectuelle.
        </p>
        <p>
          Les photographies restent la propriété de leurs auteurs respectifs et
          sont référencées avec leur source. Toute reproduction non autorisée est
          interdite.
        </p>

        <h2>Article 5 — Liens externes</h2>
        <p>
          Le Site peut contenir des liens vers des sites tiers. L&apos;éditeur
          n&apos;exerce aucun contrôle sur ces sites et décline toute
          responsabilité quant à leur contenu, leur disponibilité ou leurs
          pratiques en matière de données personnelles. Un lien vers un site
          tiers ne vaut pas approbation.
        </p>

        <h2>Article 6 — Responsabilité</h2>
        <p>
          L&apos;éditeur met en œuvre les moyens raisonnables pour assurer la
          disponibilité et la sécurité du Site, mais ne peut garantir un
          fonctionnement ininterrompu ni l&apos;absence d&apos;altération, de
          perte ou de suppression de données. L&apos;utilisateur reconnaît que
          ces risques ne peuvent être entièrement exclus et en accepte la
          survenance.
        </p>
        <p>
          L&apos;éditeur ne saurait être tenu responsable des dommages directs
          ou indirects résultant de l&apos;accès au Site, de son utilisation ou
          de l&apos;impossibilité d&apos;y accéder, sauf faute lourde ou
          intentionnelle.
        </p>

        <h2>Article 7 — Données personnelles</h2>
        <p>
          Le traitement des données personnelles est décrit dans la{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>,
          qui fait partie intégrante des présentes CGU.
        </p>

        <h2>Article 8 — Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont soumises au droit français. En cas de litige,
          une solution amiable sera recherchée avant toute action judiciaire.
          À défaut d&apos;accord, les tribunaux français seront seuls compétents.
        </p>
        <p>
          Pour les professionnels, les règles de compétence protectionnelles
          prévues par le Code de procédure civile s&apos;appliquent.
        </p>

        <h2>Article 9 — Modification des CGU</h2>
        <p>
          L&apos;éditeur se réserve le droit de modifier les présentes CGU à
          tout moment. Les CGU en vigueur sont celles consultables sur cette
          page. L&apos;utilisateur est invité à les consulter régulièrement.
        </p>
      </div>
    </section>
  );
}