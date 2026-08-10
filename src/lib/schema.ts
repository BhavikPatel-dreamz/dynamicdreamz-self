import { siteConfig } from "@/data/site";

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: `${siteConfig.url}/`,
      logo: `${siteConfig.url}${siteConfig.logo}`,
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "103",
      },
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
          itemOffered: { "@type": "Service", name, url: `${siteConfig.url}${path}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/`,
      url: `${siteConfig.url}/`,
      name: "Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz",
      datePublished: "2025-12-12T09:55:48+00:00",
      dateModified: "2026-08-06T13:25:44+00:00",
      description:
        "Established in 2006, Dynamic Dreamz is a Shopify Platinum Partner for Shopify Plus, migration, B2B, CRO, mobile apps, integrations and white-label delivery.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      breadcrumb: { "@id": `${siteConfig.url}/#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
      ],
    },
  ],
};

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
