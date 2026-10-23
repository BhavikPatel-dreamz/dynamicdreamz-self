import React from "react";
import { getBlockBackgroundCategory } from "@/lib/section-spacing";
import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { FeaturesGridSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { type HappyClientTestimonialItem } from "@/types/blocks";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ProofCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { ServiceHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { ServicesCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { type CaseStudyPreviewItem } from "@/types/blocks";
import { BrandPartnersSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { HomeHeroSection } from "@/components/blocks/AgencyHeroBlock";
import { ShopifyPlusAgencySection } from "@/components/blocks/WhyChooseUsBlock";
import { WhiteLabelPartnerSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { CommerceSolutionsSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { SelectedWorkSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { TestimonialsSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IntegrationsSection } from "@/components/blocks/TechStackShowcaseBlock";
import { InsightsSection } from "@/components/blocks/ResourceHubFeedBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { TechnologiesWorkWithSection } from "@/components/blocks/TechStackShowcaseBlock";
import { TwoColImageWithTextSection } from "@/components/blocks/WhyChooseUsBlock";
import { IndustriesServedSection } from "@/components/blocks/IndustryVerticalsGridBlock";
import { SiteMapPage } from "@/components/blocks/LegalRichTextBlock";
import { TermsOfServicePage, type TermsOfServiceContentProps } from "@/components/blocks/LegalRichTextBlock";
import { PrivacyPolicyPage, type PrivacyPolicyContentProps } from "@/components/blocks/LegalRichTextBlock";
import { AboutHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { AboutStorySection } from "@/components/blocks/MissionVisionValuesBlock";
import { AboutTimelineSection } from "@/components/blocks/CompanyMilestonesTimelineBlock";
import { AboutFoundersSection } from "@/components/blocks/LeadershipTeamGridBlock";
import { AboutTeamSection } from "@/components/blocks/LeadershipTeamGridBlock";
import { AboutValuesSection } from "@/components/blocks/MissionVisionValuesBlock";
import { LifeHeroSection } from "@/components/blocks/LifeHeroBlock";
import { WorkCultureSection } from "@/components/blocks/WorkCultureBlock";
import { LifeHiringSection } from "@/components/blocks/LifeHiringBlock";
import { LifeGallerySection } from "@/components/blocks/CultureBentoGalleryBlock";
import { OurWorkHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { OurWorkProjectsSection } from "@/components/blocks/FullPortfolioFilterBlock";
import { OurWorkCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { ContactHeroSection, ContactFormSection, ContactOfficesSection, ContactDetailsSection } from "@/components/blocks/ContactOfficesAndFormBlock";
import { FormBlock } from "@/components/blocks/FormBlock";
import { BookDiscoveryCallPage } from "@/components/blocks/DiscoveryCallBookingBlock";
import { RequestQuotePage } from "@/components/blocks/MultiStepQuoteRequestBlock";
import { CareerHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { CareerOpportunitiesSection } from "@/components/blocks/JobOpeningsListBlock";
import { CareerBenefitIcon } from "@/lib/icons/career-benefit-icons";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ThemeCustomizationServicesBlock";
import { CareerApplyNowPage } from "@/lib/registry/pages/career-apply-now";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ShopifyPlusProofSection } from "@/components/blocks/PartnerCertificationsBarBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CaseStudyCardsSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyTeamBoxesSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyHorizontalProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { VerifiedKnowledgeSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CredentialEvidenceSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CredentialTabsSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CertifiedAgencySupportSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { CertifiedServicesSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { PartnerDirectoryProofSection } from "@/components/blocks/CertifiedDeveloperTabsBlock";
import { WhiteLabelFinalCtaSection } from "@/components/blocks/QuoteRequestCTABlock";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/blocks/ProcessWorkflowBlock";
import { SeoSafeMigrationSection } from "@/components/blocks/MigrationDataChecklistBlock";
import { WhyChooseShopifyMigrationSection } from "@/components/blocks/WhyChooseUsBlock";
import { ThemeCustomizationApproachSection } from "@/components/sections/theme-customization-approach-section";
import { ShopifyThemesGridSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { AiEmpoweredDeliverySection } from "@/components/blocks/PerformanceBenchmarksBlock";
import { ShopifyCroBarriersSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyCroRevenueImpactSection } from "@/components/blocks/RevenueImpactComparisonBlock";
import { ShopifyCroServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyCroAssessmentSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyCroProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyCroWhySection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyCroEngagementSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyMobileAppHeroSection } from "@/components/blocks/MobileAppInteractiveShowcaseBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { ShopifyMobileAppDtcSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyMobileAppWorkSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ShopifyMobileAppComparisonSection } from "@/components/blocks/PlatformComparisonTableBlock";
import { ShopifyMobileAppExperienceSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { WhiteLabelProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { ShopifyTeamBehindItSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { CityWhyChooseBoxesSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { ShopifyHoursHeroSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-hero-section";
import { ShopifyHoursComparisonSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyHoursTasksSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { NumberedProcessTimelineSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyAppBenefitsSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { ShopifyAppFeaturesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyAppProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { RisksShopifyTopics } from "@/components/blocks/MigrationDataChecklistBlock";
import { ImageCtaSection } from "@/components/blocks/QuoteRequestCTABlock";
import { MigrationProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { MigrationPlatformIcon } from "@/lib/icons/migration-platform-icons";
import { type MigrationPlatformIconName } from "@/types/blocks";
import { MagentoMigrationIcon } from "@/lib/icons/magento-migration-icons";
import { type MagentoMigrationIconName } from "@/types/blocks";
import { MagentoPlusIcon } from "@/lib/icons/magento-plus-icons";
import { type MagentoPlusIconName } from "@/types/blocks";
import { WooCommerceMigrationIcon } from "@/lib/icons/woocommerce-migration-icons";
import { type WooCommerceMigrationIconName } from "@/types/blocks";
import { ShopifyThemeServiceIcon } from "@/lib/icons/service-icons";
import { HireShopifyIcon, type HireShopifyIconName } from "@/lib/icons/hire-shopify-icons";
import { OnlineStore20Icon } from "@/lib/icons/migrating-theme-to-online-store-2-0-icons";
import { type OnlineStore20IconName } from "@/types/blocks";
import { ShopifyAppsHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { ShopifyAppsGridSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { ShopifySupportScenariosSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { DeliveryModelComparisonSection } from "@/components/blocks/EngagementModelsBlock";
import { WhiteLabelToolsSection } from "@/components/blocks/TechStackShowcaseBlock";
import { HowAgenciesUseSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { WhiteLabelStatsSection, WhiteLabelWhySection } from "@/components/blocks/TrustStatsBarBlock";
import { WhiteLabelServicesSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { DesignReasonsSection } from "@/components/blocks/WhyChooseUsBlock";
import { TextBoxSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { RecentArchitecturePatternsSection } from "@/components/blocks/PlatformComparisonTableBlock";
import { AiServicesGridSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { TechKeywordSection } from "@/components/blocks/TechStackShowcaseBlock";
import { PillListSection } from "@/components/blocks/TechStackShowcaseBlock";
import { ShopifyReasonsSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { ShopifyThemeTechSection } from "@/components/blocks/TechStackShowcaseBlock";
import { ThemeWhyChooseSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { LetsBuildSection } from "@/components/blocks/QuoteRequestCTABlock";
import { WordPressCustomizationIcon } from "@/lib/icons/wordpress-customization-icons";
import { BigCommerceIcon } from "@/lib/icons/bigcommerce-icons";
import { WebflowGrowthIcon } from "@/lib/icons/webflow-growth-icons";
import { WhiteLabelWebsiteDesignAdvantageIcon, WhiteLabelWebsiteDesignBenefitIcon } from "@/lib/icons/white-label-website-design-icons";
import { shopifyHoursMobileLogoRows } from "@/content/buy-shopify-development-hours";
import { whiteLabelShopifyDeliveryComparison } from "@/content/white-label-shopify-development";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyIndustries, shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { industryBrandLogos } from "@/content/industries";
import { mobileAppPlatformLabels, shopifyMobileAppExploreWork } from "@/content/shopify-mobile-app-development";
import { appmakerHeroCoBranding } from "@/content/appmaker-shopify-mobile-app-development";
import { risksShopifyOutsourcingTopics } from "@/content/risks-of-shopify-outsourcing";
import { siteMapLinks, type SiteMapLinkItem } from "@/content/site-map";
import {
  bookDiscoveryCallContent,
  type BookDiscoveryCallContent,
} from "@/content/book-a-discovery-call";
import { workplaceBenefits } from "@/content/career";
import { homeFaqs, homeSectionCopy } from "@/content/home";

export type CmsMedia =
  | {
      url?: string | null;
      alt?: string | null;
      width?: number | null;
      height?: number | null;
    }
  | string;

function resolveMediaUrl(media?: CmsMedia | null): string {
  if (!media) return "";
  if (typeof media === "string") return media;
  return media.url || "";
}

function resolveMediaAlt(media?: CmsMedia | null, fallback = ""): string {
  if (!media || typeof media === "string") return fallback;
  return media.alt?.trim() || fallback;
}

function extractYoutubeId(val?: string): string {
  if (!val) return "";
  const trimmed = val.trim();
  if (!trimmed.includes("/") && !trimmed.includes(".")) return trimmed;
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
  );
  return match ? match[1] : trimmed;
}

export interface BlockHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  establishedText?: string;
  partnerBadgeText?: string;
  secondaryCta?: {
    label?: string;
    href?: string;
  };
  proofBadges?: readonly {
    name?: string;
    href?: string;
    logo?: CmsMedia | null;
    alt?: string;
  }[];
  eyebrows?: readonly (string | { text?: string; id?: string | number })[];
  image?: CmsMedia | null;
  showReviews?: boolean;
  variant?: "split" | "centered" | "home";
}

export interface BlockProofCounters {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  counters?: readonly {
    id?: string | number;
    label: string;
    value?: number;
    display?: string;
    suffix?: string;
  }[];
}

export interface BlockFaqAccordion {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  idPrefix?: string;
  sectionId?: string;
  faqs?: readonly {
    id?: string | number;
    question: string;
    answer: string;
    secondaryAnswer?: string;
    listPosition?: "before" | "after";
    listItems?: readonly { label?: string; text: string }[];
  }[];
}

export interface BlockCtaBanner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  btnText?: string;
  btnUrl?: string;
}

export interface BlockFeaturesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  features?: readonly {
    id?: string | number;
    title: string;
    description: string;
    icon?: CmsMedia | null;
    linkText?: string;
    linkUrl?: string;
  }[];
}

export interface BlockProcessTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  columns?: number;
  steps?: readonly {
    id?: string | number;
    stepNumber?: string;
    step?: string;
    title: string;
    description?: string;
  }[];
}

export interface BlockHappyClients {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  items?: readonly {
    id?: string | number;
    name: string;
    company: string;
    quote: string | readonly string[];
    videoId: string;
    image: CmsMedia;
    logo?: CmsMedia | null;
    logoWidth?: number;
    logoHeight?: number;
  }[];
  testimonials?: readonly (
    | string
    | number
    | {
        id?: string | number;
        authorName?: string;
        clientName?: string;
        name?: string;
        company?: string;
        quote?: string | readonly string[];
        content?: string | readonly string[];
        videoId?: string;
        videoUrl?: string;
        avatar?: CmsMedia | null;
        image?: CmsMedia | null;
        logo?: CmsMedia | null;
        companyLogo?: CmsMedia | null;
        logoAlt?: string;
      }
  )[];
}

export interface BlockCaseStudies {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  caseStudies?: readonly (
    | string
    | number
    | {
        id?: string | number;
        title?: string;
        slug?: string;
        thumbnail?: CmsMedia | null;
        heroImage?: CmsMedia | null;
        technology?: string;
        industry?: string;
        tags?: readonly string[];
      }
  )[];
}

export interface BlockBrandPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  description?: string;
  variant?: "grid" | "slider";
  logos?: readonly {
    id?: string | number;
    name?: string;
    logo?: CmsMedia | null;
    url?: string;
  }[];
}

export interface BlockPricingModels {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  models?: readonly {
    id?: string | number;
    label: string;
    badge?: string;
    price: string;
    description?: string;
    bullets?: readonly (string | { text?: string })[];
    ctaLabel: string;
    ctaHref: string;
  }[];
}

export interface BlockTechnologiesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  categories?: readonly {
    id?: string | number;
    category: string;
    technologies?: readonly (
      | string
      | {
          id?: string | number;
          name?: string;
          icon?: CmsMedia | null;
        }
    )[];
  }[];
}

export interface BlockTwoColImageWithText {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  image?: CmsMedia | null;
  imagePosition?: "left" | "right";
  bullets?: readonly (string | { text?: string })[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockIndustriesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?: "grid" | "carousel";
  industries?: readonly {
    id?: string | number;
    title: string;
    eyebrow?: string;
    description?: string;
    image?: CmsMedia | null;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
  }[];
}

export interface BlockLegalContent {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  containerWidth?: "narrow" | "standard" | "full";
  sections?: readonly {
    id?: string | number;
    title: string;
    level?: "2" | "3";
    paragraphs?: readonly { text: string }[];
    items?: readonly { text: string; boldPrefix?: string }[];
    closingParagraphs?: readonly { text: string }[];
  }[];
  contactInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    phoneHref?: string;
    address?: string;
    addressHref?: string;
  };
}

export interface BlockSiteMapDirectory {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  groups?: readonly {
    id?: string | number;
    title?: string;
    links?: readonly {
      id?: string | number;
      label: string;
      href: string;
    }[];
  }[];
}

export interface BlockShopifyPlusAgency {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  intro?: string;
  paragraphs?: readonly { text: string }[];
  counters?: readonly {
    value: string;
    label: string;
    note?: string;
    tone?: "green" | "stone" | "peach" | "lime";
  }[];
  videoSrc?: string;
}

export interface BlockWhiteLabelPartner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  bullets?: readonly { text: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockCommerceSolutions {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  solutions?: readonly {
    title: string;
    summary: string;
    body: string;
    href?: string;
    cta?: string;
  }[];
}

export interface BlockSelectedWork {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockTestimonialsCarousel {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockIntegrationsPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
}

export interface BlockLatestInsights {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockAboutHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  deliveryTitle?: string;
  statistics?: readonly { label: string; value: string }[];
}

export interface BlockAboutStory {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  caption?: string;
  videoId?: string;
  videoTitle?: string;
  poster?: CmsMedia | null;
  posterAlt?: string;
  overlay?: CmsMedia | null;
}

export interface BlockAboutTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  milestones?: readonly {
    year?: string;
    description?: string;
    image?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockAboutFounders {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  descriptions?: readonly { text: string }[];
  founders?: readonly {
    name: string;
    role: string;
    biography?: string;
    image?: CmsMedia | null;
    alt?: string;
    linkedIn?: string;
  }[];
}

export interface BlockAboutTeam {
  __component?: string;
  blockType?: string;
  id?: string | number;
  keyManagers?: readonly {
    name: string;
    role: string;
    image?: CmsMedia | null;
    alt?: string;
  }[];
  departmentLeaders?: readonly {
    name: string;
    role: string;
    image?: CmsMedia | null;
    alt?: string;
  }[];
}

export interface BlockAboutValues {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface BlockLifeHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  titleBeforeTeamwork?: string;
  teamwork?: string;
  titleAfterTeamwork?: string;
  lead?: string;
  description?: string;
  image?: CmsMedia | string | null;
  imageAlt?: string;
}

export interface BlockWorkCulture {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia | string | null;
    alt?: string;
  }[];
}

export interface BlockLifeHiring {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  cta?: string;
  href?: string;
  image?: CmsMedia | string | null;
  imageAlt?: string;
}

export interface BlockLifeGallery {
  __component?: string;
  blockType?: string;
  id?: string | number;
  images?: readonly {
    image?: CmsMedia | string | null;
    alt?: string;
  }[];
}

export interface BlockOurWorkHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  showcaseImages?: readonly {
    image?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockOurWorkProjects {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockOurWorkCaseStudies {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockContactHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  quickLinks?: readonly { label: string; href: string }[];
}

export interface BlockContactForm {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  form?: any;
}

export interface BlockForm {
  __component?: string;
  blockType?: string;
  id?: string | number;
  form: any;
  enableIntro?: boolean;
  introContent?: any;
  eyebrow?: string;
  title?: string;
  description?: string;
  containerWidth?: "standard" | "narrow" | "wide";
}

export interface BlockContactOffices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  directionsLabel?: string;
  offices?: readonly {
    city: string;
    address: string;
    phone: string;
    phoneHref: string;
    directionsHref: string;
  }[];
}

export interface BlockContactDetails {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
}

export interface BlockDiscoveryCall {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  host?: {
    name: string;
    role: string;
    image?: CmsMedia | null;
    imageAlt?: string;
  };
  benefits?: readonly {
    icon?: string;
    title: string;
    description: string;
  }[];
  calendar?: {
    heading?: string;
    details?: string;
    src?: string;
    iframeTitle?: string;
  };
}

export interface BlockRequestQuoteHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heroTitle?: string;
  heroDescription?: string;
  formTitle?: string;
  counters?: readonly { label: string; count: string; unit?: string }[];
  badges?: readonly {
    href?: string;
    ariaLabel?: string;
    logo?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  testimonials?: readonly {
    name: string;
    quote: string;
    avatar?: CmsMedia | null;
  }[];
  budgetOptions?: readonly { option: string }[];
}

export interface BlockCareerHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  badges?: readonly {
    href?: string;
    alt?: string;
    logo?: CmsMedia | null;
    width?: number;
    height?: number;
  }[];
  scrollingImages?: readonly {
    image?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockCareerOpportunities {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockCareerPerks {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  perks?: readonly {
    title: string;
    iconName: string;
  }[];
}

export interface BlockCareerApply {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
}

export interface BlockServiceHeroVideo {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  titleAccent?: string;
  titleAccentTag?: "i" | "span";
  titleAccentClassName?: string;
  titleAccentPosition?: "start" | "end";
  subtitle?: string;
  description?: string;
  body?: string;
  eyebrow?: string;
  eyebrowSpans?: readonly { text?: string }[];
  paragraphs?: readonly { text?: string }[];
  cta?: string;
  ctaHref?: string;
  secondaryCta?: { label?: string; href?: string };
  video?: string;
  videoPoster?: CmsMedia;
  image?: CmsMedia;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageBlend?: "normal" | "darken";
  imageClassName?: string;
  reviewCount?: string;
  rating?: string;
  platform?: string;
  showReviews?: boolean;
  badges?: readonly {
    name: string;
    logo?: CmsMedia;
    href?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  variant?: "default" | "centered" | "shopify-plus-experts" | "migration";
  wrapperClassName?: string;
}

export interface BlockIndustryBrands {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  eyebrow?: string;
  slug?: string;
  density?: "standard" | "compact" | "flexible" | "default";
  items?: readonly {
    name: string;
    logo?: CmsMedia;
    alt?: string;
    url?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockShopifyPlusProof {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  text?: string;
  stats?: readonly { stat: string }[];
}

export interface BlockPortfolioShowcase {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  category?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  hideCta?: boolean;
  columns?: number;
  variant?: "default" | "liveGrid";
  cardVariant?: "default" | "ourWorkRefresh";
  headerLayout?: "centered" | "split";
  sectionId?: string;
  items?: readonly {
    name: string;
    href?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    category?: string;
  }[];
}

export interface BlockShopifyStageServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  lastColFull?: boolean;
  sixCards?: boolean;
  items?: readonly {
    tag?: string;
    title: string;
    description: string;
    pills?: readonly { text?: string }[];
    cta?: { label?: string; href?: string };
  }[];
}

export interface BlockCaseStudyCards {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaLabel?: string;
  items?: readonly {
    name: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    href: string;
    platform?: string;
    industry?: string;
    ctaLabel?: string;
    description?: string;
    chips?: readonly { tag?: string }[];
  }[];
}

export interface BlockEvaluationFramework {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  sectionId?: string;
  items?: readonly {
    title: string;
    description: string;
  }[];
}

export interface BlockShopifyTeamBoxes {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  cta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  items?: readonly {
    title: string;
    description: string;
  }[];
}

export interface BlockShopifyHorizontalProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  steps?: readonly {
    number?: string;
    title: string;
    description: string;
  }[];
}

export interface BlockVerifiedKnowledge {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockCredentialEvidence {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  note?: string;
  items?: readonly {
    title: string;
    count: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
  }[];
}

export interface BlockCredentialTabs {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  items?: readonly {
    tabId: string;
    label: string;
    eyebrow?: string;
    title: string;
    description: string;
    details?: readonly { label: string; value: string }[];
  }[];
}

export interface BlockCertifiedAgencySupport {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  paragraphs?: readonly { text: string }[];
  items?: readonly {
    title: string;
    description: string;
  }[];
}

export interface BlockCertifiedServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  items?: readonly {
    eyebrow: string;
    title: string;
    description: string;
  }[];
}

export interface BlockPartnerDirectoryProof {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  href: string;
  items?: readonly {
    kind?: "image" | "rating" | "text";
    label: string;
    value?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
  }[];
}

export interface BlockWhiteLabelFinalCta {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  heading?: string;
  description?: string;
  label?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "default" | "certifiedDevelopers" | "shopifyHours";
}

export interface BlockShopifyMigrationServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  idAttr?: string;
  banner?: {
    badge?: string;
    title?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
    href: string;
    ctaText?: string;
  }[];
}

export interface BlockShopifyMigrationNumberedGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  idAttr?: string;
  variant?: "white" | "pista";
  items?: readonly {
    number?: string;
    title: string;
    description: string;
  }[];
}

export interface BlockSeoSafeMigration {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  tags?: readonly { tag: string }[];
  urlMappings?: readonly {
    source: string;
    statusCode?: string;
    target: string;
  }[];
  checks?: readonly { check: string }[];
}

export interface BlockWhyChooseShopifyMigration {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  partnerHeading?: string;
  partnerDescription?: string;
  partnerLogo?: CmsMedia;
  partnerLogoSrc?: string;
  partnerLogoAlt?: string;
  logoHref?: string;
  partnerLink?: { label?: string; href?: string };
  stats?: readonly { value: string; label: string }[];
  items?: readonly {
    icon?: string;
    title?: string;
    description: string;
  }[];
}

export interface BlockThemeCustomizationServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  sectionId?: string;
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  bottomNote?: string;
  variant?: "green" | "yellow" | "transparent";
  boxes?: readonly {
    number?: string;
    iconName?: string;
    title: string;
    badge?: string;
    description: string;
  }[];
}

export interface BlockThemeCustomizationApproach {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  approaches?: readonly {
    badge: string;
    title: string;
    description: string;
    isHighlighted?: boolean;
    points?: readonly { point: string }[];
  }[];
}

export interface BlockShopifyThemesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  subtitle: string;
  idAttr?: string;
  variant?: "white" | "pista";
  items?: readonly {
    name?: string;
    title?: string;
    image?: CmsMedia;
    imageSrc?: string;
    alt?: string;
    href?: string;
    ctaText?: string;
  }[];
}

export interface BlockAiEmpoweredDelivery {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  callout?: string;
  variant?: "default" | "dark-green";
  cta?: { label?: string; href?: string };
  tools?: readonly {
    name: string;
    description: string;
  }[];
}

export interface BlockShopifyCroBarriers {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  items?: readonly {
    title: string;
    icon?: CmsMedia;
    iconSrc?: string;
    alt?: string;
  }[];
}

export interface BlockShopifyCroRevenueImpact {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  beforeBadge?: string;
  beforeMetrics?: readonly {
    label: string;
    value: string;
    icon?: CmsMedia;
    iconSrc?: string;
  }[];
  beforeTotalLabel?: string;
  beforeTotalValue?: string;
  afterBadge?: string;
  afterMetrics?: readonly {
    label: string;
    value: string;
    icon?: CmsMedia;
    iconSrc?: string;
  }[];
  afterTotalLabel?: string;
  afterTotalValue?: string;
  footerText?: string;
  footerHighlight?: string;
  footerSuffix?: string;
}

export interface BlockShopifyCroServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    alt?: string;
    deliverables?: readonly { item: string }[];
  }[];
}

export interface BlockShopifyCroAssessment {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  points?: readonly { text: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockShopifyCroProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  steps?: readonly {
    number: string;
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
  }[];
}

export interface BlockShopifyCroWhy {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  paragraphs?: readonly { text: string }[];
  points?: readonly { text: string }[];
  tagline?: string;
}

export interface BlockShopifyCroEngagement {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    alt?: string;
    features?: readonly { text: string }[];
    ctaLabel?: string;
    ctaHref?: string;
  }[];
}

export interface BlockShopifyMobileAppHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  subtitle: string;
  description?: string;
  eyebrowSpans?: readonly { text?: string }[];
  cta?: string;
  ctaHref?: string;
  secondaryCta?: { label?: string; href?: string };
  badges?: readonly {
    name: string;
    logo?: CmsMedia;
    src?: string;
    alt?: string;
    href?: string;
    width?: number;
    height?: number;
  }[];
  appScreenshots?: readonly {
    name: string;
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  frameImage?: {
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export interface BlockWhiteLabelCounter {
  __component?: string;
  blockType?: string;
  id?: string | number;
  counters?: readonly {
    count: string;
    unit?: string;
    label: string;
  }[];
}

export interface BlockShopifyMobileAppDtc {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  cards?: readonly {
    tag?: string;
    title: string;
    description: string;
    badges?: readonly {
      name?: string;
      src?: string;
      logo?: CmsMedia;
      alt?: string;
      href?: string;
      width?: number;
      height?: number;
    }[];
  }[];
}

export interface BlockShopifyMobileAppWork {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  items?: readonly {
    name: string;
    category?: string;
    image?: CmsMedia;
    src?: string;
    alt?: string;
    href?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
  }[];
}

export interface BlockShopifyMobileAppComparison {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  col1Heading?: string;
  col2Heading?: string;
  rows?: readonly {
    feature: string;
    appBuilder: string;
    customDev: string;
  }[];
}

export interface BlockShopifyMobileAppExperience {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  items?: readonly {
    title: string;
    description: string;
    image?: CmsMedia;
    src?: string;
    alt?: string;
  }[];
}

export interface BlockWhiteLabelProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  note?: string;
  steps?: readonly {
    number?: string;
    title: string;
    description: string;
  }[];
}

export interface BlockAgencyServices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  idAttr?: string;
  columns?: number;
  hideCta?: boolean;
  cardVariant?: "default" | "services-box";
  items?: readonly {
    title: string;
    description: string;
    badge?: string;
    href?: string;
    iconName?: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
    features?: readonly { feature: string }[];
  }[];
}

export interface BlockCityPageCounter {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  counters?: readonly {
    count: string;
    unit?: string;
    label: string;
  }[];
}

export interface BlockShopifyTeamBehindIt {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  hideCtas?: boolean;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: {
    label?: string;
    href?: string;
    variant?: "outline" | "arrowLink";
  };
  items?: readonly {
    title: string;
    description: string;
    iconName?: string;
  }[];
}

export interface BlockCityWhyChooseBoxes {
  __component?: string;
  blockType?: string;
  id?: string | number;
  sectionId?: string;
  eyebrow?: string;
  heading: string;
  description: string;
  columns?: number;
  theme?: "light" | "dark" | "white" | "warm";
  boxes?: readonly {
    subtitle?: string;
    title: string;
    description: string;
    iconName?: string;
    icon?: CmsMedia | null;
    iconAlt?: string;
  }[];
}

export interface BlockShopifyHoursHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  hourlyRate?: string;
  hourlyRateNote?: string;
  trustBadges?: readonly {
    title: string;
    subtitle?: string;
    image?: CmsMedia;
    imageSrc?: string;
  }[];
}

export interface BlockShopifyHoursComparison {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  comparisonItems?: readonly {
    title: string;
    agencyWay: string;
    freelancerWay: string;
  }[];
}

export interface BlockShopifyHoursTasks {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  taskCategories?: readonly {
    category: string;
    tasks?: readonly { task: string }[];
  }[];
}

export interface BlockNumberedProcessTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  headingId?: string;
  layout?: "split" | "centered" | "stacked";
  items?: readonly {
    number?: string;
    title: string;
    description: string;
  }[];
}

export interface BlockShopifyAppsHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
}

export interface BlockShopifyAppsGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  apps?: readonly {
    title: string;
    href: string;
    additionalInfo: string;
    description: string;
    image?: CmsMedia;
    imageSrc?: string;
    alt?: string;
  }[];
}

export interface BlockShopifyAppBenefits {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockShopifyAppFeatures {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  centerImage?: CmsMedia;
  centerImageSrc?: string;
  centerImageAlt?: string;
  leftFeatures?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
  rightFeatures?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockShopifyAppProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  steps?: readonly {
    step?: string;
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockRisksShopifyTopics {
  __component?: string;
  blockType?: string;
  id?: string | number;
  topics?: readonly {
    id?: string;
    number?: string;
    label?: string;
    heading?: string;
    title: string;
    paragraphs?: readonly { text: string }[];
  }[];
}

export interface BlockImageCta {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: CmsMedia;
  backgroundImageSrc?: string;
}

type Phase6BlockBase = {
  __component?: string;
  blockType?: string;
  id?: string | number;
};

type Phase6TextItem = string | { text?: string };

interface BlockCityPageHero extends Phase6BlockBase {
  eyebrows?: readonly Phase6TextItem[];
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  badges?: readonly {
    logo?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    href?: string;
  }[];
  tabletSlider?: {
    bgShape?: CmsMedia;
    bgShapeSrc?: string;
    slides?: readonly {
      image?: CmsMedia;
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    }[];
  };
}

interface BlockShopifySupportScenarios extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    id?: string;
    scenarioId?: string;
    title: string;
    subtitle?: string;
    kicker?: string;
    heading: string;
    description: string;
    features?: readonly Phase6TextItem[];
    meta?: string;
    primaryCta?: { label?: string; href?: string };
    secondaryCta?: { label?: string; href?: string };
  }[];
}

interface BlockDeliveryModelComparison extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  columns?: readonly {
    label: string;
    isWinner?: boolean;
    kicker?: string;
    pill?: string;
  }[];
  rows?: readonly {
    feature: string;
    inHouse: string;
    freelancer: string;
    partner: string;
  }[];
  ctas?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

interface BlockWhiteLabelTools extends Phase6BlockBase {
  eyebrow?: string;
  title: string;
  description: string;
  ariaLabel?: string;
  topRow?: readonly { name: string; logo?: CmsMedia; image?: string }[];
  bottomRow?: readonly { name: string; logo?: CmsMedia; image?: string }[];
}

interface BlockHowAgenciesUse extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards?: readonly {
    tag: string;
    heading: string;
    description: string;
    pill: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
}

interface BlockWhiteLabelWhy extends Phase6BlockBase {
  eyebrow?: string;
  title: string;
  reasons?: readonly { title: string; description: string }[];
}

interface BlockWhiteLabelServices extends Phase6BlockBase {
  eyebrow?: string;
  title: string;
  description?: string;
  idPrefix?: string;
  ctaLabel?: string;
  showCta?: boolean;
  services?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    href?: string;
    linkLabel?: string;
  }[];
}

interface BlockWhiteLabelStats extends Phase6BlockBase {
  variant?: "default" | "minimal";
  stats?: readonly { value: string; label: string }[];
}

interface BlockDesignReasonsAccordion extends Phase6BlockBase {
  title: string;
  description: string;
  items?: readonly { title: string; description: string }[];
}

interface BlockTextBox extends Phase6BlockBase {
  heading: string;
  subheading?: string;
  paragraphs?: readonly Phase6TextItem[];
  listItems?: readonly Phase6TextItem[];
  variant?: "green" | "cream";
}

interface BlockRecentArchitecturePatterns extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    label: string;
    title: string;
    description: string;
    stack: string;
  }[];
}

interface BlockTechnologiesWorkWith extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  categories?: readonly {
    category: string;
    technologies?: readonly Phase6TextItem[];
  }[];
}

interface BlockServicesCaseStudies extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    title: string;
    href: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    technology: string;
    industry: string;
    tags?: readonly Phase6TextItem[];
    ctaLabel?: string;
  }[];
}

interface BlockAiServicesGrid extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    label?: string;
    title: string;
    description: string;
    useCasesHeading?: string;
    useCases?: string;
  }[];
}

interface BlockTechKeyword extends Phase6BlockBase {
  eyebrow?: string;
  heading: string;
  introText?: string;
  highlightedText?: string;
  bodyText?: string;
}

interface BlockPillList extends Phase6BlockBase {
  heading: string;
  description: string;
  items?: readonly Phase6TextItem[];
}

interface BlockShopifyReasons extends Phase6BlockBase {
  heading: string;
  description: string;
  layout?: "grid" | "carousel";
  carouselFullBleed?: boolean;
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

interface BlockShopifyThemeTech extends Phase6BlockBase {
  title: string;
  subtitle?: string;
  bottomDescription?: string;
  columns?: "3" | "5";
  items?: readonly {
    name?: string;
    title?: string;
    icon?: CmsMedia;
    image?: CmsMedia;
    iconSrc?: string;
    alt?: string;
    gradient?: string;
  }[];
}

interface BlockThemeWhyChoose extends Phase6BlockBase {
  title: string;
  subtitle: string;
  backgroundVariant?: "gradient" | "white";
  items?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

interface BlockLetsBuild extends Phase6BlockBase {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface BlockMigrationProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  sectionId?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?: "default" | "cards";
  steps?: readonly {
    stepNumber: string;
    title: string;
    description: string;
    subBoxes?: readonly {
      title?: string;
      description?: string;
      items?: readonly (string | { text?: string })[];
    }[];
    categories?: readonly {
      title: string;
      items?: readonly (string | { text?: string })[];
    }[];
  }[];
}

export type CmsSectionBlock =
  | BlockHero
  | BlockProofCounters
  | BlockFaqAccordion
  | BlockCtaBanner
  | BlockFeaturesGrid
  | BlockProcessTimeline
  | BlockHappyClients
  | BlockCaseStudies
  | BlockBrandPartners
  | BlockPricingModels
  | BlockTechnologiesGrid
  | BlockTwoColImageWithText
  | BlockIndustriesGrid
  | BlockLegalContent
  | BlockSiteMapDirectory
  | BlockShopifyPlusAgency
  | BlockWhiteLabelPartner
  | BlockCommerceSolutions
  | BlockSelectedWork
  | BlockTestimonialsCarousel
  | BlockIntegrationsPartners
  | BlockLatestInsights
  | BlockAboutHero
  | BlockAboutStory
  | BlockAboutTimeline
  | BlockAboutFounders
  | BlockAboutTeam
  | BlockAboutValues
  | BlockLifeHero
  | BlockWorkCulture
  | BlockLifeHiring
  | BlockLifeGallery
  | BlockOurWorkHero
  | BlockOurWorkProjects
  | BlockOurWorkCaseStudies
  | BlockContactHero
  | BlockContactForm
  | BlockForm
  | BlockContactOffices
  | BlockContactDetails
  | BlockDiscoveryCall
  | BlockRequestQuoteHero
  | BlockCareerHero
  | BlockCareerOpportunities
  | BlockCareerPerks
  | BlockCareerApply
  | BlockServiceHeroVideo
  | BlockIndustryBrands
  | BlockShopifyPlusProof
  | BlockPortfolioShowcase
  | BlockShopifyStageServices
  | BlockCaseStudyCards
  | BlockEvaluationFramework
  | BlockShopifyTeamBoxes
  | BlockShopifyHorizontalProcess
  | BlockVerifiedKnowledge
  | BlockCredentialEvidence
  | BlockCredentialTabs
  | BlockCertifiedAgencySupport
  | BlockCertifiedServices
  | BlockPartnerDirectoryProof
  | BlockWhiteLabelFinalCta
  | BlockShopifyMigrationServices
  | BlockShopifyMigrationNumberedGrid
  | BlockSeoSafeMigration
  | BlockWhyChooseShopifyMigration
  | BlockThemeCustomizationServices
  | BlockThemeCustomizationApproach
  | BlockShopifyThemesGrid
  | BlockAiEmpoweredDelivery
  | BlockShopifyCroBarriers
  | BlockShopifyCroRevenueImpact
  | BlockShopifyCroServices
  | BlockShopifyCroAssessment
  | BlockShopifyCroProcess
  | BlockShopifyCroWhy
  | BlockShopifyCroEngagement
  | BlockShopifyMobileAppHero
  | BlockWhiteLabelCounter
  | BlockShopifyMobileAppDtc
  | BlockShopifyMobileAppWork
  | BlockShopifyMobileAppComparison
  | BlockShopifyMobileAppExperience
  | BlockWhiteLabelProcess
  | BlockAgencyServices
  | BlockCityPageCounter
  | BlockShopifyTeamBehindIt
  | BlockCityWhyChooseBoxes
  | BlockShopifyHoursHero
  | BlockShopifyHoursComparison
  | BlockShopifyHoursTasks
  | BlockNumberedProcessTimeline
  | BlockShopifyAppsHero
  | BlockShopifyAppsGrid
  | BlockShopifyAppBenefits
  | BlockShopifyAppFeatures
  | BlockShopifyAppProcess
  | BlockRisksShopifyTopics
  | BlockImageCta
  | BlockMigrationProcess
  | {
      [key: string]: unknown;
      __component?: string;
      blockType?: string;
      id?: string | number;
    };

export interface BlockRendererProps {
  sections?: readonly CmsSectionBlock[] | null;
}

function renderCustomBoxIcon(iconName?: string) {
  if (!iconName) return null;
  const os20Names = [
    "lightning",
    "flexibility",
    "developer-tools",
    "seo-marketing",
    "data-migration",
    "theme-customization",
    "app-integration",
    "seo-redirects",
    "testing-qa",
    "launch-support",
    "expertise",
    "comprehensive",
    "custom-solutions",
    "architecture",
    "apps",
    "performance",
    "templates",
    "checkout",
    "b2b",
    "metafields",
    "editor",
    "audit",
    "planning",
    "code",
    "testing",
    "launch",
    "post-launch",
    "flexible",
    "speed",
    "conversion",
    "scalability",
    "seo",
    "maintenance",
  ];
  if (os20Names.includes(iconName)) {
    return <OnlineStore20Icon name={iconName as any} />;
  }
  const hireNames = [
    "shopify-plus",
    "custom-apps",
    "theme-customization",
    "store-migration",
    "api-integration",
    "performance-cro",
    "dedicated",
    "flexible",
    "transparent",
    "qa",
    "speed",
    "support",
  ];
  if (hireNames.includes(iconName)) {
    return <HireShopifyIcon name={iconName as HireShopifyIconName} />;
  }
  if (iconName === "white-label-advantage") {
    return <WhiteLabelWebsiteDesignAdvantageIcon />;
  }
  if (
    [
      "turnkey-design-production",
      "white-label-discretion",
      "developer-ready-handoff",
      "flexible-bandwidth",
      "conversion-focused-ux",
      "multi-platform-expertise",
    ].includes(iconName)
  ) {
    return <WhiteLabelWebsiteDesignBenefitIcon name={iconName} />;
  }
  if (["performance", "conversion", "future-ready"].includes(iconName)) {
    return <WebflowGrowthIcon name={iconName} />;
  }
  if (
    [
      "theme-customization",
      "app-configuration",
      "private-app",
      "figma-to-bigcommerce",
      "maintenance",
      "ease-of-use",
      "scalable-solutions",
      "seo-friendly",
      "secure-and-reliable",
      "customizable-design",
      "expertise-in-custom-development",
      "focus-on-security",
      "commitment-to-quality",
      "timely-delivery",
      "transparent-communication",
      "ongoing-support-and-maintenance",
    ].includes(iconName)
  ) {
    return <BigCommerceIcon name={iconName} />;
  }
  const magentoNames = [
    "clock-unsupported",
    "reduce-costs",
    "store-performance",
    "easy-to-manage",
    "scalable-growth",
    "enhanced-security",
  ];
  if (magentoNames.includes(iconName)) {
    return <MagentoMigrationIcon name={iconName as any} />;
  }
  const magentoPlusNames = [
    "no-server-management",
    "no-reindexing",
    "no-security-issues",
    "multiple-stores-feature",
    "built-in-b2b-module",
    "best-checkout-experience",
    "ease-of-use",
    "24-7-support",
    "simplified-operations",
    "scalability",
    "advanced-features",
    "cost-efficiency",
    "products-categories",
    "customer-data",
    "orders-transactions",
    "content",
    "seo-settings",
    "audit-plan",
    "custom-design",
    "development",
    "data-migration",
    "testing",
    "launch",
  ];
  if (magentoPlusNames.includes(iconName)) {
    return <MagentoPlusIcon name={iconName as any} />;
  }
  const wooNames = [
    "simplified-store-management",
    "better-scalability",
    "enhanced-security",
    "higher-performance",
    "powerful-app-ecosystem",
    "easier-maintenance",
  ];
  if (wooNames.includes(iconName)) {
    return (
      <WooCommerceMigrationIcon
        name={iconName as any}
      />
    );
  }
  const migrationPlatformNames = [
    "user-friendly-platform",
    "extensive-customization",
    "powerful-app-ecosystem",
    "built-for-scalability",
    "secure-reliable",
    "advanced-ecommerce-features",
    "access-to-shopify-s-app-store",
    "improved-customer-experience",
    "better-marketing-sales-tools",
    "better-sales-marketing-tools",
    "powerful-app-ecosystem-2",
    "better-payment-options",
    "24-7-customer-support",
    "easy-store-management",
    "better-scalability",
    "faster-performance",
    "advanced-customization",
    "secure-reliable-2",
    "better-checkout-experience",
    "encrypted-data-transfer",
    "comprehensive-backup-plans",
    "secure-server-environment",
    "data-integrity-checks",
    "compliance-with-shopify-s-security-standards",
    "better-seo-marketing",
    "greater-control-over-your-store",
    "multiple-sales-channels",
    "seo-and-marketing-tools",
  ];
  if (migrationPlatformNames.includes(iconName)) {
    return (
      <MigrationPlatformIcon name={iconName as any} />
    );
  }
  if (
    [
      "sections",
      "performance",
      "selection",
      "branding",
      "pdp",
      "integrations",
    ].includes(iconName)
  ) {
    return (
      <ShopifyThemeServiceIcon
        name={
          iconName as
            | "sections"
            | "performance"
            | "selection"
            | "branding"
            | "pdp"
            | "integrations"
        }
      />
    );
  }
  return <WordPressCustomizationIcon name={iconName} />;
}

/**
 * Universal Block Renderer for Headless CMS.
 * Dynamically resolves and renders modular CMS section blocks
 * to their corresponding production React components.
 */
export function BlockRenderer({ sections }: BlockRendererProps) {
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((block, index) => {
        const rawType =
          (block as { blockType?: string }).blockType ||
          (block as { __component?: string }).__component ||
          "";
        const normalizedType = rawType.replace(/^sections\./, "");
        const blockKey = `${rawType || "block"}-${block.id || index}`;

        const prevBlock = index > 0 ? sections[index - 1] : null;
        const prevRawType = prevBlock
          ? (prevBlock as { blockType?: string }).blockType ||
            (prevBlock as { __component?: string }).__component ||
            ""
          : "";
        const prevNormalizedType = prevRawType.replace(/^sections\./, "");
        const prevVariant = prevBlock
          ? (prevBlock as { variant?: string; theme?: string }).variant ||
            (prevBlock as { variant?: string; theme?: string }).theme
          : undefined;
        const currentVariant =
          (block as { variant?: string; theme?: string }).variant ||
          (block as { variant?: string; theme?: string }).theme;

        const currentBg = getBlockBackgroundCategory(normalizedType, currentVariant);
        const prevBg = prevBlock
          ? getBlockBackgroundCategory(prevNormalizedType, prevVariant)
          : undefined;

        const isConsecutiveWhite = index > 0 && currentBg === "white" && prevBg === "white";
        const hasTopPadding = !isConsecutiveWhite;

        switch (normalizedType) {
          case "hero": {
            const heroBlock = block as BlockHero;
            if (heroBlock.variant === "home") {
              const proofLogos =
                heroBlock.proofBadges && heroBlock.proofBadges.length > 0
                  ? heroBlock.proofBadges.map((badge) => ({
                      src: resolveMediaUrl(badge.logo),
                      alt: badge.alt || badge.name || "",
                      href: badge.href || "#",
                      width:
                        typeof badge.logo === "object" && badge.logo?.width
                          ? badge.logo.width
                          : 136,
                      height:
                        typeof badge.logo === "object" && badge.logo?.height
                          ? badge.logo.height
                          : 44,
                    }))
                  : undefined;

              return (
                <HomeHeroSection
                  description={heroBlock.description}
                  discoveryCta={heroBlock.ctaLabel}
                  discoveryCtaHref={heroBlock.ctaHref}
                  established={heroBlock.establishedText}
                  key={blockKey}
                  partnerBadge={heroBlock.partnerBadgeText}
                  proofLogos={proofLogos}
                  shopifyWorkCta={heroBlock.secondaryCta?.label}
                  shopifyWorkCtaHref={heroBlock.secondaryCta?.href}
                  title={heroBlock.title}
                />
              );
            }

            const imageUrl = resolveMediaUrl(heroBlock.image);
            const heroImage = imageUrl
              ? {
                  src: imageUrl,
                  alt: resolveMediaAlt(heroBlock.image, heroBlock.title),
                  width:
                    typeof heroBlock.image === "object" &&
                    heroBlock.image?.width
                      ? heroBlock.image.width
                      : 684,
                  height:
                    typeof heroBlock.image === "object" &&
                    heroBlock.image?.height
                      ? heroBlock.image.height
                      : 550,
                }
              : undefined;

            const eyebrows = heroBlock.eyebrows
              ? heroBlock.eyebrows
                  .map((item) =>
                    typeof item === "string" ? item : item?.text || "",
                  )
                  .filter(Boolean)
              : undefined;

            const proofBadges = heroBlock.proofBadges
              ?.filter((b) => Boolean(b.name))
              .map((b) => ({
                name: b.name || "",
                src: resolveMediaUrl(b.logo) || "",
                alt: b.alt || b.name || "",
                href: b.href || "#",
                width: 120,
                height: 44,
              }));

            return (
              <ServiceHeroSection
                content={{
                  title: heroBlock.title,
                  description: heroBlock.description || "",
                  subheading: heroBlock.subheading,
                  ctaLabel: heroBlock.ctaLabel,
                  ctaHref: heroBlock.ctaHref,
                  secondaryCta: heroBlock.secondaryCta?.label
                    ? {
                        label: heroBlock.secondaryCta.label,
                        href: heroBlock.secondaryCta.href || "",
                      }
                    : undefined,
                  eyebrows:
                    eyebrows && eyebrows.length > 0 ? eyebrows : undefined,
                  image: heroImage,
                  badges:
                    proofBadges && proofBadges.length > 0
                      ? proofBadges
                      : undefined,
                }}
                key={blockKey}
                showReviews={heroBlock.showReviews !== false}
                variant={heroBlock.variant || "split"}
              />
            );
          }

          case "proof-counters": {
            const counterBlock = block as BlockProofCounters;
            const countersList = counterBlock.counters ?? [];
            const stats = countersList.map((counter) => {
              const parsedValue =
                typeof counter.value === "number"
                  ? counter.value
                  : parseInt(
                      counter.display
                        ? counter.display.replace(/\D/g, "")
                        : "0",
                      10,
                    ) || 0;

              const derivedSuffix =
                counter.suffix ??
                (counter.display ? counter.display.replace(/^\d+/, "") : "");

              return {
                value: parsedValue,
                suffix: derivedSuffix,
                label: counter.label,
              };
            });

            return (
              <ProofCounterSection
                content={{
                  heading: counterBlock.heading,
                  description: counterBlock.description || "",
                  stats,
                }}
                key={blockKey}
              />
            );
          }

          case "faq-accordion": {
            const faqBlock = block as BlockFaqAccordion;
            const faqsList = faqBlock.faqs ?? [];
            const isHomeFaq =
              block.id === "home-faq" ||
              (!faqBlock.eyebrow &&
                (!faqBlock.heading ||
                  faqBlock.heading === homeSectionCopy.homeFaqTitle));
            const items =
              faqsList.length > 0
                ? faqsList.map((faq, faqIdx) => ({
                    id: faq.id
                      ? `faq-${block.id}-${faq.id}`
                      : `${isHomeFaq ? "home-faq" : `faq-${block.id || index}`}-${faqIdx}`,
                    question: faq.question,
                    answer: faq.answer,
                    secondaryAnswer: faq.secondaryAnswer,
                    listPosition: faq.listPosition,
                    listItems: faq.listItems,
                  }))
                : isHomeFaq
                  ? homeFaqs
                  : [];

            const isMobileAppFaq =
              faqBlock.eyebrow?.includes("SHOPIFY MOBILE APP") ||
              faqBlock.heading?.includes("Shopify Mobile App");

            const isShopifyPlusFaq =
              block.id === "shopify-plus-agency-faq" ||
              faqBlock.heading?.includes("Shopify Plus Agency FAQs") ||
              faqBlock.heading?.includes(
                "Frequently Asked Questions About Shopify Plus",
              );

            const isMigrationFaq =
              block.id === "shopify-migration-faq" ||
              faqBlock.heading?.includes("Shopify Migration FAQs") ||
              faqBlock.heading?.includes("What businesses ask before mov");


            const idPrefix =
              faqBlock.idPrefix ||
              (isHomeFaq
                ? "home-faq"
                : isMobileAppFaq
                  ? "shopify-mobile-app-faq"
                  : isShopifyPlusFaq
                    ? "shopify-plus-agency-faq"
                    : isMigrationFaq
                      ? "shopify-migration-faq"
                      : `faq-${block.id || index}`);

            return (
              <SplitFaqSection
                description={
                  faqBlock.description ||
                  (isHomeFaq ? homeSectionCopy.homeFaqDescription : undefined)
                }
                eyebrow={faqBlock.eyebrow}
                heading={
                  faqBlock.heading ||
                  (isHomeFaq ? homeSectionCopy.homeFaqTitle : undefined)
                }
                idPrefix={idPrefix}
                items={items}
                key={blockKey}
                lazyAccordion
                sectionId={
                  faqBlock.sectionId ||
                  (isMobileAppFaq
                    ? "shopify-mobile-app-faq-section"
                    : undefined)
                }
              />
            );
          }

          case "cta-banner": {
            const ctaBlock = block as BlockCtaBanner;
            return (
              <CtaBannerSection
                ctaHref={
                  ctaBlock.btnUrl ||
                  (ctaBlock as { ctaHref?: string }).ctaHref ||
                  "/contact-us"
                }
                ctaLabel={
                  ctaBlock.btnText ||
                  (ctaBlock as { ctaLabel?: string }).ctaLabel ||
                  "Get In Touch"
                }
                description={ctaBlock.description}
                heading={ctaBlock.heading}
                key={blockKey}
              />
            );
          }

          case "features-grid": {
            const featureBlock = block as BlockFeaturesGrid;
            const featuresList = featureBlock.features ?? [];
            const features = featuresList.map((feature) => ({
              title: feature.title,
              description: feature.description,
              icon: resolveMediaUrl(feature.icon) || undefined,
              iconAlt: resolveMediaAlt(feature.icon, feature.title),
              linkText: feature.linkText,
              linkUrl: feature.linkUrl,
            }));

            return (
              <FeaturesGridSection
                description={featureBlock.description}
                eyebrow={featureBlock.eyebrow}
                features={features}
                heading={featureBlock.heading}
                key={blockKey}
              />
            );
          }

          case "process-timeline": {
            const processBlock = block as BlockProcessTimeline;
            const stepsList = processBlock.steps ?? [];
            const steps = stepsList.map((step, stepIdx) => ({
              step:
                step.step ||
                step.stepNumber ||
                String(stepIdx + 1).padStart(2, "0"),
              title: step.title,
              description: step.description || "",
            }));

            return (
              <OurDevelopmentProcessSection
                columns={
                  (processBlock.columns as 3 | 4) ||
                  (steps.length === 6 ? 3 : undefined)
                }
                content={{
                  heading: processBlock.heading,
                  eyebrow: processBlock.eyebrow,
                  description: processBlock.description || "",
                  steps,
                }}
                key={blockKey}
              />
            );
          }

          case "happy-clients": {
            const clientBlock = block as BlockHappyClients;
            const rawTestimonials =
              clientBlock.items && clientBlock.items.length > 0
                ? clientBlock.items
                : clientBlock.testimonials && clientBlock.testimonials.length > 0
                  ? clientBlock.testimonials
                  : shopifyPlusAgencyTestimonials.items;
            const mappedItems: HappyClientTestimonialItem[] = [];

            for (const testimonial of rawTestimonials) {
              if (!testimonial || typeof testimonial !== "object") continue;
              const t = testimonial as {
                authorName?: string;
                clientName?: string;
                name?: string;
                company?: string;
                quote?: string | readonly string[];
                content?: string | readonly string[];
                videoId?: string;
                videoUrl?: string;
                avatar?: CmsMedia | null;
                portrait?: CmsMedia | null;
                image?: CmsMedia | null;
                logo?: CmsMedia | null;
                companyLogo?: CmsMedia | null;
                logoAlt?: string;
                companyLogoAlt?: string;
                logoWidth?: number;
                logoHeight?: number;
              };

              const name = t.authorName || t.clientName || t.name || "";
              const quote = t.quote || t.content || "";
              const videoId = extractYoutubeId(t.videoId || t.videoUrl || "");
              const avatarMedia = t.avatar || t.portrait || t.image;
              const logoMedia = t.logo || t.companyLogo;

              mappedItems.push({
                name,
                company: t.company || "",
                quote,
                videoId,
                image:
                  resolveMediaUrl(avatarMedia) ||
                  "/assets/testimonials/brandon.webp",
                imageAlt: resolveMediaAlt(
                  avatarMedia,
                  name || "Client testimonial",
                ),
                logo: resolveMediaUrl(logoMedia) || undefined,
                logoAlt:
                  t.logoAlt ||
                  t.companyLogoAlt ||
                  resolveMediaAlt(logoMedia) ||
                  (t.company ? `${t.company} logo` : undefined),
                logoWidth: t.logoWidth,
                logoHeight: t.logoHeight,
              });
            }

            const isShopifyExpertsOrHire =
              clientBlock.heading?.includes("Customers' Testimonials") ||
              clientBlock.eyebrow?.includes("Customers' Testimonials") ||
              clientBlock.description?.includes("Check our client stories");

            const isClientStories = Boolean(
              clientBlock.heading?.includes("5,000+ Ecommerce Brands") ||
              clientBlock.description?.includes("client stories from merchants")
            );

            const sectionElement = (
              <HappyClientSection
                variant={isClientStories ? "client-stories" : undefined}
                description={clientBlock.description || undefined}
                eyebrow={clientBlock.eyebrow}
                hasTopPadding={hasTopPadding}
                heading={clientBlock.heading || undefined}
                items={mappedItems.length > 0 ? mappedItems : undefined}
                key={blockKey}
              />
            );

            if (isShopifyExpertsOrHire) {
              return (
                <div key={blockKey} id="shopify-testimonials">
                  {sectionElement}
                </div>
              );
            }

            return sectionElement;
          }

          case "case-studies-block":
          case "case-studies": {
            const csBlock = block as BlockCaseStudies;
            const rawCaseStudies = csBlock.caseStudies ?? [];
            const mappedCaseStudies: CaseStudyPreviewItem[] = [];

            for (const caseStudy of rawCaseStudies) {
              if (!caseStudy || typeof caseStudy !== "object") continue;
              const cs = caseStudy as {
                title?: string;
                slug?: string;
                thumbnail?: CmsMedia | null;
                heroImage?: CmsMedia | null;
                technology?: string;
                industry?: string;
                tags?: readonly string[];
              };
              if (!cs.slug && !cs.title) continue;
              const media = cs.thumbnail || cs.heroImage;
              mappedCaseStudies.push({
                title: cs.title || "",
                href: `/case-studies/${cs.slug || ""}`,
                image:
                  resolveMediaUrl(media) ||
                  "/assets/case-studies/gnc-india.webp",
                imageAlt: resolveMediaAlt(media, cs.title || ""),
                technology: cs.technology || "",
                industry: cs.industry || "",
                tags: cs.tags || [],
              });
            }

            return (
              <ServicesCaseStudiesSection
                description={csBlock.description}
                eyebrow={csBlock.eyebrow}
                heading={csBlock.heading || sharedUiCopy.portfolioEyebrow}
                items={mappedCaseStudies}
                key={blockKey}
              />
            );
          }

          case "brand-partners": {
            const bpBlock = block as BlockBrandPartners;
            const rawLogos = bpBlock.logos ?? [];
            const mappedLogos: {
              src: string;
              alt: string;
              width: number;
              height: number;
            }[] = [];

            for (const item of rawLogos) {
              if (!item || typeof item !== "object") continue;
              const name = item.name || "Brand Partner";
              mappedLogos.push({
                src:
                  resolveMediaUrl(item.logo) ||
                  "/assets/brand/dynamic-dreamz-logo.svg",
                alt: resolveMediaAlt(item.logo, name),
                width:
                  typeof item.logo === "object" && item.logo?.width
                    ? item.logo.width
                    : 160,
                height:
                  typeof item.logo === "object" && item.logo?.height
                    ? item.logo.height
                    : 60,
              });
            }

            if (bpBlock.variant === "slider") {
              return (
                <IndustryBrandsSection
                  content={{ slug: "our-work" }}
                  density="compact"
                  heading={bpBlock.heading}
                  items={mappedLogos.length > 0 ? mappedLogos : undefined}
                  key={blockKey}
                  mobileSpacing="standard"
                />
              );
            }

            const isShopifyHours =
              (bpBlock.variant as string) === "shopifyHours" ||
              bpBlock.description?.includes(
                "support across design, development",
              );

            return (
              <BrandPartnersSection
                description={bpBlock.description}
                heading={bpBlock.heading}
                items={mappedLogos.length > 0 ? mappedLogos : undefined}
                mobileRows={
                  isShopifyHours ? shopifyHoursMobileLogoRows : undefined
                }
                variant={isShopifyHours ? "shopifyHours" : "home"}
                key={blockKey}
              />
            );
          }

          case "pricing-models": {
            const pmBlock = block as BlockPricingModels;
            const items = (pmBlock.models ?? []).map((m) => ({
              label: m.label,
              badge: m.badge || "",
              price: m.price,
              description: m.description || "",
              bullets: m.bullets
                ?.map((b) => (typeof b === "string" ? b : b?.text || ""))
                .filter(Boolean),
              ctaLabel: m.ctaLabel,
              ctaHref: m.ctaHref,
            }));

            return (
              <PricingTableSection
                content={{
                  eyebrow: pmBlock.eyebrow,
                  heading: pmBlock.heading,
                  description: pmBlock.description,
                  items,
                }}
                key={blockKey}
              />
            );
          }

          case "technologies-grid": {
            const techBlock = block as BlockTechnologiesGrid;
            const categories = (techBlock.categories ?? []).map((cat) => ({
              category: cat.category,
              technologies: (cat.technologies ?? [])
                .map((t) => (typeof t === "string" ? t : t?.name || ""))
                .filter(Boolean),
            }));

            return (
              <TechnologiesWorkWithSection
                content={{
                  eyebrow: techBlock.eyebrow,
                  heading: techBlock.heading,
                  description: techBlock.description,
                  categories,
                }}
                key={blockKey}
              />
            );
          }

          case "image-with-text": {
            const iwtBlock = block as BlockTwoColImageWithText;
            const imageUrl = resolveMediaUrl(iwtBlock.image);
            const bullets = iwtBlock.bullets
              ? iwtBlock.bullets
                  .map((b) => (typeof b === "string" ? b : b?.text || ""))
                  .filter(Boolean)
              : undefined;

            return (
              <TwoColImageWithTextSection
                bullets={bullets && bullets.length > 0 ? bullets : undefined}
                cta={
                  iwtBlock.ctaLabel && iwtBlock.ctaHref
                    ? { label: iwtBlock.ctaLabel, href: iwtBlock.ctaHref }
                    : undefined
                }
                description={iwtBlock.description}
                heading={iwtBlock.heading}
                image={{
                  src: imageUrl || "/assets/og/homepage.png",
                  alt: resolveMediaAlt(iwtBlock.image, iwtBlock.heading),
                  width:
                    typeof iwtBlock.image === "object" && iwtBlock.image?.width
                      ? iwtBlock.image.width
                      : 500,
                  height:
                    typeof iwtBlock.image === "object" && iwtBlock.image?.height
                      ? iwtBlock.image.height
                      : 400,
                }}
                imagePosition={iwtBlock.imagePosition || "left"}
                key={blockKey}
              />
            );
          }

          case "industries-grid": {
            const indBlock = block as BlockIndustriesGrid;
            const items = (indBlock.industries ?? []).map((ind) => ({
              title: ind.title,
              eyebrow: ind.eyebrow,
              description: ind.description || "",
              image:
                resolveMediaUrl(ind.image) ||
                ind.imageSrc ||
                shopifyPlusAgencyIndustries.items.find((x) => x.href === ind.href)?.image ||
                "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
              imageAlt: ind.imageAlt || resolveMediaAlt(ind.image, ind.title),
              href: ind.href,
            }));

            return (
              <IndustriesServedSection
                content={{
                  eyebrow: indBlock.eyebrow,
                  heading: indBlock.heading,
                  description: indBlock.description,
                  items,
                }}
                key={blockKey}
                variant={indBlock.variant || "grid"}
              />
            );
          }

          case "legal-content": {
            const legalBlock = block as BlockLegalContent;
            const isPrivacy =
              legalBlock.heading.toLowerCase().includes("privacy") ||
              Boolean(legalBlock.contactInfo?.phone) ||
              Boolean(legalBlock.contactInfo?.address);

            if (isPrivacy) {
              const privacyProps: PrivacyPolicyContentProps = {
                heroTitle: legalBlock.heading,
                sections: legalBlock.sections?.map((s) => ({
                  title: s.title,
                  level: s.level === "3" ? 3 : 2,
                  paragraphs: s.paragraphs?.map((p) => p.text),
                  items: s.items?.map((i) => {
                    if (i.boldPrefix) {
                      return [
                        { text: i.boldPrefix, strong: true },
                        {
                          text: i.text.startsWith(" ") ? i.text : ` ${i.text}`,
                        },
                      ];
                    }
                    return [{ text: i.text }];
                  }),
                })),
                contact: legalBlock.contactInfo
                  ? {
                      name: legalBlock.contactInfo.name,
                      email: legalBlock.contactInfo.email,
                      phone: legalBlock.contactInfo.phone,
                      phoneHref: legalBlock.contactInfo.phoneHref,
                      address: legalBlock.contactInfo.address,
                      addressHref: legalBlock.contactInfo.addressHref,
                    }
                  : undefined,
              };

              return (
                <PrivacyPolicyPage content={privacyProps} key={blockKey} />
              );
            }

            const termsProps: TermsOfServiceContentProps = {
              heroTitle: legalBlock.heading,
              intro: legalBlock.intro,
              sections: legalBlock.sections?.map((s) => ({
                title: s.title,
                paragraphs: s.paragraphs?.map((p) => p.text),
                items: s.items?.map((i) => i.text),
                closingParagraphs: s.closingParagraphs?.map((cp) => cp.text),
              })),
              contactEmail: legalBlock.contactInfo?.email,
            };

            return <TermsOfServicePage content={termsProps} key={blockKey} />;
          }

          case "sitemap-directory": {
            const smapBlock = block as BlockSiteMapDirectory;
            const localLinksByLabel = new Map(
              siteMapLinks.map((item) => [item.label, item]),
            );
            const customLinks: SiteMapLinkItem[] | undefined = smapBlock.groups
              ? smapBlock.groups.flatMap((g) =>
                  (g.links ?? []).map((l) => {
                    const localMatch = localLinksByLabel.get(l.label);
                    return {
                      label: l.label,
                      href: l.href,
                      children: localMatch?.children,
                    };
                  }),
                )
              : undefined;

            return (
              <SiteMapPage
                key={blockKey}
                links={
                  customLinks && customLinks.length > 0
                    ? customLinks
                    : undefined
                }
              />
            );
          }

          case "shopify-plus-agency-overview": {
            const spaBlock = block as BlockShopifyPlusAgency;
            return (
              <ShopifyPlusAgencySection
                content={{
                  eyebrow: spaBlock.eyebrow,
                  title: spaBlock.title,
                  intro: spaBlock.intro,
                  paragraphs: spaBlock.paragraphs
                    ?.map((p) => p.text)
                    .filter(Boolean),
                  counters: spaBlock.counters?.map((c) => ({
                    value: c.value,
                    label: c.label,
                    note: c.note,
                    tone: c.tone,
                  })),
                  videoSrc: spaBlock.videoSrc,
                }}
                key={blockKey}
              />
            );
          }

          case "white-label-partner-banner": {
            const wlpBlock = block as BlockWhiteLabelPartner;
            return (
              <WhiteLabelPartnerSection
                content={{
                  eyebrow: wlpBlock.eyebrow,
                  title: wlpBlock.title,
                  description: wlpBlock.description,
                  bullets: wlpBlock.bullets?.map((b) => b.text).filter(Boolean),
                  ctaLabel: wlpBlock.ctaLabel,
                  ctaHref: wlpBlock.ctaHref,
                }}
                key={blockKey}
              />
            );
          }

          case "commerce-solutions": {
            const csBlock = block as BlockCommerceSolutions;
            const solutions = csBlock.solutions?.map((s) => ({
              title: s.title,
              summary: s.summary,
              body: s.body,
              href: s.href || "#",
              cta: s.cta || "LEARN MORE",
            }));

            return (
              <CommerceSolutionsSection
                description={csBlock.description}
                key={blockKey}
                solutions={
                  solutions && solutions.length > 0 ? solutions : undefined
                }
                title={csBlock.title}
              />
            );
          }

          case "selected-work-marquee": {
            const swBlock = block as BlockSelectedWork;
            return (
              <SelectedWorkSection
                ctaHref={swBlock.ctaHref}
                ctaLabel={swBlock.ctaLabel}
                description={swBlock.description}
                key={blockKey}
                title={swBlock.title}
              />
            );
          }

          case "testimonials-carousel": {
            const tcBlock = block as BlockTestimonialsCarousel;
            return (
              <TestimonialsSection
                description={tcBlock.description}
                eyebrow={tcBlock.eyebrow}
                key={blockKey}
                title={tcBlock.title}
              />
            );
          }

          case "integrations-partners": {
            const ipBlock = block as BlockIntegrationsPartners;
            return <IntegrationsSection key={blockKey} title={ipBlock.title} />;
          }

          case "latest-insights": {
            const liBlock = block as BlockLatestInsights;
            return (
              <InsightsSection
                ctaHref={liBlock.ctaHref}
                ctaLabel={liBlock.ctaLabel}
                key={blockKey}
                title={liBlock.title}
              />
            );
          }

          case "about-hero": {
            const ahBlock = block as BlockAboutHero;
            return (
              <AboutHeroSection
                deliveryTitle={ahBlock.deliveryTitle}
                description={ahBlock.description}
                key={blockKey}
                statistics={ahBlock.statistics}
                title={ahBlock.title}
              />
            );
          }

          case "about-story": {
            const asBlock = block as BlockAboutStory;
            const posterUrl = resolveMediaUrl(asBlock.poster);
            const overlayUrl = resolveMediaUrl(asBlock.overlay);
            return (
              <AboutStorySection
                caption={asBlock.caption}
                description={asBlock.description}
                key={blockKey}
                overlay={overlayUrl || undefined}
                poster={posterUrl || undefined}
                posterAlt={asBlock.posterAlt || undefined}
                title={asBlock.title}
                videoId={asBlock.videoId}
                videoTitle={asBlock.videoTitle}
              />
            );
          }

          case "about-timeline": {
            const atBlock = block as BlockAboutTimeline;
            const customMilestones = atBlock.milestones?.map((m) => ({
              year: m.year || "",
              description: m.description || "",
              image:
                resolveMediaUrl(m.image) ||
                "/assets/about/timeline/established-2006.webp",
              alt: m.alt || "",
              width: m.width || 312,
              height: m.height || 232,
            }));

            return (
              <AboutTimelineSection
                description={atBlock.description}
                key={blockKey}
                milestones={customMilestones}
                title={atBlock.title}
              />
            );
          }

          case "about-founders": {
            const afBlock = block as BlockAboutFounders;
            const customFounders = afBlock.founders?.map((f) => ({
              name: f.name,
              role: f.role,
              biography: f.biography,
              image:
                resolveMediaUrl(f.image) || "/assets/about/team/virag-shah.jpg",
              alt: f.alt || f.name,
              linkedIn: f.linkedIn,
            }));

            return (
              <AboutFoundersSection
                descriptions={afBlock.descriptions
                  ?.map((d) => d.text)
                  .filter(Boolean)}
                eyebrow={afBlock.eyebrow}
                founders={customFounders}
                key={blockKey}
                title={afBlock.title}
              />
            );
          }

          case "about-team": {
            const atmBlock = block as BlockAboutTeam;
            const customKeyManagers = atmBlock.keyManagers?.map((m) => ({
              name: m.name,
              role: m.role,
              image:
                resolveMediaUrl(m.image) ||
                "/assets/about/team/tejal-parekh.jpg",
              alt: m.alt || m.name,
            }));
            const customDeptLeaders = atmBlock.departmentLeaders?.map((l) => ({
              name: l.name,
              role: l.role,
              image:
                resolveMediaUrl(l.image) ||
                "/assets/about/team/mukesh-patel.jpg",
              alt: l.alt || l.name,
            }));

            return (
              <AboutTeamSection
                departmentLeaders={customDeptLeaders}
                key={blockKey}
                keyManagers={customKeyManagers}
              />
            );
          }

          case "about-values": {
            const avBlock = block as BlockAboutValues;
            return (
              <AboutValuesSection
                description={avBlock.description}
                key={blockKey}
                title={avBlock.title}
                values={avBlock.values}
              />
            );
          }

          case "life-hero": {
            const lhBlock = block as BlockLifeHero;
            const imageUrl = resolveMediaUrl(lhBlock.image);
            return (
              <LifeHeroSection
                description={lhBlock.description}
                image={imageUrl}
                imageAlt={lhBlock.imageAlt}
                key={blockKey}
                lead={lhBlock.lead}
                teamwork={lhBlock.teamwork}
                titleAfterTeamwork={lhBlock.titleAfterTeamwork}
                titleBeforeTeamwork={lhBlock.titleBeforeTeamwork}
              />
            );
          }

          case "work-culture": {
            const wcBlock = block as BlockWorkCulture;
            const customValues = wcBlock.values?.map((v) => ({
              title: v.title,
              description: v.description,
              icon: resolveMediaUrl(v.icon),
              alt: v.alt,
            }));
            return (
              <WorkCultureSection
                description={wcBlock.description}
                key={blockKey}
                title={wcBlock.title}
                values={customValues}
              />
            );
          }

          case "life-hiring": {
            const lhBlock = block as BlockLifeHiring;
            const imageUrl = resolveMediaUrl(lhBlock.image);
            return (
              <LifeHiringSection
                cta={lhBlock.cta}
                description={lhBlock.description}
                href={lhBlock.href}
                image={imageUrl}
                imageAlt={lhBlock.imageAlt}
                key={blockKey}
                title={lhBlock.title}
              />
            );
          }

          case "life-gallery": {
            const lgBlock = block as BlockLifeGallery;
            const customImages = lgBlock.images?.map((img) => ({
              src: resolveMediaUrl(img.image),
              alt: img.alt || "",
              width: 334,
              height: 406,
            }));
            return <LifeGallerySection images={customImages} key={blockKey} />;
          }

          case "our-work-hero": {
            const owhBlock = block as BlockOurWorkHero;
            const customShowcaseImages =
              owhBlock.showcaseImages && owhBlock.showcaseImages.length > 0
                ? owhBlock.showcaseImages.map((img) => ({
                    src: resolveMediaUrl(img.image),
                    alt: img.alt || "",
                    width:
                      typeof img.image === "object" && img.image?.width
                        ? img.image.width
                        : img.width,
                    height:
                      typeof img.image === "object" && img.image?.height
                        ? img.image.height
                        : img.height,
                  }))
                : undefined;

            return (
              <OurWorkHeroSection
                content={{
                  eyebrow: owhBlock.eyebrow || "",
                  title: owhBlock.title || "",
                  description: owhBlock.description || "",
                  primaryCta: owhBlock.primaryCta
                    ? {
                        label: owhBlock.primaryCta.label || "",
                        href: owhBlock.primaryCta.href || "",
                      }
                    : undefined,
                  secondaryCta: owhBlock.secondaryCta
                    ? {
                        label: owhBlock.secondaryCta.label || "",
                        href: owhBlock.secondaryCta.href || "",
                      }
                    : undefined,
                }}
                fullBleedShowcaseAtTablet
                key={blockKey}
                layout="caseStudiesLive"
                showcaseImages={customShowcaseImages}
                typography="liveMontserrat"
              />
            );
          }

          case "our-work-projects": {
            const owpBlock = block as BlockOurWorkProjects;
            return (
              <OurWorkProjectsSection
                description={owpBlock.description}
                eyebrow={owpBlock.eyebrow}
                key={blockKey}
                title={owpBlock.title}
              />
            );
          }

          case "our-work-case-studies": {
            const owcsBlock = block as BlockOurWorkCaseStudies;
            return (
              <OurWorkCaseStudiesSection
                description={owcsBlock.description}
                eyebrow={owcsBlock.eyebrow}
                key={blockKey}
                title={owcsBlock.title}
              />
            );
          }

          case "contact-hero": {
            const chBlock = block as BlockContactHero;
            return (
              <ContactHeroSection
                description={chBlock.description}
                eyebrow={chBlock.eyebrow}
                key={blockKey}
                quickLinks={chBlock.quickLinks}
                title={chBlock.title}
              />
            );
          }

          case "contact-form": {
            const cfBlock = block as BlockContactForm;
            return (
              <ContactFormSection
                description={cfBlock.description}
                eyebrow={cfBlock.eyebrow}
                form={cfBlock.form}
                key={blockKey}
                title={cfBlock.title}
              />
            );
          }

          case "form-block":
          case "form": {
            const fbBlock = block as BlockForm;
            return (
              <FormBlock
                containerWidth={fbBlock.containerWidth}
                description={fbBlock.description}
                enableIntro={fbBlock.enableIntro}
                eyebrow={fbBlock.eyebrow}
                form={fbBlock.form}
                introContent={fbBlock.introContent}
                key={blockKey}
                title={fbBlock.title}
              />
            );
          }

          case "contact-offices": {
            const coBlock = block as BlockContactOffices;
            return (
              <ContactOfficesSection
                description={coBlock.description}
                directionsLabel={coBlock.directionsLabel}
                eyebrow={coBlock.eyebrow}
                key={blockKey}
                offices={coBlock.offices}
                title={coBlock.title}
              />
            );
          }

          case "contact-details": {
            const cdBlock = block as BlockContactDetails;
            return (
              <ContactDetailsSection
                eyebrow={cdBlock.eyebrow}
                key={blockKey}
                title={cdBlock.title}
              />
            );
          }

          case "discovery-call": {
            const dcBlock = block as BlockDiscoveryCall;
            const hostImage =
              resolveMediaUrl(dcBlock.host?.image) ||
              bookDiscoveryCallContent.host.image;
            const callContent: BookDiscoveryCallContent = {
              eyebrow: dcBlock.eyebrow || bookDiscoveryCallContent.eyebrow,
              title: dcBlock.title || bookDiscoveryCallContent.title,
              description:
                dcBlock.description || bookDiscoveryCallContent.description,
              host: {
                name: dcBlock.host?.name || bookDiscoveryCallContent.host.name,
                role: dcBlock.host?.role || bookDiscoveryCallContent.host.role,
                image: hostImage,
                imageAlt:
                  dcBlock.host?.imageAlt ||
                  dcBlock.host?.name ||
                  bookDiscoveryCallContent.host.imageAlt,
              },
              benefits:
                dcBlock.benefits && dcBlock.benefits.length > 0
                  ? dcBlock.benefits.map((b) => ({
                      icon: b.icon || "✓",
                      title: b.title,
                      description: b.description,
                    }))
                  : bookDiscoveryCallContent.benefits,
              calendar: {
                heading:
                  dcBlock.calendar?.heading ||
                  bookDiscoveryCallContent.calendar.heading,
                details:
                  dcBlock.calendar?.details ||
                  bookDiscoveryCallContent.calendar.details,
                src:
                  dcBlock.calendar?.src ||
                  bookDiscoveryCallContent.calendar.src,
                iframeTitle:
                  dcBlock.calendar?.iframeTitle ||
                  bookDiscoveryCallContent.calendar.iframeTitle,
              },
            };

            return (
              <BookDiscoveryCallPage content={callContent} key={blockKey} />
            );
          }

          case "request-quote-hero": {
            const rqBlock = block as BlockRequestQuoteHero;
            const customBadges =
              rqBlock.badges && rqBlock.badges.length > 0
                ? rqBlock.badges.map((b) => ({
                    href: b.href || "#",
                    ariaLabel: b.ariaLabel,
                    image: resolveMediaUrl(b.logo),
                    alt: b.alt || "",
                    width:
                      typeof b.logo === "object" && b.logo?.width
                        ? b.logo.width
                        : b.width,
                    height:
                      typeof b.logo === "object" && b.logo?.height
                        ? b.logo.height
                        : b.height,
                  }))
                : undefined;

            const customTestimonials =
              rqBlock.testimonials && rqBlock.testimonials.length > 0
                ? rqBlock.testimonials.map((t) => ({
                    name: t.name,
                    quote: t.quote,
                    avatar: resolveMediaUrl(t.avatar),
                  }))
                : undefined;

            const hero =
              rqBlock.heroTitle || rqBlock.heroDescription
                ? {
                    title: rqBlock.heroTitle || "",
                    description: rqBlock.heroDescription || "",
                  }
                : undefined;

            const counters =
              rqBlock.counters && rqBlock.counters.length > 0
                ? rqBlock.counters.map((c) => ({
                    label: c.label,
                    count: c.count,
                    unit: c.unit,
                  }))
                : undefined;

            const budgetOptions =
              rqBlock.budgetOptions && rqBlock.budgetOptions.length > 0
                ? rqBlock.budgetOptions.map((b) => b.option)
                : undefined;

            return (
              <RequestQuotePage
                badges={customBadges}
                budgetOptions={budgetOptions}
                counters={counters}
                hero={hero}
                key={blockKey}
                testimonials={customTestimonials}
              />
            );
          }

          case "career-hero": {
            const carhBlock = block as BlockCareerHero;
            const customBadges =
              carhBlock.badges && carhBlock.badges.length > 0
                ? carhBlock.badges.map((b) => ({
                    href: b.href || "#",
                    alt: b.alt || "",
                    src: resolveMediaUrl(b.logo),
                    width:
                      typeof b.logo === "object" && b.logo?.width
                        ? b.logo.width
                        : b.width,
                    height:
                      typeof b.logo === "object" && b.logo?.height
                        ? b.logo.height
                        : b.height,
                  }))
                : undefined;

            const customScrollingImages =
              carhBlock.scrollingImages && carhBlock.scrollingImages.length > 0
                ? carhBlock.scrollingImages.map((img) => ({
                    src: resolveMediaUrl(img.image),
                    alt: img.alt || "",
                    width:
                      typeof img.image === "object" && img.image?.width
                        ? img.image.width
                        : img.width,
                    height:
                      typeof img.image === "object" && img.image?.height
                        ? img.image.height
                        : img.height,
                  }))
                : undefined;

            return (
              <CareerHeroSection
                badges={customBadges}
                description={carhBlock.description}
                eyebrow={carhBlock.eyebrow}
                key={blockKey}
                scrollingImages={customScrollingImages}
                title={carhBlock.title}
              />
            );
          }

          case "career-opportunities": {
            const caroBlock = block as BlockCareerOpportunities;
            return (
              <CareerOpportunitiesSection
                description={caroBlock.description}
                eyebrow={caroBlock.eyebrow}
                key={blockKey}
                title={caroBlock.title}
              />
            );
          }

          case "career-perks": {
            const carpBlock = block as BlockCareerPerks;
            const boxes =
              carpBlock.perks && carpBlock.perks.length > 0
                ? carpBlock.perks.map((box) => ({
                    title: box.title,
                    icon: <CareerBenefitIcon name={box.iconName} />,
                  }))
                : workplaceBenefits.boxes.map((box) => ({
                    title: box.title,
                    icon: <CareerBenefitIcon name={box.iconName} />,
                  }));

            return (
              <ThemeCustomizationServicesSection
                content={{
                  eyebrow: carpBlock.eyebrow || workplaceBenefits.eyebrow,
                  heading: carpBlock.heading || workplaceBenefits.heading,
                  description:
                    carpBlock.description || workplaceBenefits.description,
                  boxes,
                }}
                id="workplace-benefits"
                key={blockKey}
                variant="yellow"
              />
            );
          }

          case "career-apply": {
            const caBlock = block as BlockCareerApply;
            return (
              <CareerApplyNowPage
                emailAddress={caBlock.emailAddress}
                emailHref={caBlock.emailHref}
                emailLabel={caBlock.emailLabel}
                heading={caBlock.heading}
                key={blockKey}
                note={caBlock.note}
                phoneHref={caBlock.phoneHref}
                phoneLabel={caBlock.phoneLabel}
                phoneNumber={caBlock.phoneNumber}
              />
            );
          }

          case "service-hero-video": {
            const shvBlock = block as BlockServiceHeroVideo;
            const paragraphs = shvBlock.paragraphs
              ?.map((p) => p.text || "")
              .filter(Boolean);

            if (shvBlock.variant === "centered") {
              const isAppmaker =
                shvBlock.wrapperClassName?.includes("appmaker") ||
                shvBlock.wrapperClassName?.includes("full-width-sec") ||
                shvBlock.title?.includes("App in Minutes");
              const isRisks =
                shvBlock.wrapperClassName?.includes("max-w-[830px]") ||
                shvBlock.title?.includes("Risks Of Shopify Outsourcing");
              return (
                <ServiceHeroSection
                  key={blockKey}
                  variant="centered"
                  showReviews={shvBlock.showReviews ?? false}
                  content={{
                    title: shvBlock.title,
                    description: shvBlock.description || "",
                    paragraphs:
                      paragraphs && paragraphs.length > 0
                        ? paragraphs
                        : undefined,
                    eyebrows: shvBlock.eyebrow ? [shvBlock.eyebrow] : undefined,
                    ctaLabel: shvBlock.cta,
                    ctaHref: shvBlock.ctaHref,
                    maxWidthClassName: isRisks ? "max-w-[830px]" : undefined,
                    coBranding: isAppmaker ? appmakerHeroCoBranding : undefined,
                  }}
                />
              );
            }

            const badges = shvBlock.badges?.map((b) => ({
              name: b.name,
              src: resolveMediaUrl(b.logo),
              alt: b.alt || b.name,
              href: b.href || "#",
              width: b.width || 120,
              height: b.height || 44,
            }));

            const isShopifyPlusExperts =
              shvBlock.variant === "shopify-plus-experts" ||
              shvBlock.wrapperClassName?.includes("shopify-plus-experts");

            if (isShopifyPlusExperts) {
              return (
                <ServiceHeroSection
                  key={blockKey}
                  content={{
                    title: shvBlock.title,
                    subheading: shvBlock.subtitle,
                    description: shvBlock.description,
                    ctaLabel: shvBlock.cta,
                    ctaHref: shvBlock.ctaHref,
                    secondaryCta: shvBlock.secondaryCta?.label
                      ? {
                          label: shvBlock.secondaryCta.label,
                          href: shvBlock.secondaryCta.href || "",
                        }
                      : undefined,
                    eyebrows: shvBlock.eyebrowSpans
                      ?.map((e) => e.text || "")
                      .filter(Boolean),
                    videoSrc:
                      shvBlock.video || "/assets/home/why-dynamic-dreamz.mp4",
                    videoLogo: {
                      src: "/assets/platforms/shopify-plus-white.svg",
                      alt: "Shopify Plus",
                      width: 143,
                      height: 30,
                    },
                    badges,
                  }}
                  videoLogoClassName="left-[-90px]"
                />
              );
            }

            const wrapperClass =
              shvBlock.variant === "migration"
                ? "hero-shopify-migration"
                : shvBlock.wrapperClassName;

            const imageClass =
              shvBlock.imageBlend === "darken"
                ? "mix-blend-darken"
                : shvBlock.imageClassName;

            return (
              <ServiceHeroVideoSection
                key={blockKey}
                titleAccentTag={shvBlock.titleAccentTag}
                titleAccentClassName={shvBlock.titleAccentClassName}
                titleAccentPosition={shvBlock.titleAccentPosition}
                content={{
                  title: shvBlock.title,
                  titleAccent: shvBlock.titleAccent,
                  subtitle: shvBlock.subtitle,
                  description: shvBlock.description,
                  paragraphs:
                    paragraphs && paragraphs.length > 0
                      ? paragraphs
                      : undefined,
                  body: shvBlock.body,
                  cta: shvBlock.cta,
                  ctaHref: shvBlock.ctaHref,
                  secondaryCta: shvBlock.secondaryCta?.label
                    ? {
                        label: shvBlock.secondaryCta.label,
                        href: shvBlock.secondaryCta.href || "",
                      }
                    : undefined,
                  video: shvBlock.video || undefined,
                  videoPoster: resolveMediaUrl(shvBlock.videoPoster),
                  image: resolveMediaUrl(shvBlock.image)
                    ? {
                        src: resolveMediaUrl(shvBlock.image),
                        alt:
                          shvBlock.imageAlt ||
                          resolveMediaAlt(shvBlock.image, shvBlock.title),
                        width: shvBlock.imageWidth,
                        height: shvBlock.imageHeight,
                        className: imageClass,
                      }
                    : undefined,
                  badges,
                  eyebrowSpans: shvBlock.eyebrowSpans
                    ?.map((e) => e.text || "")
                    .filter(Boolean),
                }}
                wrapperClassName={wrapperClass}
              />
            );
          }

          case "industry-brands": {
            const ibBlock = block as BlockIndustryBrands;
            const rawItems =
              ibBlock.items && ibBlock.items.length > 0 ? ibBlock.items : null;
            const items = rawItems
              ? rawItems.map((item) => ({
                  name: item.name,
                  src: resolveMediaUrl(item.logo) || (item as { src?: string }).src || "",
                  alt: item.alt || item.name,
                  url: item.url,
                  href: item.url || (item as { href?: string }).href,
                  width: item.width || 120,
                  height: item.height || 40,
                }))
              : industryBrandLogos.map((l) => ({
                  name: l.alt,
                  src: l.src,
                  alt: l.alt,
                  url: l.href,
                  href: l.href,
                  width: l.width,
                  height: l.height,
                }));

            return (
              <IndustryBrandsSection
                content={{
                  slug: ibBlock.slug || "industry-brands",
                }}
                density={
                  ibBlock.density === "compact" ||
                  ibBlock.density === "flexible"
                    ? ibBlock.density
                    : "standard"
                }
                heading={ibBlock.heading}
                items={items}
                key={blockKey}
              />
            );
          }

          case "shopify-plus-proof": {
            const sppBlock = block as BlockShopifyPlusProof;
            return (
              <ShopifyPlusProofSection
                key={blockKey}
                content={{
                  eyebrow: sppBlock.eyebrow || "",
                  heading: sppBlock.heading,
                  intro: sppBlock.intro || "",
                  text: sppBlock.text || "",
                  stats: (sppBlock.stats ?? []).map((s) => s.stat),
                }}
              />
            );
          }

          case "portfolio-showcase": {
            const psBlock = block as BlockPortfolioShowcase;
            const items = (psBlock.items ?? []).map((item) => ({
              name: item.name,
              href: item.href,
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              imageAlt: item.imageAlt || item.name,
              category: item.category,
            }));

            const isLiveGrid =
              psBlock.variant === "liveGrid" ||
              psBlock.heading?.includes("Portfolio of Shopify Migration") ||
              psBlock.heading?.includes("Selected Shopify Experience");

            const cardVariant =
              psBlock.cardVariant ||
              (psBlock.heading?.includes("Work of our Shopify Developers") ||
              psBlock.heading?.includes("Selected Shopify Stores We Hav") ||
              psBlock.heading?.includes("Selected Shopify Experience")
                ? "ourWorkRefresh"
                : "default");

            return (
              <PortfolioShowcaseSection
                className={isConsecutiveWhite ? "pt-0 max-[991px]:pt-0" : undefined}
                cardVariant={cardVariant}
                columns={(psBlock.columns as 2 | 3 | 4) || 4}
                content={{
                  heading: psBlock.heading,
                  description: psBlock.description,
                  eyebrow: psBlock.eyebrow,
                  category: psBlock.category,
                  platformMark:
                    psBlock.category === "SHOPIFY PLUS"
                      ? {
                          src: "/assets/platforms/shopify-plus-white.svg",
                          width: 113,
                          height: 27,
                        }
                      : undefined,
                  ctaLabel: psBlock.ctaLabel,
                  ctaHref: psBlock.ctaHref,
                  secondaryCtaLabel: psBlock.secondaryCtaLabel,
                  secondaryCtaHref: psBlock.secondaryCtaHref,
                  items,
                }}
                headerLayout={psBlock.headerLayout || "split"}
                hideCta={psBlock.hideCta}
                key={blockKey}
                sectionId={psBlock.sectionId || "our_work"}
                variant={isLiveGrid ? "liveGrid" : psBlock.variant || "default"}
              />
            );
          }

          case "shopify-stage-services": {
            const sssBlock = block as BlockShopifyStageServices;
            const items = (sssBlock.items ?? []).map((item) => ({
              tag: item.tag,
              title: item.title,
              description: item.description,
              pills: item.pills?.map((p) => p.text || "").filter(Boolean),
              cta: item.cta?.label
                ? { label: item.cta.label, href: item.cta.href || "" }
                : null,
            }));

            const isLastColFull =
              sssBlock.lastColFull ??
              (sssBlock.heading?.includes(
                "Complete Shopify Expertise Under One Roof",
              ) ||
                sssBlock.heading?.includes(
                  "Our Full-Stack Shopify Capabilities",
                ));

            return (
              <ShopifyStageServicesSection
                key={blockKey}
                id="shopify-services"
                content={{
                  eyebrow: sssBlock.eyebrow,
                  heading: sssBlock.heading,
                  description: sssBlock.description,
                  items,
                }}
                lastColFull={isLastColFull}
                sixCards={sssBlock.sixCards}
              />
            );
          }

          case "case-study-cards": {
            const cscBlock = block as BlockCaseStudyCards;
            const items = (cscBlock.items ?? []).map((item) => ({
              name: item.name,
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              imageAlt: item.imageAlt || item.name,
              href: item.href,
              platform: item.platform,
              industry: item.industry,
              ctaLabel: item.ctaLabel,
              description: item.description,
              chips: item.chips?.map((c) => c.tag || "").filter(Boolean),
            }));

            return (
              <CaseStudyCardsSection
                key={blockKey}
                content={{
                  eyebrow: cscBlock.eyebrow,
                  heading: cscBlock.heading,
                  description: cscBlock.description,
                  ctaLabel: cscBlock.ctaLabel,
                  items,
                }}
              />
            );
          }

          case "evaluation-framework": {
            const efBlock = block as BlockEvaluationFramework;
            const items = (efBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
            }));

            return (
              <EvaluationFrameworkSection
                key={blockKey}
                className={isConsecutiveWhite ? "pt-0 max-[991px]:pt-0" : undefined}
                content={{
                  eyebrow: efBlock.eyebrow,
                  heading: efBlock.heading,
                  description: efBlock.description,
                  items,
                }}
                id={efBlock.sectionId || "evaluation-framework"}
              />
            );
          }

          case "shopify-team-boxes": {
            const stbBlock = block as BlockShopifyTeamBoxes;
            const items = (stbBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
            }));

            return (
              <ShopifyTeamBoxesSection
                key={blockKey}
                content={{
                  eyebrow: stbBlock.eyebrow,
                  heading: stbBlock.heading,
                  description: stbBlock.description,
                  cta: stbBlock.cta?.label
                    ? {
                        label: stbBlock.cta.label,
                        href: stbBlock.cta.href || "",
                      }
                    : undefined,
                  secondaryCta: stbBlock.secondaryCta?.label
                    ? {
                        label: stbBlock.secondaryCta.label,
                        href: stbBlock.secondaryCta.href || "",
                      }
                    : undefined,
                  items,
                }}
              />
            );
          }

          case "shopify-horizontal-process": {
            const shpBlock = block as BlockShopifyHorizontalProcess;
            const steps = (shpBlock.steps ?? []).map((step, idx) => ({
              number: step.number || String(idx + 1).padStart(2, "0"),
              title: step.title,
              description: step.description,
            }));

            return (
              <ShopifyHorizontalProcessSection
                key={blockKey}
                content={{
                  eyebrow: shpBlock.eyebrow,
                  heading: shpBlock.heading,
                  description: shpBlock.description,
                  steps,
                }}
              />
            );
          }

          case "verified-knowledge": {
            const vkBlock = block as BlockVerifiedKnowledge;
            const items = (vkBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
              icon: resolveMediaUrl(item.icon) || item.iconSrc || "",
              iconAlt: item.iconAlt || item.title,
            }));

            return (
              <VerifiedKnowledgeSection
                key={blockKey}
                content={{
                  heading: vkBlock.heading,
                  description: vkBlock.description,
                  items,
                }}
              />
            );
          }

          case "credential-evidence": {
            const ceBlock = block as BlockCredentialEvidence;
            const items = (ceBlock.items ?? []).map((item) => ({
              title: item.title,
              count: item.count,
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              imageAlt: item.imageAlt || item.title,
              href: item.href || "",
            }));

            return (
              <CredentialEvidenceSection
                key={blockKey}
                content={{
                  heading: ceBlock.heading,
                  description: ceBlock.description,
                  note: ceBlock.note || "",
                  items,
                }}
              />
            );
          }

          case "credential-tabs": {
            const ctBlock = block as BlockCredentialTabs;
            const items = (ctBlock.items ?? []).map((item) => ({
              id: item.tabId,
              label: item.label,
              eyebrow: item.eyebrow || "",
              title: item.title,
              description: item.description,
              details: (item.details ?? []).map((d) => ({
                label: d.label,
                value: d.value,
              })),
            }));

            return (
              <CredentialTabsSection
                key={blockKey}
                content={{
                  heading: ctBlock.heading,
                  description: ctBlock.description,
                  items,
                }}
              />
            );
          }

          case "certified-agency-support": {
            const casBlock = block as BlockCertifiedAgencySupport;
            const paragraphs = (casBlock.paragraphs ?? []).map((p) => p.text);
            const items = (casBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
            }));

            return (
              <CertifiedAgencySupportSection
                key={blockKey}
                content={{
                  heading: casBlock.heading,
                  paragraphs,
                  items,
                }}
              />
            );
          }

          case "certified-services": {
            const csBlock = block as BlockCertifiedServices;
            const items = (csBlock.items ?? []).map((item) => ({
              eyebrow: item.eyebrow,
              title: item.title,
              description: item.description,
            }));

            return (
              <CertifiedServicesSection
                key={blockKey}
                content={{
                  heading: csBlock.heading,
                  description: csBlock.description,
                  items,
                }}
              />
            );
          }

          case "partner-directory-proof": {
            const pdpBlock = block as BlockPartnerDirectoryProof;
            const items = (pdpBlock.items ?? []).map((item) => {
              if (item.kind === "image") {
                return {
                  kind: "image" as const,
                  label: item.label,
                  image: resolveMediaUrl(item.image) || item.imageSrc || "",
                  imageAlt: item.imageAlt || item.label,
                  imageWidth: item.imageWidth || 136,
                  imageHeight: item.imageHeight || 44,
                };
              }
              return {
                kind: (item.kind || "text") as "rating" | "text",
                label: item.label,
                value: item.value || "",
              };
            });

            return (
              <PartnerDirectoryProofSection
                key={blockKey}
                content={{
                  heading: pdpBlock.heading,
                  description: pdpBlock.description,
                  href: pdpBlock.href,
                  items,
                }}
              />
            );
          }

          case "white-label-final-cta": {
            const wlctaBlock = block as BlockWhiteLabelFinalCta;
            const variant =
              wlctaBlock.variant === "certifiedDevelopers" ||
              wlctaBlock.variant === "shopifyHours"
                ? wlctaBlock.variant
                : "default";
            return (
              <WhiteLabelFinalCtaSection
                key={blockKey}
                ctaHref={wlctaBlock.buttonUrl}
                cta={{
                  title: wlctaBlock.title || wlctaBlock.heading || "",
                  description: wlctaBlock.description || "",
                  label:
                    wlctaBlock.label || wlctaBlock.buttonText || "Get In Touch",
                }}
                variant={variant}
              />
            );
          }

          case "shopify-migration-services": {
            const smsBlock = block as BlockShopifyMigrationServices;
            const items = (smsBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
              image: resolveMediaUrl(item.icon) || item.iconSrc || "",
              imageAlt: item.iconAlt || item.title,
              href: item.href,
              ctaLabel: item.ctaText,
            }));

            const banner = smsBlock.banner?.title
              ? {
                  badge: smsBlock.banner.badge || "",
                  title: smsBlock.banner.title,
                  description: smsBlock.banner.description || "",
                  ctaLabel: smsBlock.banner.ctaLabel || "",
                  ctaHref: smsBlock.banner.ctaHref || "",
                }
              : undefined;

            return (
              <ShopifyMigrationServicesSection
                key={blockKey}
                id={smsBlock.idAttr || "explore_migration_options"}
                eyebrow={smsBlock.eyebrow}
                heading={smsBlock.heading}
                description={smsBlock.description}
                banner={banner}
                items={items}
              />
            );
          }

          case "shopify-migration-numbered-grid": {
            const smngBlock = block as BlockShopifyMigrationNumberedGrid;
            const items = (smngBlock.items ?? []).map((item, idx) => ({
              number: item.number || String(idx + 1).padStart(2, "0"),
              title: item.title,
              description: item.description,
            }));

            return (
              <ShopifyMigrationNumberedGridSection
                key={blockKey}
                id={smngBlock.idAttr}
                eyebrow={smngBlock.eyebrow}
                heading={smngBlock.heading}
                description={smngBlock.description}
                variant={smngBlock.variant || "pista"}
                items={items}
              />
            );
          }

          case "seo-safe-migration": {
            const ssmBlock = block as BlockSeoSafeMigration;
            return (
              <SeoSafeMigrationSection
                key={blockKey}
                content={{
                  eyebrow: ssmBlock.eyebrow,
                  heading: ssmBlock.heading,
                  description: ssmBlock.description,
                  tags: (ssmBlock.tags ?? []).map((t) => t.tag),
                  urlMappings: (ssmBlock.urlMappings ?? []).map((m) => ({
                    source: m.source,
                    statusCode: m.statusCode,
                    target: m.target,
                  })),
                  checks: (ssmBlock.checks ?? []).map((c) => c.check),
                }}
              />
            );
          }

          case "why-choose-shopify-migration": {
            const wcsmBlock = block as BlockWhyChooseShopifyMigration;
            return (
              <WhyChooseShopifyMigrationSection
                key={blockKey}
                content={{
                  eyebrow: wcsmBlock.eyebrow,
                  heading: wcsmBlock.heading,
                  description: wcsmBlock.description,
                  partnerHeading: wcsmBlock.partnerHeading || "",
                  partnerDescription: wcsmBlock.partnerDescription || "",
                  partnerLogo:
                    resolveMediaUrl(wcsmBlock.partnerLogo) ||
                    wcsmBlock.partnerLogoSrc ||
                    "",
                  partnerLogoAlt: wcsmBlock.partnerLogoAlt || "",
                  logoHref: wcsmBlock.logoHref,
                  partnerLink: {
                    label: wcsmBlock.partnerLink?.label || "",
                    href: wcsmBlock.partnerLink?.href || "",
                  },
                  stats: (wcsmBlock.stats ?? []).map((s) => ({
                    value: s.value,
                    label: s.label,
                  })),
                  items: (wcsmBlock.items ?? []).map((item) => ({
                    icon: item.icon,
                    title: item.title,
                    description: item.description,
                  })),
                }}
              />
            );
          }

          case "theme-customization-services": {
            const tcsBlock = block as BlockThemeCustomizationServices;
            const boxes = (tcsBlock.boxes ?? []).map((box) => ({
              number: box.number,
              title: box.title,
              badge: box.badge,
              description: box.description,
              icon: renderCustomBoxIcon(box.iconName),
            }));

            return (
              <ThemeCustomizationServicesSection
                key={blockKey}
                id={tcsBlock.sectionId || (tcsBlock.id ? String(tcsBlock.id) : undefined)}
                variant={tcsBlock.variant || "green"}
                content={{
                  eyebrow: tcsBlock.eyebrow,
                  heading: tcsBlock.heading,
                  description: tcsBlock.description,
                  bottomNote: tcsBlock.bottomNote,
                  boxes,
                }}
              />
            );
          }

          case "theme-customization-approach": {
            const tcaBlock = block as BlockThemeCustomizationApproach;
            const approaches = (tcaBlock.approaches ?? []).map((item) => ({
              badge: item.badge,
              title: item.title,
              description: item.description,
              isHighlighted: item.isHighlighted,
              points: (item.points ?? []).map((p) => p.point),
            }));

            return (
              <ThemeCustomizationApproachSection
                key={blockKey}
                content={{
                  eyebrow: tcaBlock.eyebrow,
                  heading: tcaBlock.heading,
                  description: tcaBlock.description,
                  approaches,
                }}
              />
            );
          }

          case "shopify-themes-grid": {
            const stgBlock = block as BlockShopifyThemesGrid;
            const items = (stgBlock.items ?? []).map((item) => ({
              name: item.name,
              title: item.title,
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              alt: item.alt,
              href: item.href,
              ctaText: item.ctaText,
            }));

            return (
              <ShopifyThemesGridSection
                key={blockKey}
                id={stgBlock.idAttr || "customized-theme"}
                variant={stgBlock.variant || "pista"}
                content={{
                  eyebrow: stgBlock.eyebrow,
                  title: stgBlock.title,
                  subtitle: stgBlock.subtitle,
                  items,
                }}
              />
            );
          }

          case "ai-empowered-delivery": {
            const aiedBlock = block as BlockAiEmpoweredDelivery;
            return (
              <AiEmpoweredDeliverySection
                key={blockKey}
                variant={aiedBlock.variant || "default"}
                content={{
                  eyebrow: aiedBlock.eyebrow,
                  heading: aiedBlock.heading,
                  description: aiedBlock.description,
                  callout: aiedBlock.callout,
                  cta: aiedBlock.cta?.label
                    ? {
                        label: aiedBlock.cta.label,
                        href: aiedBlock.cta.href || "",
                      }
                    : undefined,
                  tools: (aiedBlock.tools ?? []).map((t) => ({
                    name: t.name,
                    description: t.description,
                  })),
                }}
              />
            );
          }

          case "shopify-cro-barriers": {
            const scbBlock = block as BlockShopifyCroBarriers;
            return (
              <ShopifyCroBarriersSection
                key={blockKey}
                content={{
                  eyebrow: scbBlock.eyebrow,
                  heading: scbBlock.heading,
                  description: scbBlock.description,
                  items: (scbBlock.items ?? []).map((i) => ({
                    title: i.title,
                    icon: resolveMediaUrl(i.icon) || i.iconSrc || "",
                    alt: i.alt || i.title,
                  })),
                }}
              />
            );
          }

          case "shopify-cro-revenue-impact": {
            const scriBlock = block as BlockShopifyCroRevenueImpact;
            return (
              <ShopifyCroRevenueImpactSection
                key={blockKey}
                content={{
                  eyebrow: scriBlock.eyebrow,
                  heading: scriBlock.heading,
                  description: scriBlock.description,
                  before: {
                    badge: scriBlock.beforeBadge || "Current State",
                    metrics: (scriBlock.beforeMetrics ?? []).map((m) => ({
                      label: m.label,
                      value: m.value,
                      icon: resolveMediaUrl(m.icon) || m.iconSrc || "",
                    })),
                    totalLabel: scriBlock.beforeTotalLabel || "Revenue",
                    totalValue: scriBlock.beforeTotalValue || "$50,000",
                  },
                  after: {
                    badge: scriBlock.afterBadge || "After Optimization",
                    metrics: (scriBlock.afterMetrics ?? []).map((m) => ({
                      label: m.label,
                      value: m.value,
                      icon: resolveMediaUrl(m.icon) || m.iconSrc || "",
                    })),
                    totalLabel: scriBlock.afterTotalLabel || "Revenue",
                    totalValue: scriBlock.afterTotalValue || "$75,000",
                  },
                  footer: {
                    text:
                      scriBlock.footerText || "Additional Revenue Potential:",
                    highlight: scriBlock.footerHighlight || "+$25,000",
                    suffix: scriBlock.footerSuffix || "Per Month",
                  },
                }}
              />
            );
          }

          case "shopify-cro-services": {
            const scsBlock = block as BlockShopifyCroServices;
            return (
              <ShopifyCroServicesSection
                key={blockKey}
                content={{
                  eyebrow: scsBlock.eyebrow,
                  heading: scsBlock.heading,
                  description: scsBlock.description,
                  items: (scsBlock.items ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                    icon: resolveMediaUrl(i.icon) || i.iconSrc || "",
                    alt: i.alt || i.title,
                    deliverables: (i.deliverables ?? []).map((d) => d.item),
                  })),
                }}
              />
            );
          }

          case "shopify-cro-assessment": {
            const scaBlock = block as BlockShopifyCroAssessment;
            return (
              <ShopifyCroAssessmentSection
                key={blockKey}
                content={{
                  heading: scaBlock.heading,
                  description: scaBlock.description,
                  points: (scaBlock.points ?? []).map((p) => p.text),
                  cta: {
                    label: scaBlock.ctaLabel || "COMPLETE CRO ASSESSMENT",
                    href: scaBlock.ctaHref || "#",
                  },
                }}
              />
            );
          }

          case "shopify-cro-process": {
            const scpBlock = block as BlockShopifyCroProcess;
            return (
              <ShopifyCroProcessSection
                key={blockKey}
                content={{
                  eyebrow: scpBlock.eyebrow,
                  heading: scpBlock.heading,
                  description: scpBlock.description,
                  steps: (scpBlock.steps ?? []).map((s) => ({
                    number: s.number,
                    title: s.title,
                    description: s.description,
                    icon: resolveMediaUrl(s.icon) || s.iconSrc || "",
                  })),
                }}
              />
            );
          }

          case "shopify-cro-why": {
            const scwBlock = block as BlockShopifyCroWhy;
            return (
              <ShopifyCroWhySection
                key={blockKey}
                content={{
                  eyebrow: scwBlock.eyebrow,
                  heading: scwBlock.heading,
                  paragraphs: (scwBlock.paragraphs ?? []).map((p) => p.text),
                  points: (scwBlock.points ?? []).map((p) => p.text),
                  tagline: scwBlock.tagline,
                }}
              />
            );
          }

          case "shopify-cro-engagement": {
            const sceBlock = block as BlockShopifyCroEngagement;
            return (
              <ShopifyCroEngagementSection
                key={blockKey}
                content={{
                  heading: sceBlock.heading,
                  items: (sceBlock.items ?? []).map((m) => ({
                    title: m.title,
                    description: m.description,
                    icon: resolveMediaUrl(m.icon) || m.iconSrc || "",
                    alt: m.alt || m.title,
                    features: (m.features ?? []).map((f) => f.text),
                    cta: {
                      label: m.ctaLabel || "REQUEST AUDIT DETAILS",
                      href: m.ctaHref || "/request-quote",
                    },
                  })),
                }}
              />
            );
          }

          case "shopify-mobile-app-hero": {
            const smahBlock = block as BlockShopifyMobileAppHero;
            return (
              <ShopifyMobileAppHeroSection
                key={blockKey}
                content={{
                  title: smahBlock.title,
                  eyebrows: (smahBlock.eyebrowSpans ?? [])
                    .map((e) => e.text || "")
                    .filter(Boolean),
                  description:
                    smahBlock.subtitle || smahBlock.description || "",
                  primaryCta: {
                    label: smahBlock.cta || "Get in Touch",
                    href: smahBlock.ctaHref || "/contact-us",
                  },
                  secondaryCta: smahBlock.secondaryCta?.label
                    ? {
                        label: smahBlock.secondaryCta.label,
                        href: smahBlock.secondaryCta.href || "",
                      }
                    : undefined,
                  badges: (smahBlock.badges ?? []).map((b) => ({
                    name: b.name,
                    src: resolveMediaUrl(b.logo) || b.src || "",
                    alt: b.alt || b.name,
                    href: b.href || "#",
                    width: b.width || 120,
                    height: b.height || 40,
                  })),
                  slides: (smahBlock.appScreenshots ?? []).map((s) => ({
                    src: resolveMediaUrl(s.image) || s.src || "",
                    alt: s.alt || s.name,
                    width: s.width || 300,
                    height: s.height || 600,
                  })),
                  frameImage: smahBlock.frameImage?.src || smahBlock.frameImage?.image
                    ? {
                        src:
                          resolveMediaUrl(smahBlock.frameImage?.image) ||
                          smahBlock.frameImage?.src ||
                          "",
                        alt: smahBlock.frameImage?.alt || "",
                        width: smahBlock.frameImage?.width || 280,
                        height: smahBlock.frameImage?.height || 574,
                      }
                    : undefined,
                }}
              />
            );
          }

          case "white-label-counter": {
            const wlcBlock = block as BlockWhiteLabelCounter;
            return (
              <WhiteLabelCounterSection
                key={blockKey}
                counters={(wlcBlock.counters ?? []).map((c) => ({
                  value: `${c.count}${c.unit || ""}`,
                  label: c.label,
                }))}
              />
            );
          }

          case "shopify-mobile-app-dtc": {
            const smadBlock = block as BlockShopifyMobileAppDtc;
            return (
              <ShopifyMobileAppDtcSection
                key={blockKey}
                content={{
                  eyebrow: smadBlock.eyebrow,
                  heading: smadBlock.heading,
                  paragraphs: smadBlock.description
                    ? smadBlock.description.split("\n\n")
                    : undefined,
                  cards: (smadBlock.cards ?? []).map((c) => ({
                    tag: c.tag,
                    title: c.title,
                    description: c.description,
                    badges: c.badges?.map((b) => ({
                      src: resolveMediaUrl(b.logo) || b.src || "",
                      alt: b.alt || b.name || "",
                      href: b.href || "#",
                      width: b.width || 111,
                      height: b.height || 44,
                    })),
                  })),
                }}
              />
            );
          }

          case "shopify-mobile-app-work": {
            const smawBlock = block as BlockShopifyMobileAppWork;
            return (
              <ShopifyMobileAppWorkSection
                key={blockKey}
                content={{
                  eyebrow: smawBlock.eyebrow,
                  heading: smawBlock.heading,
                  description: smawBlock.description,
                  ctaHref: smawBlock.ctaHref || "/our-work",
                  ctaLabel:
                    smawBlock.ctaLabel || shopifyMobileAppExploreWork.ctaLabel,
                  secondaryCta: shopifyMobileAppExploreWork.secondaryCta,
                  items: (smawBlock.items ?? []).map((i) => ({
                    name: i.name,
                    category: i.category,
                    image: resolveMediaUrl(i.image) || i.src || "",
                    imageAlt: i.alt || i.name,
                    href: i.href,
                    appLinks: [
                      ...(i.appStoreUrl
                        ? [
                            {
                              href: i.appStoreUrl,
                              label: mobileAppPlatformLabels.ios,
                              icon: mobileAppPlatformLabels.iosIcon,
                            },
                          ]
                        : []),
                      ...(i.playStoreUrl
                        ? [
                            {
                              href: i.playStoreUrl,
                              label: mobileAppPlatformLabels.android,
                              icon: mobileAppPlatformLabels.androidIcon,
                            },
                          ]
                        : []),
                    ],
                  })),
                }}
              />
            );
          }

          case "shopify-mobile-app-comparison": {
            const smacBlock = block as BlockShopifyMobileAppComparison;
            return (
              <ShopifyMobileAppComparisonSection
                key={blockKey}
                content={{
                  eyebrow: smacBlock.eyebrow,
                  heading: smacBlock.heading,
                  description: smacBlock.description,
                  tableHeaders: [
                    "Features",
                    smacBlock.col1Heading || "App Builder (Template)",
                    smacBlock.col2Heading || "Custom Mobile App Development",
                  ],
                  rows: (smacBlock.rows ?? []).map((r) => ({
                    title: r.feature,
                    subtitle: "",
                    appBuilder: r.appBuilder,
                    custom: r.customDev,
                  })),
                }}
              />
            );
          }

          case "shopify-mobile-app-experience": {
            const smaeBlock = block as BlockShopifyMobileAppExperience;
            return (
              <ShopifyMobileAppExperienceSection
                key={blockKey}
                content={{
                  eyebrow: smaeBlock.eyebrow,
                  heading: smaeBlock.heading,
                  description: smaeBlock.description,
                  moments: (smaeBlock.items ?? []).map((i, idx) => ({
                    step: String(idx + 1).padStart(2, "0"),
                    title: i.title,
                    description: i.description,
                  })),
                }}
              />
            );
          }

          case "white-label-process": {
            const wlpBlock = block as BlockWhiteLabelProcess;
            return (
              <WhiteLabelProcessSection
                key={blockKey}
                eyebrow={wlpBlock.eyebrow}
                title={wlpBlock.title}
                description={wlpBlock.description}
                note={wlpBlock.note || ""}
                steps={(wlpBlock.steps ?? []).map((s, idx) => ({
                  number: s.number || String(idx + 1).padStart(2, "0"),
                  title: s.title,
                  description: s.description,
                }))}
              />
            );
          }

          case "agency-services": {
            const asBlock = block as BlockAgencyServices;
            return (
              <AgencyServicesSection
                key={blockKey}
                id={asBlock.idAttr || "services"}
                cardVariant={asBlock.cardVariant || "services-box"}
                columns={(asBlock.columns as 2 | 3 | 4) || 2}
                hideCta={asBlock.hideCta}
                content={{
                  eyebrow: asBlock.eyebrow,
                  heading: asBlock.heading,
                  description: asBlock.description,
                  items: (asBlock.items ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                    badge: i.badge,
                    href: i.href,
                    icon: resolveMediaUrl(i.icon) || i.iconSrc || undefined,
                    iconAlt: i.iconAlt,
                    iconName: i.iconName,
                    iconSvg:
                      i.iconName && !resolveMediaUrl(i.icon) && !i.iconSrc
                        ? renderCustomBoxIcon(i.iconName)
                        : undefined,
                    bullets: (i.features ?? []).map((f) => f.feature),
                    features: (i.features ?? []).map((f) => f.feature),
                  })),
                }}
              />
            );
          }

          case "city-page-counter": {
            const cpcBlock = block as BlockCityPageCounter;
            return (
              <CityPageCounterSection
                key={blockKey}
                eyebrowVariant="dash"
                content={{
                  eyebrow: cpcBlock.eyebrow,
                  heading: cpcBlock.heading,
                  description: cpcBlock.description,
                  items: (cpcBlock.counters ?? []).map((c) => ({
                    value: `${c.count}${c.unit || ""}`,
                    label: c.label,
                  })),
                }}
              />
            );
          }

          case "shopify-team-behind-it": {
            const stbiBlock = block as BlockShopifyTeamBehindIt;
            return (
              <ShopifyTeamBehindItSection
                key={blockKey}
                hideCtas={stbiBlock.hideCtas ?? true}
                content={{
                  eyebrow: stbiBlock.eyebrow,
                  heading: stbiBlock.heading,
                  description: stbiBlock.description,
                  cards: (stbiBlock.items ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                  })),
                  ctas: stbiBlock.primaryCta?.label
                    ? {
                        primary: {
                          label: stbiBlock.primaryCta.label,
                          href: stbiBlock.primaryCta.href || "",
                        },
                        secondary: stbiBlock.secondaryCta?.label
                          ? {
                              label: stbiBlock.secondaryCta.label,
                              href: stbiBlock.secondaryCta.href || "",
                              variant: stbiBlock.secondaryCta.variant,
                            }
                          : undefined,
                      }
                    : undefined,
                }}
              />
            );
          }

          case "city-why-choose-boxes": {
            const cwcbBlock = block as BlockCityWhyChooseBoxes;
            return (
              <CityWhyChooseBoxesSection
                key={blockKey}
                columns={(cwcbBlock.columns as 3 | 4 | 5) || 3}
                eyebrowVariant="dash"
                id={cwcbBlock.sectionId || (cwcbBlock.id ? String(cwcbBlock.id) : undefined)}
                theme={(cwcbBlock.theme as "light" | "dark" | "white" | "warm") || "light"}
                content={{
                  eyebrow: cwcbBlock.eyebrow,
                  heading: cwcbBlock.heading,
                  description: cwcbBlock.description,
                  items: (cwcbBlock.boxes ?? []).map((b) => ({
                    subtitle: b.subtitle,
                    title: b.title,
                    description: b.description,
                    icon: resolveMediaUrl(b.icon) || undefined,
                    iconAlt:
                      b.iconAlt ||
                      (typeof b.title === "string" ? b.title : undefined),
                    iconNode: b.iconName
                      ? renderCustomBoxIcon(b.iconName)
                      : undefined,
                  })),
                }}
              />
            );
          }

          case "shopify-hours-hero": {
            return <ShopifyHoursHeroSection key={blockKey} />;
          }

          case "shopify-hours-comparison": {
            return <ShopifyHoursComparisonSection key={blockKey} />;
          }

          case "shopify-hours-tasks": {
            return <ShopifyHoursTasksSection key={blockKey} />;
          }

          case "numbered-process-timeline": {
            const nptBlock = block as BlockNumberedProcessTimeline;
            return (
              <NumberedProcessTimelineSection
                key={blockKey}
                eyebrow={nptBlock.eyebrow}
                heading={nptBlock.heading}
                description={nptBlock.description}
                headingId={nptBlock.headingId || "shopify-hours-process-title"}
                layout={nptBlock.layout === "centered" ? "centered" : "split"}
                items={(nptBlock.items ?? []).map((i) => i.title)}
              />
            );
          }

          case "shopify-apps-hero": {
            const sahBlock = block as BlockShopifyAppsHero;
            return (
              <ShopifyAppsHeroSection key={blockKey} title={sahBlock.title} />
            );
          }

          case "shopify-apps-grid": {
            const sagBlock = block as BlockShopifyAppsGrid;
            const apps = (sagBlock.apps ?? []).map((app, idx) => ({
              id: app.title || String(idx),
              title: app.title,
              href: app.href,
              image:
                resolveMediaUrl(app.image) ||
                app.imageSrc ||
                "/assets/icons/shopify.svg",
              alt: app.alt || app.title,
              additionalInfo: app.additionalInfo || "",
              description: app.description || "",
            }));

            return <ShopifyAppsGridSection key={blockKey} apps={apps} />;
          }

          case "shopify-app-benefits": {
            const sabBlock = block as BlockShopifyAppBenefits;
            return (
              <ShopifyAppBenefitsSection
                key={blockKey}
                content={{
                  heading: sabBlock.heading,
                  description: sabBlock.description,
                  items: (sabBlock.items ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                    icon:
                      resolveMediaUrl(i.icon) ||
                      i.iconSrc ||
                      "/assets/icons/default-benefit.svg",
                    iconAlt: i.iconAlt || i.title || "",
                  })),
                }}
              />
            );
          }

          case "shopify-app-features": {
            const safBlock = block as BlockShopifyAppFeatures;
            return (
              <ShopifyAppFeaturesSection
                key={blockKey}
                content={{
                  eyebrow: safBlock.eyebrow,
                  heading: safBlock.heading,
                  centerImage: {
                    src:
                      resolveMediaUrl(safBlock.centerImage) ||
                      safBlock.centerImageSrc ||
                      "/assets/services/shopify-mobile-app-development/features/app-features-img.webp",
                    alt: safBlock.centerImageAlt || safBlock.heading,
                    width: 374,
                    height: 518,
                  },
                  leftFeatures: (safBlock.leftFeatures ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                    icon:
                      resolveMediaUrl(i.icon) ||
                      i.iconSrc ||
                      "/assets/services/shopify-mobile-app-development/features/app-theme-icon.svg",
                    iconAlt: i.iconAlt || i.title,
                  })),
                  rightFeatures: (safBlock.rightFeatures ?? []).map((i) => ({
                    title: i.title,
                    description: i.description,
                    icon:
                      resolveMediaUrl(i.icon) ||
                      i.iconSrc ||
                      "/assets/services/shopify-mobile-app-development/features/searching-icon.svg",
                    iconAlt: i.iconAlt || i.title,
                  })),
                }}
              />
            );
          }

          case "shopify-app-process": {
            const sapBlock = block as BlockShopifyAppProcess;
            return (
              <ShopifyAppProcessSection
                key={blockKey}
                content={{
                  eyebrow: sapBlock.eyebrow,
                  heading: sapBlock.heading,
                  steps: (sapBlock.steps ?? []).map((s) => ({
                    title: s.title,
                    description: s.description,
                    icon: resolveMediaUrl(s.icon) || s.iconSrc,
                    iconAlt: s.iconAlt || s.title,
                  })),
                }}
              />
            );
          }

          case "risks-shopify-topics": {
            const rstBlock = block as BlockRisksShopifyTopics;
            const hasCustomTopics = (rstBlock.topics?.length ?? 0) > 0;
            const items = hasCustomTopics
              ? (rstBlock.topics ?? []).map((t, idx) => {
                  const fallback = risksShopifyOutsourcingTopics[idx];
                  return {
                    id: t.id || fallback?.id || `contenttab-${idx + 1}`,
                    label:
                      t.label ||
                      t.title ||
                      fallback?.label ||
                      `Topic ${idx + 1}`,
                    heading: t.heading || t.title || fallback?.heading || "",
                    introParagraphs: fallback?.introParagraphs,
                    paragraphs:
                      t.paragraphs && t.paragraphs.length > 0
                        ? t.paragraphs.map((p) => p.text)
                        : (fallback?.paragraphs ?? []),
                    bullets: fallback?.bullets,
                    closingParagraphs: fallback?.closingParagraphs,
                  };
                })
              : risksShopifyOutsourcingTopics;
            return <RisksShopifyTopics key={blockKey} items={items} />;
          }

          case "image-cta": {
            const icBlock = block as BlockImageCta;
            return (
              <ImageCtaSection
                key={blockKey}
                backgroundImage={
                  resolveMediaUrl(icBlock.backgroundImage) ||
                  icBlock.backgroundImageSrc ||
                  "/assets/backgrounds/think-migration.png"
                }
                ctaHref={icBlock.ctaHref}
                ctaLabel={icBlock.ctaLabel}
                description={icBlock.description}
                heading={icBlock.heading}
              />
            );
          }
          case "city-page-hero": {
            const cphBlock = block as BlockCityPageHero;
            const eyebrows =
              cphBlock.eyebrows && cphBlock.eyebrows.length > 0
                ? cphBlock.eyebrows.map((e) =>
                    typeof e === "string" ? e : e.text || "",
                  )
                : undefined;
            const badges =
              cphBlock.badges && cphBlock.badges.length > 0
                ? cphBlock.badges.map((b) => ({
                    src: resolveMediaUrl(b.logo) || b.src || "",
                    alt: b.alt || "",
                    width: b.width || 120,
                    height: b.height || 44,
                    href: b.href || "",
                  }))
                : undefined;
            const isFullStackHero =
              cphBlock.title?.includes("Full Stack Development") ||
              cphBlock.tabletSlider?.slides?.some((s) =>
                (s.alt || "").includes("Don J") || (s.src || "").includes("donjjewellery"),
              );
            const topBadge = isFullStackHero
              ? {
                  src: "/assets/services/full-stack-development/node-js-development-badge.webp",
                  alt: "Node.js development by Dynamic Dreamz",
                  width: 346,
                  height: 212,
                }
              : undefined;
            const bottomBadge = isFullStackHero
              ? {
                  src: "/assets/services/full-stack-development/next-js-development-badge.webp",
                  alt: "Next.js development by Dynamic Dreamz",
                  width: 260,
                  height: 252,
                }
              : undefined;
            const tabletSlider = cphBlock.tabletSlider
              ? {
                  bgShapeSrc:
                    resolveMediaUrl(cphBlock.tabletSlider.bgShape) ||
                    cphBlock.tabletSlider.bgShapeSrc ||
                    "",
                  slides: cphBlock.tabletSlider.slides
                    ? cphBlock.tabletSlider.slides.map((s) => ({
                        src: resolveMediaUrl(s.image) || s.src || "",
                        alt: s.alt || "",
                        width: s.width || 1600,
                        height: s.height || 2380,
                      }))
                    : [],
                  topBadge,
                  bottomBadge,
                }
              : undefined;

            return (
              <CityPageHeroSection
                key={blockKey}
                content={{
                  eyebrows,
                  title: cphBlock.title,
                  titleHighlight: cphBlock.titleHighlight,
                  subtitle: cphBlock.subtitle,
                  description: cphBlock.description,
                  secondaryDescription: cphBlock.secondaryDescription,
                  ctaLabel: cphBlock.ctaLabel,
                  ctaHref: cphBlock.ctaHref,
                  primaryCta: cphBlock.primaryCta?.label
                    ? {
                        label: cphBlock.primaryCta.label,
                        href: cphBlock.primaryCta.href || "",
                      }
                    : undefined,
                  secondaryCta: cphBlock.secondaryCta?.label
                    ? {
                        label: cphBlock.secondaryCta.label,
                        href: cphBlock.secondaryCta.href || "",
                      }
                    : undefined,
                  badges,
                  tabletSlider: tabletSlider?.slides?.length
                    ? tabletSlider
                    : undefined,
                }}
              />
            );
          }

          case "shopify-support-scenarios": {
            const sssBlock = block as BlockShopifySupportScenarios;
            const items =
              sssBlock.items && sssBlock.items.length > 0
                ? sssBlock.items.map((item) => ({
                    id: item.scenarioId || item.id || item.title,
                    title: item.title,
                    subtitle: item.subtitle,
                    kicker: item.kicker,
                    heading: item.heading,
                    description: item.description,
                    features: item.features
                      ? item.features.map((f) =>
                          typeof f === "string" ? f : f.text || "",
                        )
                      : [],
                    meta: item.meta,
                    primaryCta: {
                      label: item.primaryCta?.label || "",
                      href: item.primaryCta?.href || "",
                    },
                    secondaryCta: {
                      label: item.secondaryCta?.label || "",
                      href: item.secondaryCta?.href || "",
                    },
                  }))
                : [];

            return (
              <ShopifySupportScenariosSection
                key={blockKey}
                content={{
                  eyebrow: sssBlock.eyebrow,
                  heading: sssBlock.heading,
                  description: sssBlock.description,
                  items,
                }}
              />
            );
          }

          case "delivery-model-comparison": {
            const dmcBlock = block as BlockDeliveryModelComparison;
            return (
              <DeliveryModelComparisonSection
                key={blockKey}
                content={{
                  eyebrow: dmcBlock.eyebrow,
                  heading: dmcBlock.heading,
                  description: dmcBlock.description,
                  columns: dmcBlock.columns || [],
                  rows: dmcBlock.rows || [],
                  ctas:
                    dmcBlock.ctas?.primary && dmcBlock.ctas.secondary
                      ? {
                          primary: dmcBlock.ctas.primary,
                          secondary: dmcBlock.ctas.secondary,
                        }
                      : whiteLabelShopifyDeliveryComparison.ctas,
                }}
              />
            );
          }

          case "white-label-tools": {
            const wltBlock = block as BlockWhiteLabelTools;
            const topRow = wltBlock.topRow
              ? wltBlock.topRow.map((i) => ({
                  name: i.name,
                  image: resolveMediaUrl(i.logo) || i.image || "",
                }))
              : [];
            const bottomRow = wltBlock.bottomRow
              ? wltBlock.bottomRow.map((i) => ({
                  name: i.name,
                  image: resolveMediaUrl(i.logo) || i.image || "",
                }))
              : [];

            return (
              <WhiteLabelToolsSection
                key={blockKey}
                ariaLabel={wltBlock.ariaLabel}
                description={wltBlock.description}
                eyebrow={wltBlock.eyebrow}
                rows={[topRow, bottomRow]}
                title={wltBlock.title}
              />
            );
          }

          case "how-agencies-use": {
            const hauBlock = block as BlockHowAgenciesUse;
            return (
              <HowAgenciesUseSection
                key={blockKey}
                content={{
                  eyebrow: hauBlock.eyebrow,
                  heading: hauBlock.heading,
                  description: hauBlock.description,
                  cards: hauBlock.cards || [],
                }}
              />
            );
          }

          case "white-label-why": {
            const wlwBlock = block as BlockWhiteLabelWhy;
            return (
              <WhiteLabelWhySection
                key={blockKey}
                eyebrow={wlwBlock.eyebrow}
                reasons={wlwBlock.reasons || []}
                title={wlwBlock.title}
              />
            );
          }

          case "white-label-services": {
            const wlsBlock = block as BlockWhiteLabelServices;
            const services = wlsBlock.services
              ? wlsBlock.services.map((s) => ({
                  title: s.title,
                  description: s.description,
                  icon:
                    resolveMediaUrl(s.icon) ||
                    s.iconSrc ||
                    "/assets/icons/gradient-check.svg",
                  href: s.href,
                  linkLabel: s.linkLabel,
                }))
              : [];

            return (
              <WhiteLabelServicesSection
                key={blockKey}
                ctaLabel={wlsBlock.ctaLabel}
                description={wlsBlock.description}
                eyebrow={wlsBlock.eyebrow}
                idPrefix={wlsBlock.idPrefix}
                services={services}
                showCta={wlsBlock.showCta ?? true}
                title={wlsBlock.title}
              />
            );
          }

          case "white-label-stats": {
            const wlsBlock = block as BlockWhiteLabelStats;
            return (
              <WhiteLabelStatsSection
                key={blockKey}
                stats={wlsBlock.stats || []}
                variant={wlsBlock.variant || "minimal"}
              />
            );
          }

          case "design-reasons-accordion": {
            const draBlock = block as BlockDesignReasonsAccordion;
            return (
              <DesignReasonsSection
                key={blockKey}
                description={draBlock.description}
                items={draBlock.items || []}
                title={draBlock.title}
              />
            );
          }

          case "text-box": {
            const tbBlock = block as BlockTextBox;
            const paragraphs =
              tbBlock.paragraphs && tbBlock.paragraphs.length > 0
                ? tbBlock.paragraphs.map((p) =>
                    typeof p === "string" ? p : p.text || "",
                  )
                : undefined;
            const listItems =
              tbBlock.listItems && tbBlock.listItems.length > 0
                ? tbBlock.listItems.map((li) =>
                    typeof li === "string" ? li : li.text || "",
                  )
                : undefined;

            return (
              <TextBoxSection
                key={blockKey}
                heading={tbBlock.heading}
                listItems={listItems}
                paragraphs={paragraphs}
                subheading={tbBlock.subheading}
                variant={tbBlock.variant}
              />
            );
          }

          case "recent-architecture-patterns": {
            const rapBlock = block as BlockRecentArchitecturePatterns;
            return (
              <RecentArchitecturePatternsSection
                key={blockKey}
                content={{
                  eyebrow: rapBlock.eyebrow,
                  heading: rapBlock.heading,
                  description: rapBlock.description,
                  items: rapBlock.items || [],
                }}
              />
            );
          }

          case "technologies-work-with": {
            const twwBlock = block as BlockTechnologiesWorkWith;
            return (
              <TechnologiesWorkWithSection
                key={blockKey}
                content={{
                  eyebrow: twwBlock.eyebrow,
                  heading: twwBlock.heading,
                  description: twwBlock.description,
                  categories: (twwBlock.categories || []).map((category) => ({
                    category: category.category,
                    technologies: (category.technologies || [])
                      .map((technology) =>
                        typeof technology === "string" ? technology : technology.text || "",
                      )
                      .filter(Boolean),
                  })),
                }}
              />
            );
          }

          case "services-case-studies": {
            const scsBlock = block as BlockServicesCaseStudies;
            return (
              <ServicesCaseStudiesSection
                key={blockKey}
                description={scsBlock.description}
                eyebrow={scsBlock.eyebrow}
                heading={scsBlock.heading}
                items={(scsBlock.items || []).map((item) => ({
                  title: item.title,
                  href: item.href,
                  image: resolveMediaUrl(item.image) || item.imageSrc || "",
                  imageAlt: item.imageAlt || item.title,
                  technology: item.technology,
                  industry: item.industry,
                  tags: (item.tags || [])
                    .map((tag) => (typeof tag === "string" ? tag : tag.text || ""))
                    .filter(Boolean),
                  ctaLabel: item.ctaLabel,
                }))}
              />
            );
          }

          case "ai-services-grid": {
            const asgBlock = block as BlockAiServicesGrid;
            return (
              <AiServicesGridSection
                key={blockKey}
                content={{
                  id: typeof asgBlock.id === "string" ? asgBlock.id : undefined,
                  eyebrow: asgBlock.eyebrow,
                  heading: asgBlock.heading,
                  description: asgBlock.description,
                  items: asgBlock.items || [],
                }}
              />
            );
          }

          case "tech-keyword": {
            const tkBlock = block as BlockTechKeyword;
            return (
              <TechKeywordSection
                key={blockKey}
                content={{
                  eyebrow: tkBlock.eyebrow,
                  heading: tkBlock.heading,
                  introText: tkBlock.introText,
                  highlightedText: tkBlock.highlightedText,
                  bodyText: tkBlock.bodyText,
                }}
              />
            );
          }

          case "pill-list": {
            const plBlock = block as BlockPillList;
            const items = plBlock.items
              ? plBlock.items.map((i) =>
                  typeof i === "string" ? i : i.text || "",
                )
              : [];

            return (
              <PillListSection
                key={blockKey}
                content={{
                  heading: plBlock.heading,
                  description: plBlock.description,
                  items,
                }}
              />
            );
          }

          case "shopify-reasons": {
            const srBlock = block as BlockShopifyReasons;
            const items =
              srBlock.items && srBlock.items.length > 0
                ? srBlock.items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    icon:
                      resolveMediaUrl(item.icon) ||
                      item.iconSrc ||
                      "/assets/icons/gradient-check.svg",
                    iconAlt: item.iconAlt || "",
                  }))
                : [];

            return (
              <ShopifyReasonsSection
                key={blockKey}
                carouselFullBleed={srBlock.carouselFullBleed ?? true}
                content={{
                  heading: srBlock.heading,
                  description: srBlock.description,
                  items,
                }}
                layout={srBlock.layout || "carousel"}
              />
            );
          }

          case "shopify-theme-tech": {
            const sttBlock = block as BlockShopifyThemeTech;
            const items =
              sttBlock.items && sttBlock.items.length > 0
                ? sttBlock.items.map((item) => ({
                    name: item.name,
                    title: item.title,
                    icon: resolveMediaUrl(item.icon) || item.iconSrc || "",
                    image: resolveMediaUrl(item.image) || "",
                    alt: item.alt || item.name || item.title || "",
                    gradient: item.gradient,
                  }))
                : [];

            return (
              <ShopifyThemeTechSection
                key={blockKey}
                columns={sttBlock.columns === "5" ? 5 : 3}
                content={{
                  title: sttBlock.title,
                  subtitle: sttBlock.subtitle,
                  bottomDescription: sttBlock.bottomDescription,
                  items,
                }}
              />
            );
          }

          case "theme-why-choose": {
            const twcBlock = block as BlockThemeWhyChoose;
            const items =
              twcBlock.items && twcBlock.items.length > 0
                ? twcBlock.items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    icon:
                      resolveMediaUrl(item.icon) ||
                      item.iconSrc ||
                      "/assets/icons/gradient-check.svg",
                    iconAlt: item.iconAlt || "",
                  }))
                : [];

            return (
              <ThemeWhyChooseSection
                key={blockKey}
                backgroundVariant={twcBlock.backgroundVariant || "gradient"}
                content={{
                  title: twcBlock.title,
                  subtitle: twcBlock.subtitle,
                  items,
                }}
              />
            );
          }

          case "lets-build": {
            const lbBlock = block as BlockLetsBuild;
            return (
              <LetsBuildSection
                key={blockKey}
                content={{
                  heading: lbBlock.heading,
                  description: lbBlock.description,
                  ctaLabel: lbBlock.ctaLabel,
                  ctaHref: lbBlock.ctaHref,
                }}
              />
            );
          }

          case "migration-process": {
            const mpBlock = block as BlockMigrationProcess;
            const steps = (mpBlock.steps ?? []).map((step) => ({
              stepNumber: step.stepNumber,
              title: step.title,
              description: step.description,
              subBoxes: step.subBoxes?.map((box) => ({
                title: box.title || undefined,
                description: box.description || undefined,
                items: box.items
                  ?.map((it) => (typeof it === "string" ? it : it?.text || ""))
                  .filter(Boolean),
              })),
              categories: step.categories?.map((cat) => ({
                title: cat.title,
                items:
                  cat.items
                    ?.map((it) =>
                      typeof it === "string" ? it : it?.text || "",
                    )
                    .filter(Boolean) ?? [],
              })),
            }));

            return (
              <MigrationProcessSection
                key={blockKey}
                content={{
                  eyebrow: mpBlock.eyebrow || undefined,
                  heading: mpBlock.heading,
                  description: mpBlock.description || undefined,
                  steps,
                }}
                id={mpBlock.sectionId || (mpBlock.id ? String(mpBlock.id) : "migration-process")}
                variant={mpBlock.variant || "cards"}
              />
            );
          }

          default: {
            if (process.env.NODE_ENV !== "production") {
              console.warn(`Unrecognized dynamic block type: ${rawType}`);
            }
            return null;
          }
        }
      })}
    </>
  );
}

export const RenderBlocks = BlockRenderer;
export type RenderBlocksProps = BlockRendererProps;
