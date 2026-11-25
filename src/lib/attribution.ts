export const CF7_FIELD_NAMES = [
  "utm_source",
  "utm_medium",
  "first_source",
  "first_medium",
  "referrer",
  "landing_page",
  "submission_page",
] as const;

export const ATTRIBUTION_FIELDS = CF7_FIELD_NAMES;

export type AttributionField = (typeof CF7_FIELD_NAMES)[number];

const CONFIG = Object.freeze({
  VERSION: "2.2.0",
  SESSION_KEY: "ddz_visit_attribution",
  LEGACY_STORAGE_KEY: "ddz_lead_attribution",
  DEBUG_NAMESPACE: "DDZTracker",
  DIRECT_SOURCE: "Direct",
  DIRECT_MEDIUM: "Direct",
});

type PlatformEntry = {
  readonly domains: readonly string[];
  readonly source: string;
  readonly medium: string;
  readonly category: string;
};

const REVIEW_DIRECTORIES: readonly PlatformEntry[] = [
  { domains: ["clutch.co"], source: "Clutch", medium: "Review Directory", category: "Review" },
  { domains: ["goodfirms.co"], source: "GoodFirms", medium: "Review Directory", category: "Review" },
  { domains: ["designrush.com"], source: "DesignRush", medium: "Review Directory", category: "Review" },
  { domains: ["trustpilot.com"], source: "Trustpilot", medium: "Review Directory", category: "Review" },
  { domains: ["themanifest.com"], source: "Manifest", medium: "Review Directory", category: "Review" },
  { domains: ["agencyspotter.com"], source: "Agency Spotter", medium: "Review Directory", category: "Review" },
  { domains: ["techbehemoths.com"], source: "TechBehemoths", medium: "Review Directory", category: "Review" },
  { domains: ["sortlist.com", "sortlist.co.uk", "sortlist.us"], source: "Sortlist", medium: "Review Directory", category: "Review" },
  { domains: ["topdevelopers.co"], source: "TopDevelopers", medium: "Review Directory", category: "Review" },
  { domains: ["extract.co"], source: "Extract", medium: "Review Directory", category: "Review" },
  { domains: ["selectedfirms.co"], source: "SelectedFirms", medium: "Review Directory", category: "Review" },
  { domains: ["itfirms.co"], source: "IT Firms", medium: "Review Directory", category: "Review" },
  { domains: ["superbcompanies.com"], source: "SuperbCompanies", medium: "Review Directory", category: "Review" },
  { domains: ["softwareworld.co"], source: "SoftwareWorld", medium: "Review Directory", category: "Review" },
  { domains: ["digitalagencynetwork.com"], source: "Digital Agency Network", medium: "Review Directory", category: "Review" },
  { domains: ["g2.com"], source: "G2", medium: "Review Directory", category: "Review" },
  { domains: ["capterra.com"], source: "Capterra", medium: "Review Directory", category: "Review" },
  { domains: ["bark.com"], source: "Bark", medium: "Review Directory", category: "Review" },
  { domains: ["upcity.com"], source: "UpCity", medium: "Review Directory", category: "Review" },
  { domains: ["getapp.com"], source: "GetApp", medium: "Review Directory", category: "Review" },
  { domains: ["trustradius.com"], source: "TrustRadius", medium: "Review Directory", category: "Review" },
  { domains: ["softwareadvice.com"], source: "Software Advice", medium: "Review Directory", category: "Review" },
  { domains: ["crozdesk.com"], source: "Crozdesk", medium: "Review Directory", category: "Review" },
  { domains: ["financesonline.com"], source: "FinancesOnline", medium: "Review Directory", category: "Review" },
  { domains: ["provenexpert.com"], source: "ProvenExpert", medium: "Review Directory", category: "Review" },
  { domains: ["threebestrated.com"], source: "ThreeBestRated", medium: "Review Directory", category: "Review" },
  { domains: ["yelp.com"], source: "Yelp", medium: "Review Directory", category: "Review" },
  { domains: ["bbb.org"], source: "Better Business Bureau", medium: "Review Directory", category: "Review" },
  { domains: ["angi.com"], source: "Angi", medium: "Review Directory", category: "Review" },
  { domains: ["homeadvisor.com"], source: "HomeAdvisor", medium: "Review Directory", category: "Review" },
  { domains: ["thumbtack.com"], source: "Thumbtack", medium: "Review Directory", category: "Review" },
  { domains: ["houzz.com"], source: "Houzz", medium: "Review Directory", category: "Review" },
  { domains: ["saashub.com"], source: "SaaSHub", medium: "Review Directory", category: "Review" },
  { domains: ["alternativeto.net"], source: "AlternativeTo", medium: "Review Directory", category: "Review" },
  { domains: ["slant.co"], source: "Slant", medium: "Review Directory", category: "Review" },
  { domains: ["stackshare.io"], source: "StackShare", medium: "Review Directory", category: "Review" },
  { domains: ["glassdoor.com"], source: "Glassdoor", medium: "Review Directory", category: "Review" },
];

