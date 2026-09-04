import path from "node:path";
import type { NextConfig } from "next";

const modernBrowserPolyfills = path.join(process.cwd(), "src/lib/modern-browser-polyfills.js");

const allowSearchIndexing = process.env.ALLOW_SEARCH_INDEXING === "true";

const legacyBlogSlugs = [
  "how-to-do-ab-testing",
  "ai-recommendation-system",
  "responsive-design-for-ecommerce",
  "top-payment-methods-for-shopify-store",
  "shopify-apps-for-email-marketing",
  "shopify-seo-apps",
  "shopify-themes-for-jewelry",
  "ecommerce-call-to-action-examples",
  "shopify-email-popups-alternatives",
  "top-5-shopify-themes-for-the-fashion-and-beauty-industry-in-2024",
  "shopify-website-development-cost-breakdown-a-complete-guide",
  "signs-to-start-using-white-label-services",
  "benefits-of-white-labeling-agency",
  "what-is-a-white-label-agency",
  "how-to-choose-the-right-shopify-app",
  "guide-to-hiring-shopify-expert",
  "how-to-hire-shopify-development-agency",
  "key-benefits-of-choosing-shopify",
  "shopify-plus-in-action-success-stories-and-case-studies",
] as const;

const oneYearInSeconds = 60 * 60 * 24 * 365;

const staticAssetCacheControl = {
  key: "Cache-Control",
  value: `public, max-age=${oneYearInSeconds}, stale-while-revalidate=${oneYearInSeconds}`,
};

const nextConfig: NextConfig = {
  // Public page URLs never end in a slash (the homepage `/` is the only
  // structural exception). Next.js redirects `/about-us/` to `/about-us`, and
  // `absoluteUrl` applies the same policy to canonical, Open Graph, sitemap,
  // robots, and JSON-LD output. `npm run check:urls` prevents policy drift.
  trailingSlash: false,
  experimental: {
    useTypeScriptCli: false,
    // App Router: emit imported CSS as <style> in HTML instead of render-blocking
    // <link rel="stylesheet"> (production only). Tailwind + next/font CSS is ~42 KiB.
    inlineCss: true,
  },
  reactCompiler: true,
  // Next.js always bundles `polyfill-module` (Array.flat, Object.hasOwn, …)
  // into the client runtime. Those APIs are Baseline for the browserslist
  // below; keep only `URL.canParse` for Safari 16.4 / Chrome 111 / Firefox 111.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-browser-polyfills.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-browser-polyfills.js",
    },
  },
  webpack(config) {
    const polyfillAliases = {
      "../build/polyfills/polyfill-module": modernBrowserPolyfills,
      "next/dist/build/polyfills/polyfill-module": modernBrowserPolyfills,
    };
    const { alias } = config.resolve;

    config.resolve.alias = Array.isArray(alias)
      ? [...alias, polyfillAliases]
      : { ...alias, ...polyfillAliases };

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: oneYearInSeconds,
  },
  async headers() {
    const assetCacheHeaders = [
      { source: "/assets/:path*", headers: [staticAssetCacheControl] },
      // Overrides Vercel's short browser TTL on the image optimizer so
      // Lighthouse "efficient cache lifetimes" can credit repeat visits.
      { source: "/_next/image", headers: [staticAssetCacheControl] },
    ];

    if (allowSearchIndexing) return assetCacheHeaders;

    const noIndexHeader = {
      key: "X-Robots-Tag",
      value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
    };

    return [
      { source: "/", headers: [noIndexHeader] },
      { source: "/:path*", headers: [noIndexHeader] },
      ...assetCacheHeaders,
    ];
  },
  async redirects() {
    return [
      {
        source: "/case-study",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/case-study/:slug*",
        destination: "/case-studies/:slug*",
        permanent: true,
      },
      {
        source: "/case-studies/rootedhuman",
        destination: "/case-studies/rooted-human",
        permanent: true,
      },
      {
        source: "/case-studies/factsandsupps",
        destination: "/case-studies/facts-and-supps",
        permanent: true,
      },
      {
        source: "/case-studies/candy-prom",
        destination: "/case-studies/candy-prom-and-evening",
        permanent: true,
      },
      {
        source: "/case-studies/beauti-software",
        destination: "/case-studies/beauty-software",
        permanent: true,
      },
      {
        source: "/blogs/page/:page",
        destination: "/blogs?page=:page",
        permanent: true,
      },
      {
        source: "/blogs/category/shopify",
        destination: "/blogs?category=shopify",
        permanent: true,
      },
      {
        source: "/blogs/category/wordpress",
        destination: "/blogs?category=wordpress",
        permanent: true,
      },
      {
        source: "/blogs/category/ecommerce",
        destination: "/blogs?category=ecommerce",
        permanent: true,
      },
      {
        source: "/blogs/category/big-commerce",
        destination: "/blogs?category=big-commerce",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      ...legacyBlogSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/blogs/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
