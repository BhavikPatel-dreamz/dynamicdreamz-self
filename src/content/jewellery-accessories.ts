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
export const jewelleryAccessoriesHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Jewellery & Accessories"],
  title: "Ecommerce & Custom Technology for Jewellery & Accessories Brands",
  paragraphs: [
    "From premium Shopify storefronts to headless jewellery platforms, ring builders, live diamond inventory and personalization, we build technology around how jewellery is discovered, customized and purchased.",
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
export const jewelleryAccessoriesBrandsConfig = {
  slug: "jewellery-accessories",
  brands: {
    ariaLabel: "Jewellery and accessories brand logos supported by Dynamic Dreamz",
  },
};

export const jewelleryAccessoriesBrandsHeading = "Trusted by Leading Brands";

export const jewelleryAccessoriesBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Case Studies
export const jewelleryAccessoriesCaseStudies: {
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
      title:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      href: "/case-studies/daniel-walters",
      image: "/assets/case-studies/daniel-walters.webp",
      imageAlt:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      technology: "Shopify Migration",
      industry: "Jewellery & Accessories",
      tags: ["Eyewear", "Jewellery & Accessories"],
      ctaLabel: "View Case study",
    },
    {
      title:
        "Santosh Jewellers: Custom Shopify Dawn Theme Store for a Five-Decade Luxury Jewellery Legacy",
      href: "/case-studies/santosh-jewellers",
      image: "/assets/case-studies/santosh-jewellers.webp",
      imageAlt:
        "Santosh Jewellers: Custom Shopify Dawn Theme Store for a Five-Decade Luxury Jewellery Legacy",
      technology: "Shopify / Shopify Plus",
      industry: "Jewellery & Accessories",
      tags: ["Jewellery & Accessories", "Luxury Brand Storytelling"],
      ctaLabel: "View Case study",
    },
    {
      title:
        "DONJ Jewellery: Medusa + Next.js Headless Rebuild with a 100K+ Diamond Marketplace & Custom Ring Builder",
      href: "/case-studies/don-j",
      image: "/assets/case-studies/don-j.webp",
      imageAlt:
        "DONJ Jewellery: Medusa + Next.js Headless Rebuild with a 100K+ Diamond Marketplace & Custom Ring Builder",
      technology: "Medusa v2 · Next.js 16",
      industry: "Jewellery & Luxury Retail",
      tags: ["Jewellery & Accessories", "WordPress Development"],
      ctaLabel: "View Case study",
    },
  ],
};

// 4. Industry Challenges (transparent variant)
export const jewelleryAccessoriesChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for Trust, Personalization and High-value Purchase Journeys",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "The Product has to Sell Itself on Screen",
      description:
        "Detail, finish and scale need high-quality imagery, video, zoom and product storytelling to replace the physical display case.",
    },
    {
      number: "02",
      title: "High Order Value Means High Hesitation",
      description:
        "Materials, certification, warranty, returns and secure delivery need to be visible before checkout.",
    },
    {
      number: "03",
      title: "Customization is Often Expected",
      description:
        "Engraving, settings, metals, stones, chain length and other options need clean capture and accurate order data.",
    },
    {
      number: "04",
      title: "Customers Cannot Guess Fit",
      description:
        "Ring size, bracelet length and frame width need guides, fit tools or assisted buying journeys.",
    },
    {
      number: "05",
      title: "Supplier Data can be Large and Dynamic",
      description:
        "Diamond and gemstone feeds require synchronization, search, filtering, certificates and consistent pricing.",
    },
    {
      number: "06",
      title: "High-value Purchases are not Always Instant",
      description:
        "Wishlists, appointments, deposits and customer accounts can support longer, guided purchase decisions.",
    },
  ],
};

// 5. Solutions We Build (green variant)
export const jewelleryAccessoriesSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Jewellery & Accessories Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Ring & Jewellery Configurators",
      description:
        "Diamond-to-setting flows, metal and gemstone selection, engraving, upgrades and custom product logic.",
    },
    {
      number: "02",
      title: "Live Diamond & Gemstone Integrations",
      description:
        "Supplier feeds, certificate data, media, advanced filters, search and large-catalogue synchronization.",
    },
    {
      number: "03",
      title: "Luxury Product Experiences",
      description:
        "Premium PDPs, craftsmanship storytelling, high-jewellery collections, finish navigation and editorial merchandising.",
    },
    {
      number: "04",
      title: "Personalization & Guided Purchase",
      description:
        "Sizing guidance, engraving, wishlists, appointments and high-value purchase journeys.",
    },
    {
      number: "05",
      title: "Shopify & Shopify Plus Development",
      description:
        "Luxury storefronts, custom themes, merchandising, integrations, international commerce and ongoing development.",
    },
    {
      number: "06",
      title: "Headless & Full-Stack Platforms",
      description:
        "React, Next.js, Node.js, Medusa, Algolia and custom architecture for requirements beyond standard platforms.",
    },
  ],
};

