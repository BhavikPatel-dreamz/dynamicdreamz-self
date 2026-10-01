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
export const fashionHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Fashion & Apparel"],
  title: "Ecommerce Solutions for Fashion & Apparel Brands",
  paragraphs: [
    "We build fashion ecommerce around merchandising, size and fit, custom product logic, mobile shopping, international growth and connected backend systems.",
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
export const fashionBrandsConfig = {
  slug: "fashion",
  brands: {
    ariaLabel: "Fashion and apparel brand logos supported by Dynamic Dreamz",
  },
};

export const fashionBrandsHeading = "Trusted by Leading Brands";

export const fashionBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Case Studies
export const fashionCaseStudies: {
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
      title: "KALKI Fashion: Shopify-Integrated Luxury Ethnic Wear Shopping App",
      href: "/case-studies/kalki-fashion-mobile-app",
      image: "/assets/case-studies/kalki-fashion-mobile-app.webp",
      imageAlt: "KALKI Fashion: Shopify-Integrated Luxury Ethnic Wear Shopping App",
      technology: "Shopify Mobile App Development",
      industry: "Fashion & Apparel",
      description: "",
      tags: ["Mobile Application Development", "React Native Development"],
      ctaLabel: "View Case study",
    },
    {
      title: "Bombay Shirt Company: 5-Year Shopify Partnership with Fit Smart Body-Type Sizing & Shirt Customizer",
      href: "/case-studies/bombay-shirt-company",
      image: "/assets/case-studies/bombay-shirt-company.webp",
      imageAlt: "Bombay Shirt Company: 5-Year Shopify Partnership with Fit Smart Body-Type Sizing & Shirt Customizer",
      technology: "Shopify Custom Apps & Integrations",
      industry: "Fashion & Apparel",
      description: "",
      tags: ["Fashion & Apparel", "Long-Term Shopify Partnership"],
      ctaLabel: "View Case study",
    },
    {
      title: "Trendia: Shopify + Unicommerce Integration for 300+ Vendor Inventory & Local-First Fulfillment",
      href: "/case-studies/trendia",
      image: "/assets/case-studies/trendia.webp",
      imageAlt: "Trendia: Shopify + Unicommerce Integration for 300+ Vendor Inventory & Local-First Fulfillment",
      technology: "Shopify / Shopify Plus",
      industry: "Fashion & Apparel",
      description: "",
      tags: ["Multi-Vendor Inventory", "Unicommerce Integration"],
      ctaLabel: "View Case study",
    },
  ],
};

// 4. Industry Challenges
export const fashionChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for Fit, Fast Merchandising and Complex Catalogues",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "Returns are Driven by Uncertainty",
      description:
        "Sizing guidance, body-type logic, saved measurements and clear model information help customers buy with more confidence.",
    },
    {
      number: "02",
      title: "Drop Days Expose Every Performance Weakness",
      description:
        "Campaigns, collaborations and sale events create traffic spikes that demand a fast, controlled storefront.",
    },
    {
      number: "03",
      title: "Large Assortments Need Better Discovery",
      description:
        "Hundreds of styles across size, colour and fit require strong filters, search, swatches and merchandising.",
    },
    {
      number: "04",
      title: "Made-to-order Goes beyond a Standard PDP",
      description:
        "Fabric, fit, monogram and style choices often need custom product and order logic.",
    },
    {
      number: "05",
      title: "Markets Change the Customer Journey",
      description:
        "Currency, localization, duties, sizing conventions and returns vary across countries.",
    },
    {
      number: "06",
      title: "Fashion is Browsed and Bought on a Phone",
      description:
        "Mobile-first UX and connected app experiences matter for repeat customers and launch-driven brands.",
    },
  ],
};

// 5. Solutions We Build
export const fashionSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Fashion & Apparel Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Size, Fit & Personalization",
      description:
        "Fit recommendations, body-type sizing, saved profiles and measurement capture.",
    },
    {
      number: "02",
      title: "Product Customizers",
      description:
        "Configurable products for fabric, style, colour, monogram and made-to-order requirements.",
    },
    {
      number: "03",
      title: "Merchandising & Discovery",
      description:
        "Swatches, filters, mega menus, lookbooks, shop-the-look, drops and collection storytelling.",
    },
    {
      number: "04",
      title: "International & Mobile Commerce",
      description:
        "Localization, Shopify Markets, mobile-first UX and connected shopping apps.",
    },
    {
      number: "05",
      title: "Shopify & Shopify Plus Development",
      description:
        "Custom storefronts, advanced themes, migrations, checkout work, performance and ongoing development.",
    },
    {
      number: "06",
      title: "PIM, OMS, ERP & Custom Integrations",
      description:
        "Connected product, inventory, production and order workflows using APIs and middleware.",
    },
  ],
};

