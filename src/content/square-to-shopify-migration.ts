import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as squareMigrationSectionCopy };
export const squareBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const squareHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Square to Shopify Migration Services",
  paragraphs: ["Do you need a migration expert to migrate your store from Square to Shopify? Dynamic Dreamz offers the best Square to Shopify migration service in India. Our Shopify migration experts can smoothly migrate your Square store to Shopify without interrupting your business."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/square-to-shopify-migration/square-to-shopify-migration-hero.svg",
    alt: "Square to Shopify Migration Service Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type SquareWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const squareWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why do Square to Shopify Migration?",
  description: "Suppose you want a user friendly interface, vast customization options, an extensive app store, advanced features, and scalability for your eCommerce store. In that case, Square to Shopify Migration Service from Dynamic Dreamz can be your one-stop shop. Shopify is the first choice for many business owners who want to scale their businesses.",
  boxes: [
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Advanced eCommerce Features",
      description: "Shopify offers a comprehensive set of features specifically designed for growing online businesses. Manage products, inventory, orders, payments, and customers from one powerful platform.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Greater Customization",
      description: "Shopify provides flexible themes and extensive customization options to create a storefront that matches your brand. You can also extend your store's functionality through custom development and integrations.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Powerful App Ecosystem",
      description: "The Shopify App Store offers thousands of apps to enhance your store's capabilities. Add solutions for marketing, shipping, subscriptions, analytics, customer support, and more.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Built for Scalability",
      description: "Shopify is designed to support businesses as they grow and their eCommerce needs become more complex. Its scalable infrastructure can handle increasing traffic, products, customers, and orders.",
    },
    {
      iconName: "better-marketing-sales-tools" as MigrationPlatformIconName,
      title: "Better Marketing & Sales Tools",
      description: "Shopify provides powerful tools to promote products and sell across multiple channels. You can connect with social media, marketplaces, email marketing platforms, and other sales channels to reach more customers.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Secure & Reliable Platform",
      description: "Shopify provides managed hosting and built-in security features to help keep your store and customer information protected. This reduces the technical maintenance required to keep your eCommerce store running smoothly.",
    },
  ],
};

export const squareProcessContent: MigrationProcessContent = {
  eyebrow: "Migration process",
  heading: "Square to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "We won't let you down! We will maintain your Square store and make it fully functional while we set up your new Shopify store. We minimize disruptions so customers won't notice any difference during the transition.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "As a Shopify partner, we create a development store under your domain and configure the essential settings on Shopify. Our Shopify experts then design your Shopify store's layout, keeping your brand identity in mind. We ensure your new store looks outstanding and functions even better, all while aligning closely with your previous Square setup.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description: "Our Shopify developers specialize in creating custom themes that reflect your brand. Whether you want a new look or need us to integrate a pre designed template, we ensure your Shopify store meets your business needs. We also add necessary apps and features to match your existing Square store's functionality.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully migrate all of your necessary data during the Square to Shopify Migration. Here is a list of what data transfer to your new store:",
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
  ],
};

export const squareTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const squareFaqs: readonly FaqAccordionItem[] = [
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
    question: "Will I lose any data during the Square to Shopify Migration?",
    answer: "No, we confirm that all your crucial data, including products, customers, orders, and more, has been accurately migrated to Shopify. We also conduct comprehensive data validation to ensure everything is migrated.",
  },
  {
    question: "Can you migrate my customer reviews from Square to Shopify?",
    answer: "Yes, of course! We can migrate all your customer reviews, including ratings and comments, to Shopify. It helps maintain your store's credibility and customer trust.",
  },
  {
    question: "What happens to my Square app integrations when I migrate to Shopify?",
    answer: "Shopify has an extensive app store with many apps. If the same app isn't available, we will help you find similar apps or create custom solutions to match your business needs.",
  },
  {
    question: "Will my new Shopify store be mobile friendly?",
    answer: "Absolutely! All Shopify themes are mobile responsive, meaning your store will look outstanding and function well on any device, including smartphones and tablets.",
  },
  {
    question: "How long does the migration process take?",
    answer: "The time duration varies depending on your store's size and the complexity of your requirements. However, our team works efficiently to ensure the Square to Shopify Migration is completed quickly without compromising quality.",
  },
];
