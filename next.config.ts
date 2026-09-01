import type { NextConfig } from "next";

const allowSearchIndexing = process.env.ALLOW_SEARCH_INDEXING === "true";

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
    ];
  },
};

export default nextConfig;
