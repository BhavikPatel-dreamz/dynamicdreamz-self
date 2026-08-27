import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as etsyMigrationSectionCopy } from "@/content/migration-common";

export const etsyTestimonials = {
  eyebrow: "Client Stories",
  items: shopifyPlusAgencyTestimonials.items.slice(5),
  controlsLabels: {
    ariaLabel: "Etsy to Shopify migration client video testimonials",
    previous: "Show previous client testimonial",
    next: "Show next client testimonial",
  },
} as const;

export const etsyHeroContent: ServiceHeroContent = {
  title: "Etsy to Shopify Migration",
  description:
    "Are you considering migrating from your Etsy store to Shopify but want to know about the process? Dynamic Dreamz offers seamless Etsy to Shopify migration services that can help you enhance your business growth and use Shopify’s powerful platform to its full potential. Our team will guide you through every step, making the transition smooth and stress free.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/etsy-to-shopify-migration/etsy-to-shopify-migration-hero.svg",
    alt: "Etsy to Shopify Migration Image",
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

export const etsyBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const etsyWhyMigrate = {
  heading: "Why Migrate from Etsy to Shopify?",
  text: "Shopify is the top most eCommerce platform and is used globally. Shopify can offer many benefits to take your business to the next level. Better customization, advanced features, enhanced scalability, and a big Shopify app store are benefits Shopify provides and improve your store's functionality.",
} as const;

export const etsyBenefitsContent: ProofSectionContent = {
  heading: "Benefits of Moving from <br> Etsy to Shopify",
  description: "Migrating from Etsy to Shopify can unlock new and unique<br>possibilities for your business. Here are the top advantages:",
  items: [
    {
      title: "Greater Control Over Your Store",
      description: "Shopify allows you to fully customize your store's layout, design, and features, but Etsy offers fewer customization options.",
      icon: "/assets/etsy-to-shopify-migration/greater-control.svg",
      iconAlt: "Greater Control Over Your Store Icon",
    },
    {
      title: "Scalability for Growth",
      description: "Shopify can scale with your business, whether you are a small one or a bigger one. Shopify manages it effortlessly.",
      icon: "/assets/etsy-to-shopify-migration/scalability-growth.svg",
      iconAlt: "Scalability for Growth Icon",
    },
    {
      title: "Multiple Sales Channels",
      description: "Shopify allows you to integrate numerous sales channels, including marketplaces, social media platforms, and physical stores, growing your reach beyond Etsy.",
      icon: "/assets/shopify-theme-customization/benefits/multiple-third-party-apps.svg",
      iconAlt: "Multiple Sales Channels Icon",
    },
    {
      title: "Access to Shopify Apps",
      description: "The Shopify app store has thousands of apps to help you add new features, such as abandoned cart recovery, advanced reporting, and marketing automation.",
      icon: "/assets/etsy-to-shopify-migration/access-shopify-store.svg",
      iconAlt: "Access to Shopify's App Store Icon",
    },
    {
      title: "SEO and Marketing Tools",
      description: "Shopify contains built-in SEO and marketing tools to help increase your store's visibility, letting you reach a wider audience.",
      icon: "/assets/services/bigcommerce-development/why-choose/seo-friendly.svg",
      iconAlt: "SEO and Marketing Tools Icon",
    },
  ],
};

export const etsyConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before Etsy to <br> Shopify Migration",
  description: "Before migrating from Etsy to Shopify, several factors should be <br> considered to ensure a smooth transition. Planning these elements <br> helps prevent issues later.",
  centerImage: {
    src: "/assets/etsy-to-shopify-migration/etsy.svg",
    alt: "Etsy image",
    width: 326,
    height: 489,
  },
  leftItems: [
    {
      title: "Data Transfer",
      description: "Recognize the crucial data that should be migrated from your Etsy store to your Shopify store. Carefully examine the data you want to migrate, such as products, customer information, and order history.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/data-mapping.svg",
      iconAlt: "Data Transfer icon",
    },
    {
      title: "Store Design",
      description: "Decide whether you want a new custom theme for your store or want to use the current store's look. Shopify offers plenty of configuration flexibility, so now is a good time to refresh your brand with a custom theme design.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/design-preferences.svg",
      iconAlt: "Store Designs Icon",
    },
  ],
  rightItems: [
    {
      title: "SEO Settings",
      description: "For safety, back up your Etsy store's SEO settings, such as product titles and descriptions. We will surely finish your migration by maintaining the store's search engine rankings without fail.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/seo-considerations.svg",
      iconAlt: "SEO Settings Icon",
    },
    {
      title: "Payment and Shipping Options",
      description: "Both platforms offer different payment and shipping integrations. Check Shopify's integrations and choose according to your store's needs to match your Etsy store.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg",
      iconAlt: "IPayment and Shipping Options Icon",
    },
  ],
};

