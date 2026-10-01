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
export const beautyCosmeticsHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Beauty & Cosmetics"],
  title: "Ecommerce Solutions for Beauty & Cosmetics Brands",
  paragraphs: [
    "We help skincare, cosmetics, haircare and fragrance brands build scalable Shopify stores, quizzes, subscriptions, mobile apps and custom integrations.",
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
export const beautyCosmeticsBrandsConfig = {
  slug: "beauty-cosmetics",
  brands: {
    ariaLabel: "Beauty and cosmetics brand logos supported by Dynamic Dreamz",
  },
};

export const beautyCosmeticsBrandsHeading = "Trusted by Leading Brands";

export const beautyCosmeticsBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Case Studies
export const beautyCosmeticsCaseStudies: {
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
      title: "EDDUS & Co: Custom Shopify Dawn Theme Store for Clean, Refillable Skincare",
      href: "/case-studies/eddus-and-co",
      image: "/assets/case-studies/eddus-and-co.webp",
      imageAlt: "EDDUS & Co: Custom Shopify Dawn Theme Store for Clean, Refillable Skincare",
      technology: "Shopify / Shopify Plus",
      industry: "Beauty & Cosmetics",
      description: "",
      tags: ["Clean Beauty", "Shopify Store Development"],
      ctaLabel: "View Case study",
    },
    {
      title: "RENÉE Cosmetics: End-to-End Figma-to-Shopify Dawn Theme Store for a Bold Beauty Brand",
      href: "/case-studies/renee-cosmetics",
      image: "/assets/case-studies/renee-cosmetics.webp",
      imageAlt: "RENÉE Cosmetics: End-to-End Figma-to-Shopify Dawn Theme Store for a Bold Beauty Brand",
      technology: "Shopify / Shopify Plus",
      industry: "Beauty & Cosmetics",
      description: "",
      tags: ["Beauty & Cosmetics", "Figma to Shopify"],
      ctaLabel: "View Case study",
    },
    {
      title: "Ranavat: 6+ Year Shopify Partnership for a Luxury Ayurvedic Skincare & Haircare Brand",
      href: "/case-studies/ranavat",
      image: "/assets/case-studies/ranavat.webp",
      imageAlt: "Ranavat: 6+ Year Shopify Partnership for a Luxury Ayurvedic Skincare & Haircare Brand",
      technology: "Shopify / Shopify Plus",
      industry: "Beauty & Cosmetics",
      description: "",
      tags: ["Ayurvedic Beauty", "Long-Term Shopify Partnership"],
      ctaLabel: "View Case study",
    },
  ],
};

// 4. Industry Challenges
export const beautyCosmeticsChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for How Beauty Shoppers Actually Buy",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "Shade, Skin Type & Routine Complexity",
      description:
        "Customers need confidence in colour, formula and compatibility before they commit to a beauty purchase.",
    },
    {
      number: "02",
      title: "Retention Drives Unit Economics",
      description:
        "Repeat purchases, subscriptions, refills and loyalty matter as much as first-order acquisition.",
    },
    {
      number: "03",
      title: "Campaign and Launch Velocity",
      description:
        "New drops, gifting seasons and collaborations need flexible landing pages, merchandising and a storefront that stays fast under campaign traffic.",
    },
    {
      number: "04",
      title: "Ingredient-literate Customers ask more Questions",
      description:
        "Ingredients, usage, claims, reviews and UGC need to answer objections before they reach checkout.",
    },
    {
      number: "05",
      title: "The Storefront cannot fall Behind the Brand",
      description:
        "Product data, retail launches, inventory and back-office systems need to stay aligned as the catalogue and channels grow.",
    },
    {
      number: "06",
      title: "Discovery Often Starts on Social",
      description:
        "Beauty is discovered on a phone and frequently purchased on one. Mobile UX, speed and app experiences directly affect conversion.",
    },
  ],
};

// 5. Solutions We Build
export const beautyCosmeticsSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Beauty & Cosmetics Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Shopify & Shopify Plus Builds",
      description:
        "Brand-led storefronts, redesigns, migrations and flexible theme architecture for fast-moving beauty teams.",
    },
    {
      number: "02",
      title: "Quizzes & Product Finders",
      description:
        "Skin, hair, shade and routine finders connected to product data and recommendation logic.",
    },
    {
      number: "03",
      title: "Subscriptions & Replenishment",
      description:
        "Subscribe-and-save, repeat-purchase journeys, customer accounts and replenishment experiences.",
    },
    {
      number: "04",
      title: "Bundles, Samples & Gifting",
      description:
        "Regimen kits, build-your-own sets, gift-with-purchase rules, sampling and promotional product logic.",
    },
    {
      number: "05",
      title: "Mobile Apps & Retention",
      description:
        "React Native iOS and Android shopping experiences with loyalty, push, accounts and fast reorder.",
    },
    {
      number: "06",
      title: "Custom Integrations & Full-Stack",
      description:
        "ERP, CRM, PIM, loyalty, fulfillment and custom API workflows using React, Next.js and Node.js.",
    },
  ],
};

