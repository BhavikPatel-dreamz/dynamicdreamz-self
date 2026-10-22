import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { EvaluationFrameworkContent } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as wixMigrationSectionCopy };
export const wixBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const wixHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Wix to Shopify Migration Services",
  paragraphs: ["Are you thinking about migrating your online store from Wix to Shopify? Unlock the full advantage of Shopify's robust platform to boost your business growth."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/wix-to-shopify-migration/wix-to-shopify-migration-img.svg",
    alt: "Wix to Shopify Migration Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type WixWhyMigrateBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const wixWhyMigrateContent = {
  eyebrow: "Why Migrate",
  heading: "Why Migrate from Wix to Shopify?",
  description: "If you want more features and benefits for your online store, Migrate from Wix to Shopify. Shopify is a straightforward eCommerce platform that offers a user friendly experience, robust security, advanced features, and a wide range of apps to expand the store's functionality. If you migrate from the Wix store to Shopify, you can achieve a secure, scalable, and engaging buying experience.",
  boxes: [
    {
      iconName: "advanced-ecommerce-features" as MigrationPlatformIconName,
      title: "Advanced eCommerce Features",
      description: "Shopify is built specifically for eCommerce and provides powerful tools to manage products, orders, inventory, payments, and customers. Its extensive feature set helps you manage and grow your online store more efficiently.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Greater Store Customization",
      description: "Shopify offers flexible themes, sections, and customization options to create a storefront that fits your brand. You also have greater control over your store's functionality and customer experience.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Powerful App Ecosystem",
      description: "With thousands of apps available in the Shopify App Store, you can easily extend your store's capabilities. Add tools for marketing, shipping, analytics, customer support, subscriptions, and more.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Better Scalability",
      description: "Shopify provides a scalable infrastructure designed to support businesses as they grow. Whether you are managing more products, customers, orders, or traffic, Shopify can adapt to your changing business needs.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Secure & Reliable Platform",
      description: "Shopify provides secure hosting and built-in security features to help protect your store and customer information. Its managed infrastructure also reduces the need for ongoing technical maintenance.",
    },
    {
      iconName: "better-sales-marketing-tools" as MigrationPlatformIconName,
      title: "Better Sales & Marketing Tools",
      description: "Shopify provides powerful tools for selling and promoting products across multiple channels. Its built-in marketing capabilities and integrations can help you reach more customers, increase conversions, and grow your sales.",
    },
  ],
};

export const wixProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "Wix to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "During the migration of your Wix store, it's crucial to keep running your store because we can't afford to lose your potential clients. Our migration team will ensure your store is functional until we set up your new Shopify store. This way, your business won't miss out on any sales.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "As a Shopify partner, we create a development store on Shopify for your domain. It allows us to work on your new Shopify store's design and setup while the data migration process is underway.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description: "Once you approve the custom design, we implement it on your new Shopify store. To ensure a smooth transition, we set up all Shopify apps and features to match your current Wix store's functionality.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully transfer all your essential data from Wix to Shopify. Here's what we migrate to your new store:",
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

export const wixTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const wixFaqs: readonly FaqAccordionItem[] = [
  {
    question: "How long does the migration process take?",
    answer: "The migration process does not have a fixed time duration; it depends on the size and complexity of your Wix store. Typically, the migration process takes a few weeks, including testing and final adjustments.",
  },
  {
    question: "What happens to my existing SEO settings and URLs during migration?",
    answer: "We take special care to keep your existing SEO settings, such as meta titles, meta descriptions, and URLs, wherever possible. If required, we implement 301 redirects to ensure that your existing SEO rankings and search engine visibility are not adversely affected during the migration.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer: "We work to minimize downtime and ensure it occurs during off peak hours. So your store remains functional and available to customers.",
  },
  {
    question: "Can I keep my existing payment and shipping settings from Wix on Shopify?",
    answer: "Yes, we help you set up similar payment gateways and shipping methods for your new Shopify store. While Shopify has its integrations, we strive to match your existing Wix setup as closely as possible or suggest equivalent options available on Shopify.",
  },
  {
    question: "Can you replicate my Wix store's design on Shopify?",
    answer: "Yes, we can replicate your existing Wix design on Shopify or help you choose a new design that aligns with your brand and business goals.",
  },
  {
    question: "Will my existing Wix apps and extensions work on Shopify?",
    answer: "Wix apps and extensions are not directly compatible with Shopify. We can find and set up equivalent apps on Shopify that deliver the same or improved functionality. Our team will suggest the best alternatives to guarantee your store operates seamlessly on Shopify.",
  },
  {
    question: "What types of data are transferable between Wix and Shopify?",
    answer: "We can migrate your products, categories, customers, orders, content pages, and more, ensuring a smooth and accurate transfer of all your crucial data.",
  },
  {
    question: "How secure is the migration process?",
    answer: "We prioritize data protection throughout the migration process. We use safe methods to transfer your data from Wix to Shopify, ensuring that sensitive details such as customer data, order details, and payment details are secure during the transition.",
  },
  {
    question: "What if I need assistance after the migration?",
    answer: "We offer ongoing support even after your store goes live on Shopify. Whether you need adjustments and additional features or have any questions, our team is here to help.",
  },
  {
    question: "Are there any hidden costs associated with migrating to Shopify?",
    answer: "There are no hidden costs applied in the migration process. We give you a transparent pricing structure and clearly outline all expenses upfront, including any extra costs for themes or apps you may want to execute on Shopify.",
  },
];

