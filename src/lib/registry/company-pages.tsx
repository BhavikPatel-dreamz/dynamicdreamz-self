import type { ServicePageEntry } from "./types";
import { AboutPage } from "@/components/sections/about-page";
import { BookDiscoveryCallPage } from "@/components/sections/book-a-discovery-call-page";
import { CareerApplyNowPage } from "@/components/sections/career-apply-now/career-apply-now-page";
import { CareerPage } from "@/components/sections/career-page";
import { ContactPage } from "@/components/sections/contact-page";
import { HomePage } from "@/components/sections/home-page";
import { LifeDynamicDreamzPage } from "@/components/sections/life-dynamicdreamz-page";
import { OurWorkPage } from "@/components/sections/our-work-page";
import { PrivacyPolicyPage } from "@/components/sections/privacy-policy-page";
import { RequestQuotePage } from "@/components/sections/request-quote-page";
import { ResourcesPage } from "@/components/sections/resources-page";
import { SiteMapPage } from "@/components/sections/site-map-page";
import { TermsOfServicePage } from "@/components/sections/terms-of-service-page";
import { pageMetadata } from "@/data/seo";
import {
  createAboutPageSchema,
  createBookDiscoveryCallPageSchema,
  createCareerApplyNowPageSchema,
  createCareerPageSchema,
  createContactPageSchema,
  createHomePageSchema,
  createLifePageSchema,
  createOurWorkPageSchema,
  createPrivacyPolicyPageSchema,
  createRequestQuotePageSchema,
  createResourcesPageSchema,
  createSiteMapPageSchema,
  createTermsOfServicePageSchema,
} from "@/lib/schema";

export const companyPagesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "home",
    metadata: pageMetadata.home,
    getSchema: createHomePageSchema,
    render: () => <HomePage />,
  },
  {
    slug: "about-us",
    metadata: pageMetadata.about,
    getSchema: createAboutPageSchema,
    render: () => <AboutPage />,
  },
  {
    slug: "contact-us",
    metadata: pageMetadata.contact,
    getSchema: createContactPageSchema,
    render: () => <ContactPage />,
  },
  {
    slug: "career",
    metadata: pageMetadata.career,
    getSchema: createCareerPageSchema,
    render: () => <CareerPage />,
  },
  {
    slug: "career-apply-now",
    metadata: pageMetadata.careerApplyNow,
    getSchema: createCareerApplyNowPageSchema,
    render: () => <CareerApplyNowPage />,
  },
  {
    slug: "life-dynamicdreamz",
    metadata: pageMetadata.life,
    getSchema: createLifePageSchema,
    render: () => <LifeDynamicDreamzPage />,
  },
  {
    slug: "our-work",
    metadata: pageMetadata.ourWork,
    getSchema: createOurWorkPageSchema,
    render: () => <OurWorkPage />,
  },
  {
    slug: "request-quote",
    metadata: pageMetadata.requestQuote,
    getSchema: createRequestQuotePageSchema,
    render: () => <RequestQuotePage />,
  },
  {
    slug: "book-a-discovery-call",
    metadata: pageMetadata.bookDiscoveryCall,
    getSchema: createBookDiscoveryCallPageSchema,
    render: () => <BookDiscoveryCallPage />,
  },
  {
    slug: "site-map",
    metadata: pageMetadata.siteMap,
    getSchema: createSiteMapPageSchema,
    render: () => <SiteMapPage />,
  },
  {
    slug: "privacy-policy",
    metadata: pageMetadata.privacyPolicy,
    getSchema: createPrivacyPolicyPageSchema,
    render: () => <PrivacyPolicyPage />,
  },
  {
    slug: "terms-of-service",
    metadata: pageMetadata.termsOfService,
    getSchema: createTermsOfServicePageSchema,
    render: () => <TermsOfServicePage />,
  },
  {
    slug: "resources",
    metadata: pageMetadata.resources,
    getSchema: createResourcesPageSchema,
    render: () => <ResourcesPage />,
  },
];
