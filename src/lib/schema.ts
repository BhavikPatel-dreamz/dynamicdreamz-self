import { founders } from "@/content/about";
import { beautyIndustryPage } from "@/content/beauty-cosmetics";
import { contactPageContent } from "@/content/contact";
import { fashionIndustryPage } from "@/content/fashion";
import { foodBeveragesIndustryPage } from "@/content/food-beverages";
import { healthcareIndustryPage } from "@/content/healthcare";
import { hireWordPressFaqs } from "@/content/hire-wordpress-developers";
import { hireShopifyFaqs, hireShopifyServices } from "@/content/hire-shopify-developers";
import { petIndustryPage } from "@/content/pet-industry";
import { organizationAnswerSummary, testimonials } from "@/content/home";
import { ourWorkProjects } from "@/content/our-work";
import {
  careerApplicationPath,
  careerJobs,
  careerLocations,
} from "@/content/career";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";
import { resourceArticles } from "@/content/resources";
import {
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyServices,
  shopifyPlusAgencyTestimonials,
} from "@/content/shopify-plus-agency";
import { whiteLabelShopifyFaqs } from "@/content/white-label-shopify-development";
import {
  whiteLabelWordPressFaqs,
  whiteLabelWordPressServices,
} from "@/content/white-label-wordpress-development";
import {
  whiteLabelWebsiteDesignFaqs,
  whiteLabelWebsiteDesignServices,
} from "@/content/white-label-website-design";
import { caseStudiesContent } from "@/content/case-studies";
import { shopifyAppsContent } from "@/content/shopify-apps";
import {
  shopifyCroFaqs,
  shopifyCroServices,
} from "@/content/shopify-cro-agency";
import {
  shopifyDevelopmentAgencyFaqs,
  shopifyDevelopmentAgencyServices,
} from "@/content/shopify-development-agency";
import { shopifyExpertsContent } from "@/content/shopify-experts";
import {
  magentoDevelopmentFaqs,
  magentoDevelopmentServices,
} from "@/content/magento-development";
import {
  shopifyMigrationFaqs,
  shopifyMigrationServices,
} from "@/content/shopify-migration";
import { shopifyThemeCustomizationContent } from "@/content/shopify-theme-customization";
import {
  woocommerceDevelopmentFaqs,
  woocommerceDevelopmentServices,
} from "@/content/woocommerce-development";
import {
  wordpressDevelopmentFaqs,
  wordpressDevelopmentServices,
} from "@/content/wordpress-development";
import { companyFacts } from "@/data/company";
import { pageSeo, type PageSeoConfig } from "@/data/seo";
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
const contactPageUrl = absoluteUrl(pageSeo.contact.path);
const contactPageId = `${contactPageUrl}#webpage`;
const contactBreadcrumbId = `${contactPageUrl}#breadcrumb`;
const privacyPolicyPageUrl = absoluteUrl(pageSeo.privacyPolicy.path);
const privacyPolicyPageId = `${privacyPolicyPageUrl}#webpage`;
const privacyPolicyBreadcrumbId = `${privacyPolicyPageUrl}#breadcrumb`;
const requestQuotePageUrl = absoluteUrl(pageSeo.requestQuote.path);
const requestQuotePageId = `${requestQuotePageUrl}#webpage`;
const requestQuoteBreadcrumbId = `${requestQuotePageUrl}#breadcrumb`;
const ourWorkPageUrl = absoluteUrl(pageSeo.ourWork.path);
const ourWorkPageId = `${ourWorkPageUrl}#webpage`;
const ourWorkBreadcrumbId = `${ourWorkPageUrl}#breadcrumb`;
const ourWorkItemListId = `${ourWorkPageUrl}#projects`;
const beautyPageUrl = absoluteUrl(pageSeo.beautyCosmetics.path);
const beautyPageId = `${beautyPageUrl}#webpage`;
const beautyBreadcrumbId = `${beautyPageUrl}#breadcrumb`;
const beautyServiceId = `${beautyPageUrl}#service`;
const fashionPageUrl = absoluteUrl(pageSeo.fashion.path);
const fashionPageId = `${fashionPageUrl}#webpage`;
const fashionBreadcrumbId = `${fashionPageUrl}#breadcrumb`;
const fashionServiceId = `${fashionPageUrl}#service`;
const foodBeveragesPageUrl = absoluteUrl(pageSeo.foodBeverages.path);
const foodBeveragesPageId = `${foodBeveragesPageUrl}#webpage`;
const foodBeveragesBreadcrumbId = `${foodBeveragesPageUrl}#breadcrumb`;
const foodBeveragesServiceId = `${foodBeveragesPageUrl}#service`;
const healthcarePageUrl = absoluteUrl(pageSeo.healthcare.path);
const healthcarePageId = `${healthcarePageUrl}#webpage`;
const healthcareBreadcrumbId = `${healthcarePageUrl}#breadcrumb`;
const healthcareServiceId = `${healthcarePageUrl}#service`;
const petIndustryPageUrl = absoluteUrl(pageSeo.petIndustry.path);
const petIndustryPageId = `${petIndustryPageUrl}#webpage`;
const petIndustryBreadcrumbId = `${petIndustryPageUrl}#breadcrumb`;
const petIndustryServiceId = `${petIndustryPageUrl}#service`;
const wordpressDevelopmentPageUrl = absoluteUrl(pageSeo.wordpressDevelopment.path);
const wordpressDevelopmentPageId = `${wordpressDevelopmentPageUrl}#webpage`;
const wordpressDevelopmentServiceId = `${wordpressDevelopmentPageUrl}#service`;
const wordpressDevelopmentFaqId = `${wordpressDevelopmentPageUrl}#faq`;
const wordpressDevelopmentBreadcrumbId = `${wordpressDevelopmentPageUrl}#breadcrumb`;
const hireWordPressDevelopersPageUrl = absoluteUrl(pageSeo.hireWordPressDevelopers.path);
const hireWordPressDevelopersPageId = `${hireWordPressDevelopersPageUrl}#webpage`;
const hireWordPressDevelopersServiceId = `${hireWordPressDevelopersPageUrl}#service`;
const hireWordPressDevelopersFaqId = `${hireWordPressDevelopersPageUrl}#faq`;
const hireWordPressDevelopersBreadcrumbId = `${hireWordPressDevelopersPageUrl}#breadcrumb`;
const hireShopifyDevelopersPageUrl = absoluteUrl(pageSeo.hireShopifyDevelopers.path);
const hireShopifyDevelopersPageId = `${hireShopifyDevelopersPageUrl}#webpage`;
const hireShopifyDevelopersServiceId = `${hireShopifyDevelopersPageUrl}#service`;
const hireShopifyDevelopersFaqId = `${hireShopifyDevelopersPageUrl}#faq`;
const hireShopifyDevelopersBreadcrumbId = `${hireShopifyDevelopersPageUrl}#breadcrumb`;
const shopifyExpertsPageUrl = absoluteUrl(pageSeo.shopifyExperts.path);
const shopifyExpertsPageId = `${shopifyExpertsPageUrl}#webpage`;
const shopifyExpertsServiceId = `${shopifyExpertsPageUrl}#service`;
const shopifyExpertsFaqId = `${shopifyExpertsPageUrl}#faq`;
const shopifyExpertsBreadcrumbId = `${shopifyExpertsPageUrl}#breadcrumb`;
const whiteLabelShopifyPageUrl = absoluteUrl(pageSeo.whiteLabelShopify.path);
const whiteLabelShopifyPageId = `${whiteLabelShopifyPageUrl}#webpage`;
const whiteLabelShopifyServiceId = `${whiteLabelShopifyPageUrl}#service`;
const whiteLabelShopifyFaqId = `${whiteLabelShopifyPageUrl}#faq`;
const whiteLabelShopifyBreadcrumbId = `${whiteLabelShopifyPageUrl}#breadcrumb`;
const whiteLabelWordPressPageUrl = absoluteUrl(pageSeo.whiteLabelWordPress.path);
const whiteLabelWordPressPageId = `${whiteLabelWordPressPageUrl}#webpage`;
const whiteLabelWordPressServiceId = `${whiteLabelWordPressPageUrl}#service`;
const whiteLabelWordPressFaqId = `${whiteLabelWordPressPageUrl}#faq`;
const whiteLabelWordPressBreadcrumbId = `${whiteLabelWordPressPageUrl}#breadcrumb`;
const whiteLabelWebsiteDesignPageUrl = absoluteUrl(pageSeo.whiteLabelWebsiteDesign.path);
const whiteLabelWebsiteDesignPageId = `${whiteLabelWebsiteDesignPageUrl}#webpage`;
const whiteLabelWebsiteDesignServiceId = `${whiteLabelWebsiteDesignPageUrl}#service`;
const whiteLabelWebsiteDesignFaqId = `${whiteLabelWebsiteDesignPageUrl}#faq`;
const whiteLabelWebsiteDesignBreadcrumbId = `${whiteLabelWebsiteDesignPageUrl}#breadcrumb`;
const shopifyPlusPageUrl = absoluteUrl(pageSeo.shopifyPlus.path);
const shopifyPlusPageId = `${shopifyPlusPageUrl}#webpage`;
const shopifyPlusServiceId = `${shopifyPlusPageUrl}#service`;
const shopifyPlusFaqId = `${shopifyPlusPageUrl}#faq`;
const shopifyPlusBreadcrumbId = `${shopifyPlusPageUrl}#breadcrumb`;
const shopifyMigrationPageUrl = absoluteUrl(pageSeo.shopifyMigration.path);
const shopifyMigrationPageId = `${shopifyMigrationPageUrl}#webpage`;
const shopifyMigrationServiceId = `${shopifyMigrationPageUrl}#service`;
const shopifyMigrationFaqId = `${shopifyMigrationPageUrl}#faq`;
const shopifyMigrationBreadcrumbId = `${shopifyMigrationPageUrl}#breadcrumb`;
const shopifyCroPageUrl = absoluteUrl(pageSeo.shopifyCro.path);
const shopifyCroPageId = `${shopifyCroPageUrl}#webpage`;
const shopifyCroServiceId = `${shopifyCroPageUrl}#service`;
const shopifyCroFaqId = `${shopifyCroPageUrl}#faq`;
const shopifyCroBreadcrumbId = `${shopifyCroPageUrl}#breadcrumb`;
const caseStudiesPageUrl = absoluteUrl(pageSeo.caseStudies.path);
const caseStudiesPageId = `${caseStudiesPageUrl}#webpage`;
const caseStudiesBreadcrumbId = `${caseStudiesPageUrl}#breadcrumb`;
const caseStudiesItemListId = `${caseStudiesPageUrl}#case-studies`;
const shopifyAppsPageUrl = absoluteUrl(pageSeo.shopifyApps.path);
const shopifyAppsPageId = `${shopifyAppsPageUrl}#webpage`;
const shopifyAppsBreadcrumbId = `${shopifyAppsPageUrl}#breadcrumb`;
const shopifyAppsItemListId = `${shopifyAppsPageUrl}#apps`;
const shopifyThemeCustomizationPageUrl = absoluteUrl(pageSeo.shopifyThemeCustomization.path);
const shopifyThemeCustomizationPageId = `${shopifyThemeCustomizationPageUrl}#webpage`;
const shopifyThemeCustomizationServiceId = `${shopifyThemeCustomizationPageUrl}#service`;
const shopifyThemeCustomizationFaqId = `${shopifyThemeCustomizationPageUrl}#faq`;
const shopifyThemeCustomizationBreadcrumbId = `${shopifyThemeCustomizationPageUrl}#breadcrumb`;
const shopifyDevelopmentAgencyPageUrl = absoluteUrl(pageSeo.shopifyDevelopmentAgency.path);
const shopifyDevelopmentAgencyPageId = `${shopifyDevelopmentAgencyPageUrl}#webpage`;
const shopifyDevelopmentAgencyServiceId = `${shopifyDevelopmentAgencyPageUrl}#service`;
const shopifyDevelopmentAgencyFaqId = `${shopifyDevelopmentAgencyPageUrl}#faq`;
const shopifyDevelopmentAgencyBreadcrumbId = `${shopifyDevelopmentAgencyPageUrl}#breadcrumb`;
const woocommerceDevelopmentPageUrl = absoluteUrl(pageSeo.woocommerceDevelopment.path);
const woocommerceDevelopmentPageId = `${woocommerceDevelopmentPageUrl}#webpage`;
const woocommerceDevelopmentServiceId = `${woocommerceDevelopmentPageUrl}#service`;
const woocommerceDevelopmentFaqId = `${woocommerceDevelopmentPageUrl}#faq`;
const woocommerceDevelopmentBreadcrumbId = `${woocommerceDevelopmentPageUrl}#breadcrumb`;
const magentoDevelopmentPageUrl = absoluteUrl(pageSeo.magentoDevelopment.path);
const magentoDevelopmentPageId = `${magentoDevelopmentPageUrl}#webpage`;
const magentoDevelopmentServiceId = `${magentoDevelopmentPageUrl}#service`;
const magentoDevelopmentFaqId = `${magentoDevelopmentPageUrl}#faq`;
const magentoDevelopmentBreadcrumbId = `${magentoDevelopmentPageUrl}#breadcrumb`;

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

