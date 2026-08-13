import { founders } from "@/content/about";
import { beautyDeliverables } from "@/content/beauty-cosmetics";
import { organizationAnswerSummary, testimonials } from "@/content/home";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
} from "@/content/career";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";
import { resourceArticles } from "@/content/resources";
import { whiteLabelShopifyFaqs } from "@/content/white-label-shopify-development";
import { companyFacts } from "@/data/company";
import { pageSeo } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

const organizationId = `${siteConfig.url}#organization`;
const websiteId = `${siteConfig.url}#website`;
const webPageId = `${siteConfig.url}#home-page`;
const breadcrumbId = `${siteConfig.url}#breadcrumb`;
// The homepage is emitted as the bare origin; every non-root page URL is
// slashless. `absoluteUrl` keeps all schema identifiers on that same policy.
// Every emitted `url`/breadcrumb item resolves through the shared helper so
// schema never disagrees with the page's canonical URL form.
// (The `#`-suffixed @id values above stay bare — they are opaque identifiers,
// not page URLs, and must remain byte-stable across pages.)
const homeUrl = absoluteUrl("/");
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
const beautyPageUrl = absoluteUrl(pageSeo.beautyCosmetics.path);
const beautyPageId = `${beautyPageUrl}#webpage`;
const beautyBreadcrumbId = `${beautyPageUrl}#breadcrumb`;
const beautyServiceId = `${beautyPageUrl}#service`;
const whiteLabelShopifyPageUrl = absoluteUrl(pageSeo.whiteLabelShopify.path);
const whiteLabelShopifyPageId = `${whiteLabelShopifyPageUrl}#webpage`;
const whiteLabelShopifyServiceId = `${whiteLabelShopifyPageUrl}#service`;
const whiteLabelShopifyFaqId = `${whiteLabelShopifyPageUrl}#faq`;
const whiteLabelShopifyBreadcrumbId = `${whiteLabelShopifyPageUrl}#breadcrumb`;

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

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: homeUrl,
    logo: absoluteUrl(siteConfig.logo),
    description: organizationAnswerSummary,
    foundingDate: String(companyFacts.foundedYear),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: companyFacts.experts.value,
    },
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: Object.values(careerOfficeAddresses),
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
  };
}

// Shared company/brand video (used on About and Resources). Same YouTube source,
// so keep its id and real publish date in one place.
const companyVideoId = "0GEJ928rBnM";
const companyVideoUploadDate = "2024-10-17";

/**
 * Required shape for every VideoObject on the site. `uploadDate` is deliberately
 * mandatory: Google treats it as a required property for video structured data,
 * and a missing value silently disqualifies the video from rich results. Because
 * this field is required here, `npm run build` (type-check) fails if any caller
 * omits it — a VideoObject can never ship without an upload date again. Always
 * pass an ISO 8601 date taken from the actual video's real publish date; never
 * invent one.
 */
type VideoObjectInput = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
};

function youTubeUrls(videoId: string) {
  return {
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
  };
}

function videoObjectSchema(video: VideoObjectInput) {
  return {
    "@type": "VideoObject",
    "@id": video.id,
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
  };
}

function testimonialVideoDescription(testimonial: (typeof testimonials)[number]) {
  return `${testimonial.name}, ${testimonial.company} client testimonial for Dynamic Dreamz. ${testimonial.quote}`;
}

function testimonialVideoSchema() {
  return testimonials.map((testimonial) =>
    videoObjectSchema({
      id: `${siteConfig.url}#testimonial-video-${testimonial.videoId}`,
      name: testimonial.title,
      description: testimonialVideoDescription(testimonial),
      thumbnailUrl: `https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`,
      uploadDate: testimonial.videoUploadDate,
      ...youTubeUrls(testimonial.videoId),
    }),
  );
}

export function createHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dynamic Dreamz Services",
          itemListElement: [
            { name: "Shopify Plus Development", path: "/shopify-plus-agency" },
            { name: "Shopify Plus Migration", path: "/shopify-plus-migration-agency" },
            { name: "Shopify Development", path: "/shopify-development-agency" },
            { name: "Shopify Migration", path: "/shopify-migration" },
            { name: "Shopify CRO and Performance", path: "/shopify-cro-agency" },
            { name: "Shopify Mobile App Development", path: "/shopify-mobile-app-development" },
            { name: "White-Label Shopify Development", path: "/white-label-shopify-development-services" },
            { name: "Shopify Maintenance", path: "/shopify-maintenance-services" },
          ].map(({ name, path }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, url: absoluteUrl(path) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: homeUrl,
        name: pageSeo.home.title,
        datePublished: pageSeo.home.publishedTime,
        dateModified: pageSeo.home.modifiedTime,
        description: pageSeo.home.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.home.image.path),
          width: pageSeo.home.image.width,
          height: pageSeo.home.image.height,
        },
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
            item: homeUrl,
          },
        ],
      },
      ...testimonialVideoSchema(),
    ],
  };
}

