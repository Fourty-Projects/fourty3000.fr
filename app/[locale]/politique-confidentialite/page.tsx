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
    title: dictionary.meta.privacyTitle,
    description: dictionary.meta.privacyDescription,
  };
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";

  return (
    <section lang={activeLocale}>
      <h1 className="mb-8 text-2xl font-medium">
        Politique de confidentialité
      </h1>
      <FrenchOnlyNotice locale={activeLocale} />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          La présente politique décrit la manière dont les données personnelles
          sont traitées dans le cadre de la consultation de ce site. Elle est
          établie conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          française n° 78-17 du 6 janvier 1978 modifiée.
        </p>
        <p>Dernière mise à jour : <strong>07/10/2026</strong></p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est{" "}
          <strong>Fourty3000</strong>, joignable à l&apos;adresse{" "}
          <a href="mailto:fourty3000@gmail.com">fourty3000@gmail.com</a>.
        </p>

        <h2>2. Principes appliqués</h2>
        <p>
          Le site ne propose ni inscription, ni compte utilisateur, ni formulaire
          de contact. Aucune donnée ne vous est demandée à la visite.
        </p>
        <p>
          Le site fait néanmoins appel à des services tiers qui peuvent traiter
          des données techniques vous concernant : mesure d&apos;audience et
          messagerie de discussion. Ces traitements sont décrits ci-dessous.
        </p>

        <h2>3. Données traitées et finalités</h2>

        <h3>Mesure d&apos;audience</h3>
        <p>
          Le site utilise <strong>Vercel Analytics</strong> et{" "}
          <strong>Vercel Speed Insights</strong>, qui collectent des données
          techniques agrégées : pages consultées, performance de chargement,
          adresse IP tronquée, agent utilisateur, pays ou région. Ces outils ont
          vocation à produire des statistiques de trafic sans identifier les
          personnes.
        </p>
        <ul>
          <li>
            <strong>Base légale</strong> : intérêt légitime de l&apos;éditeur à
            comprendre l&apos;utilisation du site et à l&apos;améliorer.
          </li>
          <li>
            <strong>Destinataire</strong> : Vercel Inc.
          </li>
          <li>
            <strong>Durée</strong> : durée limitée choisie par le prestataire,
            généralement inférieure à quatorze mois, puis suppression ou
            anonymisation.
          </li>
        </ul>

        <h3>Messagerie de discussion (Brevo Conversations)</h3>
        <p>
          Le site affiche un widget de discussion instantanée fourni par{" "}
          <strong>Brevo</strong> (anciennement Sendinblue), société française de
          marketing email. Ce widget permet d&apos;entrer en contact avec
          l&apos;éditeur sans passer par un formulaire.
        </p>
        <p>
          Lorsque vous ouvrez une conversation, les données que vous saisissez
          (message, et le cas échéant adresse électronique ou nom que vous
          indiquez) sont transmises à Brevo, qui les héberge. Le widget peut
          également déposer un identifiant technique dans votre navigateur afin
          de conserver votre session de discussion.
        </p>
        <ul>
          <li>
            <strong>Base légale</strong> : consentement, donné en ouvrant
            volontairement une conversation avec le widget.
          </li>
          <li>
            <strong>Destinataire</strong> : Brevo.
          </li>
          <li>
            <strong>Durée</strong> : déterminée par Brevo selon ses conditions
            d&apos;hébergement. Vous pouvez demander leur suppression à tout
            moment en exerçant votre droit à l&apos;effacement, ou en
            supprimant les conversations depuis l&apos;interface du widget.
          </li>
        </ul>
        <p>
          <strong>Aucune analyse comportementale ni décision automatisée</strong> n&apos;est
          réalisée à partir de ces données, et elles ne font l&apos;objet
          d&apos;aucune cession à des tiers à des fins commerciales.
        </p>

        <h3>Hébergement</h3>
        <p>
          Le site est hébergé par Amber Hosting, qui assure la conservation des
          journaux de connexion techniques nécessaires à la sécurité du service.
        </p>

        <h2>4. Vos droits</h2>
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

        <h2>5. Sécurité</h2>
        <p>
          L&apos;éditeur met en œuvre des mesures techniques et organisationnelles
          raisonnables pour protéger les données contre la perte, l&apos;accès
          non autorisé et la divulgation. Aucun système n&apos;étant cependant
          infaillible, l&apos;éditeur ne peut garantir une sécurité absolue.
        </p>

        <h2>6. Traceurs et consentement</h2>
        <p>
          Les traceurs utilisés pour la mesure d&apos;audience sont exemptés de
          consentement lorsqu&apos;ils respectent les conditions posées par la
          CNIL, notamment l&apos;absence de recoupement avec d&apos;autres
          données et une conservation limitée à la durée de la session.
        </p>
        <p>
          Le widget de discussion, en revanche, permet un échange entre
          l&apos;éditeur et le visiteur. Il ne peut pas être assimilé à un
          simple traceur d&apos;audience. Vous pouvez refuser de l&apos;utiliser
          sans que cela ne gêne la consultation du site.
        </p>
        <p>
          Si le widget dépose des traceurs soumis à consentement préalable, il
          sera accompagné d&apos;un bandeau permettant de les refuser avant tout
          chargement. <strong>[À VÉRIFIER au premier affichage : accepter ou non
          le widget directement dans votre navigateur, et ajuster cette section
          selon le résultat.]</strong>
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