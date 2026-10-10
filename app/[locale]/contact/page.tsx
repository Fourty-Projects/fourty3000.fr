import type { Metadata } from "next";
import { ContactForm } from "../../components/contact-form";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";
import { socialLinks } from "../../lib/config";

/**
 * Cette page contient un formulaire interactif : elle ne peut pas etre
 * prerendue, contrairement aux pages legales.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  return {
    title: dictionary.contact.title,
    description: dictionary.contact.intro,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  return (
    <section lang={activeLocale}>
      <h1 className="mb-4 text-2xl font-medium">{dictionary.contact.title}</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {dictionary.contact.intro}
      </p>

      <ContactForm labels={dictionary.contact} locale={activeLocale} />

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        {socialLinks.email.replace("mailto:", "")}
      </p>
    </section>
  );
}