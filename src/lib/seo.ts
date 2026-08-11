import { siteConfig } from "@/data/site";

/**
 * Single source of truth for every absolute public URL on the site: canonical
 * tags, og:url, the sitemap, and all JSON-LD `url`/`@id`/image values flow
 * through here. It is deliberately aligned with `trailingSlash: true` in
 * `next.config.ts`: it preserves the caller's path exactly, so route paths
 * (which carry a trailing slash, e.g. "/about-us/") stay trailing-slash and
 * match the served URL, while asset paths (files with an extension, e.g.
 * "/assets/og/x.png") stay slash-free. Keeping URL form in one function is what
 * prevents canonical/og and schema/sitemap from ever drifting to different
 * slash policies again. If the trailing-slash policy changes, change it here.
 */
export function absoluteUrl(path = "") {
  if (!path || path === "/") return `${siteConfig.url}/`;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function getBuildDate() {
  const sourceDateEpoch = process.env.SOURCE_DATE_EPOCH;
  if (sourceDateEpoch) {
    const timestamp = Number(sourceDateEpoch) * 1000;
    if (Number.isFinite(timestamp)) return new Date(timestamp);
  }

  const buildDate =
    process.env.BUILD_DATE ??
    process.env.NEXT_BUILD_DATE ??
    process.env.VERCEL_GIT_COMMIT_DATE;

  if (buildDate) {
    const parsed = new Date(buildDate);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }

  return new Date();
}