export function createContactPageSchema() {
  const { jobs, sales } = contactPageContent.contacts;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: sales.phone,
            email: sales.email,
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            contactType: "human resources",
            telephone: jobs.phone,
            email: jobs.email,
            availableLanguage: "English",
          },
        ],
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
        "@type": "ContactPage",
        "@id": contactPageId,
        url: contactPageUrl,
        name: pageSeo.contact.title,
        description: pageSeo.contact.description,
        datePublished: pageSeo.contact.publishedTime,
        dateModified: pageSeo.contact.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": contactBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.contact.image.path),
          width: pageSeo.contact.image.width,
          height: pageSeo.contact.image.height,
          caption: pageSeo.contact.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": contactBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: contactPageUrl,
          },
        ],
      },
    ],
  };
}

export function createPrivacyPolicyPageSchema() {
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
        "@id": privacyPolicyPageId,
        url: privacyPolicyPageUrl,
        name: pageSeo.privacyPolicy.title,
        description: pageSeo.privacyPolicy.description,
        datePublished: pageSeo.privacyPolicy.publishedTime,
        dateModified: pageSeo.privacyPolicy.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": privacyPolicyBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.privacyPolicy.image.path),
          width: pageSeo.privacyPolicy.image.width,
          height: pageSeo.privacyPolicy.image.height,
          caption: pageSeo.privacyPolicy.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": privacyPolicyBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy and Cookies Policy",
            item: privacyPolicyPageUrl,
          },
        ],
      },
    ],
  };
}

