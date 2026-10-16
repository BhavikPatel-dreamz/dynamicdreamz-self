import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as bigcommerceMigrationSectionCopy };
export const bigcommerceBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const bigcommerceHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "BigCommerce to Shopify Migration Services",
  paragraphs: ["Are you thinking about migrating your eCommerce store from BigCommerce to Shopify? Get ready to use the full potential of Shopify's powerful platform to improve your business development with our BigCommerce to Shopify migration services."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/bigcommerce-to-shopify-migration/bigcommerce-shopify-migration-hero.svg",
    alt: "BigCommerce to Shopify Migration icon",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type BigCommerceWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const bigcommerceWhyMigrateContent = {
  eyebrow: "Why Choose Shopify Plus",
  heading: "Why Migrate from BigCommerce to Shopify?",
  description: "When migrating from BigCommerce to Shopify, you will gain multiple benefits. Shopify can offer a more user friendly experience, more helpful customization possibilities, trustworthy safety features, and many useful apps to enhance store functionality. By migrating BigCommerce to Shopify, you can create a safe, scalable, and fascinating shopping experience for your customers.",
  boxes: [
    {
      iconName: "easy-store-management" as MigrationPlatformIconName,
      title: "Easy Store Management",
      description: "Simplify your day-to-day operations with Shopify's intuitive and user-friendly admin dashboard. Manage products, orders, customers, and more from one place.",
    },
    {
      iconName: "better-scalability" as MigrationPlatformIconName,
      title: "Better Scalability",
      description: "Shopify provides a reliable and scalable platform that grows with your business. Handle increasing traffic, orders, and customers without worrying about infrastructure.",
    },
    {
      iconName: "faster-performance" as MigrationPlatformIconName,
      title: "Faster Performance",
      description: "Deliver a fast and smooth shopping experience with Shopify's optimized infrastructure. Improve page speed and provide customers with a seamless browsing experience.",
    },
    {
      iconName: "advanced-customization" as MigrationPlatformIconName,
      title: "Advanced Customization",
      description: "Get access to powerful themes, apps, and customization options to create a store that matches your brand. Shopify makes it easy to enhance your store as your needs grow.",
    },
    {
      iconName: "secure-reliable-2" as MigrationPlatformIconName,
      title: "Secure & Reliable",
      description: "Shopify takes care of hosting, security, updates, and PCI compliance for you. Keep your store protected while reducing the technical maintenance required.",
    },
    {
      iconName: "better-checkout-experience" as MigrationPlatformIconName,
      title: "Better Checkout Experience",
      description: "Provide customers with a streamlined and secure checkout process designed to reduce friction and improve conversions. Shopify makes purchasing quick and convenient across devices.",
    },
  ],
};

export type BigCommerceDataSecuredBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const bigcommerceDataSecuredContent = {
  eyebrow: "Data Security",
  heading: "How Our Data Is Secured During Migration?",
  description: "We prioritize the safety of your data during the migration from BigCommerce to the Shopify store. Here at Dynamic Dreamz, our processes are invented to guarantee that all your store's data is safely moved without any loss or breaches.",
  boxes: [
    {
      iconName: "encrypted-data-transfer" as MigrationPlatformIconName,
      title: "Encrypted Data Transfer",
      description: "We utilize industry standard encryption techniques to secure your data during migration. It controls unauthorized entry and ensures that sensitive customer information remains confidential.",
    },
    {
      iconName: "comprehensive-backup-plans" as MigrationPlatformIconName,
      title: "Comprehensive Backup Plans",
      description: "First of all, we create backups of your BigCommerce store before we start the migration process to protect against any possible data loss, giving you peace of mind.",
    },
    {
      iconName: "secure-server-environment" as MigrationPlatformIconName,
      title: "Secure Server Environment",
      description: "We execute migrations on secured server environments to confirm that your store's data is protected from any vulnerabilities during the migration process.",
    },
    {
      iconName: "data-integrity-checks" as MigrationPlatformIconName,
      title: "Data Integrity Checks",
      description: "Once the migration process is over, we conduct complete testing to guarantee that all your product details, customer data, and orders have been accurately migrated without any errors.",
    },
    {
      iconName: "compliance-with-shopify-s-security-standards" as MigrationPlatformIconName,
      title: "Compliance with Shopify's Security Standards",
      description: "We guarantee that your store meets Shopify's robust security procedures to maintain your store and customer data secure post migration.",
    },
  ],
};

export const bigcommerceProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "BigCommerce to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "The process of BigCommerce to Shopify Migration can take time, and it's necessary to keep your Bigcommerce store operating smoothly during the migration process. Our teams of migration experts assure you that your existing BigCommerce store is running fully functional when we set up your new Shopify store. So your business never misses any sales beat.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "As a Shopify partner, we created a development store on Shopify for your domain. It allows us to work on the design and setup of your new Shopify store while the migration process is running.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description: "With your approval of the custom design, we will implement the custom design to develop your Shopify store. To maintain the same functionality of your BigCommerce, we integrate Shopify apps and features to ensure a smooth transition to Shopify.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully migrate all of your necessary data from BigCommerce to Shopify. Here is a list of what data transfer to your new store:",
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
          items: ["Name", "Email", "Phone Number", "Address", "City", "Country"],
        },
        {
          title: "Orders",
          items: ["Order Date", "Order Status", "Order Products", "Product Price", "Quantity", "Discount Price", "Tax Price", "Total Price", "Customer Name", "Email", "Billing Address", "Shipping Address"],
        },
        {
          title: "Coupon",
          items: ["Coupon Code", "Coupon Date"],
        },
        {
          title: "Reviews",
          description: "Comment",
          items: ["User Name", "Rating", "Title"],
        },
        {
          title: "CMS Pages",
          items: ["Title", "Description", "Categories", "Images", "URL"],
        },
        {
          title: "Blogs",
          items: ["Title", "Description", "Categories", "Images", "URL"],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description: "After completing the BigCommerce to Shopify migration process, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const bigcommerceTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const bigcommerceFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why do you need to think about switching from BigCommerce to Shopify?",
    answer: "Migrating from BigCommerce to Shopify provides you with lots of benefits, such as a more automatic platform with better scalability, customization, and safety features. Shopify's vast app store allows you to add advanced features to enhance store functionality.",
  },
  {
    question: "How long does the migration process take?",
    answer: "The timeline for migration depends on the size of your BigCommerce store and the complexity of its features. On average, the process takes a few weeks, including testing and final adjustments.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer: "We work to ensure that any downtime is minimal and occurs during off peak hours. Our goal is to keep your store running smoothly throughout the transition.",
  },
  {
    question: "Can you replicate my BigCommerce store's design on Shopify?",
    answer: "Yes, we can recreate your existing BigCommerce design on Shopify or help you choose a new design that fits your brand and business goals.",
  },
  {
    question: "Which types of data are transferable between Shopify and BigCommerce?",
    answer: "We can migrate your products, categories, customers, orders, content pages, and more, confirming all data moves to your new Shopify store.",
  },
  {
    question: "How should I proceed if problems arise when migrating?",
    answer: "If you face any problems during the migration, don't worry. Our dedicated support team will be on hand to assist you at every stage of the migration, providing any issues are resolved quickly.",
  },
  {
    question: "Are there any hidden costs associated with migrating to Shopify?",
    answer: "At Dynamic Dreamz, we deliver a clear breakdown of all costs before starting the migration process. There are no hidden costs, and we ensure that you are fully informed of any extra services or features you may want to include.",
  },
  {
    question: "How can I make sure that my customers have a seamless transition?",
    answer: "Notify your clients in advance of the move to provide a smooth transition, particularly if there may be some downtime. In order to address any possible problems, we also advise testing the new Shopify store before going live.",
  },
  {
    question: "After the successful migration, what happens if I need assistance?",
    answer: "We provide ongoing support even after your BigCommerce to Shopify Migration. Whether you need modification and additional features or have any questions, our team is here to help.",
  },
];
