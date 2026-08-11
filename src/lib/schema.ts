import { testimonials } from "@/content/home";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
} from "@/content/career";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";
import { resourceArticles } from "@/content/resources";
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
const careerPageUrl = absoluteUrl(pageSeo.career.path);
const careerPageId = `${careerPageUrl}#webpage`;
const careerBreadcrumbId = `${careerPageUrl}#breadcrumb`;
const lifePageUrl = absoluteUrl(pageSeo.life.path);
const lifePageId = `${lifePageUrl}#webpage`;
const lifeBreadcrumbId = `${lifePageUrl}#breadcrumb`;
const lifeFaqId = `${lifePageUrl}#faq`;
const resourcesPageUrl = absoluteUrl(pageSeo.resources.path);
const resourcesPageId = `${resourcesPageUrl}#webpage`;
const resourcesBreadcrumbId = `${resourcesPageUrl}#breadcrumb`;
const resourcesItemListId = `${resourcesPageUrl}#articles`;

const careerOfficeAddresses = {
  surat: {
    "@type": "PostalAddress",
    streetAddress:
      "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395002",
    addressCountry: "IN",
  },
  ahmedabad: {
    "@type": "PostalAddress",
    streetAddress:
      "202 - Iscon Emporio, Pandurang Shashtri Marg, beside Star Bazaar, Satellite",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
} as const;

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
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
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

export function createCareerPageSchema() {
  const jobPostings = careerLocations.flatMap((location) =>
    careerJobs.map((job) => {
      const id = `${careerPageUrl}#${job.slug}-${location.slug}`;

      return {
        "@type": "JobPosting",
        "@id": id,
        title: job.title,
        description: `${job.title} is a ${job.jobType.toLowerCase()} opportunity at Dynamic Dreamz in ${location.label}. The role requires ${job.experience} of relevant work experience.`,
        datePosted: job.postedDate,
        employmentType: "FULL_TIME",
        hiringOrganization: { "@id": organizationId },
        jobLocation: {
          "@type": "Place",
          address: careerOfficeAddresses[location.slug],
        },
        url: absoluteUrl(careerApplicationPath(job, location)),
      };
    }),
  );

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
        foundingDate: "2006",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 150,
        },
        email: siteConfig.email,
        telephone: "+91-9327642007",
        address: Object.values(careerOfficeAddresses),
        sameAs: [
          siteConfig.social.shopify,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
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
        "@type": "WebPage",
        "@id": careerPageId,
        url: careerPageUrl,
        name: pageSeo.career.title,
        description: pageSeo.career.description,
        datePublished: "2024-05-02T09:10:53+00:00",
        dateModified: "2026-08-05T13:38:57+00:00",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": careerBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        mainEntity: jobPostings.map((job) => ({ "@id": job["@id"] })),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": careerBreadcrumbId,
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
            name: "Careers",
            item: careerPageUrl,
          },
        ],
      },
      ...jobPostings,
    ],
  };
}

export function createLifePageSchema() {
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
        "@id": lifePageId,
        url: lifePageUrl,
        name: pageSeo.life.title,
        description: pageSeo.life.description,
        datePublished: "2024-05-02T09:14:02+00:00",
        dateModified: "2024-09-06T09:49:25+00:00",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": lifeBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        mainEntity: { "@id": lifeFaqId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": lifeBreadcrumbId,
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
            name: "Life @ Dynamic Dreamz",
            item: lifePageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": lifeFaqId,
        mainEntity: lifeFaqSection.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function createResourcesPageSchema() {
  const articleItems = resourceArticles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      "@id": absoluteUrl(article.href),
      url: absoluteUrl(article.href),
      headline: article.title,
      datePublished: article.date,
      image: absoluteUrl(article.image),
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  }));

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
        foundingDate: "2006",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 150 },
        sameAs: [
          siteConfig.social.shopify,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
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
        "@type": "CollectionPage",
        "@id": resourcesPageId,
        url: resourcesPageUrl,
        name: pageSeo.resources.title,
        description: pageSeo.resources.description,
        datePublished: "2025-11-10T05:02:09+00:00",
        dateModified: "2026-07-15T10:42:41+00:00",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": resourcesBreadcrumbId },
        mainEntity: { "@id": resourcesItemListId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/og/dynamic-dreamz-company.png"),
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": resourcesBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: resourcesPageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": resourcesItemListId,
        name: "Shopify Blogs",
        numberOfItems: resourceArticles.length,
        itemListElement: articleItems,
      },
      {
        "@type": "VideoObject",
        "@id": `${resourcesPageUrl}#company-video`,
        name: "The Dynamic Dreamz story and Shopify resource guide",
        description: "Meet the Dynamic Dreamz Shopify Platinum Partner team behind this ecommerce resource hub.",
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
