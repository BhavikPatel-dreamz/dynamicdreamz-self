import type { AiAutomationContent } from "@/components/sections/ai-automation-section";
import type { AiDiscoveryContent } from "@/components/sections/ai-discovery-section";
import type { MigrationServiceCard } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const shopifyMigrationSectionCopy = {
  servicesHeading: "Our Comprehensive Migration Services",
  servicesDescription:
    "Bespoke migration services for effortless transition to Shopify platform",
} as const;

export const shopifyMigrationHero = {
  title: "Seamless Shopify Migration Services",
  description:
    "Expert Shopify Migration Services: Efficiently Move Your Store with Ease and get the full potential of Shopify with our tailored migration solutions.",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;

export const shopifyMigrationServices: readonly MigrationServiceCard[] = [
  {
    title: "Shopify Theme Migration",
    description:
      "Migrate to Shopify 2.0 for enhanced functionality, scalability and security with Dynamic Dreamz expert migration services.",
    image: "/assets/shopify-migration/services/shopify-theme-migration.svg",
    imageAlt: "Shopify Theme Migration Image",
    href: "/migrating-a-theme-to-online-store-2-0",
  },
  {
    title: "Magento to Shopify Plus Migration",
    description:
      "Smoothly migrate your store from Magento to Shopify Plus for a scalable and high-performance eCommerce experience.",
    image: "/assets/shopify-migration/services/magento-to-shopify-plus-migration.svg",
    imageAlt: "Magento to Shopify Plus Migration Image",
    href: "/magento-to-shopify-plus-migration",
  },
  {
    title: "Magento to Shopify Migration",
    description:
      "Transform your store from Magento to Shopify with our distinguished migration services.",
    image: "/assets/shopify-migration/services/magento-to-shopify-migration.svg",
    imageAlt: "Magento to Shopify Migration Image",
    href: "/magento-to-shopify-migration",
  },
  {
    title: "WooCommerce to Shopify Migration",
    description:
      "Navigate from WooCommerce to Shopify with our premium migration and expert assistance.",
    image: "/assets/shopify-migration/services/woocommerce-to-shopify-migration.svg",
    imageAlt: "WooCommerce to Shopify Migration Image",
    href: "/woocommerce-to-shopify-migration",
  },
  {
    title: "BigCommerce to Shopify Migration",
    description:
      "Upgrade from BigCommerce to Shopify with our migration service for a streamlined and scalable store.",
    image: "/assets/shopify-migration/services/bigcommerce-to-shopify-migration.svg",
    imageAlt: "BigCommerce to Shopify Migration Image",
    href: "/bigcommerce-to-shopify-migration",
  },
  {
    title: "Salesforce to Shopify Migration",
    description:
      "Switch from Salesforce to Shopify for a more flexible, scalable eCommerce platform with our migration services.",
    image: "/assets/shopify-migration/services/salesforce-to-shopify-migration.svg",
    imageAlt: "Salesforce to Shopify Migration Image",
    href: "/salesforce-to-shopify-migration",
  },
  {
    title: "PrestaShop to Shopify Migration",
    description:
      "Move from PrestaShop to Shopify for better functionality and growth with our trusted migration services.",
    image: "/assets/shopify-migration/services/prestashop-to-shopify-migration.svg",
    imageAlt: "PrestaShop to Shopify Migration Image",
    href: "/prestashop-to-shopify-migration",
  },
  {
    title: "Squarespace to Shopify Migration",
    description:
      "Migrate from Squarespace to Shopify easily, unlocking advanced features and growth opportunities.",
    image: "/assets/shopify-migration/services/squarespace-to-shopify-migration.svg",
    imageAlt: "Squarespace to Shopify Migration Image",
    href: "/squarespace-to-shopify-migration",
  },
  {
    title: "Wix to Shopify Migration",
    description:
      "Migrate your store from Wix to Shopify effortlessly with our professional migration support.",
    image: "/assets/shopify-migration/services/wix-to-shopify-migration.svg",
    imageAlt: "Wix to Shopify Migration Image",
    href: "/wix-to-shopify-migration",
  },
  {
    title: "Ecwid to Shopify Migration",
    description:
      "Smoothly migrate from Ecwid to Shopify with Dynamic Dreamz, ensuring enhanced performance and growth.",
    image: "/assets/shopify-migration/services/ecwid-to-shopify-migration.svg",
    imageAlt: "Ecwid to Shopify Migration Image",
    href: "/ecwid-to-shopify-migration",
  },
  {
    title: "Square to Shopify Migration",
    description:
      "Shift from Square to Shopify with our expert-led migration services for better flexibility and sales optimization.",
    image: "/assets/shopify-migration/services/square-to-shopify-migration.svg",
    imageAlt: "Square to Shopify Migration Image",
    href: "/square-to-shopify-migration",
  },
  {
    title: "Etsy to Shopify Migration",
    description:
      "Move from Etsy to Shopify and fully grow your online store with our seamless migration services.",
    image: "/assets/shopify-migration/services/etsy-to-shopify-migration.svg",
    imageAlt: "Etsy to Shopify Migration Image",
    href: "/etsy-to-shopify-migration",
  },
] as const;

export const shopifyMigrationAiAutomation: AiAutomationContent = {
  heading: "Built for the Next Era of Shopify Commerce",
  description:
    "After your migration is complete, the real growth begins. We help Shopify and Shopify Plus brands use practical AI and automation to reduce manual work, improve customer experience, and convert smarter, not just faster.",
  items: [
    {
      title: "AI-Powered Customer Support",
      description:
        "Automate repetitive support tickets, handle FAQs around the clock, and personalise every interaction — without growing your team.",
      icon: "/assets/white-label-shopify/ai/ai-customer-support.svg",
      alt: "AI customer support",
      pills: ["Gorgias", "Tidio", "ChatGPT / OpenAI"],
    },
    {
      title: "Workflow Automation",
      description:
        "Eliminate repetitive tasks across fulfilment, marketing, and ops. Build automated flows that keep your store running even when you're not.",
      icon: "/assets/white-label-shopify/ai/store-automation.svg",
      alt: "Store automation",
      pills: ["Shopify Flow", "Zapier", "Make"],
    },
    {
      title: "Smarter Product Content",
      description:
        "Generate, optimise, and scale product descriptions, SEO copy, and collection content with Shopify's native AI tools and OpenAI integrations.",
      icon: "/assets/white-label-shopify/ai/ai-product-content.svg",
      alt: "AI product content",
      pills: ["Shopify Magic", "Sidekick", "OpenAI"],
    },
    {
      title: "Retention & Email Automation",
      description:
        "Build intelligent email flows that respond to customer behaviour — welcome series, cart recovery, post-purchase, and win-back — all on autopilot.",
      icon: "/assets/white-label-shopify/ai/email-retention.svg",
      alt: "Email & retention",
      pills: ["Klaviyo", "Shopify Flow", "Make"],
    },
  ],
};

export const shopifyMigrationAiDiscovery: AiDiscoveryContent = {
  heading: "Preparing Your Store for AI-Driven Shopping",
  description:
    "The way customers discover and buy products is changing. Google, ChatGPT, Gemini, and Perplexity are increasingly surfacing products directly in search results and conversations. We help your Shopify store become readable, trustworthy, and recommendable to both AI engines and human shoppers through AEO, GEO, schema optimisation, and agentic commerce readiness.",
  items: [
    {
      title: "Answer Engine Optimisation (AEO)",
      description:
        "Structure FAQs, product data, and schema so AI assistants can cite your store directly.",
      icon: "/assets/white-label-shopify/ai/ai-search-visibility.svg",
      alt: "Answer Engine Optimisation",
    },
    {
      title: "Generative Engine Optimisation (GEO)",
      description:
        "Optimise product pages and collections so ChatGPT, Gemini, and Perplexity recommend you.",
      icon: "/assets/white-label-shopify/ai/structured-data.svg",
      alt: "Generative Engine Optimisation",
    },
    {
      title: "Agentic Commerce Readiness",
      description:
        "Align your store with Shopify's Universal Commerce Protocol for AI agent discovery and cart creation.",
      icon: "/assets/white-label-shopify/ai/agentic-commerce.svg",
      alt: "Agentic Commerce Readiness",
    },
    {
      title: "Trust Signal Strengthening",
      description:
        "Reviews, structured data, internal linking, and product data built for AI and human trust alike.",
      icon: "/assets/white-label-shopify/ai/trust-signals.svg",
      alt: "Trust Signal Strengthening",
    },
  ],
  cta: {
    text: "Ready to build a Shopify store that performs today and tomorrow?",
    label: "Talk to an Expert",
    href: "/request-quote",
  },
};

export const shopifyMigrationPortfolio = {
  heading: "Portfolio of Shopify Migration",
  category: "shopify",
  items: [
    {
      name: "Capri Bikes",
      href: "https://capribikes.com/",
      image: "/assets/our-work/projects/capri-bikes.webp",
      imageAlt: "Capri Bikes Image",
      category: "shopify",
    },
    {
      name: "Atolea Jewelry",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Image",
      category: "shopify",
    },
    {
      name: "Blackopalbeauty",
      href: "https://blackopalbeauty.com/",
      image: "/assets/our-work/projects/blackopalbeauty.webp",
      imageAlt: "Blackopalbeauty Image",
      category: "shopify",
    },
    {
      name: "Nested Naturals",
      href: "https://nestednaturals.com/",
      image: "/assets/our-work/projects/nested-naturals.webp",
      imageAlt: "Nested Naturals Image",
      category: "shopify",
    },
    {
      name: "Mygeeni",
      href: "https://mygeeni.com/",
      image: "/assets/our-work/projects/mygeeni.webp",
      imageAlt: "Mygeeni Image",
      category: "shopify",
    },
    {
      name: "Raen",
      href: "https://raen.com/",
      image: "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
      imageAlt: "Raen Image",
      category: "shopify",
    },
  ] satisfies readonly PortfolioShowcaseItem[],
};

export const shopifyMigrationFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Can you help us automate our Shopify store after migration?",
    answer:
      "Yes, post-migration is where most growth happens. We help Shopify and Shopify Plus brands implement AI and automation using tools like Shopify Flow, Klaviyo, Gorgias, Tidio, Make, and Zapier to automate customer support, email marketing, fulfilment workflows, and more.",
  },
  {
    question: "Will my migrated Shopify store be visible to AI tools like ChatGPT and Google AI Overviews?",
    answer:
      "Only if it's structured correctly. We optimise product pages, FAQs, schema markup, internal linking, and trust signals so your store is discoverable and recommendable by AI engines — including Google AI Overviews, ChatGPT Shopping, Gemini, and Perplexity.",
  },
  {
    question: "What is agentic commerce and how does it affect my Shopify store?",
    answer:
      "Agentic commerce refers to AI agents that can search products, build carts, and complete purchases on a shopper's behalf. Shopify's Universal Commerce Protocol is making stores accessible to these agents. We help brands prepare their product data, schema, and store structure to work within this emerging ecosystem.",
  },
  {
    question: "Do you provide support after the migration is complete?",
    answer:
      "Yes. We offer post-migration support covering bug fixes, Shopify 2.0 theme refinements, app integrations, performance optimisation, and ongoing AI/automation setup. Think of us as your long-term Shopify growth partner, not just a one-time migration vendor.",
  },
  {
    question: "What exactly gets migrated products, orders, reviews, and blog posts?",
    answer:
      "We migrate all essential store data, including products and variants, collections, customer records, order history, blog posts and pages, product reviews, redirects (301s), and metadata. We run a pre- and post-migration audit to verify zero data loss.",
  },
];
