import { siteConfig } from "@/data/site";

const FILE_EXTENSION_PATTERN = /\.[a-zA-Z0-9]+$/;

/**
 * Single source of truth for every absolute public URL on the site: canonical
 * tags, og:url, the sitemap, and all JSON-LD `url`/`@id`/image values flow
 * through here. It is aligned with `trailingSlash: true` in `next.config.ts`:
 * the homepage is serialized with a trailing slash (`https://.../`), and every
 * non-file page route is normalized to end in a trailing slash to preserve
 * legacy WordPress SEO equity and prevent redirect hops. File paths, queries,
 * and fragments are preserved. Keeping URL form in one function prevents
 * canonical/Open Graph, schema, and sitemap URLs from drifting to different
 * policies.
 */
export function absoluteUrl(path = "") {
  if (!path || path === "/") return `${siteConfig.url}/`;

  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      const url = new URL(path);
      const isFile = FILE_EXTENSION_PATTERN.test(url.pathname);
      const pathname = isFile
        ? url.pathname
        : url.pathname.endsWith("/")
          ? url.pathname
          : `${url.pathname}/`;
      return `${siteConfig.url}${pathname}${url.search}${url.hash}`;
    } catch {
      // ignore invalid URLs and fall through
    }
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}/`;
  const suffixIndex = normalizedPath.search(/[?#]/);
  const pathname = suffixIndex === -1 ? normalizedPath : normalizedPath.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : normalizedPath.slice(suffixIndex);
  const isFile = FILE_EXTENSION_PATTERN.test(pathname);
  const slashedPathname = isFile
    ? pathname
    : pathname.endsWith("/")
      ? pathname
      : `${pathname}/`;

  return `${siteConfig.url}${slashedPathname}${suffix}`;
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
