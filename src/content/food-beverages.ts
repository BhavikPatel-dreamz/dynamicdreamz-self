import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { IndustryCustomDevelopmentContent } from "@/components/sections/industry/industry-custom-development-section";
import type { WhiteLabelTool } from "@/types/white-label-service";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import { industryBrandLogos } from "@/content/industries";
import { shopifyPlusAgencyPageTestimonials } from "@/content/shopify-plus-agency";

// 1. Hero
export const foodBeveragesHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Food & Beverages"],
  title: "Ecommerce & Ordering Solutions for Food & Beverage Brands",
  paragraphs: [
    "We help food, beverage, restaurant and FMCG brands build high-converting storefronts, repeat ordering journeys, subscriptions, local delivery and operational integrations.",
  ],
  cta: "Discuss Your Project",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "See Relevant Work",
    href: "#our_work",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      width: 136,
      height: 44,
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      width: 111,
      height: 44,
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      width: 148,
      height: 50,
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      width: 124,
      height: 44,
    },
  ],
};

// 2. Brand Logos
export const foodBeveragesBrandsConfig = {
  slug: "food-beverages",
  brands: {
    ariaLabel: "Food and beverage brand logos supported by Dynamic Dreamz",
  },
};

export const foodBeveragesBrandsHeading = "Trusted by Leading Brands";

export const foodBeveragesBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Case Studies
export const foodBeveragesCaseStudies: {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly CaseStudyPreviewItem[];
} = {
  eyebrow: "CASE STUDIES",
  heading: "Proof from Real Ecommerce and Technology Work",
  description:
    "Selected projects that show how our team combines storefront development, custom functionality, integrations, mobile and full-stack engineering when the requirement demands it.",
  items: [
    {
      title: "Atlantic Naturals: Organic Supplement Shopify Store with Wellness Quiz & Trust-First Design",
      href: "/case-studies/atlantic-naturals",
      image: "/assets/case-studies/atlantic-naturals.webp",
      imageAlt: "Atlantic Naturals: Organic Supplement Shopify Store with Wellness Quiz & Trust-First Design",
      technology: "Shopify / Shopify Plus",
      industry: "Food & Beverages",
      tags: ["Organic Supplements", "Shopify Store Development"],
      ctaLabel: "View Case study",
    },
    {
      title: "Holy Plantz: Figma-to-Shopify Redesign with Custom Sections for a Plant-Based Food Brand",
      href: "/case-studies/holy-plantz",
      image: "/assets/case-studies/holy-plantz.webp",
      imageAlt: "Holy Plantz: Figma-to-Shopify Redesign with Custom Sections for a Plant-Based Food Brand",
      technology: "Shopify / Shopify Plus",
      industry: "Food & Beverages",
      tags: ["Figma to Shopify", "Plant-Based Food"],
      ctaLabel: "View Case study",
    },
    {
      title: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
      href: "/case-studies/nekter-juice-bar",
      image: "/assets/case-studies/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
      technology: "Shopify / Shopify Plus",
      industry: "Food & Beverages",
      tags: ["Multi-Location Store Pickup", "Streamlined Ordering"],
      ctaLabel: "View Case study",
    },
  ],
};

// 4. Industry Challenges
export const foodBeveragesChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built around Repeat Orders, Location and Fulfillment",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "Freshness and Perishability Require Delivery Rules",
      description:
        "Cut-off times, dispatch days, shipping zones and temperature constraints must be handled clearly before checkout.",
    },
    {
      number: "02",
      title: "Multi-Location Operations complicate Inventory",
      description:
        "Local pickup, store-specific availability and regional delivery demand accurate operational data.",
    },
    {
      number: "03",
      title: "Low Order Value makes Repeat Purchase Critical",
      description:
        "Subscriptions, reorder, loyalty and bundles can matter more than one-off conversion.",
    },
    {
      number: "04",
      title: "Gift and Bulk Orders use a Different Flow",
      description:
        "Hampers, gift notes, scheduled delivery and multi-address orders need their own customer journey.",
    },
    {
      number: "05",
      title: "Dietary and Ingredient Information Affects Discovery",
      description:
        "Filters for flavor, dietary needs, ingredients and use cases help shoppers find the right product quickly.",
    },
    {
      number: "06",
      title: "Storefront and Fulfillment must Stay Synchronized",
      description:
        "Inventory, POS, locations, shipping and distribution systems need reliable data movement behind the scenes.",
    },
  ],
};

