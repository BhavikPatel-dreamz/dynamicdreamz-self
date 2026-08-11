import { siteConfig } from "@/data/site";

export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteConfig.url;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath =
    normalizedPath.length > 1 && normalizedPath.endsWith("/")
      ? normalizedPath.slice(0, -1)
      : normalizedPath;

  return `${siteConfig.url}${canonicalPath}`;
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
