import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitcher } from "./language-switcher";
import { metaData } from "../lib/config";
import { getDictionary } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n";

const navItems = {
  "/blog": { key: "blog" },
  "/projects": { key: "projects" },
} as const;

export function Navbar({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href={`/${locale}`} className="text-3xl font-semibold">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { key }]) => (
            <Link
              key={path}
              href={`/${locale}${path}`}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {dictionary.nav[key]}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}