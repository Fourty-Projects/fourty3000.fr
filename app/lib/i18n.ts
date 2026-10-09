export const locales = ["fr", "en", "es", "de", "it", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Noms des langues, dans la langue d'origine. */
export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
};

/** Codes ISO 3166-1 alpha-2. */
export const localeFlags: Record<Locale, string> = {
  fr: "FR",
  en: "GB",
  es: "ES",
  de: "DE",
  it: "IT",
  pt: "PT",
};