const FREELANCE_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["upwork.com"], source: "Upwork", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["fiverr.com"], source: "Fiverr", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["freelancer.com"], source: "Freelancer", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["peopleperhour.com"], source: "PeoplePerHour", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["guru.com"], source: "Guru", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["toptal.com"], source: "Toptal", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["99designs.com"], source: "99designs", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["designcrowd.com"], source: "DesignCrowd", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["behance.net"], source: "Behance", medium: "Portfolio Network", category: "Freelance" },
  { domains: ["dribbble.com"], source: "Dribbble", medium: "Portfolio Network", category: "Freelance" },
  { domains: ["flexjobs.com"], source: "FlexJobs", medium: "Job Board", category: "Freelance" },
  { domains: ["weworkremotely.com"], source: "We Work Remotely", medium: "Job Board", category: "Freelance" },
  { domains: ["remoteok.com"], source: "RemoteOK", medium: "Job Board", category: "Freelance" },
  { domains: ["wellfound.com"], source: "Wellfound", medium: "Job Board", category: "Freelance" },
  { domains: ["angel.co"], source: "AngelList", medium: "Job Board", category: "Freelance" },
  { domains: ["simplyhired.com"], source: "SimplyHired", medium: "Job Board", category: "Freelance" },
  { domains: ["indeed.com"], source: "Indeed", medium: "Job Board", category: "Freelance" },
  { domains: ["servicescape.com"], source: "ServiceScape", medium: "Freelance Marketplace", category: "Freelance" },
  { domains: ["contently.com"], source: "Contently", medium: "Freelance Marketplace", category: "Freelance" },
];

const AI_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["chat.openai.com", "chatgpt.com"], source: "ChatGPT", medium: "AI Referral", category: "AI" },
  { domains: ["perplexity.ai"], source: "Perplexity", medium: "AI Referral", category: "AI" },
  { domains: ["claude.ai"], source: "Claude", medium: "AI Referral", category: "AI" },
  { domains: ["gemini.google.com"], source: "Gemini", medium: "AI Referral", category: "AI" },
  { domains: ["copilot.microsoft.com"], source: "Microsoft Copilot", medium: "AI Referral", category: "AI" },
  { domains: ["you.com"], source: "You.com", medium: "AI Referral", category: "AI" },
  { domains: ["phind.com"], source: "Phind", medium: "AI Referral", category: "AI" },
  { domains: ["poe.com"], source: "Poe", medium: "AI Referral", category: "AI" },
  { domains: ["character.ai"], source: "Character.AI", medium: "AI Referral", category: "AI" },
  { domains: ["meta.ai"], source: "Meta AI", medium: "AI Referral", category: "AI" },
  { domains: ["grok.com", "x.ai"], source: "Grok", medium: "AI Referral", category: "AI" },
  { domains: ["chat.deepseek.com"], source: "DeepSeek", medium: "AI Referral", category: "AI" },
  { domains: ["chat.mistral.ai", "mistral.ai"], source: "Mistral Le Chat", medium: "AI Referral", category: "AI" },
  { domains: ["huggingface.co"], source: "HuggingChat", medium: "AI Referral", category: "AI" },
  { domains: ["pi.ai"], source: "Pi.ai", medium: "AI Referral", category: "AI" },
];

