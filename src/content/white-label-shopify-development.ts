import type {
  WhiteLabelCapability,
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelHero,
  WhiteLabelPlan,
  WhiteLabelService,
  WhiteLabelStat,
  WhiteLabelTool,
} from "@/types/white-label-service";

export const whiteLabelShopifyHero = {
  title: "White Label Shopify Development for Digital Agencies",
  lead: "Your Shopify Technology Partner. An Extension of Your Team.",
  paragraphs: [
    "Dynamic Dreamz provides white label Shopify development services for agencies that need additional capacity or specialist Shopify expertise. From Shopify and Shopify Plus to B2B, migrations, custom apps, iOS & Android mobile apps, integrations, CRO, automation and ongoing development, our team works behind your agency while you stay in control of the client relationship.",
  ],
  cta: "get in touch",
  illustration: "/assets/white-label-shopify/hero/white-label-shopify-development-agencies.svg",
  illustrationAlt: "White label Shopify development for digital agencies",
} as const satisfies WhiteLabelHero;

export const whiteLabelShopifyStats: readonly WhiteLabelStat[] = [
  {
    value: "20+",
    label: "Years of experience",
    icon: "/assets/proof/years-of-experience.svg",
  },
  {
    value: "150+",
    label: "Skilled Developers",
    icon: "/assets/proof/skilled-developers.svg",
  },
  {
    value: "2500+",
    label: "Client Reviews",
    icon: "/assets/proof/client-reviews.svg",
  },
  {
    value: "1000+",
    label: "Shopify Sites Delivered",
    icon: "/assets/proof/sites-delivered.svg",
  },
];

export const whiteLabelShopifyReasons: readonly (WhiteLabelCard | null)[] = [
  {
    title: "100% White Label Solution",
    description: "Your brand, our expertise. We work behind the scenes while you take full credit.",
  },
  {
    title: "Experienced Shopify Team",
    description: "We have dedicated developers who are Shopify & Shopify Plus experts.",
  },
  {
    title: "20+ Years of Industry Knowledge",
    description: "Our experts have expertise across various industries and business models.",
  },
  {
    title: "Custom Shopify Development",
    description: "We customize themes, apps, and integrations to fulfill your custom business needs.",
  },
  {
    title: "Shopify Plus Expertise",
    description: "Our experts can add advanced features like custom checkout, automation, and B2B solutions.",
  },
  {
    title: "Performance & Conversion Focused",
    description: "Our services are fast, secure, and optimized for a smooth user experience.",
  },
  null,
  {
    title: "Ongoing Maintenance & Support",
    description: "We offer ongoing support that ensures your stores remain up-to-date, secure, and high-performing.",
  },
  null,
];

export const deliveredUnderBrand = {
  title: "Delivered Under Your Brand",
  description:
    "Beyond development, we help your clients automate operations, improve customer experience, and get found by AI-powered search engines. All white label, all under your agency's name.",
  items: [
    {
      title: "AI customer support",
      description: "Deflect repeat tickets, speed up responses, and let your clients' teams focus on real issues.",
      icon: "/assets/white-label-shopify/ai/ai-customer-support.svg",
      tools: ["Gorgias", "Tidio", "ChatGPT"],
    },
    {
      title: "Store automation",
      description: "Automate fulfilment, tagging, notifications, and inventory, no manual grunt work.",
      icon: "/assets/white-label-shopify/ai/store-automation.svg",
      tools: ["Shopify Flow", "Zapier", "Make"],
    },
    {
      title: "AI product content",
      description: "Generate and optimise product descriptions, collection copy, and SEO content at scale.",
      icon: "/assets/white-label-shopify/ai/ai-product-content.svg",
      tools: ["Shopify Magic", "Sidekick", "OpenAI"],
    },
    {
      title: "Email & retention",
      description: "Behaviour-based flows for cart recovery, post-purchase, and win-back campaigns.",
      icon: "/assets/white-label-shopify/ai/email-retention.svg",
      tools: ["Klaviyo"],
    },
  ] satisfies readonly WhiteLabelCapability[],
} as const;

