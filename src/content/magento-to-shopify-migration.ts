import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { EvaluationFrameworkItem } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MagentoMigrationIconName } from "@/components/sections/magento-to-shopify/magento-migration-icons";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export { migrationSectionCopy as magentoMigrationSectionCopy } from "@/content/migration-common";

export type MagentoBoxItem = {
  iconName: MagentoMigrationIconName;
  title: string;
  description: string;
};

export const magentoHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"],
  title: "Magento to Shopify Migration Services",
  paragraphs: [
    "Transform your eCommerce experience with our seamless Magento to Shopify migration services and unlock the full potential of your online store with Shopify.",
  ],
  cta: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
  image: {
    src: "/assets/magento-to-shopify-migration/magento-to-shopify-migration-hero.svg",
    alt: "Magento to Shopify Migration Image",
    width: 493,
    height: 292,
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
      width: 126,
      height: 44,
    },
  ],
};

export const magentoBrandLogos: readonly ClientLogoSliderItem[] = [
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

export const magentoWhyMigrateContent = {
  eyebrow: "Why migrate",
  heading: "Why Do You Need to migrate from Magento to Shopify?",
  description:
    "Magento 1 reached its End of Life in June 2020, meaning it no longer receives official support, new features, or security updates. To keep your eCommerce store secure and future-ready, you have two options: <strong>upgrade from Magento 1 to Magento 2</strong> or <strong>migrate to another platform such as Shopify</strong>.",
  items: [
    {
      iconName: "clock-unsupported",
      title: "Magento 1 Is No Longer Supported",
      description:
        "Magento 1 no longer receives official security updates or technical support, making migration essential for long-term store security.",
    },
    {
      iconName: "reduce-costs",
      title: "Reduce Maintenance Costs",
      description:
        "Shopify eliminates the need for server management, complex updates, and ongoing platform maintenance.",
    },
    {
      iconName: "store-performance",
      title: "Better Store Performance",
      description:
        "Shopify provides reliable hosting and optimized infrastructure to help deliver faster, smoother shopping experiences.",
    },
    {
      iconName: "easy-to-manage",
      title: "Easy to Manage",
      description:
        "Manage products, orders, customers, and content through Shopify’s simple and intuitive admin interface.",
    },
    {
      iconName: "scalable-growth",
      title: "Scalable for Business Growth",
      description:
        "Shopify can easily scale with your business, whether you are handling a growing product catalog, traffic, or sales volume.",
    },
    {
      iconName: "enhanced-security",
      title: "Enhanced Security & Reliability",
      description:
        "Shopify handles hosting, security, SSL, and platform updates, helping keep your store secure and available.",
    },
  ] as readonly MagentoBoxItem[],
} as const;

export const magentoProcessContent: MigrationProcessContent = {
  eyebrow: "Migration Process",
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
          title: "Manufacturers",
          items: ["Name"],
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
            "Order Status",
            "Order Products",
            "Product Price",
            "Quantity",
            "Discount Price",
            "Tax Price",
            "Total Price",
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
      title: "Test the site",
      description:
        "We will migrate all data so you can test existing data on the new platform. Here are what data can be migrated from Magento to Shopify:",
      subBoxes: [
        {
          title: "Functional and Business Rule Validation",
          description:
            "Validate your functional and business rules meticulously.",
        },
        {
          title: "Data validation",
          description:
            "Check all the migrated data and make sure the important information is transferred correctly on Shopify.",
        },
        {
          title: "Performance Test",
          description:
            "Qa will perform speed testing to make sure the site optimizes for the best load time on any browser.",
        },
        {
          title: "Go live Checklist",
          description:
            "QA will prepare a Go live checklist to avoid any mistakes when the site is switched to live on a new platform.",
        },
      ],
    },
    {
      stepNumber: "06",
      title: "Go live",
      description:
        "We will migrate all data so you can test existing data on a new platform. Here are what data can be migrated from Magento to Shopify:",
      subBoxes: [
        {
          description:
            "A go live checklist is a key component to a successful go live! The checklist should break down each of the steps that the customer and partner will go through in the deployment process. Reviewing this checklist ahead of time helps ensure you and your team understand what to expect during the go live phase.",
        },
        {
          description:
            "After the checklist review the live domain will be switching to the point to the Shopify platform, Expected downtime is about 3 hours to 4 hours which will be during your off business hours.",
        },
      ],
    },
  ],
};

export const magentoWhyChooseContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz for Migration Services?",
  description:
    "As a proud Shopify Plus Partner, we have been vetted and recognized by Shopify for our expertise in delivering Shopify solutions and exceptional results. Trust us to bring your business the full power of Shopify Plus with our migration from Magento to Shopify Plus​.",
  items: [
    {
      title: "Proven Track Record",
      description:
        "With a proven track record, we have successfully migrated 100+ stores worldwide, helping businesses transition smoothly to Shopify.",
    },
    {
      title: "Expertise",
      description:
        "We have proven experience in Magento To Shopify migration, with a team of Shopify Experts skilled in handling migrations of all complexities.",
    },
    {
      title: "Custom Solutions",
      description:
        "We understand that every business has unique requirements. That’s why we offer customized migration strategies tailored to your business size, type, and specific needs.",
    },
    {
      title: "Smooth Data Transfer",
      description:
        "We ensure that all essential data, including products, customer details, and orders, are transferred accurately without any data loss.",
    },
    {
      title: "SEO Expertise",
      description:
        "Our SEO experts ensure your new Shopify store maintains and improves its search engine visibility during migration.",
    },
    {
      title: "Comprehensive Services",
      description:
        "From initial assessment to post launch support, we provide end to end migration services, taking care of every detail to ensure a successful upgrade.",
    },
    {
      title: "Minimal Downtime",
      description:
        "We migrate your store with proper planning and carefully take every step so your migration process will completed with minimal downtime.",
    },
    {
      title: "Post-Migration Support",
      description:
        "We also provide post migration support for your adjustments, additional features, or technical questions you may have.",
    },
  ] as readonly EvaluationFrameworkItem[],
} as const;

export const magentoTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Our client's satisfaction is the real test of our success. Discover how our specialized app development services have enabled companies to grow in the digital economy.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const magentoFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Why should I migrate from Magento to Shopify?",
    answer:
      "As mentioned above, you may have come to know that Magento has announced the ‘End of Life’ of its Magento 1.z version with effect from June 2020. This means that there are no new features, no official support, and no security updates that will be rolled out for Magento 1.x for users around the globe from June 2000 onwards.",
    secondaryAnswer:
      "Migrating to Shopify offers benefits like better scalability, a user friendly interface, reduced maintenance costs, and enhanced security. Shopify also provides robust support and a wide range of apps to enhance your store’s functionality.",
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
