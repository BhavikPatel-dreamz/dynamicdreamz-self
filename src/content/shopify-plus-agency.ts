import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const shopifyPlusAgencyHero = {
  title: "Shopify Plus Agency",
  subheading: "Your Shopify Plus technology partner for high-growth and enterprise brands.",
  description:
    "Dynamic Dreamz is a Shopify Platinum Partner helping DTC brands, B2B businesses and enterprise ecommerce teams build, migrate and scale on Shopify Plus. Our team supports custom storefront development, B2B solutions, integrations, checkout extensibility, CRO, performance optimization and ongoing technical delivery.",
  ctaLabel: "Book a Discovery Call",
  ctaHref: "/book-a-discovery-call",
  secondaryCta: {
    label: "View Shopify Plus Work",
    href: "#our_work",
    ariaLabel: "View Shopify Plus Work",
  },
  eyebrows: ["Established in 2006", "Shopify Platinum Partner"],
  videoSrc: "/assets/home/why-dynamic-dreamz.mp4",
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
      alt: "Dynamic Dreamz on Clutch - 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      name: "Trustpilot",
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot - 4.9 TrustScore",
      width: 148,
      height: 50,
    },
    {
      name: "Upwork",
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz - Upwork Top Rated Plus",
      width: 126,
      height: 54,
    },
  ],
  videoLogo: {
    src: "/assets/platforms/shopify-plus-white.svg",
    alt: "Shopify Plus",
    width: 143,
    height: 30,
  },
} as const;

export type ReviewPlatform = {
  name: string;
  backgroundColor: string;
  wordmark: string;
  wordmarkAlt: string;
  wordmarkWidth: number;
  wordmarkHeight: number;
  starPaths: "red" | "blue";
  starFill: string;
  rating: string;
  pillLabel: string;
  pillHref: string;
  pillColor: string;
  pillBorderWidth: number;
};

export const shopifyPlusAgencyReviews: readonly ReviewPlatform[] = [
  {
    name: "Clutch",
    backgroundColor: "#F8DDD7",
    wordmark: "/assets/reviews/clutch-wordmark.svg",
    wordmarkAlt: "Clutch",
    wordmarkWidth: 205,
    wordmarkHeight: 57,
    starPaths: "red",
    starFill: "#FF0000",
    rating: "5.0 RATINGS",
    pillLabel: "132 REVIEWS",
    pillHref: "https://clutch.co/profile/dynamic-dreamz",
    pillColor: "#FF0000",
    pillBorderWidth: 1.577,
  },
  {
    name: "Upwork",
    backgroundColor: "rgba(227, 241, 213, 1)",
    wordmark: "/assets/reviews/upwork-wordmark.svg",
    wordmarkAlt: "Upwork",
    wordmarkWidth: 205,
    wordmarkHeight: 70,
    starPaths: "red",
    starFill: "#6FDA44",
    rating: "5.0 RATINGS",
    pillLabel: "2000+ REVIEWS",
    pillHref: "https://www.upwork.com/agencies/dynamicdreamz/",
    pillColor: "#6FDA44",
    pillBorderWidth: 1.3,
  },
  {
    name: "GoodFirms",
    backgroundColor: "rgba(216, 229, 255, 1)",
    wordmark: "/assets/reviews/goodfirms-wordmark.svg",
    wordmarkAlt: "GoodFirms",
    wordmarkWidth: 223,
    wordmarkHeight: 41,
    starPaths: "blue",
    starFill: "#3A7AF3",
    rating: "5.0 RATINGS",
    pillLabel: "72 REVIEWS",
    pillHref: "https://www.goodfirms.co/company/dynamic-dreamz",
    pillColor: "#3A7AF3",
    pillBorderWidth: 1.3,
  },
] as const;

