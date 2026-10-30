import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { HeroBadge, ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MagentoPlusIconName } from "@/components/sections/magento-to-shopify-plus/magento-plus-icons";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as magentoPlusMigrationSectionCopy } from "@/content/migration-common";

export type MagentoPlusBoxItem = {
  iconName: MagentoPlusIconName;
  title: string;
  description: string;
};

export const magentoPlusHeroContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Magento to Shopify Plus Migration Services",
  subtitle: "Do you want to switch from Magento to Shopify Plus?",
  paragraphs: [
    "Hire our Magento to Shopify Plus Migration expert by Dynamic Dreamz. It offers a smooth, scalable, and user-friendly eCommerce solution. Simplify operations, boost performance, and unlock advanced tools for growth.",
  ],
  cta: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/magento-to-shopify-plus-migration/magento-to-shopify-plus-migration-hero.svg",
    alt: "Magento to Shopify Plus Storefront Migration",
    width: 493,
    height: 292,
  },
  badges: [
    {
      name: "Shopify Platinum Partner",
      src: "/assets/proof/shopify-platinum-partner.svg",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
    },
    {
      name: "Clutch",
      src: "/assets/proof/clutch-rating.svg",
      href: "https://clutch.co/profile/dynamic-dreamz",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      name: "Trustpilot",
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
    },
    {
      name: "Upwork",
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
    },
  ] as readonly HeroBadge[],
} satisfies ServiceHeroVideoContent;

import { globalBrandLogos } from "@/content/brands";

export const magentoPlusBrandLogos: readonly ClientLogoSliderItem[] = globalBrandLogos;

export const magentoPlusWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why Choose Magento to Shopify Plus Migration?",
  description:
    "Magento is a robust but complex platform for users without technical knowledge. Shopify Plus provides simplicity, scalability, and advanced features for growing businesses of all sizes. If you are moving to Shopify Plus you will get a number of excellent benefits. Here’s what Shopify Plus offers to your business:",
  items: [
    {
      iconName: "no-server-management",
      title: "No Server Management",
      description:
        "No more worry about server maintenance—Shopify Plus handles it all for you.",
    },
    {
      iconName: "no-reindexing",
      title: "No Reindexing",
      description:
        "With automatic updates, Shopify Plus can save time and avoid the need for manual reindexing.",
    },
    {
      iconName: "no-security-issues",
      title: "No Security Issues",
      description:
        "Shopify Plus offers enterprise-grade security and PCI compliance so you can stay worry-free.",
    },
    {
      iconName: "multiple-stores-feature",
      title: "Multiple Stores Feature",
      description:
        "You can easily manage multiple storefronts from a single dashboard.",
    },
    {
      iconName: "built-in-b2b-module",
      title: "Built-in B2B Module",
      description:
        "Get access to advanced features to simplify B2B and wholesale operations.",
    },
    {
      iconName: "best-checkout-experience",
      title: "Best Checkout Experience",
      description:
        "Offer customers a fast, smooth, and safe checkout process.",
    },
    {
      iconName: "ease-of-use",
      title: "Ease of Use",
      description: "It provides a simple admin panel for quick updates.",
    },
    {
      iconName: "24-7-support",
      title: "24/7 Support",
      description:
        "They are always ready to provide dedicated assistance whenever you need it.",
    },
    {
      iconName: "simplified-operations",
      title: "Simplified Operations",
      description:
        "Shopify has an easy-to-use interface that saves time and effort.",
    },
    {
      iconName: "scalability",
      title: "Scalability",
      description:
        "It is created to manage high traffic volume and sales pinpoints.",
    },
    {
      iconName: "advanced-features",
      title: "Advanced Features",
      description:
        "Easily integrate advanced features for your every need. Access exclusive tools like sales channels and automation.",
    },
    {
      iconName: "cost-efficiency",
      title: "Cost Efficiency",
      description:
        "Shopify offers predictable pricing plans with no hidden charges based on your business requirements.",
    },
  ],
} as const;

export const magentoPlusWhatDataContent = {
  eyebrow: "Data We Can Transfer",
  heading: "What Data Can We Transfer During Migration?",
  description:
    "We ensure a smooth transition by migrating all necessary data securely. Here’s what we transfer to your new Shopify store:",
  items: [
    {
      iconName: "products-categories",
      title: "Products & Categories",
      description: "Product details, images, pricing, and categories.",
    },
    {
      iconName: "customer-data",
      title: "Customer Data",
      description: "Profiles, order history, and preferences.",
    },
    {
      iconName: "orders-transactions",
      title: "Orders & Transactions",
      description: "Past orders.",
    },
    {
      iconName: "content",
      title: "Content",
      description: "Blogs, pages, and media files.",
    },
    {
      iconName: "seo-settings",
      title: "SEO Settings",
      description: "Redirects, meta tags, and URLs for minimal SEO impact.",
    },
  ],
} as const;

