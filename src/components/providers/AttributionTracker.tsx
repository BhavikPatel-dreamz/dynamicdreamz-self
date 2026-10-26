"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Parses external HTTP referrer to infer organic search or referral attribution
 * matching WordPress HandL / AFL UTM tracking plugin behavior.
 */
function detectReferrerAttribution(referrer: string): { source: string; medium: string } | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();

    // Ignore internal navigation
    if (host.includes("dynamicdreamz.com") || host === "localhost" || host.includes("127.0.0.1")) {
      return null;
    }

    // Search engines -> "organic search"
    if (host.includes("google.")) return { source: "google", medium: "organic search" };
    if (host.includes("bing.")) return { source: "bing", medium: "organic search" };
    if (host.includes("yahoo.")) return { source: "yahoo", medium: "organic search" };
    if (host.includes("duckduckgo.")) return { source: "duckduckgo", medium: "organic search" };
    if (host.includes("baidu.")) return { source: "baidu", medium: "organic search" };
    if (host.includes("yandex.")) return { source: "yandex", medium: "organic search" };
    if (host.includes("ecosia.")) return { source: "ecosia", medium: "organic search" };

    // Social networks -> "social"
    if (host.includes("linkedin.")) return { source: "linkedin", medium: "social" };
    if (host.includes("facebook.")) return { source: "facebook", medium: "social" };
    if (host.includes("instagram.")) return { source: "instagram", medium: "social" };
    if (host.includes("twitter.") || host === "t.co" || host.includes("x.com")) {
      return { source: "twitter", medium: "social" };
    }
    if (host.includes("pinterest.")) return { source: "pinterest", medium: "social" };
    if (host.includes("youtube.")) return { source: "youtube", medium: "social" };
    if (host.includes("reddit.")) return { source: "reddit", medium: "social" };

    // Other external websites -> "referral"
    const cleanHost = host.replace(/^www\./, "");
    return { source: cleanHost, medium: "referral" };
  } catch {
    return null;
  }
}

/**
 * Tracks entry landing page, referring content page, and UTM attribution
 * across user navigation so forms on conversion pages (/request-quote, /contact-us)
 * submit the exact page that referred/redirected the visitor.
 */
export function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fullUrl = window.location.href;
    const searchParams = new URLSearchParams(window.location.search);

    // 1. Initial entry landing page (first page the visitor entered on the site)
    if (!sessionStorage.getItem("dd_initial_landing_page")) {
      sessionStorage.setItem("dd_initial_landing_page", fullUrl);
    }

    // 2. Initial external referrer (e.g. Google, LinkedIn, partner sites)
    if (!sessionStorage.getItem("dd_initial_referrer") && document.referrer) {
      sessionStorage.setItem("dd_initial_referrer", document.referrer);
    }

    // 3. Persist UTM attribution parameters across internal navigation
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ] as const;

    let hasExplicitUtm = false;
    for (const key of utmKeys) {
      const val = searchParams.get(key);
      if (val) {
        hasExplicitUtm = true;
        sessionStorage.setItem(`dd_${key}`, val);
        if (key === "utm_source" && !sessionStorage.getItem("dd_first_source")) {
          sessionStorage.setItem("dd_first_source", val);
        }
        if (key === "utm_medium" && !sessionStorage.getItem("dd_first_medium")) {
          sessionStorage.setItem("dd_first_medium", val);
        }
      }
    }

    // 4. Infer organic search or referral attribution from external referrer if no explicit UTM in URL
    if (!hasExplicitUtm && !sessionStorage.getItem("dd_utm_source") && document.referrer) {
      const detected = detectReferrerAttribution(document.referrer);
      if (detected) {
        sessionStorage.setItem("dd_utm_source", detected.source);
        sessionStorage.setItem("dd_utm_medium", detected.medium);
        if (!sessionStorage.getItem("dd_first_source")) {
          sessionStorage.setItem("dd_first_source", detected.source);
        }
        if (!sessionStorage.getItem("dd_first_medium")) {
          sessionStorage.setItem("dd_first_medium", detected.medium);
        }
      }
    }

    // 5. Capture the content page that refers/redirects the user to the conversion page
    const isConversionPage =
      pathname === "/request-quote" ||
      pathname === "/request-a-quote" ||
      pathname === "/contact-us" ||
      pathname === "/career-apply-now";

    if (!isConversionPage) {
      sessionStorage.setItem("dd_referring_page", fullUrl);
    }
  }, [pathname]);

  return null;
}
