import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";

export const magentoHeroContent: ServiceHeroContent = {
  title: "Migration from Magento to Shopify",
  description:
    "Transform your eCommerce experience with our seamless Magento to Shopify migration services and unlock the full potential of your online store with Shopify.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/magento-to-shopify-migration/magento-to-shopify-migration-hero.svg",
    alt: "Magento to Shopify Migration Image",
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

export const magentoBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const magentoWhyMigrate = {
  heading: "Why Do You Need to migrate from Magento to Shopify?",
  paragraphs: [
    "As you may have come to know Magento has announced the ‘End of Life’ of its Magento 1.z version with effect from June 2020. This means that there are no new features, no official support, and no security updates that will be rolled out for Magento 1.x for users around the globe from June 2000 onwards.",
    "The ‘End of Life’ countdown for Magento 1.x has already begun and the clock is ticking. Now you have two choices: Either stick to the Magento Ecosystem by upgrading from Magento 1.x to Magento 2. OR migrate to another eCommerce platform like Shopify.",
  ],
} as const;

export const magentoProcessContent: MigrationProcessContent = {
  heading: "Magento to Shopify Migration Process",
  steps: [
    {
      stepNumber: "01",
      title: "Keep Your Business Running",
      description:
        "Your migration will take time! That means until your new store is fully set up and optimized, it’s important to keep your business running on your Magneto store. We will provide support to make sure your current magneto works until the migration is completed.",
    },
    {
      stepNumber: "02",
      title: "Prepare Shopify Platform for Data Migration",
      description:
        "As a Shopify partner, we will create a development store for your domain to start the data migration. We will start working on the new Shopify design layout with data migration jobs.",
    },
    {
      stepNumber: "03",
      title: "Setup Custom Theme on the Shopify Platform",
      description:
        "We will work on Shopify store development to integrate custom design approved by you. Also, we will set up all apps and functions as required to build the custom functionality you had on the Magento 1 store.",
    },
    {
      stepNumber: "04",
      title: "Migrate Your Data",
      description:
        "We will migrate all data so you can test existing data on the new platform. Here are what data can be migrated from Magento to Shopify:",
      categories: [
        {
          title: "Products",
          items: [
            "Name, SKU, Full Description, Status, Manufacturer",
            "Price, Special Price",
            "Meta Title, Meta Description",
            "Product Tags",
            "Variants: (SKU, Weight, Attributes, Quantity, Price, Special Price, Name, Additional image)",
            "Additional Images",
            "Manage Stock",
            "Product image",
          ],
        },
        {
          title: "Product Categories",
          items: ["Name, Description, Status", "Image", "Meta Title, Meta Description"],
        },
        {
          title: "Manufacturers",
          items: ["Name"],
        },
        {
          title: "Customers",
          items: [
            "First Name, Last Name, Email, Newsletter",
            "Billing Address: (Company, Address 1, Address 2, Country, State, City, Zip Code, Telephone, First Name, Last Name)",
            "Shipping Address: (Company, Address 1, Address 2, Country, State, City, Zip Code, Telephone, First Name, Last Name)",
          ],
        },
        {
          title: "Orders",
          items: [
            "Order Date, Order Status, Order Products: (Name, SKU, Option), Product Price, Quantity, Discount Price, Tax Price, Total Price",
            "Customer Name, Email, Billing Address: (Company, Address 1, Address 2, Country, State, City, Zip Code, Telephone, First Name, Last Name)",
            "Shipping Address: (Company, Address 1, Address 2, Country, State, City, Zip Code, Telephone, First Name, Last Name)",
          ],
        },
        {
          title: "Coupons",
          items: ["Coupon Code, Coupon Date"],
        },
      ],
    },
    {
      stepNumber: "05",
      title: "Test the site",
      description:
        "We will migrate all data so you can test existing data on the new platform. Here are what data can be migrated from Magento to Shopify:",
      categories: [
        {
          title:
            "QA team will test the new site on the Shopify platform. The standard QA process will be followed as per the steps listed below.",
          items: [
            "Functional and Business Rule Validation Validate your functional and business rules meticulously.",
            "Data validation Check all the migrated data and make sure the important information is transferred correctly on Shopify.",
            "Performance Test Qa will perform speed testing to make sure the site optimizes for the best load time on any browser.",
            "Go live Checklist QA will prepare a Go live checklist to avoid any mistakes when the site is switched to live on a new platform.",
          ],
        },
      ],
    },
    {
      stepNumber: "06",
      title: "Go live",
      description:
        "We will migrate all data so you can test existing data on a new platform. Here are what data can be migrated from Magento to Shopify:",
      categories: [
        {
          title: "",
          items: [
            "A go live checklist is a key component to a successful go live! The checklist should break down each of the steps that the customer and partner will go through in the deployment process. Reviewing this checklist ahead of time helps ensure you and your team understand what to expect during the go live phase.",
            "After the checklist review the live domain will be switching to the point to the Shopify platform, Expected downtime is about 3 hours to 4 hours which will be during your off business hours.",
          ],
        },
      ],
    },
  ],
};

export const magentoFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why should I migrate from Magento to Shopify?",
    answer:
      "As mentioned above, you may have come to know that Magento has announced the ‘End of Life’ of its Magento 1.z version with effect from June 2020. This means that there are no new features, no official support, and no security updates that will be rolled out for Magento 1.x for users around the globe from June 2000 onwards. Migrating to Shopify offers benefits like better scalability, a user friendly interface, reduced maintenance costs, and enhanced security. Shopify also provides robust support and a wide range of apps to enhance your store’s functionality.",
  },
  {
    question: "How long does the migration process take?",
    answer:
      "The duration varies based on the complexity and size of your store. On average, a standard migration takes 2-4 weeks. Dynamic Dreamz provides a detailed timeline after assessing your specific requirements.",
  },
  {
    question: "How do I get started with the migration process?",
    answer:
      "Simply contact us through our website. We’ll schedule a consultation to discuss your needs, provide a detailed plan, and start the migration process.",
  },
  {
    question: "What data can be migrated from Magento to Shopify?",
    answer:
      "We can migrate products, customers, orders, categories, reviews, and other essential data. We ensure that your critical information is transferred accurately and securely.",
  },
  {
    question: "How do you ensure data accuracy during migration?",
    answer:
      "At Dynamic Dreamz, we use advanced tools and manual checks to verify data accuracy. Our expert Shopify migration team thoroughly tests the migrated store to ensure all data is intact and correctly mapped.",
  },
  {
    question: "Can you migrate custom functionalities and design elements?",
    answer:
      "Yes, we can replicate custom functionalities and design elements in Shopify. Our team works to recreate the look and feel of your Magento store while leveraging Shopify’s features.",
  },
  {
    question: "What about SEO and URLs? Will they be affected?",
    answer:
      "We take SEO seriously and ensure that URLs, meta tags, and other SEO elements are preserved. We implement 301 redirects to maintain search engine rankings and prevent broken links.",
  },
  {
    question: "Do you provide support after migration?",
    answer:
      "Yes, we offer post migration support to address any issues that arise. Our team is available to assist you with any questions and ensure your store runs smoothly on Shopify.",
  },
  {
    question: "How much does the migration service cost?",
    answer:
      "The cost depends on the size and complexity of your store. We provide a customized quote after evaluating your specific needs. Our pricing is transparent, with no hidden fees.",
  },
];
