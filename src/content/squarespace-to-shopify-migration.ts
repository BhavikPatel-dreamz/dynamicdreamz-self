import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as squarespaceMigrationSectionCopy };
export const squarespaceBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const squarespaceHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Squarespace to Shopify Migration Services",
  paragraphs: ["Want more growth and sales for your business? Squarespace to Shopify Migration can achieve the new height of a successful business. Hire a migration expert from Dynamic Dreamz. Our expert can effortlessly migrate your Squarespace store into the Shopify store."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/squarespace-to-shopify-migration/squarespace-shopify-migration-hero.svg",
    alt: "Squarespace to Shopify Migration Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type SquarespaceWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const squarespaceWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why do Squarespace to Shopify Migration?",
  description: "Migrating to Shopify can provide you with many advanced features and functionalities. Shopify is the best for those who want an eCommerce platform with robust security measures, advanced features, and the ability to expand its capabilities. Shopify is your one-stop shop for your expanding business. Migrate now to witness the power of Shopify.",
  boxes: [
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Advanced eCommerce Features",
      description: "Shopify offers a comprehensive range of features designed specifically for growing eCommerce businesses. From product and inventory management to advanced checkout and selling tools, Shopify gives you more control over your online store.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Robust Security",
      description: "Shopify provides a secure and reliable platform with built-in security features to help protect your store and customer data. Its managed infrastructure also reduces the need to handle technical security updates yourself.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Greater Customization",
      description: "Shopify gives you greater flexibility to customize your storefront, layouts, and shopping experience. You can create a unique store that aligns with your brand and business requirements.",
    },
    {
      iconName: "powerful-app-ecosystem-2" as MigrationPlatformIconName,
      title: "Powerful App Ecosystem",
      description: "The Shopify App Store provides thousands of apps and integrations to extend your store's functionality. Easily add solutions for marketing, shipping, payments, analytics, customer support, and more.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Built for Business Growth",
      description: "Shopify is designed to scale alongside your business as your products, customers, traffic, and orders increase. Its flexible infrastructure makes it suitable for both growing brands and established eCommerce businesses.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Better Selling & Marketing Tools",
      description: "Shopify provides powerful tools to help you promote your products and sell across multiple channels. Built-in marketing features and third-party integrations make it easier to reach customers and grow your sales.",
    },
  ],
};

export type SquarespaceBenefitsBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const squarespaceBenefitsContent = {
  eyebrow: "Benefits",
  heading: "Benefits of Moving from Squarespace to Shopify",
  description: "Switching from Squarespace to Shopify extends various opportunities for your online business. Here are some of the fundamental advantages of migrating Squarespace to Shopify:",
  boxes: [
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Enhanced eCommerce Features",
      description: "Shopify is specially developed for eCommerce with advanced tools for stock management, taxes, customer management, and shipping, making it ideal for growing online stores.",
    },
    {
      iconName: "powerful-app-ecosystem-2" as MigrationPlatformIconName,
      title: "Robust App Store",
      description: "Shopify has thousands of apps to improve your store's functionality. Whether it's customer service, analytics, or marketing, you can add new features to your store effortlessly.",
    },
    {
      iconName: "better-payment-options" as MigrationPlatformIconName,
      title: "Better Payment Options",
      description: "With over 100 payment gateways, Shopify offers your customers more safe and secure payment alternatives. International sales and multi currency support are also supported.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Scalability",
      description: "As your business develops, Shopify evolves with you. It offers flexible plans, scalability, and powerful servers, letting you tolerate a high volume of traffic and sales without any problems.",
    },
    {
      iconName: "24-7-customer-support" as MigrationPlatformIconName,
      title: "24/7 Customer Support",
      description: "Shopify provides round the clock customer support via live chat, email, and phone, ensuring you always have help when required.",
    },
  ],
};

export const squarespaceProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "Squarespace to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "During the migration from Squarespace to Shopify, your store must remain operational to prevent potential sales loss. Our dedicated migration team ensures that your Squarespace store stays fully functional. We have also set up your new Shopify store so your business can continue without interruption.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "We create a development store on Shopify for your domain to start the migration process. So we can design and set up your new Shopify store until we conduct the data migration, ensuring a smooth and efficient transition.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description: "With your permission, we designed a unique theme and installed it in your brand new Shopify store. We integrate apps and features to match the functionality of your old store.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully transfer all critical data from Squarespace to Shopify. Here's what we migrate to your new store:",
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

export const squarespaceTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const squarespaceFaqs: readonly FaqAccordionItem[] = [
  {
    question: "How long does the Squarespace migration process take?",
    answer: "The time it takes to migrate your Squarespace store varies depending on its size and complexity. Typically, the process takes a few weeks.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer: "We aim to keep downtime to a minimum and schedule it during off peak hours. So your store remains available to customers as much as possible.",
  },
  {
    question: "Can you replicate my Squarespace store's design on Shopify?",
    answer: "Yes, we can recreate your Squarespace design on Shopify or help you select a new design that suits your brand and business objectives.",
  },
  {
    question: "What happens to my existing SEO settings and URLs during migration?",
    answer: "We take special care to keep your SEO settings, such as meta titles, meta descriptions, and URLs. If required, we implement 301 redirects to ensure that your existing SEO rankings and search engine visibility are not adversely affected during the migration.",
  },
  {
    question: "Can I keep my existing payment and shipping settings from Squarespace on Shopify?",
    answer: "Yes, we help you configure similar payment gateways and shipping options on your new Shopify store. While Shopify has its own set of integrations, we strive to closely match your current setup or suggest equivalent options available on Shopify.",
  },
  {
    question: "Will my existing Squarespace apps and extensions work on Shopify?",
    answer: "Apps and extensions from Squarespace are not directly compatible with Shopify. However, we can identify and set up similar apps on Shopify that offer the same or enhanced functionality. Our team will recommend the best alternatives to ensure your store runs smoothly on Shopify.",
  },
  {
    question: "Which types of data are transferable between Squarespace and Shopify?",
    answer: "We can transfer your products, categories, customers, orders, content pages, and more, ensuring a smooth migration to your new Shopify store.",
  },
];
