import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { WooCommerceMigrationIconName } from "@/components/sections/woocommerce-to-shopify/woocommerce-migration-icons";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as woocommerceMigrationSectionCopy } from "@/content/migration-common";

export type WooCommerceBoxItem = {
  iconName: WooCommerceMigrationIconName;
  title: string;
  description: string;
};

export const woocommerceHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "WooCommerce to Shopify Migration Services",
  paragraphs: [
    "Do you need a migration expert for migrating your WooCommerce store to Shopify? Experience the advantages of Shopify’s robust platform to enhance your business growth with Dynamic Dreamz migration services.",
  ],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/woocommerce-to-shopify-migration/woocommerce-shopify-migration-hero.svg",
    alt: "WooCommerce to Shopify Migration Image",
    width: 469,
    height: 224,
  },
  badges: [
    {
      name: "Shopify Platinum Partner",
      src: "/assets/proof/shopify-platinum-partner.svg",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
    },
    {
      name: "Clutch",
      src: "/assets/proof/clutch-rating.svg",
      href: "https://clutch.co/profile/dynamic-dreamz",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      name: "Trustpilot",
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
    },
    {
      name: "Upwork",
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 148,
      height: 40,
    },
  ],
};

export const woocommerceBrandLogos: readonly ClientLogoSliderItem[] = [
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
    src: "/assets/clients/nekter-colored.svg",
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

export const woocommerceWhyMigrateContent = {
  eyebrow: "Why Upgrade",
  heading: "Why Migrate from WooCommerce to Shopify?",
  description:
    "Upgrading your eCommerce store from WooCommerce to Shopify brings numerous advantages. Shopify offers better scalability, enhanced security, a user friendly interface, and a vast range of apps to boost your store’s functionality. Your customers’ shopping experience will be more effective, safe, and scalable if you migrate to Shopify.",
  items: [
    {
      iconName: "simplified-store-management",
      title: "Simplified Store Management",
      description:
        "Shopify provides an intuitive, all-in-one platform that makes managing products, orders, customers, and day-to-day store operations easier and more efficient.",
    },
    {
      iconName: "better-scalability",
      title: "Better Scalability",
      description:
        "Shopify’s robust infrastructure makes it easier to scale your store as your business grows, without worrying about server management, hosting, or technical limitations.",
    },
    {
      iconName: "enhanced-security",
      title: "Enhanced Security & Reliability",
      description:
        "With Shopify handling hosting, security, updates, and infrastructure, you get a secure and reliable ecommerce platform with less technical maintenance.",
    },
    {
      iconName: "higher-performance",
      title: "Higher Performance & Conversion",
      description:
        "Shopify delivers fast, responsive storefronts with a streamlined shopping experience, helping improve customer engagement, reduce friction, and drive more conversions.",
    },
    {
      iconName: "powerful-app-ecosystem",
      title: "Powerful App & Integration Ecosystem",
      description:
        "Shopify offers a vast ecosystem of apps and integrations, making it easy to extend your store’s functionality and connect with marketing, payment, shipping, CRM, and other business tools.",
    },
    {
      iconName: "easier-maintenance",
      title: "Easier Maintenance & Updates",
      description:
        "Unlike WooCommerce, Shopify handles core updates, hosting, security, and infrastructure, reducing technical maintenance and allowing you to focus more on growing your business.",
    },
  ] as readonly WooCommerceBoxItem[],
} as const;

export const woocommerceWhyMigrate = {
  heading: woocommerceWhyMigrateContent.heading,
  text: woocommerceWhyMigrateContent.description,
} as const;

export const woocommerceProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
  heading: "WooCommerce to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "It takes time to migrate, so while your new Shopify store is set up, you must continue operating your WooCommerce store. We offer assistance to guarantee the smooth operation of your WooCommerce store throughout the shift.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We set up a development store for your domain as a Shopify partner so that the data migration process can start. We begin working on the new Shopify design layout simultaneously.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on Shopify",
      description:
        "We build your Shopify store by incorporating the unique design you have approved. Additionally, we set up all the features and apps required to mimic your WooCommerce store’s functionality.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We ensure that all crucial data is accurately transferred from WooCommerce to Shopify. It includes:",
      subBoxes: [
        {
          title: "Products",
          items: [
            "Name",
            "Description",
            "Images",
            "SKU",
            "Price",
            "Product Tags",
            "Manufacturer",
            "Variants",
            "Meta Title",
            "Meta Description",
          ],
        },
        {
          title: "Product Categories",
          items: [
            "Name",
            "Description",
            "Images",
            "Status",
            "Meta Title",
            "Meta Description",
          ],
        },
        {
          title: "Customers",
          items: [
            "First Name",
            "Last Name",
            "Email",
            "Newsletter",
            "Billing Address",
            "Shipping Address",
          ],
        },
        {
          title: "Orders",
          items: [
            "Order Date",
            "Customer Name",
            "Email",
            "Billing Address",
            "Shipping Address",
          ],
        },
        {
          title: "Coupons",
          items: ["Coupon Code", "Coupon Date"],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description:
        "We ensure a complete data migration, allowing you to verify everything on the new platform so you can know what data can be migrated from WooCommerce to Shopify.",
      subBoxes: [
        {
          title: "Functional Validation",
          description: "Checking all business rules and functionalities",
        },
        {
          title: "Data Validation",
          description: "Ensuring all data is accurately transferred",
        },
        {
          title: "Performance Tests",
          description: "Conducting speed tests for optimal load times",
        },
        {
          title: "Go Live Checklist",
          description:
            "Preparing a comprehensive checklist to ensure a smooth transition",
        },
      ],
    },
    {
      stepNumber: "06",
      title: "Go Live",
      description:
        "We change your live domain to the Shopify platform to complete the migration process. Minimal downtime is expected to ensure the slightest disturbance, usually during non business hours.",
    },
  ],
};