const SEARCH_ENGINES: readonly PlatformEntry[] = [
  { domains: ["maps.google.com"], source: "Google Maps", medium: "Organic Search", category: "Search" },
  { domains: ["news.google.com"], source: "Google News", medium: "Organic Search", category: "Search" },
  { domains: ["images.google.com"], source: "Google Images", medium: "Organic Search", category: "Search" },
  { domains: ["discover.google.com"], source: "Google Discover", medium: "Organic Search", category: "Search" },
  {
    domains: [
      "google.com",
      "google.co.uk",
      "google.ca",
      "google.com.au",
      "google.de",
      "google.fr",
      "google.co.in",
    ],
    source: "Google",
    medium: "Organic Search",
    category: "Search",
  },
  { domains: ["bing.com"], source: "Bing", medium: "Organic Search", category: "Search" },
  { domains: ["search.yahoo.com", "yahoo.com"], source: "Yahoo", medium: "Organic Search", category: "Search" },
  { domains: ["duckduckgo.com"], source: "DuckDuckGo", medium: "Organic Search", category: "Search" },
  { domains: ["search.brave.com"], source: "Brave Search", medium: "Organic Search", category: "Search" },
  { domains: ["yandex.com", "yandex.ru"], source: "Yandex", medium: "Organic Search", category: "Search" },
  { domains: ["baidu.com"], source: "Baidu", medium: "Organic Search", category: "Search" },
  { domains: ["naver.com"], source: "Naver", medium: "Organic Search", category: "Search" },
  { domains: ["ecosia.org"], source: "Ecosia", medium: "Organic Search", category: "Search" },
  { domains: ["startpage.com"], source: "Startpage", medium: "Organic Search", category: "Search" },
  { domains: ["search.aol.com"], source: "AOL Search", medium: "Organic Search", category: "Search" },
  { domains: ["ask.com"], source: "Ask.com", medium: "Organic Search", category: "Search" },
  { domains: ["wolframalpha.com"], source: "WolframAlpha", medium: "Organic Search", category: "Search" },
  { domains: ["qwant.com"], source: "Qwant", medium: "Organic Search", category: "Search" },
  { domains: ["sogou.com"], source: "Sogou", medium: "Organic Search", category: "Search" },
  { domains: ["seznam.cz"], source: "Seznam", medium: "Organic Search", category: "Search" },
];

const SOCIAL_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["linkedin.com"], source: "LinkedIn", medium: "Social", category: "Social" },
  { domains: ["facebook.com", "fb.com"], source: "Facebook", medium: "Social", category: "Social" },
  { domains: ["instagram.com"], source: "Instagram", medium: "Social", category: "Social" },
  { domains: ["threads.net"], source: "Threads", medium: "Social", category: "Social" },
  { domains: ["x.com", "twitter.com", "t.co"], source: "X", medium: "Social", category: "Social" },
  { domains: ["pinterest.com"], source: "Pinterest", medium: "Social", category: "Social" },
  { domains: ["reddit.com"], source: "Reddit", medium: "Social", category: "Social" },
  { domains: ["tiktok.com"], source: "TikTok", medium: "Social", category: "Social" },
  { domains: ["youtube.com", "youtu.be"], source: "YouTube", medium: "Social", category: "Social" },
  { domains: ["quora.com"], source: "Quora", medium: "Social", category: "Social" },
  { domains: ["snapchat.com"], source: "Snapchat", medium: "Social", category: "Social" },
  { domains: ["tumblr.com"], source: "Tumblr", medium: "Social", category: "Social" },
  { domains: ["whatsapp.com", "wa.me"], source: "WhatsApp", medium: "Social", category: "Social" },
  { domains: ["telegram.org", "t.me"], source: "Telegram", medium: "Social", category: "Social" },
  { domains: ["discord.com", "discord.gg"], source: "Discord", medium: "Social", category: "Social" },
  { domains: ["mastodon.social"], source: "Mastodon", medium: "Social", category: "Social" },
  { domains: ["bsky.app"], source: "Bluesky", medium: "Social", category: "Social" },
  { domains: ["wechat.com"], source: "WeChat", medium: "Social", category: "Social" },
  { domains: ["line.me"], source: "Line", medium: "Social", category: "Social" },
  { domains: ["viber.com"], source: "Viber", medium: "Social", category: "Social" },
  { domains: ["messenger.com"], source: "Facebook Messenger", medium: "Social", category: "Social" },
  { domains: ["vk.com"], source: "VK", medium: "Social", category: "Social" },
];

