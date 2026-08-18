import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
