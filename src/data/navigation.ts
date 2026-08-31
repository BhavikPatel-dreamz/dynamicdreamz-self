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
  description: string;
  icon: NavigationIcon;
  badge?: string;
  ctaLabel?: string;
};

export type PrimaryNavigationGroup = {
  label: string;
  slug: string;
  columns: 1 | 2 | 3;
  variant?: "default" | "work";
  items: MegaMenuItem[];
  promo?: {
    title: string;
    details: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

const headerIcon = (name: string, height = 20): NavigationIcon => ({
  src: `/assets/navigation/header/${name}.svg`,
  width: 20,
  height,
});

export const primaryNavigation: PrimaryNavigationGroup[] = [
  {
    label: "Shopify Solutions",
    slug: "shopify-solutions",
    columns: 3,
    items: [
      {
        label: "Shopify Plus Development",
        href: "/shopify-plus-agency",
        description: "Enterprise storefronts and global commerce.",
        icon: headerIcon("shopify-plus-development", 24),
      },
      {
        label: "Shopify Development",
        href: "/shopify-development-agency",
        description: "Custom storefronts, redesigns and themes.",
        icon: headerIcon("shopify-development"),
      },
      {
        label: "Shopify Certified Developers",
        href: "/shopify-certified-developers",
        description: "Certified Shopify expertise for complex builds.",
        icon: headerIcon("shopify-certified-developers"),
      },
      {
        label: "Shopify Migration",
        href: "/shopify-migration",
        description: "Migration, redirects and SEO preservation.",
        icon: headerIcon("shopify-migration"),
      },
      {
        label: "Shopify B2B & Wholesale",
        href: "/shopify-plus-agency",
        description: "Company accounts, catalogues and pricing.",
        icon: headerIcon("shopify-b2b-and-wholesale"),
      },
      {
        label: "Shopify CRO & Performance",
        href: "/shopify-cro-agency",
        description: "Conversion, speed and ongoing optimization.",
        icon: headerIcon("shopify-cro-and-performance"),
      },
      {
        label: "Shopify Mobile App Development",
        href: "/shopify-mobile-app-development",
        description: "Custom iOS and Android apps for Shopify.",
        icon: headerIcon("shopify-mobile-app-development"),
      },
      {
        label: "Hire Shopify Developers",
        href: "/hire-shopify-developers",
        description: "Experienced Shopify capacity for your team.",
        icon: headerIcon("hire-shopify-developers"),
      },
      {
        label: "Buy Shopify Development Hours",
        href: "/buy-shopify-development-hours",
        description: "Flexible hours for fixes and ongoing work.",
        icon: headerIcon("buy-shopify-development-hours"),
      },
    ],
    promo: {
      title: "Shopify Platinum Partner",
      details: "20+ Years · 150+ Experts · 5,000+ Projects",
      ctaLabel: "Discuss a project",
      ctaHref: "/contact-us",
    },
  },
  {
    label: "Agency Partnerships",
    slug: "agency-partnerships",
    columns: 1,
    items: [
      {
        label: "White Label Shopify Development",
        href: "/white-label-shopify-development-services",
        description: "Shopify/Shopify plus support under your agency.",
        icon: headerIcon("white-label-shopify-development"),
      },
      {
        label: "White Label WordPress Development",
        href: "/white-label-wordpress-development-services",
        description: "WordPress support behind your agency.",
        icon: headerIcon("white-label-wordpress-development"),
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services",
        description: "UI/UX and design support under your agency.",
        icon: headerIcon("white-label-website-design"),
      },
    ],
  },
  {
    label: "Technology",
    slug: "technology",
    columns: 2,
    items: [
      {
        label: "Al Services",
        href: "/contact-us",
        description: "AI powered automation and digital solutions.",
        icon: headerIcon("al-services"),
        badge: "NEW",
      },
      {
        label: "Full-Stack Development",
        href: "/contact-us",
        description: "Custom platforms, APIs and connected systems.",
        icon: headerIcon("full-stack-development"),
      },
      {
        label: "IOS App Development",
        href: "/ios-app-development",
        description: "Custom mobile applications for Apple devices.",
        icon: headerIcon("ios-app-development"),
      },
      {
        label: "Mobile App Development",
        href: "/mobile-application-development",
        description: "Custom mobile apps for businesses.",
        icon: headerIcon("mobile-app-development"),
      },
      {
        label: "Cross-Platform Apps",
        href: "/cross-platform-app-development",
        description: "Shared-code experiences across IOS and Android.",
        icon: headerIcon("cross-platform-apps"),
      },
      {
        label: "Android App Development",
        href: "/android-app-development",
        description: "Custom Android applications for businesses.",
        icon: headerIcon("android-app-development"),
      },
      {
        label: "WooCommerce Development",
        href: "/woocommerce-development",
        description: "WooCommerce development and support.",
        icon: headerIcon("woocommerce-development"),
      },
      {
        label: "WordPress Development",
        href: "/wordpress-development",
        description: "WordPress websites development and support.",
        icon: headerIcon("wordpress-development"),
      },
      {
        label: "BigCommerce Development",
        href: "/bigcommerce-development",
        description: "Bigcommerce development & customization.",
        icon: headerIcon("bigcommerce-development"),
      },
      {
        label: "Magento Development",
        href: "/magento-development",
        description: "Magento ecommerce development and support.",
        icon: headerIcon("magento-development"),
      },
    ],
  },
  {
    label: "Industries",
    slug: "industries",
    columns: 2,
    items: [
      { label: "Health & Nutrition", href: "/healthcare", description: "Health, supplements and nutrition.", icon: headerIcon("health-and-nutrition") },
      { label: "Sports & Outdoors", href: "/contact-us", description: "Sports, fitness and outdoor brands.", icon: headerIcon("sports-and-outdoors") },
      { label: "Fashion & Apparel", href: "/fashion", description: "Fashion, apparel and lifestyle brands.", icon: headerIcon("fashion-and-apparel") },
      { label: "Home & Living", href: "/contact-us", description: "Furniture, decor and lifestyle brands.", icon: headerIcon("home-and-living") },
      { label: "Beauty & Cosmetics", href: "/beauty-cosmetics", description: "Beauty, skincare and cosmetics brands.", icon: headerIcon("beauty-and-cosmetics") },
      { label: "Jewellery & Accessories", href: "/contact-us", description: "Jewellery, watches, bags and accessories.", icon: headerIcon("jewellery-and-accessories") },
      { label: "Food Beverages", href: "/food-beverages", description: "Food, beverage and FMCG ecommerce.", icon: headerIcon("food-beverages") },
      { label: "Pet Industry", href: "/pet-industry", description: "Pet products, wellness and lifestyle.", icon: headerIcon("pet-industry") },
    ],
  },
  {
    label: "Work",
    slug: "work",
    columns: 2,
    variant: "work",
    items: [
      { label: "Portfolio", href: "/our-work", description: "Browse selected Shopify, ecommerce, mobile and custom development projects.", ctaLabel: "View portfolio", icon: headerIcon("portfolio") },
      { label: "Case Studies", href: "/case-studies", description: "See project requirement, our approach, technology and solutions delivered.", ctaLabel: "View case studies", icon: headerIcon("case-studies") },
    ],
  },
  {
    label: "About",
    slug: "about",
    columns: 2,
    items: [
      { label: "Who We Are", href: "/about-us", description: "Our company, team and experience.", icon: headerIcon("who-we-are") },
      { label: "Careers", href: "/career", description: "Explore jobs with Dynamic Dreamz.", icon: headerIcon("careers") },
      { label: "Life @ Dynamic Dreamz", href: "/life-dynamicdreamz", description: "Meet our people, culture and workplace.", icon: headerIcon("life-at-dynamic-dreamz") },
      { label: "Resources", href: "/resources", description: "Shopify and digital growth insights.", icon: headerIcon("resources") },
    ],
  },
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
      { label: "Shopify Theme Customization", href: "/shopify-theme-customization" },
      { label: "CRO & Performance", href: "/shopify-cro-agency" },
      { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development" },
      { label: "Hire Shopify Experts", href: "/shopify-experts" },
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
