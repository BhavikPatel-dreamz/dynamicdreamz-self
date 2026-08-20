import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";

export const squarespaceHeroContent: ServiceHeroContent = {
  title: "Squarespace to Shopify Migration",
  description:
    "Want more growth and sales for your business? Squarespace to Shopify Migration can achieve the new height of a successful business. Hire a migration expert from Dynamic Dreamz. Our expert can effortlessly migrate your Squarespace store into the Shopify store.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/squarespace-to-shopify-migration/squarespace-shopify-migration-hero.svg",
    alt: "Squarespace to Shopify Migration Image",
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

export const squarespaceBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const squarespaceWhyMigrate = {
  heading: "Why do Squarespace to Shopify Migration?",
  text: "Migrating to Shopify can provide you with many advanced features and functionalities. Shopify is the best for those who want an eCommerce platform with robust security measures, advanced features, and the ability to expand its capabilities. Shopify is your one-stop shop for your expanding business. Migrate now to witness the power of Shopify.",
} as const;

export const squarespaceBenefitsContent: ProofSectionContent = {
  heading: "Benefits of Moving from <br> Squarespace to Shopify",
  description:
    "Switching from Squarespace to Shopify extends various opportunities<br />for your online business. Here are some of the fundamental<br />advantages of migrating Squarespace to Shopify:",
  items: [
    {
      title: "Enhanced eCommerce Features",
      description:
        "Shopify is specially developed for eCommerce with advanced tools for stock management, taxes, customer management, and shipping, making it ideal for growing online stores.",
      icon: "/assets/squarespace-to-shopify-migration/ecommerce-features.svg",
      iconAlt: "",
    },
    {
      title: "Robust App Store",
      description:
        "Shopify has thousands of apps to improve your store's functionality. Whether it's customer service, analytics, or marketing, you can add new features to your store effortlessly.",
      icon: "/assets/squarespace-to-shopify-migration/robust-app-store.svg",
      iconAlt: "",
    },
    {
      title: "Better Payment Options",
      description:
        "With over 100 payment gateways, Shopify offers your customers more safe and secure payment alternatives. International sales and multi currency support are also supported.",
      icon: "/assets/squarespace-to-shopify-migration/payment-options.svg",
      iconAlt: "",
    },
    {
      title: "Scalability",
      description:
        "As your business develops, Shopify evolves with you. It offers flexible plans, scalability, and powerful servers, letting you tolerate a high volume of traffic and sales without any problems.",
      icon: "/assets/squarespace-to-shopify-migration/scalability.svg",
      iconAlt: "",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Shopify provides round the clock customer support via live chat, email, and phone, ensuring you always have help when required.",
      icon: "/assets/squarespace-to-shopify-migration/customer-support.svg",
      iconAlt: "",
    },
  ],
};

export const squarespaceConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before Migrate <br> from Squarespace to Shopify",
  description:
    "In order to guarantee a smooth Squarespace to Shopify Migration, <br> there are a few fundamental factors to consider. Preparation is key to <br> avoiding data loss and downtime.",
  centerImage: {
    src: "/assets/squarespace-to-shopify-migration/squarespace.svg",
    alt: "Square Space Image",
    width: 326,
    height: 489,
  },
  leftItems: [
    {
      title: "SEO Impact",
      description:
        "Review your SEO settings, like meta titles, descriptions, and URLs on Squarespace store. During migration, we confirm that these are properly transferred or redirected to maintain your search engine rankings.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/seo-considerations.svg",
      iconAlt: "SEO Impact icon",
    },
    {
      title: "Store Design",
      description:
        "It's upto you. Do you need the same design for your store or want to take the opportunity to refresh your store look with a custom Shopify theme that better suits your brand?",
      icon: "/assets/wix-to-shopify-migration/apps-ntegrations-img.svg",
      iconAlt: "Feature Compatibility Icon",
    },
  ],
  rightItems: [
    {
      title: "Apps & Integrations",
      description:
        "As we know, Shopify and Squarespace are both different platforms, so some features on Squarespace do not directly move to Shopify. Look for alternative apps and integrations to maintain equal functionality in the Shopify store.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/design-preferences.svg",
      iconAlt: "Store Design Icon",
    },
    {
      title: "Payment & Shipping Settings",
      description:
        "Before migration, check your current payment and shipping options. Shopify offers multiple integrations, so pick the options that are compatible with Shopify’s system.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg",
      iconAlt: "Payment & Shipping Settings Icon",
    },
  ],
};

