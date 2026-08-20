import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { TwoColCenterImageContent } from "@/components/sections/two-col-center-image-section";

export const ecwidHeroContent: ServiceHeroContent = {
  title: "Ecwid to Shopify Migration Service",
  description:
    "Take sales booster advantages of the eCommerce platform by migrating Ecwid to Shopify. Dynamic Dreamz provides the best Ecwid to Shopify migration service in the industry. Hire a Shopify migration expert from Dynamic Dreamz today for smooth store migration with a continuously running business.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/ecwid-to-shopify-migration/ecwid-to-shopify-migration-hero.svg",
    alt: "Ecwid to Shopify Migration Service Image",
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

export const ecwidBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const ecwidWhyMigrate = {
  heading: "Why do Ecwid to Shopify Migration?",
  text: "The answer is simple: Shopify is one of the leading eCommerce platforms. That helps you grow your business without doing technical things. Ecwid to Shopify Migration can take your business to the next level because Shopify has impressive features like a drag and drop builder, an easy to use interface, a straightforward dashboard, advanced features, robust security, scalability, and, most importantly, a vast app store for expanding the functionality of your Shopify store.",
} as const;

export const ecwidBenefitsContent: ProofSectionContent = {
  heading: "Benefits of Moving from <br> Ecwid to Shopify",
  description:
    "Migrating from Ecwid to Shopify opens various opportunities for your<br>online business. Here are some of the essential benefits of migrating<br>Ecwid to Shopify:",
  items: [
    {
      title: "User Friendly Platform",
      description:
        "Shopify is easier to use than Ecwid. Its simple design lets you manage your store without requiring technical skills. You can easily add products, track orders, and handle your store's backend.",
      icon: "/assets/ecwid-to-shopify-migration/user-friendly-platform.svg",
      iconAlt: "User-Friendly Platform Icon",
    },
    {
      title: "More Customization Options",
      description:
        "Shopify is better than Eciwd in terms of customization options. Shopify offers dedicated apps and theme stores to customize your Shopify store. It can help you customize your design and functionality.",
      icon: "/assets/prestashop-to-shopify-migration/benefits/better-customization-options.svg",
      iconAlt: "",
    },
    {
      title: "Access to Shopify's App Store",
      description:
        "Shopify offers a free app store to every store owner. Shopify app store has thousands of apps that can help you with marketing, inventory management, and customer service, so you can quickly expand your store's functionality.",
      icon: "/assets/etsy-to-shopify-migration/access-shopify-store.svg",
      iconAlt: "Access to Shopify's App Store Icon",
    },
    {
      title: "Scalability and Growth",
      description:
        "Shopify can easily manage the traffic and sales of your expanded business without any hassle. Its scalability ensures that your Shopify store will perform well even with more products, orders, or customers.",
      icon: "/assets/ecwid-to-shopify-migration/scalability-growth.svg",
      iconAlt: "Scalability and Growth icon",
    },
    {
      title: "Built In Payment and Security Features",
      description:
        "Shopify provides multiple secure payment gateways to make transactions smoother for your customers. Shopify ensures your store's security, so you don't have to worry about data breaches or vulnerabilities.",
      icon: "/assets/ecwid-to-shopify-migration/security-features.svg",
      iconAlt: "Built-In Payment and Security Features Icon",
    },
  ],
};

export const ecwidConsiderationsContent: TwoColCenterImageContent = {
  heading: "Things to Consider Before Migrate<br> from Ecwid to Shopify",
  description: "",
  centerImage: {
    src: "/assets/ecwid-to-shopify-migration/ecwid.svg",
    alt: "Ecwid image",
    width: 326,
    height: 489,
  },
  leftItems: [
    {
      title: "Data Migration and Cleanup",
      description:
        "Before Ecwid to Shopify migration, you must clean up your existing data Ecwid, which contains unwanted data, remove outdated products, and remove incorrect customer information. Clean and neat data ensures a faster and more accurate migration from Ecwid to Shopify.",
      icon: "/assets/ecwid-to-shopify-migration/data-migration.svg",
      iconAlt: "Data Mapping and Cleanup icon",
    },
    {
      title: "Feature Differences",
      description:
        "Some Ecwid features might be absent when you migrate to Shopify. But don't worry; the Shopify app store can help you with its vast collection of Shopify apps. You can list the features you rely on in Ecwid and check availability on Shopify.",
      icon: "/assets/ecwid-to-shopify-migration/feature-differences.svg",
      iconAlt: "Feature Differences Icon",
    },
  ],
  rightItems: [
    {
      title: "Theme and Design Considerations",
      description:
        "It is crucial to decide whether you want to redesign your store or want your existing store's look of Ecwid. Shopify allows you to create a custom theme or choose from various pre designed themes.",
      icon: "/assets/ecwid-to-shopify-migration/theme-design.svg",
      iconAlt: "Theme and Design Considerations Icon",
    },
    {
      title: "Integration with Third Party Apps",
      description:
        "As Shopify and Ecwid are both different platforms, it is evident that some Ecwid apps do not match with Shopify apps. So before migration, you must find suitable Shopify apps to maintain your store's functionality.",
      icon: "/assets/prestashop-to-shopify-migration/considerations/payment-and-shipping.svg",
      iconAlt: "Integration with Third-Party Apps Icon",
    },
  ],
};

export const ecwidProcessContent: MigrationProcessContent = {
  heading: "Ecwid to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "An active store is crucial for every business. We ensure your Ecwid store remains fully operational while setting up your new Shopify store. Our experts ensure that your store migrates to Shopify with minimal downtime.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "We set up a Shopify development store under your domain on Shopify. It allows us to design your new Shopify store to match your business brand’s identity.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description:
        "We can create a custom Shopify theme to match your old Ecwid store’s looks and feel. But if you want a new look for your new store, we can make a theme from scratch per your requirements or integrate a ready made theme.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We handle the migration of all essential data from Ecwid to Shopify with precision. Here’s what we transfer to your new store:",
      categories: [
        {
          title: "Products",
          items: [
            "Name, SKU, Description, Status, Price, Meta Title, Meta Description, Weight, Product Tags, Variants, Image, Quantity, and Manage Stock.",
          ],
        },
        {
          title: "Product Categories",
          items: ["Name, Description, Image, Meta Title, and Meta Description."],
        },
        {
          title: "Customers",
          items: [
            "First Name, Last Name, Email, Passwords, Billing Address, and Shipping Address.",
          ],
        },
        {
          title: "Orders",
          items: [
            "ID, Order Date, Order Status, Customer Information, Product Price, Quantity, Discount Price, Tax Price, Total Price, and Sub Total Price.",
          ],
        },
        {
          title: "Other Data",
          items: [
            "Coupons, Reviews, CMS pages, Multiple Languages, Manufacturer, and Tax.",
          ],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the Site",
      description:
        "After completing the Ecwid to Shopify migration, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const ecwidFaqs: readonly FaqAccordionItem[] = [
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
    question: "Can I keep my current domain name when migrating from Ecwid to Shopify?",
    answer:
      "Yes, you can use your existing domain name when Ecwid to Shopify migration. We’ll help you set up your domain on Shopify so that your customers can continue to find you at the same web address.",
  },
  {
    question: "Will the migration have an impact on my SEO rankings?",
    answer:
      "We make sure your SEO settings are maintained during the migration process. Our team will set up redirects and ensure all your key SEO elements, like meta tags, URLs, and content, are adequately migrated to help maintain your search engine rankings.",
  },
  {
    question: "How can data security be guaranteed throughout the migrating process?",
    answer:
      "We prioritize protecting your data while the migration process is running. Our migration experts follow strict protocols, including using secure connections and backup systems, to ensure that all data is safely migrated without any risks of breaches.",
  },
  {
    question: "Can I add new features to my Shopify store during the migration?",
    answer:
      "Yes, this is a perfect opportunity to enhance your store! During the Ecwid to Shopify Migration, we can add new features, apps, and functionalities that are unavailable on your Ecwid store to optimize your Shopify store according to your business needs.",
  },
  {
    question: "What happens if, once the migration is finished, I need changes?",
    answer:
      "We offer post migration support to manage any modifications or adjustments you require after your new Shopify store goes live, ensuring everything continues to run smoothly.",
  },
];
