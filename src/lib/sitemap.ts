import { blogPostIndex } from "@/content/blog-post-details";
import { caseStudyDetails } from "@/content/case-study-details";
import { type PageSeoConfig, pageSeoEntries } from "@/data/seo";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { absoluteUrl } from "@/lib/seo";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function formatDate(date: string | number | Date): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

export function getPageSitemapXml(): string {
  if (!isSearchIndexingEnabled()) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>`;
  }

  const eligiblePages = pageSeoEntries.filter((page: PageSeoConfig) => {
    if (!page.robots) return true;
    if (typeof page.robots === "object" && "index" in page.robots && page.robots.index === false) {
      return false;
    }
    return true;
  });

  eligiblePages.sort((a, b) => {
    if (a.path === "/" || a.path === "") return -1;
    if (b.path === "/" || b.path === "") return 1;
    return a.path.localeCompare(b.path);
  });

  const urlsXml = eligiblePages
    .map((page) => {
      const loc = escapeXml(absoluteUrl(page.path));
      const lastmod = formatDate(page.modifiedTime);
      const hasSpecificImage =
        page.image?.path &&
        page.image.path !== "/assets/og/dynamic-dreamz-company.png" &&
        page.image.path !== "/assets/og/homepage.png";

      const imageXml = hasSpecificImage
        ? `\n    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(page.image.path))}</image:loc>\n    </image:image>`
        : "";

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${imageXml}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;
}

export function getCaseStudySitemapXml(): string {
  if (!isSearchIndexingEnabled()) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>`;
  }

  const urlsXml = caseStudyDetails
    .map((item) => {
      const loc = escapeXml(absoluteUrl(`/case-studies/${item.slug}`));
      const lastmod = formatDate(item.seo.lastModified);
      const imageXml = item.hero?.image?.src
        ? `\n    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(item.hero.image.src))}</image:loc>\n    </image:image>`
        : "";

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${imageXml}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;
}

export function getPostSitemapXml(): string {
  if (!isSearchIndexingEnabled()) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>`;
  }

  const urlsXml = blogPostIndex
    .map((item) => {
      const loc = escapeXml(absoluteUrl(item.href));
      const lastmod = formatDate(item.modified);
      const imageXml = item.image
        ? `\n    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(item.image))}</image:loc>\n    </image:image>`
        : "";

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${imageXml}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;
}

export function getSitemapIndexXml(): string {
  if (!isSearchIndexingEnabled()) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>`;
  }

  const pageDates = pageSeoEntries
    .filter(
      (p) =>
        !p.robots ||
        !(typeof p.robots === "object" && "index" in p.robots && p.robots.index === false),
    )
    .map((p) => new Date(p.modifiedTime).getTime())
    .filter((t) => !Number.isNaN(t));
  const maxPageDate =
    pageDates.length > 0
      ? new Date(Math.max(...pageDates)).toISOString()
      : new Date().toISOString();

  const caseStudyDates = caseStudyDetails
    .map((c) => new Date(c.seo.lastModified).getTime())
    .filter((t) => !Number.isNaN(t));
  const maxCaseStudyDate =
    caseStudyDates.length > 0
      ? new Date(Math.max(...caseStudyDates)).toISOString()
      : new Date().toISOString();

  const postDates = blogPostIndex
    .map((b) => new Date(b.modified).getTime())
    .filter((t) => !Number.isNaN(t));
  const maxPostDate =
    postDates.length > 0
      ? new Date(Math.max(...postDates)).toISOString()
      : new Date().toISOString();

  const sitemaps = [
    { loc: absoluteUrl("/page-sitemap.xml"), lastmod: maxPageDate },
    { loc: absoluteUrl("/case-study-sitemap.xml"), lastmod: maxCaseStudyDate },
    { loc: absoluteUrl("/post-sitemap.xml"), lastmod: maxPostDate },
  ];

  const sitemapsXml = sitemaps
    .map(
      (s) =>
        `  <sitemap>\n    <loc>${escapeXml(s.loc)}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapsXml}
</sitemapindex>`;
}
