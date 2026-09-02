import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { DifferenceCardContent } from "@/components/sections/difference-card-section";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { AgencyServicesContent } from "@/components/sections/agency-services-section";

export { migrationSectionCopy as bigcommerceMigrationSectionCopy } from "@/content/migration-common";

export const bigcommerceHeroContent: ServiceHeroContent = {
  title: "BigCommerce to Shopify Migration",
  description:
    "Are you looking for BigCommerce to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/bigcommerce-to-shopify-migration/bigcommerce-shopify-migration-hero.svg",
    alt: "BigCommerce to Shopify Migration icon",
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

export const bigcommerceBrandLogos: readonly ClientLogoSliderItem[] = [
  {
    href: "https://www.ranavat.com/",
    src: "/assets/clients/ranavat.svg",
    alt: "Ranavat Logo",
    width: 174,
    height: 19,
  },
  {
    href: "https://prolash.com/",
    src: "/assets/clients/prolash.svg",
    alt: "prolash_black",
    width: 204,
    height: 22,
  },
  {
    href: "https://shop.tropicfeel.com/",
    src: "/assets/clients/tropicfeel.svg",
    alt: "Tropicfeel Logo",
    width: 150,
    height: 32,
  },
  {
    href: "https://www.perfectlocks.com/",
    src: "/assets/clients/perfect-locks.svg",
    alt: "perfect_locks_color_logo",
    width: 175,
    height: 32,
  },
  {
    href: "https://www.bombayshirts.com/",
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company Logo",
    width: 204,
    height: 26,
  },
  {
    href: "https://kayfi.com/",
    src: "/assets/clients/kayfi.svg",
    alt: "kayfi-colored",
    width: 90,
    height: 49,
  },
  {
    href: "https://simsdirect.com.au/",
    src: "/assets/clients/simsdirect.svg",
    alt: "simdirect_logo_color",
    width: 143,
    height: 49,
  },
  {
    href: "https://www.kvaser.com/",
    src: "/assets/clients/kvaser.svg",
    alt: "Kvaser Logo",
    width: 135,
    height: 25,
  },
  {
    href: "https://www.nekterjuicebar.com/",
    src: "/assets/clients/nekter-colored.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    href: "https://circuitcity.com/",
    src: "/assets/clients/circuit-city.svg",
    alt: "Circuit City Logo",
    width: 64,
    height: 64,
  },
];

export const bigcommerceWhyMigrate = {
  heading: "Why Migrate from BigCommerce to Shopify?",
  text: "Moving to Shopify from BigCommerce is like giving an updated look to your online store with many features to improve sales and overall experience. Shopify delivers better, quicker load times, top-level safety, and a user-friendly interface that lets you customize easily. It also offers lots of apps and plugins to improve store functionality, helping you achieve your ecommerce goals. Additionally, Shopify is cost-effective, scalable, and comes with outstanding 24/7 customer support, making it the perfect option for your online store.",
};

export const bigcommerceDifferenceContent: DifferenceCardContent = {
  heading: "BigCommerce VS Shopify",
  cards: [
    {
      logo: {
        src: "/assets/bigcommerce-to-shopify-migration/difference/shopify-logo.svg",
        alt: "Shopify Logo",
        width: 140,
        height: 40,
      },
      items: [
        {
          label: "Overall Rating:",
          value: "4.5/5",
          ratingImage: {
            src: "/assets/bigcommerce-to-shopify-migration/difference/star-rating-4-5.svg",
            alt: "Rating Image",
            width: 108,
            height: 20,
          },
        },
        {
          label: "Starting Price:",
          value: "$39/month",
        },
        {
          label: "Free plan or free trial:",
          value: "3-day free trial then Starter Plan for $5/month",
        },
        {
          label: "Number of templates:",
          value: "200++",
        },
        {
          label: "Pros:",
          value:
            "AI powered Shopify Magic tool, Unlimited products, Huge app market, 100+ payment options, Mobile responsive store",
        },
        {
          label: "Cons:",
          value:
            "Additional app costs, Limited customization options, Lacks built in features, Most templates cost extra",
        },
      ],
    },
    {
      logo: {
        src: "/assets/bigcommerce-to-shopify-migration/difference/bigcommerce-logo.svg",
        alt: "BigCommerce Logo",
        width: 178,
        height: 40,
      },
      items: [
        {
          label: "Overall Rating:",
          value: "4.3/5",
          ratingImage: {
            src: "/assets/bigcommerce-to-shopify-migration/difference/star-rating-4-3.svg",
            alt: "Rating Image",
            width: 108,
            height: 20,
          },
        },
        {
          label: "Starting Price:",
          value: "$39/month",
        },
        {
          label: "Free plan or free trial:",
          value: "15-day free trial",
        },
        {
          label: "Number of templates:",
          value: "160++",
        },
        {
          label: "Pros:",
          value:
            "0% transaction fees on all plans, Unlimited products, Multiple storefronts, International shipping options, Mobile responsive store",
        },
        {
          label: "Cons:",
          value:
            "Slow performance, Limited customization options, No AI tools, No free custom domain",
        },
      ],
    },
  ],
};

export const bigcommerceProcessContent: MigrationProcessContent = {
  heading: "BigCommerce to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "The process of BigCommerce to Shopify Migration can take time, and it’s necessary to keep your Bigcommerce store operating smoothly during the migration process. Our teams of migration experts assure you that your existing BigCommerce store is running fully functional when we set up your new Shopify store. So your business never misses any sales beat.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "As a Shopify partner, we created a development store on Shopify for your domain. It allows us to work on the design and setup of your new Shopify store while the migration process is running.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description:
        "With your approval of the custom design, we will implement the custom design to develop your Shopify store. To maintain the same functionality of your BigCommerce, we integrate Shopify apps and features to ensure a smooth transition to Shopify.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully migrate all of your necessary data from BigCommerce to Shopify. Here is a list of what data transfer to your new store:",
      categories: [
        {
          title: "Products",
          items: [
            "SKU, Meta Description, Price, Manage Stock, Full Description, Name, Stock Status, Additional Images, Manufacturer, Quantity, Product Tags, Metafields, Weight, Barcode, Special Price, Status, and Meta Title.",
          ],
        },
        {
          title: "Product Categories",
          items: [
            "Meta Title, Meta Description, Name, Image, and Description.",
          ],
        },
        {
          title: "Customers",
          items: [
            "First Name, Last Name, Email, Telephone, Country, Address 1, Address 2, City, Zip Code, Company, State, and Newsletter.",
          ],
        },
        {
          title: "Orders",
          items: [
            "Order Number, Order Status, First Name, Last Name, Email, Customer Detail, Shipping Detail, Order Items, Product Price, Quantity, Discount Price, Sub Price, Shipping Price, Tax Price, Total Price, and Order Comments.",
          ],
        },
        {
          title: "Coupon",
          items: ["Coupon Code, Coupon Date, and Coupon Expire Date."],
        },
        {
          title: "Reviews",
          items: ["User Name, Rate, Title, Comment, and Created Date."],
        },
        {
          title: "CMS Pages",
          items: ["Title, Description, Categories, URL, and Image."],
        },
        {
          title: "Blogs",
          items: ["Title, Description, Images, Categories, and URLs."],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description:
        "After completing the BigCommerce to Shopify migration process, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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
          items: [
            "Preparing a comprehensive checklist to ensure a smooth transition.",
          ],
        },
      ],
    },
    {
      stepNumber: "06",
      title: "Go Live",
      description:
        "Finally, we make your Shopify store live by linking it to your domain. We aim to minimize downtime during the final steps, usually scheduling the transition during non business hours to avoid disruption.",
    },
  ],
};

