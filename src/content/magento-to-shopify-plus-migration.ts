import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { PartnerWhyChooseItem } from "@/components/sections/magento-to-shopify-plus/partner-why-choose-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";

export { migrationSectionCopy as magentoPlusMigrationSectionCopy } from "@/content/migration-common";
import type { ShopifyAppBenefitItem } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import type { WhatDataTransferItem } from "@/components/sections/magento-to-shopify-plus/what-data-transfer-section";

export const magentoPlusHeroContent: ServiceHeroContent = {
  title: "Magento to Shopify Plus Migration",
  description:
    "Do you want to switch from Magento to Shopify Plus? Hire our Magento to Shopify Plus Migration expert by Dynamic Dreamz. It offers a smooth, scalable, and user-friendly eCommerce solution. Simplify operations, boost performance, and unlock advanced tools for growth.",
  paragraphs: [
    "<strong>Do you want to switch from Magento to Shopify Plus?</strong>",
    "Hire our Magento to Shopify Plus Migration expert by Dynamic Dreamz. It offers a smooth, scalable, and user-friendly eCommerce solution. Simplify operations, boost performance, and unlock advanced tools for growth.",
  ],
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/magento-to-shopify-plus-migration/magento-to-shopify-plus-migration-hero.svg",
    alt: "Magento to Shopify Plus Migration Image",
    width: 560,
    height: 440,
  },
  reviews: [
    {
      platform: "Clutch",
      reviewCount: "132 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/clutch-wordmark.svg",
      logoAlt: "Clutch Review Dynamic Dreamz",
      logoWidth: 69,
      logoHeight: 19,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      platform: "Upwork",
      reviewCount: "2000+ Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/upwork-wordmark.svg",
      logoAlt: "Upwork Review Dynamic Dreamz",
      logoWidth: 78,
      logoHeight: 23,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
    {
      platform: "GoodFirms",
      reviewCount: "72 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/goodfirms-wordmark.svg",
      logoAlt: "Goodfirms Review Dynamic Dreamz",
      logoWidth: 105,
      logoHeight: 16,
      href: "https://www.goodfirms.co/company/dynamic-dreamz",
    },
  ],
};

