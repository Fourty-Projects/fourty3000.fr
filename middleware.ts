import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./lib/i18n";

/**
 * Redirige la racine vers /fr (ou vers la langue du navigateur) et laisse
 * passer les requêtes qui portent déjà un préfixe de langue.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    // Retire un éventuel préfixe de langue double (/fr/en/...).
    const segments = pathname.split("/").filter(Boolean);
    const seen = new Set<string>();
    const deduped = segments.filter((segment) => {
      if (isLocale(segment)) {
        if (seen.has(segment)) return false;
        seen.add(segment);
      }
      return true;
    });
    if (deduped.length !== segments.length) {
      const url = request.nextUrl.clone();
      url.pathname = deduped.length ? `/${deduped.join("/")}` : "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Ignorer les fichiers statiques et les routes techniques.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/markdown-guide-cover") ||
    pathname.startsWith("/og") ||
    pathname.startsWith("/feed") ||
    /\.(ico|png|jpg|jpeg|svg|webp|avif|txt|xml|json|woff2?|css|js|map)$/.test(
      pathname
    )
  ) {
    return NextResponse.next();
  }

  const preferred = request.cookies.get("locale")?.value;
  const locale =
    preferred && isLocale(preferred)
      ? preferred
      : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Tout sauf les fichiers publics et les images servies par next/image.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|txt|xml|json|css|js|woff|woff2)$).*)",
  ],
};
