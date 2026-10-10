import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { metaData } from "./lib/config";
import { locales } from "./lib/i18n";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "blog",
    "projects",
    "contact",
    "mentions-legales",
    "cgu",
    "politique-confidentialite",
  ];

  const today = new Date().toISOString().split("T")[0];

  // Chaque route existe dans chaque langue : le bon sitemap exige
  // des URL distinctes par version.
  const routes = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BaseUrl}${locale}${route ? `/${route}` : ""}`,
      lastModified: today,
      changeFrequency: (route === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route === "" ? 1 : 0.7,
    }))
  );

  // Pour les articles, on n'annonce que les langues reellement traduites.
  const blogs = locales.flatMap((locale) =>
    getBlogPosts(locale)
      .filter((post) => post.lang === locale)
      .map((post) => ({
        url: `${BaseUrl}${locale}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
  );

  return [...routes, ...blogs];
}