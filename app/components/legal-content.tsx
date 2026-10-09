import type { LegalPage } from "../lib/legal/types";

/**
 * Rend une page juridique structurée (titres, paragraphes, listes)
 * à partir des modules de contenu traduits.
 */
export function LegalContent({ page }: { page: LegalPage }) {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {page.intro && <p>{page.intro}</p>}
      {page.updated && (
        <p>
          {page.updatedLabel ?? "Dernière mise à jour : "}
          <strong>{page.updated}</strong>
        </p>
      )}

      {page.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.blocks.map((block, index) =>
            block.type === "p" ? (
              <p key={index}>{block.text}</p>
            ) : (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}
    </div>
  );
}
