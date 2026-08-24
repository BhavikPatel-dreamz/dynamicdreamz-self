import { companyFacts } from "@/data/company";

export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
  { src: "/assets/clients/royce-chocolate.svg", alt: "Royce Chocolate logo", width: 132, height: 38 },
  { src: "/assets/clients/jacadi-paris.svg", alt: "Jacadi Paris logo", width: 106, height: 44 },
  { src: "/assets/clients/rare-rabbit.svg", alt: "Rare Rabbit logo", width: 101, height: 70 },
  { src: "/assets/clients/bella-vita.svg", alt: "Bella Vita logo", width: 166, height: 24 },
  { src: "/assets/clients/sri-sri-tattva.svg", alt: "Sri Sri Tattva logo", width: 106, height: 40 },
  { src: "/assets/clients/renee.svg", alt: "Renee logo", width: 93, height: 30 },
  { src: "/assets/clients/nelter.svg", alt: "Nelter logo", width: 109, height: 41 },
  { src: "/assets/clients/tropicfeel.svg", alt: "Tropicfeel logo", width: 137, height: 29 },
  { src: "/assets/clients/ranavat.svg", alt: "Ranavat logo", width: 172, height: 19 },
  { src: "/assets/clients/perfect-locks.svg", alt: "Perfect Locks logo", width: 161, height: 29 },
  { src: "/assets/clients/bombay-shirt-company.svg", alt: "Bombay Shirt Company logo", width: 172, height: 22 },
  { src: "/assets/clients/kalki.svg", alt: "KALKI logo", width: 108, height: 33 },
  { src: "/assets/clients/kvaser.svg", alt: "Kvaser logo", width: 141, height: 26 },
  { src: "/assets/clients/tego.svg", alt: "Tego logo", width: 107, height: 42 },
  { src: "/assets/clients/sleepy-cat.svg", alt: "Sleepy Cat logo", width: 123, height: 41 },
  { src: "/assets/clients/supertails.svg", alt: "Super Tails logo", width: 164, height: 41 },
  { src: "/assets/clients/sim-direct.svg", alt: "SIM Direct logo", width: 143, height: 49 },
  { src: "/assets/clients/eleven-eleven.svg", alt: "Eleven Eleven logo", width: 160, height: 22 },
  { src: "/assets/clients/popclub.svg", alt: "PopClub logo", width: 71, height: 45 },
  { src: "/assets/clients/prolash.svg", alt: "Prolash logo", width: 164, height: 18 },
];

const clientLogoByPath = new Map(clientLogos.map((logo) => [logo.src, logo]));

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

