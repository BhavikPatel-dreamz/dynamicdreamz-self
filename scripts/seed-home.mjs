import { getPayload } from "payload";
import config from "../payload.config.ts";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

async function seedHome() {
  console.log("Connecting to Payload CMS...");
  const payload = await getPayload({ config });

  console.log("Preparing Home Page blocks data...");
  const homeSections = [
    // 1. Hero Block
    {
      blockType: "hero",
      variant: "home",
      title: "Shopify Plus & Enterprise Shopify Solutions",
      description:
        "We help DTC brands, B2B businesses and digital agencies build, migrate and scale on Shopify through custom development, B2B solutions, integrations, CRO, performance optimization and ongoing support.",
      ctaLabel: "book a discovery call",
      ctaHref: "/book-a-discovery-call",
    },
    // 2. Brand Partners / Client Logos
    {
      blockType: "brand-partners",
      variant: "slider",
      heading: "Partnering with Ambitious Brands",
      description:
        "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.",
    },
    // 3. Shopify Plus Agency Overview (Video & Stats)
    {
      blockType: "shopify-plus-agency-overview",
      eyebrow: "Why Dynamic Dreamz",
      title: "A Shopify Plus Agency Built for Complex Ecommerce Growth",
      intro:
        "Dynamic Dreamz has been helping global brands and digital agencies build and grow ecommerce businesses since 2006. Today, Shopify and Shopify Plus are at the core of what we do.",
      paragraphs: [
        {
          text: "We support established DTC, retail and B2B businesses with Shopify Plus development, migrations, B2B and wholesale, international expansion, CRO, performance optimization, custom integrations and ongoing development.",
        },
        {
          text: "When a project needs more than the Shopify storefront, our mobile app and full-stack teams can build connected solutions around Shopify. We also support WordPress and WooCommerce for other website and ecommerce requirements.",
        },
      ],
      counters: [
        {
          value: "20+",
          label: "Years of Experience",
          note: "Established in 2006",
          tone: "green",
        },
        {
          value: "150+",
          label: "Experts",
          note: "AI empowered. Continuously trained",
          tone: "stone",
        },
        {
          value: "5,000+",
          label: "projects delivered",
          note: "Ecommerce, web and mobile",
          tone: "peach",
        },
        {
          value: "2,500+",
          label: "Verified 5 star Reviews",
          note: "From Clutch, Trustpilot & Upwork",
          tone: "lime",
        },
      ],
      videoSrc: "/assets/home/why-dynamic-dreamz.mp4",
    },
    // 4. White Label Partner Banner
    {
      blockType: "white-label-partner-banner",
      eyebrow: "For Agencies",
      title: "Your White Label Shopify Partner",
      description:
        "Digital agencies partner with Dynamic Dreamz as an extension of their team for Shopify, Shopify Plus and full-stack delivery. We support Figma-to-Shopify development, migrations, integrations, maintenance and dedicated development teams under NDA, while your agency retains the client relationship.",
      bullets: [
        { text: "NDA Based" },
        { text: "No Direct Client Solicitation" },
        { text: "Dedicated Teams" },
      ],
      ctaLabel: "Explore Agency Partnership",
      ctaHref: "/white-label-shopify-development-services",
    },
    // 5. Commerce Solutions Accordion
    {
      blockType: "commerce-solutions",
      title: "Commerce & technology solutions.",
      description:
        "From Shopify Plus and ecommerce development to mobile apps, full-stack solutions, WordPress and WooCommerce, our teams support established brands and digital agencies through one experienced delivery partner.",
      solutions: [
        {
          title: "Shopify Plus & Enterprise Commerce",
          summary: "Scalable stores for high-growth DTC & B2B brands",
          body: "Custom theme development, checkout extensibility, B2B wholesale portals, multi-store architecture, and high-volume performance optimization.",
          href: "/shopify-plus-agency",
          cta: "EXPLORE SHOPIFY PLUS",
        },
        {
          title: "Shopify Development & Store Builds",
          summary: "Bespoke storefronts built for conversion & brand expression",
          body: "Online Store 2.0 sections, tailored product configurators, conversion-rate optimization, and smooth user journeys.",
          href: "/shopify-development",
          cta: "VIEW SHOPIFY SERVICES",
        },
        {
          title: "Platform Migrations to Shopify",
          summary: "Zero-loss data, SEO, and catalogue transitions",
          body: "Seamless migration from Magento, WooCommerce, BigCommerce, Salesforce, and custom platforms with full URL structure and SEO equity preserved.",
          href: "/shopify-migration",
          cta: "LEARN ABOUT MIGRATIONS",
        },
        {
          title: "Mobile App Development",
          summary: "Shopify-connected native iOS & Android applications",
          body: "Real-time sync with your Shopify backend, custom push notifications, tailored mobile checkout, and loyalty integration.",
          href: "/mobile-application-development",
          cta: "EXPLORE MOBILE APPS",
        },
        {
          title: "Custom Integrations & ERP Connections",
          summary: "Connecting your store to your entire business ecosystem",
          body: "Custom APIs, middleware, and connections to ERPs (SAP, NetSuite), CRMs, 3PL warehouses, accounting tools, and marketplaces.",
          href: "/shopify-development",
          cta: "VIEW INTEGRATION WORK",
        },
        {
          title: "Dedicated Development Teams",
          summary: "Senior Shopify & full-stack engineers embedded in your team",
          body: "Flexible staffing models providing experienced developers, tech leads, and QA specialists working directly within your sprints.",
          href: "/hire-shopify-developers",
          cta: "HIRE DEVELOPERS",
        },
        {
          title: "White Label Agency Partnerships",
          summary: "Confidential execution partner for top digital agencies",
          body: "We deliver Shopify, WordPress, and mobile builds under strict NDA, allowing agencies to scale their delivery capacity without expanding internal headcount.",
          href: "/white-label-shopify-development-services",
          cta: "AGENCY PARTNERSHIPS",
        },
        {
          title: "Ongoing Support & Store Optimization",
          summary: "Proactive maintenance, speed tuning, and CRO sprints",
          body: "SLA-backed technical support, routine code audits, speed improvements, A/B testing implementation, and ongoing feature rollouts.",
          href: "/shopify-support",
          cta: "DISCOVER SUPPORT PLANS",
        },
      ],
    },
    // 6. Selected Work Marquee
    {
      blockType: "selected-work-marquee",
      title: "Selected Shopify Plus & Enterprise Ecommerce Work",
      description:
        "Explore Shopify and Shopify Plus projects across beauty, fashion, B2B, wholesale, international commerce and large-catalogue ecommerce.",
      ctaLabel: "View our work",
      ctaHref: "/our-work",
    },
    // 7. Testimonials Carousel
    {
      blockType: "testimonials-carousel",
      eyebrow: "Client Stories",
      title: "Brands That Have Grown With Us",
      description:
        "Hear from founders, ecommerce teams and agency partners who rely on Dynamic Dreamz for Shopify builds, migrations, mobile apps, ongoing development and long-term technical support.",
    },
    // 8. Integrations & Partners Marquee
    {
      blockType: "integrations-partners",
      title: "Our Partners",
    },
    // 9. Latest Insights / Blog Articles
    {
      blockType: "latest-insights",
      title: "Our Latest Blogs",
      ctaLabel: "View all blogs",
      ctaHref: "/blogs",
    },
    // 10. Home FAQ Accordion
    {
      blockType: "faq-accordion",
      heading: "What Brands and Agencies Usually Want to Know",
      description:
        "Clear answers about our Shopify, Shopify Plus, mobile app, white-label and wider technology services.",
      faqs: [
        {
          question: "Is Dynamic Dreamz a Shopify Platinum Partner?",
          answer:
            "Yes. Dynamic Dreamz is a Shopify Platinum Partner. The company was established in 2006 and has 20+ years of experience, 150+ experts and 5,000+ projects delivered across ecommerce, mobile and full-stack development.",
        },
        {
          question: "What ecommerce services does Dynamic Dreamz provide?",
          answer:
            "Dynamic Dreamz provides Shopify and Shopify Plus development, migration, B2B and wholesale solutions, CRO, performance optimization, WordPress, WooCommerce, custom apps, integrations, mobile apps, maintenance and dedicated development support.",
        },
        {
          question: "Do you work with Shopify Plus and B2B businesses?",
          answer:
            "Yes. We support established merchants with Shopify Plus storefronts, B2B and wholesale requirements, international stores, complex catalogues, checkout customization, integrations and ongoing development.",
        },
        {
          question: "Do you provide WordPress and WooCommerce development?",
          answer:
            "Yes. Our WordPress and WooCommerce teams provide custom websites, ecommerce development, maintenance and white-label delivery for brands and agencies.",
        },
        {
          question: "Can you build a mobile app for an ecommerce business?",
          answer:
            "Yes. We build Shopify-connected and custom iOS and Android applications with features such as real-time product and order synchronization, customer accounts, loyalty, subscriptions and push notifications.",
        },
        {
          question: "Do you provide white-label development for agencies?",
          answer:
            "Yes. Digital agencies can use Dynamic Dreamz as a confidential delivery partner for Shopify, WordPress, WooCommerce, mobile and full-stack projects under NDA.",
        },
      ],
    },
  ];

  const homePageData = {
    title: "Home",
    slug: "home",
    sections: homeSections,
    seo: {
      metaTitle:
        "Dynamic Dreamz | Shopify Platinum Partner & Full Stack Web & Mobile App Agency",
      metaDescription:
        "Dynamic Dreamz is a Shopify Platinum Partner & full stack development agency since 2006 with 5000+ projects delivered. Experts in Shopify, web & mobile.",
      canonicalUrl: "/",
    },
  };

  const existing = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: "home" },
    },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    console.log(`Found existing Home page (ID: ${existing.docs[0].id}), updating...`);
    const updated = await payload.update({
      collection: "pages",
      id: existing.docs[0].id,
      data: homePageData,
    });
    console.log(`✓ Successfully updated Home page with ${updated.sections?.length || 0} modular blocks!`);
  } else {
    console.log("No existing Home page found, creating new one...");
    const created = await payload.create({
      collection: "pages",
      data: homePageData,
    });
    console.log(`✓ Successfully created Home page with ${created.sections?.length || 0} modular blocks!`);
  }

  process.exit(0);
}

seedHome().catch((err) => {
  console.error("Error seeding Home page:", err);
  process.exit(1);
});