export function createAboutPageSchema() {
  const founderNodes = founders.map((founder) => {
    const personId = `${aboutPageUrl}#person-${founder.name.toLowerCase().replaceAll(" ", "-")}`;

    return {
      "@type": "Person",
      "@id": personId,
      name: founder.name,
      jobTitle: founder.role,
      description: founder.biography,
      image: absoluteUrl(founder.image),
      ...(founder.linkedIn ? { sameAs: [founder.linkedIn] } : {}),
      worksFor: { "@id": organizationId },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        founder: founderNodes.map((founder) => ({ "@id": founder["@id"] })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
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
        datePublished: pageSeo.about.publishedTime,
        dateModified: pageSeo.about.modifiedTime,
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
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: aboutPageUrl,
          },
        ],
      },
      ...founderNodes,
      videoObjectSchema({
        id: `${aboutPageUrl}#company-video`,
        name: "Meet the team at Dynamic Dreamz",
        description:
          "An introduction to the Dynamic Dreamz ecommerce, web development and digital solutions team.",
        thumbnailUrl: absoluteUrl("/assets/about/hero-video-poster.webp"),
        uploadDate: companyVideoUploadDate,
        ...youTubeUrls(companyVideoId),
      }),
    ],
  };
}

export function createCareerPageSchema() {
  const jobPostings = careerJobs.flatMap((job) =>
    careerLocations.filter((location) => job.locations.includes(location.slug)).map((location) => {
      const id = `${careerPageUrl}#${job.slug}-${location.slug}`;

      return {
        "@type": "JobPosting",
        "@id": id,
        title: job.title,
        description: `${job.summary} This is a ${job.jobType.toLowerCase()} onsite opportunity at Dynamic Dreamz in ${location.label}, requiring ${job.experience} of relevant work experience.`,
        datePosted: job.postedDate,
        employmentType: "FULL_TIME",
        experienceRequirements: job.experience,
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
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
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
        datePublished: pageSeo.career.publishedTime,
        dateModified: pageSeo.career.modifiedTime,
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
            item: homeUrl,
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
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
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
        datePublished: pageSeo.life.publishedTime,
        dateModified: pageSeo.life.modifiedTime,
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
            item: homeUrl,
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
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
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
        datePublished: pageSeo.resources.publishedTime,
        dateModified: pageSeo.resources.modifiedTime,
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
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
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
      videoObjectSchema({
        id: `${resourcesPageUrl}#company-video`,
        name: "The Dynamic Dreamz story and Shopify resource guide",
        description:
          "Meet the Dynamic Dreamz Shopify Platinum Partner team behind this ecommerce resource hub.",
        thumbnailUrl: absoluteUrl("/assets/about/hero-video-poster.webp"),
        uploadDate: companyVideoUploadDate,
        ...youTubeUrls(companyVideoId),
      }),
    ],
  };
}

export function createBeautyCosmeticsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": beautyPageId,
        url: beautyPageUrl,
        name: pageSeo.beautyCosmetics.title,
        description: pageSeo.beautyCosmetics.description,
        datePublished: pageSeo.beautyCosmetics.publishedTime,
        dateModified: pageSeo.beautyCosmetics.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": beautyServiceId },
        mainEntity: { "@id": beautyServiceId },
        breadcrumb: { "@id": beautyBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.beautyCosmetics.image.path),
          width: pageSeo.beautyCosmetics.image.width,
          height: pageSeo.beautyCosmetics.image.height,
          caption: pageSeo.beautyCosmetics.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": beautyBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Beauty & Cosmetics",
            item: beautyPageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": beautyServiceId,
        name: "Beauty & Cosmetics Ecommerce Development",
        serviceType: "Beauty and cosmetics ecommerce development",
        url: beautyPageUrl,
        description: pageSeo.beautyCosmetics.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Beauty, cosmetics, skincare, haircare, salon and wellness brands",
        },
        areaServed: [
          "United States",
          "United Kingdom",
          "Europe",
          "Canada",
          "Australia",
          "India",
          "United Arab Emirates",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: beautyDeliverables.title,
          itemListElement: beautyDeliverables.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.description,
            },
          })),
        },
      },
    ],
  };
}

export function createWhiteLabelShopifyPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": whiteLabelShopifyPageId,
        url: whiteLabelShopifyPageUrl,
        name: pageSeo.whiteLabelShopify.title,
        description: pageSeo.whiteLabelShopify.description,
        datePublished: pageSeo.whiteLabelShopify.publishedTime,
        dateModified: pageSeo.whiteLabelShopify.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": whiteLabelShopifyServiceId },
        breadcrumb: { "@id": whiteLabelShopifyBreadcrumbId },
        mainEntity: [
          { "@id": whiteLabelShopifyServiceId },
          { "@id": whiteLabelShopifyFaqId },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.whiteLabelShopify.image.path),
          width: pageSeo.whiteLabelShopify.image.width,
          height: pageSeo.whiteLabelShopify.image.height,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": whiteLabelShopifyServiceId,
        name: "White Label Shopify Development Services",
        serviceType: "White label Shopify and Shopify Plus development",
        url: whiteLabelShopifyPageUrl,
        description: pageSeo.whiteLabelShopify.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Digital agencies and ecommerce agencies",
        },
        areaServed: [
          "United States",
          "United Kingdom",
          "Europe",
          "Canada",
          "Australia",
          "India",
          "United Arab Emirates",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": whiteLabelShopifyBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "White Label Shopify Development Services",
            item: whiteLabelShopifyPageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": whiteLabelShopifyFaqId,
        mainEntity: whiteLabelShopifyFaqs.map((item) => ({
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

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
