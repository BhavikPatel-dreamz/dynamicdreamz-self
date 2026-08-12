import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

type OpenGraphType = "website" | "article";
type SitemapChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type PageSeoConfig = {
  path: string;
  title: string;
  description: string;
  socialDescription?: string;
  keywords: string[];
  openGraphType: OpenGraphType;
  publishedTime?: string;
  modifiedTime?: string;
  image: {
    path: string;
    width: number;
    height: number;
    alt: string;
  };
  sitemap: {
    changeFrequency: SitemapChangeFrequency;
    priority: number;
  };
};

const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shopify Plus Agency & Platinum Partner | Dynamic Dreamz",
    template: "%s | Dynamic Dreamz",
  },
  description:
    "Dynamic Dreamz is a Shopify Platinum Partner delivering Shopify Plus, migration, B2B, CRO, mobile apps, integrations and white-label development.",
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "9HXcEYDK16thq7UBFdMPjzvGI4CrmknyeNJCv66f1c8",
  },
};

export const pageSeo = {
  home: {
    path: "/",
    title: "Shopify Plus Agency & Platinum Partner | Dynamic Dreamz",
    description:
      "Established in 2006, Dynamic Dreamz is a Shopify Platinum Partner for Shopify Plus, migration, B2B, CRO, mobile apps, integrations and white-label delivery.",
    socialDescription:
      "Shopify Plus development, migration, B2B, mobile apps, integrations and white-label delivery for established brands and digital agencies.",
    keywords: [
      "Shopify Plus agency",
      "Shopify Platinum Partner",
      "Shopify development agency",
      "Shopify migration",
      "white label Shopify development",
    ],
    openGraphType: "website",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz — Shopify Plus agency and Shopify Platinum Partner",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 1,
    },
  },
  about: {
    path: "/about-us/",
    title: "About Dynamic Dreamz | Shopify & Web Development Team",
    description:
      "Discover the visionary team at Dynamic Dreamz, experts in web development & digital solutions. Learn about our passion, expertise, and commitment.",
    keywords: [
      "about Dynamic Dreamz",
      "web development company",
      "Shopify Platinum Partner",
      "ecommerce development team",
      "Shopify experts",
    ],
    openGraphType: "article",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz founders and team at the Surat office",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  career: {
    path: "/career/",
    title: "Join Our Team for Exciting Opportunities | Dynamic Dreamz",
    description:
      "Explore career opportunities at Dynamic Dreamz across digital marketing, ecommerce and technology. View current openings in Surat and Ahmedabad.",
    keywords: [
      "Dynamic Dreamz careers",
      "IT jobs in Surat",
      "IT jobs in Ahmedabad",
      "digital marketing jobs",
      "ecommerce careers",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-05T13:38:57+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Career opportunities at Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  life: {
    path: "/life-dynamicdreamz/",
    title: "Life at Dynamic Dreamz | Culture & Work-Life Balance",
    description:
      "Discover life at Dynamic Dreamz, where collaboration, inclusion, professional growth and work-life balance shape an equal-opportunity workplace.",
    keywords: [
      "life at Dynamic Dreamz",
      "Dynamic Dreamz work culture",
      "IT company culture Surat",
      "IT careers Ahmedabad",
      "equal opportunity employer",
    ],
    openGraphType: "article",
    modifiedTime: "2024-09-06T09:49:25+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Life and work culture at Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.7,
    },
  },
  resources: {
    path: "/resources/",
    title: "Shopify & eCommerce Resources Hub | Dynamic Dreamz",
    description:
      "Browse Dynamic Dreamz's Shopify resource hub for migration guides, SEO tips, white label insights, and growth strategies to scale your online store.",
    keywords: [
      "Shopify resources",
      "ecommerce resources",
      "Shopify migration guides",
      "Shopify SEO tips",
      "Shopify growth strategies",
    ],
    openGraphType: "article",
    publishedTime: "2025-11-10T05:02:09+00:00",
    modifiedTime: "2026-07-15T10:42:41+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz Shopify and ecommerce resources hub",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
} satisfies Record<string, PageSeoConfig>;

export type PageSeoKey = keyof typeof pageSeo;

export const pageSeoEntries = Object.values(pageSeo);

/**
 * Build-time SEO length budget. These are hard ceilings/floors that fail
 * `next build` (this runs when metadata is evaluated). The maxes are set at the
 * SEO ideal, not at raw SERP-truncation territory: a title must stay <=60 and a
 * description <=160 so every indexable page keeps its title/description fully
 * visible in search results (the 100/100 on-page target in
 * docs/seo-launch-checklist.md), and a regression above the ideal can never
 * ship. The mins stay generous floors that only catch empty/stub copy. This is
 * the length-equivalent of the compile-time `uploadDate` guard on VideoObjects:
 * a whole class of regression caught before deploy.
 */
const SEO_LENGTH_BUDGET = {
  titleMin: 15,
  titleMax: 60,
  descriptionMin: 70,
  descriptionMax: 160,
} as const;

function assertPageSeoWithinLengthBudget(pages: Record<string, PageSeoConfig>) {
  const problems: string[] = [];

  for (const [key, page] of Object.entries(pages)) {
    const titleLength = page.title.length;
    const descriptionLength = page.description.length;

    if (titleLength < SEO_LENGTH_BUDGET.titleMin || titleLength > SEO_LENGTH_BUDGET.titleMax) {
      problems.push(
        `pageSeo.${key}.title is ${titleLength} chars (allowed ${SEO_LENGTH_BUDGET.titleMin}-${SEO_LENGTH_BUDGET.titleMax}).`,
      );
    }

    if (
      descriptionLength < SEO_LENGTH_BUDGET.descriptionMin ||
      descriptionLength > SEO_LENGTH_BUDGET.descriptionMax
    ) {
      problems.push(
        `pageSeo.${key}.description is ${descriptionLength} chars (allowed ${SEO_LENGTH_BUDGET.descriptionMin}-${SEO_LENGTH_BUDGET.descriptionMax}).`,
      );
    }
  }

  if (problems.length > 0) {
    throw new Error(
      `SEO length budget exceeded (fix in src/data/seo.ts):\n- ${problems.join("\n- ")}`,
    );
  }
}

assertPageSeoWithinLengthBudget(pageSeo);

function createPageMetadata(page: PageSeoConfig): Metadata {
  const socialDescription = page.socialDescription ?? page.description;
  // Canonical and og:url resolve through `absoluteUrl`, the same helper the
  // sitemap and JSON-LD use, so every public URL shares one trailing-slash
  // policy (aligned with `trailingSlash: true`) and cannot drift apart.
  const canonicalUrl = absoluteUrl(page.path);

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: socialDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: page.openGraphType,
      locale: "en_US",
      ...(page.openGraphType === "article"
        ? {
            ...(page.publishedTime ? { publishedTime: page.publishedTime } : {}),
            ...(page.modifiedTime ? { modifiedTime: page.modifiedTime } : {}),
          }
        : {}),
      images: [
        {
          url: page.image.path,
          width: page.image.width,
          height: page.image.height,
          alt: page.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: socialDescription,
      images: [page.image.path],
    },
    robots: indexableRobots,
  };
}

function createPageMetadataMap<Pages extends Record<string, PageSeoConfig>>(pages: Pages) {
  return Object.fromEntries(
    Object.entries(pages).map(([key, page]) => [key, createPageMetadata(page)]),
  ) as { [Key in keyof Pages]: Metadata };
}

export const pageMetadata = createPageMetadataMap(pageSeo);
