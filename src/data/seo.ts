import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { blockedSearchRobots, isSearchIndexingEnabled } from "@/lib/search-indexing";
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
  robots: isSearchIndexingEnabled() ? indexableRobots : blockedSearchRobots,
};

export const pageSeo = {
  home: {
    path: "/",
    title: "Shopify Plus Agency & Platinum Partner | Dynamic Dreamz",
    description:
      "Dynamic Dreamz is a Shopify Platinum Partner helping DTC brands, B2B businesses and agencies build, migrate and scale with Shopify and Shopify Plus.",
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
    modifiedTime: "2026-08-19T00:00:00+05:30",
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
  blogs: {
    path: "/blogs",
    title: "IT Services Blogs, Insights & Tips | Dynamic Dreamz Blog",
    description:
      "Explore the Dynamic Dreamz Blog for the latest IT trends, expert tips, and industry insights to help grow your online business effectively.",
    keywords: [
      "Dynamic Dreamz blog",
      "IT services blogs",
      "Shopify blog",
      "WordPress tips",
      "ecommerce insights",
    ],
    openGraphType: "website",
    publishedTime: "2024-05-02T09:11:03+00:00",
    modifiedTime: "2026-08-10T13:26:39+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Dynamic Dreamz ecommerce, Shopify and WordPress blog",
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
    title: "Shopify, Web & Mobile App Portfolio | Dynamic Dreamz",
    description:
      "Explore Shopify, ecommerce, web and mobile app projects by Dynamic Dreamz across Shopify Plus, WordPress, BigCommerce, Magento, React Native and Flutter.",
    keywords: [
      "Dynamic Dreamz portfolio",
      "Shopify portfolio",
      "Shopify Plus projects",
      "WordPress portfolio",
      "ecommerce development work",
    ],
    openGraphType: "article",
    publishedTime: "2024-05-13T12:16:21+00:00",
    modifiedTime: "2026-08-24T00:00:00+05:30",
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
  foodBeverageShopifyPlusAgency: {
    path: "/food-beverage-shopify-plus-agency",
    title: "Food & Beverage Shopify Plus Agency | Dynamic Dreamz",
    description:
      "Hire a Food & Beverage Shopify Plus Agency to Grow your food & beverage business with Dynamic Dreamz. 18+ Years of agency experience. Contact Us Today!",
    socialDescription:
      "Hire a Food & Beverage Shopify Plus Agency to Grow your food & beverage business with Dynamic Dreamz. 18+ Years of agency experience. Contact Us Today!",
    keywords: [
      "Food & Beverage Shopify Plus Agency",
      "food beverage Shopify Plus",
      "Shopify Plus agency food beverage",
      "Shopify food store development",
      "food and beverage ecommerce development",
    ],
    openGraphType: "article",
    publishedTime: "2025-04-18T04:26:01+00:00",
    modifiedTime: "2025-05-06T03:33:13+00:00",
    image: {
      path: "/assets/food-beverage-shopify-plus-agency/hero/food-and-beverage-shopify-plus-agency.webp",
      width: 854,
      height: 529,
      alt: "Food & Beverage Shopify Plus Agency storefront solutions",
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
  wordpressDevelopmentCompany: {
    path: "/wordpress-development-company",
    title: "Hire WordPress Development Company India | Dynamic Dreamz",
    description:
      "Hire Dynamic Dreamz, a WordPress development company in India, for custom websites, themes, plugins, WooCommerce, migration, optimization and support.",
    keywords: [
      "WordPress development company India",
      "WordPress website development company",
      "custom WordPress development services",
      "WordPress theme development India",
      "WooCommerce development company",
    ],
    openGraphType: "article",
    publishedTime: "2024-10-09T05:51:59+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development Company in India | Dynamic Dreamz",
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
  shopifyCertifiedDevelopers: {
    path: "/shopify-certified-developers",
    title: "Shopify Certified Developers | Shopify Platinum Partner",
    description:
      "Hire Shopify Certified Developers at Dynamic Dreamz, a Shopify Platinum Partner, for scalable Shopify and Shopify Plus development solutions worldwide.",
    keywords: [
      "Shopify Certified Developers",
      "Certified Shopify Experts",
      "Shopify Platinum Partner",
      "Shopify Plus developers",
      "Shopify B2B developers",
      "Liquid developers",
    ],
    openGraphType: "article",
    publishedTime: "2026-08-04T05:00:19+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/shopify-certified-developers/hero.webp",
      width: 535,
      height: 534,
      alt: "Shopify Certified Developers at Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  buyShopifyDevelopmentHours: {
    path: "/buy-shopify-development-hours",
    title: "Buy Shopify Development Hours | Dynamic Dreamz",
    description:
      "Buy flexible Shopify development hours from Dynamic Dreamz. Use prepaid Shopify hours for Shopify design, development, and ongoing store improvements.",
    keywords: [
      "buy Shopify development hours",
      "Shopify hours packages",
      "prepaid Shopify developer hours",
      "flexible Shopify development support",
      "bulk Shopify hours",
    ],
    openGraphType: "article",
    publishedTime: "2026-01-19T07:34:36+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/buy-shopify-development-hours/shopify-development-hours-packages.webp",
      width: 1200,
      height: 630,
      alt: "Flexible Shopify development hours and prepaid package selector from Dynamic Dreamz",
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
  shopifyPlusMigrationAgency: {
    path: "/shopify-plus-migration-agency",
    title: "Shopify Plus Migration Agency | Shopify Migration Experts",
    description:
      "Hire Shopify Plus Migration Agency to Switch to Shopify Plus with expert help. Choose Dynamic Dreamz for smooth migration of your store.",
    keywords: [
      "Shopify Plus migration agency",
      "Shopify Plus migration",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-05-05T04:28:17+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Shopify Plus Migration Agency by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  magentoToShopifyPlusMigration: {
    path: "/magento-to-shopify-plus-migration",
    title: "Magento to Shopify Plus Migration | Dynamic Dreamz",
    description:
      "Hire Magento to Shopify Plus Migration Expert. Expert Migration Services with 18+ Years of Experience. Hire DynamicDreamz today!",
    keywords: [
      "Magento to Shopify Plus migration",
      "Magento to Shopify Plus",
      "Shopify Plus migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-03-27T03:29:20+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Magento to Shopify Plus Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  magentoToShopifyMigration: {
    path: "/magento-to-shopify-migration",
    title: "Magento 1 to Shopify Migration Services | Dynamic Dreamz",
    description:
      "Seamlessly migrate from Magento 1 to Shopify with Dynamic Dreamz. Our expert team ensures a smooth transition for enhanced eCommerce performance.",
    keywords: [
      "Magento to Shopify migration",
      "Magento 1 to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-02-25T10:40:12+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Magento to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  bigcommerceToShopifyMigration: {
    path: "/bigcommerce-to-shopify-migration",
    title: "BigCommerce to Shopify Migration | Take an Expert Guide",
    description:
      "Looking for BigCommerce to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "BigCommerce to Shopify migration",
      "BigCommerce to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-05T13:38:54+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "BigCommerce to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  woocommerceToShopifyMigration: {
    path: "/woocommerce-to-shopify-migration",
    title: "Seamless WooCommerce to Shopify Migration | Dynamic Dreamz",
    description:
      "Migrate your WooCommerce store to Shopify effortlessly with Dynamic Dreamz. Experience enhanced scalability, security, and user friendliness.",
    keywords: [
      "WooCommerce to Shopify migration",
      "WooCommerce to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-02-25T10:39:37+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "WooCommerce to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  squarespaceToShopifyMigration: {
    path: "/squarespace-to-shopify-migration",
    title: "Squarespace to Shopify Migration | Take an Expert Guide",
    description:
      "Looking for Squarespace to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "Squarespace to Shopify migration",
      "Squarespace to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-02-25T10:09:37+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Squarespace to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  ecwidToShopifyMigration: {
    path: "/ecwid-to-shopify-migration",
    title: "Ecwid to Shopify Migration | Take an Expert Guide",
    description:
      "Are you looking for Ecwid to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "Ecwid to Shopify migration",
      "Ecwid to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2025-02-25T10:09:20+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Ecwid to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  migratingThemeToOnlineStore20: {
    path: "/migrating-a-theme-to-online-store-2-0",
    title: "Complete Shopify 2.0 Migration Service | Dynamic Dreamz",
    description:
      "Upgrade your Shopify theme to Online Store 2.0 with Dynamic Dreamz. Our experts ensure a seamless transition for improved functionality and user experience.",
    socialDescription:
      "Upgrade your Shopify theme to Online Store 2.0 with Dynamic Dreamz. Seamless transition, faster performance, sections everywhere, and improved functionality.",
    keywords: [
      "migrating a theme to online store 2.0",
      "Shopify 2.0 migration service",
      "Shopify theme migration",
      "upgrade to Shopify 2.0",
      "Shopify Online Store 2.0",
    ],
    openGraphType: "article",
    publishedTime: "2024-07-29T10:48:47+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Migrate your Theme to Shopify Online Store 2.0 | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  salesforceToShopifyMigration: {
    path: "/salesforce-to-shopify-migration",
    title: "Salesforce to Shopify Migration Service | Dynamic Dreamz",
    description:
      "Need a reliable Salesforce to Shopify migration service? Dynamic Dreamz offers Secure, scalable, and fully optimized solutions for eCommerce Stores.",
    keywords: [
      "Salesforce to Shopify migration",
      "Salesforce to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Salesforce to Shopify Migration by Dynamic Dreamz",
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
  wixToShopifyMigration: {
    path: "/wix-to-shopify-migration",
    title: "Wix to Shopify Migration | Take an Expert Guide",
    description:
      "Are you looking for Wix to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
    keywords: [
      "Wix to Shopify migration",
      "Wix to Shopify",
      "Shopify migration experts",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Wix to Shopify Migration by Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  seoServices: {
    path: "/seo-services",
    title: "#1 SEO Services | Best SEO Company in India | Dynamic Dreamz",
    description:
      "Customized SEO services that deliver real results. Trusted SEO services from India’s top SEO company. Increase your rankings, traffic, and conversions.",
    keywords: [
      "SEO services",
      "best SEO company in India",
      "top SEO company",
      "eCommerce SEO",
      "Shopify SEO",
      "organic marketing",
    ],
    openGraphType: "article",
    modifiedTime: "2026-08-05T13:38:54+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "SEO Services by Dynamic Dreamz",
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
  bookDiscoveryCall: {
    path: "/book-a-discovery-call",
    title: "Book a Discovery Call | Dynamic Dreamz",
    description:
      "Book a 30-minute discovery call with Dynamic Dreamz to discuss your project requirements, challenges and the best way forward.",
    socialDescription:
      "Discuss your project requirements with our CTO and explore the right approach and next steps.",
    keywords: [
      "book a discovery call",
      "Dynamic Dreamz discovery call",
      "Shopify consultation",
      "ecommerce consultation",
      "book Shopify call",
    ],
    openGraphType: "article",
    publishedTime: "2026-08-19T08:47:22+00:00",
    modifiedTime: "2026-08-19T09:04:59+00:00",
    image: {
      path: "/assets/og/dynamic-dreamz-company.png",
      width: 1200,
      height: 630,
      alt: "Book a discovery call with Dynamic Dreamz",
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
    modifiedTime: "2026-08-24T00:00:00+05:30",
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
    modifiedTime: "2026-08-21T00:00:00+05:30",
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
    modifiedTime: "2026-08-21T00:00:00+05:30",
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
  royalElementorKitThemeCustomization: {
    path: "/royal-elementor-kit-theme-customization",
    title: "Royal Elementor Kit Theme Customization | Dynamic Dreamz",
    description:
      "Get professional Royal Elementor Kit Theme Customization services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Royal Elementor Kit theme customization",
      "Royal Elementor Kit WordPress theme",
      "Royal Elementor Kit customization services",
      "WordPress Elementor developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-05T10:45:03+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Royal Elementor Kit Theme Customization | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  popularfxThemeCustomization: {
    path: "/popularfx-theme-customization",
    title: "PopularFX Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional PopularFX theme customization services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "PopularFX theme customization",
      "PopularFX WordPress theme",
      "PopularFX theme customization services",
      "WordPress PopularFX developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-16T10:30:21+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "PopularFX Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  bloghashThemeCustomization: {
    path: "/bloghash-theme-customization",
    title: "BlogHash Theme Customization Service | Dynamic Dreamz",
    description:
      "Are you looking for a WordPress expert for BlogHash theme customization? Dynamic Dreamz can optimize your website for performance, SEO, and user engagement.",
    keywords: [
      "BlogHash theme customization",
      "BlogHash WordPress theme",
      "BlogHash theme customization service",
      "WordPress BlogHash developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-19T03:25:55+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "BlogHash Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  goThemeCustomization: {
    path: "/go-theme-customization",
    title: "Go Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional Go Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Go theme customization",
      "Go WordPress theme",
      "Go theme customization service",
      "WordPress Go developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-22T09:36:36+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Go Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  newsbloggerThemeCustomization: {
    path: "/newsblogger-theme-customization",
    title: "NewsBlogger Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional NewsBlogger Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "NewsBlogger theme customization",
      "NewsBlogger WordPress theme",
      "NewsBlogger theme customization service",
      "WordPress NewsBlogger developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-22T09:36:38+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "NewsBlogger Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  helloBizThemeCustomization: {
    path: "/hello-biz-theme-customization",
    title: "Hello Biz Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Hello Biz Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Hello Biz theme customization",
      "Hello Biz WordPress theme",
      "Hello Biz theme customization services",
      "WordPress Hello Biz developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-23T09:19:43+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Hello Biz Theme Customization Services | Dynamic Dreamz",
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
  neveThemeCustomization: {
    path: "/neve-theme-customization",
    title: "Neve Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Neve Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Neve theme customization",
      "Neve WordPress theme",
      "Neve theme customization services",
      "WordPress Neve developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T08:44:15+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Neve Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  blocksyThemeCustomization: {
    path: "/blocksy-theme-customization",
    title: "Blocksy Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Blocksy Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Blocksy theme customization",
      "Blocksy WordPress theme",
      "Blocksy theme customization services",
      "WordPress Blocksy developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-03-31T09:14:33+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Blocksy Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  extendableThemeCustomization: {
    path: "/extendable-theme-customization",
    title: "Extendable Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional Extendable Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Extendable theme customization",
      "Extendable WordPress theme",
      "Extendable theme customization service",
      "WordPress Extendable developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-05T09:39:17+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Extendable Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  kubioThemeCustomization: {
    path: "/kubio-theme-customization",
    title: "Kubio Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional Kubio Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Kubio theme customization",
      "Kubio WordPress theme",
      "Kubio theme customization service",
      "WordPress Kubio developers",
      "WordPress theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-13T05:27:49+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Kubio Theme Customization Service | Dynamic Dreamz",
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
  beYoursThemeCustomization: {
    path: "/be-yours-theme-customization",
    title: "Be Yours Theme Customization Service | Dynamic Dreamz",
    description:
      "Choose Be Yours Theme Customization Service by Dynamic Dreamz to create an elegant, user friendly online store.",
    keywords: [
      "Be Yours theme customization",
      "Be Yours Shopify theme",
      "Be Yours theme customization service",
      "Shopify Be Yours developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2024-12-05T09:28:54+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Be Yours Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  fabricThemeCustomization: {
    path: "/fabric-theme-customization",
    title: "Fabric Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Fabric Theme Customization Service for your Shopify store. Improve design, functionality, and conversions. Contact Dynamic Dreamz today!",
    keywords: [
      "Fabric theme customization",
      "Fabric Shopify theme",
      "Fabric theme customization services",
      "Shopify Fabric developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-10T03:59:52+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Fabric Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  savorThemeCustomization: {
    path: "/savor-theme-customization",
    title: "Savor Theme Customization Service | Dynamic Dreamz",
    description:
      "Shopify Savor Theme Customization Service to create a responsive, user-friendly store. Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Savor theme customization",
      "Savor Shopify theme",
      "Savor theme customization service",
      "Shopify Savor developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-13T03:44:02+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Savor Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  dawnThemeCustomization: {
    path: "/dawn-theme-customization",
    title: "Dawn Theme Customization Service | Dynamic Dreamz",
    description:
      "Shopify Dawn theme customization services to create a responsive, user-friendly store. Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Dawn theme customization",
      "Dawn Shopify theme",
      "Dawn theme customization service",
      "Shopify Dawn developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-13T07:23:15+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Dawn Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  studioThemeCustomization: {
    path: "/studio-theme-customization",
    title: "Studio Theme Customization Service | Dynamic Dreamz",
    description:
      "Want Studio theme customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Studio theme customization",
      "Studio Shopify theme",
      "Studio theme customization service",
      "Shopify Studio developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-16T03:30:31+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Studio Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  dwellThemeCustomization: {
    path: "/dwell-theme-customization",
    title: "Dwell Theme Customization Service | Dynamic Dreamz",
    description:
      "Get the best Shopify Dwell theme customization service. Build a fast, responsive, and branded store that improves UX and increases sales with Dynamic Dreamz.",
    keywords: [
      "Dwell theme customization",
      "Dwell Shopify theme",
      "Dwell theme customization service",
      "Shopify Dwell developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-18T05:07:49+00:00",
    modifiedTime: "2026-08-20T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Dwell Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  tinkerThemeCustomization: {
    path: "/tinker-theme-customization",
    title: "Tinker Theme Customization Service | Dynamic Dreamz",
    description:
      "Tinker theme customization services to create fast, mobile-friendly stores with smooth UX, unique design, and higher conversions by Dynamic Dreamz experts.",
    keywords: [
      "Tinker theme customization",
      "Tinker Shopify theme",
      "Tinker theme customization service",
      "Shopify Tinker developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-12T10:30:46+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Tinker Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  pitchThemeCustomization: {
    path: "/pitch-theme-customization",
    title: "Pitch Theme Customization Services | Dynamic Dreamz",
    description:
      "Pitch Theme Customization Service with responsive design, branding, app integration & fast support. Hire Dynamic Dreamz with 18 years of experience.",
    keywords: [
      "Pitch theme customization",
      "Pitch Shopify theme",
      "Pitch theme customization service",
      "Shopify Pitch developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-20T03:26:07+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Pitch Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  atelierThemeCustomization: {
    path: "/atelier-theme-customization",
    title: "Atelier Theme Customization Service | Dynamic Dreamz",
    description:
      "Get an Atelier theme customization service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Atelier theme customization",
      "Atelier Shopify theme",
      "Atelier theme customization service",
      "Shopify Atelier developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-23T03:23:47+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Atelier Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  heritageThemeCustomization: {
    path: "/heritage-theme-customization",
    title: "Heritage Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Heritage Theme Customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Heritage theme customization",
      "Heritage Shopify theme",
      "Heritage theme customization service",
      "Shopify Heritage developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-24T03:41:32+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Heritage Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  ritualThemeCustomization: {
    path: "/ritual-theme-customization",
    title: "Ritual Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Ritual Theme Customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Ritual theme customization",
      "Ritual Shopify theme",
      "Ritual theme customization service",
      "Shopify Ritual developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-26T04:01:31+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Ritual Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  publisherThemeCustomization: {
    path: "/publisher-theme-customization",
    title: "Publisher Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Publisher theme Customization service for your Shopify store. Improve design, functionality, and conversions. Contact Dynamic Dreamz today!",
    keywords: [
      "Publisher theme customization",
      "Publisher Shopify theme",
      "Publisher theme customization service",
      "Shopify Publisher developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-05T12:25:58+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Publisher Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  tradeThemeCustomization: {
    path: "/trade-theme-customization",
    title: "Trade Theme Customization Service | Dynamic Dreamz",
    description:
      "Get a customized Trade theme for your Shopify store. Boost design, functionality, and conversions. Contact us to hire an expert for theme customization today!",
    keywords: [
      "Trade theme customization",
      "Trade Shopify theme",
      "Trade theme customization service",
      "Shopify Trade developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-07T12:25:01+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Trade Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  spotlightThemeCustomization: {
    path: "/spotlight-theme-customization",
    title: "Spotlight Theme Customization Services | Dynamic Dreamz",
    description:
      "Spotlight Theme Customization Services to create a responsive, user-friendly store. Hire Dynamic Dreamz with 18 years of experience. Contact Us Today!",
    keywords: [
      "Spotlight theme customization",
      "Spotlight Shopify theme",
      "Spotlight theme customization service",
      "Shopify Spotlight developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-07T12:29:27+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Spotlight Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  refreshThemeCustomization: {
    path: "/refresh-theme-customization",
    title: "Refresh Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Shopify Refresh Theme Customization Service for your Shopify store. Improve design, functionality, and conversions. Contact Dynamic Dreamz today!",
    keywords: [
      "Refresh theme customization",
      "Refresh Shopify theme",
      "Refresh theme customization service",
      "Shopify Refresh developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-08T03:45:57+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Refresh Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  woodstockThemeCustomization: {
    path: "/woodstock-theme-customization",
    title: "Woodstock Theme Customization Service | Dynamic Dreamz",
    description:
      "Get Woodstock Theme Customization Service to customize the Woodstock Shopify theme in a high-converting store. Contact Dynamic Dreamz today!",
    keywords: [
      "Woodstock theme customization",
      "Woodstock Shopify theme",
      "Woodstock theme customization service",
      "Shopify Woodstock developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-08T03:46:59+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Woodstock Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  originThemeCustomization: {
    path: "/origin-theme-customization",
    title: "Origin Theme Customization Service | Dynamic Dreamz",
    description:
      "Need Origin theme customization service? Boost your Shopify store's design, functionality, and conversions with custom solutions. Contact Dynamic Dreamz today!",
    keywords: [
      "Origin theme customization",
      "Origin Shopify theme",
      "Origin theme customization service",
      "Shopify Origin developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-08T04:57:40+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Origin Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  stilettoThemeCustomization: {
    path: "/stiletto-theme-customization",
    title: "Stiletto Theme Customization Services | Dynamic Dreamz",
    description:
      "Get Stiletto Theme Customization Services to customize the Stiletto Shopify theme for an elegant, advanced Shopify store. Contact Dynamic Dreamz today!",
    keywords: [
      "Stiletto theme customization",
      "Stiletto Shopify theme",
      "Stiletto theme customization service",
      "Shopify Stiletto developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-09T06:42:25+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Stiletto Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  colorblockThemeCustomization: {
    path: "/colorblock-theme-customization",
    title: "Colorblock Theme Customization Services | Dynamic Dreamz",
    description:
      "Get Colorblock Shopify theme Customization for a bold, high-converting store. Choose Dynamic Dreamz today!",
    keywords: [
      "Colorblock theme customization",
      "Colorblock Shopify theme",
      "Colorblock theme customization service",
      "Shopify Colorblock developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-10T03:32:54+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Colorblock Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  pipelineThemeCustomization: {
    path: "/pipeline-theme-customization",
    title: "Pipeline Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Pipeline Theme Customization Service for your Shopify store. Improve design, functionality, and conversions. Contact Dynamic Dreamz today!",
    keywords: [
      "Pipeline theme customization",
      "Pipeline Shopify theme",
      "Pipeline theme customization service",
      "Shopify Pipeline developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-11T04:21:16+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Pipeline Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  visionThemeCustomization: {
    path: "/vision-theme-customization",
    title: "Vision Theme Customization Services | Dynamic Dreamz",
    description:
      "Get a Vision Theme Customization Service for your Shopify store. Improve design, functionality, and conversions. Contact Dynamic Dreamz today!",
    keywords: [
      "Vision theme customization",
      "Vision Shopify theme",
      "Vision theme customization service",
      "Shopify Vision developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-14T03:27:33+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Vision Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  craftThemeCustomization: {
    path: "/craft-theme-customization",
    title: "Craft Theme Customization Services | Dynamic Dreamz",
    description:
      "Want Craft Theme Customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Craft theme customization",
      "Craft Shopify theme",
      "Craft theme customization service",
      "Shopify Craft developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-15T03:30:09+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Craft Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  broadcastThemeCustomization: {
    path: "/broadcast-theme-customization",
    title: "Broadcast Theme Customization Services | Dynamic Dreamz",
    description:
      "Want Broadcast Theme Customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Broadcast theme customization",
      "Broadcast Shopify theme",
      "Broadcast theme customization service",
      "Shopify Broadcast developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-16T09:34:54+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Broadcast Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  warehouseThemeCustomization: {
    path: "/warehouse-theme-customization",
    title: "Warehouse Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Warehouse theme customization service for your Shopify store. Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Warehouse theme customization",
      "Warehouse Shopify theme",
      "Warehouse theme customization service",
      "Shopify Warehouse developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-17T08:02:29+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Warehouse Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  startupThemeCustomization: {
    path: "/startup-theme-customization",
    title: "Startup Theme Customization Services | Dynamic Dreamz",
    description:
      "Get professional Startup Theme Customization Services for your Shopify store. Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Startup theme customization",
      "Startup Shopify theme",
      "Startup theme customization service",
      "Shopify Startup developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-18T03:25:16+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Startup Theme Customization Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  impactThemeCustomization: {
    path: "/impact-theme-customization",
    title: "Impact Theme Customization Services | Dynamic Dreamz",
    description:
      "Want Impact Theme Customization Service for your Shopify store? Hire Dynamic Dreamz with 18 years of experience to optimize your store.",
    keywords: [
      "Impact theme customization",
      "Impact Shopify theme",
      "Impact theme customization service",
      "Shopify Impact developers",
      "Shopify theme customization agency",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-21T03:39:04+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Impact Theme Customization Services | Dynamic Dreamz",
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
  risksOfShopifyOutsourcing: {
    path: "/risks-of-shopify-outsourcing",
    title: "Risks of Shopify Outsourcing: Expert Breakdown",
    description:
      "Learn the real Risks of Shopify Outsourcing and protect your store from security threats, hidden costs, and miscommunication challenges- DynamicDreamz",
    keywords: [
      "risks of Shopify outsourcing",
      "Shopify outsourcing risks",
      "Shopify development outsourcing",
      "Shopify outsourcing security",
      "Shopify outsourcing companies",
    ],
    openGraphType: "article",
    publishedTime: "2025-11-20T12:41:26+00:00",
    modifiedTime: "2026-08-05T13:38:53+00:00",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Risks of Shopify Outsourcing: Expert Breakdown",
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.7,
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
    publishedTime: "2025-03-10T07:37:33+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
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
  mobileApplicationDevelopment: {
    path: "/mobile-application-development",
    title: "Mobile Application Development Services | Dynamic Dreamz",
    description:
      "Get the best mobile application development services with Dynamic Dreamz—features, integrations and apps customised to your business goals, ready in weeks.",
    keywords: [
      "mobile application development",
      "mobile application development services",
      "custom mobile application development",
      "Shopify mobile application",
      "Shopify add-on application",
      "Dynamic Dreamz",
    ],
    openGraphType: "website",
    publishedTime: "2025-12-30T10:21:41+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Mobile Application Development Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
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
  webflowDevelopment: {
    path: "/webflow-development",
    title: "Webflow Development Company | Dynamic Dreamz",
    description:
      "Custom Webflow websites, scalable solutions, and dedicated Webflow developers from Dynamic Dreamz for fast, flexible, conversion-focused experiences.",
    keywords: [
      "Webflow development company",
      "Webflow development services",
      "custom Webflow website development",
      "Figma to Webflow development",
      "Webflow developers",
      "Webflow CMS development",
      "Webflow migration services",
    ],
    openGraphType: "article",
    publishedTime: "2026-01-28T07:12:21+00:00",
    modifiedTime: "2026-08-05T13:22:37+00:00",
    image: {
      path: "/assets/services/webflow-development/hero/webflow-img.svg",
      width: 213,
      height: 219,
      alt: "Webflow development services illustration",
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
    modifiedTime: "2026-08-21T00:00:00+05:30",
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
  shopifyDevelopmentCompanyInChennai: {
    path: "/shopify-development-company-in-chennai",
    title: "Hire Shopify development company in Chennai | Dynamic Dreamz",
    description:
      "Looking for a Shopify development company in Chennai? Our professional team delivers custom Ecommerce solutions that fulfill your business needs.",
    keywords: [
      "Shopify development company in Chennai",
      "Shopify developers Chennai",
      "Shopify development agency Chennai",
      "Shopify store design Chennai",
      "Shopify migration Chennai",
      "Shopify maintenance Chennai",
    ],
    openGraphType: "website",
    publishedTime: "2024-10-08T13:24:33+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Hire Shopify development company in Chennai | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyMaintenanceServices: {
    path: "/shopify-maintenance-services",
    title: "Top Shopify Maintenance Services | Dynamic Dreamz",
    description:
      "Ensure your Shopify store runs smoothly with expert Shopify maintenance from Dynamic Dreamz. We offer updates, performance optimization, and custom development.",
    socialDescription:
      "Expert Shopify maintenance services by Dynamic Dreamz: 24/7 technical support, speed optimization, bug fixes, theme updates, and dedicated ongoing maintenance.",
    keywords: [
      "Shopify maintenance services",
      "Shopify store maintenance",
      "Shopify support agency",
      "Shopify bug fixes",
      "Shopify speed optimization",
      "Shopify maintenance plans",
    ],
    openGraphType: "website",
    publishedTime: "2024-12-05T10:53:00+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Top Shopify Maintenance Services | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  dentalClinicWebsiteDevelopmentCompany: {
    path: "/dental-clinic-website-development-company",
    title: "Dental Clinic Website Development Company | Dynamic Dreamz",
    description:
      "Build your brand with a top Dental Clinic Website Development Company. We offer custom website development, design, optimization, and ongoing maintenance.",
    socialDescription:
      "Expert dental clinic website development company: custom WordPress design, online booking integrations, WooCommerce stores, speed optimization and maintenance.",
    keywords: [
      "Dental Clinic Website Development Company",
      "dental website development",
      "dentist website design",
      "dental clinic WordPress",
      "dental practice web development",
    ],
    openGraphType: "website",
    publishedTime: "2025-07-23T11:19:06+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Dental Clinic Website Development Company | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInDelhi: {
    path: "/shopify-development-in-delhi",
    title: "No.1 Shopify Development in Delhi | Dynamic Dreamz",
    description:
      "Choose Shopify development in Delhi. Expert Shopify development Company with 18+ Years of Experience. Hire DynamicDreamz today!",
    socialDescription:
      "Expert Shopify development company in Delhi: custom theme design, app development, Shopify migration, 2.0 upgrades, and store maintenance.",
    keywords: [
      "Shopify development in Delhi",
      "Shopify development company in Delhi",
      "Shopify agency Delhi",
      "hire Shopify developers in Delhi",
      "Shopify experts Delhi",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-08-21T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Delhi | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInHyderabad: {
    path: "/shopify-development-in-hyderabad",
    title: "No.1 Shopify Development in Hyderabad | Dynamic Dreamz",
    description:
      "Choose Shopify development in Hyderabad. Expert Shopify development Company with 18+ Years of Experience. Hire DynamicDreamz today!",
    socialDescription:
      "Expert Shopify development company in Hyderabad: custom theme design, app integration, Shopify migration, 2.0 upgrades, and store maintenance.",
    keywords: [
      "Shopify development in Hyderabad",
      "Shopify development company in Hyderabad",
      "Shopify agency Hyderabad",
      "hire Shopify developers in Hyderabad",
      "Shopify experts Hyderabad",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-01T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Hyderabad | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInDelhi: {
    path: "/wordpress-development-in-delhi",
    title: "No.1 WordPress Development in Delhi | Dynamic Dreamz",
    description:
      "WordPress development in Delhi. Expert WordPress Development Company with 18+ Years of Experience. Hire DynamicDreamz today!",
    socialDescription:
      "Expert WordPress development company in Delhi: custom theme development, plugin integration, SEO optimization, and website maintenance.",
    keywords: [
      "WordPress development in Delhi",
      "WordPress development company in Delhi",
      "WordPress agency Delhi",
      "hire WordPress developers in Delhi",
      "custom WordPress development Delhi",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-01T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Delhi | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInNoida: {
    path: "/wordpress-development-in-noida",
    title: "No.1 WordPress Development in Noida | Dynamic Dreamz",
    description:
      "Professional WordPress Development in Noida with 18+ Years of Experience. So hire the team DynamicDreamz today, and scale your business online.",
    socialDescription:
      "Expert WordPress development company in Noida: custom theme development, plugin integration, SEO optimization, and website maintenance.",
    keywords: [
      "WordPress development in Noida",
      "WordPress development company in Noida",
      "WordPress agency Noida",
      "hire WordPress developers in Noida",
      "custom WordPress development Noida",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-01T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Noida | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInPune: {
    path: "/wordpress-development-in-pune",
    title: "No.1 WordPress Development in Pune | Dynamic Dreamz",
    description:
      "Professional WordPress development in Pune with 18+ Years of Experience. Custom themes, plugin development, speed optimization, and ongoing support.",
    socialDescription:
      "Expert WordPress development company in Pune: custom theme development, plugin integration, SEO optimization, and website maintenance.",
    keywords: [
      "WordPress development in Pune",
      "WordPress development company in Pune",
      "WordPress agency Pune",
      "hire WordPress developers in Pune",
      "custom WordPress development Pune",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-01T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Pune | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInAhmedabad: {
    path: "/wordpress-development-in-ahmedabad",
    title: "No.1 WordPress Development in Ahmedabad | Dynamic Dreamz",
    description:
      "Best WordPress Development in Ahmedabad with 18+ Years of Experience. Custom store setup, theme customization & migration for growing brands.",
    socialDescription:
      "Expert WordPress development company in Ahmedabad: custom theme development, plugin integration, SEO optimization, and website maintenance.",
    keywords: [
      "WordPress development in Ahmedabad",
      "WordPress development company in Ahmedabad",
      "WordPress agency Ahmedabad",
      "hire WordPress developers in Ahmedabad",
      "custom WordPress development Ahmedabad",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-01T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Ahmedabad | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInBangalore: {
    path: "/wordpress-development-in-bangalore",
    title: "No.1 WordPress Development in Bangalore | Dynamic Dreamz",
    description:
      "Professional WordPress Development in Bangalore with 18+ Years of Experience. Get custom themes, SEO-ready builds, and ongoing support for your business.",
    socialDescription:
      "Expert WordPress development company in Bangalore: custom theme development, plugin integration, SEO optimization, and website maintenance.",
    keywords: [
      "WordPress development in Bangalore",
      "WordPress development company in Bangalore",
      "WordPress agency Bangalore",
      "hire WordPress developers in Bangalore",
      "custom WordPress development Bangalore",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Bangalore | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  wordpressDevelopmentInMumbai: {
    path: "/wordpress-development-in-mumbai",
    title: "WordPress Development Company in Mumbai | Dynamic Dreamz",
    description:
      "Partner with a professional WordPress development company in Mumbai offering custom development, scalable solutions, and reliable website maintenance.",
    socialDescription:
      "Expert WordPress development company in Mumbai: custom theme development, plugin integration, headless WordPress, and website maintenance.",
    keywords: [
      "WordPress development in Mumbai",
      "WordPress development company in Mumbai",
      "WordPress agency Mumbai",
      "hire WordPress developers in Mumbai",
      "custom WordPress development Mumbai",
    ],
    openGraphType: "website",
    publishedTime: "2025-02-07T06:57:43+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "WordPress Development in Mumbai | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInPune: {
    path: "/shopify-development-in-pune",
    title: "No.1 Shopify Development in Pune | Dynamic Dreamz",
    description:
      "Best Shopify development in Pune. Expert Shopify Development Company with 18+ years of experience for custom store setup, theme customization, migration & more.",
    socialDescription:
      "Top-rated Shopify development company in Pune. Certified developers for custom stores, Plus upgrades, themes, app integrations, and migrations.",
    keywords: [
      "Shopify development in Pune",
      "Shopify development company in Pune",
      "Shopify agency Pune",
      "hire Shopify developers in Pune",
      "Shopify Plus Pune",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Pune | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInBangalore: {
    path: "/shopify-development-in-bangalore",
    title: "No.1 Shopify Development in Bangalore | Dynamic Dreamz",
    description:
      "Best Shopify development in Bangalore. Custom store setup, theme customization, migration & performance optimization for growing brands. Hire Dynamic Dreamz!",
    socialDescription:
      "Top-rated Shopify development company in Bangalore. Certified Shopify developers for custom stores, Plus upgrades, theme engineering, and migrations.",
    keywords: [
      "Shopify development in Bangalore",
      "Shopify development company in Bangalore",
      "Shopify agency Bangalore",
      "Shopify Development Company in Bengaluru",
      "hire Shopify developers Bangalore",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Bangalore | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInTexas: {
    path: "/shopify-development-in-texas",
    title: "Best Shopify Development in Texas | Dynamic Dreamz",
    description:
      "Best Shopify development in Texas. Dynamic Dreamz delivers custom Shopify stores, Plus builds & white-label solutions across Houston, Dallas, Austin & beyond.",
    socialDescription:
      "Top-rated Shopify development company in Texas. Certified Shopify developers for custom stores, Plus builds, theme customization, and migrations.",
    keywords: [
      "Shopify development in Texas",
      "Shopify development company in Texas",
      "Shopify developers in Texas",
      "hire Shopify developers Texas",
      "Shopify Plus Texas",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Texas | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInNewYork: {
    path: "/shopify-development-in-new-york",
    title: "Shopify Development Company in New York | Dynamic Dreamz",
    description:
      "Looking for expert Shopify development in New York? Dynamic Dreamz builds high-performance custom Shopify stores tailored to your business. Get a quote today!",
    socialDescription:
      "Top-rated Shopify development company in New York. Certified Shopify developers for custom stores, Plus builds, theme customization, and migrations.",
    keywords: [
      "Shopify development in New York",
      "Shopify development company in New York",
      "Shopify developers New York",
      "hire Shopify developers New York",
      "Shopify Plus New York",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in New York | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInMumbai: {
    path: "/shopify-development-in-mumbai",
    title: "Top Shopify Development Company in Mumbai - Dynamic Dreamz",
    description:
      "Partner with the best Shopify development company in Mumbai, which offers custom Shopify web development, migration, and scalable ecommerce solutions.",
    socialDescription:
      "Partner with the top Shopify development company in Mumbai for custom store design, theme customization, migrations, and scalable ecommerce growth.",
    keywords: [
      "Shopify development in Mumbai",
      "Shopify development company in Mumbai",
      "Shopify developers Mumbai",
      "hire Shopify developers Mumbai",
      "Shopify web development Mumbai",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "Shopify Development in Mumbai | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  inspiroThemeCustomization: {
    path: "/inspiro-theme-customization",
    title: "Inspiro Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional Inspiro Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    keywords: [
      "Inspiro theme customization",
      "Inspiro theme customization service",
      "customize Inspiro WordPress theme",
      "hire Inspiro theme developers",
      "WordPress theme customization",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/inspiro-theme-customization/hero/inspiro-theme-customization-service-img.webp",
      width: 1202,
      height: 948,
      alt: "Inspiro Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  expanseThemeCustomization: {
    path: "/expanse-theme-customization",
    title: "Expanse Theme Customization Service | Dynamic Dreamz",
    description:
      "Looking for an Expanse Theme Customization service. Choose Dynamic Dreamz, they offer everything that you need. Get an Expert Team and Ongoing Support.",
    keywords: [
      "Expanse theme customization",
      "Expanse theme customization service",
      "customize Expanse Shopify theme",
      "hire Expanse theme developers",
      "Shopify theme customization",
    ],
    openGraphType: "website",
    publishedTime: "2024-11-20T00:00:00+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/expanse-theme-customization/hero/expanse-theme-customization-service-img.webp",
      width: 570,
      height: 441,
      alt: "Expanse Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInLosAngeles: {
    path: "/shopify-development-in-los-angeles",
    title: "Shopify Development Company in Los Angeles | Dynamic Dreamz",
    description:
      "Looking for expert Shopify development in Los Angeles? Dynamic Dreamz builds high-performance, custom Shopify stores for your business. Get a free quote today!",
    socialDescription:
      "Top-rated Shopify development company in Los Angeles. Certified Shopify developers for custom stores, Plus builds, theme customization, and migrations.",
    keywords: [
      "Shopify development in Los Angeles",
      "Shopify development company in Los Angeles",
      "Shopify developers Los Angeles",
      "hire Shopify developers Los Angeles",
      "Shopify agency Los Angeles",
      "Shopify Plus Los Angeles",
    ],
    openGraphType: "website",
    publishedTime: "2026-04-03T09:01:10+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/shopify-development-company-in-chennai/hero/shopify-development-company-chennai-img.webp",
      width: 520,
      height: 480,
      alt: "Shopify Development Company in Los Angeles | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  shopifyDevelopmentInMiami: {
    path: "/shopify-development-in-miami",
    title: "Best Shopify Development in Miami | Dynamic Dreamz",
    description:
      "Need expert Shopify development in Miami? We build high-performance stores, handle migrations & offer white-label solutions. 18+ yrs exp. Get a quote!",
    socialDescription:
      "Top-rated Shopify development company in Miami. Certified Shopify developers for custom stores, Plus builds, theme customization, and migrations.",
    keywords: [
      "Shopify development in Miami",
      "Shopify development company in Miami",
      "Shopify developers Miami",
      "hire Shopify developers Miami",
      "Shopify agency Miami",
      "Shopify Plus Miami",
    ],
    openGraphType: "website",
    publishedTime: "2026-05-04T12:54:15+00:00",
    modifiedTime: "2026-09-02T00:00:00+05:30",
    image: {
      path: "/assets/shopify-development-company-in-chennai/hero/shopify-development-company-chennai-img.webp",
      width: 520,
      height: 480,
      alt: "Best Shopify Development in Miami | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  yithWonderThemeCustomization: {
    path: "/yith-wonder-theme-customization",
    title: "YITH Wonder Theme Customization Service | Dynamic Dreamz",
    description:
      "Get professional YITH Wonder Theme Customization Service. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!",
    socialDescription:
      "Expert YITH Wonder theme customization services for WordPress and WooCommerce. Custom styling, speed optimization, and responsive design by Dynamic Dreamz.",
    keywords: [
      "YITH Wonder Theme Customization",
      "YITH Wonder WordPress Theme",
      "YITH Wonder WooCommerce Customization",
      "WordPress Theme Customization",
      "Dynamic Dreamz WordPress",
    ],
    openGraphType: "website",
    publishedTime: "2025-05-06T06:43:09+00:00",
    modifiedTime: "2026-08-05T13:26:33+00:00",
    image: {
      path: "/assets/yith-wonder-theme-customization/hero/yith-wonder-theme-customization-service-img.webp",
      width: 601,
      height: 474,
      alt: "YITH Wonder Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  vesselThemeCustomization: {
    path: "/vessel-theme-customization",
    title: "Vessel Theme Customization Service | Dynamic Dreamz",
    description:
      "Get Vessel Theme Customization Service to Enhance your Shopify store. Improve user experience, boost conversions with Dynamic Dreamz.",
    socialDescription:
      "Expert Vessel theme customization for Shopify stores. Transform your ecommerce storefront with bespoke design, speed optimization, and higher conversions.",
    keywords: [
      "Vessel Theme Customization",
      "Vessel Shopify Theme",
      "Shopify Theme Customization",
      "Dynamic Dreamz Shopify",
      "Vessel Theme Developer",
    ],
    openGraphType: "website",
    publishedTime: "2025-06-16T03:29:55+00:00",
    modifiedTime: "2026-08-05T13:35:08+00:00",
    image: {
      path: "/assets/vessel-theme-customization/hero/vessel-theme-customization-service-img.webp",
      width: 617,
      height: 474,
      alt: "Vessel Theme Customization Service | Dynamic Dreamz",
    },
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },
  phpDevelopment: {
    path: "/php-development",
    title: "PHP Web Development Company in India | Dynamic Dreamz",
    description:
      "Top PHP Web Development Company. Our experts craft scalable, efficient solutions for your online presence. Contact us today! or Call Now!",
    socialDescription:
      "Top PHP Web Development Company in India. Expert PHP/MySQL developers crafting custom Laravel, Craft CMS, Prestashop, and scalable web solutions.",
    keywords: [
      "PHP Development Company in India",
      "PHP Web Development Company",
      "Custom Laravel Development",
      "PHP MySQL Developers",
      "Dynamic Dreamz PHP",
    ],
    openGraphType: "website",
    publishedTime: "2024-07-22T05:03:27+00:00",
    modifiedTime: "2026-02-16T09:22:22+00:00",
    image: {
      path: "/assets/og/homepage.png",
      width: 1200,
      height: 630,
      alt: "PHP Web Development Company in India | Dynamic Dreamz",
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

export function createPageMetadata(page: PageSeoConfig): Metadata {
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
    robots: isSearchIndexingEnabled() ? (page.robots ?? indexableRobots) : blockedSearchRobots,
  };
}

function createPageMetadataMap<Pages extends Record<string, PageSeoConfig>>(pages: Pages) {
  return Object.fromEntries(
    Object.entries(pages).map(([key, page]) => [key, createPageMetadata(page)]),
  ) as { [Key in keyof Pages]: Metadata };
}

export const pageMetadata = createPageMetadataMap(pageSeo);
