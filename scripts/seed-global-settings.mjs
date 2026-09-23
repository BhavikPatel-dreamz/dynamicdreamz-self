import fs from "node:fs";
import path from "node:path";

// Read .env manually if not already in process.env
const envFile = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envFile)) {
  const content = fs.readFileSync(envFile, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const globalPayload = {
  data: {
    siteName: "Dynamic Dreamz",
    siteDescription: "Shopify Plus Partner Agency - Custom Storefronts, Migrations, CRO & Mobile Apps",
    headerCtaLabel: "Get a quote",
    headerCtaHref: "/request-quote",
    contactEmail: "info@dynamicdreamz.com",
    contactPhone: "+91 9327642007",
    whatsappNumber: "+91 98251 95930",
    address: "Surat, Gujarat, India",
    copyrightText: "© 2026 Dynamic Dreamz Solutions LLP. All rights reserved.",
    defaultSeo: {
      metaTitle: "Dynamic Dreamz - Shopify Platinum Partner Agency",
      metaDescription: "Shopify Plus, ecommerce, web development, and mobile app agency founded in 2006 with 5000+ projects and 150+ experts.",
      keywords: "Shopify Plus Partner, Shopify Agency, Ecommerce Development, Mobile App Development",
      preventIndexing: false,
    },
    headerNav: [
      {
        label: "Shopify Solutions",
        slug: "shopify-solutions",
        columns: 3,
        variant: "default",
        promoTitle: "Shopify Platinum Partner",
        promoDetails: "20+ Years · 150+ Experts · 5,000+ Projects",
        promoCtaLabel: "Discuss a project",
        promoCtaHref: "/contact-us",
        items: [
          {
            label: "Shopify Plus Development",
            href: "/shopify-plus-agency",
            description: "Enterprise storefronts and global commerce.",
          },
          {
            label: "Shopify Development",
            href: "/shopify-development-agency",
            description: "Custom storefronts, redesigns and themes.",
          },
          {
            label: "Shopify Certified Developers",
            href: "/shopify-certified-developers",
            description: "Certified Shopify expertise for complex builds.",
          },
          {
            label: "Shopify Migration",
            href: "/shopify-migration",
            description: "Migration, redirects and SEO preservation.",
          },
          {
            label: "Shopify B2B & Wholesale",
            href: "/shopify-plus-agency",
            description: "Company accounts, catalogues and pricing.",
          },
          {
            label: "Shopify CRO & Performance",
            href: "/shopify-cro-agency",
            description: "Conversion, speed and ongoing optimization.",
          },
          {
            label: "Shopify Mobile App Development",
            href: "/shopify-mobile-app-development",
            description: "Custom iOS and Android apps for Shopify.",
          },
          {
            label: "Hire Shopify Developers",
            href: "/hire-shopify-developers",
            description: "Experienced Shopify capacity for your team.",
          },
          {
            label: "Buy Shopify Development Hours",
            href: "/buy-shopify-development-hours",
            description: "Flexible hours for fixes and ongoing work.",
          },
        ],
      },
      {
        label: "Agency Partnerships",
        slug: "agency-partnerships",
        columns: 1,
        variant: "default",
        items: [
          {
            label: "White Label Shopify Development",
            href: "/white-label-shopify-development-services",
            description: "Shopify/Shopify plus support under your agency.",
          },
          {
            label: "White Label WordPress Development",
            href: "/white-label-wordpress-development-services",
            description: "WordPress support behind your agency.",
          },
          {
            label: "White Label Website Design",
            href: "/white-label-website-design-services",
            description: "UI/UX and design support under your agency.",
          },
        ],
      },
      {
        label: "Technology",
        slug: "technology",
        columns: 2,
        variant: "default",
        items: [
          {
            label: "Al Services",
            href: "/contact-us",
            description: "AI powered automation and digital solutions.",
            badge: "NEW",
          },
          {
            label: "Full-Stack Development",
            href: "/contact-us",
            description: "Custom platforms, APIs and connected systems.",
          },
          {
            label: "IOS App Development",
            href: "/ios-app-development",
            description: "Custom mobile applications for Apple devices.",
          },
          {
            label: "Mobile App Development",
            href: "/mobile-application-development",
            description: "Custom mobile apps for businesses.",
          },
          {
            label: "Cross-Platform Apps",
            href: "/cross-platform-app-development",
            description: "Shared-code experiences across IOS and Android.",
          },
          {
            label: "Android App Development",
            href: "/android-app-development",
            description: "Custom Android applications for businesses.",
          },
          {
            label: "WooCommerce Development",
            href: "/woocommerce-development",
            description: "WooCommerce development and support.",
          },
          {
            label: "WordPress Development",
            href: "/wordpress-development",
            description: "WordPress websites development and support.",
          },
          {
            label: "BigCommerce Development",
            href: "/bigcommerce-development",
            description: "Bigcommerce development & customization.",
          },
          {
            label: "Magento Development",
            href: "/magento-development",
            description: "Magento ecommerce development and support.",
          },
        ],
      },
      {
        label: "Industries",
        slug: "industries",
        columns: 2,
        variant: "default",
        items: [
          { label: "Health & Nutrition", href: "/healthcare", description: "Health, supplements and nutrition." },
          { label: "Sports & Outdoors", href: "/contact-us", description: "Sports, fitness and outdoor brands." },
          { label: "Fashion & Apparel", href: "/fashion", description: "Fashion, apparel and lifestyle brands." },
          { label: "Home & Living", href: "/contact-us", description: "Furniture, decor and lifestyle brands." },
          { label: "Beauty & Cosmetics", href: "/beauty-cosmetics", description: "Beauty, skincare and cosmetics brands." },
          { label: "Jewellery & Accessories", href: "/contact-us", description: "Jewellery, watches, bags and accessories." },
          { label: "Food Beverages", href: "/food-beverages", description: "Food, beverage and FMCG ecommerce." },
          { label: "Pet Industry", href: "/pet-industry", description: "Pet products, wellness and lifestyle." },
        ],
      },
      {
        label: "Work",
        slug: "work",
        columns: 2,
        variant: "work",
        items: [
          {
            label: "Portfolio",
            href: "/our-work",
            description: "Browse selected Shopify, ecommerce, mobile and custom development projects.",
            ctaLabel: "View portfolio",
          },
          {
            label: "Case Studies",
            href: "/case-studies",
            description: "See project requirement, our approach, technology and solutions delivered.",
            ctaLabel: "View case studies",
          },
        ],
      },
      {
        label: "About",
        slug: "about",
        columns: 2,
        variant: "default",
        items: [
          { label: "Who We Are", href: "/about-us", description: "Our company, team and experience." },
          { label: "Careers", href: "/career", description: "Explore jobs with Dynamic Dreamz." },
          { label: "Life @ Dynamic Dreamz", href: "/life-dynamicdreamz", description: "Meet our people, culture and workplace." },
          { label: "Resources", href: "/resources", description: "Shopify and digital growth insights." },
        ],
      },
    ],
    footerColumns: [
      {
        title: "Company",
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
        title: "Shopify Solutions",
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
        title: "Technology Services",
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
        title: "Agency Partnerships",
        links: [
          { label: "White Label WordPress Development", href: "/white-label-wordpress-development-services" },
          { label: "White Label Shopify Development", href: "/white-label-shopify-development-services" },
          { label: "White Label Website Design", href: "/white-label-website-design-services" },
        ],
      },
      {
        title: "Hire developers",
        links: [
          { label: "Shopify Developers", href: "/hire-shopify-developers" },
          { label: "WordPress Developers", href: "/hire-wordpress-developers" },
        ],
      },
      {
        title: "More Services",
        links: [
          { label: "BigCommerce Development", href: "/bigcommerce-development" },
          { label: "Webflow development", href: "/webflow-development" },
        ],
      },
    ],
    footerBottomLinks: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://in.linkedin.com/company/dynamicdreamz" },
      { platform: "Instagram", url: "https://www.instagram.com/dynamicdreamz_surat/" },
    ],
  },
};

async function seedGlobal() {
  console.log(`Seeding Global Settings into Strapi at ${STRAPI_URL}...`);

  const headers = {
    "Content-Type": "application/json",
  };
  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(`${STRAPI_URL}/api/global`, {
    method: "PUT",
    headers,
    body: JSON.stringify(globalPayload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Failed to seed Global Settings: ${res.status} ${res.statusText}`);
    console.error(errorText);
    process.exit(1);
  }

  const json = await res.json();
  console.log("Successfully seeded Global Settings into Strapi!");
  console.log("Response id:", json?.data?.id, "documentId:", json?.data?.documentId);
}

seedGlobal().catch((err) => {
  console.error("Error seeding Global Settings:", err);
  process.exit(1);
});
