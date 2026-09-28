import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as etsyMigrationSectionCopy };
export const etsyBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const etsyHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Etsy to Shopify Migration Services",
  paragraphs: ["Are you considering migrating from your Etsy store to Shopify but want to know about the process? Dynamic Dreamz offers seamless Etsy to Shopify migration services that can help you enhance your business growth and use Shopify's powerful platform to its full potential. Our team will guide you through every step, making the transition smooth and stress free."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/etsy-to-shopify-migration/etsy-to-shopify-migration-hero.svg",
    alt: "Etsy to Shopify Migration Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type EtsyWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const etsyWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why Migrate from Etsy to Shopify?",
  description: "Shopify is the top most eCommerce platform and is used globally. Shopify can offer many benefits to take your business to the next level. Better customization, advanced features, enhanced scalability, and a big Shopify app store are benefits Shopify provides and improve your store's functionality.",
  boxes: [
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Better Store Customization",
      description: "Shopify gives you greater control over your store's design, layout, and customer experience. Customize your storefront to better match your brand and business requirements.",
    },
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Advanced eCommerce Features",
      description: "Shopify provides powerful built-in features and a wide range of tools to help you manage and grow your online store. You can also extend your store's functionality with Shopify's extensive app ecosystem.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Improved Scalability",
      description: "Shopify is built to support businesses as they grow, from small stores to high-volume eCommerce operations. Its scalable infrastructure helps you handle increasing traffic, products, and orders with ease.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Powerful App Ecosystem",
      description: "Access thousands of Shopify apps to add new features and integrations to your store. From marketing and analytics to inventory and customer support, you can easily expand your store's capabilities.",
    },
    {
      iconName: "user-friendly-platform" as MigrationPlatformIconName,
      title: "Enhanced User Experience",
      description: "Shopify makes it easier to create a fast, responsive, and mobile-friendly shopping experience. A smoother customer journey can help improve engagement, conversions, and customer satisfaction.",
    },
    {
      iconName: "better-seo-marketing" as MigrationPlatformIconName,
      title: "Better SEO & Marketing",
      description: "Shopify provides built-in SEO features and integrates with various marketing tools to help improve your online visibility. You can optimize your store, attract more organic traffic, and promote your products across multiple channels.",
    },
  ],
};

export type EtsyBenefitsBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const etsyBenefitsContent = {
  eyebrow: "Benefits",
  heading: "Benefits of Moving from Etsy to Shopify",
  description: "Migrating from Etsy to Shopify can unlock new and unique possibilities for your business. Here are the top advantages:",
  boxes: [
    {
      iconName: "greater-control-over-your-store" as MigrationPlatformIconName,
      title: "Greater Control Over Your Store",
      description: "Shopify allows you to fully customize your store's layout, design, and features, but Etsy offers fewer customization options.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Scalability for Growth",
      description: "Shopify can scale with your business, whether you are a small one or a bigger one. Shopify manages it effortlessly.",
    },
    {
      iconName: "multiple-sales-channels" as MigrationPlatformIconName,
      title: "Multiple Sales Channels",
      description: "Shopify allows you to integrate numerous sales channels, including marketplaces, social media platforms, and physical stores, growing your reach beyond Etsy.",
    },
    {
      iconName: "access-to-shopify-s-app-store" as MigrationPlatformIconName,
      title: "Access to Shopify Apps",
      description: "The Shopify app store has thousands of apps to help you add new features, such as abandoned cart recovery, advanced reporting, and marketing automation.",
    },
    {
      iconName: "seo-and-marketing-tools" as MigrationPlatformIconName,
      title: "SEO and Marketing Tools",
      description: "Shopify contains built-in SEO and marketing tools to help increase your store's visibility, letting you reach a wider audience.",
    },
  ],
};

