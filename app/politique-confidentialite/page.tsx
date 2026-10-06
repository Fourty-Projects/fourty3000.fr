import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles (RGPD) du site.",
};

export default function PrivacyPolicy() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
        Politique de confidentialité
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          La présente politique décrit la manière dont les données personnelles
          sont traitées dans le cadre de la consultation de ce site. Elle est
          établie conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          française n° 78-17 du 6 janvier 1978 modifiée.
        </p>
        <p>Dernière mise à jour : <strong>06/10/2026</strong></p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est{" "}
          <strong>Fourty3000</strong>, joignable à l&apos;adresse{" "}
          <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>.
        </p>

        <h2>2. Principes appliqués</h2>
        <p>
          Le site ne collecte aucune donnée personnelle formulairement. Aucune
          inscription, aucun compte utilisateur et aucun formulaire de contact
          ne sont proposés.
        </p>
        <p>
          Les seules données traitées sont des données de navigation et
          techniques, mesurées de façon agrégée et anonymisée, décrites
          ci-dessous.
        </p>

        <h2>3. Finalités et bases légales</h2>
        <ul>
          <li>
            Mesure d&apos;audience et amélioration du service — base légale :
            intérêt légitime de l&apos;éditeur à comprendre l&apos;utilisation du
            site.
          </li>
          <li>
            Sécurité et bon fonctionnement du site — base légale : intérêt
            légitime à protéger le service.
          </li>
        </ul>
        <p>Aucune décision automatisée ni profilage n&apos;est mis en œuvre.</p>

        <h2>4. Durées de conservation</h2>
        <p>
          Les données de navigation et d&apos;audience sont conservées pendant la
          durée limitée choisie par le prestataire, généralement inférieure à
          quatorze mois, puis supprimées ou anonymisées.
        </p>

        <h2>5. Vos droits</h2>
        <p>Vous disposez des droits suivants :</p>
        <ul>
          <li>d&apos;accès à vos données ;</li>
          <li>de rectification ;</li>
          <li>d&apos;effacement (droit à l&apos;oubli) ;</li>
          <li>de limitation du traitement ;</li>
          <li>d&apos;opposition ;</li>
          <li>de portabilité ;</li>
          <li>de retirer votre consentement à tout moment.</li>
        </ul>
        <p>
          Pour exercer ces droits, adressez une demande à{" "}
          <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>. Une
          réponse sera apportée dans un délai d&apos;un mois ou plus, selon la disponibilité de l&apos;éditeur, ainsi que de la complexité de la demande. Vous pouvez
          également introduire une réclamation auprès de la CNIL — 3 place de
          Fontenoy, TSA 80715, 75334 Paris Cedex 07 — ou via le{" "}
          <a
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noopener noreferrer"
          >
            formulaire de réclamation
          </a>
          .
        </p>

        <h2>6. Sécurité</h2>
        <p>
          L&apos;éditeur met en œuvre des mesures techniques et organisationnelles
          raisonnables pour protéger les données contre la perte, l&apos;accès
          non autorisé et la divulgation. Aucun système n&apos;étant cependant
          infaillible, l&apos;éditeur ne peut garantir une sécurité absolue.
        </p>

        <h2>7. Modification de la politique</h2>
        <p>
          Cette politique peut être mise à jour. La date de dernière mise à
          jour figure en haut de page.
        </p>
      </div>
    </section>
  );
}