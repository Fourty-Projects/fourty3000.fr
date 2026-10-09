import type { Metadata } from "next";
import { LegalContent } from "../../components/legal-content";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";
import { legalNotices } from "../../lib/legal/notices";

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
      <h1 className="mb-8 text-2xl font-medium">
        {legalNotices[activeLocale].heading}
      </h1>
      <LegalContent page={legalNotices[activeLocale]} />
    </section>
  );
}
