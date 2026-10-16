import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { MigrationPlatformIconName } from "@/components/sections/migration-platform-icons";
import { migrationBrandLogos, migrationHeroBadges, migrationSectionCopy } from "@/content/migration-common";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as ecwidMigrationSectionCopy };
export const ecwidBrandLogos: readonly ClientLogoSliderItem[] = migrationBrandLogos;

export const ecwidHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Ecwid to Shopify Migration Services",
  paragraphs: ["Take sales booster advantages of the eCommerce platform by migrating Ecwid to Shopify. Dynamic Dreamz provides the best Ecwid to Shopify migration service in the industry. Hire a Shopify migration expert from Dynamic Dreamz today for smooth store migration with a continuously running business."],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/ecwid-to-shopify-migration/ecwid-to-shopify-migration-hero.svg",
    alt: "Ecwid to Shopify Migration Service Image",
    width: 469,
    height: 224,
  },
  badges: migrationHeroBadges,
};

export type EcwidBenefitsBox = {
  iconName: MigrationPlatformIconName;
  title: string;
  description: string;
};

export const ecwidBenefitsContent = {
  eyebrow: "Benefits",
  heading: "Benefits of Moving from Ecwid to Shopify",
  description: "Migrating from Ecwid to Shopify opens various opportunities for your online business. Here are some of the essential benefits of migrating Ecwid to Shopify:",
  boxes: [
    {
      iconName: "user-friendly-platform" as MigrationPlatformIconName,
      title: "User Friendly Platform",
      description: "Shopify is easier to use than Ecwid. Its simple design lets you manage your store without requiring technical skills. You can easily add products, track orders, and handle your store's backend.",
    },
    {
      iconName: "extensive-customization" as MigrationPlatformIconName,
      title: "More Customization Options",
      description: "Shopify is better than Eciwd in terms of customization options. Shopify offers dedicated apps and theme stores to customize your Shopify store. It can help you customize your design and functionality.",
    },
    {
      iconName: "powerful-app-ecosystem" as MigrationPlatformIconName,
      title: "Access to Shopify's App Store",
      description: "Shopify offers a free app store to every store owner. Shopify app store has thousands of apps that can help you with marketing, inventory management, and customer service, so you can quickly expand your store's functionality.",
    },
    {
      iconName: "built-for-scalability" as MigrationPlatformIconName,
      title: "Scalability and Growth",
      description: "Shopify can easily manage the traffic and sales of your expanded business without any hassle. Its scalability ensures that your Shopify store will perform well even with more products, orders, or customers.",
    },
    {
      iconName: "secure-reliable" as MigrationPlatformIconName,
      title: "Built In Payment and Security Features",
      description: "Shopify provides multiple secure payment gateways to make transactions smoother for your customers. Shopify ensures your store's security, so you don't have to worry about data breaches or vulnerabilities.",
    },
  ],
};

export const ecwidProcessContent: MigrationProcessContent = {
  eyebrow: "Migration process",
  heading: "Ecwid to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description: "An active store is crucial for every business. We ensure your Ecwid store remains fully operational while setting up your new Shopify store. Our experts ensure that your store migrates to Shopify with minimal downtime.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description: "We set up a Shopify development store under your domain on Shopify. It allows us to design your new Shopify store to match your business brand's identity.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description: "We can create a custom Shopify theme to match your old Ecwid store's looks and feel. But if you want a new look for your new store, we can make a theme from scratch per your requirements or integrate a ready made theme.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description: "We handle the migration of all essential data from Ecwid to Shopify with precision. Here's what we transfer to your new store:",
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
          title: "Other Data",
          items: ["oupons", "Reviews", "CMS pages", "Multiple Languages", "Manufacturer", "Tax"],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description: "After completing the Ecwid to Shopify migration, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const ecwidTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description: "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const ecwidFaqs: readonly FaqAccordionItem[] = [
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
    question: "Can I keep my current domain name when migrating from Ecwid to Shopify?",
    answer: "Yes, you can use your existing domain name when Ecwid to Shopify migration. We'll help you set up your domain on Shopify so that your customers can continue to find you at the same web address.",
  },
  {
    question: "Will the migration have an impact on my SEO rankings?",
    answer: "We make sure your SEO settings are maintained during the migration process. Our team will set up redirects and ensure all your key SEO elements, like meta tags, URLs, and content, are adequately migrated to help maintain your search engine rankings.",
  },
  {
    question: "How can data security be guaranteed throughout the migrating process?",
    answer: "We prioritize protecting your data while the migration process is running. Our migration experts follow strict protocols, including using secure connections and backup systems, to ensure that all data is safely migrated without any risks of breaches.",
  },
  {
    question: "Can I add new features to my Shopify store during the migration?",
    answer: "Yes, this is a perfect opportunity to enhance your store! During the Ecwid to Shopify Migration, we can add new features, apps, and functionalities that are unavailable on your Ecwid store to optimize your Shopify store according to your business needs.",
  },
  {
    question: "What happens if, once the migration is finished, I need changes?",
    answer: "We offer post migration support to manage any modifications or adjustments you require after your new Shopify store goes live, ensuring everything continues to run smoothly.",
  },
];