export function createRequestQuotePageSchema() {
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
        "@type": "ContactPage",
        "@id": requestQuotePageId,
        url: requestQuotePageUrl,
        name: pageSeo.requestQuote.title,
        description: pageSeo.requestQuote.description,
        datePublished: pageSeo.requestQuote.publishedTime,
        dateModified: pageSeo.requestQuote.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": requestQuoteBreadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.requestQuote.image.path),
          width: pageSeo.requestQuote.image.width,
          height: pageSeo.requestQuote.image.height,
          caption: pageSeo.requestQuote.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": requestQuoteBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Request a Quote",
            item: requestQuotePageUrl,
          },
        ],
      },
    ],
  };
}

export function createOurWorkPageSchema() {
  const projectItems = ourWorkProjects.map((project, index) => {
    const destinations = project.href
      ? [project.href]
      : (project.appLinks?.map((link) => link.href) ?? []);

    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        image: absoluteUrl(project.image),
        genre: project.category,
        ...(destinations[0] ? { url: destinations[0] } : {}),
        ...(destinations.length > 1 ? { sameAs: destinations.slice(1) } : {}),
      },
    };
  });

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
        "@id": ourWorkPageId,
        url: ourWorkPageUrl,
        name: pageSeo.ourWork.title,
        description: pageSeo.ourWork.description,
        datePublished: pageSeo.ourWork.publishedTime,
        dateModified: pageSeo.ourWork.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": ourWorkBreadcrumbId },
        mainEntity: { "@id": ourWorkItemListId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.ourWork.image.path),
          width: pageSeo.ourWork.image.width,
          height: pageSeo.ourWork.image.height,
          caption: pageSeo.ourWork.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": ourWorkBreadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: "Our Work", item: ourWorkPageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": ourWorkItemListId,
        name: "Dynamic Dreamz portfolio projects",
        numberOfItems: ourWorkProjects.length,
        itemListElement: projectItems,
      },
    ],
  };
}

