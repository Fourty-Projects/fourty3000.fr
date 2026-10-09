import type { Metadata } from "next";
import { LegalContent } from "../../components/legal-content";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";
import { privacyPolicies } from "../../lib/legal/privacy";

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
        {privacyPolicies[activeLocale].heading}
      </h1>
      <LegalContent page={privacyPolicies[activeLocale]} />
    </section>
  );
}