export const etsyProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "Etsy to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "If you don't want to lose your potential customers, keeping your Etsy shop active during the migration is essential. Our Shopify migration experts ensure your Etsy store stays running until your new Shopify store is set up.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "We develop a development store on Shopify under your domain. Then, we will configure your new Shopify store while the migration progresses.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description: "To achieve the functionalities of your current Etsy store on Shopify, we integrate a custom theme and necessary apps and features. We get your approval for the design before we start working on a custom theme.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully migrate all of your necessary data from Etsy to Shopify. Here is a list of what data transfer to your new store:",
      subBoxes: [
        {
          title: "Products",
          items: ["Name", "Description", "Images", "SKU", "Price", "Product Tags", "Manufacturer", "Variants", "Meta Title", "Meta Description"],
        },
        {
          title: "Product Categories",
          items: ["Name", "Description", "Images", "Status", "Meta Title", "Meta Description"],
        },
        {
          title: "Customers",
          items: ["First Name", "Last Name", "Email", "Newsletter", "Billing Address", "Shipping Address"],
        },
        {
          title: "Orders",
          items: ["Order Date", "Order Status", "Order Products", "Product Price", "Quantity", "Discount Price", "Tax Price", "Total Price", "Customer Name", "Email", "Billing Address", "Shipping Address"],
        },
        {
          title: "Coupons",
          items: ["Coupon Code", "Coupon Date"],
        },
        {
          title: "Reviews",
          description: "Comment",
          items: ["User Name", "Rating", "Title"],
        },
        {
          title: "CMS Pages",
          items: ["Title", "Description", "Categories", "URL"],
        },
        {
          title: "Blogs",
          items: ["Title", "Description", "Categories", "URL"],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description: "After completing the data migration process, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
      subBoxes: [
        {
          title: "Functional Validation",
          description: "Checking all business rules and functionalities.",
        },
        {
          title: "Data Validation",
          description: "Ensuring the transport of all data.",
        },
        {
          title: "Performance Tests",
          description: "Conducting speed tests for optimal load times.",
        },
        {
          title: "Go Live Checklist",
          description: "Preparing a comprehensive checklist to ensure a smooth transition.",
        },
      ],
    },
    {
      stepNumber: "06",
      title: "Go Live",
      description: "Finally, we make your Shopify store live by linking it to your domain. We aim to minimize downtime during the final steps, usually scheduling the transition during non business hours to avoid disruption.",
    },
  ],
};

export const etsyTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const etsyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why Choose Shopify?",
    answer: "Migrating to Shopify offers multiple advantages, such as:",
    listItems: [
      { label: "Scalability:", text: "Easily manage and expand your business as it grows." },
      { label: "Customization:", text: "Create a unique store that matches your brand's identity." },
      { label: "User Friendly:", text: "Shopify's intuitive interface makes managing your store simple." },
      { label: "Support:", text: "Access to extensive customer support and a wide variety of apps." },
    ],
  },
  {
    question: "How long does the migration process take?",
    answer: "The time duration is based on the length and complexity of your Etsy shop. Generally, the Etsy to Shopify migration process takes two to four weeks, including testing and final adjustments.",
  },
  {
    question: "How can I start the migration process?",
    answer: "You can contact us using our website and schedule a call. We will analyze your project requirements, provide a detailed plan, and start your store's migration process.",
  },
  {
    question: "Can I keep my existing payment and shipping settings on Shopify?",
    answer: "Shopify has multiple types of payment gateways and shipping options. We create a new store to use the same or similar payment gateways to ensure a smooth transition.",
  },
  {
    question: "What happens to my existing SEO settings during migration?",
    answer: "We try to preserve your current SEO settings, such as product titles, descriptions, and URLs. We also implement 301 redirects if necessary to keep your SEO rankings intact.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer: "We work hard to minimize downtime, planning the last steps during off peak hours. Your Etsy shop will remain active until your new Shopify store is fully set up.",
  },
  {
    question: "Can you replicate my Etsy store's design on Shopify?",
    answer: "Yes, we can replicate the design of your Etsy store using a custom theme or a ready made theme that matches your brand and business goals.",
  },
  {
    question: "Do you provide support after the migration?",
    answer: "Of course, we provide support after the migration. Whether you need adjustments or additional features or have questions, our team is here to help.",
  },
];