type IndustryPageSchemaConfig = {
  seo: PageSeoConfig;
  pageUrl: string;
  pageId: string;
  breadcrumbId: string;
  breadcrumbName: string;
  serviceId: string;
  serviceName: string;
  serviceType: string;
  audienceType: string;
  offerCatalog: {
    title: string;
    items: readonly { title: string; description: string }[];
  };
};

function createIndustryPageSchema(config: IndustryPageSchemaConfig) {
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
        "@id": config.pageId,
        url: config.pageUrl,
        name: config.seo.title,
        description: config.seo.description,
        datePublished: config.seo.publishedTime,
        dateModified: config.seo.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": config.serviceId },
        mainEntity: { "@id": config.serviceId },
        breadcrumb: { "@id": config.breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(config.seo.image.path),
          width: config.seo.image.width,
          height: config.seo.image.height,
          caption: config.seo.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": config.breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: config.breadcrumbName,
            item: config.pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": config.serviceId,
        name: config.serviceName,
        serviceType: config.serviceType,
        url: config.pageUrl,
        description: config.seo.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType: config.audienceType,
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
          name: config.offerCatalog.title,
          itemListElement: config.offerCatalog.items.map((item) => ({
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

type ServicePageSchemaInput = {
  page: PageSeoConfig;
  pageUrl: string;
  pageId: string;
  serviceId: string;
  faqId: string;
  breadcrumbId: string;
  serviceName: string;
  serviceType: string;
  breadcrumbName: string;
  audienceType: string;
  faqs: readonly { question: string; answer: string }[];
  offers?: readonly { title: string; description: string }[];
  videos?: ReturnType<typeof videoObjectSchema>[];
};

function createServicePageSchema({
  page,
  pageUrl,
  pageId,
  serviceId,
  faqId,
  breadcrumbId,
  serviceName,
  serviceType,
  breadcrumbName,
  audienceType,
  faqs,
  offers,
  videos,
}: ServicePageSchemaInput) {
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
        "@id": pageId,
        url: pageUrl,
        name: page.title,
        description: page.description,
        datePublished: page.publishedTime,
        dateModified: page.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: [
          { "@id": serviceId },
          { "@id": faqId },
          ...(videos ? videos.map((v) => ({ "@id": v["@id"] })) : []),
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(page.image.path),
          width: page.image.width,
          height: page.image.height,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        serviceType,
        url: pageUrl,
        description: page.description,
        provider: { "@id": organizationId },
        audience: {
          "@type": "BusinessAudience",
          audienceType,
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
        ...(offers
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `${serviceName} capabilities`,
                itemListElement: offers.map((offer) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: offer.title,
                    description: offer.description,
                  },
                })),
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      ...(videos ?? []),
    ],
  };
}

export function createBeautyCosmeticsPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.beautyCosmetics,
    pageUrl: beautyPageUrl,
    pageId: beautyPageId,
    breadcrumbId: beautyBreadcrumbId,
    breadcrumbName: "Beauty & Cosmetics",
    serviceId: beautyServiceId,
    serviceName: "Beauty & Cosmetics Ecommerce Development",
    serviceType: "Beauty and cosmetics ecommerce development",
    audienceType:
      "Beauty, cosmetics, skincare, haircare, salon and wellness brands",
    offerCatalog: beautyIndustryPage.deliverables,
  });
}

