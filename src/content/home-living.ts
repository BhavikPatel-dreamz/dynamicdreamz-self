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
export const homeLivingHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Home & Living"],
  title: "Ecommerce Solutions for Home, Furniture & Living Brands",
  paragraphs: [
    "We help home and living brands simplify large catalogues, configurable products, delivery logic and complex operational workflows through ecommerce, mobile and custom development.",
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
export const homeLivingBrandsConfig = {
  slug: "home-living",
  brands: {
    ariaLabel: "Home and living brand logos supported by Dynamic Dreamz",
  },
};

export const homeLivingBrandsHeading = "Trusted by Leading Brands";

export const homeLivingBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Case Studies
export const homeLivingCaseStudies: {
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
        "Custom Neon: Interactive Shopify Neon Sign Designer with Live Pricing",
      href: "/case-studies/custom-neon",
      image: "/assets/case-studies/custom-neon.webp",
      imageAlt:
        "Custom Neon: Interactive Shopify Neon Sign Designer with Live Pricing",
      technology: "Shopify Custom Apps & Integrations",
      industry: "Home & Living",
      description:
        "See how Dynamic Dreamz built an interactive Shopify neon sign configurator for Custom Neon with product customization and live pricing.",
      tags: ["Frontend Development", "Shopify Store Development"],
      ctaLabel: "View Case study",
    },
    {
      title:
        "RefaceKit: Custom Shopify Kitchen Cabinet Refacing Configurator with Dynamic Pricing Logic",
      href: "/case-studies/refacekit",
      image: "/assets/case-studies/refacekit.webp",
      imageAlt:
        "RefaceKit: Custom Shopify Kitchen Cabinet Refacing Configurator with Dynamic Pricing Logic",
      technology: "Shopify Custom Apps & Integrations",
      industry: "Home & Living",
      description:
        "See how Dynamic Dreamz built a Shopify kitchen cabinet configurator for RefaceKit with complex product options and dynamic pricing logic.",
      tags: ["Dynamic Pricing Logic", "Product Configurator"],
      ctaLabel: "View Case study",
    },
    {
      title:
        "Furnified: Shopify Plus B2B Commerce System with Custom ERP Middleware Integration",
      href: "/case-studies/furnified",
      image: "/assets/case-studies/furnified.webp",
      imageAlt:
        "Furnified: Shopify Plus B2B Commerce System with Custom ERP Middleware Integration",
      technology: "Shopify Custom Apps & Integrations",
      industry: "Home & Living",
      description:
        "See how Dynamic Dreamz developed a Shopify Plus B2B solution for Furnified with custom ERP middleware and connected commerce workflows.",
      tags: ["B2B Ecommerce", "Furniture"],
      ctaLabel: "View Case study",
    },
  ],
};

// 4. Industry Challenges (Transparent)
export const homeLivingChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for Considered Purchases, Configuration and Delivery Complexity",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "High-value Purchases Need More Information",
      description:
        "Dimensions, materials, finishes, samples, delivery and compatibility all influence the decision.",
    },
    {
      number: "02",
      title: "Made-to-order Products Create Variant Complexity",
      description:
        "Fabric, finish, size and modular combinations can outgrow a standard catalogue structure.",
    },
    {
      number: "03",
      title: "Customers Often Return Several Times before Ordering",
      description:
        "Wishlists, saved configurations, samples and clear comparison help keep a long buying journey moving.",
    },
    {
      number: "04",
      title: "Shipping is Rarely a Flat-rate Problem",
      description:
        "Bulky or fragile goods need delivery zones, lead times, shipping rules and accurate expectations before checkout.",
    },
    {
      number: "05",
      title: "Lead Times Affect Conversion",
      description:
        "Made-to-order and long-lead items need accurate availability to avoid cancellations and support queries.",
    },
    {
      number: "06",
      title: "Storefront and Back Office must Stay Aligned",
      description:
        "Inventory, quotes, fulfillment, product data and ERP workflows can be as important as the frontend experience.",
    },
  ],
};

