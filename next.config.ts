import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live dynamicdreamz.com site canonicalizes to trailing-slash URLs
  // (e.g. /about-us/), and no-slash requests 301 there. We serve the same
  // trailing-slash URLs to preserve indexed URL equity 1:1 on migration.
  // This policy is the single trailing-slash source of truth: canonical,
  // og:url, sitemap, and JSON-LD all resolve through `absoluteUrl`, which is
  // aligned with it. Changing this value means auditing `absoluteUrl` too.
  trailingSlash: true,
  experimental: {
    useTypeScriptCli: false,
  },
  reactCompiler: true,
};

export default nextConfig;
