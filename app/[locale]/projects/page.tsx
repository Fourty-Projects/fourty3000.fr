import type { Metadata } from "next";
import { ProjectCarousel } from "../../components/project-carousel";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";
import { projects } from "./project-data";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  return {
    title: dictionary.meta.projectsTitle,
    description: dictionary.meta.projectsDescription,
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
        {dictionary.projects.title}
      </h1>
      <ProjectCarousel projects={projects} labels={dictionary.projects} />
    </section>
  );
}