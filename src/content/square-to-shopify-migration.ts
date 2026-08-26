import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as squareMigrationSectionCopy } from "@/content/migration-common";

export const squareTestimonials = {
  eyebrow: "Client Stories",
  items: shopifyPlusAgencyTestimonials.items.slice(5),
  controlsLabels: {
    ariaLabel: "Client video testimonials",
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
} as const;

export const squareHeroContent: ServiceHeroContent = {
  title: "Square to Shopify Migration Service",
  description:
    "Do you need a migration expert to migrate your store from Square to Shopify? Dynamic Dreamz offers the best Square to Shopify migration service in India. Our Shopify migration experts can smoothly migrate your Square store to Shopify without interrupting your business.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/square-to-shopify-migration/square-to-shopify-migration-hero.svg",
    alt: "Square to Shopify Migration Service Image",
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

export const squareBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const squareWhyMigrate = {
  heading: "Why do Square to Shopify Migration?",
  text: "Suppose you want a user friendly interface, vast customization options, an extensive app store, advanced features, and scalability for your eCommerce store. In that case, Square to Shopify Migration Service from Dynamic Dreamz can be your one-stop shop. Shopify is the first choice for many business owners who want to scale their businesses.",
} as const;

export const squareProcessContent: MigrationProcessContent = {
  heading: "Square to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "We won’t let you down! We will maintain your Square store and make it fully functional while we set up your new Shopify store. We minimize disruptions so customers won’t notice any difference during the transition.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "As a Shopify partner, we create a development store under your domain and configure the essential settings on Shopify. Our Shopify experts then design your Shopify store’s layout, keeping your brand identity in mind. We ensure your new store looks outstanding and functions even better, all while aligning closely with your previous Square setup.",
    },
    {
      stepNumber: "03",
      title: "Set Up a Custom Theme on Shopify",
      description:
        "Our Shopify developers specialize in creating custom themes that reflect your brand. Whether you want a new look or need us to integrate a pre designed template, we ensure your Shopify store meets your business needs. We also add necessary apps and features to match your existing Square store’s functionality.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We carefully migrate all of your necessary data during the Square to Shopify Migration. Here is a list of what data transfer to your new store:",
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
        "After completing the Square to Shopify Migration, we start testing to ensure everything works perfectly for your new Shopify store. Our testing process contains:",
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

export const squareFaqs: readonly FaqAccordionItem[] = [
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
    question: "Will I lose any data during the Square to Shopify Migration?",
    answer:
      "No, we confirm that all your crucial data, including products, customers, orders, and more, has been accurately migrated to Shopify. We also conduct comprehensive data validation to ensure everything is migrated.",
  },
  {
    question: "Can you migrate my customer reviews from Square to Shopify?",
    answer:
      "Yes, of course! We can migrate all your customer reviews, including ratings and comments, to Shopify. It helps maintain your store’s credibility and customer trust.",
  },
  {
    question: "What happens to my Square app integrations when I migrate to Shopify?",
    answer:
      "Shopify has an extensive app store with many apps. If the same app isn’t available, we will help you find similar apps or create custom solutions to match your business needs.",
  },
  {
    question: "Will my new Shopify store be mobile friendly?",
    answer:
      "Absolutely! All Shopify themes are mobile responsive, meaning your store will look outstanding and function well on any device, including smartphones and tablets.",
  },
  {
    question: "How long does the migration process take?",
    answer:
      "The time duration varies depending on your store’s size and the complexity of your requirements. However, our team works efficiently to ensure the Square to Shopify Migration is completed quickly without compromising quality.",
  },
];