// 5. Solutions We Build
export const foodBeveragesSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Food & Beverage Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Subscriptions & Repeat Ordering",
      description:
        "Subscribe-and-save, reorder flows, customer accounts, replenishment reminders and loyalty-driven experiences.",
    },
    {
      number: "02",
      title: "Bundles & Build-a-Box",
      description:
        "Mix-and-match boxes, kits, hampers and product combinations with flexible pricing and inventory logic.",
    },
    {
      number: "03",
      title: "Multi-Location Pickup & Delivery",
      description:
        "Store selection, location-based availability, pickup, delivery zones and local-first fulfillment.",
    },
    {
      number: "04",
      title: "Structured Product Education",
      description:
        "Flavor, dietary, ingredient and use-case filters, recipes, education and cross-sell merchandising.",
    },
    {
      number: "05",
      title: "Shopify & Shopify Plus Development",
      description:
        "Custom storefronts, migrations, multi-source inventory, theme development and ongoing ecommerce support.",
    },
    {
      number: "06",
      title: "Custom Platforms & Integrations",
      description:
        "Inventory, POS, ERP, fulfillment and custom API connections across storefront and operations.",
    },
  ],
};

// 6. Custom Development
export const foodBeveragesCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Ordering Experiences Built around How the Product is Actually Fulfilled",
  description:
    "Food and beverage commerce often connects the customer experience directly to local operations. We build the storefront logic and integrations needed to keep ordering and fulfillment aligned.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Technology Stack
export const foodBeveragesTechnologies = {
  title: "Platforms, Frameworks & Mobile Capabilities",
  description:
    "We select technology around the customer experience, existing systems and long-term roadmap. The same team can support managed ecommerce, custom full-stack development, mobile apps and connected integrations.",
  rows: [
    [
      {
        name: "Shopify Development",
        image: "/assets/technologies/shopify-development.webp",
      },
      {
        name: "Shopify Plus Development",
        image: "/assets/technologies/shopify-plus-development.webp",
      },
      {
        name: "Full Stack Development",
        image: "/assets/technologies/full-stack-development.webp",
      },
      {
        name: "React Development",
        image: "/assets/technologies/react-development.webp",
      },
      {
        name: "Next.js Development",
        image: "/assets/technologies/next-js-development.webp",
      },
      {
        name: "Node.js Development",
        image: "/assets/technologies/node-js-development.webp",
      },
      {
        name: "React Native Development",
        image: "/assets/technologies/react-native-development.webp",
      },
      {
        name: "iOS Development",
        image: "/assets/technologies/ios-development.webp",
      },
      {
        name: "Android Development",
        image: "/assets/technologies/android-development.webp",
      },
      {
        name: "Figma Design",
        image: "/assets/technologies/figma-design.webp",
      },
    ],
    [
      {
        name: "Magento Development",
        image: "/assets/technologies/magento-development.webp",
      },
      {
        name: "WooCommerce Development",
        image: "/assets/technologies/woo-development.webp",
      },
      {
        name: "BigCommerce Development",
        image: "/assets/technologies/bigcommerce-development.webp",
      },
      {
        name: "WordPress Development",
        image: "/assets/technologies/wordpress-development.webp",
      },
      {
        name: "Webflow Development",
        image: "/assets/technologies/webflow-development.webp",
      },
      {
        name: "PHP Development",
        image: "/assets/technologies/php-development.webp",
      },
      {
        name: "Medusa Development",
        image: "/assets/technologies/medusa-development.webp",
      },
      {
        name: "GraphQL Development",
        image: "/assets/technologies/graphql-development.webp",
      },
    ],
  ] as const satisfies readonly (readonly WhiteLabelTool[])[],
};