export function createFashionPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.fashion,
    pageUrl: fashionPageUrl,
    pageId: fashionPageId,
    breadcrumbId: fashionBreadcrumbId,
    breadcrumbName: "Fashion & Apparel",
    serviceId: fashionServiceId,
    serviceName: "Fashion & Apparel Ecommerce Development",
    serviceType: "Fashion and apparel ecommerce development",
    audienceType:
      "Fashion, apparel, jewelry, footwear, accessories and lifestyle brands",
    offerCatalog: fashionIndustryPage.deliverables,
  });
}

export function createHealthcarePageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.healthcare,
    pageUrl: healthcarePageUrl,
    pageId: healthcarePageId,
    breadcrumbId: healthcareBreadcrumbId,
    breadcrumbName: "Health & Nutrition",
    serviceId: healthcareServiceId,
    serviceName: "Health & Nutrition Ecommerce and Website Development",
    serviceType: "Health, nutrition, wellness and dental web development",
    audienceType:
      "Health, nutrition, supplement, wellness, healthcare product and dental organizations",
    offerCatalog: healthcareIndustryPage.deliverables,
  });
}

export function createFoodBeveragesPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.foodBeverages,
    pageUrl: foodBeveragesPageUrl,
    pageId: foodBeveragesPageId,
    breadcrumbId: foodBeveragesBreadcrumbId,
    breadcrumbName: "Food & Beverages",
    serviceId: foodBeveragesServiceId,
    serviceName: "Food & Beverages Ecommerce Development",
    serviceType: "Food and beverage ecommerce and website development",
    audienceType:
      "Food, beverage, restaurant, cafe, bar, grocery and consumer packaged goods brands",
    offerCatalog: foodBeveragesIndustryPage.deliverables,
  });
}

export function createPetIndustryPageSchema() {
  return createIndustryPageSchema({
    seo: pageSeo.petIndustry,
    pageUrl: petIndustryPageUrl,
    pageId: petIndustryPageId,
    breadcrumbId: petIndustryBreadcrumbId,
    breadcrumbName: "Pet Industry",
    serviceId: petIndustryServiceId,
    serviceName: "Pet Industry Ecommerce Development",
    serviceType: "Pet industry ecommerce and website development",
    audienceType:
      "Pet retailers, pet food and accessory brands, equestrian brands and pet-service businesses",
    offerCatalog: petIndustryPage.deliverables,
  });
}

export function createWhiteLabelShopifyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelShopify,
    pageUrl: whiteLabelShopifyPageUrl,
    pageId: whiteLabelShopifyPageId,
    serviceId: whiteLabelShopifyServiceId,
    faqId: whiteLabelShopifyFaqId,
    breadcrumbId: whiteLabelShopifyBreadcrumbId,
    serviceName: "White Label Shopify Development Services",
    serviceType: "White label Shopify and Shopify Plus development",
    breadcrumbName: "White Label Shopify Development Services",
    audienceType: "Digital agencies and ecommerce agencies",
    faqs: whiteLabelShopifyFaqs,
  });
}

export function createWhiteLabelWordPressPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelWordPress,
    pageUrl: whiteLabelWordPressPageUrl,
    pageId: whiteLabelWordPressPageId,
    serviceId: whiteLabelWordPressServiceId,
    faqId: whiteLabelWordPressFaqId,
    breadcrumbId: whiteLabelWordPressBreadcrumbId,
    serviceName: "White Label WordPress Development Services",
    serviceType: "White label WordPress and WooCommerce development",
    breadcrumbName: "White Label WordPress Development Services",
    audienceType: "Digital, web design, ecommerce, branding, and marketing agencies",
    faqs: whiteLabelWordPressFaqs,
    offers: whiteLabelWordPressServices,
  });
}

export function createWhiteLabelWebsiteDesignPageSchema() {
  return createServicePageSchema({
    page: pageSeo.whiteLabelWebsiteDesign,
    pageUrl: whiteLabelWebsiteDesignPageUrl,
    pageId: whiteLabelWebsiteDesignPageId,
    serviceId: whiteLabelWebsiteDesignServiceId,
    faqId: whiteLabelWebsiteDesignFaqId,
    breadcrumbId: whiteLabelWebsiteDesignBreadcrumbId,
    serviceName: "White Label Website Design Services",
    serviceType: "White label website design and web development",
    breadcrumbName: "White Label Website Design Services",
    audienceType: "Digital, web design, ecommerce, branding, and marketing agencies",
    faqs: whiteLabelWebsiteDesignFaqs,
    offers: whiteLabelWebsiteDesignServices,
  });
}

const shopifyPlusTestimonialUploadDates: Record<string, string> = {
  "o4JnTGEH-Yk": "2024-05-15",
  "B3KnREB4Bro": "2024-05-15",
  "-IpNUAco1OA": "2024-05-15",
  "oNDPBGO83G4": "2024-05-15",
  "AoglCZQC0RU": "2024-05-15",
  "Vc9FH6ZeoXY": "2024-08-16",
  "_ay_egf5GKw": "2025-11-13",
  "_9uT-dRcQvo": "2025-11-28",
  "6Ni9tlZ7HKE": "2025-12-03",
  "_rQeMWcz_gA": "2026-02-10",
  "WQWG2niydpE": "2026-06-03",
};

function shopifyPlusTestimonialVideoSchema() {
  return shopifyPlusAgencyTestimonials.items.map((testimonial) =>
    videoObjectSchema({
      id: `${shopifyPlusPageUrl}#testimonial-video-${testimonial.videoId}`,
      name: `${testimonial.name} client testimonial for Dynamic Dreamz`,
      description: `${testimonial.name}, ${testimonial.company} client testimonial for Dynamic Dreamz. ${testimonial.quote}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`,
      uploadDate: shopifyPlusTestimonialUploadDates[testimonial.videoId] ?? "2024-05-15",
      ...youTubeUrls(testimonial.videoId),
    }),
  );
}

export function createShopifyPlusAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyPlus,
    pageUrl: shopifyPlusPageUrl,
    pageId: shopifyPlusPageId,
    serviceId: shopifyPlusServiceId,
    faqId: shopifyPlusFaqId,
    breadcrumbId: shopifyPlusBreadcrumbId,
    serviceName: "Shopify Plus Agency Services",
    serviceType: "Shopify Plus agency and Shopify development services",
    breadcrumbName: "Shopify Plus Agency",
    audienceType:
      "High-growth eCommerce brands, B2B merchants, and businesses scaling on Shopify Plus",
    faqs: shopifyPlusAgencyFaqs,
    offers: shopifyPlusAgencyServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWordPressDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.wordpressDevelopment,
    pageUrl: wordpressDevelopmentPageUrl,
    pageId: wordpressDevelopmentPageId,
    serviceId: wordpressDevelopmentServiceId,
    faqId: wordpressDevelopmentFaqId,
    breadcrumbId: wordpressDevelopmentBreadcrumbId,
    serviceName: "WordPress Web Development Services",
    serviceType: "Custom WordPress website development, theme customization, and plugin development",
    breadcrumbName: "WordPress Web Development Services",
    audienceType:
      "Businesses, ecommerce brands, and digital agencies seeking custom WordPress web development services",
    faqs: wordpressDevelopmentFaqs,
    offers: wordpressDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createHireWordPressDevelopersPageSchema() {
  return createServicePageSchema({
    page: pageSeo.hireWordPressDevelopers,
    pageUrl: hireWordPressDevelopersPageUrl,
    pageId: hireWordPressDevelopersPageId,
    serviceId: hireWordPressDevelopersServiceId,
    faqId: hireWordPressDevelopersFaqId,
    breadcrumbId: hireWordPressDevelopersBreadcrumbId,
    serviceName: "Dedicated WordPress Development Services",
    serviceType: "Dedicated WordPress developer and WordPress team hiring",
    breadcrumbName: "Hire WordPress Developers",
    audienceType:
      "Businesses and agencies seeking dedicated WordPress developers or WordPress development teams",
    faqs: hireWordPressFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
  });
}