// 6. Custom Development
export const beautyCosmeticsCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "When an Off-the-shelf App is not Enough, We Build the Workflow",
  description:
    "Our full-stack team can build product finders, recommendation tools, refill or regimen logic, connected mobile apps and operational integrations around the exact requirements of the brand.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Technology Stack
export const beautyCosmeticsTechnologies = {
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
export const beautyCosmeticsPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Beauty & Cosmetics Experience",
  items: [
    {
      name: "Bella Vita",
      category: "Shopify / Shopify Plus",
      href: "https://bellavitaorganic.com/",
      image: "/assets/our-work/projects/bella-vita.webp",
      imageAlt: "Bella Vita Image",
    },
    {
      name: "Midnight Cosmetics",
      category: "Shopify / Shopify Plus",
      href: "https://midnightcosmetics.co/",
      image: "/assets/beauty-cosmetics/portfolio/midnight-cosmetics-skincare.webp",
      imageAlt: "Midnight Cosmetics Image",
    },
    {
      name: "Conserving Beauty",
      category: "Shopify / Shopify Plus",
      href: "https://www.conservingbeauty.com/",
      image: "/assets/beauty-cosmetics/portfolio/conserving-beauty-products.webp",
      imageAlt: "Conserving Beauty Image",
    },
    {
      name: "Lilac ST.",
      category: "Shopify / Shopify Plus",
      href: "https://lilacst.com/",
      image: "/assets/beauty-cosmetics/portfolio/lilac-st-cosmetics.webp",
      imageAlt: "Lilac ST. Image",
    },
    {
      name: "Luxxi nails",
      category: "Shopify / Shopify Plus",
      href: "https://luxxinails.com/",
      image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
      imageAlt: "Luxxi nails Image",
    },
    {
      name: "Vilvah",
      category: "Mobile Apps",
      href: "",
      image: "/assets/our-work/projects/vilvah.webp",
      imageAlt: "Vilvah Image",
    },
    {
      name: "Ranavat",
      category: "Shopify / Shopify Plus",
      href: "https://www.ranavat.com/",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat Image",
    },
    {
      name: "Ayu Sunless",
      category: "Shopify / Shopify Plus",
      href: "https://www.ayusunless.com/",
      image: "/assets/our-work/projects/ayu-sunless.webp",
      imageAlt: "Ayu Sunless Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const beautyCosmeticsWhyChoose: WhyChooseMigrationContent = {
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
export const beautyCosmeticsTestimonials: {
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
export const beautyCosmeticsFaqEyebrow = "Frequently Asked Questions";
export const beautyCosmeticsFaqHeading = "What Beauty Brands Ask Us before They Build";

export const beautyCosmeticsFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Do you have experience building Shopify stores for beauty brands?",
    answer:
      "Yes. Our beauty work includes RANAVAT, RENÉE Cosmetics and other skincare and cosmetics brands across storefront development, mobile apps, integrations and ongoing ecommerce optimization.",
  },
  {
    question: "Does my beauty brand need Shopify Plus, or is standard Shopify enough?",
    answer:
      "Standard Shopify can suit many beauty brands. Shopify Plus becomes more relevant when you need advanced checkout customization, B2B capabilities, expansion stores or more complex enterprise workflows. We recommend the plan based on requirements rather than defaulting to Plus.",
  },
  {
    question: "Can you build a skin quiz, shade finder or product recommendation journey?",
    answer:
      "Yes. Depending on the logic, we can configure a suitable app or build a custom product finder around your catalogue, customer answers and recommendation rules.",
  },
  {
    question: "Can you support subscriptions and replenishment for skincare or haircare?",
    answer:
      "Yes. We can implement subscribe-and-save, delivery-frequency options, customer self-service, replenishment reminders and retention flows connected to the storefront and customer accounts.",
  },
  {
    question: "Can you migrate a beauty store to Shopify without losing SEO or reviews?",
    answer:
      "Yes. We plan URL mapping and redirects, migrate eligible products, customers, orders and reviews, rebuild required functionality and complete QA before launch. Subscriber migration depends on the subscription platform being used.",
  },
  {
    question: "Do you build mobile apps and custom functionality beyond Shopify?",
    answer:
      "Yes. Our team builds React Native iOS and Android apps and custom React, Next.js and Node.js functionality when the requirement goes beyond standard theme or app capabilities.",
  },
];
