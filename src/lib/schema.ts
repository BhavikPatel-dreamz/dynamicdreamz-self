import { testimonials } from "@/content/home";
import { pageSeo } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getBuildDate } from "@/lib/seo";

const organizationId = `${siteConfig.url}#organization`;
const websiteId = `${siteConfig.url}#website`;
const webPageId = `${siteConfig.url}#home-page`;
const breadcrumbId = `${siteConfig.url}#breadcrumb`;
const aboutPageUrl = absoluteUrl(pageSeo.about.path);
const aboutPageId = `${aboutPageUrl}#webpage`;
const aboutBreadcrumbId = `${aboutPageUrl}#breadcrumb`;

function testimonialVideoDescription(testimonial: (typeof testimonials)[number]) {
  return `${testimonial.name}, ${testimonial.company} client testimonial for Dynamic Dreamz. ${testimonial.quote}`;
}

function testimonialVideoSchema() {
  return testimonials.map((testimonial) => ({
    "@type": "VideoObject",
    "@id": `${siteConfig.url}#testimonial-video-${testimonial.videoId}`,
    name: testimonial.title,
    description: testimonialVideoDescription(testimonial),
    thumbnailUrl: `https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`,
    uploadDate: testimonial.videoUploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${testimonial.videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${testimonial.videoId}`,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
  }));
}

export function createHomePageSchema() {
  const modifiedAt = getBuildDate().toISOString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logo),
        description:
          "Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency providing development, migration, B2B, CRO, mobile apps, integrations, white-label delivery and ongoing support for global brands and digital agencies.",
        foundingDate: "2006",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 150,
        },
        email: siteConfig.email,
        telephone: "+91-9327642007",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress:
              "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja",
            addressLocality: "Surat",
            addressRegion: "Gujarat",
            postalCode: "395002",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress:
              "202 - Iscon Emporio, Pandurang Shashtri Marg, beside Star Bazaar, Satellite",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380015",
            addressCountry: "IN",
          },
        ],
        sameAs: [
          siteConfig.social.shopify,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
          "https://clutch.co/profile/dynamic-dreamz",
          "https://www.trustpilot.com/review/dynamicdreamz.com",
          "https://www.goodfirms.co/company/dynamic-dreamz",
          "https://www.upwork.com/ag/dynamicdreamz/",
        ],
        areaServed: [
          "United States",
          "United Kingdom",
          "Europe",
          "Canada",
          "Australia",
          "India",
          "United Arab Emirates",
        ],
        knowsAbout: [
          "Shopify Plus",
          "Shopify Plus Development",
          "Shopify Plus Migration",
          "Shopify B2B",
          "Shopify Checkout Extensibility",
          "Shopify Functions",
          "Multi-store Shopify Architecture",
          "Shopify Markets",
          "Shopify Mobile App Development",
          "Enterprise Ecommerce Development",
          "ERP Integration",
          "Shopify",
          "Shopify Migration",
          "Shopify CRO",
          "Shopify App Development",
          "White-Label Shopify Development",
          "Full-Stack Development",
          "WordPress",
          "WooCommerce",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dynamic Dreamz Services",
          itemListElement: [
            { name: "Shopify Plus Development", path: "/shopify-plus-agency/" },
            { name: "Shopify Plus Migration", path: "/shopify-plus-migration-agency/" },
            { name: "Shopify Development", path: "/shopify-development-agency/" },
            { name: "Shopify Migration", path: "/shopify-migration/" },
            { name: "Shopify CRO and Performance", path: "/shopify-cro-agency/" },
            { name: "Shopify Mobile App Development", path: "/shopify-mobile-app-development/" },
            { name: "White-Label Shopify Development", path: "/white-label-shopify-development-services/" },
            { name: "Shopify Maintenance", path: "/shopify-maintenance-services/" },
          ].map(({ name, path }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, url: absoluteUrl(path) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: siteConfig.url,
        name: pageSeo.home.title,
        dateModified: modifiedAt,
        description: pageSeo.home.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
      ...testimonialVideoSchema(),
    ],
  };
}

export function createAboutPageSchema() {
  const modifiedAt = getBuildDate().toISOString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logo),
        description:
          "Dynamic Dreamz is a Shopify Platinum Partner and ecommerce development agency founded in 2006, with more than 150 experts delivering web, mobile and digital commerce solutions.",
        foundingDate: "2006",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 150,
        },
        email: siteConfig.email,
        telephone: "+91-9327642007",
        sameAs: [
          siteConfig.social.shopify,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
        ],
        founder: [
          { "@type": "Person", name: "Virag Shah", jobTitle: "Co-Founder & CEO" },
          { "@type": "Person", name: "Gaurav Shah", jobTitle: "Co-Founder & CEO" },
          { "@type": "Person", name: "Sanjay Patel", jobTitle: "Co-Founder & CTO" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "AboutPage",
        "@id": aboutPageId,
        url: aboutPageUrl,
        name: pageSeo.about.title,
        description: pageSeo.about.description,
        dateModified: modifiedAt,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": aboutBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/about-us.png"),
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": aboutBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: aboutPageUrl,
          },
        ],
      },
      {
        "@type": "VideoObject",
        "@id": `${aboutPageUrl}#company-video`,
        name: "Meet the team at Dynamic Dreamz",
        description:
          "An introduction to the Dynamic Dreamz ecommerce, web development and digital solutions team.",
        thumbnailUrl: absoluteUrl("/assets/about/hero-video-poster.webp"),
        contentUrl: "https://www.youtube.com/watch?v=0GEJ928rBnM",
        embedUrl: "https://www.youtube-nocookie.com/embed/0GEJ928rBnM",
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
    ],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
