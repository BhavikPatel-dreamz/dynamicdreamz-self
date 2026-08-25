import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";

export { migrationSectionCopy as salesforceMigrationSectionCopy } from "@/content/migration-common";

export const salesforceHeroContent: ServiceHeroContent = {
  title: "Salesforce to Shopify Migration Service",
  description:
    "Want a Shopify migration expert? Try Dynamic Dreamz’s Salesforce to Shopify migration service to witness the best migration service in India. Our Shopify migration experts will handle the entire process smoothly, ensuring your business continues to run without interruptions.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/salesforce-to-shopify-migration/salesforce-shopify-migration-hero.svg",
    alt: "Salesforce to Shopify Migration Service Image",
    width: 560,
    height: 440,
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

export const salesforceBrandLogos: readonly ClientLogoSliderItem[] = [
  {
    href: "https://supertails.com/",
    src: "/assets/clients/supertails.svg",
    alt: "Supper Tails Logo",
    width: 164,
    height: 41,
  },
  {
    href: "https://11-11.in/",
    src: "/assets/clients/eleven-eleven.svg",
    alt: "Eleven Eleven",
    width: 145,
    height: 20,
  },
  {
    href: "https://bellavitaorganic.com/",
    src: "/assets/clients/bella-vita.svg",
    alt: "bellavita logo",
    width: 166,
    height: 24,
  },
  {
    href: "https://www.bombayshirts.com/",
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    href: "https://popclub.co/",
    src: "/assets/clients/popclub.svg",
    alt: "",
    width: 65,
    height: 41,
  },
  {
    href: "https://www.srisritattva.com/",
    src: "/assets/clients/sri-sri-tattva.svg",
    alt: "SriSri Tattva Logo",
    width: 106,
    height: 40,
  },
  {
    href: "https://shop.tropicfeel.com/",
    src: "/assets/clients/tropicfeel.svg",
    alt: "tropicfeel logo",
    width: 150,
    height: 32,
  },
  {
    href: "https://www.reneecosmetics.in/",
    src: "/assets/clients/renee.svg",
    alt: "Renee logo",
    width: 93,
    height: 30,
  },
  {
    href: "https://royceindia.com/",
    src: "/assets/clients/royce-chocolate.svg",
    alt: "Royce chocolate logo",
    width: 132,
    height: 38,
  },
  {
    href: "https://tego.fit/",
    src: "/assets/clients/tego.svg",
    alt: "tego logo",
    width: 101,
    height: 40,
  },
  {
    href: "https://www.nekterjuicebar.com/",
    src: "/assets/clients/nelter.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    href: "https://thehouseofrare.com/",
    src: "/assets/clients/rare-rabbit.svg",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
];

export const salesforceWhyMigrate = {
  heading: "Why Migrate from Salesforce to Shopify?",
  text: "Migrating from Salesforce to Shopify gives you benefits such as a more user friendly platform with vast customization options, a wide range of apps, and advanced features designed for scalability. Shopify is a robust, easy to use, and secure platform, making it a king of all eCommerce platforms.",
} as const;

export const salesforceBenefitsContent: ProofSectionContent = {
  heading: "Benefits of Moving from  <br> Salesforce to Shopify",
  description: "",
  items: [
    {
      title: "User Friendly Interface",
      description:
        "Shopify is easy to use with its user friendly interface. There is no need to know about coding and technical aspects to manage your Shopify store. Its clean and neat design makes tasks like updating products and managing orders simple for any business owner.",
      icon: "/assets/shopify-theme-customization/benefits/improved-user-experience.svg",
      iconAlt: "user-friendly-interface-icon",
    },
    {
      title: "Better Customization Options",
      description:
        "Shopify has an app and theme store with a wide range of themes and plugins to customize your store. Without writing code, you can manage your store's look, feel, and features.",
      icon: "/assets/prestashop-to-shopify-migration/benefits/better-customization-options.svg",
      iconAlt: "",
    },
    {
      title: "Secure and Reliable",
      description:
        "You don't have to worry about security features. Shopify will manage it for your Shopify store. It offers SSL certificates and keeps your payment data safe. With Shopify, you can focus on expanding your business while trusting that your customers' data is protected.",
      icon: "/assets/salesforce-to-shopify-migration/secure-reliable.svg",
      iconAlt: "secure-reliable-img",
    },
    {
      title: "Cost Effective Scalability",
      description:
        "Shopify can help you to grow your business. Whether you have a few products or thousands, Shopify can manage it. Shopify can scale quickly without the high costs.",
      icon: "/assets/shopify-theme-customization/benefits/higher-conversion-rates.svg",
      iconAlt: "cost-effective-scalability-img",
    },
    {
      title: "Access to Shopify’s App Store",
      description:
        "Shopify's app store has many apps to enhance your business processes, from marketing tools to inventory management. These apps make expanding your store's functionality easy without needing custom development.",
      icon: "/assets/salesforce-to-shopify-migration/access-app-store.svg",
      iconAlt: "access-app-store-img",
    },
  ],
};

export const salesforceConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before Migrate<br> from Salesforce to Shopify",
  description: "",
  centerImage: {
    src: "/assets/salesforce-to-shopify-migration/salesforce.svg",
    alt: "Square Space Image",
    width: 326,
    height: 489,
  },
  leftItems: [
    {
      title: "Data Mapping and Cleanup",
      description:
        "Before starting the migration process, ensure your data is clean and organized; this is the most important thing. This checking process contains incorrect orders, old product listings, or duplicate customer records. A clean dataset makes the migration process faster and smoother.",
      icon: "/assets/salesforce-to-shopify-migration/data-mapping-cleanup.svg",
      iconAlt: "Data Mapping and Cleanup icon",
    },
    {
      title: "SEO Considerations",
      description:
        "When swapping platforms, SEO can be affected. Ensure your product URLs, page titles, and meta descriptions are optimized on Shopify to keep your search engine rankings.",
      icon: "/assets/salesforce-to-shopify-migration/seo-considerations.svg",
      iconAlt: "SEO Considerations",
    },
  ],
  rightItems: [
    {
      title: "Feature Compatibility",
      description:
        "Shopify may not have some of the built-in features that Salesforce offers. However, Shopify's app store and custom development can fill these gaps. Plan to find alternatives or create a roadmap for custom features that satisfy your business requirements.",
      icon: "/assets/wix-to-shopify-migration/apps-ntegrations-img.svg",
      iconAlt: "Feature Compatibility Icon",
    },
    {
      title: "Redirect Strategy",
      description:
        "Some URLs may change when you migrate to Shopify. Creating proper 301 redirects is crucial to ensure that customers who have bookmarked your old store or find it through search engines will be redirected to your new Shopify store smoothly.",
      icon: "/assets/salesforce-to-shopify-migration/redirect-strategy.svg",
      iconAlt: "Redirect Strategy Icon",
    },
  ],
};

export const salesforceProcessContent: MigrationProcessContent = {
  heading: "Salesforce to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "A successful business needs a 24/7 open store, so we keep your store active while setting up your new Shopify store with minimal downtime.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We will set up a development store under your domain on Shopify and configure the basic settings. After setting up a store, our Shopify experts design your new layout, aligning it with your brand’s identity to ensure a smooth transition from Salesforce.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description:
        "If you want the look and feel of the old Salesforce store, we can help you achieve it by designing a custom Shopify theme. We can also integrate a ready made theme of your choice with customization.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully migrate all of your necessary data from Salesforce to Shopify. Here is a list of what data transfer to your new store:",
      categories: [
        {
          title: "Products",
          items: [
            "Name, SKU, Short Description, Full Description, Meta Title, Meta Description, Status, Manufacturer, Variants, Quantity, Manage Stock, Tax Class, Price, Special Price, Weight Width Height Depth, Attributes, Product Tags EAN-13 UPC, Up-sells, Cross-sells, Grouped Products, Downloadable Products, Base Image, Thumbnail Image, Additional Images.",
          ],
        },
        {
          title: "Product Categories",
          items: [
            "Meta Title, Meta Description, Name, Image, and Description Sort Order, URL.",
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
            "ID, Order Date, Order Status, Order Products, Product Price, Quantity, Discount Price, Tax Price, Total Price, Custom Order Status, Shipping Price, Order Status History, Customer Name, Email, Billing Address, Shipping Address.",
          ],
        },
        {
          title: "Manufacturers",
          items: ["Name, Image."],
        },
        {
          title: "Coupons",
          items: [
            "Coupon Code, Description, Coupon Date, Name, Customer Groups, Uses Per Coupon, Uses Per Customer, Discount Amount, Coupon from date, Coupon to date.",
          ],
        },
        {
          title: "Reviews",
          items: ["User Name, Email, Created Date, Status, Rate, Comment."],
        },
        {
          title: "CMS Pages",
          items: ["Title, URL, Description, Created Date."],
        },
        {
          title: "Blogs",
          items: [
            "Title, Short Description, Full Description, Tags, Created Time, SEO URL.",
          ],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description:
        "After completing the data migration process, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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
      description:
        "Finally, we make your Shopify store live by linking it to your domain. We aim to minimize downtime during the final steps, usually scheduling the transition during non business hours to avoid disruption.",
    },
  ],
};

export const salesforceWhyChooseContent = {
  title: "Why Choose Dynamic Dreamz for <br> Salesforce to Shopify Migration Service",
  subtitle:
    "Dynamic Dreamz specializes in helping businesses migrate from<br />Squarespace to Shopify, providing a smooth and secure transition that<br />keeps your business running seamlessly.",
  items: [
    {
      title: "Experienced Team",
      description:
        "Our migration experts have handled multiple migrations from various platforms to Shopify, making us experienced in managing technical factors without disrupting your business operations.",
      icon: "/assets/etsy-to-shopify-migration/expertise-icon.svg",
      iconAlt: "expertise_icon_img",
    },
    {
      title: "Comprehensive Data Migration",
      description:
        "We migrate all your essential data, including products, orders, and customer information, ensuring your new Shopify store is complete and ready to run.",
      icon: "/assets/etsy-to-shopify-migration/comprehensive-data-migration.svg",
      iconAlt: "Comprehensive Data Migration Icon",
    },
    {
      title: "Custom Theme Development",
      description:
        "Whether you want to keep your current design or create a fresh look, we develop custom themes that reflect your brand and improve your store’s functionality.",
      icon: "/assets/shopify-theme-customization/benefits/fully-customizable-store.svg",
      iconAlt: "cs_icon_img",
    },
    {
      title: "Reliable Support",
      description:
        "We give ongoing support after your store goes live, ensuring that any issues are resolved promptly and helping you maximize the potential of your new Shopify store.",
      icon: "/assets/shopify-theme-customization/why-choose/ongoing-support.svg",
      iconAlt: "customer_support_icon_img",
    },
  ],
};

export const salesforceFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why Choose Shopify?",
    answer: "Migrating to Shopify offers multiple advantages, such as:",
    listItems: [
      { label: "Scalability:", text: "Easily manage and expand your business as it grows." },
      { label: "Customization:", text: "Create a unique store that matches your brand’s identity." },
      { label: "User Friendly:", text: "Shopify’s intuitive interface makes managing your store simple." },
      { label: "Support:", text: "Access to extensive customer support and a wide variety of apps." },
    ],
  },
  {
    question: "Will I lose any data during the migration from Salesforce to Shopify?",
    answer:
      "No, we guarantee that all your essential data, such as products, customers, orders, and more, are migrated to Shopify. We perform data validation to confirm that everything is proper during the migration.",
  },
  {
    question: "Can you migrate my customer reviews from Salesforce to Shopify?",
    answer:
      "Yes, we can migrate your customer reviews, including ratings and comments, to Shopify. It can improve your store’s reputation and credibility.",
  },
  {
    question: "What about my Salesforce app integrations?",
    answer:
      "Shopify has a vast app store with many similar apps. If apps identical to your Salesforce apps are unavailable, we will help you find alternatives or create custom solutions to fulfill your requirements.",
  },
  {
    question: "How long does the migration process take?",
    answer:
      "The migration time relies on the size and complexity of your store. However, our team works efficiently to finish the process quickly without sacrificing quality.",
  },
  {
    question: "What challenges might I face during the migration from Salesforce to Shopify?",
    answer:
      "Migrating platforms can involve challenges such as feature differences, layout adjustments, and data formatting. Our team handles these challenges by carefully mapping your data and customizing your Shopify store to fulfill your requirements, providing a smooth transition.",
  },
];