export const shopifyPlusAgencyServices = {
  heading: "Shopify Plus Services for High-Growth Brands",
  eyebrow: "End-to-End Shopify Plus",
  description:
    "Dynamic Dreamz provides end-to-end Shopify Plus development for brands that need scalable storefronts, complex integrations, migration support and ongoing technical capacity. The service content remains detailed so enterprise buyers can understand exactly where our Shopify Plus team can support them.",
  items: [
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/shopify-plus-store-development.svg",

      iconAlt: "shopify plus icon",
      title: "Shopify Plus Store Setup",
      description:
        "Launch a scalable Shopify Plus store with custom storefront development, checkout extensibility, integrations, automation and performance optimization built for long-term growth.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/figma-xd-to-shopify-conversion.svg",

      iconAlt: "Shopify Plus consulting icon",
      title: "Shopify Plus Consulting Service",
      description:
        "Get expert Shopify Plus consulting for platform architecture, B2B, Markets, Shopify Functions, integrations, migrations and optimization before committing to development.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/seamless-shopify-migration.svg",

      iconAlt: "Migration Icon",
      title: "Shopify Plus Migration Service",
      description:
        "Migrate to Shopify Plus from Magento, WooCommerce, BigCommerce or custom platforms with secure data migration, 301 redirects, SEO preservation and integration planning.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/shopify-app-integration-customization.svg",

      iconAlt: "theme customization icon",
      title: "Shopify Plus Mobile App Development.",
      description:
        "Build high-performance iOS and Android shopping apps integrated with Shopify Plus, including real-time products, customer accounts, checkout, push notifications and loyalty features.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/shopify-plus-store-development.svg",

      iconAlt: "custom theme icon",
      title: "Shopify Plus B2B & Wholesale Development",
      description:
        "Build Shopify Plus B2B and wholesale experiences with company accounts, custom catalogs, price lists, payment terms, buyer permissions and ERP or CRM integrations.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/custom-shopify-theme-design-customization.svg",

      iconAlt: "White Label icon",
      title: "Shopify Plus Custom Theme Development Service",
      description:
        "Develop a custom Shopify Plus theme from Figma with flexible sections, tailored PDP and PLP experiences, responsive interactions and performance-focused development.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/white-label-shopify-development.svg",

      iconAlt: "maintenance icon",
      title: "Shopify Plus White Label Service",
      description:
        "Partner with Dynamic Dreamz for white-label Shopify Plus development, migrations, custom integrations, B2B solutions, QA and ongoing technical support for your agency clients.",
    },
    {
      icon: "/assets/services/shopify-development-in-bangalore/services/shopify-store-maintenance-support.svg",
      iconAlt: "maintenance icon",
      title: "Shopify Plus Maintenance Service",
      description:
        "Keep your Shopify Plus store evolving with ongoing development, bug fixes, CRO implementation, performance improvements, app changes, integrations and dedicated technical support.",
    },
  ],
} as const;

export const shopifyPlusAgencyWhyChoose = {
  eyebrow: "Dynamic Dreamz · Shopify Platinum Partner",
  heading: "Why Shopify Plus Brands Choose Dynamic Dreamz",
  intro:
    "Dynamic Dreamz delivers end-to-end Shopify Plus development, migrations, B2B solutions, integrations and ongoing support for high-growth and enterprise ecommerce brands.",
  text:
    "Dynamic Dreamz has delivered ecommerce solutions since 2006 and supports brands worldwide through an experienced India-based delivery team. As a Shopify Platinum Partner, we bring Shopify specialists together with designers, mobile app developers, full-stack engineers and QA resources so Shopify Plus brands can work with one technology partner across complex commerce requirements.",
  stats: [
    "Shopify Platinum Partner",
    "20+ years in ecommerce",
    "150+ cross-functional experts",
    "5,000+ projects delivered",
  ],
} as const;

