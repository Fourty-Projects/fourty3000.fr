import Link from "next/link";
import Image from "next/image";
import { metaData, socialLinks } from "../lib/config";
import { formatDate, getBlogPosts } from "../lib/posts";
import { getDictionary } from "../lib/dictionaries";
import { isLocale, type Locale } from "../lib/i18n";
import { projects } from "../projects/project-data";

export const dynamic = "force-static";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);

  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <section>
      <div className="flex items-center gap-4 sm:gap-5">
        <Image
          src="/profile.png"
          alt={`Photo de profil de ${metaData.name}`}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 object-cover shrink-0 grayscale hover:grayscale-0 transition-all"
          width={160}
          height={160}
          priority
        />
        <div className="min-w-0">
          <h1 className="text-2xl font-medium leading-tight">
            {metaData.name}
          </h1>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            {dictionary.home.tagline}
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-8">
        <p>{metaData.description}</p>
        <p>
          {dictionary.home.introStart}{" "}
          <Link href={`/${activeLocale}/projects`}>
            {dictionary.home.projectsLink}
          </Link>{" "}
          {dictionary.home.introMiddle}{" "}
          <Link href={`/${activeLocale}/blog`}>{dictionary.home.blogLink}</Link>
          . {dictionary.home.introEnd}{" "}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.home.openSource}
          </a>
          .
        </p>
      </div>

      {projects.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-medium">
            {dictionary.home.projects}
          </h2>
          <div className="flex flex-col">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.url}
                className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row justify-between items-start sm:items-center">
                  <h3 className="text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-2">
            <Link
              href={`/${activeLocale}/projects`}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              {dictionary.home.allProjects} →
            </Link>
          </div>
        </>
      )}

      {posts.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-medium">
            {dictionary.home.latestPosts}
          </h2>
          <div className="flex flex-col">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${activeLocale}/blog/${post.slug}`}
                className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-y-0 sm:space-x-2">
                  <h3 className="text-black dark:text-white">
                    {post.metadata.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {post.metadata.summary}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-2">
            <Link
              href={`/${activeLocale}/blog`}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              {dictionary.home.allPosts} →
            </Link>
          </div>
        </>
      )}

      <h2 className="mb-4 mt-10 text-xl font-medium">
        {dictionary.home.findMe}
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {[
          { href: socialLinks.github, label: "GitHub" },
          { href: socialLinks.youtube, label: "YouTube" },
          { href: socialLinks.tiktok, label: "TikTok" },
          { href: socialLinks.discord, label: "Discord" },
          { href: socialLinks.email, label: "Email" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}