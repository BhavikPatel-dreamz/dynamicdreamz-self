import type { ServicePageEntry } from "./types";
import { AboutPage } from "./pages/about-page";
import { BookDiscoveryCallPage } from "@/components/blocks/DiscoveryCallBookingBlock";
import { CareerApplyNowPage } from "./pages/career-apply-now";
import { CareerPage } from "./pages/career-page";
import { ContactPage } from "./pages/contact-page";
import { HomePage } from "./pages/home-page";
import { LifeDynamicDreamzPage } from "./pages/life-dynamicdreamz-page";
import { OurWorkPage } from "./pages/our-work-page";
import { PrivacyPolicyPage } from "@/components/blocks/LegalRichTextBlock";
import { RequestQuotePage } from "@/components/blocks/MultiStepQuoteRequestBlock";
import { ResourcesPage } from "./pages/resources-page";
import { SiteMapPage } from "@/components/blocks/LegalRichTextBlock";
import { TermsOfServicePage } from "@/components/blocks/LegalRichTextBlock";
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
