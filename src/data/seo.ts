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
  robots?: Metadata["robots"];
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
  contact: {
    path: "/contact-us",
    title: "Contact Dynamic Dreamz | Expert Web Solutions Provider",
    description:
      "Connect with us for custom web solutions. Our experts deliver top-notch designs and development. Contact us now!",
    keywords: [
      "contact Dynamic Dreamz",
      "web development company contact",
      "Shopify agency contact",
      "Dynamic Dreamz Surat",
      "Dynamic Dreamz Ahmedabad",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-01T09:32:45+00:00",
    modifiedTime: "2026-08-17T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Contact Dynamic Dreamz for ecommerce, web and mobile development",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  privacyPolicy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Dynamic Dreamz",
    description:
      "Read Dynamic Dreamz's privacy and cookies policy to learn how we collect, use, share, retain, and protect personal information and explain your data rights.",
    keywords: [
      "Dynamic Dreamz privacy policy",
      "privacy and cookies policy",
      "personal data protection",
      "privacy rights",
      "Dynamic Dreamz cookies",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-03T10:53:58+00:00",
    modifiedTime: "2024-12-13T11:57:22+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz privacy and cookies policy",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.3,
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
  wordpressDevelopment: {
    path: "/wordpress-development",
    title: "WordPress Development Company India | Dynamic Dreamz",
    description:
      "Dynamic Dreamz is a Custom WordPress Development Company that helped 100+ client with WordPress Development Services. Get a Quote Now!",
    keywords: [
      "WordPress development company India",
      "WordPress development services",
      "custom WordPress development",
      "WordPress developers India",
      "WordPress website development",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:32:52+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development Company India | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  hireWordPressDevelopers: {
    path: "/hire-wordpress-developers",
    title: "Hire WordPress Developers | Dynamic Dreamz",
    description:
      "Hire dedicated WordPress developers and teams for custom websites, WooCommerce, themes, plugins, support and end-to-end delivery from Dynamic Dreamz.",
    keywords: [
      "hire WordPress developers",
      "dedicated WordPress developers",
      "hire WordPress development team",
      "WordPress development company",
      "WooCommerce developers",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Hire WordPress developers and dedicated WordPress teams from Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  hireShopifyDevelopers: {
    path: "/hire-shopify-developers",
    title: "Hire Shopify Developers | Dynamic Dreamz",
    description:
      "Hire Shopify developers for store setup, customization, migration, app integrations, maintenance and dedicated ecommerce development from Dynamic Dreamz.",
    keywords: [
      "hire Shopify developers",
      "dedicated Shopify developers",
      "Shopify development team",
      "Shopify store developers",
      "Shopify migration developers",
    ],
    openGraphType: "article",
    publishedTime: "2024-07-24T07:16:56+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Hire dedicated Shopify developers from Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  shopifyExperts: {
    path: "/shopify-experts",
    title: "Hire Shopify Experts | Top Rated Shopify Developers",
    description:
      "Partner with Best Shopify Experts to develop an online store. Let's start your online journey with Dynamic Dreamz with their tailored solutions.",
    keywords: [
      "hire Shopify experts",
      "Shopify experts",
      "top rated Shopify developers",
      "dedicated Shopify experts",
      "Shopify development agency",
      "Shopify store setup",
      "Shopify Plus experts",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-24T07:16:56+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Hire dedicated Shopify experts from Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  shopifyPlus: {
    path: "/shopify-plus-agency",
    title: "Shopify Plus Agency | Shopify development services",
    description:
      "Dynamic Dreamz offers expert Shopify Plus development services in India. Hire our Shopify Plus experts for comprehensive e-commerce solutions.",
    socialDescription:
      "Expert Shopify Plus development services in India. Dynamic Dreamz designs, migrates and scales Shopify Plus stores for growing e-commerce brands.",
    keywords: [
      "Shopify Plus agency",
      "Shopify Plus development services",
      "Shopify Plus experts",
      "Shopify Plus migration",
      "Shopify Plus store setup",
      "Shopify Plus eCommerce agency",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:34:33+00:00",
    modifiedTime: "2025-09-23T04:50:03+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Shopify Plus agency and Shopify development services by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  shopifyMigration: {
    path: "/shopify-migration",
    title: "Seamless Shopify Migration Services | Dynamic Dreamz",
    description:
      "We ensure a seamless transfer of your store, preserving data integrity and minimizing downtime. Expert Shopify migration services to boost ecommerce success.",
    socialDescription:
      "Expert Shopify Migration Services: Efficiently Move Your Store with Ease and get the full potential of Shopify with our tailored migration solutions.",
    keywords: [
      "Shopify migration services",
      "Shopify store migration",
      "Magento to Shopify migration",
      "WooCommerce to Shopify migration",
      "BigCommerce to Shopify migration",
      "Shopify 2.0 theme migration",
      "ecommerce migration expert",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-02T09:34:33+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Seamless Shopify Migration Services by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  prestashopToShopifyMigration: {
    path: "/prestashop-to-shopify-migration",
    title: "PrestaShop to Shopify Migration | Take an Expert Guide",
    description:
      "Looking for a PrestaShop to Shopify migration without downtime and data loss? Hire Shopify experts from Dynamic Dreamz for a smooth, successful store migration.",
    socialDescription:
      "Are you looking for a PrestaShop to Shopify migration without downtime and data loss? Hire Shopify experts from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "PrestaShop to Shopify migration",
      "PrestaShop to Shopify",
      "Shopify migration experts",
      "migrate PrestaShop to Shopify",
      "ecommerce migration services",
      "PrestaShop data migration",
    ],
    openGraphType: "article",
    publishedTime: "2024-10-24T10:13:32+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "PrestaShop to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  squareToShopifyMigration: {
    path: "/square-to-shopify-migration",
    title: "Square to Shopify Migration | Take an Expert Guide",
    description:
      "Looking for a Square to Shopify migration without downtime and data loss? Hire Shopify migration experts from Dynamic Dreamz for a smooth, successful migration.",
    keywords: [
      "Square to Shopify migration",
      "Square to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Square to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  etsyToShopifyMigration: {
    path: "/etsy-to-shopify-migration",
    title: "Etsy to Shopify Migration | Take an Expert Guide",
    description:
      "Are you looking for Etsy to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "Etsy to Shopify migration",
      "Etsy to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Etsy to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  shopifyCro: {
    path: "/shopify-cro-agency",
    title: "Shopify CRO Agency | Increase Revenue | Dynamic Dreamz",
    description:
      "Improve your Shopify conversion rate with CRO audits, funnel analysis, A/B testing, user behavior insights, and ongoing optimization from Dynamic Dreamz.",
    socialDescription:
      "Improve your Shopify conversion rate with CRO audits, funnel analysis, A/B testing, user behavior insights, and ongoing optimization services from Dynamic Dreamz.",
    keywords: [
      "Shopify CRO agency",
      "Shopify conversion rate optimization",
      "Shopify CRO audit",
      "Shopify funnel analysis",
      "Shopify A/B testing",
      "ecommerce CRO agency",
      "Shopify conversion optimization",
    ],
    openGraphType: "article",
    publishedTime: "2024-07-24T07:16:56+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Shopify CRO Agency services by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  requestQuote: {
    path: "/request-quote",
    title: "Request Quote Today! | Dynamic Dreamz",
    description:
      "Looking for custom web solutions? Request a quote from Dynamic Dreamz! offer custom websites development. Contact us now! or Call Now!",
    socialDescription:
      "Looking for custom web solutions? Request a quote from Dynamic Dreamz! offer custom websites development. Contact us now! or Call Now!",
    keywords: [
      "request quote",
      "hire Shopify developer",
      "Shopify development quote",
      "web development estimate",
      "ecommerce development quote",
      "Dynamic Dreamz quote",
    ],
    openGraphType: "article",
    publishedTime: "2024-06-21T09:23:48+00:00",
    modifiedTime: "2024-09-06T10:07:53+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Request a Quote - Dynamic Dreamz, a Web Design Company",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
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
  caseStudies: {
    path: "/case-studies",
    title: "Case Studies & Client Success Stories | Dynamic Dreamz",
    description:
      "Explore every Shopify mobile app development case study from Dynamic Dreamz, and see how custom apps have helped boost engagement, retention, and growth.",
    keywords: [
      "Shopify case studies",
      "Shopify Plus case study",
      "ecommerce success stories",
      "Shopify migration case study",
      "mobile app development case study",
      "Dynamic Dreamz portfolio",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-01T00:00:00+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/case-studies/evrgreen.png",
      width: 571,
      height: 421,
      alt: "Case Study Archive - Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.9,
    },
  },
  shopifyApps: {
    path: "/shopify-apps",
    title: "Shopify App Archive | Dynamic Dreamz",
    description:
      "Explore top Shopify apps for conversion growth, checkout upgrades, shipping, quotes, and more- all built to scale your store’s performance.",
    keywords: [
      "Shopify apps",
      "Shopify public apps",
      "Smart B2B Shopify app",
      "Dynamic PayHide",
      "Dynamic Quote Request",
      "Dynamic Checkout Upsell",
      "Easy Shipping Rate Manager",
    ],
    openGraphType: "website",
    publishedTime: "2024-08-01T00:00:00+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/shopify-apps/smart-b2b.png",
      width: 300,
      height: 300,
      alt: "Smart B2B Shopify App",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.7,
    },
  },
  shopifyThemeCustomization: {
    path: "/shopify-theme-customization",
    title: "Shopify Theme Customization Services | Dynamic Dreamz",
    description:
      "Looking for Shopify Theme Customization Services, choose Dynamic Dreamz, The #1 Shopify Development Company that provides expert solutions for your brand.",
    keywords: [
      "Shopify theme customization",
      "custom Shopify themes",
      "Shopify theme development",
      "Liquid programming",
      "Shopify store customization",
      "Shopify custom design",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-18T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.9,
    },
  },
  prestigeThemeCustomization: {
    path: "/prestige-theme-customization",
    title: "Prestige Theme Customization Service | Dynamic Dreamz",
    description:
      "Looking for a Prestige Theme Customization service. Choose Dynamic Dreamz, they offer everything that you need. Get an Expert Team and Ongoing Support.",
    keywords: [
      "Prestige theme customization",
      "Prestige Shopify theme",
      "Prestige theme customization service",
      "Shopify Prestige developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2024-12-05T08:44:49+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Prestige Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  astraThemeCustomization: {
    path: "/astra-theme-customization",
    title: "Astra Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Astra Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Astra theme customization",
      "Astra WordPress theme",
      "Astra theme customization services",
      "WordPress Astra developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T05:52:19+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Astra Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  kadenceThemeCustomization: {
    path: "/kadence-theme-customization",
    title: "Kadence Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Kadence Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Kadence theme customization",
      "Kadence WordPress theme",
      "Kadence theme customization services",
      "WordPress Kadence developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T06:54:19+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Kadence Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  helloElementorThemeCustomization: {
    path: "/hello-elementor-theme-customization",
    title: "Hello Elementor Theme Customization | Dynamic Dreamz",
    description:
      "Get professional Hello Elementor theme customization services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Hello Elementor theme customization",
      "Hello Elementor WordPress theme",
      "Hello Elementor customization services",
      "WordPress Elementor developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T04:13:03+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Hello Elementor Theme Customization | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  generatepressThemeCustomization: {
    path: "/generatepress-theme-customization",
    title: "GeneratePress Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional GeneratePress Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "GeneratePress theme customization",
      "GeneratePress WordPress theme",
      "GeneratePress theme customization services",
      "WordPress GeneratePress developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T07:18:11+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "GeneratePress Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  oceanwpThemeCustomization: {
    path: "/oceanwp-theme-customization",
    title: "OceanWP Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional OceanWP Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "OceanWP theme customization",
      "OceanWP WordPress theme",
      "OceanWP theme customization services",
      "WordPress OceanWP developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T07:40:27+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "OceanWP Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  impulseThemeCustomization: {
    path: "/impulse-theme-customization",
    title: "Impulse Theme Customization Service | Dynamic Dreamz",
    description:
      "Looking for an Impulse Theme Customization service. Choose Dynamic Dreamz, they offer everything that you need. Get an Expert Team and Ongoing Support.",
    keywords: [
      "Impulse theme customization",
      "Impulse Shopify theme",
      "Impulse theme customization service",
      "Shopify Impulse developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2024-12-05T06:43:52+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Impulse Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  senseThemeCustomization: {
    path: "/sense-theme-customization",
    title: "Sense Theme Customization Service | Dynamic Dreamz",
    description:
      "Looking for a Sense Theme Customization service. Choose Dynamic Dreamz, they offer everything that you need. Get an Expert Team and Ongoing Support.",
    keywords: [
      "Sense theme customization",
      "Sense Shopify theme",
      "Sense theme customization service",
      "Shopify Sense developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2024-12-04T09:54:13+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Sense Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentAgency: {
    path: "/shopify-development-agency",
    title: "Shopify Development Agency & Services | Dynamic Dreamz",
    description:
      "Expert Shopify development services by Dynamic Dreamz: custom store design, app integration, migration, speed optimization and dedicated ongoing support.",
    keywords: [
      "Shopify development agency",
      "Shopify development services",
      "Shopify development company",
      "custom Shopify store",
      "Shopify migration",
      "Shopify maintenance",
      "Figma to Shopify",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:33:21+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development Agency & Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.9,
    },
  },
  woocommerceDevelopment: {
    path: "/woocommerce-development",
    title: "Woocommerce Development Company India | Dynamic Dreamz",
    description:
      "Grow your online store with professional WooCommerce development services from Dynamic Dreamz, integrations, and seamless shopping experiences.",
    keywords: [
      "WooCommerce development company",
      "WooCommerce development services",
      "WooCommerce store design",
      "WooCommerce custom theme",
      "WooCommerce plugin development",
      "WooCommerce migration",
      "WooCommerce support",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:33:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Woocommerce Development Company India | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  magentoDevelopment: {
    path: "/magento-development",
    title: "Magento Development Services | Magento Development Company",
    description:
      "Trusted Magento Development company for scalable solutions. Get expert services for custom Magento development. Contact us today!",
    keywords: [
      "Magento development services",
      "Magento development company",
      "custom Magento development",
      "Magento store development",
      "Magento migration",
      "Magento speed optimization",
      "Magento custom theme",
      "Magento module development",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:33:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Magento Development Services | Magento Development Company",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordPressThemeCustomization: {
    path: "/wordpress-theme-customization-services",
    title: "WordPress Theme Customization Services | Dynamic Dreamz",
    description:
      "Choose WordPress Theme Customization Services . Expert WordPress Developers with 18+ Years of Experience. Hire DynamicDreamz today!",
    socialDescription:
      "Get custom WordPress theme customization services from Dynamic Dreamz. 18+ years experience customizing Elementor, Astra, Divi, Kadence and WooCommerce themes.",
    keywords: [
      "WordPress theme customization services",
      "custom WordPress themes",
      "WordPress theme developers",
      "Astra theme customization",
      "Elementor customization",
      "WooCommerce theme customization",
      "WordPress customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:33:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  bigCommerceDevelopment: {
    path: "/bigcommerce-development",
    title: "BigCommerce Development Company India | Dynamic Dreamz",
    description:
      "Hire BigCommerce Developer for top notch eCommerce solutions. Get customisations, integrations, and support for your business. Call Now!",
    keywords: [
      "BigCommerce development company",
      "BigCommerce development company India",
      "hire BigCommerce developer",
      "BigCommerce theme customization",
      "BigCommerce store development",
      "BigCommerce app integration",
      "BigCommerce maintenance",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:33:14+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "BigCommerce Development Company India | Dynamic Dreamz",
    },
    sitemap: { changeFrequency: "weekly", priority: 0.8 },
  },
  siteMap: {
    path: "/site-map",
    title: "Site Map | Dynamic Dreamz Ecommerce Agency",
    description:
      "HTML site map for Dynamic Dreamz. Explore all pages for Shopify, Shopify Plus, WordPress, WooCommerce, and ecommerce development services.",
    keywords: [
      "Dynamic Dreamz site map",
      "sitemap",
      "Shopify Plus agency pages",
      "WordPress development services",
      "ecommerce web design sitemap",
    ],
    openGraphType: "website",
    publishedTime: "2023-01-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz Site Map",
    },
    sitemap: { changeFrequency: "monthly", priority: 0.5 },
  },
  androidAppDevelopment: {
    path: "/android-app-development",
    title: "Android App Development Services | Dynamic Dreamz",
    description:
      "Our expert team of mobile app developers delivers custom mobile solution for your business requirement. We create high performance and engaging mobile app.",
    keywords: [
      "Android app development",
      "Android app development services",
      "custom Android app development",
      "Android app developers",
      "native Android app development",
      "hybrid Android app development",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Custom Android App Development Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  iosAppDevelopment: {
    path: "/ios-app-development",
    title: "iOS App Development Services | Dynamic Dreamz",
    description:
      "Get a user-engaging iOS app for your online business. Our expert iOS app developers provide custom solution as per your needs.",
    keywords: [
      "iOS app development",
      "iOS app development services",
      "custom iOS app development",
      "iOS app developers",
      "native iOS app development",
      "hybrid iOS app development",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Custom iOS App Development Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  crossPlatformAppDevelopment: {
    path: "/cross-platform-app-development",
    title: "Cross-Platform App Development Services | Dynamic Dreamz",
    description:
      "We build robust, high-performance apps that work seamlessly across iOS and Android. Partner with us to deliver consistent cross-platform user experiences.",
    keywords: [
      "cross platform app development",
      "cross platform app development services",
      "cross platform app development company",
      "React Native app development",
      "Flutter app development",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Cross-Platform App Development Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyMobileAppDevelopment: {
    path: "/shopify-mobile-app-development",
    title: "Shopify Mobile App Development Services | Dynamic Dreamz",
    description:
      "Grow your eCommerce brand with expert Shopify mobile app development by Dynamic Dreamz. Mobile apps that boost engagement, retention, and sales.",
    keywords: [
      "Shopify mobile app development",
      "Shopify mobile app development services",
      "Shopify AppMaker",
      "Shopify mobile apps",
      "turn Shopify into mobile app",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Mobile App Development Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  thankYouForEnquiry: {
    path: "/thank-you-for-enquiry",
    title: "Thank You For Enquiry | Dynamic Dreamz",
    description:
      "Thank you for your enquiry. We appreciate your interest and our team will get back to you shortly.",
    keywords: [
      "Dynamic Dreamz enquiry",
      "thank you for enquiry",
      "Shopify agency contact",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-29T10:56:05+00:00",
    modifiedTime: "2026-08-07T09:16:24+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Thank You For Enquiry — Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.3,
    },
    robots: {
      index: false,
      follow: false,
    },
  },
  webDesign: {
    path: "/web-design",
    title: "Web Design Company & UI/UX Design Services | Dynamic Dreamz",
    description:
      "Dynamic Dreamz Is the Best Web Design Company in India Who Are Familiar With Creative and Modern Web Design Concepts.",
    keywords: [
      "web design company",
      "UI/UX design services",
      "custom web design",
      "UI UX agency",
      "website design India",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2024-08-01T04:51:58+00:00",
    modifiedTime: "2025-09-23T05:29:33+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Web Design Company & UI/UX Design Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  termsOfService: {
    path: "/terms-of-service",
    title: "Terms of Service | Dynamic Dreamz",
    description:
      "Read the Dynamic Dreamz terms of service outlining user rights, responsibilities, and website usage policies for all visitors and customers.",
    keywords: [
      "terms of service",
      "terms and conditions",
      "Dynamic Dreamz terms",
      "website usage policy",
      "client agreement",
    ],
    openGraphType: "article",
    publishedTime: "2025-11-18T07:01:16+00:00",
    modifiedTime: "2026-02-20T12:31:37+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Terms of Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "yearly",
      priority: 0.5,
    },
  },
  shopifyDevelopmentBarcelona: {
    path: "/shopify-development-in-barcelona-spain",
    title: "Shopify Development in Barcelona | Dynamic Dreamz",
    description:
      "Boost your online store with expert Shopify development in Barcelona by Dynamic Dreamz. We offer tailored solutions to eCommerce success.",
    keywords: [
      "Shopify development Barcelona",
      "Shopify agency Spain",
      "Shopify developer Barcelona",
      "Shopify Plus Barcelona",
      "ecommerce development Barcelona",
      "Dynamic Dreamz Barcelona",
    ],
    openGraphType: "article",
    publishedTime: "2024-07-01T00:00:00+00:00",
    modifiedTime: "2026-08-19T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Barcelona | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
} satisfies Record<string, PageSeoConfig>;

export type PageSeoKey = keyof typeof pageSeo;

export const pageSeoEntries: PageSeoConfig[] = Object.values(pageSeo);

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
    robots: page.robots ?? indexableRobots,
  };
}

function createPageMetadataMap<Pages extends Record<string, PageSeoConfig>>(pages: Pages) {
  return Object.fromEntries(
    Object.entries(pages).map(([key, page]) => [key, createPageMetadata(page)]),
  ) as { [Key in keyof Pages]: Metadata };
}

export const pageMetadata = createPageMetadataMap(pageSeo);
