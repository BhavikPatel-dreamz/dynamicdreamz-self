import type { NextConfig } from "next";

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

const nextConfig: NextConfig = {
  // Public page URLs never end in a slash (the homepage `/` is the only
  // structural exception). Next.js redirects `/about-us/` to `/about-us`, and
  // `absoluteUrl` applies the same policy to canonical, Open Graph, sitemap,
  // robots, and JSON-LD output. `npm run check:urls` prevents policy drift.
  trailingSlash: false,
  experimental: {
    useTypeScriptCli: false,
  },
  reactCompiler: true,
  async headers() {
    if (allowSearchIndexing) return [];

    const noIndexHeader = {
      key: "X-Robots-Tag",
      value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
    };

    return [
      { source: "/", headers: [noIndexHeader] },
      { source: "/:path*", headers: [noIndexHeader] },
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
