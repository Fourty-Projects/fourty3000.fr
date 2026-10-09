import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "../../lib/dictionaries";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  const dictionary = getDictionary(defaultLocale);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">
        404 — {dictionary.meta.notFoundTitle}
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        {dictionary.meta.notFoundBody}
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        {dictionary.meta.notFoundLink} →
      </Link>
    </section>
  );
}