export const squarespaceProcessContent: MigrationProcessContent = {
  heading: "Squarespace to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "During the migration from Squarespace to Shopify, your store must remain operational to prevent potential sales loss. Our dedicated migration team ensures that your Squarespace store stays fully functional. We have also set up your new Shopify store so your business can continue without interruption.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We create a development store on Shopify for your domain to start the migration process. So we can design and set up your new Shopify store until we conduct the data migration, ensuring a smooth and efficient transition.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description:
        "With your permission, we designed a unique theme and installed it in your brand new Shopify store. We integrate apps and features to match the functionality of your old store.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully transfer all critical data from Squarespace to Shopify. Here’s what we migrate to your new store:",
      categories: [
        {
          title: "Products",
          items: [
            "SKU, Meta Description, Price, Manage Stock, Full Description, Name, Stock Status, Additional Images, Manufacturer, Quantity, Product Tags, Metafields, Weight, Barcode, Special Price, Status, and Meta Title.",
          ],
        },
        {
          title: "Product Categories",
          items: ["Meta Title, Meta Description, Name, Image, and Description."],
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
          title: "Coupons",
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

export const squarespaceWhatAfterContent = {
  title: "What After Squarespace to <br> Shopify Migration",
  subtitle:
    "Once your migration from Squarespace to Shopify is finished, there<br />are some important tasks to handle to ensure your store is fully<br />functional and optimized.",
  items: [
    {
      title: "SEO Redirects",
      description:
        "We set up 301 redirects to guide old Squarespace URLs to their new Shopify store. It helps preserve your SEO rankings and ensures a smooth user experience.",
      icon: "/assets/etsy-to-shopify-migration/seo-redirects.svg",
      iconAlt: "seo-redirects-img",
    },
    {
      title: "App Integration",
      description:
        "Install the required Shopify apps to achieve your Squarespace store’s features. Shopify’s app store has a wide range of apps that can enhance your store’s functionality and efficiency.",
      icon: "/assets/wix-to-shopify-migration/app-integration-fill-icon.svg",
      iconAlt: "",
    },
    {
      title: "Store Testing",
      description:
        "We verify that all products, customer data, and orders are migrated correctly. Test all elements of your store, from checkout processes to customer accounts, to make sure everything runs smoothly on Shopify.",
      icon: "/assets/wix-to-shopify-migration/testing-img.svg",
      iconAlt: "testing-img",
    },
    {
      title: "Performance Optimization",
      description:
        "We run speed tests and optimize your store’s loading time, confirming that your customers enjoy a quick and seamless browsing experience.",
      icon: "/assets/etsy-to-shopify-migration/performance-optimization.svg",
      iconAlt: "",
    },
  ],
};

export const squarespaceWhyChooseContent = {
  title: "Why Choose Dynamic Dreamz for <br> Squarespace to Shopify Migration Service",
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
      icon: "/assets/shopify-theme-customization/benefits/fully-customizable-store.svg",
      iconAlt: "cs_icon_img",
    },
    {
      title: "Custom Theme Development",
      description:
        "Whether you want to keep your current design or create a fresh look, we develop custom themes that reflect your brand and improve your store’s functionality.",
      icon: "/assets/shopify-theme-customization/why-choose/ongoing-support.svg",
      iconAlt: "customer_support_icon_img",
    },
    {
      title: "Reliable Support",
      description:
        "We give ongoing support after your store goes live, ensuring that any issues are resolved promptly and helping you maximize the potential of your new Shopify store.",
      icon: "/assets/squarespace-to-shopify-migration/minimal-downtime.svg",
      iconAlt: "minimal-downtime-icon-img",
    },
  ],
};

export const squarespaceFaqs: readonly FaqAccordionItem[] = [
  {
    question: "How long does the Squarespace migration process take?",
    answer:
      "The time it takes to migrate your Squarespace store varies depending on its size and complexity. Typically, the process takes a few weeks.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer:
      "We aim to keep downtime to a minimum and schedule it during off peak hours. So your store remains available to customers as much as possible.",
  },
  {
    question: "Can you replicate my Squarespace store's design on Shopify?",
    answer:
      "Yes, we can recreate your Squarespace design on Shopify or help you select a new design that suits your brand and business objectives.",
  },
  {
    question: "What happens to my existing SEO settings and URLs during migration?",
    answer:
      "We take special care to keep your SEO settings, such as meta titles, meta descriptions, and URLs. If required, we implement 301 redirects to ensure that your existing SEO rankings and search engine visibility are not adversely affected during the migration.",
  },
  {
    question: "Can I keep my existing payment and shipping settings from Squarespace on Shopify?",
    answer:
      "Yes, we help you configure similar payment gateways and shipping options on your new Shopify store. While Shopify has its own set of integrations, we strive to closely match your current setup or suggest equivalent options available on Shopify.",
  },
  {
    question: "Will my existing Squarespace apps and extensions work on Shopify?",
    answer:
      "Apps and extensions from Squarespace are not directly compatible with Shopify. However, we can identify and set up similar apps on Shopify that offer the same or enhanced functionality. Our team will recommend the best alternatives to ensure your store runs smoothly on Shopify.",
  },
  {
    question: "Which types of data are transferable between Squarespace and Shopify?",
    answer:
      "We can transfer your products, categories, customers, orders, content pages, and more, ensuring a smooth migration to your new Shopify store.",
  },
];
