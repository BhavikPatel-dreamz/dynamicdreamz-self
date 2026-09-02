import { companyFacts } from "@/data/company";
import type { ImageItem } from "@/content/home-client";

export {
  commerceSolutions,
  expertise,
  homeSectionCopy,
  testimonials,
} from "@/content/home-client";
export type { CommerceSolution, ImageItem, Testimonial } from "@/content/home-client";

export const homeAnswerSummary =
  "We help DTC brands, B2B businesses and digital agencies build, migrate and scale on Shopify through custom development, B2B solutions, integrations, CRO, performance optimization and ongoing support.";

export const organizationAnswerSummary =
  "Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency helping established DTC brands, B2B merchants, and digital agencies build, migrate, integrate, optimize, and support Shopify commerce experiences.";

export const aiDeliveryStatement =
  "To accelerate delivery without compromising quality, our teams use modern AI-powered tools such as Cursor, ChatGPT, Claude, Lovable, Bolt, and n8n, alongside proven development processes.";

export type ShopifyPlusAgencyCounter = {
  value: string;
  label: string;
  note: string;
  tone: "green" | "stone" | "peach" | "lime";
};

export const shopifyPlusAgencyContent = {
  eyebrow: "Why Dynamic Dreamz",
  title: "A Shopify Plus Agency Built for Complex Ecommerce Growth",
  intro:
    "Dynamic Dreamz has been helping global brands and digital agencies build and grow ecommerce businesses since 2006. Today, Shopify and Shopify Plus are at the core of what we do.",
  paragraphs: [
    "We support established DTC, retail and B2B businesses with Shopify Plus development, migrations, B2B and wholesale, international expansion, CRO, performance optimization, custom integrations and ongoing development.",
    "When a project needs more than the Shopify storefront, our mobile app and full-stack teams can build connected solutions around Shopify. We also support WordPress and WooCommerce for other website and ecommerce requirements.",
  ],
  counters: [
    { value: "20+", label: "Years of Experience", note: "Established in 2006", tone: "green" },
    { value: "150+", label: "Experts", note: "AI empowered. Continuously trained", tone: "stone" },
    { value: "5,000+", label: "projects delivered", note: "Ecommerce, web and mobile", tone: "peach" },
    { value: "2,500+", label: "Verified 5 star Reviews", note: "From Clutch, Trustpilot & Upwork", tone: "lime" },
  ] satisfies readonly ShopifyPlusAgencyCounter[],
  videoSrc: "/assets/home/why-dynamic-dreamz.mp4",
} as const;

export const proofLogos: (ImageItem & { href: string })[] = [
  {
    src: "/assets/proof/shopify-platinum-partner.svg",
    alt: "Dynamic Dreamz - Shopify Platinum Partner",
    width: 136,
    height: 44,
    href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  },
  {
    src: "/assets/proof/clutch-rating.svg",
    alt: "Dynamic Dreamz on Clutch — 4.9 rating",
    width: 111,
    height: 44,
    href: "https://clutch.co/profile/dynamic-dreamz",
  },
  {
    src: "/assets/proof/trustpilot-rating.svg",
    alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
    width: 148,
    height: 50,
    href: "https://www.trustpilot.com/review/dynamicdreamz.com",
  },
  {
    src: "/assets/proof/upwork-top-rated-plus.svg",
    alt: "Dynamic Dreamz — Upwork Top Rated Plus",
    width: 126,
    height: 54,
    href: "https://www.upwork.com/ag/dynamicdreamz/",
  },
];

export const clientLogos: ImageItem[] = [
  { src: "/assets/clients/royce-chocolate-black.svg", alt: "Royce Chocolate logo", width: 132, height: 38 },
  { src: "/assets/clients/jacadi-paris.svg", alt: "Jacadi Paris logo", width: 106, height: 44 },
  { src: "/assets/clients/rare-rabbit.svg", alt: "Rare Rabbit logo", width: 101, height: 70 },
  { src: "/assets/clients/bella-vita.svg", alt: "Bella Vita logo", width: 166, height: 24 },
  { src: "/assets/case-studies/brands/sri-sri-tattva.svg", alt: "Sri Sri Tattva logo", width: 106, height: 40 },
  { src: "/assets/clients/renee.svg", alt: "Renee logo", width: 93, height: 30 },
  { src: "/assets/clients/nelter.svg", alt: "Nelter logo", width: 109, height: 41 },
  { src: "/assets/clients/tropicfeel.svg", alt: "Tropicfeel logo", width: 137, height: 29 },
  { src: "/assets/clients/ranavat.svg", alt: "Ranavat logo", width: 172, height: 19 },
  { src: "/assets/clients/perfect-locks-black.svg", alt: "Perfect Locks logo", width: 161, height: 29 },
  { src: "/assets/clients/bombay-shirt-company.svg", alt: "Bombay Shirt Company logo", width: 172, height: 22 },
  { src: "/assets/clients/kalki.svg", alt: "KALKI logo", width: 108, height: 33 },
  { src: "/assets/clients/kvaser.svg", alt: "Kvaser logo", width: 141, height: 26 },
  { src: "/assets/clients/tego.svg", alt: "Tego logo", width: 107, height: 42 },
  { src: "/assets/clients/sleepy-cat.svg", alt: "Sleepy Cat logo", width: 123, height: 41 },
  { src: "/assets/case-studies/brands/supertails.svg", alt: "Super Tails logo", width: 164, height: 41 },
  { src: "/assets/clients/sim-direct.svg", alt: "SIM Direct logo", width: 143, height: 49 },
  { src: "/assets/clients/eleven-eleven.svg", alt: "Eleven Eleven logo", width: 160, height: 22 },
  { src: "/assets/clients/popclub_co.svg", alt: "PopClub logo", width: 71, height: 45 },
  { src: "/assets/clients/prolash.svg", alt: "Prolash logo", width: 164, height: 18 },
];

