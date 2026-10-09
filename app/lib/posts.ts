import fs from "fs";
import path from "path";
import { defaultLocale, isLocale, type Locale } from "./i18n";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string;
  image?: string;
};

type Post = {
  metadata: Metadata;
  slug: string;
  lang: Locale;
  /** false quand aucune traduction n'existe et que le francais est renvoyé. */
  translated: boolean;
  content: string;
};

/** Nom de fichier attendu : slug.mdx (francais) ou slug.en.mdx, slug.es.mdx... */
const LOCALIZED_EXTENSION = /\.([a-z]{2})\.mdx$/i;

function parseFileName(fileName: string): { slug: string; lang: Locale } {
  const localized = fileName.match(LOCALIZED_EXTENSION);

  if (localized && isLocale(localized[1])) {
    return {
      slug: fileName.replace(LOCALIZED_EXTENSION, ""),
      lang: localized[1],
    };
  }

  return { slug: fileName.replace(/\.mdx$/, ""), lang: defaultLocale };
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): Post[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let { slug, lang } = parseFileName(file);
    return { metadata, slug, lang, translated: true, content };
  });
}

/**
 * Articles disponibles dans la langue demandee. Si aucun article n'existe
 * dans cette langue, la version francaise est renvoyee avec translated=false,
 * afin de ne jamais afficher une page vide.
 */
export function getBlogPosts(locale: Locale = defaultLocale): Post[] {
  const posts = getMDXData(path.join(process.cwd(), "content"));
  const localized = posts.filter((post) => post.lang === locale);

  if (localized.length > 0) {
    return localized;
  }

  return posts
    .filter((post) => post.lang === defaultLocale)
    .map((post) => ({ ...post, translated: false }));
}

export function getBlogPost(
  slug: string,
  locale: Locale = defaultLocale
): Post | undefined {
  const posts = getMDXData(path.join(process.cwd(), "content"));
  return (
    posts.find((post) => post.slug === slug && post.lang === locale) ??
    posts.find((post) => post.slug === slug && post.lang === defaultLocale)
  );
}

/** Tous les couples (langue, slug) existants, pour la generation statique. */
export function getAllPostSlugs(): { slug: string; lang: Locale }[] {
  return getMDXData(path.join(process.cwd(), "content")).map((post) => ({
    slug: post.slug,
    lang: post.lang,
  }));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