export const expertise = [
  {
    title: "Shopify Development",
    body: "We offer end-to-end Shopify development services, including custom theme development, UX-focused design, performance optimization, and scalable feature implementation. Our team leverage Shopify Sidekick, Shopify's integrated AI-powered commerce assistant, along with hands-on expertise to build reliable, high-quality Shopify stores efficiently.",
  },
  {
    title: "Shopify Migration",
    body: "We manage seamless Shopify migrations from platforms like WooCommerce, Magento, and custom systems. From products and customers to orders, SEO structure, and design consistency, we ensure a smooth transition to Shopify without data loss or business disruption.",
  },
  {
    title: "White Label Shopify Services",
    body: "We provide white-label Shopify development services for agencies and businesses looking to extend their delivery capabilities. By combining experienced developers with structured, AI-assisted workflows, we help partners deliver projects faster while maintaining complete confidentiality, quality standards, and brand ownership.",
  },
  {
    title: "Mobile Application Development",
    body: "We design and develop high-quality mobile applications for iOS and Android, focusing on performance, usability, and scalability. Our mobile development approach blends proven engineering practices with selective AI assistance to streamline builds and deliver stable, user-friendly solutions.",
  },
  {
    title: "Ongoing Support & Maintenance",
    body: "Our ongoing support and maintenance services keep your Shopify store, website, or mobile app secure, updated, and performing at its best. Through proactive monitoring, automation, and intelligent issue resolution, we help ensure long-term stability and reduced downtime.",
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

export type Testimonial = {
  title: string;
  quote: string;
  name: string;
  company: string;
  companyHref?: string;
  avatar: string;
  portrait: string;
  logo?: string;
  logoAlt?: string;
  videoId: string;
  videoUploadDate: string;
};

export const testimonials: Testimonial[] = [
  {
    title: "Dynamic Dreamz: The Trusted Partner for Growing Your Brand.",
    quote: "We have been using dynamic dreamz for four, maybe five years now. I can't say anything but the most positive things. They are diligent, professional, competitively priced.",
    name: "Shari Leidich",
    company: "Max Sweets",
    companyHref: "https://maxsweets.com/",
    avatar: "/assets/testimonials/shari-leidich.webp",
    portrait: "/assets/testimonials/shari-leidich-full.webp",
    logo: "/assets/testimonials/max-sweets-logo.webp",
    logoAlt: "Max Sweets logo",
    videoId: "Vc9FH6ZeoXY",
    videoUploadDate: "2024-08-16",
  },
  {
    title: "Fast. Reliable. Exactly What You Asked For.",
    quote: "Hi, I'm Rebecca, owner of Myla Jane. I've worked with Dynamic Dreamz on several web development projects, and they always do an excellent job. They deliver quickly, follow the brief exactly. We highly recommend Dynamic Dreamz and will continue using them for future projects.",
    name: "Rebekah Wymer",
    company: "Myla Jane",
    companyHref: "https://www.mylajane.com/",
    avatar: "/assets/testimonials/rebekah-wymer.webp",
    portrait: "/assets/testimonials/rebekah-wymer-full.webp",
    logo: "/assets/testimonials/myla-jane-logo.webp",
    logoAlt: "Myla Jane logo",
    videoId: "_ay_egf5GKw",
    videoUploadDate: "2025-11-13",
  },
  {
    title: "Our trusted Shopify partner for six years and still going strong.",
    quote: "Their support has allowed us to focus on growing our brand instead of worrying about technical issues and using time on this.",
    name: "Thommas Linnrose",
    company: "Art Copenhagen",
    companyHref: "https://www.artcopenhagen.com/",
    avatar: "/assets/testimonials/thommas-linnrose.webp",
    portrait: "/assets/testimonials/thommas-linnrose-full.webp",
    logo: "/assets/testimonials/art-copenhagen-logo.svg",
    logoAlt: "Art Copenhagen logo",
    videoId: "_9uT-dRcQvo",
    videoUploadDate: "2025-11-28",
  },
  {
    title: "A partner who turns challenges into clarity and fast solutions.",
    quote: "Gaurav always explained to me what truly happens here and how we can improve it in the future. So we are very happy with the results, and we will continue to work with Gaurav and his team in the foreseeable future. So I highly recommend him.",
    name: "Zoe Wang",
    company: "Maison Zifan",
    companyHref: "https://maisonzifan.com/",
    avatar: "/assets/testimonials/zoe-wang.webp",
    portrait: "/assets/testimonials/zoe-wang-full.webp",
    logo: "/assets/testimonials/maison-zifan-logo.svg",
    logoAlt: "Maison Zifan logo",
    videoId: "6Ni9tlZ7HKE",
    videoUploadDate: "2025-12-03",
  },
  {
    title: "Professional execution with outstanding support, before and after launch.",
    quote: "In 2025, I hired Gaurav and his team at Dynamic Dreamz to upgrade my Shopify art shop, and the experience was seamless from start to finish. Communication was clear and prompt, Gaurav was patient with all my questions, and every issue or request was handled quickly and effectively.",
    name: "Clinton De Vere",
    company: "Clinton De Vere Art",
    companyHref: "https://clintondevereart.com/",
    avatar: "/assets/testimonials/clinton-de-vere.png",
    portrait: "/assets/testimonials/clinton-de-vere-full.webp",
    logo: "/assets/testimonials/clinton-de-vere-logo.svg",
    logoAlt: "Clinton De Vere Art logo",
    videoId: "_rQeMWcz_gA",
    videoUploadDate: "2026-02-10",
  },
  {
    title: "From planning to execution, every project is handled with precision.",
    quote: "Dynamic Dreamz is amazing because they're able to work on Shopify and WordPress platforms, which are essential to my businesses, and being able to scale them. And if you are looking for an amazing website developer on Shopify or WordPress, I recommend Dynamic Dreamz.",
    name: "Fernando Arias",
    company: "LGXNDS",
    companyHref: "https://lgxnds.com/",
    avatar: "/assets/testimonials/fernando-arias.webp",
    portrait: "/assets/testimonials/fernando-arias.webp",
    logo: "/assets/testimonials/lgxnds-logo.svg",
    logoAlt: "LGXNDS logo",
    videoId: "WQWG2niydpE",
    videoUploadDate: "2026-06-03",
  },
  {
    title: "Dynamic Dreamz: Where Excellence Meets Reliable Communication",
    quote: "Gaurav at Dynamic Dreamz excels in web design and development, demonstrating flawless communication, reliability, and confident autonomy.",
    name: "Alec Torelli",
    company: "Conscious Poker",
    companyHref: "https://www.consciouspoker.com/",
    avatar: "/assets/testimonials/alec-torelli.webp",
    portrait: "/assets/testimonials/alec-torelli-full.webp",
    logo: "/assets/testimonials/conscious-poker-logo.webp",
    logoAlt: "Conscious Poker logo",
    videoId: "o4JnTGEH-Yk",
    videoUploadDate: "2024-05-15",
  },
  {
    title: "Delivers a Game-Changing Website, Surging Sales by 12% in Just 7 Days!",
    quote: "Just 7 days post-launch, our sales surged by 12% owing to its advanced features; their expertise and swift updates impressed us, genuinely recommending their Services!",
    name: "William Petz",
    company: "Quiet Events",
    companyHref: "https://www.quietevents.com/",
    avatar: "/assets/testimonials/william-petz.webp",
    portrait: "/assets/testimonials/william-petz-full.webp",
    logo: "/assets/testimonials/quiet-events-logo.webp",
    logoAlt: "Quiet Events logo",
    videoId: "B3KnREB4Bro",
    videoUploadDate: "2024-05-15",
  },
  {
    title: "Transforming Web Presence: Dynamic Dreamz's Six-Month Success Story",
    quote: "In six months, Dynamic Dreamz revamped our website, turning it from error-ridden to seamlessly functional and visually appealing, significantly enhancing our digital presence.",
    name: "William ST Baker",
    company: "Elite Element Electronics",
    avatar: "/assets/testimonials/william-st-baker.webp",
    portrait: "/assets/testimonials/william-st-baker-full.webp",
    logo: "/assets/testimonials/elite-element-electronics-logo.svg",
    logoAlt: "Elite Element Electronics logo",
    videoId: "-IpNUAco1OA",
    videoUploadDate: "2024-05-15",
  },
  {
    title: "Dynamic Dreamz, Your Go-To Digital Agency for Exceptional Web Solutions",
    quote: "Dynamic Dreamz and Gaurav's invaluable expertise and support were instrumental in our success, making them a reliable choice for any digital agency needs.",
    name: "Kerri Imrie",
    company: "Tea Now",
    companyHref: "https://teanow.com.au/",
    avatar: "/assets/testimonials/kerri-imrie.webp",
    portrait: "/assets/testimonials/kerri-imrie-full.webp",
    logo: "/assets/testimonials/tea-now-logo.webp",
    logoAlt: "Tea Now logo",
    videoId: "oNDPBGO83G4",
    videoUploadDate: "2024-05-15",
  },
  {
    title: "Dynamic Dreamz: Setting the Standard in Web Development Excellence",
    quote: "Dynamic Dreamz excels in web development with unmatched responsiveness, professionalism, and quality assurance, highly recommended for all projects.",
    name: "Brandon",
    company: "USA",
    avatar: "/assets/testimonials/brandon.webp",
    portrait: "/assets/testimonials/brandon-full.webp",
    videoId: "AoglCZQC0RU",
    videoUploadDate: "2024-05-15",
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

export type CommerceSolution = {
  title: string;
  summary: string;
  body: string;
  href: string;
  cta: string;
};

export const commerceSolutions: readonly CommerceSolution[] = [
  {
    title: "Shopify Plus Development",
    summary: "Enterprise storefronts, flexible checkout, and global commerce",
    body: "Enterprise Shopify Plus development for established DTC, retail and B2B merchants. Capabilities include multi-store architecture, international expansion, checkout extensibility, Shopify Functions, complex product experiences and ERP, CRM or PIM integration.",
    href: "/shopify-plus-agency",
    cta: "Explore Shopify Plus",
  },
  {
    title: "Shopify Migration & Replatforming",
    summary: "Seamless migration from leading ecommerce platforms",
    body: "We replatform businesses from Magento, Salesforce Commerce Cloud, BigCommerce, WooCommerce, and custom systems to Shopify and Shopify Plus, including data migration, URL mapping, redirects, SEO preservation, integration rebuilding, staged cutover, and post-launch stabilization.",
    href: "/shopify-migration",
    cta: "Explore Shopify Migration",
  },
  {
    title: "CRO, Performance & Ongoing Support",
    summary: "Conversion, Core Web Vitals, and technical optimization",
    body: "Using analytics, user behavior, and technical reviews, we identify friction across landing pages, collections, product pages, cart, and checkout, then implement CRO, performance, Core Web Vitals, and ongoing optimization improvements.",
    href: "/shopify-cro-agency",
    cta: "Explore CRO & Performance",
  },
  {
    title: "Shopify Custom Apps, Integrations & Full-Stack Development",
    summary: "Custom apps, APIs, portals, and workflow integrations",
    body: "When Shopify requires functionality beyond standard theme and app capabilities, our full-stack team builds customer portals, vendor dashboards, middleware, product configurators, custom workflows, APIs, and secure applications that connect with Shopify.",
    href: "/contact-us",
    cta: "Discuss Custom Development",
  },
  {
    title: "Shopify Store Development & Theme Customization",
    summary: "Custom storefronts, UX, and native themes for growing brands",
    body: "Custom Shopify storefronts, redesigns, and native theme development for DTC brands, with scalable architecture, mobile usability, product discovery, and conversion-focused user experiences.",
    href: "/shopify-development-agency",
    cta: "Explore Shopify Development",
  },
  {
    title: "Shopify B2B & Wholesale",
    summary: "Company accounts, catalogs, pricing, and operations",
    body: "We implement Shopify Plus B2B functionality, including company accounts, customer-specific catalogs and pricing, quantity rules, payment terms, quick ordering, quote workflows, and ERP, CRM, or PIM integrations.",
    href: "/shopify-plus-agency",
    cta: "Explore Shopify B2B",
  },
  {
    title: "Shopify Mobile App Development",
    summary: "Connected iOS and Android shopping apps beyond the storefront",
    body: "We build Shopify-connected iOS and Android shopping apps with real-time product and order synchronization, customer accounts, push notifications, loyalty, subscriptions, and experiences designed to drive repeat purchases.",
    href: "/shopify-mobile-app-development",
    cta: "Explore Mobile Apps",
  },
  {
    title: "WordPress & WooCommerce",
    summary: "Custom websites, ecommerce, and ongoing development support",
    body: "Alongside Shopify, our WordPress and WooCommerce teams provide custom websites, ecommerce development, theme customization, integrations, maintenance, and white-label delivery for businesses and digital agencies.",
    href: "/wordpress-development",
    cta: "Explore WordPress & WooCommerce",
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
