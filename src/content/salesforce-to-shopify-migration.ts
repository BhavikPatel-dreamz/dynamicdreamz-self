import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as salesforceMigrationSectionCopy };
export const salesforceBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const salesforceHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Salesforce to Shopify Migration Services",
  paragraphs: ["Want a Shopify migration expert? Try Dynamic Dreamz's Salesforce to Shopify migration service to witness the best migration service in India. Our Shopify migration experts will handle the entire process smoothly, ensuring your business continues to run without interruptions."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/salesforce-to-shopify-migration/salesforce-shopify-migration-hero.svg",
    alt: "Salesforce to Shopify Migration Service Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type SalesforceWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const salesforceWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why Migrate from Salesforce to Shopify?",
  description: "Migrating from Salesforce to Shopify gives you benefits such as a more user friendly platform with vast customization options, a wide range of apps, and advanced features designed for scalability. Shopify is a robust, easy to use, and secure platform, making it a king of all eCommerce platforms.",
  boxes: [
    {
      iconName: "user-friendly-platform" as MigrationPlatformIconName,
      title: "User-Friendly Platform",
      description: "Shopify offers an intuitive and easy-to-manage platform that simplifies everyday store management. Its user-friendly interface makes it easier to manage products, orders, customers, and content.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Extensive Customization",
      description: "Shopify provides flexible customization options to create a storefront that matches your brand and business needs. You can customize themes, sections, layouts, and functionality without unnecessary complexity.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Powerful App Ecosystem",
      description: "With thousands of apps available in the Shopify App Store, you can easily extend your store's functionality. Add solutions for marketing, payments, shipping, customer support, analytics, and more.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Built for Scalability",
      description: "Shopify is designed to support businesses as they grow, from emerging brands to high-volume eCommerce stores. Its scalable infrastructure helps you manage increasing products, orders, traffic, and customers efficiently.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Secure & Reliable",
      description: "Shopify provides a secure and reliable eCommerce infrastructure, helping protect your store and customer data. With hosting, security updates, and technical infrastructure managed by Shopify, you can focus more on growing your business.",
    },
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Advanced eCommerce Features",
      description: "Shopify offers a comprehensive set of features to help you manage and grow your online business. From streamlined checkout and inventory management to analytics and multichannel selling, Shopify provides the tools needed for modern eCommerce.",
    },
  ],
};

export type SalesforceBenefitsBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const salesforceBenefitsContent = {
  eyebrow: "Benefits",
  heading: "Benefits of Moving from Salesforce to Shopify",
  description: "",
  boxes: [
    {
      iconName: "user-friendly-platform" as MigrationPlatformIconName,
      title: "User Friendly Interface",
      description: "Shopify is easy to use with its user friendly interface. There is no need to know about coding and technical aspects to manage your Shopify store. Its clean and neat design makes tasks like updating products and managing orders simple for any business owner.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Better Customization Options",
      description: "Shopify has an app and theme store with a wide range of themes and plugins to customize your store. Without writing code, you can manage your store's look, feel, and features.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Secure and Reliable",
      description: "You don't have to worry about security features. Shopify will manage it for your Shopify store. It offers SSL certificates and keeps your payment data safe. With Shopify, you can focus on expanding your business while trusting that your customers' data is protected.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Cost Effective Scalability",
      description: "Shopify can help you to grow your business. Whether you have a few products or thousands, Shopify can manage it. Shopify can scale quickly without the high costs.",
    },
    {
      iconName: "access-to-shopify-s-app-store" as MigrationPlatformIconName,
      title: "Access to Shopify's App Store",
      description: "Shopify's app store has many apps to enhance your business processes, from marketing tools to inventory management. These apps make expanding your store's functionality easy without needing custom development.",
    },
    {
      iconName: "improved-customer-experience" as MigrationPlatformIconName,
      title: "Improved Customer Experience",
      description: "Shopify helps you create a fast, responsive, and mobile-friendly shopping experience. Features such as streamlined checkout and flexible storefront customization can help improve engagement and conversions.",
    },
  ],
};

export const salesforceProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "Salesforce to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "A successful business needs a 24/7 open store, so we keep your store active while setting up your new Shopify store with minimal downtime.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "We will set up a development store under your domain on Shopify and configure the basic settings. After setting up a store, our Shopify experts design your new layout, aligning it with your brand's identity to ensure a smooth transition from Salesforce.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description: "If you want the look and feel of the old Salesforce store, we can help you achieve it by designing a custom Shopify theme. We can also integrate a ready made theme of your choice with customization.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully migrate all of your necessary data from Salesforce to Shopify. Here is a list of what data transfer to your new store:",
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
          title: "Manufacturers",
          items: ["Name"],
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

export const salesforceTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const salesforceFaqs: readonly FaqAccordionItem[] = [
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
    question: "Will I lose any data during the migration from Salesforce to Shopify?",
    answer: "No, we guarantee that all your essential data, such as products, customers, orders, and more, are migrated to Shopify. We perform data validation to confirm that everything is proper during the migration.",
  },
  {
    question: "Can you migrate my customer reviews from Salesforce to Shopify?",
    answer: "Yes, we can migrate your customer reviews, including ratings and comments, to Shopify. It can improve your store's reputation and credibility.",
  },
  {
    question: "What about my Salesforce app integrations?",
    answer: "Shopify has a vast app store with many similar apps. If apps identical to your Salesforce apps are unavailable, we will help you find alternatives or create custom solutions to fulfill your requirements.",
  },
  {
    question: "How long does the migration process take?",
    answer: "The migration time relies on the size and complexity of your store. However, our team works efficiently to finish the process quickly without sacrificing quality.",
  },
  {
    question: "What challenges might I face during the migration from Salesforce to Shopify?",
    answer: "Migrating platforms can involve challenges such as feature differences, layout adjustments, and data formatting. Our team handles these challenges by carefully mapping your data and customizing your Shopify store to fulfill your requirements, providing a smooth transition.",
  },
];