export type WixThingsToConsiderBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const wixThingsToConsiderContent = {
  eyebrow: "Consideration",
  heading: "Things to Consider Before Wix to Shopify Migration",
  description: "Before migrating from Wix to Shopify, there are several fundamental aspects to consider to guarantee a smooth migration and avoid unexpected issues. Planning for these details will help ensure your store's success on Shopify.",
  boxes: [
    {
      iconName: "seo-settings" as MigrationPlatformIconName,
      title: "SEO Settings",
      description: "Ensure that you review and move necessary SEO settings, such as meta titles, meta descriptions, and alt tags, to maintain and improve your search rankings.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "Custom Designs",
      description: "Consider whether you want to keep your current store design or accept a new custom Shopify theme. Preparing this in advance helps with the transition.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "App Compatibility",
      description: "Wix apps cannot be directly transferred to Shopify. Before you start migration, determine the features you want to keep and explore similar apps available on Shopify.",
    },
    {
      iconName: "payment-and-shipping" as MigrationPlatformIconName,
      title: "Payment & Shipping Settings",
      description: "Check your current payment and shipping setups to confirm that Shopify provides the same or similar options. Adjustments might be required to match your current settings.",
    },
  ],
};

export const wixWhatAfterContent = {
  eyebrow: "After Migration",
  heading: "What After Wix to Shopify Migration",
  description: "After your migration from Wix to the Shopify store is complete, you’ll be required to make a few tests to ensure that your store is fully optimized and prepared for sale.",
  boxes: [
    {
      iconName: "seo-redirects" as MigrationPlatformIconName,
      title: "SEO & Redirects",
      description: "Once the migration is done, ensure that all 301 redirects are proper so your previous URLs from the Wix store point correctly to their Shopify store. It helps maintain your search engine rankings.",
    },
    {
      iconName: "app-integration" as MigrationPlatformIconName,
      title: "App Setup",
      description: "To match the functionality of your Wix store, integrate the necessary apps into your Shopify store. Shopify provides a vast app store to extend your store’s abilities.",
    },
    {
      iconName: "store-testing" as MigrationPlatformIconName,
      title: "Testing & Functionality",
      description: "Thoroughly test your store to ensure that all features, including the checkout process, customer accounts, and payment gateways, are working properly.",
    },
    {
      iconName: "performance-optimization" as MigrationPlatformIconName,
      title: "Analytics & Tracking",
      description: "Set up or migrate analytics tools like Google Analytics to track visitor data and sales on your new Shopify store.",
    },
  ],
};

export const wixWhyChooseContent: EvaluationFrameworkContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz for Wix to Shopify Migration Service",
  description: "We make the process of migrating from Wix to Shopify smooth, secure, and efficient, with a priority on maintaining the integrity of your store.",
  items: [
    {
      title: "Expertise",
      description: "Our team of experts has years of experience in migrating stores to Shopify, providing a hassle free transition that keeps your business running smoothly.",
    },
    {
      title: "Full Data Migration",
      description: "We migrate all crucial data, including products, orders, and customers, guaranteeing that your new Shopify store has everything it requires to function flawlessly.",
    },
    {
      title: "Custom Themes",
      description: "Whether you want to keep your current design or construct a new one, we’ll design a custom theme that reflects your brand and improves the user experience.",
    },
    {
      title: "Ongoing Support",
      description: "Our responsibility doesn’t end when your store goes live. We offer ongoing support to guarantee that your store continues to perform optimally.",
    },
  ],
};