// 6. Custom Development
export const fashionCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Custom Fashion Commerce for Products that do not Fit a Standard Product Page",
  description:
    "Made-to-measure, configurable products, marketplace inventory and operational integrations often need custom logic across both the customer-facing experience and the systems behind it.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Technology Stack
export const fashionTechnologies = {
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
export const fashionPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Fashion & Apparel Experience",
  items: [
    {
      name: "Bombay Shirt Company",
      category: "Shopify / Shopify Plus",
      href: "https://www.bombayshirts.com/",
      image: "/assets/our-work/projects/bombay-shirt-company-model.webp",
      imageAlt: "Bombay Shirt Company Image",
    },
    {
      name: "Kalki India",
      category: "Mobile Apps",
      href: "",
      image: "/assets/our-work/projects/kalki-india.webp",
      imageAlt: "Kalki India Image",
    },
    {
      name: "Rare Rabbit",
      category: "Shopify / Shopify Plus",
      href: "https://thehouseofrare.com/",
      image: "/assets/our-work/projects/rare-rabbit.webp",
      imageAlt: "Rare Rabbit Image",
    },
    {
      name: "Daniel Walters Eyewear",
      category: "Shopify / Shopify Plus",
      href: "https://www.danielwalters.com/",
      image: "/assets/our-work/projects/daniel-walters-eyewear.webp",
      imageAlt: "Daniel Walters Eyewear Image",
    },
    {
      name: "Pedromiralles",
      category: "Shopify / Shopify Plus",
      href: "https://pedromiralles.com/us/en/",
      image: "/assets/our-work/projects/pedromiralles.webp",
      imageAlt: "Pedromiralles Image",
    },
    {
      name: "Bonbon Lingerie",
      category: "Shopify / Shopify Plus",
      href: "https://bonbonlingerie.com/",
      image: "/assets/our-work/projects/bonbon-lingerie.webp",
      imageAlt: "Bonbon Lingerie Image",
    },
    {
      name: "Fashor",
      category: "Mobile Apps",
      href: "",
      image: "/assets/our-work/projects/fashor.webp",
      imageAlt: "Fashor Image",
    },
    {
      name: "Balticborn",
      category: "Shopify / Shopify Plus",
      href: "https://balticborn.com/",
      image: "/assets/our-work/projects/balticborn.webp",
      imageAlt: "Balticborn Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const fashionWhyChoose: WhyChooseMigrationContent = {
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
export const fashionTestimonials: {
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
export const fashionFaqEyebrow = "Frequently Asked Questions";
export const fashionFaqHeading = "What Fashion Brands Ask before the Next Launch";

export const fashionFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Do you work with fashion and apparel brands on Shopify?",
    answer:
      "Yes. Our fashion work includes Shopify and Shopify Plus storefronts, product customizers, sizing experiences, integrations, mobile apps and ongoing ecommerce development.",
  },
  {
    question: "Can you build a made-to-measure or product customizer on Shopify?",
    answer:
      "Yes. We build custom configuration experiences around your product data, pricing rules and production workflow, including sizing, fabrics, colours, monograms and other personalization options.",
  },
  {
    question: "How can you reduce sizing-related friction and returns?",
    answer:
      "We improve sizing guidance with clearer fit content, size and body-type logic, saved customer information and exchange-focused journeys where appropriate. The exact approach depends on the product and available sizing data.",
  },
  {
    question: "Can you prepare the store for a large launch or sale event?",
    answer:
      "Yes. We review theme performance, apps, third-party scripts and Core Web Vitals, then test the critical purchase journey before a major campaign or launch.",
  },
  {
    question: "Do you build iOS and Android apps for fashion brands?",
    answer:
      "Yes. Our mobile team builds React Native iOS and Android shopping apps that can connect with Shopify for products, inventory, customer accounts and orders.",
  },
  {
    question: "Can you integrate PIM, OMS, ERP or inventory systems?",
    answer:
      "Yes. We build API and middleware integrations for product data, inventory, order management, fulfillment and other operational systems.",
  },
];
