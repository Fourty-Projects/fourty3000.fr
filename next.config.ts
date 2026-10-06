
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // --- Optimisation memoire (hebergement mutualise ~1 Go) ---
  // Reduit le pic de RAM pendant next build (experimental mais faible risque)
  experimental: {
    webpackMemoryOptimizations: true,
    // Pas de prechargement des pages au demarrage -> demarrage plus leger
    preloadEntriesOnStart: false,
  },

  // Les source maps consomment beaucoup de RAM et de disque au build
  productionBrowserSourceMaps: false,

  // L analyse TypeScript est la phase la plus gourmande : desactivee ici car
  // le typecheck est deja fait en local/CI via `tsc --noEmit`.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
  },
  async headers() {
    return [
      {
        source: "/photos/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/rss",
        destination: "/feed/rss.xml",
      },
      {
        source: "/feed",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
      {
        source: "/json",
        destination: "/feed/feed.json",
      },
    ];
  },
};

export default nextConfig;
