import type { ReactNode } from "react";

/**
 * Credit d'illustration : aligne a gauche comme le corps de texte,
 * contrairement au composant Caption (centre, reserve aux legendes courtes).
 * Le texte du credit est passe via la prop `credit` pour eviter toute
 * interpretation MDX du contenu textuel enfant.
 */
export function ImageCredit({
  children,
  credit,
  source,
}: {
  children: ReactNode;
  credit: string;
  source?: string;
}) {
  return (
    <figure className="not-prose mt-6 mb-8">
      <div className="flex justify-center">{children}</div>
      <figcaption className="mt-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed text-left">
        {credit}
        {source && (
          <>
            {" "}
            (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              source
            </a>
            )
          </>
        )}
      </figcaption>
    </figure>
  );
}