export const aiDrivenShopping = {
  title: "Future-ready for AI-driven shopping",
  description:
    "We prepare your clients' stores to be discovered, cited, and recommended by AI engines not just ranked on Google.",
  items: [
    {
      title: "AI search visibility",
      description: "Optimise pages, FAQs, and schema so ChatGPT, Gemini, and Perplexity can read and cite your store.",
      icon: "/assets/white-label-shopify/ai/ai-search-visibility.svg",
    },
    {
      title: "Structured data",
      description: "Schema markup for products, reviews, FAQs, and pricing the signals AI engines rely on.",
      icon: "/assets/white-label-shopify/ai/structured-data.svg",
    },
    {
      title: "Agentic commerce",
      description: "Ready for Shopify's Universal Commerce Protocol so AI agents can discover products and build carts.",
      icon: "/assets/white-label-shopify/ai/agentic-commerce.svg",
    },
    {
      title: "Trust signals",
      description: "Reviews, internal linking, and product data the full trust layer AI needs to recommend a store.",
      icon: "/assets/white-label-shopify/ai/trust-signals.svg",
    },
  ] satisfies readonly WhiteLabelCapability[],
} as const;

export const whiteLabelShopifyServices: readonly WhiteLabelService[] = [
  {
    title: "Custom Shopify Store Development",
    description: "We can fully customize Shopify stores that match your client's brand identity.",
    icon: "/assets/white-label-shopify/services/custom-shopify-store-development.svg",
  },
  {
    title: "Shopify Theme Customization & Development",
    description: "We help you modify or build custom Shopify themes for a unique storefront.",
    icon: "/assets/white-label-shopify/services/shopify-theme-customization-development.svg",
  },
  {
    title: "Shopify Plus Development",
    description: "Our Shopify Plus Development services include custom checkout extensibility, scripts, and B2B setups.",
    icon: "/assets/white-label-shopify/services/shopify-plus-development.svg",
  },
  {
    title: "Figma to Shopify",
    description: "Our designers can convert your Figma design into fully functional Shopify stores.",
    icon: "/assets/services/figma-design-conversion.svg",
  },
  {
    title: "Shopify App Development",
    description: "We can develop custom apps that expand your store's functionality and improve user experience.",
    icon: "/assets/white-label-shopify/services/shopify-app-development.svg",
  },
  {
    title: "Shopify Migration",
    description: "Our migration services offer smooth platform migration from WooCommerce, Magento, BigCommerce, and others.",
    icon: "/assets/white-label-shopify/services/shopify-migration.svg",
  },
];

export const whiteLabelShopifyPlans: readonly WhiteLabelPlan[] = [
  {
    name: "Hourly Development",
    price: "$25/hr",
    bestFor: "Small updates, bug fixes, and quick enhancements.",
  },
  {
    name: "Fixed-Price Projects",
    price: "Custom Quote",
    bestFor: "Well-defined Shopify store builds or custom features.",
  },
  {
    name: "Dedicated Developer",
    price: "$2,500/month",
    bestFor: "Full-time Shopify expert working exclusively for your agency.",
  },
];

const tool = (name: string, filename: string): WhiteLabelTool => ({
  name,
  image: `/assets/white-label-shopify/tools/${filename}.svg`,
});

