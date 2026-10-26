import { siteConfig } from "@/data/site";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { absoluteUrl } from "@/lib/seo";

export const INDEXNOW_KEY = "e3d4891b29a141b7bfd1c4f52e46b9a8";
export const INDEXNOW_KEY_LOCATION = `${siteConfig.url}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export interface IndexNowResponse {
  success: boolean;
  status?: number;
  message?: string;
  error?: string;
  submittedUrls?: string[];
}

/**
 * Submits one or more URLs to the IndexNow protocol (Bing, Yandex, Seznam, Naver)
 * for immediate crawl indexing.
 */
export async function submitToIndexNow(
  urls: string | readonly string[],
): Promise<IndexNowResponse> {
  if (!isSearchIndexingEnabled()) {
    return {
      success: true,
      message: "IndexNow submission skipped in non-indexing environment.",
    };
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];
  const host = new URL(siteConfig.url).host;

  const normalizedUrls = urlArray
    .map((url) => (url.startsWith("http") ? url : absoluteUrl(url)))
    .filter((url) => {
      try {
        const parsed = new URL(url);
        return parsed.host === host;
      } catch {
        return false;
      }
    });

  if (normalizedUrls.length === 0) {
    return {
      success: false,
      error: "No valid URLs provided matching the host domain.",
    };
  }

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: normalizedUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // 200 OK or 202 Accepted indicate successful submission
    if (response.ok || response.status === 200 || response.status === 202) {
      return {
        success: true,
        status: response.status,
        message: `Successfully submitted ${normalizedUrls.length} URL(s) to IndexNow.`,
        submittedUrls: normalizedUrls,
      };
    }

    const text = await response.text();
    return {
      success: false,
      status: response.status,
      error: `IndexNow returned status ${response.status}: ${text}`,
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error contacting IndexNow.",
    };
  }
}