const DEVELOPER_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["github.com"], source: "GitHub", medium: "Developer Community", category: "Developer" },
  { domains: ["gitlab.com"], source: "GitLab", medium: "Developer Community", category: "Developer" },
  { domains: ["stackoverflow.com"], source: "StackOverflow", medium: "Developer Community", category: "Developer" },
  { domains: ["dev.to"], source: "Dev.to", medium: "Developer Community", category: "Developer" },
  { domains: ["hashnode.com"], source: "Hashnode", medium: "Developer Community", category: "Developer" },
  { domains: ["medium.com"], source: "Medium", medium: "Developer Community", category: "Developer" },
  { domains: ["bitbucket.org"], source: "Bitbucket", medium: "Developer Community", category: "Developer" },
  { domains: ["codepen.io"], source: "CodePen", medium: "Developer Community", category: "Developer" },
  { domains: ["producthunt.com"], source: "Product Hunt", medium: "Developer Community", category: "Developer" },
  { domains: ["news.ycombinator.com"], source: "Hacker News", medium: "Developer Community", category: "Developer" },
  { domains: ["sourceforge.net"], source: "SourceForge", medium: "Developer Community", category: "Developer" },
  { domains: ["npmjs.com"], source: "npm", medium: "Developer Community", category: "Developer" },
  { domains: ["freecodecamp.org"], source: "freeCodeCamp", medium: "Developer Community", category: "Developer" },
];

const EMAIL_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["mail.google.com"], source: "Gmail", medium: "Email", category: "Email" },
  { domains: ["outlook.com", "outlook.live.com", "outlook.office.com"], source: "Outlook", medium: "Email", category: "Email" },
  { domains: ["mail.yahoo.com"], source: "Yahoo Mail", medium: "Email", category: "Email" },
  { domains: ["mail.proton.me", "protonmail.com"], source: "ProtonMail", medium: "Email", category: "Email" },
  { domains: ["mail.zoho.com"], source: "Zoho Mail", medium: "Email", category: "Email" },
  { domains: ["mail.aol.com"], source: "AOL Mail", medium: "Email", category: "Email" },
  { domains: ["icloud.com"], source: "iCloud Mail", medium: "Email", category: "Email" },
  { domains: ["mail.ru"], source: "Mail.ru", medium: "Email", category: "Email" },
  { domains: ["gmx.com"], source: "GMX Mail", medium: "Email", category: "Email" },
];

const CMS_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["wordpress.com"], source: "WordPress.com", medium: "CMS Referral", category: "CMS" },
  { domains: ["wordpress.org"], source: "WordPress.org", medium: "CMS Referral", category: "CMS" },
  { domains: ["shopify.com"], source: "Shopify", medium: "CMS Referral", category: "CMS" },
  { domains: ["wix.com"], source: "Wix", medium: "CMS Referral", category: "CMS" },
  { domains: ["squarespace.com"], source: "Squarespace", medium: "CMS Referral", category: "CMS" },
  { domains: ["webflow.com"], source: "Webflow", medium: "CMS Referral", category: "CMS" },
  { domains: ["weebly.com"], source: "Weebly", medium: "CMS Referral", category: "CMS" },
  { domains: ["joomla.org"], source: "Joomla", medium: "CMS Referral", category: "CMS" },
  { domains: ["drupal.org"], source: "Drupal", medium: "CMS Referral", category: "CMS" },
  { domains: ["bigcommerce.com"], source: "BigCommerce", medium: "CMS Referral", category: "CMS" },
  { domains: ["godaddy.com"], source: "GoDaddy Website Builder", medium: "CMS Referral", category: "CMS" },
  { domains: ["elementor.com"], source: "Elementor", medium: "CMS Referral", category: "CMS" },
  { domains: ["hubspot.com"], source: "HubSpot", medium: "CMS Referral", category: "CMS" },
];

const MISC_PLATFORMS: readonly PlatformEntry[] = [
  { domains: ["crunchbase.com"], source: "Crunchbase", medium: "Business Directory", category: "Directory" },
  { domains: ["craigslist.org"], source: "Craigslist", medium: "Classifieds", category: "Directory" },
  { domains: ["blogspot.com"], source: "Blogger", medium: "Blog Referral", category: "Blog" },
  { domains: ["substack.com"], source: "Substack", medium: "Blog Referral", category: "Blog" },
  { domains: ["notion.site"], source: "Notion", medium: "Referral", category: "Productivity" },
  { domains: ["slack.com"], source: "Slack", medium: "Referral", category: "Productivity" },
  { domains: ["teams.microsoft.com"], source: "Microsoft Teams", medium: "Referral", category: "Productivity" },
  { domains: ["zoom.us"], source: "Zoom", medium: "Referral", category: "Productivity" },
  { domains: ["amazon.com"], source: "Amazon", medium: "Marketplace", category: "Marketplace" },
  { domains: ["appsumo.com"], source: "AppSumo", medium: "Marketplace", category: "Marketplace" },
  { domains: ["play.google.com"], source: "Google Play", medium: "App Store", category: "App Store" },
  { domains: ["apps.apple.com"], source: "Apple App Store", medium: "App Store", category: "App Store" },
  { domains: ["business.google.com"], source: "Google Business Profile", medium: "Local Listing", category: "Local" },
  { domains: ["bingplaces.com"], source: "Bing Places", medium: "Local Listing", category: "Local" },
  { domains: ["foursquare.com"], source: "Foursquare", medium: "Local Listing", category: "Local" },
  { domains: ["waze.com"], source: "Waze", medium: "Local Listing", category: "Local" },
];

