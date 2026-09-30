import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { EvaluationFrameworkItem } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { PricingEngagementItem } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { MagentoServiceIconName } from "@/components/sections/magento/magento-service-icons";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const magentoDevelopmentHero = {
  eyebrows: ["Magento Development Agency"],
  title: "Magento Development Services",
  description:
    "Dynamic Dreamz provides Magento development services for businesses and digital agencies that need flexible, scalable ecommerce solutions. Our team supports custom Magento stores, themes, modules, migrations, performance improvements and ongoing technical work across Magento Open Source and Adobe Commerce.",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  badges: [
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
  ],
  tabletSlider: {
    bgShapeSrc:
      "/assets/services/shopify-development-in-bangalore/hero/slide-bg-shape.svg",
    topBadge: {
      src: "/assets/services/magento-development/hero/magento-rectangle-logo.webp",
      alt: "Magento",
      width: 346,
      height: 212,
    },
    bottomBadge: {
      src: "/assets/services/magento-development/hero/magento-square-logo.webp",
      alt: "Magento Logo",
      width: 260,
      height: 252,
    },
    slides: [
      {
        src: "/assets/services/magento-development/hero/slide-united-cheer-apparel.webp",
        alt: "United Cheer Apparel Magento Store",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/magento-development/hero/slide-city-circuit.webp",
        alt: "Circuit City Magento Store",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-green-future-energy.webp",
        alt: "Green Future Energy Storefront",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/magento-development/hero/slide-maxi-cosi.webp",
        alt: "Maxi Cosi Magento Store",
        width: 800,
        height: 1190,
      },
    ],
  },
} as const;

export const magentoDevelopmentBrands = {
  title: "Trusted by Leading Brands",
  items: [
    {
      src: "/assets/clients/tego.svg",
      href: "https://tego.fit/",
      alt: "tego logo",
      width: 101,
      height: 40,
    },
    {
      src: "/assets/clients/nelter.svg",
      href: "https://www.nekterjuicebar.com/",
      alt: "nekter-colored",
      width: 66,
      height: 64,
    },
    {
      src: "/assets/clients/rare-rabbit.svg",
      href: "https://thehouseofrare.com/",
      alt: "Rare Rabbit Logo",
      width: 122,
      height: 84,
    },
    {
      src: "/assets/clients/supertails.svg",
      href: "https://supertails.com/",
      alt: "Supper Tails Logo",
      width: 164,
      height: 41,
    },
    {
      src: "/assets/clients/eleven-eleven.svg",
      href: "https://11-11.in/",
      alt: "Eleven Eleven",
      width: 145,
      height: 20,
    },
    {
      src: "/assets/clients/bella-vita.svg",
      href: "https://bellavitaorganic.com/",
      alt: "bellavita logo",
      width: 166,
      height: 24,
    },
    {
      src: "/assets/clients/bombay-shirt-company.svg",
      href: "https://www.bombayshirts.com/",
      alt: "Bombay Shirt Company",
      width: 204,
      height: 26,
    },
    {
      src: "/assets/clients/popclub.svg",
      href: "https://popclub.co/",
      alt: "Popclub",
      width: 65,
      height: 41,
    },
    {
      src: "/assets/clients/sri-sri-tattva.svg",
      href: "https://www.srisritattva.com/",
      alt: "SriSri Tattva Logo",
      width: 106,
      height: 40,
    },
    {
      src: "/assets/clients/tropicfeel.svg",
      href: "https://shop.tropicfeel.com/",
      alt: "tropicfeel logo",
      width: 150,
      height: 32,
    },
    {
      src: "/assets/clients/renee.svg",
      href: "https://www.reneecosmetics.in/",
      alt: "Renee logo",
      width: 93,
      height: 30,
    },
    {
      src: "/assets/clients/royce-chocolate.svg",
      href: "https://royceindia.com/",
      alt: "Royce chocolate logo",
      width: 132,
      height: 38,
    },
  ] satisfies readonly ClientLogoSliderItem[],
} as const;

export type MagentoServiceCardItem = {
  iconKey: MagentoServiceIconName;
  title: string;
  description: string;
};

export const magentoDevelopmentServices = {
  heading: "What We Provide",
  description:
    "Our Magento development services cover custom store development, migration, performance, themes, modules and ongoing support for both new and existing ecommerce stores.",
  items: [
    {
      iconKey: "custom-store-solutions",
      title: "Custom Store Solutions",
      description:
        "Build or improve a Magento store around your catalog, customer journey, operational requirements and approved design, including custom functionality where required.",
    },
    {
      iconKey: "easy-migration",
      title: "Easy Migration",
      description:
        "Plan and execute migrations to Magento with structured handling of products, customers, content, URLs and other store data based on the source platform and project scope.",
    },
    {
      iconKey: "speed-optimization",
      title: "Speed Optimization",
      description:
        "Review themes, modules, images, caching, scripts and front-end implementation to identify performance issues and improve loading speed where practical.",
    },
    {
      iconKey: "custom-themes-development",
      title: "Custom Themes Development",
      description:
        "Develop or customize Magento themes to match your brand, approved design and storefront requirements across desktop, tablet and mobile.",
    },
    {
      iconKey: "custom-modules",
      title: "Custom Modules",
      description:
        "Extend Magento with custom modules and functionality based on your business workflow, including third-party integrations where suitable APIs are available.",
    },
    {
      iconKey: "ongoing-support",
      title: "Ongoing Support",
      description:
        "Support your Magento store after launch with troubleshooting, updates, compatibility checks, performance work, new features and continuous development as required.",
    },
  ] satisfies readonly MagentoServiceCardItem[],
} as const;

