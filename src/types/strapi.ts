/**
 * Strapi Headless CMS TypeScript definitions.
 * Models all Content Types (Single & Collection) and Dynamic Zone Blocks
 * for Dynamic Dreamz Headless CMS integration.
 */

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiMedia {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: Record<string, StrapiMediaFormat> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: StrapiMeta;
}

export type StrapiSingleResponse<T> = StrapiResponse<T>;
export type StrapiCollectionResponse<T> = StrapiResponse<T[]>;

// ==============================================================================
// Element & Shared Component Types
// ==============================================================================

export interface StrapiSeoComponent {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: StrapiMedia;
  keywords?: string;
  preventIndexing?: boolean;
  canonicalUrl?: string;
}

export interface StrapiCounterElement {
  id?: number;
  label: string;
  value?: number;
  display: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export interface StrapiFaqItemElement {
  id?: number;
  question: string;
  answer: string;
}

export interface StrapiFeatureItemElement {
  id?: number;
  title: string;
  description: string;
  icon?: StrapiMedia;
  linkText?: string;
  linkUrl?: string;
}

export interface StrapiTimelineStepElement {
  id?: number;
  stepNumber?: string;
  title: string;
  description?: string;
}

export interface StrapiNavLinkElement {
  id?: number;
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: StrapiMedia;
  ctaLabel?: string;
}

export interface StrapiNavGroupElement {
  id?: number;
  label: string;
  slug?: string;
  columns?: number;
  variant?: "default" | "work";
  items?: StrapiNavLinkElement[];
  promoTitle?: string;
  promoDetails?: string;
  promoCtaLabel?: string;
  promoCtaHref?: string;
}

export interface StrapiFooterColumnElement {
  id?: number;
  title: string;
  links?: StrapiNavLinkElement[];
}

export interface StrapiSocialLinkElement {
  id?: number;
  platform: string;
  url: string;
  icon?: StrapiMedia;
}

// ==============================================================================
// Dynamic Zone Section Block Types
// ==============================================================================

export interface StrapiHeroSection {
  __component: "sections.hero";
  id: number;
  title: string;
  description?: string;
  subheading?: string;
  eyebrows?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  image?: StrapiMedia;
  variant?: "split" | "centered";
  showReviews?: boolean;
}

export interface StrapiProofCountersSection {
  __component: "sections.proof-counters";
  id: number;
  heading: string;
  description?: string;
  counters?: StrapiCounterElement[];
}

export interface StrapiFaqAccordionSection {
  __component: "sections.faq-accordion";
  id: number;
  heading: string;
  eyebrow?: string;
  description?: string;
  faqs?: StrapiFaqItemElement[];
}

export interface StrapiCtaBannerSection {
  __component: "sections.cta-banner";
  id: number;
  heading: string;
  description?: string;
  btnText?: string;
  btnUrl?: string;
}

export interface StrapiFeaturesGridSection {
  __component: "sections.features-grid";
  id: number;
  heading: string;
  eyebrow?: string;
  description?: string;
  features?: StrapiFeatureItemElement[];
}

export interface StrapiProcessTimelineSection {
  __component: "sections.process-timeline";
  id: number;
  heading: string;
  eyebrow?: string;
  steps?: StrapiTimelineStepElement[];
}

export interface StrapiHappyClientsSection {
  __component: "sections.happy-clients";
  id: number;
  heading?: string;
  eyebrow?: string;
  description?: string;
  testimonials?: StrapiTestimonial[];
}

export interface StrapiCaseStudiesSection {
  __component: "sections.case-studies";
  id: number;
  heading?: string;
  eyebrow?: string;
  description?: string;
  caseStudies?: StrapiCaseStudy[];
}

export type StrapiSectionBlock =
  | StrapiHeroSection
  | StrapiProofCountersSection
  | StrapiFaqAccordionSection
  | StrapiCtaBannerSection
  | StrapiFeaturesGridSection
  | StrapiProcessTimelineSection
  | StrapiHappyClientsSection
  | StrapiCaseStudiesSection;

// ==============================================================================
// Content Type Models (Single & Collection)
// ==============================================================================

export interface StrapiGlobal {
  id: number;
  documentId?: string;
  siteName?: string;
  siteDescription?: string;
  logo?: StrapiMedia;
  favicon?: StrapiMedia;
  headerNav?: StrapiNavGroupElement[];
  headerCtaLabel?: string;
  headerCtaHref?: string;
  footerColumns?: StrapiFooterColumnElement[];
  footerBottomLinks?: StrapiNavLinkElement[];
  socialLinks?: StrapiSocialLinkElement[];
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
  address?: string;
  copyrightText?: string;
  defaultSeo?: StrapiSeoComponent;
}

export interface StrapiAuthor {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  avatar?: StrapiMedia;
  articles?: StrapiArticle[];
}

export interface StrapiCategory {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  description?: string;
  articles?: StrapiArticle[];
}

export interface StrapiTestimonial {
  id: number;
  documentId?: string;
  authorName: string;
  authorTitle?: string;
  company?: string;
  quote: string;
  rating?: number;
  videoId?: string;
  videoUrl?: string;
  avatar?: StrapiMedia;
  logo?: StrapiMedia;
  imageAlt?: string;
  logoAlt?: string;
}

export interface StrapiArticle {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  date?: string;
  displayDate?: string;
  excerpt?: string;
  contentBeforeToc?: string;
  contentAfterToc?: string;
  coverImage?: StrapiMedia;
  faqs?: StrapiFaqItemElement[];
  author?: StrapiAuthor;
  categories?: StrapiCategory[];
  seo?: StrapiSeoComponent;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StrapiCaseStudy {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  client?: string;
  industry?: string;
  technology?: string;
  location?: string;
  excerpt?: string;
  content?: string;
  thumbnail?: StrapiMedia;
  heroImage?: StrapiMedia;
  gallery?: StrapiMedia[];
  sections?: unknown;
  tags?: string[];
  metrics?: StrapiCounterElement[];
  testimonial?: StrapiTestimonial;
  seo?: StrapiSeoComponent;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StrapiPage {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  sections?: StrapiSectionBlock[];
  seo?: StrapiSeoComponent;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