const PLATFORM_DATABASE: readonly PlatformEntry[] = [
  ...REVIEW_DIRECTORIES,
  ...FREELANCE_PLATFORMS,
  ...AI_PLATFORMS,
  ...SEARCH_ENGINES,
  ...SOCIAL_PLATFORMS,
  ...DEVELOPER_PLATFORMS,
  ...EMAIL_PLATFORMS,
  ...CMS_PLATFORMS,
  ...MISC_PLATFORMS,
];

const DOMAIN_LOOKUP: ReadonlyArray<{ domain: string; platform: PlatformEntry }> = (() => {
  const pairs: Array<{ domain: string; platform: PlatformEntry }> = [];
  for (const platform of PLATFORM_DATABASE) {
    for (const domain of platform.domains) {
      pairs.push({ domain, platform });
    }
  }
  pairs.sort((a, b) => b.domain.length - a.domain.length);
  return pairs;
})();

const PAID_CLICK_ID_PARAMS: ReadonlyArray<{
  param: string;
  source: string;
  medium: string;
  category: string;
}> = [
  { param: "gclid", source: "Google Ads", medium: "Paid Search", category: "Paid" },
  { param: "gclsrc", source: "Google Ads", medium: "Paid Search", category: "Paid" },
  { param: "fbclid", source: "Facebook Ads", medium: "Paid Social", category: "Paid" },
  { param: "msclkid", source: "Microsoft Ads", medium: "Paid Search", category: "Paid" },
  { param: "ttclid", source: "TikTok Ads", medium: "Paid Social", category: "Paid" },
  { param: "li_fat_id", source: "LinkedIn Ads", medium: "Paid Social", category: "Paid" },
];

const BOT_PATTERNS: readonly RegExp[] = [
  /googlebot/i,
  /bingbot/i,
  /facebookexternalhit|facebot/i,
  /semrush/i,
  /ahrefs/i,
  /mj12bot/i,
  /dotbot/i,
  /yandexbot/i,
  /slackbot/i,
  /discordbot/i,
  /twitterbot/i,
  /linkedinbot/i,
];

export type VisitAttributionRecord = {
  utm_source: string;
  utm_medium: string;
  first_source: string;
  first_medium: string;
  referrer: string;
  landing_page: string;
};

let initialLoadWindowRef: unknown = null;

function getCurrentURL(): string {
  return window.location.href;
}

function getRawReferrer(): string {
  if (typeof window === "undefined" || typeof document === "undefined") return "";
  // On Next.js client-side route transitions, document.referrer stays at the initial document load referrer.
  // Only read document.referrer once per real browser document load to match WordPress MPA behavior.
  if (initialLoadWindowRef === window) {
    return "";
  }
  initialLoadWindowRef = window;
  return document.referrer || "";
}