export const magentoPlusBrandLogos: readonly ClientLogoSliderItem[] = [
  {
    href: "https://supertails.com/",
    src: "/assets/clients/supertails.svg",
    alt: "Supper Tails Logo",
    width: 164,
    height: 41,
  },
  {
    href: "https://11-11.in/",
    src: "/assets/clients/eleven-eleven.svg",
    alt: "Eleven Eleven",
    width: 145,
    height: 20,
  },
  {
    href: "https://bellavitaorganic.com/",
    src: "/assets/clients/bella-vita.svg",
    alt: "bellavita logo",
    width: 166,
    height: 24,
  },
  {
    href: "https://www.bombayshirts.com/",
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    href: "https://popclub.co/",
    src: "/assets/clients/popclub.svg",
    alt: "",
    width: 65,
    height: 41,
  },
  {
    href: "https://www.srisritattva.com/",
    src: "/assets/clients/sri-sri-tattva.svg",
    alt: "SriSri Tattva Logo",
    width: 106,
    height: 40,
  },
  {
    href: "https://shop.tropicfeel.com/",
    src: "/assets/clients/tropicfeel.svg",
    alt: "tropicfeel logo",
    width: 150,
    height: 32,
  },
  {
    href: "https://reneecosmetics.in/",
    src: "/assets/clients/renee.svg",
    alt: "Renee logo",
    width: 93,
    height: 30,
  },
  {
    href: "https://royceindia.com/",
    src: "/assets/clients/royce-chocolate.svg",
    alt: "Royce chocolate logo",
    width: 132,
    height: 38,
  },
  {
    href: "https://tego.fit/",
    src: "/assets/clients/tego.svg",
    alt: "tego logo",
    width: 101,
    height: 40,
  },
  {
    href: "https://www.nekterjuicebar.com/",
    src: "/assets/clients/nelter.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    href: "https://thehouseofrare.com/",
    src: "/assets/clients/rare-rabbit.svg",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
];

export const magentoPlusBenefitsContent: {
  heading: string;
  description: string;
  items: readonly ShopifyAppBenefitItem[];
} = {
  heading: "Why Choose Magento to Shopify Plus Migration?",
  description:
    "Magento is a robust but complex platform for users without technical knowledge. Shopify Plus provides simplicity, scalability, and advanced features for growing businesses of all sizes. If you are moving to Shopify Plus you will get a number of excellent benefits. Here’s what Shopify Plus offers to your business:",
  items: [
    {
      title: "No Server Management",
      description:
        "No more worry about server maintenance—Shopify Plus handles it all for you.",
      icon: "/assets/magento-to-shopify-plus-migration/no-server-management.svg",
      iconAlt: "no-server-management-icon",
    },
    {
      title: "No Reindexing",
      description:
        "With automatic updates, Shopify Plus can save time and avoid the need for manual reindexing.",
      icon: "/assets/magento-to-shopify-plus-migration/no-reindexing.svg",
      iconAlt: "no-reindexing-icon",
    },
    {
      title: "No Security Issues",
      description:
        "Shopify Plus offers enterprise-grade security and PCI compliance so you can stay worry-free.",
      icon: "/assets/magento-to-shopify-plus-migration/no-security-issues.svg",
      iconAlt: "no-security-issues-icon",
    },
    {
      title: "Multiple Stores Feature",
      description:
        "You can easily manage multiple storefronts from a single dashboard.",
      icon: "/assets/magento-to-shopify-plus-migration/multiple-stores-feature.svg",
      iconAlt: "multiple-stores-feature-icon",
    },
    {
      title: "Built-in B2B Module",
      description:
        "Get access to advanced features to simplify B2B and wholesale operations.",
      icon: "/assets/magento-to-shopify-plus-migration/built-in-b2b-module.svg",
      iconAlt: "built-in-b2b-module-icon",
    },
    {
      title: "Best Checkout Experience",
      description:
        "Offer customers a fast, smooth, and safe checkout process.",
      icon: "/assets/magento-to-shopify-plus-migration/best-checkout-experience.svg",
      iconAlt: "best-checkout-experience-icon",
    },
    {
      title: "Ease of Use",
      description:
        "It provides a simple admin panel for quick updates.",
      icon: "/assets/magento-to-shopify-plus-migration/ease-of-use.svg",
      iconAlt: "ease-of-use-icon",
    },
    {
      title: "24/7 Support",
      description:
        "They are always ready to provide dedicated assistance whenever you need it.",
      icon: "/assets/magento-to-shopify-plus-migration/24-7-support.svg",
      iconAlt: "24-7-support-icon",
    },
    {
      title: "Simplified Operations",
      description:
        "Shopify has an easy-to-use interface that saves time and effort.",
      icon: "/assets/magento-to-shopify-plus-migration/simplified-operations.svg",
      iconAlt: "simplified-operations-icon",
    },
    {
      title: "Scalability",
      description:
        "It is created to manage high traffic volume and sales pinpoints.",
      icon: "/assets/magento-to-shopify-plus-migration/scalability.svg",
      iconAlt: "scalability-icon",
    },
    {
      title: "Advanced Features",
      description:
        "Easily integrate advanced features for your every need. Access exclusive tools like sales channels and automation.",
      icon: "/assets/magento-to-shopify-plus-migration/advanced-features.svg",
      iconAlt: "advanced-features-icon",
    },
    {
      title: "Cost Efficiency",
      description:
        "Shopify offers predictable pricing plans with no hidden charges based on your business requirements.",
      icon: "/assets/magento-to-shopify-plus-migration/cost-efficiency.svg",
      iconAlt: "cost-efficiency-icon",
    },
    {
      title: "Enhanced Security",
      description:
        "It uses enterprise-grade security and PCI compliance to protect your products and transactions.",
      icon: "/assets/magento-to-shopify-plus-migration/enhanced-security.svg",
      iconAlt: "enhanced-security-icon",
    },
    {
      title: "Better Performance",
      description:
        "It helps you gain faster load times and improves the user experience of your store.",
      icon: "/assets/magento-to-shopify-plus-migration/better-performance.svg",
      iconAlt: "better-performance-icon",
    },
  ],
};

export const magentoPlusWhatDataContent: {
  heading: string;
  description: string;
  items: readonly WhatDataTransferItem[];
} = {
  heading: "What Data Can We Transfer During Migration?",
  description:
    "We ensure a smooth transition by migrating all necessary data<br />securely. Here's what we transfer to your new Shopify store:",
  items: [
    {
      title: "Products & Categories",
      description: "Product details, images, pricing, and categories.",
      icon: "/assets/magento-to-shopify-plus-migration/products-categories.svg",
      iconAlt: "Products & Categories Icon",
    },
    {
      title: "Customer Data",
      description: "Profiles, order history, and preferences.",
      icon: "/assets/magento-to-shopify-plus-migration/customer-data.svg",
      iconAlt: "Customer Data Icon",
    },
    {
      title: "Orders & Transactions",
      description: "Past orders.",
      icon: "/assets/magento-to-shopify-plus-migration/orders-transactions.svg",
      iconAlt: "Orders & Transactions Icon",
    },
    {
      title: "Content",
      description: "Blogs, pages, and media files.",
      icon: "/assets/magento-to-shopify-plus-migration/content.svg",
      iconAlt: "Content Icon",
    },
    {
      title: "SEO Settings",
      description: "Redirects, meta tags, and URLs for minimal SEO impact.",
      icon: "/assets/magento-to-shopify-plus-migration/seo-settings.svg",
      iconAlt: "SEO Settings icon",
    },
  ],
};

export const magentoPlusProcessContent: MigrationProcessContent = {
  heading: "How do We Migrate from Magento to Shopify plus​?",
  steps: [
    {
      stepNumber: "01",
      title: "Audit & Plan",
      description:
        "First, we analyze your Magento store and create a migration plan.",
    },
    {
      stepNumber: "02",
      title: "Custom Design",
      description:
        "We also offer to build a custom Shopify theme that matches your brand for more customization needs.",
    },
    {
      stepNumber: "03",
      title: "Development",
      description:
        "After you approve the new custom design, we will start developing your Shopify store.",
    },
    {
      stepNumber: "04",
      title: "Data Migration",
      description:
        "We securely transfer all essential data from the Magento store to the Shopify Plus store.",
    },
    {
      stepNumber: "05",
      title: "Testing",
      description:
        "We strictly test your Shopify store to ensure everything works flawlessly.",
    },
    {
      stepNumber: "06",
      title: "Launch",
      description:
        "We launch your website with zero downtime and post-launch support.",
    },
  ],
};

export const magentoPlusWhyChooseContent: {
  heading: string;
  description: string;
  descriptionHighlight?: string;
  ctaLabel: string;
  ctaHref: string;
  items: readonly PartnerWhyChooseItem[];
} = {
  heading: "Why Choose Dynamic Dreamz for Migration Services?",
  description:
    "As a proud Shopify Plus Partner, we have been vetted and recognized by Shopify for our expertise in delivering Shopify solutions and exceptional results. Trust us to bring your business the full power of Shopify Plus with our migration from Magento to Shopify Plus​.",
  descriptionHighlight: "Shopify Plus Partner",
  ctaLabel: "Verify Our Partnership",
  ctaHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  items: [
    {
      title: "Proven Track Record",
      description:
        "In our worthy portfolio, we have successfully migrated 100+ stores globally.",
      icon: "/assets/magento-to-shopify-plus-migration/proven-track-record.svg",
      iconAlt: "Proven Track Record Icon",
    },
    {
      title: "Expertise",
      description:
        "We have proven experience in Magento to Shopify migration services.",
      icon: "/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg",
      iconAlt: "Expertise Icon",
    },
    {
      title: "Custom Solutions",
      description:
        "We offer custom strategies for every business size and type.",
      icon: "/assets/magento-to-shopify-plus-migration/custom-solutions.svg",
      iconAlt: "Custom Solutions Icon",
    },
    {
      title: "Minimum Downtime",
      description:
        "Our professional Shopify experts ensure your store remains working with minimal disruption during the migration.",
      icon: "/assets/magento-to-shopify-plus-migration/minimum-downtime.svg",
      iconAlt: "Minimum Downtime Icon",
    },
    {
      title: "Post-Migration Support",
      description:
        "We provide dedicated support after the store launch.",
      icon: "/assets/magento-to-shopify-plus-migration/post-migration-support.svg",
      iconAlt: "Post-Migration Support Icon",
    },
  ],
};

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
      "After migration, your Magento store can either be archived or decommissioned based on your preference. You can decide whether to archive or decommission your Magento store after the successful migration.",
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