export function createHireShopifyDevelopersPageSchema() {
  return createServicePageSchema({
    page: pageSeo.hireShopifyDevelopers,
    pageUrl: hireShopifyDevelopersPageUrl,
    pageId: hireShopifyDevelopersPageId,
    serviceId: hireShopifyDevelopersServiceId,
    faqId: hireShopifyDevelopersFaqId,
    breadcrumbId: hireShopifyDevelopersBreadcrumbId,
    serviceName: "Dedicated Shopify Development Services",
    serviceType: "Dedicated Shopify developer and Shopify team hiring",
    breadcrumbName: "Hire Shopify Developers",
    audienceType:
      "Businesses and agencies seeking dedicated Shopify developers or Shopify development teams",
    faqs: hireShopifyFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: hireShopifyServices.items,
  });
}

export function createShopifyExpertsPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyExperts,
    pageUrl: shopifyExpertsPageUrl,
    pageId: shopifyExpertsPageId,
    serviceId: shopifyExpertsServiceId,
    faqId: shopifyExpertsFaqId,
    breadcrumbId: shopifyExpertsBreadcrumbId,
    serviceName: "Dedicated Shopify Expert Services",
    serviceType: "Certified Shopify experts, developers, and eCommerce consultants",
    breadcrumbName: "Shopify Experts",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies seeking certified Shopify experts",
    faqs: shopifyExpertsContent.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyExpertsContent.aiAutomation.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyMigrationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyMigration,
    pageUrl: shopifyMigrationPageUrl,
    pageId: shopifyMigrationPageId,
    serviceId: shopifyMigrationServiceId,
    faqId: shopifyMigrationFaqId,
    breadcrumbId: shopifyMigrationBreadcrumbId,
    serviceName: "Shopify Store Migration Services",
    serviceType:
      "End-to-end platform migration to Shopify & Shopify Plus with zero downtime and full data integrity",
    breadcrumbName: "Shopify Migration",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies migrating from Magento, WooCommerce, BigCommerce, Salesforce, PrestaShop, Squarespace, Wix, or Shopify 1.0",
    faqs: shopifyMigrationFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyMigrationServices.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyCroPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyCro,
    pageUrl: shopifyCroPageUrl,
    pageId: shopifyCroPageId,
    serviceId: shopifyCroServiceId,
    faqId: shopifyCroFaqId,
    breadcrumbId: shopifyCroBreadcrumbId,
    serviceName: "Shopify Conversion Rate Optimization (CRO) Services",
    serviceType:
      "Data-driven Shopify CRO audits, funnel analysis, A/B testing, user behavior insights, and UX implementation",
    breadcrumbName: "Shopify CRO Agency",
    audienceType:
      "Shopify and Shopify Plus merchants looking to increase store conversions, average order value (AOV), and customer retention",
    faqs: shopifyCroFaqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyCroServices.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createCaseStudiesPageSchema() {
  const caseStudyItems = caseStudiesContent.items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: item.title,
      headline: item.title,
      description: item.excerpt,
      image: absoluteUrl(item.image),
      genre: item.technology || item.industry,
      about: [item.technology, item.industry].filter(Boolean),
      url: absoluteUrl(item.href),
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
        "@id": caseStudiesPageId,
        url: caseStudiesPageUrl,
        name: pageSeo.caseStudies.title,
        description: pageSeo.caseStudies.description,
        datePublished: pageSeo.caseStudies.publishedTime,
        dateModified: pageSeo.caseStudies.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": caseStudiesBreadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          "@id": caseStudiesItemListId,
          name: "Client Case Studies",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: caseStudiesContent.items.length,
          itemListElement: caseStudyItems,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.caseStudies.image.path),
          width: pageSeo.caseStudies.image.width,
          height: pageSeo.caseStudies.image.height,
          caption: pageSeo.caseStudies.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": caseStudiesBreadcrumbId,
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
            name: "Case Studies",
            item: caseStudiesPageUrl,
          },
        ],
      },
    ],
  };
}