export const shopifyPlusAgencyCaseStudies = {
  eyebrow: "Case Studies",
  heading: "Explore Our Client Case Studies",
  description:
    "See how Dynamic Dreamz approaches Shopify and Shopify Plus requirements across redesigns, custom commerce, integrations and long-term development partnerships.",
  items: [
    {
      name: "Calmenta: Custom Shopify Impact Theme Redesign for a Luxury Wellness Brand",
      image: "/assets/shopify-plus-agency/case-studies/calmenta.jpg",
      imageAlt: "Calmenta Shopify Impact theme redesign for a luxury wellness brand",
      href: "/case-studies/calmenta",
      platform: "Shopify / Shopify Plus",
      industry: "Healthcare & Medical",
      description: "See how Dynamic Dreamz redesigned Calmenta's Shopify storefront using the Impact theme for a more premium wellness shopping experience.",
      chips: ["Impact Theme Customization", "Shopify Plus"],
    },
    {
      name: "Trendia: Shopify + Unicommerce Integration for 300+ Vendor Inventory & Local-First Fulfillment",
      image: "/assets/shopify-plus-agency/case-studies/trendia.jpg",
      imageAlt: "Trendia Shopify and Unicommerce inventory integration",
      href: "/case-studies/trendia",
      platform: "Shopify / Shopify Plus",
      industry: "Fashion & Apparel",
      description: "See how Dynamic Dreamz connected Shopify and Unicommerce for Trendia to support inventory and fulfillment workflows across 300+ vendors.",
      chips: ["Multi-Vendor Inventory", "Unicommerce Integration"],
    },
    {
      name: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
      image: "/assets/shopify-plus-agency/case-studies/nekter-juice-bar.jpg",
      imageAlt: "Nekter Juice Bar Shopify redesign with multi-location store pickup",
      href: "/case-studies/nekter-juice-bar",
      platform: "Shopify / Shopify Plus",
      industry: "Food & Beverages",
      description: "See how Dynamic Dreamz improved Nekter Juice Bar's Shopify experience with streamlined ordering and multi-location store pickup functionality.",
      chips: ["Multi-Location Store Pickup", "Streamlined Ordering"],
    },
  ],
  ctaLabel: "View Case study",
} as const;

export const shopifyPlusAgencyFaqDescription =
  "Clear answers about our Shopify Plus capabilities, developers, B2B services, migrations, pricing and ongoing support.";

export const shopifyPlusAgencyHowToChoose = {
  eyebrow: "Evaluation Framework",
  heading: "How to Choose the Right Shopify Plus Agency",
  description:
    "When comparing Shopify Plus partners, evaluate relevant project experience, technical breadth,delivery process, case studies and long-term support. Dynamic Dreamz is structured to support brands from initial planning through implementation and ongoing Shopify Plus development.",
  items: [
    { title: "Relevant Shopify Plus Experience", description: "Look for evidence across complex storefronts, B2B, migrations, custom functionality and enterprise integrations." },
    { title: "Strong Portfolio & Case Studies", description: "Review projects in comparable industries and understand what the agency actually delivered, not only the final visual design." },
    { title: "Clear Delivery Process", description: "Ask how discovery, implementation, QA, migration, deployment and support are managed across the project lifecycle." },
    { title: "Long-Term Technical Partner", description: "Choose a team that can continue supporting performance, integrations, CRO and new requirements after launch." },
  ],
} as const;

export const shopifyPlusAgencyPricing = {
  eyebrow: "Flexible Shopify Plus Engagements",
  heading: "Choose the Right Shopify Plus Engagement",
  description:
    "Start with one Shopify Plus project, use flexible hourly support, or add a dedicated developer / team around your ongoing ecommerce roadmap.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description: "For complete Shopify Plus builds, migrations, redesigns, B2B requirements, custom apps, integrations and technically complex ecommerce projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Shopify Capacity?",
      price: "$25/hour",
      description: "For ongoing maintenance, enhancements, troubleshooting, performance improvements and changing Shopify Plus development requirements.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: "/buy-shopify-development-hours",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description: "For brands with a steady Shopify roadmap, multiple storefronts or a need for a dedicated developer or wider delivery team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
} as const;

