export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const homeSectionCopy = {
  established: "ESTABLISHED IN 2006",
  partnerBadge: "Shopify Platinum Partner",
  heroTitle: "Shopify Plus & Enterprise Shopify Solutions",
  brandPartnersHeading: "Partnering with Ambitious Brands",
  brandPartnersDescription:
    "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.",
  agencyOverviewTitle: "Globally Trusted Web & App Development Agency",
  agencyOverviewDescription:
    "With sharp custom design, smooth development, and long-term support, build a brand that scales worldwide.",
  commerceSolutionsTitle: "Commerce & technology solutions.",
  commerceSolutionsDescription:
    "From Shopify Plus and ecommerce development to mobile apps, full-stack solutions, WordPress and WooCommerce, our teams support established brands and digital agencies through one experienced delivery partner.",
  commerceAccordion: {
    close: "Close",
    open: "Open",
  },
  expertiseTitle: "Our Expertise",
  expertiseDescription:
    "From strategy and design to development and long-term support, we help brands build, scale, and maintain high-performing digital products. Our expertise spans Shopify development, custom websites, and mobile applications, with a strong focus on performance, usability, and business growth.",
  testimonialsTitle: "Brands That Have Grown With Us",
  testimonialsDescription:
    "Hear from founders, ecommerce teams and agency partners who rely on Dynamic Dreamz for Shopify builds, migrations, mobile apps, ongoing development and long-term technical support.",
  integrationsTitle: "Our Partners",
  integrationsDescription:
    "Our teams work across the Shopify ecosystem to implement subscriptions, reviews, retention, customer support, search, B2B, payments and operational integrations.",
  selectedWorkTitle: "Selected Shopify Plus & Enterprise Ecommerce Work",
  selectedWorkDescription:
    "Explore Shopify and Shopify Plus projects across beauty, fashion, B2B, wholesale, international commerce and large-catalogue ecommerce.",
  insightsTitle: "Our Latest Blogs",
  homeFaqTitle: "What Brands and Agencies Usually Want to Know",
  homeFaqDescription:
    "Clear answers about our Shopify, Shopify Plus, mobile app, white-label and wider technology services.",
  whiteLabelPartnerEyebrow: "For Agencies",
  whiteLabelPartnerTitle: "Your White Label Shopify Partner",
  whiteLabelPartnerDescription:
    "Digital agencies partner with Dynamic Dreamz as an extension of their team for Shopify, Shopify Plus and full-stack delivery. We support Figma-to-Shopify development, migrations, integrations, maintenance and dedicated development teams under NDA, while your agency retains the client relationship.",
  whiteLabelPartnerBullets: ["NDA Based", "No Direct Client Solicitation", "Dedicated Teams"],
  ctaViewWork: "View our work",
  discoveryCta: "book a discovery call",
  shopifyWorkCta: "VIEW OUR SHOPIFY WORK",
  viewAllBlogsCta: "View all blogs",
  agencyPartnershipCta: "Explore Agency Partnership",
  portfolioEyebrow: "Portfolio",
} as const;

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
