"use client";

import { useEffect } from "react";
import { getDictionary } from "../lib/dictionaries";
import { defaultLocale } from "../lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const dictionary = getDictionary(defaultLocale);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-medium">
        {dictionary.meta.errorTitle}
      </h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        {dictionary.meta.errorBody}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        {dictionary.meta.errorRetry} →
      </button>
    </div>
  );
}