function safeParseURL(url: string): URL | null {
  if (!url) return null;
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

function normalizeHostname(hostname: string): string {
  return (hostname || "").toLowerCase().replace(/^www\./, "").replace(/^m\./, "");
}

function hostnameMatches(hostname: string, domain: string): boolean {
  const normalizedHost = normalizeHostname(hostname);
  const normalizedDomain = normalizeHostname(domain);
  return (
    normalizedHost === normalizedDomain ||
    normalizedHost.endsWith(`.${normalizedDomain}`)
  );
}

function normalizeLabel(value: string): string {
  return (value || "").toString().trim().toLowerCase();
}

function getSiteHostname(): string {
  return typeof window !== "undefined" ? normalizeHostname(window.location.hostname) : "";
}

function extractHostname(rawUrl?: string | null): string {
  if (!rawUrl) return "";
  const parsed = safeParseURL(rawUrl);
  if (parsed?.hostname) return parsed.hostname;
  return rawUrl.includes("://") ? "" : rawUrl.split("/")[0]?.split(":")[0] || "";
}

export function isSameSite(url: string, extraHost?: string): boolean {
  const parsed = safeParseURL(url);
  if (!parsed?.hostname) return false;
  const host = normalizeHostname(parsed.hostname);

  if (typeof window !== "undefined" && window.location?.hostname) {
    return host === getSiteHostname();
  }

  if (extraHost && host === normalizeHostname(extraHost)) {
    return true;
  }

  if (typeof process !== "undefined" && process.env) {
    const envHosts = [
      extractHostname(process.env.NEXT_PUBLIC_SITE_URL),
      extractHostname(process.env.VERCEL_URL),
      extractHostname(process.env.VERCEL_PROJECT_PRODUCTION_URL),
    ].filter(Boolean);
    if (envHosts.some((envHost) => host === normalizeHostname(envHost))) {
      return true;
    }
  }

  return host === "dynamicdreamz.com" || host === "localhost" || host === "127.0.0.1";
}

function isExternalReferrer(referrerUrl: string): boolean {
  if (!referrerUrl) return false;
  return !isSameSite(referrerUrl);
}

function extractUTMParams(url: string): { utm_source: string; utm_medium: string } {
  const parsed = safeParseURL(url);
  if (!parsed) return { utm_source: "", utm_medium: "" };
  return {
    utm_source: parsed.searchParams.get("utm_source") || "",
    utm_medium: parsed.searchParams.get("utm_medium") || "",
  };
}

function mergeUTMParams(
  primary: { utm_source: string; utm_medium: string },
  fallback: { utm_source: string; utm_medium: string },
): { utm_source: string; utm_medium: string } {
  return {
    utm_source: primary.utm_source || fallback.utm_source || "",
    utm_medium: primary.utm_medium || fallback.utm_medium || "",
  };
}

function resolveUTMParams(urls: readonly string[]): { utm_source: string; utm_medium: string } {
  const empty = { utm_source: "", utm_medium: "" };
  return urls.reduce((merged, url) => mergeUTMParams(merged, extractUTMParams(url)), empty);
}

function hasUTMParams(url: string): boolean {
  const utm = extractUTMParams(url);
  return Boolean(utm.utm_source || utm.utm_medium);
}

function isNewPlatformVisit(referrerUrl: string, currentUrl: string): boolean {
  return (
    isExternalReferrer(referrerUrl) ||
    hasUTMParams(currentUrl) ||
    hasUTMParams(referrerUrl)
  );
}

function isBotUserAgent(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return BOT_PATTERNS.some((pattern) => pattern.test(ua));
}

function matchUTM(url: string) {
  const parsed = safeParseURL(url);
  if (!parsed) return null;
  const utmSource = parsed.searchParams.get("utm_source");
  if (!utmSource) return null;
  return {
    source: utmSource,
    medium: parsed.searchParams.get("utm_medium") || "Campaign",
    category: "Campaign",
  };
}

function matchPaidClickId(currentUrl: string) {
  const parsed = safeParseURL(currentUrl);
  if (!parsed) return null;
  const found = PAID_CLICK_ID_PARAMS.find((entry) => parsed.searchParams.has(entry.param));
  if (!found) return null;
  return { source: found.source, medium: found.medium, category: found.category };
}

function matchReferrer(referrerUrl: string) {
  const parsed = safeParseURL(referrerUrl);
  if (!parsed?.hostname) return null;
  const match = DOMAIN_LOOKUP.find((entry) =>
    hostnameMatches(parsed.hostname, entry.domain),
  );
  return match
    ? {
        source: match.platform.source,
        medium: match.platform.medium,
        category: match.platform.category,
      }
    : null;
}

function detectPlatform(referrerUrl: string, currentUrl: string) {
  const utmMatch = matchUTM(currentUrl) || matchUTM(referrerUrl);
  if (utmMatch) {
    return { referrerUrl, ...utmMatch };
  }

  const paidMatch = matchPaidClickId(currentUrl);
  if (paidMatch) {
    return { referrerUrl, ...paidMatch };
  }

  const referrerMatch = matchReferrer(referrerUrl);
  if (referrerMatch) {
    return { referrerUrl, ...referrerMatch };
  }

  return {
    referrerUrl,
    source: CONFIG.DIRECT_SOURCE,
    medium: CONFIG.DIRECT_MEDIUM,
    category: "Direct",
  };
}

function buildAttributionRecord(
  referrerUrl: string,
  currentUrl: string,
  landingPage: string,
): VisitAttributionRecord {
  const detection = detectPlatform(referrerUrl, currentUrl);
  const utm = resolveUTMParams([currentUrl, referrerUrl]);
  const source = normalizeLabel(detection.source);
  const medium = normalizeLabel(detection.medium);

  return {
    utm_source: normalizeLabel(utm.utm_source || source),
    utm_medium: normalizeLabel(utm.utm_medium || medium),
    first_source: source,
    first_medium: medium,
    referrer: referrerUrl || "",
    landing_page: landingPage || currentUrl,
  };
}

function clearLegacyStorage(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONFIG.LEGACY_STORAGE_KEY);
    // Also purge any older Next.js attribution keys if present
    for (const key of [
      ...CF7_FIELD_NAMES,
      "utm_campaign",
      "utm_term",
      "utm_content",
      "initial_landing_page",
      "initial_referrer",
      "last_external_referrer",
      "referring_page",
    ]) {
      window.localStorage.removeItem(`dd_${key}`);
      window.sessionStorage.removeItem(`dd_${key}`);
    }
  } catch {
    // Ignore storage errors
  }

  try {
    document.cookie = `${CONFIG.LEGACY_STORAGE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    document.cookie = `dd_attr=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  } catch {
    // Ignore cookie errors
  }
}