export const shopifyPlusAgencyIndustries = {
  eyebrow: "Industries that we have served",
  heading: "Shopify Plus Experience Across Leading Industries",
  description:
    "Dynamic Dreamz supports Shopify Plus and high-growth ecommerce brands across eight core industries where merchandising, customer experience, subscriptions, B2B, integrations and operational complexity can directly affect growth.",
  items: [
    {
      image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
      imageAlt: "Health and nutrition Shopify Plus storefront",
      title: "Health & Nutrition",
      eyebrow: "Shopify Plus Industry",
      description: "Shopify Plus experiences for supplement and wellness brands with trust-led UX, subscriptions, education and repeat-purchase journeys.",
      href: "/healthcare",
    },
    {
      image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
      imageAlt: "Fashion and apparel Shopify Plus storefront",
      title: "Fashion & Apparel",
      eyebrow: "Shopify Plus Industry",
      description: "Premium commerce experiences with merchandising depth, variant complexity, product discovery and mobile-first shopping journeys.",
      href: "/fashion",
    },
    {
      image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
      imageAlt: "Beauty and cosmetics Shopify Plus storefront",
      title: "Beauty & Cosmetics",
      eyebrow: "Shopify Plus Industry",
      description: "High-converting storefronts for beauty brands that need visual storytelling, product education, subscriptions and stronger merchandising.",
      href: "/beauty-cosmetics",
    },
    {
      image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
      imageAlt: "Food and beverage Shopify Plus storefront",
      title: "Food & Beverage",
      eyebrow: "Shopify Plus Industry",
      description: "Commerce experiences supporting repeat purchase, subscriptions, bundles, promotions and streamlined ordering workflows.",
      href: "/food-beverages",
    },
    {
      image: "/assets/shopify-plus-agency/industries/sports-outdoors.png",
      imageAlt: "Sports and outdoors Shopify Plus storefront",
      title: "Sports & Outdoors",
      eyebrow: "Shopify Plus Industry",
      description: "Fast, mobile-led ecommerce experiences for active and outdoor brands with rich product discovery and global commerce requirements.",
      href: "/contact-us",
    },
    {
      image: "/assets/shopify-plus-agency/industries/home-living.png",
      imageAlt: "Home and living Shopify Plus storefront",
      title: "Home & Living",
      eyebrow: "Shopify Plus Industry",
      description: "Shopify Plus solutions for home brands with large catalogs, configurable products, visual merchandising and complex product journeys.",
      href: "/contact-us",
    },
    {
      image: "/assets/shopify-plus-agency/industries/jewellery-accessories.png",
      imageAlt: "Jewellery and accessories Shopify Plus storefront",
      title: "Jewellery & Accessories",
      eyebrow: "Shopify Plus Industry",
      description: "Premium product experiences for jewellery and accessory brands, including rich presentation and sophisticated customization requirements.",
      href: "/contact-us",
    },
    {
      image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
      imageAlt: "Pet industry Shopify Plus storefront",
      title: "Pet Industry",
      eyebrow: "Shopify Plus Industry",
      description: "Conversion-focused Shopify stores with clearer category navigation, trust-building product content and strong repeat-purchase journeys.",
      href: "/pet-industry",
    },
  ],
} as const;

