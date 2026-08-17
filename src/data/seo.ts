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
  modifiedTime: string;
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
    publishedTime: "2025-12-12T09:55:48+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
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
    path: "/about-us",
    title: "About Dynamic Dreamz | Shopify & Web Development Team",
    description:
      "Founded in 2006, Dynamic Dreamz is a Shopify Platinum Partner with 150+ experts delivering ecommerce, web, mobile and digital commerce solutions.",
    keywords: [
      "about Dynamic Dreamz",
      "web development company",
      "Shopify Platinum Partner",
      "ecommerce development team",
      "Shopify experts",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:06:11+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
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
    path: "/career",
    title: "Careers at Dynamic Dreamz | Surat & Ahmedabad Jobs",
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
    publishedTime: "2024-05-02T09:10:53+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
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
    path: "/life-dynamicdreamz",
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
    publishedTime: "2024-05-02T09:14:02+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
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
    path: "/resources",
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
    modifiedTime: "2026-08-13T00:00:00+05:30",
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
  ourWork: {
    path: "/our-work",
    title: "Dynamic Dreamz Portfolio | Inspiring Web Solutions & Designs",
    description:
      "Explore our impressive portfolio showcasing innovative web solutions and designs. Discover our range of projects and expertise. Contact us today!",
    keywords: [
      "Dynamic Dreamz portfolio",
      "Shopify portfolio",
      "Shopify Plus projects",
      "WordPress portfolio",
      "ecommerce development work",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-13T12:16:21+00:00",
    modifiedTime: "2026-08-17T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz ecommerce, web and mobile development portfolio",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  beautyCosmetics: {
    path: "/beauty-cosmetics",
    title: "Beauty & Cosmetics Ecommerce Development | Dynamic Dreamz",
    description:
      "Build beauty and cosmetics ecommerce experiences with Dynamic Dreamz, including Shopify storefronts, booking, responsive design and integrations.",
    socialDescription:
      "Shopify and ecommerce development for beauty and cosmetics brands, including storefront design, booking, responsive layouts and interactive integrations.",
    keywords: [
      "beauty ecommerce development",
      "cosmetics ecommerce agency",
      "Shopify beauty store development",
      "salon booking system development",
      "beauty website development",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-06T09:44:26+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
    image: {
      path: "/assets/beauty-cosmetics/beauty-storefront-collage.webp",
      width: 840,
      height: 434,
      alt: "Beauty and cosmetics ecommerce storefronts built for consumer brands",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  healthcare: {
    path: "/healthcare",
    title: "Health & Nutrition Ecommerce Development | Dynamic Dreamz",
    description:
      "Dynamic Dreamz builds ecommerce experiences for health, nutrition and dental brands, with tailored stores, payments, responsive layouts and integrations.",
    socialDescription:
      "Ecommerce and website development for health, nutrition, wellness and dental organizations, including online ordering, responsive layouts and integrations.",
    keywords: [
      "health ecommerce development",
      "nutrition ecommerce agency",
      "Shopify supplement store development",
      "healthcare website development",
      "dental website development",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-06T09:44:35+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
    image: {
      path: "/assets/healthcare/health-nutrition-storefront-collage.webp",
      width: 840,
      height: 434,
      alt: "Health and nutrition ecommerce storefronts built for consumer brands",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  fashion: {
    path: "/fashion",
    title: "Web Design Agency for Fashion Industry - Dynamic Dreamz",
    description:
      "Dynamic Dreamz builds ecommerce stores and digital experiences for fashion and apparel brands selling clothing, jewelry, watches, footwear and accessories.",
    socialDescription:
      "Ecommerce and web development for fashion and apparel brands, including Shopify storefronts, responsive merchandising and customer-engagement features.",
    keywords: [
      "fashion ecommerce development",
      "fashion web design agency",
      "Shopify fashion store development",
      "apparel ecommerce agency",
      "fashion website development",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-06T09:44:56+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
    image: {
      path: "/assets/fashion/fashion-storefront-collage.webp",
      width: 840,
      height: 434,
      alt: "Fashion, sportswear, footwear and jewellery ecommerce storefront collage",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  foodBeverages: {
    path: "/food-beverages",
    title: "Food & Beverages Ecommerce Development | Dynamic Dreamz",
    description:
      "Dynamic Dreamz builds ecommerce websites for food and beverage brands, with custom design, reservations, responsive layouts and integrations.",
    socialDescription:
      "Ecommerce and web development for food and beverage brands, including custom storefronts, reservation flows, responsive layouts and integrations.",
    keywords: [
      "food and beverage ecommerce development",
      "food ecommerce agency",
      "restaurant reservation website development",
      "Shopify food store development",
      "beverage ecommerce development",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-06T09:45:07+00:00",
    modifiedTime: "2026-08-14T00:00:00+05:30",
    image: {
      path: "/assets/food-beverages/food-beverages-storefront-collage.webp",
      width: 840,
      height: 434,
      alt: "Food and beverage ecommerce storefront collage for Nekter, Chinuki and Deliciou",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  petIndustry: {
    path: "/pet-industry",
    title: "Pet Industry Ecommerce Development | Dynamic Dreamz",
    description:
      "Dynamic Dreamz builds ecommerce websites for pet brands, with custom storefronts, CMS development, responsive layouts, interactive media and integrations.",
    socialDescription:
      "Ecommerce and web development for pet brands, including custom storefronts, CMS delivery, responsive layouts, interactive media and integrations.",
    keywords: [
      "pet industry ecommerce development",
      "pet ecommerce agency",
      "Shopify pet store development",
      "pet website development",
      "pet accessories ecommerce",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-06T09:44:49+00:00",
    modifiedTime: "2026-08-14T00:00:00+05:30",
    image: {
      path: "/assets/pet-industry/pet-storefront-collage.webp",
      width: 840,
      height: 434,
      alt: "Pet ecommerce storefront collage featuring Kentaur Australia, My Pet Frame and pet products",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  whiteLabelShopify: {
    path: "/white-label-shopify-development-services",
    title: "White Label Shopify Development Partner for Digital Agencies",
    description:
      "NDA-backed white label Shopify development for agencies. Shopify Platinum Partner delivering Shopify Plus, migration, B2B and apps under your brand.",
    keywords: [
      "white label Shopify development",
      "white label Shopify partner",
      "Shopify development for digital agencies",
      "white label Shopify Plus development",
      "outsourced Shopify developers",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:34:33+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "White label Shopify development services for digital agencies",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  whiteLabelWordPress: {
    path: "/white-label-wordpress-development-services",
    title: "White Label WordPress Development Company | Dynamic Dreamz",
    description:
      "NDA-backed white label WordPress development for agencies, covering custom sites, WooCommerce, themes, plugins, performance and support under your brand.",
    keywords: [
      "white label WordPress development",
      "white label WordPress partner",
      "WordPress development for digital agencies",
      "white label WooCommerce development",
      "outsourced WordPress developers",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:34:26+00:00",
    modifiedTime: "2026-08-13T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "White label WordPress development services for digital agencies",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  whiteLabelWebsiteDesign: {
    path: "/white-label-website-design-services",
    title: "White Label Website Design Services | Dynamic Dreamz",
    description:
      "Scale your agency with white label website design services. Get professional, custom websites delivered under your brand by a trusted web design partner.",
    keywords: [
      "white label website design services",
      "white label web design agency",
      "outsourced website design for agencies",
      "white label web development",
      "website design partner for agencies",
    ],
    openGraphType: "article",
    publishedTime: "2024-12-09T09:29:53+00:00",
    modifiedTime: "2026-06-03T09:07:47+00:00",
    image: {
      path: "/assets/white-label-website-design/hero/white-label-website-design-services.png",
      width: 1150,
      height: 1280,
      alt: "White label website design services delivered under an agency's brand",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
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
  // sitemap and JSON-LD use, so every non-root public URL shares the enforced
  // no-trailing-slash policy and cannot drift apart.
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
