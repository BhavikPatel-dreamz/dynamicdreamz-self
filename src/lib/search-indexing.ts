import type { Metadata } from "next";

/**
 * Search indexing is blocked until launch. Set `ALLOW_SEARCH_INDEXING=true`
 * at build/runtime to restore public Google/Bing indexing, sitemap
 * advertisement, and indexable robots metadata.
 *
 * Google can still crawl so it can honor `noindex`. Blocking crawl in
 * robots.txt would hide the noindex signal and can still leave URLs indexed.
 */
export function isSearchIndexingEnabled() {
  return process.env.ALLOW_SEARCH_INDEXING === "true";
}

export const blockedSearchRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
    nosnippet: true,
    noarchive: true,
  },
};

export const xRobotsTagNoIndex = "noindex, nofollow, noarchive, nosnippet, noimageindex";