export const shopifyPlusAgencyPortfolio = {
  eyebrow: "Portfolio",
  heading: "Explore Our Work",
  description:
    "For 20 years, we’ve worked on challenging and impactful projects for startups and leading global brands. Every website we create is designed around our clients’ goals.",
  category: "SHOPIFY PLUS",
  platformMark: "/assets/platforms/shopify-plus-white.svg",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  secondaryCtaLabel: "View Pricing",
  secondaryCtaHref: "#our_white_label_pricing",
  items: [
    {
      name: "Ranavat",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat Shopify storefront",
      href: "https://www.ranavat.com/",
    },
    {
      name: "Atolea Jewelry",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Shopify storefront",
      href: "https://atoleajewelry.com/",
    },
    {
      name: "Tropic Feel",
      image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
      imageAlt: "Tropic Feel",
      href: "https://shop.tropicfeel.com/",
    },
    {
      name: "Sculpt Neon",
      image: "/assets/our-work/projects/sculpt-neon.webp",
      imageAlt: "Sculpt Neon",
      href: "https://sculptneonsigns.com/",
    },
    {
      name: "Headsets",
      image: "/assets/our-work/projects/headsets.webp",
      imageAlt: "Headsets",
      href: "https://www.headsets.com/",
    },
    {
      name: "Perfect Locks",
      image: "/assets/shopify-plus-agency/portfolio/perfect-locks.webp",
      imageAlt: "Perfect Locks",
      href: "https://www.perfectlocks.com/",
    },
    {
      name: "Nekter Juice Bar",
      image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar",
      href: "https://www.nekterjuicebar.com/",
    },
    {
      name: "The Somewhere Co.",
      image: "/assets/fashion/portfolio/somewhereco-fashion.webp",
      imageAlt: "The Somewhere Co.",
      href: "https://thesomewhereco.com/",
    },
  ],
} as const;

