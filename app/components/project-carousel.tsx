"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "../[locale]/projects/project-data";
import type { Locale } from "../lib/i18n";

const AUTO_SCROLL_MS = 5000;

interface CarouselLabels {
  visit: string;
  previous: string;
  next: string;
  goTo: string;
  empty: string;
  title: string;
}

/**
 * Carrousel de projets : defilement automatique toutes les cinq secondes,
 * interruption au survol / focus, et fleches pour un defilement manuel.
 */
export function ProjectCarousel({
  projects,
  labels,
  locale,
}: {
  projects: Project[];
  labels: CarouselLabels;
  locale: Locale;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const count = projects.length;

  // Respecte le reglage systeme « moins d'animations ».
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  // Defilement automatique, suspendu des que l'utilisateur interagit.
  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_SCROLL_MS);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  // Aligne la piste de défilement sur la carte courante.
  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [index, reduceMotion]);

  if (count === 0) return null;

  return (
    <section
      aria-roledescription="carrousel"
      aria-label={labels.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
        <ul
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, position) => (
            <li
              key={project.title}
              className="w-full shrink-0 snap-center"
              aria-hidden={position !== index}
            >
              <div className="flex h-full flex-col justify-between gap-4 px-12 py-6 sm:px-14 sm:py-8">
                <div>
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h2 className="text-lg font-medium text-black dark:text-white">
                      {project.title}
                    </h2>
                    <p className="tabular-nums text-sm text-neutral-500 dark:text-neutral-400">
                      {project.year}
                    </p>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {project.description[locale]}
                  </p>
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
                  tabIndex={position === index ? 0 : -1}
                >
                  {labels.visit} →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={labels.previous}
              className="absolute top-1/2 left-1.5 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-1.5 text-neutral-700 shadow-sm transition hover:bg-white hover:text-black dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={labels.next}
              className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-1.5 text-neutral-700 shadow-sm transition hover:bg-white hover:text-black dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {projects.map((project, position) => (
            <button
              key={project.title}
              type="button"
              onClick={() => goTo(position)}
              aria-label={labels.goTo.replace("{title}", project.title)}
              aria-current={position === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                position === index
                  ? "bg-neutral-800 dark:bg-neutral-200"
                  : "bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}