export const magentoPlusProcessContent = {
  eyebrow: "How We Migrate",
  heading: "How do We Migrate from Magento to Shopify plus​?",
  description:
    "Our step-by-step migration process ensures a smooth Magento to Shopify Plus migration.",
  steps: [
    {
      iconName: "audit-plan",
      title: "Audit & Plan",
      description:
        "First, we analyze your Magento store and create a migration plan.",
    },
    {
      iconName: "custom-design",
      title: "Custom Design",
      description: "We also offer to build a custom Shopify theme that matches your brand for more customization needs.",
    },
    {
      iconName: "development",
      title: "Development",
      description:
        "After you approve the new custom design, we will start developing your Shopify store.",
    },
    {
      iconName: "data-migration",
      title: "Data Migration",
      description:
        "We securely transfer all essential data from the Magento store to the Shopify Plus store.",
    },
    {
      iconName: "testing",
      title: "Testing",
      description:
        "We strictly test your Shopify store to ensure everything works flawlessly.",
    },
    {
      iconName: "launch",
      title: "Launch",
      description:
        "We launch your website with zero downtime and post-launch support.",
    },
  ],
} as const;

export const magentoPlusWhyChooseContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz for Migration Services?",
  description:
    "As a proud Shopify Plus Partner, we have been vetted and recognized by Shopify for our expertise in delivering Shopify solutions and exceptional results. Trust us to bring your business the full power of Shopify Plus with our migration from Magento to Shopify Plus​.",
  items: [
    {
      title: "Proven Track Record",
      description:
        "With a proven track record, we have successfully migrated 100+ stores worldwide, helping businesses transition smoothly to Shopify.",
    },
    {
      title: "Expertise",
      description:
        "We have proven experience in Magento to Shopify Plus migration, with a team of Shopify Experts skilled in handling migrations of all complexities.",
    },
    {
      title: "Custom Solutions",
      description:
        "We understand that every business has unique requirements. That’s why we offer customized migration strategies tailored to your business size, type, and specific needs.",
    },
    {
      title: "Smooth Data Transfer",
      description:
        "We ensure that all essential data, including products, customer details, and orders, are transferred accurately without any data loss.",
    },
    {
      title: "SEO Expertise",
      description:
        "Our SEO experts ensure your new Shopify store maintains and improves its search engine visibility during migration.",
    },
    {
      title: "Comprehensive Services",
      description:
        "From initial assessment to post launch support, we provide end to end migration services, taking care of every detail to ensure a successful upgrade.",
    },
    {
      title: "Minimal Downtime",
      description:
        "We migrate your store with proper planning and carefully take every step so your migration process will completed with minimal downtime.",
    },
    {
      title: "Post-Migration Support",
      description:
        "We also provide post migration support for your adjustments, additional features, or technical questions you may have.",
    },
  ],
} as const;

export const magentoPlusTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const magentoPlusFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is the cost of the migration process?",
    answer:
      "The cost entirely depends on the complexity and size of the Shopify store and your migration requirements. First of all, we analyzed your store, and then we can give you a detailed outline with the cost and time required. Contact us with your Magento store details and requirements to request a quote.",
  },
  {
    question: "How long does the migration take?",
    answer:
      "Migrating from Magento to Shopify Plus​ process of any store typically takes 4-8 weeks. It is entirely depending on the size and complexity of your Shopify store. The migration process contains auditing & planning, data migration, design customization, final testing, and launching. We ensure that your business operations will be minimally disrupted during the migration process. Larger Shopify stores with vast data could need extra time to guarantee accuracy and completeness.",
  },
  {
    question: "Will my SEO be affected during migration?",
    answer:
      "If the migration has been completed correctly, the negative effect on your SEO ranking will be minimal. We make sure URL structures stay consistent, preserve metadata, and apply appropriate 301 redirects. It minimizes any potential drop in rankings. We also improve the SEO performance of your new Shopify Plus store to ensure a smooth migration without sacrificing organic traffic.",
  },
  {
    question: "Can I migrate my existing theme from Magento?",
    answer:
      "Shopify and Magento are both different platforms, so their themes are different. That’s why direct migration is not possible. In return, we offer a custom Shopify Plus theme integration that matches your existing branding, layout, and Magento theme. With Shopify’s modern, responsive design and advanced features, your store maintains its unique identity and improves user experience.",
  },
  {
    question: "What happens to my Magento store after migration?",
    answer:
      "Your Magento store remains completely functional while migrating. We perform all the setup, testing, and migration on a development store. Once the Shopify store is thoroughly tested and ready, we seamlessly switch your domain to Shopify Plus, with no disruption to your daily operations.",
  },
  {
    question: "Is Shopify Plus secure?",
    answer:
      "Yes, Shopify Plus is PCI-compliant and highly secure, guaranteeing that your store meets with industry data protection regulations. It offers enterprise-grade security features, including fraud analysis, encryption, and 24/7 monitoring. You can concentrate on expanding your business with Shopify Plus, free from worries about security violations or legal issues.",
  },
  {
    question: "Do you offer post-migration support?",
    answer:
      "Absolutely! We offer post-migration support, which is a key part of our migration service. We provide continuous technical support to ensure your store resumes to perform optimally after launch. Your business success is our priority.",
  },
  {
    question: "Can I migrate only specific parts of my store?",
    answer:
      "Yes, Our Magento to Shopify Plus migration​ expert can customize the migration scope based on your requirements. We’ll modify the migration process to meet your requirements, whether you want to migrate just products, client information, or particular content.",
  },
];