export const shopifyPlusAgencyTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  items: [
    {
      name: "Shari Leidich",
      company: "Max Sweets",
      quote:
        "We have been using dynamic dreams for four, maybe five years now. I can't say anything but the most positive things. They are diligent, professional, competitively priced.",
      videoId: "Vc9FH6ZeoXY",
      image: "/assets/shopify-plus-agency/testimonials/shari-leidich.webp",
      imageAlt: "Shari Leidich client testimonial",
      logo: "/assets/testimonials/max-sweets-logo.webp",
      logoAlt: "Max Sweets",
      logoWidth: 72,
      logoHeight: 53,
    },
    {
      name: "Rebekah Wymer",
      company: "Myla Jane",
      quote:
        "Hi, I’m Rebecca, owner of Myla Jane. I’ve worked with Dynamic Dreams on several web development projects, and they always do an excellent job.",
      videoId: "_ay_egf5GKw",
      image: "/assets/shopify-plus-agency/testimonials/rebekah-wymer.webp",
      imageAlt: "Rebekah Wymer client testimonial",
      logo: "/assets/testimonials/myla-jane-logo.webp",
      logoAlt: "Myla Jane",
      logoWidth: 120,
      logoHeight: 49,
    },
    {
      name: "Thommas Linnrose",
      company: "Art Copenhagen",
      quote:
        "Their support has allowed us to focus on growing our brand instead of worrying about technical issues and using time on this. Their support has allowed us to focus on growing our brand instead of worrying about technical issues and using time on this.",
      videoId: "_9uT-dRcQvo",
      image: "/assets/testimonials/thommas-linnrose.webp",
      imageAlt: "Thommas Linnrose client testimonial",
      logo: "/assets/shopify-plus-agency/brands/art-copenhagen.png",
      logoAlt: "Art Copenhagen",
      logoWidth: 180,
      logoHeight: 52,
    },
    {
      name: "Zoe wang",
      company: "Maison Zifan",
      quote:
        "Gaurav always explained to me what truly happens here and how we can improve it in the future. So we are very happy with the results, and we will continue to work with Gaurav and his team in the foreseeable future. So I highly recommend him.",
      videoId: "6Ni9tlZ7HKE",
      image: "/assets/shopify-plus-agency/testimonials/zoe-wang.webp",
      imageAlt: "Zoe Wang client testimonial",
      logo: "/assets/shopify-plus-agency/brands/maison-zifan.png",
      logoAlt: "Maison Zifan",
      logoWidth: 72,
      logoHeight: 126,
    },
    {
      name: "Clinton De Vere",
      company: "Clinton De Vere Art",
      quote:
        "In 2025, I hired Gaurav and his team at Dynamic Dreams to upgrade my Shopify art shop, and the experience was seamless from start to finish. Communication was clear and prompt, Gaurav was patient with all my questions, and every issue or request was handled quickly and effectively.",
      videoId: "_rQeMWcz_gA",
      image: "/assets/shopify-plus-agency/testimonials/clinton-de-vere.webp",
      imageAlt: "Clinton De Vere client testimonial",
      logo: "/assets/testimonials/clinton-de-vere-logo.svg",
      logoAlt: "Clinton De Vere Art",
      logoWidth: 120,
      logoHeight: 44,
    },
    {
      name: "Fernando Arias",
      company: "LGXNDS",
      quote:
        "Dynamic Dreamz is amazing because they're able to work on Shopify and WordPress platforms, which are essential to my businesses, and being able to scale them. And if you are looking for an amazing website developer on Shopify or WordPress, I recommend Dynamic Dreamz.",
      videoId: "WQWG2niydpE",
      image: "/assets/testimonials/fernando-arias.webp",
      imageAlt: "Fernando Arias client testimonial",
      logo: "/assets/shopify-plus-agency/brands/lgxnds.png",
      logoAlt: "LGXNDS",
      logoWidth: 160,
      logoHeight: 38,
    },
    {
      name: "Alec Torelli",
      company: "(Conscious Poker)",
      quote:
        "Gaurav at Dynamic Dreamz excels in web design and development, demonstrating flawless communication, reliability, and confident autonomy, streamlining project execution.",
      videoId: "o4JnTGEH-Yk",
      image: "/assets/testimonials/alec-torelli-striped-shirt.webp",
      imageAlt: "Alec Torelli testimonial",
      logo: "/assets/testimonials/conscious-poker-logo.webp",
      logoAlt: "Conscious Poker",
      logoWidth: 200,
      logoHeight: 40,
    },
    {
      name: "William Petz",
      company: "(Quite Events)",
      quote:
        "Just 7 days post-launch, our sales surged by 12% owing to its advanced features; their expertise and swift updates impressed us, genuinely recommending their Services!",
      videoId: "B3KnREB4Bro",
      image: "/assets/shopify-plus-agency/testimonials/william-petz.webp",
      imageAlt: "William Petz testimonial",
      logo: "/assets/testimonials/quiet-events-logo.webp",
      logoAlt: "Quite Events",
      logoWidth: 160,
      logoHeight: 42,
    },
    {
      name: "William ST Baker",
      company: "Elite Element Electronics",
      quote:
        "In six months, Dynamic Dreamz revamped our website, turning it from error-ridden to seamlessly functional and visually appealing, significantly enhancing our digital presence.",
      videoId: "-IpNUAco1OA",
      image: "/assets/shopify-plus-agency/testimonials/william-st-baker.webp",
      imageAlt: "William ST Baker testimonial",
      logo: "/assets/testimonials/elite-element-electronics-logo.svg",
      logoAlt: "Elite Element Electronics",
      logoWidth: 160,
      logoHeight: 42,
    },
    {
      name: "Kerri Imrie",
      company: "(teanow.com.au)",
      quote:
        "Dynamic Dreamz and Gaurav's invaluable expertise and support were instrumental in our success, making them a reliable choice for any digital agency needs.",
      videoId: "oNDPBGO83G4",
      image: "/assets/shopify-plus-agency/testimonials/kerri-imrie.webp",
      imageAlt: "Kerri Imrie testimonial",
      logo: "/assets/shopify-plus-agency/brands/tea-now.png",
      logoAlt: "teanow",
      logoWidth: 160,
      logoHeight: 42,
    },
    {
      name: "Brandon",
      company: "USA",
      quote:
        "Dynamic Dreamz excels in web development with unmatched responsiveness, professionalism, and quality assurance, highly recommended for all projects.",
      videoId: "AoglCZQC0RU",
      image: "/assets/shopify-plus-agency/testimonials/brandon.webp",
      imageAlt: "Brandon testimonial",
      logo: "/assets/shopify-plus-agency/brands/quiet-events.png",
      logoAlt: "Brandon testimonial company",
      logoWidth: 100,
      logoHeight: 40,
    },
  ],
} as const;

