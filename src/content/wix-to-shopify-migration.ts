import { ServiceHeroContent } from "@/components/sections/service-hero-section";
import { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";
import { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import { MigrationProcessContent } from "@/components/sections/migration-process-section";
import { migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";



export const wixHeroContent: ServiceHeroContent = {
  title: "Wix to Shopify Migration",
  description:
    "Are you thinking about migrating your online store from Wix to Shopify? Unlock the full advantage of Shopify’s robust platform to boost your business growth.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/wix-to-shopify-migration/wix-to-shopify-migration-img.svg",
    alt: "Wix to Shopify Migration Image",
    width: 469,
    height: 224,
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

export const wixMigrationSectionCopy = {
  ...migrationSectionCopy,
  whyMigrateHeading: "Why Migrate from Wix to Shopify?",
  whyMigrateText:
    "If you want more features and benefits for your online store, Migrate from Wix to Shopify. Shopify is a straightforward eCommerce platform that offers a user friendly experience, robust security, advanced features, and a wide range of apps to expand the store’s functionality. If you migrate from the Wix store to Shopify, you can achieve a secure, scalable, and engaging buying experience.",
} as const;

export const wixTestimonials = {
  eyebrow: "Client Stories",
  items: shopifyPlusAgencyTestimonials.items.slice(5),
  controlsLabels: {
    ariaLabel: "Wix to Shopify migration client video testimonials",
    previous: "Show previous client testimonial",
    next: "Show next client testimonial",
  },
} as const;

export const wixBrandLogos: readonly ClientLogoSliderItem[] = [
  { src: "/assets/clients/ranavat.svg", href: "https://www.ranavat.com/", alt: "Ranavat Logo", width: 174, height: 19 },
  { src: "/assets/clients/prolash.svg", href: "https://prolash.com/", alt: "prolash_black", width: 204, height: 22 },
  { src: "/assets/clients/tropicfeel.svg", href: "https://shop.tropicfeel.com/", alt: "Tropicfeel Logo", width: 150, height: 32 },
  { src: "/assets/clients/perfect-locks.svg", href: "https://www.perfectlocks.com/", alt: "perfect_locks_color_logo", width: 175, height: 32 },
  { src: "/assets/clients/bombay-shirt-company.svg", href: "https://www.bombayshirts.com/", alt: "Bombay Shirt Company Logo", width: 204, height: 26 },
  { src: "/assets/clients/kayfi.svg", href: "https://kayfi.com/", alt: "kayfi-colored", width: 90, height: 49 },
  { src: "/assets/clients/sim-direct.svg", href: "https://simsdirect.com.au/", alt: "simdirect_logo_color", width: 143, height: 49 },
  { src: "/assets/clients/kvaser.svg", href: "https://www.kvaser.com/", alt: "Kvaser Logo", width: 135, height: 25 },
  { src: "/assets/clients/nelter.svg", href: "https://www.nekterjuicebar.com/", alt: "nekter-colored", width: 66, height: 64 },
  { src: "/assets/clients/circuit-city.svg", href: "https://circuitcity.com/", alt: "Circuit City Logo", width: 64, height: 64 },
];

export const wixConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before Wix to <br> Shopify Migration",
  description: "Before migrating from Wix to Shopify, there are several fundamental <br> aspects to consider to guarantee a smooth migration and avoid <br> unexpected issues. Proper planning and awareness of detail will help <br> you create the most out of Shopify's platform.",
  centerImage: {
    src: "/assets/wix-to-shopify-migration/wix-img.svg",
    alt: "WIX image",
    width: 326,
    height: 489,
  },
  leftItems: [
    {
      title: "SEO Settings",
      description: "Ensure that you review and move necessary SEO settings, such as meta titles, meta descriptions, and URLs so that your store's search rankings remain unchanged.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/seo-considerations.svg",
      iconAlt: "SEO Settings icon",
    },
    {
      title: "App Compatibility",
      description: "Wix apps cannot be directly transferred to Shopify. Before you start migration, determine the features you want to keep and explore similar apps available on Shopify.",
      icon: "/assets/wix-to-shopify-migration/apps-ntegrations-img.svg",
      iconAlt: "App Compatibility Icon",
    },
  ],
  rightItems: [
    {
      title: "Custom Designs",
      description: "Consider whether you want to keep your current store design or accept this opportunity to refresh the look of your store on Shopify. Custom themes can be tailored for Shopify.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/design-preferences.svg",
      iconAlt: "Custom Designs Icon",
    },
    {
      title: "Payment & Shipping Settings",
      description: "Check your current payment and shipping setups to confirm that Shopify provides the same or similar options. Adjustments might be required to match your current settings.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg",
      iconAlt: "Integration with Third-Party Apps Icon",
    },
  ],
};

export const wixProcessContent: MigrationProcessContent = {
  heading: "Wix to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "During the migration of your Wix store, it’s crucial to keep running your store because we can’t afford to lose your potential clients. Our migration team will ensure your store is functional until we set up your new Shopify store. This way, your business won’t miss out on any sales.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "As a Shopify partner, we create a development store on Shopify for your domain. It allows us to work on your new Shopify store’s design and setup while the data migration process is underway.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description: "Once you approve the custom design, we implement it on your new Shopify store. To ensure a smooth transition, we set up all Shopify apps and features to match your current Wix store’s functionality.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We carefully transfer all your essential data from Wix to Shopify. Here’s what we migrate to your new store:",
      categories: [
        {
          title: "Products",
          items: ["SKU, Meta Description, Price, Manage Stock, Full Description, Name, Stock Status, Additional Images, Manufacturer, Quantity, Product Tags, Metafields, Weight, Barcode, Special Price, Status, and Meta Title."],
        },
        {
          title: "Product Categories",
          items: ["Meta Title, Meta Description, Name, Image, and Description."],
        },
        {
          title: "Customers",
          items: ["First Name, Last Name, Email, Telephone, Country, Address 1, Address 2, City, Zip Code, Company, State, and Newsletter."],
        },
        {
          title: "Orders",
          items: ["Order Number, Order Status, First Name, Last Name, Email, Customer Detail, Shipping Detail, Order Items, Product Price, Quantity, Discount Price, Sub Price, Shipping Price, Tax Price, Total Price, and Order Comments."],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description: "After completing the data migration process, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
      categories: [
        {
          title: "Functional Validation",
          items: ["Checking all business rules and functionalities."],
        },
        {
          title: "Data Validation",
          items: ["Ensuring the transport of all data."],
        },
        {
          title: "Performance Tests",
          items: ["Conducting speed tests for optimal load times."],
        },
        {
          title: "Go Live Checklist",
          items: ["Preparing a comprehensive checklist to ensure a smooth transition."],
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

export const wixWhatAfterContent = {
  title: "What After Wix to Shopify Migration",
  subtitle: "After your migration from Wix to the Shopify store is complete, you’ll<br />be required to make a few tests to ensure that your store is fully<br />optimized and prepared for sale.",
  items: [
    {
      title: "SEO & Redirects",
      description: "Once the migration is done, ensure that all 301 redirects are proper so your previous URLs from the Wix store point correctly to their Shopify store. It helps maintain your search engine rankings.",
      icon: "/assets/etsy-to-shopify-migration/seo-redirects.svg",
      iconAlt: "seo-redirects-img",
    },
    {
      title: "App Setup",
      description: "To match the functionality of your Wix store, integrate the necessary apps into your Shopify store. Shopify provides a vast app store to extend your store’s abilities.",
      icon: "/assets/wix-to-shopify-migration/app-integration-fill-icon.svg",
      iconAlt: "App Setup Icon",
    },
    {
      title: "Testing & Functionality",
      description: "Thoroughly test your store to ensure that all features, including the checkout process, customer accounts, and payment gateways, are working properly.",
      icon: "/assets/wix-to-shopify-migration/testing-img.svg",
      iconAlt: "testing-img",
    },
    {
      title: "Analytics & Tracking",
      description: "Set up or migrate analytics tools like Google Analytics to track visitor data and sales on your new Shopify store.",
      icon: "/assets/etsy-to-shopify-migration/performance-optimization.svg",
      iconAlt: "Performance optimization image",
    },
  ],
};

export const wixWhyChooseContent: ProofSectionContent = {
  heading: "Why Choose Dynamic Dreamz for Wix to <br> Shopify Migration Service ",
  description: "We make the process of migrating from Wix to Shopify smooth, secure, and efficient,<br />with a priority on maintaining the integrity of your store.",
  items: [
    {
      title: "Expertise",
      description: "Our team of experts has years of experience in migrating stores to Shopify, providing a hassle free transition that keeps your business running smoothly.",
      icon: "/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg",
      iconAlt: "expertise_icon",
    },
    {
      title: "Full Data Migration",
      description: "We migrate all crucial data, including products, orders, and customers, guaranteeing that your new Shopify store has everything it requires to function flawlessly.",
      icon: "/assets/wix-to-shopify-migration/full-data-migration-icon.svg",
      iconAlt: "Full Data Migration icon",
    },
    {
      title: "Custom Themes",
      description: "Whether you want to keep your current design or construct a new one, we’ll design a custom theme that reflects your brand and improves the user experience.",
      icon: "/assets/wix-to-shopify-migration/cs_icon.svg",
      iconAlt: "cs_icon",
    },
    {
      title: "Ongoing Support",
      description: "Our responsibility doesn’t end when your store goes live. We offer ongoing support to guarantee that your store continues to perform optimally.",
      icon: "/assets/services/bigcommerce-development/advantages/transparent-communication.svg",
      iconAlt: "transparent-com-icon",
    },
  ],
};

export const wixFaqs = [
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
