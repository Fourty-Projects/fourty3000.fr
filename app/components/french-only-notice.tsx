import type { Locale } from "../lib/i18n";
import { getDictionary } from "../lib/dictionaries";

/**
 * Avertissement affiche sur les pages dont le contenu n'existe qu'en
 * francais (mentions legales, CGU, politique de confidentialite).
 */
export function FrenchOnlyNotice({ locale }: { locale: Locale }) {
  if (locale === "fr") return null;

  const dictionary = getDictionary(locale);

  return (
    <p
      role="note"
      className="mb-6 rounded border-l-2 border-amber-500 bg-amber-50 px-4 py-2 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
    >
      {dictionary.notice.frenchOnly}
    </p>
  );
}