export const woocommerceTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const woocommerceFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why Choose Shopify?",
    answer: "Migrating to Shopify offers several benefits:",
    listItems: [
      { label: "Scalability:", text: "Easily manage and grow your business" },
      { label: "Security:", text: "Improved security measures to safeguard your information" },
      { label: "User Friendly:", text: "An intuitive interface that simplifies store management" },
      { label: "Support:", text: "Robust customer support and a vast range of apps to enhance your store" },
    ],
  },
  {
    question: "How long does the migration process take?",
    answer:
      "The time duration varies according to your store’s complexity and size. A typical migration takes two to four weeks. We determine your unique needs and then provide you with a comprehensive timeline.",
  },
  {
    question: "How can I begin the process of migrating?",
    answer:
      "To arrange a consultation, please use the contact form on our website. We’ll discuss your needs, offer a thorough plan, and start the migration procedure.",
  },
  {
    question: "Can I keep my existing payment gateways and shipping methods on Shopify?",
    answer:
      "Shopify offers a large selection of shipping options and payment gateways. To assure continuity, we will set up your new store to use the same or comparable services.",
  },
  {
    question: "Which data can be transferred from Shopify to WooCommerce?",
    answer:
      "Products, clients, orders, categories, reviews, and other crucial data can all be moved. We guarantee the accurate and secure transfer of your vital information.",
  },
  {
    question: "What happens to my existing customer data during the migration?",
    answer:
      "For your customers’ convenience, all customer data—including account information, order history, and contact details—will be safely transferred to Shopify.",
  },
  {
    question: "How do you ensure data accuracy during migration?",
    answer:
      "To ensure data accuracy, we utilize both manual checks and sophisticated tools. Our knowledgeable team broadly tests the migrated store to guarantee that all data is accurate and undamaged.",
  },
  {
    question: "Can you migrate custom functionalities and design elements?",
    answer:
      "Yes, we can replicate custom features and aesthetic components within Shopify. Our team uses Shopify’s features to replicate the style and feel of your WooCommerce store.",
  },
  {
    question: "What if I have custom plugins and extensions on my WooCommerce store?",
    answer:
      "We will locate comparable Shopify apps and extensions or develop custom apps to duplicate your WooCommerce plugins’ functionality.",
  },
  {
    question: "How will you handle the migration of digital products and downloadable content?",
    answer:
      "We ensure that all downloadable content and digital products are transferred to Shopify accurately, allowing your customers to continue uninterrupted use.",
  },
  {
    question: "What about SEO and URLs? Will they be affected?",
    answer:
      "Because we take SEO seriously, we ensure that meta tags, URLs, and other SEO components are kept intact. To avoid broken links and preserve search engine rankings, we use 301 redirects.",
  },
  {
    question: "Do you provide support after migration?",
    answer:
      "Yes, we provide post migration assistance to handle any problems that may occur. Our team is here to help with any inquiries you may have and to make sure everything about your Shopify store works appropriately.",
  },
  {
    question: "How much does the migration service cost?",
    answer:
      "Your store’s complexity and size determine the price. We assess your unique requirements and then provide you with a personalized quote. There are no additional costs; our pricing is clear cut.",
  },
];