export const shopifyPlusAgencyPageTestimonials = {
  ...shopifyPlusAgencyTestimonials,
  items: shopifyPlusAgencyTestimonials.items.map((item) => {
    if (item.name === "Alec Torelli") {
      return { ...item, company: "Conscious Poker" };
    }
    if (item.name === "William Petz") {
      return { ...item, company: "Quite Events" };
    }
    if (item.name === "Kerri Imrie") {
      return { ...item, company: "teanow.com.au" };
    }
    if (item.name === "Fernando Arias") {
      return {
        ...item,
        quote: item.quote.replace("them. And if", "them.<br />And if"),
      };
    }
    return item;
  }),
} as const;

export const shopifyPlusAgencyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Is Dynamic Dreamz a Shopify Plus agency?",
    answer:
      "Yes. Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency supporting high-growth DTC, B2B and enterprise ecommerce brands. We provide Shopify Plus strategy, storefront development, migrations, integrations, B2B development, CRO, performance optimization and ongoing technical support.",
  },
  {
    question: "Is Dynamic Dreamz a Shopify Platinum Partner?",
    answer:
      "Yes. Dynamic Dreamz is a Shopify Platinum Partner. We combine that Shopify partner credential with more than 20 years of ecommerce experience, a 60+ Shopify team and broader design, mobile app, full-stack and QA capabilities.",
  },
  {
    question: "What Shopify Plus development services does Dynamic Dreamz provide?",
    answer:
      "Dynamic Dreamz provides Shopify Plus store development, custom theme development, theme customization, Shopify Plus migrations, B2B and wholesale development, custom apps and integrations, checkout extensibility, Shopify Functions, CRO, performance optimization and ongoing maintenance.",
  },
  {
    question: "Does Dynamic Dreamz have experienced Shopify Plus developers?",
    answer:
      "Yes. Dynamic Dreamz has a 60+ Shopify team with developers experienced in Shopify and Shopify Plus projects. Depending on the project, the Shopify team can also work with our designers, mobile app developers, full-stack engineers and QA specialists for more complex commerce requirements.",
  },
  {
    question: "Can Dynamic Dreamz build Shopify Plus B2B and wholesale stores?",
    answer:
      "Yes. We support Shopify Plus B2B and wholesale requirements including company accounts, customer-specific catalogs, price lists, quantity rules, payment terms, buyer permissions and integrations with ERP, CRM, fulfillment and other business systems.",
  },
  {
    question: "Can Dynamic Dreamz migrate Magento, WooCommerce or BigCommerce stores to Shopify Plus?",
    answer:
      "Yes. Dynamic Dreamz handles Shopify Plus migrations from Magento or Adobe Commerce, WooCommerce, BigCommerce and other ecommerce platforms. Migration planning can include products, customers, orders, content, integrations, URL redirects, SEO preservation, staging QA and launch support.",
  },
  {
    question: "How much does Shopify Plus development with Dynamic Dreamz cost?",
    answer:
      "Shopify Plus development cost depends on the scope and technical complexity. Dynamic Dreamz offers project-based custom quotes, flexible Shopify development support from $25 per hour and dedicated developer or team engagements from $2,000 per month.",
  },
  {
    question: "Does Dynamic Dreamz provide ongoing Shopify Plus maintenance and CRO support?",
    answer:
      "Yes. We provide ongoing Shopify Plus maintenance, bug fixing, new feature development, theme updates, app changes, performance optimization, CRO implementation and integration support after launch.",
  },
  {
    question: "Does Dynamic Dreamz work with Shopify Plus brands outside India?",
    answer:
      "Yes. Dynamic Dreamz supports Shopify and Shopify Plus brands globally, including clients in the United States, Canada, Europe, Australia and other markets. Our delivery team is based in India and works remotely with brand and agency teams across time zones.",
  },
];