export const bigcommerceWhyChooseContent: ProofSectionContent = {
  heading:
    "Why Choose Dynamic Dreamz for<br>BigCommerce to Shopify Migration Service",
  description:
    "Dynamic Dreamz offers smooth migration services from BigCommerce to Shopify,<br>ensuring a smooth migration with minimal trouble. Our migration expert team ensures<br>that your store is not only migrated but optimized for better performance on Shopify.",
  items: [
    {
      title: "Professional Squad of Shopify Experts:",
      description:
        "Our Shopify experts have years of experience in Shopify migrations. We ensure that all your crucial data, store functionality, and design are seamlessly migrated without any bugs.",
      icon: "/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg",
      iconAlt: "expertise_icon",
    },
    {
      title: "End to End Migration Support",
      description:
        "We handle the whole migration process from our side, from setting up your new store to testing and launching. You can sit back and relax, not worry about a thing.",
      icon: "/assets/bigcommerce-to-shopify-migration/icons/end-to-end-migration-support.svg",
      iconAlt: "End-to-End Migration Support",
    },
    {
      title: "Customizable Shopify Solutions",
      description:
        "Our job starts with migrating your store and finishing with enhancing it. Our experts customize your new Shopify store to fulfill your business requirements and to improve your store's overall performance.",
      icon: "/assets/prestashop-to-shopify-migration/why-choose/custom-shopify-themes.svg",
      iconAlt: "Customizable Shopify Solutions Icon",
    },
    {
      title: "Minimal Downtime Guarantee",
      description:
        "We plan migration during nonworking hours and conduct complete testing to ensure your store is running smoothly and accessible throughout the process.",
      icon: "/assets/services/bigcommerce-development/advantages/timely-delivery.svg",
      iconAlt: "timely-delivery-icon",
    },
    {
      title: "Post Migration Support",
      description:
        "Our services don't finish with migration. We provide continuous support to help you create adjustments and ensure your Shopify store functions at its best.",
      icon: "/assets/services/bigcommerce-development/advantages/transparent-communication.svg",
      iconAlt: "transparent-com-icon",
    },
  ],
};

