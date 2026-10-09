import "../globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Navbar } from "../components/nav";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-switch";
import { metaData } from "../lib/config";
import { getDictionary } from "../lib/dictionaries";
import { isLocale, locales, type Locale } from "../lib/i18n";

const inter = Inter({ subsets: ["latin"] });

/** Les deux versions linguistiques du site, pour le SEO. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";

  const languageAlternates = Object.fromEntries(
    locales.map((code) => [code, `${metaData.baseUrl}${code}`])
  );

  return {
    metadataBase: new URL(metaData.baseUrl),
    title: {
      default: metaData.title,
      template: `%s | ${metaData.title}`,
    },
    description: metaData.description[activeLocale],
    alternates: {
      canonical: `${metaData.baseUrl}${activeLocale}`,
      languages: languageAlternates,
    },
    openGraph: {
      images: metaData.ogImage,
      title: metaData.title,
      description: metaData.description[activeLocale],
      url: `${metaData.baseUrl}${activeLocale}`,
      siteName: metaData.name,
      locale: activeLocale === "fr" ? "fr_FR" : "en_GB",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: metaData.name,
      card: "summary_large_image",
    },
    icons: {
      // Les fichiers du template sont en realite des PNG (signature 89 50 4E 47)
      // mal renommes en .ico. On pointe vers l'extension reelle, sinon le
      // navigateur rejette le favicon et affiche son icone par defaut.
      icon: [
        { url: "/logo.png", type: "image/png", sizes: "256x256" },
        { url: "/logo.png", type: "image/png", sizes: "32x32" },
        { url: "/logo.png", type: "image/png", sizes: "16x16" },
      ],
      apple: { url: "/logo.png", type: "image/png", sizes: "180x180" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : "fr";

  return (
    <html lang={activeLocale} className={`${inter.className}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full">
            <Navbar locale={activeLocale} />
            {children}
            <Footer locale={activeLocale} />
            {/* Widget de discussion Brevo Conversations.
                lazyOnload : injecte le script apres le chargement de la page,
                sans bloquer ni ralentir le rendu initial. */}
            <Script id="brevo-conversations" strategy="lazyOnload">
              {`
                (function(d, w, c) {
                  w.BrevoConversationsID = '6ac643e82967d1b71007818a';
                  w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                  };
                  var s = d.createElement('script');
                  s.async = true;
                  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                  if (d.head) d.head.appendChild(s);
                })(document, window, 'BrevoConversations');
              `}
            </Script>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