export const magentoDevelopmentCapabilities = {
  heading: "Magento Open Source & Adobe Commerce Capabilities",
  description:
    "For stores with more complex catalogs, operations or integrations, our Magento team can support additional development around APIs, multi-store setups, platform upgrades and custom commerce workflows based on the project requirements.",
  items: [
    {
      title: "API & Third-Party Integrations",
      description:
        "Connect Magento with payment, shipping, CRM, ERP, marketing or other business systems where suitable APIs and documentation are available.",
    },
    {
      title: "Multi-Store & International Setup",
      description:
        "Support Magento websites, stores and store views for different brands, regions, languages or currencies when the business requires a multi-store structure.",
    },
    {
      title: "Version Upgrades & Compatibility",
      description:
        "Plan Magento upgrades and review themes, extensions and custom code for compatibility before deployment.",
    },
    {
      title: "Complex Commerce Workflows",
      description:
        "Support custom catalog, customer, checkout or operational workflows based on the Magento edition, existing setup and agreed project scope.",
    },
  ] satisfies readonly EvaluationFrameworkItem[],
} as const;

export const magentoDevelopmentEngagements = {
  eyebrow: "Flexible Magento Engagements",
  heading: "Choose the Right Magento Engagement",
  description:
    "Start with one Magento project, use flexible hourly support, or add a dedicated developer / team around your ongoing ecommerce roadmap.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete Magento builds, migrations, redesigns, B2B requirements, custom development, integrations, and technically complex ecommerce projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Magento Capacity?",
      price: "$20/hour",
      description:
        "For ongoing maintenance, enhancements, troubleshooting, performance improvements and changing Magento development requirements.",
      ctaLabel: "Buy Magento Development Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with a steady Magento roadmap, multiple storefronts, or a need for a dedicated developer or wider delivery team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ] satisfies readonly PricingEngagementItem[],
} as const;

export const magentoDevelopmentPortfolio = {
  eyebrow: "Portfolio",
  heading: "See Our Magento Work in Action",
  description:
    "Explore selected Magento projects delivered by our team across ecommerce development, theme work, custom functionality and ongoing improvements.",
  cta: {
    label: "View our work",
    href: "/our-work",
    ariaLabel: "View our work",
  },
  items: [
    {
      name: "Maxi Cosi",
      category: "Magento",
      image: "/assets/our-work/projects/maxi-cosi.webp",
      imageAlt: "Maxi Cosi Image",
      href: "https://www.maxi-cosi.com.au/",
    },
    {
      name: "Caves Santa Cruz",
      category: "Magento",
      image: "/assets/our-work/projects/caves-santa-cruz.webp",
      imageAlt: "Caves Santa Cruz Image",
      href: "https://www.cavessantacruz.com.br/",
    },
    {
      name: "City Circuit",
      category: "Magento",
      image: "/assets/our-work/projects/city-circuit.webp",
      imageAlt: "City Circuit Image",
      href: "https://circuitcity.com/",
    },
    {
      name: "United Cheer Apparel",
      category: "Magento",
      image: "/assets/our-work/projects/united-cheer-apparel.webp",
      imageAlt: "United Cheer Apparel Image",
      href: "https://unitedcheerapparel.com/",
    },
  ],
} as const;

export const magentoDevelopmentTestimonials = {
  heading: "Hear from Our Clients",
  description:
    "Don’t just take our word for it. Discover how our Magento development services have <br> made a difference for our clients and their businesses.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const magentoDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What Magento development services does Dynamic Dreamz provide?",
    answer:
      "We provide custom Magento store development, theme development and customization, custom modules, migrations, performance improvements, integrations and ongoing support for Magento Open Source and Adobe Commerce projects.",
  },
  {
    question: "Do you work with both Magento Open Source and Adobe Commerce?",
    answer:
      "Yes. The right approach depends on the edition, existing architecture, business requirements and available features. We review the current setup before confirming scope, compatibility and implementation.",
  },
  {
    question: "Can you migrate my existing store to Magento?",
    answer:
      "Yes. We can plan migrations from another ecommerce platform to Magento. The migration scope can include products, customers, content, images, URLs and other store data depending on the source platform and available data.",
  },
  {
    question: "Can you work on an existing Magento store?",
    answer:
      "Yes. We can take over an existing Magento store for theme changes, modules, bug fixes, performance improvements, integrations, upgrades and ongoing development after reviewing the existing codebase and extensions.",
  },
  {
    question: "Can you integrate Magento with ERP, CRM, payment or shipping systems?",
    answer:
      "Yes, where the third-party system provides suitable APIs or integration methods. We review the workflow, API documentation, data requirements and error-handling needs before confirming the integration scope.",
  },
  {
    question: "Can you help improve Magento store performance?",
    answer:
      "Yes. We can review themes, modules, images, caching, scripts and other implementation factors that may affect loading performance. Final results depend on the hosting environment, extensions, catalog size and overall store architecture.",
  },
  {
    question: "How long does Magento development take?",
    answer:
      "Timing depends on the scope. Theme changes or focused development tasks may take a few days or weeks, while a complete custom Magento build, migration or complex integration can require several weeks or more. We confirm the timeline after reviewing the requirements.",
  },
  {
    question: "How much does Magento development cost?",
    answer:
      "Cost depends on the store, design, modules, integrations, migration requirements and technical complexity. We provide a project estimate or support model after reviewing the requirements.",
  },
  {
    question: "Do you provide ongoing Magento maintenance and support?",
    answer:
      "Yes. We can provide ongoing support for troubleshooting, updates, compatibility checks, performance work, new features, integrations and continuous Magento development based on the agreed engagement model.",
  },
];

export const magentoDevelopmentCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;