// 8. Portfolio
export const foodBeveragesPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Food & Beverages Experience",
  items: [
    {
      name: "Naakbar",
      category: "Shopify / Shopify Plus",
      href: "https://www.naak.com/",
      image: "/assets/health-nutrition/portfolio/naakbar-energy-products.webp",
      imageAlt: "Naakbar Image",
    },
    {
      name: "Matcha Republic",
      category: "Shopify / Shopify Plus",
      href: "https://www.matcharepublic.com/",
      image: "/assets/our-work/projects/matcha-republic.webp",
      imageAlt: "Matcha Republic Image",
    },
    {
      name: "Banchharams",
      category: "WordPress",
      href: "https://banchharams.com/",
      image: "/assets/our-work/projects/banchharams.webp",
      imageAlt: "Banchharams Image",
    },
    {
      name: "Baked by Noon",
      category: "Shopify / Shopify Plus",
      href: "https://bakedbynoon.com/",
      image: "/assets/our-work/projects/baked-by-noon.webp",
      imageAlt: "Baked by Noon Image",
    },
    {
      name: "Nyam Good Sauces",
      category: "Shopify / Shopify Plus",
      href: "https://nyamgoodsauceco.com/",
      image: "/assets/our-work/projects/nyam-good-sauces.webp",
      imageAlt: "Nyam Good Sauces Image",
    },
    {
      name: "Royce Chocolate",
      category: "Shopify / Shopify Plus",
      href: "https://royceindia.com/",
      image: "/assets/our-work/projects/royce-chocolate.webp",
      imageAlt: "Royce Chocolate Image",
    },
    {
      name: "Maple Syrup",
      category: "BigCommerce",
      href: "https://www.maplesyrupworld.com/",
      image: "/assets/our-work/projects/maple-syrup.webp",
      imageAlt: "Maple Syrup Image",
    },
    {
      name: "The Huddle Sports Grill",
      category: "WordPress",
      href: "https://thehuddlesportsgrill.com/",
      image: "/assets/our-work/projects/the-huddle-sports-grill.webp",
      imageAlt: "The Huddle Sports Grill Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const foodBeveragesWhyChoose: WhyChooseMigrationContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "One Team Across Ecommerce, Custom Development and Mobile",
  description:
    "Delivering since 2006, with ecommerce specialists working alongside UI/UX designers, full-stack developers, mobile engineers and QA when a requirement crosses platform boundaries.",
  items: [
    {
      icon: "certified",
      title: "Industry-led Solution Design",
      description:
        "We start from product discovery, buying behaviour, operational constraints and customer expectations—not only from the chosen platform.",
    },
    {
      icon: "shopify-bag",
      title: "Strong Shopify Capability, Broader Technology Depth",
      description:
        "Shopify and Shopify Plus are core capabilities, supported by mobile, WordPress, Magento and full-stack technologies when required.",
    },
    {
      icon: "custom-build",
      title: "Custom-first when Needed",
      description:
        "Configurators, APIs, middleware, pricing logic and integrations can be developed around the exact business requirement.",
    },
    {
      icon: "long-term-support",
      title: "Long-term Development Support",
      description:
        "After launch, our team can continue with new features, CRO, integrations, performance and ongoing development.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150+", label: "Experts" },
    { value: "5k+", label: "projects delivered" },
    { value: "2.5k+", label: "Verified 5 star Reviews" },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

// 10. Testimonials
export const foodBeveragesTestimonials: {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly HappyClientTestimonialItem[];
} = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  items: shopifyPlusAgencyPageTestimonials.items,
};

// 11. FAQs
export const foodBeveragesFaqEyebrow = "Frequently Asked Questions";
export const foodBeveragesFaqHeading = "What Food & Beverage Brands Ask before They Scale Ordering";

export const foodBeveragesFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Can Shopify handle local pickup and same-day delivery?",
    answer:
      "Yes. We can configure pickup by location, delivery zones, cut-off times and time-slot logic using suitable platform features, apps or custom integrations depending on the operation.",
  },
  {
    question: "How do you handle shipping for perishable or temperature-sensitive products?",
    answer:
      "We can build shipping logic around product type, destination, dispatch days, cut-off times and carrier rules. The final setup depends on the fulfillment model and shipping services used by the brand.",
  },
  {
    question: "Can you build subscriptions, repeat ordering and bundles for food brands?",
    answer:
      "Yes. We can implement subscriptions, reorder journeys, build-a-box experiences, mix-and-match bundles and customer-account flows designed around repeat purchase.",
  },
  {
    question: "Can you build corporate gifting or multi-address ordering?",
    answer:
      "Yes. We can build gifting, hamper and bulk-order workflows, including gift notes, scheduled delivery and multi-address logic where the platform and fulfillment process support it.",
  },
  {
    question: "Can you connect multiple locations, POS, inventory or fulfillment systems?",
    answer:
      "Yes. We can integrate ecommerce with store locations, POS, inventory, ERP and fulfillment systems through native integrations, apps, APIs or custom middleware.",
  },
  {
    question: "Do you work beyond Shopify for food and beverage ecommerce?",
    answer:
      "Yes. We work with Shopify, Magento, WooCommerce and custom full-stack technologies when another platform or architecture better fits the requirement.",
  },
];