const canonicalClientLogoAliases: ImageItem[] = [
  { src: "/assets/clients/royce-chocolate.svg", alt: "Royce Chocolate logo", width: 132, height: 38 },
  { src: "/assets/clients/sri-sri-tattva.svg", alt: "Sri Sri Tattva logo", width: 106, height: 40 },
  { src: "/assets/clients/perfect-locks.svg", alt: "Perfect Locks logo", width: 161, height: 29 },
  { src: "/assets/clients/supertails.svg", alt: "Super Tails logo", width: 164, height: 41 },
  { src: "/assets/clients/popclub.svg", alt: "PopClub logo", width: 71, height: 45 },
];

const clientLogoByPath = new Map(
  [...clientLogos, ...canonicalClientLogoAliases].map((logo) => [logo.src, logo]),
);

export function getClientLogo(src: string): ImageItem {
  const logo = clientLogoByPath.get(src);
  if (!logo) throw new Error(`Missing canonical client logo: ${src}`);
  return logo;
}

export const mobileClientLogoRows = [
  [clientLogos[8], clientLogos[12], clientLogos[19], clientLogos[7], clientLogos[9], clientLogos[3]],
  [clientLogos[10], clientLogos[6], clientLogos[0], clientLogos[13], clientLogos[18], clientLogos[14], clientLogos[16]],
  [clientLogos[15], clientLogos[4], clientLogos[17], clientLogos[5], clientLogos[11], clientLogos[1], clientLogos[2]],
];

export const companyStats = [
  { value: companyFacts.clientRevenueGenerated.display, label: ["Client Revenue", "Generated"], icon: "/assets/icons/client-revenue.svg" },
  { value: companyFacts.experts.display, label: ["Experts"], icon: "/assets/icons/experts.svg" },
  { value: companyFacts.shopifyStoresBuilt.display, label: ["Shopify stores built"], icon: "/assets/icons/shopify-stores.svg" },
  { value: companyFacts.happyClients.display, label: ["Happy Clients"], icon: "/assets/icons/happy-clients.svg" },
];

export const showcaseImages: ImageItem[] = [
  {
    src: "/assets/showcase/renee-desktop.webp",
    alt: "RENEE Cosmetics Shopify storefront on desktop featuring the Lumi Glow makeup range",
    width: 548,
    height: 323,
  },
  {
    src: "/assets/showcase/renee-mobile.webp",
    alt: "RENEE Cosmetics Shopify store on mobile showing the Tinted Moisturiser launch",
    width: 266,
    height: 489,
  },
  {
    src: "/assets/showcase/kalki-mobile.webp",
    alt: "KALKI Fashion Shopify store on mobile with category navigation and live video shopping",
    width: 266,
    height: 489,
  },
  {
    src: "/assets/showcase/calmenta-desktop.webp",
    alt: "Calmenta Shopify storefront for the Dutch market, selling massage and relaxation products",
    width: 548,
    height: 307,
  },
  {
    src: "/assets/showcase/matcha-republic-desktop.webp",
    alt: "Matcha Republic Shopify storefront with the organic flavoured matcha range",
    width: 548,
    height: 323,
  },
  {
    src: "/assets/showcase/ranavat-desktop.webp",
    alt: "Ranavat Shopify storefront homepage featuring the Saffron Collection",
    width: 548,
    height: 323,
  },
];

export type Project = {
  name: string;
  href: string;
  media: { type: "image"; src: string; alt: string } | { type: "video"; src: string };
};

export const projects: Project[] = [
  {
    name: "Holy Plantz",
    href: "https://holyplantz.com/",
    media: { type: "image", src: "/assets/our-work/projects/holy-plantz.webp", alt: "Holy Plantz Shopify storefront" },
  },
  {
    name: "Sleepy Cat",
    href: "https://sleepycat.in/",
    media: { type: "video", src: "/assets/portfolio/sleepy-cat.mp4" },
  },
  {
    name: "Matcha Republic",
    href: "https://www.matcharepublic.com/",
    media: {
      type: "image",
      src: "/assets/our-work/projects/matcha-republic.webp",
      alt: "Matcha Republic Shopify store showing the product range and brand pages",
    },
  },
  {
    name: "Tropicfeel",
    href: "https://shop.tropicfeel.com/",
    media: { type: "video", src: "/assets/portfolio/tropicfeel.mp4" },
  },
  {
    name: "Gotta Pee",
    href: "https://gottapee.xyz/",
    media: { type: "image", src: "/assets/portfolio/gotta-pee.webp", alt: "Gotta Pee Shopify storefront" },
  },
];


