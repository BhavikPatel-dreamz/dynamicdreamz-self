import { companyFacts } from "@/data/company";

export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
  icon?: NavigationIcon;
  badge?: string;
};

export type NavigationGroup = {
  label: string;
  href?: string;
  links: NavigationLink[];
};

export type NavigationIcon = {
  src: string;
  width: number;
  height: number;
};

export type MegaMenuItem = NavigationLink & {
  description?: string;
  icon: NavigationIcon;
};

export type ServiceNavigationSection = {
  label: string;
  icon: NavigationIcon;
  links: NavigationLink[];
};

export type PrimaryNavigationGroup =
  | {
      label: string;
      slug: string;
      kind: "featured" | "compact";
      items: MegaMenuItem[];
    }
  | {
      label: string;
      slug: string;
      kind: "services";
      introduction: {
        title: string;
        description: string;
        stats: Array<{ label: string; value: string }>;
      };
      sections: ServiceNavigationSection[];
    };

const navigationGroups: PrimaryNavigationGroup[] = [
  {
    label: "About Us",
    slug: "about",
    kind: "featured",
    items: [
      {
        label: "Who We Are",
        href: "/about-us",
        description: "Our company, team and experience.",
        icon: { src: "/assets/navigation/live-menu/who-we-are.svg", width: 20, height: 20 },
      },
      {
        label: "Careers",
        href: "/career",
        description: "Explore jobs with Dynamic Dreamz.",
        icon: { src: "/assets/navigation/live-menu/careers.svg", width: 20, height: 20 },
      },
      {
        label: "Life @Dynamic Dreamz",
        href: "/life-dynamicdreamz",
        description: "Meet our people, culture and workplace.",
        icon: { src: "/assets/navigation/live-menu/life-dynamic-dreamz.svg", width: 20, height: 20 },
      },
      {
        label: "Resources",
        href: "/resources",
        description: "Shopify and digital growth insights.",
        icon: { src: "/assets/navigation/live-menu/resources.svg", width: 20, height: 20 },
      },
    ],
  },
  {
    label: "Services",
    slug: "services",
    kind: "services",
    introduction: {
      title: "A Trusted E-commerce & Mobile Development Company Since 2006",
      description:
        "At Dynamic Dreamz innovation meets excellence. We provide technology-driven solutions & services to empower businesses to achieve their goals.",
      stats: [
        { label: "Projects", value: companyFacts.projectsCompleted.display },
        { label: "Experts", value: companyFacts.experts.display },
        { label: "Happy Clients", value: companyFacts.happyClients.display },
      ],
    },
    sections: [
      {
        label: "Shopify & Shopify Plus",
        icon: { src: "/assets/navigation/shopify.svg", width: 26, height: 26 },
        links: [
          { label: "Shopify Plus Agency", href: "/shopify-plus-agency" },
          { label: "Shopify Experts", href: "/shopify-experts" },
          { label: "Shopify Theme customization", href: "/shopify-theme-customization" },
          { label: "Shopify Migration", href: "/shopify-migration" },
          { label: "Hire Shopify Developers", href: "/hire-shopify-developers" },
          { label: "White Label Shopify Development", href: "/white-label-shopify-development-services" },
          { label: "Shopify Public App Development", href: "/shopify-apps" },
          { label: "Shopify CRO Services", href: "/shopify-cro-agency" },
        ],
      },
      {
        label: "WordPress",
        icon: { src: "/assets/navigation/wordpress.svg", width: 22, height: 22 },
        links: [
          { label: "WordPress Web Development", href: "/wordpress-development" },
          { label: "Hire WordPress Developers", href: "/hire-wordpress-developers" },
          { label: "WordPress Theme Customization", href: "/wordpress-theme-customization-services" },
          { label: "White Label WordPress Development", href: "/white-label-wordpress-development-services" },
        ],
      },
      {
        label: "Mobile App Development",
        icon: { src: "/assets/navigation/mobile-app-development.svg", width: 18, height: 24 },
        links: [
          { label: "Android App Development", href: "/android-app-development" },
          { label: "iOS App Development", href: "/ios-app-development" },
          { label: "Cross Platform App Developments", href: "/cross-platform-app-development" },
          { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development" },
        ],
      },
      {
        label: "E-commerce",
        icon: { src: "/assets/navigation/ecommerce.svg", width: 24, height: 24 },
        links: [
          { label: "Shopify Development", href: "/shopify-development-agency" },
          { label: "WooCommerce Development", href: "/woocommerce-development" },
          { label: "Magento Web Development", href: "/magento-development" },
          { label: "BigCommerce Development", href: "/bigcommerce-development" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    slug: "industries",
    kind: "compact",
    items: [
      { label: "Beauty & Cosmetics", href: "/beauty-cosmetics", icon: { src: "/assets/navigation/beauty-and-cosmetics.svg", width: 21, height: 21 } },
      { label: "Fashion & Apparel", href: "/fashion", icon: { src: "/assets/navigation/fashion-and-apparel.svg", width: 21, height: 21 } },
      { label: "Health & Nutrition", href: "/healthcare", icon: { src: "/assets/navigation/health-and-nutrition.png", width: 21, height: 21 } },
      { label: "Food & Beverages", href: "/food-beverages", icon: { src: "/assets/navigation/food-and-beverages.svg", width: 21, height: 21 } },
      { label: "Pet Industry", href: "/pet-industry", icon: { src: "/assets/navigation/pet-industry.svg", width: 21, height: 21 } },
    ],
  },
  {
    label: "Work",
    slug: "work",
    kind: "compact",
    items: [
      { label: "Portfolio", href: "/our-work", description: "Browse selected Shopify, ecommerce, mobile and custom development projects.", icon: { src: "/assets/navigation/live-menu/portfolio.svg", width: 20, height: 20 } },
      { label: "Case Studies", href: "/case-studies", description: "See project requirement, our approach, technology and solutions delivered.", icon: { src: "/assets/navigation/live-menu/case-studies.svg", width: 20, height: 20 } },
    ],
  },
  {
    label: "White Label",
    slug: "white-label",
    kind: "compact",
    items: [
      {
        label: "White Label Shopify Development",
        href: "/white-label-shopify-development-services",
        description: "Shopify/Shopify plus support under your agency.",
        icon: { src: "/assets/navigation/live-menu/white-label-shopify-development.svg", width: 20, height: 20 },
      },
      {
        label: "White Label WordPress Development",
        href: "/white-label-wordpress-development-services",
        description: "WordPress support behind your agency.",
        icon: { src: "/assets/navigation/live-menu/white-label-wordpress-development.svg", width: 20, height: 20 },
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services",
        description: "UI/UX and design support under your agency.",
        icon: { src: "/assets/navigation/live-menu/white-label-website-design.svg", width: 20, height: 20 },
      },
    ],
  },
];

const findNavigationGroup = (slug: string) => {
  const group = navigationGroups.find((item) => item.slug === slug);

  if (!group) throw new Error(`Missing primary navigation group: ${slug}`);
  return group;
};

const servicesNavigation = findNavigationGroup("services");
const agencyNavigation = findNavigationGroup("white-label");
const aboutNavigation = findNavigationGroup("about");

const technologyNavigation: PrimaryNavigationGroup = {
  label: "Technology",
  slug: "technology",
  kind: "compact",
  items: [
    {
      label: "AI Services",
      href: "/contact-us",
      description: "AI powered automation and digital solutions.",
      badge: "NEW",
      icon: { src: "/assets/navigation/live-menu/al-services-new.svg", width: 20, height: 20 },
    },
    {
      label: "Full-Stack Development",
      href: "/contact-us",
      description: "Custom platforms, APIs and connected systems.",
      icon: { src: "/assets/navigation/live-menu/full-stack-development.svg", width: 20, height: 20 },
    },
    {
      label: "IOS App Development",
      href: "/ios-app-development",
      description: "Custom mobile applications for Apple devices.",
      icon: { src: "/assets/navigation/live-menu/ios-app-development.svg", width: 20, height: 20 },
    },
    {
      label: "Mobile App Development",
      href: "/mobile-application-development",
      description: "Custom mobile apps for businesses.",
      icon: { src: "/assets/navigation/live-menu/mobile-app-development.svg", width: 20, height: 20 },
    },
    {
      label: "Cross-Platform Apps",
      href: "/cross-platform-app-development",
      description: "Shared-code experiences across IOS and Android.",
      icon: { src: "/assets/navigation/live-menu/cross-platform-apps.svg", width: 20, height: 20 },
    },
    {
      label: "Android App Development",
      href: "/android-app-development",
      description: "Custom Android applications for businesses.",
      icon: { src: "/assets/navigation/live-menu/android-app-development.svg", width: 20, height: 22 },
    },
    {
      label: "WooCommerce Development",
      href: "/woocommerce-development",
      description: "WooCommerce development and support.",
      icon: { src: "/assets/navigation/live-menu/woocommerce-development.svg", width: 25, height: 21 },
    },
    {
      label: "WordPress Development",
      href: "/wordpress-development",
      description: "WordPress websites development and support.",
      icon: { src: "/assets/navigation/live-menu/wordpress-development.svg", width: 20, height: 20 },
    },
    { label: "BigCommerce Development", href: "/bigcommerce-development", description: "Bigcommerce development & customization.", icon: { src: "/assets/navigation/live-menu/bigcommerce-development.svg", width: 20, height: 20 } },
    { label: "Magento Development", href: "/magento-development", description: "Magento ecommerce development and support.", icon: { src: "/assets/navigation/live-menu/magento-development.svg", width: 20, height: 20 } },
  ],
};

const industriesNavigation: PrimaryNavigationGroup = {
  label: "Industries",
  slug: "industries",
  kind: "compact",
  items: [
    { label: "Health & Nutrition", href: "/healthcare", description: "Health, supplements and nutrition.", icon: { src: "/assets/navigation/live-menu/health-and-nutrition.svg", width: 20, height: 20 } },
    { label: "Sports & Outdoors", href: "/contact-us", description: "Sports, fitness and outdoor brands.", icon: { src: "/assets/navigation/live-menu/sports-and-outdoors.svg", width: 20, height: 20 } },
    { label: "Fashion & Apparel", href: "/fashion", description: "Fashion, apparel and lifestyle brands.", icon: { src: "/assets/navigation/live-menu/fashion-and-apparel.svg", width: 20, height: 20 } },
    { label: "Home & Living", href: "/contact-us", description: "Furniture, decor and lifestyle brands.", icon: { src: "/assets/navigation/live-menu/home-and-living.svg", width: 20, height: 20 } },
    { label: "Beauty & Cosmetics", href: "/beauty-cosmetics", description: "Beauty, skincare and cosmetics brands.", icon: { src: "/assets/navigation/live-menu/beauty-and-cosmetics.svg", width: 20, height: 20 } },
    { label: "Jewellery & Accessories", href: "/contact-us", description: "Jewellery, watches, bags and accessories.", icon: { src: "/assets/navigation/live-menu/jewellery-and-accessories.svg", width: 20, height: 20 } },
    { label: "Food Beverages", href: "/food-beverages", description: "Food, beverage and FMCG ecommerce.", icon: { src: "/assets/navigation/live-menu/food-beverages.svg", width: 20, height: 20 } },
    { label: "Pet Industry", href: "/pet-industry", description: "Pet products, wellness and lifestyle.", icon: { src: "/assets/navigation/live-menu/pet-industry.svg", width: 20, height: 20 } },
  ],
};

const shopifyNavigation: PrimaryNavigationGroup = {
  label: "Shopify Solutions",
  slug: "services",
  kind: "services",
  introduction: servicesNavigation.kind === "services" ? servicesNavigation.introduction : {
    title: "Shopify Solutions",
    description: "",
    stats: [],
  },
  sections: [
    {
      label: "Shopify",
      icon: { src: "/assets/navigation/live-menu/shopify-plus-development.svg", width: 20, height: 20 },
      links: [
        { label: "Shopify Plus Development", href: "/shopify-plus-agency", description: "Enterprise storefronts and global commerce.", icon: { src: "/assets/navigation/live-menu/shopify-plus-development.svg", width: 20, height: 20 } },
        { label: "Shopify Development", href: "/shopify-development-agency", description: "Custom storefronts, redesigns and themes.", icon: { src: "/assets/navigation/live-menu/shopify-development.svg", width: 20, height: 20 } },
        { label: "Shopify Certified Developers", href: "/shopify-certified-developers", description: "Certified Shopify expertise for complex builds.", icon: { src: "/assets/navigation/live-menu/shopify-certified-developers.svg", width: 20, height: 20 } },
        { label: "Shopify Migration", href: "/shopify-migration", description: "Migration, redirects and SEO preservation.", icon: { src: "/assets/navigation/live-menu/shopify-migration.svg", width: 20, height: 20 } },
        { label: "Shopify B2B & Wholesale", href: "/shopify-plus-agency", description: "Company accounts, catalogues and pricing.", icon: { src: "/assets/navigation/live-menu/shopify-b2b-and-wholesale.svg", width: 20, height: 20 } },
        { label: "Shopify CRO & Performance", href: "/shopify-cro-agency", description: "Conversion, speed and ongoing optimization.", icon: { src: "/assets/navigation/live-menu/shopify-cro-and-performance.svg", width: 20, height: 20 } },
        { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development", description: "Custom iOS and Android apps for Shopify.", icon: { src: "/assets/navigation/live-menu/shopify-mobile-app-development.svg", width: 20, height: 20 } },
        { label: "Hire Shopify Developers", href: "/hire-shopify-developers", description: "Experienced Shopify capacity for your team.", icon: { src: "/assets/navigation/live-menu/hire-shopify-developers.svg", width: 20, height: 20 } },
        { label: "Buy Shopify Development Hours", href: "/buy-shopify-development-hours", description: "Flexible hours for fixes and ongoing work.", icon: { src: "/assets/navigation/live-menu/buy-shopify-development-hours.svg", width: 20, height: 20 } },
      ],
    },
  ],
};

export const primaryNavigation: PrimaryNavigationGroup[] = [
  shopifyNavigation,
  { ...agencyNavigation, label: "Agency Partnerships", slug: "agency-partnerships" },
  technologyNavigation,
  industriesNavigation,
  findNavigationGroup("work"),
  { ...aboutNavigation, label: "About" },
];

export const footerNavigation = [
  {
    label: "Company",
    links: [
      { label: "Who we are", href: "/about-us" },
      { label: "Life @ Dynamic Dreamz", href: "/life-dynamicdreamz" },
      { label: "Careers", href: "/career" },
      { label: "Blogs", href: "/blogs" },
      { label: "Portfolio", href: "/our-work" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    label: "Shopify Solutions",
    links: [
      { label: "Shopify Plus Development", href: "/shopify-plus-agency" },
      { label: "Shopify Development", href: "/shopify-development-agency" },
      { label: "Shopify Migration", href: "/shopify-migration" },
      { label: "Shopify B2B & Wholesale", href: "/shopify-plus-agency" },
      { label: "CRO & Performance", href: "/shopify-cro-agency" },
      { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development" },
      { label: "Hire Shopify Developers", href: "/shopify-experts" },
      { label: "Buy Shopify Development Hours", href: "/buy-shopify-development-hours" },
    ],
  },
  {
    label: "Technology Services",
    links: [
      { label: "AI Services", href: "/contact-us" },
      { label: "Full-Stack Development", href: "/contact-us" },
      { label: "iOS App Development", href: "/ios-app-development" },
      { label: "Android App Development", href: "/android-app-development" },
      { label: "Cross Platform App Development", href: "/cross-platform-app-development" },
      { label: "WordPress Development", href: "/wordpress-development-company" },
      { label: "Woocommerce Development", href: "/woocommerce-development" },
      { label: "Magento Development", href: "/magento-development" },
    ],
  },
  {
    label: "Agency Partnerships",
    links: [
      {
        label: "White Label WordPress Development",
        href: "/white-label-wordpress-development-services",
      },
      {
        label: "White Label Shopify Development",
        href: "/white-label-shopify-development-services",
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services",
      },
    ],
  },
  {
    label: "Hire developers",
    links: [
      { label: "Shopify Developers", href: "/hire-shopify-developers" },
      { label: "WordPress Developers", href: "/hire-wordpress-developers" },
    ],
  },
  {
    label: "More Services",
    links: [
      { label: "BigCommerce Development", href: "/bigcommerce-development" },
      { label: "Webflow development", href: "/webflow-development" },
    ],
  },
] satisfies NavigationGroup[];

export const footerAwards = [
  {
    href: "https://www.upwork.com/ag/dynamicdreamz/",
    src: "/assets/awards/upwork-top-rated-plus.svg",
    alt: "Dynamic Dreamz — Upwork Top Rated Plus",
    width: 143,
    height: 33,
  },
  {
    href: "https://clutch.co/profile/dynamic-dreamz",
    src: "/assets/awards/clutch-rating.svg",
    alt: "Dynamic Dreamz on Clutch — 4.9 rating",
    width: 147,
    height: 38,
  },
  {
    href: "https://www.goodfirms.co/company/dynamic-dreamz",
    src: "/assets/awards/goodfirms.svg",
    alt: "Dynamic Dreamz on GoodFirms",
    width: 148,
    height: 43,
  },
  {
    href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    src: "/assets/proof/trustpilot-rating.svg",
    alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
    width: 142,
    height: 46,
  },
  {
    href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    src: "/assets/awards/shopify-platinum-partner.svg",
    alt: "Dynamic Dreamz - Shopify Platinum Partner",
    width: 125,
    height: 44,
  },
  {
    href: "https://partners.bigcommerce.com/directory/partner/1117527/dynamicdreamz",
    src: "/assets/awards/bigcommerce-partner.svg",
    alt: "Dynamic Dreamz - BigCommerce Partner",
    width: 142,
    height: 48,
  },
] as const;
