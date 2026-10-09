"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  defaultLocale,
  localeFlags,
  localeNames,
  locales,
  type Locale,
} from "../lib/i18n";
import { getDictionary } from "../lib/dictionaries";

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Ferme le menu si on clique ailleurs.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  // Échap ferme le menu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Remplace la langue en tête d'URL en conservant la page courante.
  const hrefFor = (target: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length && locales.includes(segments[0] as Locale)) {
      segments[0] = target;
      return `/${segments.join("/")}`;
    }
    return `/${target}`;
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${dictionary.nav.language} : ${localeNames[locale]}`}
        className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1.5 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
      >
        <GlobeIcon />
        <span className="text-sm font-medium uppercase">{localeFlags[locale]}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={dictionary.nav.language}
        hidden={!open}
        className={`absolute right-0 z-50 mt-2 max-h-80 w-48 origin-top-right overflow-y-auto overflow-x-hidden rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-900/5 transition-all duration-150 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/20 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <p className="border-b border-neutral-100 px-3 py-2 text-[11px] font-medium tracking-wide text-neutral-400 uppercase dark:border-neutral-800 dark:text-neutral-500">
          {dictionary.nav.language}
        </p>
        <ul className="py-1">
          {locales.map((target) => {
            const isActive = target === locale;
            return (
              <li key={target}>
                <Link
                  href={hrefFor(target)}
                  role="menuitem"
                  hrefLang={target}
                  lang={target}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="rounded bg-neutral-100 px-1 py-0.5 text-[10px] font-semibold tracking-wide text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {localeFlags[target]}
                    </span>
                    {localeNames[target]}
                  </span>
                  {isActive && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