export const bigcommerceDataSecuredContent: AgencyServicesContent = {
  heading: "How Our Data Is Secured During Migration?",
  description:
    "We prioritize the safety of your data during the migration from BigCommerce to the<br>Shopify store. Here at Dynamic Dreamz, our processes are invented to guarantee that all<br>your store's data is safely moved without any loss or breaches.",
  items: [
    {
      title: "Encrypted Data Transfer",
      description:
        "We utilize industry standard encryption techniques to secure your data during migration. It controls unauthorized entry and ensures that sensitive customer information remains confidential.",
      icon: "/assets/prestashop-to-shopify-migration/why-choose/smooth-data-transfer.svg",
      iconAlt: "Encrypted Data Transfer Icon",
    },
    {
      title: "Comprehensive Backup Plans",
      description:
        "First of all, we create backups of your BigCommerce store before we start the migration process to protect against any possible data loss, giving you peace of mind.",
      icon: "/assets/bigcommerce-to-shopify-migration/icons/comprehensive-backup-plans.svg",
      iconAlt: "Encrypted Data Transfer icon",
    },
    {
      title: "Secure Server Environment",
      description:
        "We execute migrations on secured server environments to confirm that your store’s data is protected from any vulnerabilities during the migration process.",
      icon: "/assets/bigcommerce-to-shopify-migration/icons/secure-server-environment.svg",
      iconAlt: "Secure Server Environment Icon",
    },
    {
      title: "Data Integrity Checks",
      description:
        "Once the migration process is over, we conduct complete testing to guarantee that all your product details, customer data, and orders have been accurately migrated without any errors.",
      icon: "/assets/shopify-theme-customization/services/advanced-features-integration.svg",
      iconAlt: "Data Integrity Checks Icon",
    },
    {
      title: "Compliance with Shopify’s Security Standards",
      description:
        "We guarantee that your store meets Shopify’s robust security procedures to maintain your store and customer data secure post migration.",
      icon: "/assets/shopify-theme-customization/services/performance-optimization.svg",
      iconAlt: "Compliance with Shopify’s Security Standards Icon",
    },
  ],
};

export const bigcommerceFaqs: readonly FaqAccordionItem[] = [
  {
    question:
      "Why do you need to think about switching from BigCommerce to Shopify?",
    answer:
      "Migrating from BigCommerce to Shopify provides you with lots of benefits, such as a more automatic platform with better scalability, customization, and safety features. Shopify’s vast app store allows you to add advanced features to enhance store functionality.",
  },
  {
    question: "How long does the migration process take?",
    answer:
      "The timeline for migration depends on the size of your BigCommerce store and the complexity of its features. On average, the process takes a few weeks, including testing and final adjustments.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer:
      "We work to ensure that any downtime is minimal and occurs during off peak hours. Our goal is to keep your store running smoothly throughout the transition.",
  },
  {
    question: "Can you replicate my BigCommerce store's design on Shopify?",
    answer:
      "Yes, we can recreate your existing BigCommerce design on Shopify or help you choose a new design that fits your brand and business goals.",
  },
  {
    question:
      "Which types of data are transferable between Shopify and BigCommerce?",
    answer:
      "We can migrate your products, categories, customers, orders, content pages, and more, confirming all data moves to your new Shopify store.",
  },
  {
    question: "How should I proceed if problems arise when migrating?",
    answer:
      "If you face any problems during the migration, don’t worry. Our dedicated support team will be on hand to assist you at every stage of the migration, providing any issues are resolved quickly.",
  },
  {
    question: "Are there any hidden costs associated with migrating to Shopify?",
    answer:
      "At Dynamic Dreamz, we deliver a clear breakdown of all costs before starting the migration process. There are no hidden costs, and we ensure that you are fully informed of any extra services or features you may want to include.",
  },
  {
    question:
      "How can I make sure that my customers have a seamless transition?",
    answer:
      "Notify your clients in advance of the move to provide a smooth transition, particularly if there may be some downtime. In order to address any possible problems, we also advise testing the new Shopify store before going live.",
  },
  {
    question:
      "After the successful migration, what happens if I need assistance?",
    answer:
      "We provide ongoing support even after your BigCommerce to Shopify Migration. Whether you need modification and additional features or have any questions, our team is here to help.",
  },
];
