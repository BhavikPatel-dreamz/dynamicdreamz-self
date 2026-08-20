import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { MigrationServiceCard } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { ShopifyAppBenefitItem } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";

export const plusAgencyHeroContent: ServiceHeroContent = {
  title: "Shopify Plus Migration Agency​",
  description:
    "Are you planning to switch to Shopify Plus and looking for a Shopify Plus Migration Agency​? Let us help you make the move stress-free. As one of the Shopify Plus Partners in India, Dynamic Dreamz offers best Shopify Plus Migration services. Our expert Shopify team ensures that your products, customers, orders, and designs are smoothly migrated to Shopify Plus from your current eCommerce platform. Whether you are running a small store or an enterprise-level business, we provide you with fast, secure, and smooth migration services. While the migration process runs, we keep your store operating with minimal downtime. As Shopify Migration Experts, we have in-depth knowledge of the platform and deliver the best results with zero data loss.",
  paragraphs: [
    "Are you planning to switch to Shopify Plus and looking for a <strong>Shopify Plus Migration Agency​</strong>? Let us help you make the move stress-free. <strong>As one of the Shopify Plus Partners in India, Dynamic Dreamz offers best Shopify Plus Migration services</strong>. Our expert Shopify team ensures that your products, customers, orders, and designs are smoothly migrated to Shopify Plus from your current eCommerce platform. Whether you are running a small store or an enterprise-level business, we provide you with fast, secure, and smooth migration services. While the migration process runs, we keep your store operating with minimal downtime. As Shopify Migration Experts, we have in-depth knowledge of the platform and deliver the best results with zero data loss.",
  ],
  maxWidthClassName: "max-w-[1200px]",
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

export const plusAgencyBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const plusAgencyWhyChooseIntro = {
  heading: "Why Choose a Shopify Plus Migration Agency?",
  paragraphs: [
    "Migrating to Shopify Plus needs mastery and supervision. A professional Shopify Plus Migration Agency understands managing extensive data, custom features, and third-party apps. Let professionals handle your migration so you don’t waste time resolving problems later. Shopify Plus Migration Company provides a complete migration solution — from planning to post-migration support. Most importantly, they lower risks, save time, and grow your business. When you trust professionals, you can perform better following the migration and feel more comfortable.",
  ],
};

export const plusAgencyServicesContent: {
  heading: string;
  description?: string;
  items: readonly ShopifyAppBenefitItem[];
} = {
  heading: "Our Shopify Plus Migration Agency Services",
  items: [
    {
      title: "Data Migration",
      description:
        "We transfer all your data, including products, categories, customers, and orders.",
      icon: "/assets/wix-to-shopify-migration/full-data-migration-icon.svg",
      iconAlt: "Full Data Migration icon",
    },
    {
      title: "Design Migration",
      description:
        "Keep your existing design or pick a fresh design that suits your Shopify Plus store.",
      icon: "/assets/shopify-plus-migration-agency/design-migration.svg",
      iconAlt: "Design Migration Icon",
    },
    {
      title: "Post-Migration Support",
      description:
        "Get continuous support to work your Shopify Plus store after migration properly.",
      icon: "/assets/magento-to-shopify-plus-migration/post-migration-support.svg",
      iconAlt: "post-migration-support-icon",
    },
  ],
};

export const plusAgencyProcessContent: MigrationProcessContent = {
  heading: "The Shopify Plus Migration Process",
  description:
    "Our Shopify Plus migration process is simple, safe, and efficient. <br> We follow the best method to move your store successfully.",
  steps: [
    {
      stepNumber: "01",
      title: "Plan & Prepare",
      description:
        "Before starting the process, we analyze your business needs and back up all your data. Then, we create a clear migration plan based on your current platform.",
    },
    {
      stepNumber: "02",
      title: "Set Up Your Shopify Plus Store",
      description:
        "We create your new store on Shopify Plus. It includes setting up the store, designing it, and integrating the right Shopify apps and tools.",
    },
    {
      stepNumber: "03",
      title: "Migrate & Test",
      description:
        "After successful migration, we test everything to ensure it works perfectly.",
    },
    {
      stepNumber: "04",
      title: "Launch & Support",
      description:
        "We will launch your new Shopify Plus store with minimal downtime once everything is done. We also provide full post-launch support to keep your store running smoothly.",
    },
  ],
};

export const plusAgencyPlatformsHeader = {
  heading: "Migrate From Various Platforms",
  description:
    "We can migrate your store to Shopify Plus from platforms like Magento, BigCommerce, WooCommerce, Wix, OpenCart, PrestaShop, Squarespace and more. Every platform has its structure, and we can manage them all. Our Shopify Migration experts confirm that your product details, images, customer data, and order history are never lost. No matter which eCommerce platform you use, we’ll migrate everything to Shopify Plus smoothly, quickly, and safely.",
};

export const plusAgencyPlatformCards: readonly MigrationServiceCard[] = [
  {
    title: "Shopify Theme Migration",
    image: "/assets/shopify-migration/services/shopify-theme-migration.svg",
    imageAlt: "shopify-theme-migration-img",
    href: "/migrating-a-theme-to-online-store-2-0",
  },
  {
    title: "Magento to Shopify Plus Migration",
    image:
      "/assets/shopify-migration/services/magento-to-shopify-plus-migration.svg",
    imageAlt: "magento-to-shopify-plus-migration",
    href: "/magento-to-shopify-plus-migration",
  },
  {
    title: "Magento to Shopify Migration",
    image: "/assets/shopify-migration/services/magento-to-shopify-migration.svg",
    imageAlt: "magento-to-shopify-img",
    href: "/magento-to-shopify-migration",
  },
  {
    title: "WooCommerce to Shopify Migration",
    image:
      "/assets/shopify-migration/services/woocommerce-to-shopify-migration.svg",
    imageAlt: "woocommerce-to-shopify-img",
    href: "/woocommerce-to-shopify-migration",
  },
  {
    title: "BigCommerce to Shopify Migration",
    image:
      "/assets/shopify-migration/services/bigcommerce-to-shopify-migration.svg",
    imageAlt: "bigcommerce-to-shopify-img",
    href: "/bigcommerce-to-shopify-migration",
  },
  {
    title: "Salesforce to Shopify Migration",
    image:
      "/assets/shopify-migration/services/salesforce-to-shopify-migration.svg",
    imageAlt: "salesforce-to-shopify-img",
    href: "/salesforce-to-shopify-migration",
  },
  {
    title: "PrestaShop to Shopify Migration",
    image:
      "/assets/shopify-migration/services/prestashop-to-shopify-migration.svg",
    imageAlt: "prestashop-to-shopify-img",
    href: "/prestashop-to-shopify-migration",
  },
  {
    title: "Squarespace to Shopify Migration",
    image:
      "/assets/shopify-migration/services/squarespace-to-shopify-migration.svg",
    imageAlt: "squarespace-to-shopify-img",
    href: "/squarespace-to-shopify-migration",
  },
  {
    title: "Wix to Shopify Migration",
    image: "/assets/shopify-migration/services/wix-to-shopify-migration.svg",
    imageAlt: "wix-to-shopify-img",
    href: "/wix-to-shopify-migration",
  },
  {
    title: "Ecwid to Shopify Migration",
    image: "/assets/shopify-migration/services/ecwid-to-shopify-migration.svg",
    imageAlt: "ecwid-to-shopify-img",
    href: "/ecwid-to-shopify-migration",
  },
  {
    title: "Square to Shopify Migration",
    image: "/assets/shopify-migration/services/square-to-shopify-migration.svg",
    imageAlt: "square-to-shopify-img",
    href: "/square-to-shopify-migration",
  },
  {
    title: "Etsy to Shopify Migration",
    image: "/assets/shopify-migration/services/etsy-to-shopify-migration.svg",
    imageAlt: "etsy-to-shopify-img",
    href: "/etsy-to-shopify-migration",
  },
];

export const plusAgencyWhyChooseDD = {
  heading: "Why Choose Dynamic Dreamz as a <br/> Shopify Plus Migration Agency​",
  paragraphs: [
    "In India, Dynamic Dreamz is a reputable brand for Shopify development. With 15+ years of experience in migration services, we are a top Shopify Plus Migration Agency and Shopify Plus Partners. Our expert Shopify migration experts concentrate on completing your migration successfully and stress-free. We schedule everything clearly and work step-by-step. We care about your business and treat your dreams as our own. You will surely get full support, top service, and 100% successful migration when you choose us.",
  ],
};

export const plusAgencyFaqs: readonly FaqAccordionItem[] = [
  {
    question:
      "What are the Common Challenges During Shopify Plus Migration?",
    answer:
      "The common challenges are data mismatch, missing SEO redirects, and broken links. Issues with app compatibility or design changes can also occur. Without expert help, these problems can slow down your business. Our experts easily solve these issues and give you proper results.",
  },
  {
    question:
      "Why Shopify Plus is the Right Choice for Growing Businesses?",
    answer:
      "It offers more control, speed, and better support. You also get advanced features to manage high traffic and sales. That’s why it’s a wise choice for scaling your business.",
  },
  {
    question:
      "What is the charge for your Shopify Plus migration Services?",
    answer:
      "The price depends on the size of your store, any specific custom features you have, and the platform you currently use. A simple store may cost less, while complex sites cost more. The best way to know is to send us your detailed requirements and get an estimated cost today.",
  },
  {
    question: "What is Shopify Plus, and why should I migrate to it?",
    answer:
      "Shopify Plus is created for more complex businesses. It includes extra features like automation, fast checkouts, and dedicated support. If your company is growing, moving to Shopify Plus helps you scale faster and smarter.",
  },
  {
    question: "What does the Shopify Plus migration process involve?",
    answer:
      "It involves planning, data backup, setting up the new store, migrating all content, testing, and finally going live. A good agency also gives post-launch support. This process helps you move smoothly without downtime or data loss.",
  },
];
