import { siteConfig } from "@/data/site";

/**
 * Single source of truth for every absolute public URL on the site: canonical
 * tags, og:url, the sitemap, and all JSON-LD `url`/`@id`/image values flow
 * through here. It is deliberately aligned with `trailingSlash: false` in
 * `next.config.ts`: the homepage is serialized as the bare origin, while every
 * non-root route is normalized to the no-trailing-slash form. File paths,
 * queries, and fragments are preserved. Keeping URL form in one function
 * prevents canonical/Open Graph, schema, and sitemap URLs from drifting to
 * different policies.
 */
export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteConfig.url;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const suffixIndex = normalizedPath.search(/[?#]/);
  const pathname = suffixIndex === -1 ? normalizedPath : normalizedPath.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : normalizedPath.slice(suffixIndex);
  const slashlessPathname = pathname === "/" ? pathname : pathname.replace(/\/+$/, "");

  return `${siteConfig.url}${slashlessPathname}${suffix}`;
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