// 5. Solutions We Build (Green)
export const homeLivingSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Home & Living Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Configurable Product Experiences",
      description:
        "Product builders for size, material, finish, accessories and custom requirements with dynamic pricing where needed.",
    },
    {
      number: "02",
      title: "Large-Catalogue Discovery",
      description:
        "Room-based navigation, filtering, comparison, inspiration content and search for complex catalogues.",
    },
    {
      number: "03",
      title: "Samples, Wishlists & Saved Configurations",
      description:
        "Support longer research cycles with sample requests, wishlists and persistent product selections.",
    },
    {
      number: "04",
      title: "Delivery & Inventory Logic",
      description:
        "Warehouse-aware inventory, shipping calculators, pickup, regional availability and lead-time messaging.",
    },
    {
      number: "05",
      title: "Shopify & Ecommerce Rebuilds",
      description:
        "Storefront development, migrations, bundles, performance, integrations and ongoing ecommerce development.",
    },
    {
      number: "06",
      title: "ERP, Middleware & Full-Stack Development",
      description:
        "Custom middleware, ERP/PIM integrations, portals, APIs and connected operational systems.",
    },
  ],
};

// 6. Custom Development
export const homeLivingCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Custom Commerce for Configurable Products and Connected Operations",
  description:
    "Home and living projects often require more than a theme: configurators, SKU logic, quoting, shipping rules, ERP middleware and operational integrations can all sit behind the buying experience.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Technology Stack
export const homeLivingTechnologies = {
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
export const homeLivingPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Fashion & Apparel Experience",
  items: [
    {
      name: "Capital Tiles",
      category: "Shopify / Shopify Plus",
      href: "https://capitaltiles.ca/",
      image: "/assets/our-work/projects/capital-tiles.webp",
      imageAlt: "Capital Tiles Image",
    },
    {
      name: "SomewhereCo",
      category: "Shopify / Shopify Plus",
      href: "https://thesomewhereco.com/",
      image: "/assets/fashion/portfolio/somewhereco-fashion.webp",
      imageAlt: "SomewhereCo Image",
    },
    {
      name: "Adriatic",
      category: "Shopify / Shopify Plus",
      href: "https://adriatic.com.au/",
      image: "/assets/our-work/projects/adriatic.webp",
      imageAlt: "Adriatic Image",
    },
    {
      name: "Comfort First",
      category: "Shopify / Shopify Plus",
      href: "https://www.comfortfirst.au/",
      image: "/assets/our-work/projects/comfort-first.webp",
      imageAlt: "Comfort First Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const homeLivingWhyChoose: WhyChooseMigrationContent = {
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
export const homeLivingTestimonials: {
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
export const homeLivingFaqEyebrow = "Frequently Asked Questions";
export const homeLivingFaqHeading = "What Fashion Brands Ask before the Next Launch";

export const homeLivingFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Can Shopify handle complex shipping for furniture and bulky products?",
    answer:
      "Yes, with the right setup. We can configure product- and location-based shipping rules, delivery zones, lead times and carrier integrations where required. The exact approach depends on the carrier and checkout requirements.",
  },
  {
    question: "Can you build a product configurator for made-to-order furniture or home products?",
    answer:
      "Yes. We can build configurators for dimensions, finishes, materials, accessories and modular options, with pricing and order data connected to the selected configuration.",
  },
  {
    question: "Can customers order samples or save product configurations?",
    answer:
      "Yes. We can create sample-ordering journeys, wishlists and saved configurations so customers can continue a high-consideration purchase later.",
  },
  {
    question: "How do you handle long lead times or made-to-order products?",
    answer:
      "We can surface lead-time information on product pages and in the purchase journey, support pre-order or deposit flows where suitable, and connect order-status communication to the operational workflow.",
  },
  {
    question: "Can you migrate a home or furniture store from WooCommerce or Magento?",
    answer:
      "Yes. We can migrate products, customers and other eligible data, rebuild required functionality, map URLs and redirects, reconnect integrations and complete QA before launch.",
  },
  {
    question: "Do you provide ERP, inventory and middleware development?",
    answer:
      "Yes. Our full-stack team builds APIs and middleware between ecommerce storefronts and ERP, PIM, inventory, fulfillment or other business systems.",
  },
];
