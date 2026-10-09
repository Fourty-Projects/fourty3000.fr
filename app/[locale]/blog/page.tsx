import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getBlogPosts } from "../../lib/posts";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, type Locale } from "../../lib/i18n";

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
    title: dictionary.meta.blogTitle,
    description: dictionary.meta.blogDescription,
  };
}

export default async function BlogPosts({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(activeLocale);
  const allBlogs = getBlogPosts(activeLocale);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">{dictionary.blog.title}</h1>

      {allBlogs.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">
          {dictionary.blog.empty}
        </p>
      ) : (
        <div>
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
                href={`/${activeLocale}/blog/${post.slug}`}
                hrefLang={post.lang}
              >
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                  <h2 className="text-black dark:text-white">
                    {post.metadata.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </section>
  );
}