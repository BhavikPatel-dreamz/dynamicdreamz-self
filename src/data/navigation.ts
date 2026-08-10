export type NavigationLink = {
  label: string;
  href: string;
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

export const primaryNavigation: PrimaryNavigationGroup[] = [
  {
    label: "About Us",
    slug: "about",
    kind: "featured",
    items: [
      {
        label: "Who we are",
        href: "/about-us/",
        description: "We are a top-rated e-Commerce & web development company.",
        icon: { src: "/assets/navigation/who-we-are.svg", width: 24, height: 24 },
      },
      {
        label: "Career",
        href: "/career/",
        description: "Explore dynamic career opportunities and grow with us!",
        icon: { src: "/assets/navigation/career.svg", width: 20, height: 24 },
      },
      {
        label: "Life @Dynamic Dreamz",
        href: "/life-dynamicdreamz/",
        description: "We foster professional development with work-life balance.",
        icon: { src: "/assets/navigation/life-at-dynamic-dreamz.svg", width: 20, height: 20 },
      },
      {
        label: "Resources",
        href: "/resources/",
        description: "One hub for all the dynamic resources you will ever need!",
        icon: { src: "/assets/navigation/resources.svg", width: 24, height: 20 },
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
        { label: "Projects", value: "5000+" },
        { label: "Experts", value: "150+" },
        { label: "Happy Clients", value: "1100+" },
      ],
    },
    sections: [
      {
        label: "Shopify & Shopify Plus",
        icon: { src: "/assets/navigation/shopify.svg", width: 26, height: 26 },
        links: [
          { label: "Shopify Plus Agency", href: "/shopify-plus-agency/" },
          { label: "Shopify Experts", href: "/shopify-experts/" },
          { label: "Shopify Theme customization", href: "/shopify-theme-customization/" },
          { label: "Shopify Migration", href: "/shopify-migration/" },
          { label: "Hire Shopify Developers", href: "/hire-shopify-developers/" },
          { label: "White Label Shopify Development", href: "/white-label-shopify-development-services/" },
          { label: "Shopify Public App Development", href: "/shopify-apps/" },
          { label: "Shopify CRO Services", href: "/shopify-cro-agency/" },
        ],
      },
      {
        label: "WordPress",
        icon: { src: "/assets/navigation/wordpress.svg", width: 22, height: 22 },
        links: [
          { label: "WordPress Web Development", href: "/wordpress-development/" },
          { label: "Hire WordPress Developers", href: "/hire-wordpress-developers/" },
          { label: "WordPress Theme Customization", href: "/wordpress-theme-customization-services/" },
          { label: "White Label WordPress Development", href: "/white-label-wordpress-development-services/" },
        ],
      },
      {
        label: "Mobile App Development",
        icon: { src: "/assets/navigation/mobile-app-development.svg", width: 18, height: 24 },
        links: [
          { label: "Android App Development", href: "/android-app-development/" },
          { label: "iOS App Development", href: "/ios-app-development/" },
          { label: "Cross Platform App Developments", href: "/cross-platform-app-development/" },
          { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development/" },
        ],
      },
      {
        label: "E-commerce",
        icon: { src: "/assets/navigation/ecommerce.svg", width: 24, height: 24 },
        links: [
          { label: "Shopify Development", href: "/shopify-development-agency/" },
          { label: "WooCommerce Development", href: "/woocommerce-development/" },
          { label: "Magento Web Development", href: "/magento-development/" },
          { label: "BigCommerce Development", href: "/bigcommerce-development/" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    slug: "industries",
    kind: "compact",
    items: [
      { label: "Beauty & Cosmetics", href: "/beauty-cosmetics/", icon: { src: "/assets/navigation/beauty-and-cosmetics.svg", width: 21, height: 21 } },
      { label: "Fashion & Apparel", href: "/fashion/", icon: { src: "/assets/navigation/fashion-and-apparel.svg", width: 21, height: 21 } },
      { label: "Health & Nutrition", href: "/healthcare/", icon: { src: "/assets/navigation/health-and-nutrition.png", width: 21, height: 21 } },
      { label: "Food & Beverages", href: "/food-beverages/", icon: { src: "/assets/navigation/food-and-beverages.svg", width: 21, height: 21 } },
      { label: "Pet Industry", href: "/pet-industry/", icon: { src: "/assets/navigation/pet-industry.svg", width: 21, height: 21 } },
    ],
  },
  {
    label: "Work",
    slug: "work",
    kind: "compact",
    items: [
      { label: "Portfolio", href: "/our-work/", icon: { src: "/assets/navigation/portfolio.svg", width: 21, height: 21 } },
      { label: "Case Studies", href: "/case-study/", icon: { src: "/assets/navigation/case-studies.svg", width: 21, height: 21 } },
    ],
  },
  {
    label: "White Label",
    slug: "white-label",
    kind: "compact",
    items: [
      {
        label: "White Label Shopify Development",
        href: "/white-label-shopify-development-services/",
        icon: { src: "/assets/navigation/shopify.svg", width: 21, height: 21 },
      },
      {
        label: "White Label WordPress Development",
        href: "/white-label-wordpress-development-services/",
        icon: { src: "/assets/navigation/wordpress.svg", width: 21, height: 21 },
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services/",
        icon: { src: "/assets/navigation/website-design.svg", width: 21, height: 21 },
      },
    ],
  },
];

export const footerNavigation = [
  {
    label: "Company",
    links: [
      { label: "Who we are", href: "/about-us/" },
      { label: "Life @ Dynamic Dreamz", href: "/life-dynamicdreamz/" },
      { label: "Careers", href: "/career/" },
      { label: "Blogs", href: "/blog/" },
      { label: "Portfolio", href: "/our-work/" },
      { label: "Case Studies", href: "/case-study/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
  {
    label: "Shopify Services",
    links: [
      {
        label: "Shopify Development",
        href: "/shopify-development-agency/",
      },
      { label: "Shopify Plus Agency", href: "/shopify-plus-agency/" },
      { label: "Hire Shopify Experts", href: "/shopify-experts/" },
      {
        label: "Shopify Theme customization",
        href: "/shopify-theme-customization/",
      },
      { label: "Shopify Migration", href: "/shopify-migration/" },
      { label: "Shopify Plus Development Agency", href: "/shopify-plus-development-agency/" },
      { label: "Shopify Public App Development", href: "/shopify-apps/" },
      { label: "Shopify Mobile App Development", href: "/shopify-mobile-app-development/" },
      { label: "Buy Shopify hours", href: "/buy-shopify-development-hours/" },
      { label: "Shopify CRO Services", href: "/shopify-cro-agency/" },
    ],
  },
  {
    label: "Web Development Services",
    links: [
      {
        label: "WordPress Web Development",
        href: "/wordpress-development-company/",
      },
      { label: "WordPress Theme Customization", href: "/wordpress-theme-customization-services/" },
      { label: "Woocommerce Development", href: "/woocommerce-development/" },
      { label: "Bigcommerce Development", href: "/bigcommerce-development/" },
      { label: "Magento Web Development", href: "/magento-web-development/" },
      { label: "Webflow Development", href: "/webflow-development/" },
      { label: "UI/UX Design", href: "/web-design/" },
      { label: "PHP Development", href: "/php-development/" },
    ],
  },
  {
    label: "Mobile Services",
    links: [
      { label: "Android App Development", href: "/android-app-development/" },
      { label: "iOS App Development", href: "/ios-app-development/" },
      {
        label: "Cross Platform App Development",
        href: "/cross-platform-app-development/",
      },
    ],
  },
  {
    label: "White label Services",
    links: [
      {
        label: "White Label WordPress Development",
        href: "/white-label-wordpress-development-services/",
      },
      {
        label: "White Label Shopify Development",
        href: "/white-label-shopify-development-services/",
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services/",
      },
    ],
  },
  {
    label: "Hire developers",
    links: [
      { label: "Shopify Developers", href: "/hire-shopify-developers/" },
      { label: "WordPress Developers", href: "/hire-wordpress-developers/" },
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
    src: "/assets/awards/trustpilot-rating.svg",
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
