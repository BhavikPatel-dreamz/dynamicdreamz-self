import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";

export const prestashopHeroContent: ServiceHeroContent = {
  title: "PrestaShop to Shopify Migration",
  description:
    "Are you looking for the best eCommerce platform that is better than PrestaShop? Shopify is perfect for your business, and our PrestaShop to Shopify migration service is your best choice. Our team can smoothly migrate your existing PrestaShop store to the Shopify store with minimal downtime.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/prestashop-to-shopify-migration/prestashop-to-shopify-migration-hero.svg",
    alt: "PrestaShop to Shopify Migration Image",
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

export const prestashopBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const prestashopWhyMigrate = {
  heading: "Why Migrate from PrestaShop to Shopify?",
  text: "Shopify is ranked among the top eCommerce platforms. Its top rank is because of its easy customization, large app store, advanced features, and scalability. Migrating from PrestaShop to Shopify can enhance your business and boost your sales. Shopify is known for its user friendly interface and more robust security.",
} as const;

export const prestashopBenefitsContent: ProofSectionContent = {
  heading: "Benefits of Moving from <br> PrestaShop to Shopify",
  description:
    "If you want to grow your business, switching from PrestaShop to Shopify is the best option for your business growth. Shopify’s features are designed to streamline store management while enhancing your online presence.",
  items: [
    {
      title: "User Friendly Interface",
      description:
        "Shopify's user friendly interface makes it easy to use for beginners and non technical users. Business and store owners can manage their stores, add products, and track orders better than the PrestaShop store.",
      icon: "/assets/shopify-theme-customization/benefits/improved-user-experience.svg",
      iconAlt: "user-friendly-interface-icon",
    },
    {
      title: "Better Customization Options",
      description:
        "Shopify provides more flexibility with custom themes, allowing you to fully personalize your store's look and functionality according to your brand's needs.",
      icon: "/assets/prestashop-to-shopify-migration/benefits/better-customization-options.svg",
      iconAlt: "",
    },
    {
      title: "App Integrations",
      description:
        "Shopify's app store has a vast collection of apps that help enhance your store's features, offering tools for marketing, inventory management, customer service, and more.",
      icon: "/assets/shopify-theme-customization/benefits/multiple-third-party-apps.svg",
      iconAlt: "Multiple Sales Channels Icon",
    },
    {
      title: "Enhanced Security",
      description:
        "Shopify ensures your store's security by providing SSL certificates and PCI compliance. Shopify prioritizes protecting your data and customers' data.",
      icon: "/assets/prestashop-to-shopify-migration/benefits/enhanced-security.svg",
      iconAlt: "Enhanced Security Icon",
    },
    {
      title: "Scalable Solutions",
      description:
        "Shopify can grow with your business, allowing you to add more products, handle more traffic, and integrate advanced tools as your business expands.",
      icon: "/assets/shopify-theme-customization/benefits/higher-conversion-rates.svg",
      iconAlt: "cost-effective-scalability-img",
    },
  ],
};

export const prestashopConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before <br> PrestaShop to Shopify Migration",
  description:
    "Migrating from PrestaShop to Shopify is a significant step, and proper planning is necessary for a smooth migration. Here are vital things to consider before starting the migration process.",
  centerImage: {
    src: "/assets/prestashop-to-shopify-migration/considerations/prestashop-illustration.svg",
    alt: "Presta Shop image",
    width: 380,
    height: 380,
  },
  leftItems: [
    {
      title: "Data Mapping",
      description:
        "Ensure that all data from your PrestaShop store—like products, customer information, and order history—is correctly mapped for a seamless migration to Shopify.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/data-mapping.svg",
      iconAlt: "Data Mapping icon",
    },
    {
      title: "Design Preferences",
      description:
        "Before migration, you have to decide whether you want your current theme or need a new theme to enhance your store with Shopify's customization features.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/design-preferences.svg",
      iconAlt: "Design Preferences Icon",
    },
  ],
  rightItems: [
    {
      title: "SEO Considerations",
      description:
        "Meta titles, descriptions, and URLs are reviewed and updated during the migration to retain your current search engine rankings.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/seo-considerations.svg",
      iconAlt: "SEO Considerations Icon",
    },
    {
      title: "Payment and Shipping",
      description:
        "Check your current PrestaShop store settings to ensure that the same or better payment gateways and shipping options. Shopify has multiple payment gateways and shipping options for your needs.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg",
      iconAlt: "IPayment and Shipping Options Icon",
    },
  ],
};