export const etsyProcessContent: MigrationProcessContent = {
  heading: "Etsy to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "If you don't want to lose your potential customers, keeping your Etsy shop active during the migration is essential. Our Shopify migration experts ensure your Etsy store stays running until your new Shopify store is set up.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We develop a development store on Shopify under your domain. Then, we will configure your new Shopify store while the migration progresses.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description:
        "To achieve the functionalities of your current Etsy store on Shopify, we integrate a custom theme and necessary apps and features. We get your approval for the design before we start working on a custom theme.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully migrate all of your necessary data from Etsy to Shopify. Here is a list of what data transfer to your new store:",
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

export const etsyWhatAfterContent = {
  title: "What After Etsy to Shopify Migration",
  subtitle: "Once your Etsy store has been successfully migrated to Shopify,<br>essential tasks will help you get the most out of your new platform.",
  items: [
    {
      title: "Optimize Your Store",
      description: "We will help you make your store look better, work better, and have more features after the migration. We ensure everything is ready to go, whether adding more apps or changing your style.",
      icon: "/assets/etsy-to-shopify-migration/optimize-store.svg",
      iconAlt: "Optimize Your Store Icon",
    },
    {
      title: "Update SEO Settings",
      description: "While we transfer your SEO data, you should check and change your meta tags, descriptions, and URLs to ensure they are optimized for Shopify.",
      icon: "/assets/etsy-to-shopify-migration/seo-redirects.svg",
      iconAlt: "seo-redirects-img",
    },
    {
      title: "Marketing Integration",
      description: "Shopify has excellent tools for promotions, email marketing, and social media efforts. Start integrating these features to draw more customers.",
      icon: "/assets/etsy-to-shopify-migration/marketing-integration.svg",
      iconAlt: "Marketing Integration Icon",
    },
    {
      title: "Monitor Store Performance",
      description: "After migration, you must observe your store's performance, such as loading speed and how customers feel about shopping there. We'll help you keep your Shopify store running smoothly.",
      icon: "/assets/etsy-to-shopify-migration/performance-optimization.svg",
      iconAlt: "Performance optimization image",
    },
  ],
};

export const etsyWhyChooseContent = {
  title: "Why Choose Dynamic Dreamz for Etsy to <br> Shopify Migration Service",
  subtitle: "Dynamic Dreamz has years of experience in migrating stores to Shopify,<br>delivering a smooth and efficient process from start to finish.",
  items: [
    {
      title: "Skilled Migration Experts",
      description: "Our qualified team handles the migration’s technical factors while confirming your store remains functional, letting you focus on running your business.",
      icon: "/assets/etsy-to-shopify-migration/expertise-icon.svg",
      iconAlt: "expertise_icon_img",
    },
    {
      title: "Complete Data Transfer",
      description: "We ensure a full migration, accurately moving all essential data, such as products, orders, and customer details.",
      icon: "/assets/etsy-to-shopify-migration/comprehensive-data-migration.svg",
      iconAlt: "Comprehensive Data Migration Icon",
    },
    {
      title: "Custom Shopify Themes",
      description: "We can help you ensure that your new Shopify store fits in with your brand, whether you want to keep the theme you used on Etsy or want a new custom theme.",
      icon: "/assets/shopify-theme-customization/benefits/fully-customizable-store.svg",
      iconAlt: "cs_icon_img",
    },
    {
      title: "Ongoing Support",
      description: "We are not stopping successful migration; we will also provide ongoing support.",
      icon: "/assets/shopify-theme-customization/why-choose/ongoing-support.svg",
      iconAlt: "customer_support_icon_img",
    },
  ],
};

export const etsyFaqs: readonly FaqAccordionItem[] = [
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
    question: "How long does the migration process take?",
    answer:
      "The time duration is based on the length and complexity of your Etsy shop. Generally, the Etsy to Shopify migration process takes two to four weeks, including testing and final adjustments.",
  },
  {
    question: "How can I start the migration process?",
    answer:
      "You can contact us using our website and schedule a call. We will analyze your project requirements, provide a detailed plan, and start your store’s migration process.",
  },
  {
    question: "Can I keep my existing payment and shipping settings on Shopify?",
    answer:
      "Shopify has multiple types of payment gateways and shipping options. We create a new store to use the same or similar payment gateways to ensure a smooth transition.",
  },
  {
    question: "What happens to my existing SEO settings during migration?",
    answer:
      "We try to preserve your current SEO settings, such as product titles, descriptions, and URLs. We also implement 301 redirects if necessary to keep your SEO rankings intact.",
  },
  {
    question: "Will my store experience downtime during the migration?",
    answer:
      "We work hard to minimize downtime, planning the last steps during off peak hours. Your Etsy shop will remain active until your new Shopify store is fully set up.",
  },
  {
    question: "Can you replicate my Etsy store's design on Shopify?",
    answer:
      "Yes, we can replicate the design of your Etsy store using a custom theme or a ready made theme that matches your brand and business goals.",
  },
  {
    question: "Do you provide support after the migration?",
    answer:
      "Of course, we provide support after the migration. Whether you need adjustments or additional features or have questions, our team is here to help.",
  },
];