export function createShopifyAppsPageSchema() {
  const appItems = shopifyAppsContent.apps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.title,
      url: app.href,
      description: app.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      image: absoluteUrl(app.image),
      offers: {
        "@type": "Offer",
        price: app.additionalInfo.includes("$20") ? "20" : "0",
        priceCurrency: "USD",
        description: app.additionalInfo,
      },
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
        "@id": shopifyAppsPageId,
        url: shopifyAppsPageUrl,
        name: pageSeo.shopifyApps.title,
        description: pageSeo.shopifyApps.description,
        datePublished: pageSeo.shopifyApps.publishedTime,
        dateModified: pageSeo.shopifyApps.modifiedTime,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": shopifyAppsBreadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          "@id": shopifyAppsItemListId,
          name: "Shopify Apps",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: shopifyAppsContent.apps.length,
          itemListElement: appItems,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageSeo.shopifyApps.image.path),
          width: pageSeo.shopifyApps.image.width,
          height: pageSeo.shopifyApps.image.height,
          caption: pageSeo.shopifyApps.image.alt,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": shopifyAppsBreadcrumbId,
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
            name: "Shopify App",
            item: shopifyAppsPageUrl,
          },
        ],
      },
    ],
  };
}

export function createShopifyThemeCustomizationPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyThemeCustomization,
    pageUrl: shopifyThemeCustomizationPageUrl,
    pageId: shopifyThemeCustomizationPageId,
    serviceId: shopifyThemeCustomizationServiceId,
    faqId: shopifyThemeCustomizationFaqId,
    breadcrumbId: shopifyThemeCustomizationBreadcrumbId,
    serviceName: "Shopify Theme Customization Services",
    serviceType: "Shopify theme customization, store design, Liquid development, and UI/UX optimization",
    breadcrumbName: "Shopify Theme Customization",
    audienceType:
      "eCommerce brands, direct-to-consumer businesses, and digital agencies seeking expert Shopify theme customization",
    faqs: shopifyThemeCustomizationContent.faqs.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    offers: shopifyThemeCustomizationContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createShopifyDevelopmentAgencyPageSchema() {
  return createServicePageSchema({
    page: pageSeo.shopifyDevelopmentAgency,
    pageUrl: shopifyDevelopmentAgencyPageUrl,
    pageId: shopifyDevelopmentAgencyPageId,
    serviceId: shopifyDevelopmentAgencyServiceId,
    faqId: shopifyDevelopmentAgencyFaqId,
    breadcrumbId: shopifyDevelopmentAgencyBreadcrumbId,
    serviceName: "Shopify Development Services",
    serviceType: "Custom Shopify store development, theme customization, migration, app integration, and maintenance",
    breadcrumbName: "Shopify Development Agency",
    audienceType:
      "DTC brands, B2B merchants, store owners, and digital agencies seeking comprehensive Shopify development services",
    faqs: shopifyDevelopmentAgencyFaqs,
    offers: shopifyDevelopmentAgencyServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createWooCommerceDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.woocommerceDevelopment,
    pageUrl: woocommerceDevelopmentPageUrl,
    pageId: woocommerceDevelopmentPageId,
    serviceId: woocommerceDevelopmentServiceId,
    faqId: woocommerceDevelopmentFaqId,
    breadcrumbId: woocommerceDevelopmentBreadcrumbId,
    serviceName: "WooCommerce Development Services",
    serviceType: "Custom WooCommerce store design, theme development, plugin development, API development, migration, and maintenance",
    breadcrumbName: "WooCommerce Development",
    audienceType:
      "Store owners, merchants, digital agencies, and businesses seeking custom WooCommerce development services",
    faqs: woocommerceDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: woocommerceDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function createMagentoDevelopmentPageSchema() {
  return createServicePageSchema({
    page: pageSeo.magentoDevelopment,
    pageUrl: magentoDevelopmentPageUrl,
    pageId: magentoDevelopmentPageId,
    serviceId: magentoDevelopmentServiceId,
    faqId: magentoDevelopmentFaqId,
    breadcrumbId: magentoDevelopmentBreadcrumbId,
    serviceName: "Magento Development Services",
    serviceType:
      "Custom Magento store development, theme development, module development, migration, speed optimization, and ongoing support",
    breadcrumbName: "Magento Development",
    audienceType:
      "Enterprise merchants, B2B companies, DTC brands, and digital agencies seeking custom Magento development services",
    faqs: magentoDevelopmentFaqs.map((item) => ({
      question: item.question,
      answer: [
        item.answer,
        ...(item.listItems?.map(
          (listItem) => `${listItem.label ? `${listItem.label} ` : ""}${listItem.text}`,
        ) ?? []),
      ].join(" "),
    })),
    offers: magentoDevelopmentServices.items,
    videos: shopifyPlusTestimonialVideoSchema(),
  });
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
