export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href?: string;
  links: NavigationLink[];
};

export const primaryNavigation: NavigationGroup[] = [
  {
    label: "About Us",
    links: [
      { label: "Who we are", href: "/about-us/" },
      { label: "Careers", href: "/career/" },
      { label: "Life @ Dynamic Dreamz", href: "/life-dynamicdreamz/" },
      { label: "Resources", href: "/blog/" },
    ],
  },
  {
    label: "Services",
    links: [
      {
        label: "Shopify Development",
        href: "/shopify-development-agency/",
      },
      { label: "Shopify Plus Agency", href: "/shopify-plus-agency/" },
      { label: "Shopify Migration", href: "/shopify-migration/" },
      { label: "Shopify CRO Services", href: "/shopify-cro-agency/" },
      {
        label: "Shopify Mobile Apps",
        href: "/shopify-mobile-app-development/",
      },
      {
        label: "WordPress Development",
        href: "/wordpress-development-company/",
      },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Beauty & Cosmetics", href: "/beauty-and-cosmetics/" },
      { label: "Fashion & Apparel", href: "/fashion-and-apparel/" },
      { label: "Health & Nutrition", href: "/health-and-nutrition/" },
      { label: "Food & Beverages", href: "/food-and-beverages/" },
      { label: "Pet Industry", href: "/pet-industry/" },
    ],
  },
  {
    label: "Work",
    links: [
      { label: "Portfolio", href: "/our-work/" },
      { label: "Case Studies", href: "/case-study/" },
    ],
  },
  {
    label: "White Label",
    links: [
      {
        label: "White Label Shopify",
        href: "/white-label-shopify-development-services/",
      },
      {
        label: "White Label WordPress",
        href: "/white-label-wordpress-development-services/",
      },
      {
        label: "White Label Website Design",
        href: "/white-label-website-design-services/",
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
