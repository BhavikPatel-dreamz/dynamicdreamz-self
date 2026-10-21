import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { IndustryCustomDevelopmentContent } from "@/components/sections/industry/industry-custom-development-section";
import type { WhiteLabelTool } from "@/types/white-label-service";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import { industryBrandLogos } from "@/content/industries";
import { shopifyPlusAgencyPageTestimonials } from "@/content/shopify-plus-agency";

// 1. Hero
export const sportsOutdoorsHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Sports & Outdoors"],
  title: "Ecommerce Solutions for Sports, Fitness & Outdoor Brands",
  paragraphs: [
    "We build fast, mobile-first commerce for sports and outdoor brands—from technical product discovery and equipment bundles to international ecommerce, mobile apps and custom integrations.",
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
      width: 126,
      height: 54,
    },
  ],
};

// 2. Brands
export const sportsOutdoorsBrandsConfig = {
  slug: "sports-outdoors",
  brands: {
    ariaLabel: "Sports & Outdoors brands supported by Dynamic Dreamz",
  },
};

export const sportsOutdoorsBrandsHeading = "Trusted by Leading Brands";

export const sportsOutdoorsBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Industry Challenges (transparent variant)
export const sportsOutdoorsChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for Spec-driven Buyers and Seasonal Demand",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "Buyers Compare Technical Details First",
      description:
        "Weight, materials, sizing, terrain, performance and compatibility often matter before price.",
    },
    {
      number: "02",
      title: "The Wrong Fit Creates Returns",
      description:
        "Frame size, footwear fit or accessory compatibility need clearer guides and product-selection logic.",
    },
    {
      number: "03",
      title: "Demand can Change Very Quickly",
      description:
        "Pre-season launches, weather, events and sale periods need waitlists, pre-orders and reliable performance.",
    },
    {
      number: "04",
      title: "Products are Often Bought as a Setup",
      description:
        "Equipment, accessories and nutrition can be more valuable when configured or bundled together.",
    },
    {
      number: "05",
      title: "Dealer and Direct Channels may Overlap",
      description:
        "Inventory, stockists, global markets and direct ecommerce need consistent product information and operational data.",
    },
    {
      number: "06",
      title: "Large Equipment Creates Delivery Complexity",
      description:
        "Bikes, boards and other equipment can require dimensional rules, assembly choices and clear delivery expectations.",
    },
  ],
};

// 4. Solutions We Build (green variant)
export const sportsOutdoorsSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Sports & Outdoor Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Activity-Based Product Discovery",
      description:
        "Shop by sport, activity, terrain, goal or performance requirement with strong filters and recommendation tools.",
    },
    {
      number: "02",
      title: "Fit, Size & Technical Product UX",
      description:
        "Size guides, fit recommendations, specification tables, comparison tools and technical PDPs.",
    },
    {
      number: "03",
      title: "Bundles, Kits & Configurable Products",
      description:
        "Equipment kits, nutrition packs, accessories, add-ons and dynamic product combinations.",
    },
    {
      number: "04",
      title: "Launches, Waitlists & Mobile",
      description:
        "Pre-orders, seasonal campaign pages, mobile-first UX and app experiences for active communities.",
    },
    {
      number: "05",
      title: "Shopify & Global Ecommerce",
      description:
        "Shopify and Shopify Plus storefronts, localization, merchandising, performance and migrations.",
    },
    {
      number: "06",
      title: "ERP, Inventory & Custom Integrations",
      description:
        "Inventory connections, APIs, operational integrations and custom React, Next.js or Node.js development.",
    },
  ],
};

// 5. Custom Development
export const sportsOutdoorsCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Custom Health Commerce where Standard Apps Stop",
  description:
    "Sports and outdoor products are often selected by use case and technical compatibility rather than visual preference alone. We can build fit tools, comparison, product finders, kit builders and connected operational logic.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 6. Platforms, Frameworks & Mobile Capabilities
export const sportsOutdoorsTechnologies = {
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

// 7. Portfolio
export const sportsOutdoorsPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Sports & Outdoors Experience",
  items: [
    {
      name: "Tropicfeel",
      category: "Shopify / Shopify Plus",
      href: "https://shop.tropicfeel.com/",
      image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
      imageAlt: "Tropicfeel Image",
    },
    {
      name: "Capri Bikes",
      category: "Shopify / Shopify Plus",
      href: "https://capribikes.com/",
      image: "/assets/our-work/projects/capri-bikes.webp",
      imageAlt: "Capri Bikes Image",
    },
    {
      name: "Naakbar",
      category: "Shopify / Shopify Plus",
      href: "https://www.naak.com/",
      image: "/assets/health-nutrition/portfolio/naakbar-energy-products.webp",
      imageAlt: "Naakbar Image",
    },
    {
      name: "Purra Performance",
      category: "Shopify / Shopify Plus",
      href: "https://purraperformance.com/",
      image: "/assets/our-work/projects/purra-performance.webp",
      imageAlt: "Purra Performance Image",
    },
    {
      name: "Headsets",
      category: "Shopify / Shopify Plus",
      href: "https://www.headsets.com/",
      image: "/assets/our-work/projects/headsets.webp",
      imageAlt: "Headsets Image",
    },
    {
      name: "TEGO Fit",
      category: "Shopify / Shopify Plus",
      href: "https://tego.fit/",
      image: "/assets/fashion/portfolio/tego-fit-activewear.webp",
      imageAlt: "TEGO Fit Image",
    },
    {
      name: "Country & Stable",
      category: "BigCommerce",
      href: "https://www.countryandstable.com/",
      image: "/assets/our-work/projects/country-and-stable.webp",
      imageAlt: "Country & Stable Image",
    },
    {
      name: "Totum",
      category: "WordPress",
      href: "https://totum.ca/",
      image: "/assets/our-work/projects/totum.webp",
      imageAlt: "Totum Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 8. Why Dynamic Dreamz
export const sportsOutdoorsWhyChoose: WhyChooseMigrationContent = {
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

// 9. Client Stories
export const sportsOutdoorsTestimonials: {
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

// 10. FAQs
export const sportsOutdoorsFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Do you work with sports, fitness and outdoor brands?",
    answer:
      "Yes. Our work in this category includes ecommerce storefronts, migrations, product discovery, integrations and ongoing development for sports, performance and outdoor brands.",
  },
  {
    question: "Can you build a product configurator or kit builder?",
    answer:
      "Yes. We can build configurators and kit builders around compatibility, product options, pricing and inventory rules, with the selected configuration passed into the order.",
  },
  {
    question: "Can customers check fit, size or product compatibility?",
    answer:
      "Yes. We can build fit finders, size guidance, specification tables, comparison tools and compatibility logic from the product data available.",
  },
  {
    question: "How do you support seasonal launches, pre-orders or waitlists?",
    answer:
      "We can build launch pages, pre-order and waitlist flows and prepare the storefront for campaign traffic by reviewing theme performance, apps, scripts and Core Web Vitals.",
  },
  {
    question: "Can you handle shipping logic for bulky sports equipment?",
    answer:
      "Yes. We can configure shipping profiles using dimensions, weight, oversized-item rules, carrier integrations and pickup or assembly options where relevant.",
  },
  {
    question: "Can you connect ecommerce with dealer, inventory or ERP systems?",
    answer:
      "Yes. We build APIs and middleware for dealer workflows, inventory, ERP, CRM and other operational systems when native integrations are not enough.",
  },
];

export const sportsOutdoorsFaqEyebrow = "Frequently Asked Questions";
export const sportsOutdoorsFaqHeading = "What Sports & Outdoors Brands Ask before They Scale";