function loadVisitRecord(): VisitAttributionRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(CONFIG.SESSION_KEY);
    return raw ? (JSON.parse(raw) as VisitAttributionRecord) : null;
  } catch {
    return null;
  }
}

function saveVisitRecord(record: VisitAttributionRecord): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(CONFIG.SESSION_KEY, JSON.stringify(record));
  } catch {
    // Ignore storage errors
  }
}

function clearVisitRecord(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(CONFIG.SESSION_KEY);
  } catch {
    // Ignore storage errors
  }
}

function captureVisit(referrerUrl: string, currentUrl: string): VisitAttributionRecord {
  const existing = loadVisitRecord();
  const isNewVisit = isNewPlatformVisit(referrerUrl, currentUrl);
  const landingPage = isNewVisit || !existing ? currentUrl : existing.landing_page;
  const record = buildAttributionRecord(referrerUrl, currentUrl, landingPage);
  saveVisitRecord(record);
  return record;
}

/**
 * Computes full WordPress-compatible attribution data for the current browser session.
 * Returns null for bots (matching WP lead-source-tracker.js v2.2.0).
 */
export function getFullAttributionData(): Record<AttributionField, string> | null {
  if (typeof window === "undefined" || isBotUserAgent()) return null;

  const currentUrl = getCurrentURL();
  const referrerUrl = getRawReferrer();
  let visitData = loadVisitRecord();

  if (isNewPlatformVisit(referrerUrl, currentUrl) || !visitData) {
    visitData = captureVisit(referrerUrl, currentUrl);
  }

  if (!visitData) return null;

  const liveUtm = resolveUTMParams([currentUrl, referrerUrl]);
  const source = visitData.first_source;
  const medium = visitData.first_medium;

  return {
    utm_source: normalizeLabel(liveUtm.utm_source || visitData.utm_source || source),
    utm_medium: normalizeLabel(liveUtm.utm_medium || visitData.utm_medium || medium),
    first_source: source,
    first_medium: medium,
    referrer: visitData.referrer,
    landing_page: visitData.landing_page,
    submission_page: currentUrl,
  };
}

function registerDebugNamespace(): void {
  if (typeof window === "undefined") return;
  const win = window as unknown as Record<string, unknown>;
  win[CONFIG.DEBUG_NAMESPACE] = Object.freeze({
    debug() {
      const data = getFullAttributionData();
      console.groupCollapsed("%c[DDZTracker] Debug Snapshot", "color:#6c5ce7;font-weight:bold;");
      console.log("Version:", CONFIG.VERSION);
      console.log("Is bot:", isBotUserAgent());
      console.log("Raw referrer:", (typeof document !== "undefined" && document.referrer) || "(none — direct visit)");
      console.log("Storage:", this.storage());
      if (data) console.table(data);
      console.groupEnd();
      return data;
    },
    show() {
      const data = getFullAttributionData();
      if (data) console.table(data);
      return data;
    },
    clear() {
      clearVisitRecord();
      clearLegacyStorage();
      console.info("[DDZTracker] Attribution data cleared.");
    },
    version() {
      return CONFIG.VERSION;
    },
    storage() {
      return {
        backend: "sessionStorage",
        key: CONFIG.SESSION_KEY,
        hasData: Boolean(loadVisitRecord()),
        platformCount: PLATFORM_DATABASE.length,
        isBot: isBotUserAgent(),
      };
    },
  });
}