// 6. Custom Development
export const jewelleryAccessoriesCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Custom Jewellery Commerce Built around Real Product Logic",
  description:
    "DONJ is a strong example of what this can become: a headless platform with live diamond inventory, a custom engagement-ring builder, server-controlled pricing, search, payments and modular integrations.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Technology Stack
export const jewelleryAccessoriesTechnologies = {
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
export const jewelleryAccessoriesPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Jewellery & Accessories Experience",
  items: [
    {
      name: "Atolea Jewelry",
      category: "Shopify / Shopify Plus",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Image",
    },
    {
      name: "Pagerie",
      category: "Shopify / Shopify Plus",
      href: "https://www.pagerie.com/",
      image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
      imageAlt: "Pagerie Image",
    },
    {
      name: "Donj Jewellery",
      category: "Medusa + Next Js",
      href: "https://donjjewellery.com/",
      image: "/assets/fashion/portfolio/donj-jewellery.webp",
      imageAlt: "Donj Jewellery Image",
    },
    {
      name: "Twojeys",
      category: "Shopify / Shopify Plus",
      href: "https://twojeys.com/",
      image: "/assets/our-work/projects/twojeys.webp",
      imageAlt: "Twojeys Image",
    },
    {
      name: "Daniel Walters Eyewear",
      category: "Shopify / Shopify Plus",
      href: "https://www.danielwalters.com/",
      image: "/assets/our-work/projects/daniel-walters-eyewear.webp",
      imageAlt: "Daniel Walters Eyewear Image",
    },
    {
      name: "Projectlobster",
      category: "Shopify / Shopify Plus",
      href: "https://projectlobster.com/en",
      image: "/assets/our-work/projects/projectlobster.webp",
      imageAlt: "Projectlobster Image",
    },
    {
      name: "Raen",
      category: "Shopify / Shopify Plus",
      href: "https://raen.com/",
      image: "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
      imageAlt: "Raen Image",
    },
    {
      name: "Santosh Jewellers",
      category: "Shopify / Shopify Plus",
      href: "https://www.santoshjewellers.in/",
      image: "/assets/jewellery-accessories/portfolio/santosh-jewellers.webp",
      imageAlt: "Santosh Jewellers Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const jewelleryAccessoriesWhyChoose: WhyChooseMigrationContent = {
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
export const jewelleryAccessoriesTestimonials: {
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
export const jewelleryAccessoriesFaqEyebrow = "Frequently Asked Questions";
export const jewelleryAccessoriesFaqHeading =
  "What Jewellery Brands Ask before They Customize the Buying Journey";

export const jewelleryAccessoriesFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Do you work with jewellery and accessories brands on Shopify?",
    answer:
      "Yes. Our jewellery and accessories work includes Shopify and Shopify Plus storefronts as well as custom full-stack commerce where the product or inventory model requires more flexibility.",
  },
  {
    question: "Can you build a custom ring or jewellery configurator?",
    answer:
      "Yes. We can build ring and jewellery configurators around settings, metals, gemstones, engraving, upgrades and pricing rules, with the selected configuration carried into the order workflow.",
  },
  {
    question: "Can you integrate live diamond or gemstone supplier feeds?",
    answer:
      "Yes. We can connect supplier APIs and large inventory feeds, normalize product data and add advanced search, filtering, certificate information and media where the supplier data supports it.",
  },
  {
    question: "Can you add engraving, sizing tools or virtual try-on?",
    answer:
      "Yes. We can build structured personalization, sizing guidance and compatible try-on experiences depending on the product category and available technology.",
  },
  {
    question: "Can you support appointments, deposits or other high-value purchase journeys?",
    answer:
      "Yes. Depending on the platform and payment architecture, we can integrate appointment booking, guided consultation flows, deposits and other purchase steps used for higher-value products.",
  },
  {
    question: "Can you migrate or rebuild a jewellery store on a headless architecture?",
    answer:
      "Yes. We handle Shopify migrations as well as custom headless builds using technologies such as React, Next.js, Node.js and Medusa when standard platform architecture is not enough.",
  },
];
