import Link from "next/link";
import Image from "next/image";
import { metaData, socialLinks } from "./lib/config";
import { formatDate, getBlogPosts } from "./lib/posts";
import { projects } from "./projects/project-data";

export const dynamic = "force-static";

export default function Page() {
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
          <h1 className="text-2xl font-medium leading-tight">{metaData.name}</h1>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            Développeur &amp; passionné par l&apos;IA
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-8">
        <p>{metaData.description}</p>
        <p>
          Je partage ici mes{" "}
          <Link href="/projects">projets open source</Link> et mes{" "}
          <Link href="/blog">réflexions sur le développement</Link>. Le code de
          ce site est{" "}
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            open source
          </a>
          .
        </p>
      </div>

      {projects.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-medium">Projets</h2>
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
                  <h3 className="text-black dark:text-white">{project.title}</h3>
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
              href="/projects"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              Tous les projets →
            </Link>
          </div>
        </>
      )}

      {posts.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-medium">Derniers articles</h2>
          <div className="flex flex-col">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
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
              href="/blog"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              Tous les articles →
            </Link>
          </div>
        </>
      )}

      <h2 className="mb-4 mt-10 text-xl font-medium">Me retrouver</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          GitHub
        </a>
        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          YouTube
        </a>
        <a
          href={socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          TikTok
        </a>
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          Discord
        </a>
        <a
          href={socialLinks.email}
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          Email
        </a>
      </div>
    </section>
  );
}