export const integrationLogos: ImageItem[] = [
  { src: "/assets/integrations/recharge.svg", alt: "Recharge logo", width: 180, height: 36 },
  { src: "/assets/integrations/klaviyo.svg", alt: "Klaviyo logo", width: 137, height: 40 },
  { src: "/assets/integrations/shop-circle.svg", alt: "Shop Circle logo", width: 190, height: 43 },
  { src: "/assets/integrations/judge-me.svg", alt: "Judge.me logo", width: 194, height: 48 },
  { src: "/assets/integrations/gorgias.svg", alt: "Gorgias logo", width: 155, height: 41 },
  { src: "/assets/integrations/boost-commerce.svg", alt: "Boost logo", width: 162, height: 54 },
  { src: "/assets/integrations/razorpay.svg", alt: "Razorpay logo", width: 203, height: 43 },
  { src: "/assets/integrations/stamped.svg", alt: "Stamped logo", width: 193, height: 51 },
  { src: "/assets/integrations/yotpo.svg", alt: "Yotpo logo", width: 151, height: 43 },
  { src: "/assets/integrations/logbase.svg", alt: "Logbase logo", width: 187, height: 43 },
  { src: "/assets/integrations/recurpay.svg", alt: "Recurpay logo", width: 180, height: 55 },
  { src: "/assets/integrations/bss-commerce.svg", alt: "BSS Commerce logo", width: 124, height: 71 },
];

export const integrationLogoRows = [integrationLogos.slice(0, 6), integrationLogos.slice(6)];

export const insights = [
  {
    title: "Shopify CRO Checklist: 10 Urgent CRO Steps You Should Know Right Now",
    href: "/blogs/shopify-cro-checklist",
    image: "/assets/blog/shopify-cro-checklist.webp",
    width: 1600,
    height: 1206,
    date: "2026-08-11",
    displayDate: "August 11 2026",
    category: "Shopify",
    categoryHref: "/blogs/category/shopify",
  },
  {
    title: "Shopify Plus For Global Brands: Scale Smarter, Sell Everywhere",
    href: "/blogs/shopify-plus-for-global-brands",
    image: "/assets/blog/shopify-plus-for-global-brands.webp",
    width: 1024,
    height: 774,
    date: "2026-04-08",
    displayDate: "April 8 2026",
    category: "Shopify",
    categoryHref: "/blogs/category/shopify",
  },
  {
    title: "7 Most Common Shopify Data Migration Challenges For Business",
    href: "/blogs/shopify-data-migration-challenges",
    image: "/assets/blog/shopify-data-migration-challenges.webp",
    width: 1024,
    height: 515,
    date: "2026-02-18",
    displayDate: "February 18 2026",
    category: "Shopify",
    categoryHref: "/blogs/category/shopify",
  },
];


export const homeFaqs = [
  {
    question: "Is Dynamic Dreamz a Shopify Platinum Partner?",
    answer: "Yes. Dynamic Dreamz is a Shopify Platinum Partner. The company was established in 2006 and has 20+ years of experience, 150+ experts and 5,000+ projects delivered across ecommerce, mobile and full-stack development.",
  },
  {
    question: "What ecommerce services does Dynamic Dreamz provide?",
    answer: "Dynamic Dreamz provides Shopify and Shopify Plus development, migration, B2B and wholesale solutions, CRO, performance optimization, WordPress, WooCommerce, custom apps, integrations, mobile apps, maintenance and dedicated development support.",
  },
  {
    question: "Do you work with Shopify Plus and B2B businesses?",
    answer: "Yes. We support established merchants with Shopify Plus storefronts, B2B and wholesale requirements, international stores, complex catalogues, checkout customization, integrations and ongoing development.",
  },
  {
    question: "Do you provide WordPress and WooCommerce development?",
    answer: "Yes. Our WordPress and WooCommerce teams provide custom websites, ecommerce development, maintenance and white-label delivery for brands and agencies.",
  },
  {
    question: "Can you build a mobile app for an ecommerce business?",
    answer: "Yes. We build Shopify-connected and custom iOS and Android applications with features such as real-time product and order synchronization, customer accounts, loyalty, subscriptions and push notifications.",
  },
  {
    question: "Do you provide white-label development for agencies?",
    answer: "Yes. Digital agencies can use Dynamic Dreamz as a confidential delivery partner for Shopify, WordPress, WooCommerce, mobile and full-stack projects under NDA.",
  },
] as const;
