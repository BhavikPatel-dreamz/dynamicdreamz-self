import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { HeroBadge, ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { OnlineStore20IconName } from "@/components/sections/migrating-theme-to-online-store-2-0-icons";

export type ThemeMigrationBoxItem = {
  title: string;
  description: string;
  iconName: OnlineStore20IconName;
};

export const migratingThemeToOnlineStore20Content = {
  hero: {
    eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
    title: "Shopify Online Store 2.0 Theme Migration",
    paragraphs: [
      "Shopify has come up with an improvised Online Store 2.0, which has quite a few easy to implement tools, is easy to maintain, and is scalable. You can migrate your theme to add support for these features by converting a Liquid template into a JSON template.",
    ],
    cta: "Request a Quote",
    ctaHref: "/request-quote",
    image: {
      src: "/assets/migrating-a-theme-to-online-store-2-0/hero/migrate-store-img.svg",
      alt: "migrate-store-img",
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
        height: 54,
      },
    ] as readonly HeroBadge[],
  } satisfies ServiceHeroVideoContent,

  brands: {
    heading: "Trusted by Leading Brands",
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify theme migration",
    items: [
      {
        src: "/assets/clients/supertails.svg",
        href: "https://supertails.com/",
        alt: "Supper Tails Logo",
        width: 164,
        height: 41,
      },
      {
        src: "/assets/clients/eleven-eleven.svg",
        href: "https://11-11.in/",
        alt: "Eleven Eleven",
        width: 145,
        height: 20,
      },
      {
        src: "/assets/clients/bellavita.svg",
        href: "https://bellavitaorganic.com/",
        alt: "bellavita logo",
        width: 166,
        height: 24,
      },
      {
        src: "/assets/clients/bombay-shirt-company.svg",
        href: "https://www.bombayshirts.com/",
        alt: "Bombay Shirt Company",
        width: 204,
        height: 26,
      },
      {
        src: "/assets/clients/popclub.svg",
        href: "https://popclub.co/",
        alt: "popclub-co",
        width: 65,
        height: 41,
      },
      {
        src: "/assets/clients/sri-sri-tattva.svg",
        href: "https://www.srisritattva.com/",
        alt: "SriSri Tattva Logo",
        width: 106,
        height: 40,
      },
      {
        src: "/assets/clients/tropicfeel.svg",
        href: "https://shop.tropicfeel.com/",
        alt: "tropicfeel logo",
        width: 150,
        height: 32,
      },
      {
        src: "/assets/clients/renee.svg",
        href: "https://www.reneecosmetics.in/",
        alt: "Renee logo",
        width: 93,
        height: 30,
      },
      {
        src: "/assets/clients/royce-chocolate.svg",
        href: "https://royceindia.com/",
        alt: "Royce chocolate logo",
        width: 132,
        height: 38,
      },
      {
        src: "/assets/clients/tego.svg",
        href: "https://tego.fit/",
        alt: "tego logo",
        width: 101,
        height: 40,
      },
      {
        src: "/assets/clients/nekter-colored.svg",
        href: "https://www.nekterjuicebar.com/",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        src: "/assets/clients/rare-rabbit.svg",
        href: "https://thehouseofrare.com/",
        alt: "Rare Rabbit Logo",
        width: 122,
        height: 84,
      },
    ] as readonly ClientLogoSliderItem[],
  },

  whyUpgrade: {
    eyebrow: "Why Upgrade",
    heading: "Why Upgrade to Shopify 2.0?",
    description:
      "Shopify 2.0 offers a more flexible and modern store architecture, making it easier to customize pages, sections, and content without extensive development. Upgrading can improve your store’s performance, user experience, and scalability while giving you greater control over your storefront design.",
    items: [
      {
        title: "Lightning Fast Performance",
        description:
          "Shopify 2.0 delivers faster load times and improved site performance, ensuring a seamless and responsive user experience. This improvement can boost customer satisfaction and increase conversion rates.",
        iconName: "lightning",
      },
      {
        title: "Greater Flexibility",
        description:
          "With the introduction of sections everywhere, Shopify 2.0 enables merchants to customize every aspect of their store effortlessly. This flexibility allows you to create a unique and engaging shopping experience.",
        iconName: "flexibility",
      },
      {
        title: "Advanced Developer Tools",
        description:
          "Shopify 2.0 includes updated developer tools, simplifying the implementation of custom features and functionality. It is particularly beneficial for businesses with specific requirements needing tailored solutions.",
        iconName: "developer-tools",
      },
      {
        title: "Better SEO and Marketing",
        description:
          "The new version features enhanced SEO capabilities and superior marketing tools, helping you attract more traffic and effectively promote your products.",
        iconName: "seo-marketing",
      },
    ] as readonly ThemeMigrationBoxItem[],
  },

  migrationService: {
    eyebrow: "Our Services",
    heading: "Our Shopify Migration Service",
    description:
      "Our Shopify development services start with a thorough assessment of your current store. We evaluate your existing setup, including theme customization, installed apps, and data integrity, to develop a comprehensive migration plan.",
    items: [
      {
        title: "Data Migration",
        description:
          "We securely transfer your essential data, including products, customers, orders, and website content, ensuring accuracy and a smooth transition to your new platform.",
        iconName: "data-migration",
      },
      {
        title: "Theme Migration and Customization",
        description:
          "We handle your Shopify 2.0 theme upgrade by selecting a suitable theme, customizing it to match your brand, and integrating modern features such as flexible sections, enhanced filtering, and dynamic content.",
        iconName: "theme-customization",
      },
      {
        title: "App Integration",
        description:
          "We evaluate your existing Shopify apps, update or replace those that are no longer compatible, and configure new apps to maintain essential functionality. Where needed, we also develop custom solutions to meet your specific business requirements.",
        iconName: "app-integration",
      },
      {
        title: "SEO and Redirects",
        description:
          "We protect your search rankings during migration by preserving key SEO elements such as meta tags and alt texts, while implementing 301 redirects to maintain link equity and prevent 404 errors.",
        iconName: "seo-redirects",
      },
      {
        title: "Testing and Quality Assurance",
        description:
          "Before launching your new store, we conduct thorough testing to ensure all features work smoothly, the user experience is seamless, and the site performs reliably across devices and browsers.",
        iconName: "testing-qa",
      },
      {
        title: "Launch and Post Launch Support",
        description:
          "Once testing is complete, we launch your Shopify 2.0 store with minimal downtime and provide post-launch support to quickly address any issues and ensure everything runs smoothly.",
        iconName: "launch-support",
      },
    ] as readonly ThemeMigrationBoxItem[],
  },

  benefits: {
    eyebrow: "Shopify Migration",
    heading: "Benefits of Our Migration Service",
    description: "",
    items: [
      {
        title: "Expertise and Experience",
        description:
          "Our team of Shopify Experts has extensive experience in handling migrations of all complexities. We ensure a seamless transition, minimizing disruptions to your business operations.",
        iconName: "expertise",
      },
      {
        title: "Comprehensive Service",
        description:
          "From initial assessment to post launch support, we provide end to end migration services, taking care of every detail to ensure a successful upgrade.",
        iconName: "comprehensive",
      },
      {
        title: "Custom Solutions",
        description:
          "We understand that every business is unique. Our migration service is tailored to meet your specific needs, ensuring the new store is perfectly aligned with your business goals.",
        iconName: "custom-solutions",
      },
    ] as readonly ThemeMigrationBoxItem[],
  },

  whyChoose: {
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
          "We have proven experience in Theme to Shopify migration, with a team of Shopify Experts skilled in handling migrations of all complexities.",
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
    ],
  },

  testimonials: {
    eyebrow: "Client Stories",
    heading: "Don't Just Take Our Word For It",
    description:
      "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  },

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Can Dynamic Dreamz migrate my existing Shopify theme to Online Store 2.0?",
        answer:
          "Yes. Our Shopify team can review your existing theme and migrate the required templates, sections and customizations to an Online Store 2.0 structure while keeping the store experience aligned with your current brand and functionality.",
      },
      {
        question: "Will my existing custom functionality be retained?",
        answer:
          "Yes. We review the existing custom code, features and integrations before migration and retain the required functionality in the new Online Store 2.0 setup. Where needed, we may rebuild or improve parts of the code so they work properly with the updated theme architecture.",
      },
      {
        question: "Can you also update apps and theme integrations during the migration?",
        answer:
          "Yes. We can review your current app integrations and update, reconnect or adjust them where required so they continue to work properly with the migrated theme.",
      },
      {
        question: "Will Dynamic Dreamz test the store before launch?",
        answer:
          "Yes. Our team performs QA across important pages, devices, browsers and customer journeys before the updated theme is published. We also verify the main storefront functionality and integrations before launch.",
      },
      {
        question: "Do you provide support after the Online Store 2.0 migration?",
        answer:
          "Yes. After launch, Dynamic Dreamz can continue supporting theme fixes, new sections, app updates, performance improvements and ongoing Shopify development.",
      },
    ] as readonly FaqAccordionItem[],
  },
} as const;