export const prestashopProcessContent: MigrationProcessContent = {
  heading: "PrestaShop to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "We know very well that if the store remains closed even for an hour, your business can suffer a considerable loss. Our expert can assure you that your PrestaShop store will effortlessly run while we develop your new Shopify store.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We are a Shopify partner, so we can create a development store on Shopify under your domain and configure the basic settings. Then, our team will start designing your new Shopify store layout, ensuring it matches your brand’s identity.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description:
        "Our Shopify developers are experts in custom Shopify themes. We create a custom Shopify theme, or if you have a pre designed template, we integrate it into your store to suit your brand. We make sure that your new Shopify store matches your PrestaShop store’s functionality so that we can add all the necessary features and apps.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully migrate all of your necessary data from PrestaShop to Shopify. Here is a list of what data transfer to your new store:",
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
        "After completing the PrestaShop to Shopify Migration, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const prestashopWhyChooseContent: ProofSectionContent = {
  heading: "Why Choose Dynamic Dreamz for <br> PrestaShop to Shopify Migration",
  description:
    "Dynamic Dreamz is an expert in PrestaShop to Shopify migrations, providing a reliable and efficient service that makes your migration as smooth as possible.",
  items: [
    {
      title: "Expert Migration Team",
      description:
        "Our trained team has successfully migrated countless PrestaShop stores to Shopify, managing every technical detail with care and precision.",
      icon: "/assets/services/bigcommerce-development/advantages/expertise-in-custom-development.svg",
      iconAlt: "expertise_icon",
    },
    {
      title: "Custom Shopify Themes",
      description:
        "If you need a fresh and new feel for your Shopify store, we develop custom Shopify themes based on your brand needs.",
      icon: "/assets/prestashop-to-shopify-migration/why-choose/custom-shopify-themes.svg",
      iconAlt: "Customizable Shopify Solutions Icon",
    },
    {
      title: "Smooth Data Transfer",
      description:
        "We ensure that all essential data, including products, customer details, and orders, are transferred accurately without any data loss.",
      icon: "/assets/prestashop-to-shopify-migration/why-choose/smooth-data-transfer.svg",
      iconAlt: "Encrypted Data Transfer Icon",
    },
    {
      title: "Minimal Downtime",
      description:
        "We migrate your store with proper planning and carefully take every step so your migration process will completed with minimal downtime.",
      icon: "/assets/services/bigcommerce-development/advantages/timely-delivery.svg",
      iconAlt: "",
    },
    {
      title: "Post Migration Support",
      description:
        "We also provide post migration support for your adjustments, additional features, or technical questions you may have.",
      icon: "/assets/services/bigcommerce-development/advantages/transparent-communication.svg",
      iconAlt: "transparent-com-icon",
    },
  ],
};

export const prestashopFaqs: readonly FaqAccordionItem[] = [
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
    question: "What challenges might I face during the migration from PrestaShop to Shopify?",
    answer:
      "The challenges you might face during the migration process include layout adjustments, platform features, and data formatting differences. Our team addresses these challenges by carefully mapping your data and customizing your Shopify store to meet your specific requirements, assuring a smooth transition.",
  },
  {
    question: "Can I migrate my customer reviews and ratings from PrestaShop to Shopify?",
    answer:
      "Yes, of course! We can transfer your PrestaShop store’s customer reviews and ratings to the Shopify store. We make sure all your reviews and their details are accurately migrated. Review details like ratings, comments, and dates. It helps you sustain your store’s credibility and trust with your customers.",
  },
  {
    question: "Will I lose my existing customer and order data during the migration?",
    answer:
      "No, not at all. We take extra care when we are migrating your customer and order data. Our process contains complete data validation checks to confirm no information is lost during migration.",
  },
  {
    question: "How will the migration affect my store's loading speed and performance?",
    answer:
      "PrestaShop to Shopify Migration often enhances store performance due to Shopify’s robust infrastructure and optimized hosting. Our team will also conduct performance testing to ensure your new Shopify store loads quickly and functions appropriately.",
  },
  {
    question: "Can I continue to use the same apps and integrations from PrestaShop on Shopify?",
    answer:
      "Shopify has its app store, which has many similar apps and integrations available if your current PrestaShop apps are unavailable on the Shopify app store. We will help you find similar apps or develop custom apps to match your requirements.",
  },
  {
    question: "How will you handle my store's tax and currency settings during the migration?",
    answer:
      "Shopify supports multiple tax settings and currencies. During the migration, we configure your store to match your existing tax rules and preferred currencies, ensuring compliance with your business requirements.",
  },
  {
    question: "Can you integrate my Shopify store with other platforms I currently use?",
    answer:
      "Shopify supports integrations with numerous platforms, including ERP systems, CRM tools, and marketing software. We will help you to integrate into your new Shopify store.",
  },
  {
    question: "Will my store be mobile friendly after PrestaShop to Shopify Migration?",
    answer:
      "Yes, all Shopify themes are responsive and mobile friendly. We ensure that your new Shopify store is optimized for mobile devices, providing a great shopping experience for customers on any device.",
  },
];