/**
 * Initializes visit attribution matching WordPress lead-source-tracker.js v2.2.0.
 */
export function trackAttributionVisit(): VisitAttributionRecord | null {
  if (typeof window === "undefined") return null;

  clearLegacyStorage();
  registerDebugNamespace();

  if (isBotUserAgent()) return null;

  const referrerUrl = getRawReferrer();
  const currentUrl = getCurrentURL();
  const existing = loadVisitRecord();

  if (isNewPlatformVisit(referrerUrl, currentUrl) || !existing) {
    return captureVisit(referrerUrl, currentUrl);
  }

  return existing;
}

function cleanInputValue(val: FormDataEntryValue | null | undefined): string {
  if (typeof val !== "string") return "";
  return val.trim();
}

/**
 * Resolves the 7 WordPress attribution fields for form submissions.
 */
export function resolveAttributionMap(
  formData?: FormData | null,
  options?: { preferFormData?: boolean },
): Record<AttributionField, string> {
  const data = getFullAttributionData();
  const preferFormData = Boolean(options?.preferFormData);
  const fromForm = (key: AttributionField) =>
    preferFormData && formData ? cleanInputValue(formData.get(key)) : "";

  if (!data) {
    return {
      utm_source: fromForm("utm_source"),
      utm_medium: fromForm("utm_medium"),
      first_source: fromForm("first_source"),
      first_medium: fromForm("first_medium"),
      referrer: fromForm("referrer"),
      landing_page: fromForm("landing_page"),
      submission_page: fromForm("submission_page"),
    };
  }

  return {
    utm_source: fromForm("utm_source") || data.utm_source,
    utm_medium: fromForm("utm_medium") || data.utm_medium,
    first_source: fromForm("first_source") || data.first_source,
    first_medium: fromForm("first_medium") || data.first_medium,
    referrer: fromForm("referrer") || data.referrer,
    landing_page: fromForm("landing_page") || data.landing_page,
    submission_page: fromForm("submission_page") || data.submission_page,
  };
}

/**
 * Populates hidden attribution <input> elements matching WP CF7Integration.populateForm.
 */
export function populateAttributionInputs(formElement: HTMLFormElement | null): void {
  if (!formElement) return;
  const data = getFullAttributionData();
  if (!data) return;

  for (const fieldName of CF7_FIELD_NAMES) {
    const field = formElement.elements.namedItem(fieldName);
    if (field instanceof HTMLInputElement) {
      field.value = data[fieldName] != null ? data[fieldName] : "";
    }
  }
}

function cleanServerAttrValue(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.trim().slice(0, 400);
}

/**
 * Server-side normalization matching WordPress lead-source-tracker.js v2.2.0:
 * defaults missing source/medium to "direct"/"direct" and leaves empty referrer blank.
 */
export function resolveServerAttribution(
  getValue: (field: AttributionField) => unknown,
  options?: { fallbackLandingPage?: string; fallbackSubmissionPage?: string },
): Record<AttributionField, string> {
  const rawSource = cleanServerAttrValue(getValue("utm_source"));
  const rawMedium = cleanServerAttrValue(getValue("utm_medium"));
  const rawFirstSource = cleanServerAttrValue(getValue("first_source"));
  const rawFirstMedium = cleanServerAttrValue(getValue("first_medium"));
  const rawReferrer = cleanServerAttrValue(getValue("referrer"));
  const rawLandingPage = cleanServerAttrValue(getValue("landing_page"));
  const rawSubmissionPage = cleanServerAttrValue(getValue("submission_page"));

  const defaultDirect = normalizeLabel(CONFIG.DIRECT_SOURCE);
  const first_source = rawFirstSource || rawSource || defaultDirect;
  const first_medium = rawFirstMedium || rawMedium || defaultDirect;
  const utm_source = rawSource || first_source;
  const utm_medium = rawMedium || first_medium;

  const submission_page = rawSubmissionPage || options?.fallbackSubmissionPage || "";
  const currentHost = extractHostname(submission_page);
  const referrer =
    rawReferrer && !isSameSite(rawReferrer, currentHost) ? rawReferrer : "";

  return {
    utm_source,
    utm_medium,
    first_source,
    first_medium,
    referrer,
    landing_page: rawLandingPage || options?.fallbackLandingPage || "",
    submission_page,
  };
}
