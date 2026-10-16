import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as prestashopMigrationSectionCopy };
export const prestashopBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const prestashopHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "PrestaShop to Shopify Migration Services",
  paragraphs: ["Are you looking for the best eCommerce platform that is better than PrestaShop? Shopify is perfect for your business, and our PrestaShop to Shopify migration service is your best choice. Our team can smoothly migrate your existing PrestaShop store to the Shopify store with minimal downtime."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/prestashop-to-shopify-migration/prestashop-to-shopify-migration-hero.svg",
    alt: "PrestaShop to Shopify Migration Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type PrestaShopBenefitsBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const prestashopBenefitsContent = {
  eyebrow: "Benefits",
  heading: "Benefits of Moving from PrestaShop to Shopify",
  description: "If you want to grow your business, switching from PrestaShop to Shopify is the best option for your business growth. Shopify's features are designed to streamline store management while enhancing your online presence.",
  boxes: [
    {
      iconName: "user-friendly-platform" as MigrationPlatformIconName,
      title: "User Friendly Interface",
      description: "Shopify's user friendly interface makes it easy to use for beginners and non technical users. Business and store owners can manage their stores, add products, and track orders better than the PrestaShop store.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Better Customization Options",
      description: "Shopify provides more flexibility with custom themes, allowing you to fully personalize your store's look and functionality according to your brand's needs.",
    },
    {
      iconName: "access-to-shopify-s-app-store" as MigrationPlatformIconName,
      title: "App Integrations",
      description: "Shopify's app store has a vast collection of apps that help enhance your store's features, offering tools for marketing, inventory management, customer service, and more.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Enhanced Security",
      description: "Shopify ensures your store's security by providing SSL certificates and PCI compliance. Shopify prioritizes protecting your data and customers' data.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Scalable Solutions",
      description: "Shopify can grow with your business, allowing you to add more products, handle more traffic, and integrate advanced tools as your business expands.",
    },
  ],
};

export const prestashopProcessContent: MigrationProcessContent = {
  eyebrow: "Migration process",
  heading: "PrestaShop to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "We know very well that if the store remains closed even for an hour, your business can suffer a considerable loss. Our expert can assure you that your PrestaShop store will effortlessly run while we develop your new Shopify store.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "We are a Shopify partner, so we can create a development store on Shopify under your domain and configure the basic settings. Then, our team will start designing your new Shopify store layout, ensuring it matches your brand's identity.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description: "Our Shopify developers are experts in custom Shopify themes. We create a custom Shopify theme, or if you have a pre designed template, we integrate it into your store to suit your brand. We make sure that your new Shopify store matches your PrestaShop store's functionality so that we can add all the necessary features and apps.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully migrate all of your necessary data from PrestaShop to Shopify. Here is a list of what data transfer to your new store:",
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
      description: "After completing the PrestaShop to Shopify Migration, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const prestashopTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const prestashopFaqs: readonly FaqAccordionItem[] = [
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
    question: "What challenges might I face during the migration from PrestaShop to Shopify?",
    answer: "The challenges you might face during the migration process include layout adjustments, platform features, and data formatting differences. Our team addresses these challenges by carefully mapping your data and customizing your Shopify store to meet your specific requirements, assuring a smooth transition.",
  },
  {
    question: "Can I migrate my customer reviews and ratings from PrestaShop to Shopify?",
    answer: "Yes, of course! We can transfer your PrestaShop store's customer reviews and ratings to the Shopify store. We make sure all your reviews and their details are accurately migrated. Review details like ratings, comments, and dates. It helps you sustain your store's credibility and trust with your customers.",
  },
  {
    question: "Will I lose my existing customer and order data during the migration?",
    answer: "No, not at all. We take extra care when we are migrating your customer and order data. Our process contains complete data validation checks to confirm no information is lost during migration.",
  },
  {
    question: "How will the migration affect my store's loading speed and performance?",
    answer: "PrestaShop to Shopify Migration often enhances store performance due to Shopify's robust infrastructure and optimized hosting. Our team will also conduct performance testing to ensure your new Shopify store loads quickly and functions appropriately.",
  },
  {
    question: "Can I continue to use the same apps and integrations from PrestaShop on Shopify?",
    answer: "Shopify has its app store, which has many similar apps and integrations available if your current PrestaShop apps are unavailable on the Shopify app store. We will help you find similar apps or develop custom apps to match your requirements.",
  },
  {
    question: "How will you handle my store's tax and currency settings during the migration?",
    answer: "Shopify supports multiple tax settings and currencies. During the migration, we configure your store to match your existing tax rules and preferred currencies, ensuring compliance with your business requirements.",
  },
  {
    question: "Can you integrate my Shopify store with other platforms I currently use?",
    answer: "Shopify supports integrations with numerous platforms, including ERP systems, CRM tools, and marketing software. We will help you to integrate into your new Shopify store.",
  },
  {
    question: "Will my store be mobile friendly after PrestaShop to Shopify Migration?",
    answer: "Yes, all Shopify themes are responsive and mobile friendly. We ensure that your new Shopify store is optimized for mobile devices, providing a great shopping experience for customers on any device.",
  },
];