export const whiteLabelShopifyToolRows = [
  [
    tool("Shopify Dawn", "shopify-dawn"),
    tool("Shopify Horizon", "shopify-horizon"),
    tool("Shopify Empire", "shopify-empire"),
    tool("Shopify Impulse", "shopify-impulse"),
    tool("Shopify Prestige", "shopify-prestige"),
    tool("Shopify Focal", "shopify-focal"),
    tool("Shop Circle", "shop-circle"),
    tool("HulkApps", "hulk-apps"),
    tool("Klaviyo", "klaviyo"),
    tool("Smile.io", "smile-io"),
    tool("Logbase", "logbase"),
    tool("Google", "google"),
    tool("Meta", "meta"),
    tool("Boost Commerce", "boost-commerce"),
    tool("BOLD Commerce", "bold-commerce"),
    tool("Stamped", "stamped"),
    tool("Judge.me", "judge-me"),
    tool("Appstle", "appstle"),
    tool("Recharge", "recharge"),
    tool("Recurpay", "recurpay"),
    tool("Appmaker", "appmaker"),
  ],
  [
    tool("Gorgias", "gorgias"),
    tool("Loop", "loop"),
    tool("Yotpo", "yotpo"),
    tool("Intelligems", "intelligems"),
    tool("Searchanise", "searchanise"),
    tool("Rebuy", "rebuy"),
    tool("BSS Commerce", "bss-commerce"),
    tool("Nector.io", "nector-io"),
    tool("GemPages", "gempages"),
    tool("PageFly", "pagefly"),
    tool("PayPal", "paypal"),
    tool("GoKwik", "gokwik"),
    tool("Shopify Flow", "shopify-flow"),
    tool("Razorpay", "razorpay"),
    tool("ERP", "erp"),
    tool("CRM", "crm"),
    tool("B2B", "b2b"),
    tool("Shogun", "shogun"),
    tool("Shop Pay", "shop-pay"),
    tool("Stripe", "stripe"),
    tool("Loox", "loox"),
  ],
] as const;

export const whiteLabelShopifyProcess = [
  {
    title: "Share Your Project Requirements",
    description: "Provide us with details about your client's Shopify requirements, and we will study them and give you a timeline.",
  },
  {
    title: "We Develop & Test",
    description: "Our Shopify experts will handle development and strict testing after finalizing the timeline.",
  },
  {
    title: "White Label Delivery",
    description: "Once the project is completed and handed over to your client under your agency's branding.",
  },
  {
    title: "Ongoing Support & Enhancements",
    description: "We offer ongoing support after the store launch. We stay in the background, ensuring smooth store operation.",
  },
] as const;

export const whiteLabelShopifyFaqs: readonly WhiteLabelFaq[] = [
  {
    question: "Can you handle AI and automation work for our clients' Shopify stores?",
    answer:
      "Yes. Beyond Shopify development, we help your clients implement AI-powered tools and automation across their stores. This includes setting up Shopify Flow, Zapier, and Make for operational automation; configuring Gorgias or Tidio for AI-assisted customer support; building Klaviyo flows for email retention; and using Shopify Magic and OpenAI integrations for product content at scale. All of this is delivered white-label under your agency’s brand.",
  },
  {
    question: "Do you help with AEO, GEO, and making Shopify stores visible in AI search?",
    answer:
      "Yes. We help Shopify stores get found and recommended by AI-powered search engines like ChatGPT, Gemini, and Perplexity, not just Google. This involves optimising product pages, FAQs, and schema markup (FAQPage, Product, AggregateRating) so AI engines can read and cite your store. We also work on internal linking, product data quality, reviews, and trust signals as part of a broader AEO and GEO readiness audit.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely, we sign NDAs. Confidentiality and transparency are our top priorities for every job.",
  },
  {
    question: "What is agentic commerce, and is our Shopify store ready for it?",
    answer:
      "Yes! Every Dynamic Dremaz expert specializes in customizing themes, apps, and integrations to meet your client’s requirements.",
  },
  {
    question: "Can we scale up or down the team size based on our project pipeline?",
    answer:
      "Yes, that’s exactly what our flexible hiring models are designed for. You can start with hourly support for smaller tasks, move to a fixed-price project for a defined build, or bring on a dedicated developer at $2,500/month when your pipeline justifies it. There are no retainers, no minimum hour commitments, and no long-term lock-in. Agencies typically start on hourly or fixed-price and move to dedicated as the relationship grows.",
  },
];

export const whiteLabelShopifyFinalCta = {
  title: "Let’s Build Shopify Stores Under Your Brand!",
  description:
    "Are you looking for a trusted white label Shopify partner? Together, let’s improve your agency! Contact us today and start delivering world-class Shopify solutions under your brand.",
  label: "CONTACT US TODAY",
} as const;
