import type { CollectionConfig } from "payload";
import { HeroBlock } from "@/payload/blocks/HeroBlock";
import { ProofCountersBlock } from "@/payload/blocks/ProofCountersBlock";
import { FeaturesGridBlock } from "@/payload/blocks/FeaturesGridBlock";
import { ProcessTimelineBlock } from "@/payload/blocks/ProcessTimelineBlock";
import { FaqAccordionBlock } from "@/payload/blocks/FaqAccordionBlock";
import { HappyClientsBlock } from "@/payload/blocks/HappyClientsBlock";
import { CaseStudiesBlock } from "@/payload/blocks/CaseStudiesBlock";
import { CtaBannerBlock } from "@/payload/blocks/CtaBannerBlock";
import { BrandPartnersBlock } from "@/payload/blocks/BrandPartnersBlock";
import { PricingModelsBlock } from "@/payload/blocks/PricingModelsBlock";
import { TechnologiesGridBlock } from "@/payload/blocks/TechnologiesGridBlock";
import { TwoColImageWithTextBlock } from "@/payload/blocks/TwoColImageWithTextBlock";
import { IndustriesGridBlock } from "@/payload/blocks/IndustriesGridBlock";
import { LegalContentBlock } from "@/payload/blocks/LegalContentBlock";
import { SiteMapDirectoryBlock } from "@/payload/blocks/SiteMapDirectoryBlock";
import { RichTextBlock } from "@/payload/blocks/RichTextBlock";
import { ShopifyPlusAgencyBlock } from "@/payload/blocks/ShopifyPlusAgencyBlock";
import { WhiteLabelPartnerBlock } from "@/payload/blocks/WhiteLabelPartnerBlock";
import { CommerceSolutionsBlock } from "@/payload/blocks/CommerceSolutionsBlock";
import { SelectedWorkBlock } from "@/payload/blocks/SelectedWorkBlock";
import { TestimonialsCarouselBlock } from "@/payload/blocks/TestimonialsCarouselBlock";
import { IntegrationsPartnersBlock } from "@/payload/blocks/IntegrationsPartnersBlock";
import { LatestInsightsBlock } from "@/payload/blocks/LatestInsightsBlock";
import { AboutHeroBlock } from "@/payload/blocks/AboutHeroBlock";
import { AboutStoryBlock } from "@/payload/blocks/AboutStoryBlock";
import { AboutTimelineBlock } from "@/payload/blocks/AboutTimelineBlock";
import { AboutFoundersBlock } from "@/payload/blocks/AboutFoundersBlock";
import { AboutTeamBlock } from "@/payload/blocks/AboutTeamBlock";
import { AboutValuesBlock } from "@/payload/blocks/AboutValuesBlock";
import { LifeHeroBlock } from "@/payload/blocks/LifeHeroBlock";
import { WorkCultureBlock } from "@/payload/blocks/WorkCultureBlock";
import { LifeHiringBlock } from "@/payload/blocks/LifeHiringBlock";
import { LifeGalleryBlock } from "@/payload/blocks/LifeGalleryBlock";
import { OurWorkHeroBlock } from "@/payload/blocks/OurWorkHeroBlock";
import { OurWorkProjectsBlock } from "@/payload/blocks/OurWorkProjectsBlock";
import { OurWorkCaseStudiesBlock } from "@/payload/blocks/OurWorkCaseStudiesBlock";
import { ContactHeroBlock } from "@/payload/blocks/ContactHeroBlock";
import { ContactFormBlock } from "@/payload/blocks/ContactFormBlock";
import { ContactOfficesBlock } from "@/payload/blocks/ContactOfficesBlock";
import { ContactDetailsBlock } from "@/payload/blocks/ContactDetailsBlock";
import { DiscoveryCallBlock } from "@/payload/blocks/DiscoveryCallBlock";
import { RequestQuoteHeroBlock } from "@/payload/blocks/RequestQuoteHeroBlock";
import { CareerHeroBlock } from "@/payload/blocks/CareerHeroBlock";
import { CareerOpportunitiesBlock } from "@/payload/blocks/CareerOpportunitiesBlock";
import { CareerPerksBlock } from "@/payload/blocks/CareerPerksBlock";
import { CareerApplyBlock } from "@/payload/blocks/CareerApplyBlock";
import { ServiceHeroVideoBlock } from "@/payload/blocks/ServiceHeroVideoBlock";
import { IndustryBrandsBlock } from "@/payload/blocks/IndustryBrandsBlock";
import { ShopifyPlusProofBlock } from "@/payload/blocks/ShopifyPlusProofBlock";
import { PortfolioShowcaseBlock } from "@/payload/blocks/PortfolioShowcaseBlock";
import { ShopifyStageServicesBlock } from "@/payload/blocks/ShopifyStageServicesBlock";
import { CaseStudyCardsBlock } from "@/payload/blocks/CaseStudyCardsBlock";
import { EvaluationFrameworkBlock } from "@/payload/blocks/EvaluationFrameworkBlock";
import { ShopifyTeamBoxesBlock } from "@/payload/blocks/ShopifyTeamBoxesBlock";
import { ShopifyHorizontalProcessBlock } from "@/payload/blocks/ShopifyHorizontalProcessBlock";
import { VerifiedKnowledgeBlock } from "@/payload/blocks/VerifiedKnowledgeBlock";
import { CredentialEvidenceBlock } from "@/payload/blocks/CredentialEvidenceBlock";
import { CredentialTabsBlock } from "@/payload/blocks/CredentialTabsBlock";
import { CertifiedAgencySupportBlock } from "@/payload/blocks/CertifiedAgencySupportBlock";
import { CertifiedServicesBlock } from "@/payload/blocks/CertifiedServicesBlock";
import { PartnerDirectoryProofBlock } from "@/payload/blocks/PartnerDirectoryProofBlock";
import { WhiteLabelFinalCtaBlock } from "@/payload/blocks/WhiteLabelFinalCtaBlock";
import { ShopifyMigrationServicesBlock } from "@/payload/blocks/ShopifyMigrationServicesBlock";
import { ShopifyMigrationNumberedGridBlock } from "@/payload/blocks/ShopifyMigrationNumberedGridBlock";
import { SeoSafeMigrationBlock } from "@/payload/blocks/SeoSafeMigrationBlock";
import { WhyChooseShopifyMigrationBlock } from "@/payload/blocks/WhyChooseShopifyMigrationBlock";
import { ThemeCustomizationServicesBlock } from "@/payload/blocks/ThemeCustomizationServicesBlock";
import { ThemeCustomizationApproachBlock } from "@/payload/blocks/ThemeCustomizationApproachBlock";
import { ShopifyThemesGridBlock } from "@/payload/blocks/ShopifyThemesGridBlock";
import { AiEmpoweredDeliveryBlock } from "@/payload/blocks/AiEmpoweredDeliveryBlock";
import { ShopifyCroBarriersBlock } from "@/payload/blocks/ShopifyCroBarriersBlock";
import { ShopifyCroRevenueImpactBlock } from "@/payload/blocks/ShopifyCroRevenueImpactBlock";
import { ShopifyCroServicesBlock } from "@/payload/blocks/ShopifyCroServicesBlock";
import { ShopifyCroAssessmentBlock } from "@/payload/blocks/ShopifyCroAssessmentBlock";
import { ShopifyCroProcessBlock } from "@/payload/blocks/ShopifyCroProcessBlock";
import { ShopifyCroWhyBlock } from "@/payload/blocks/ShopifyCroWhyBlock";
import { ShopifyCroEngagementBlock } from "@/payload/blocks/ShopifyCroEngagementBlock";
import { ShopifyMobileAppHeroBlock } from "@/payload/blocks/ShopifyMobileAppHeroBlock";
import { WhiteLabelCounterBlock } from "@/payload/blocks/WhiteLabelCounterBlock";
import { ShopifyMobileAppDtcBlock } from "@/payload/blocks/ShopifyMobileAppDtcBlock";
import { ShopifyMobileAppWorkBlock } from "@/payload/blocks/ShopifyMobileAppWorkBlock";
import { ShopifyMobileAppComparisonBlock } from "@/payload/blocks/ShopifyMobileAppComparisonBlock";
import { ShopifyMobileAppExperienceBlock } from "@/payload/blocks/ShopifyMobileAppExperienceBlock";
import { WhiteLabelProcessBlock } from "@/payload/blocks/WhiteLabelProcessBlock";
import { AgencyServicesBlock } from "@/payload/blocks/AgencyServicesBlock";
import { CityPageCounterBlock } from "@/payload/blocks/CityPageCounterBlock";
import { ShopifyTeamBehindItBlock } from "@/payload/blocks/ShopifyTeamBehindItBlock";
import { CityWhyChooseBoxesBlock } from "@/payload/blocks/CityWhyChooseBoxesBlock";
import { ShopifyHoursHeroBlock } from "@/payload/blocks/ShopifyHoursHeroBlock";
import { ShopifyHoursComparisonBlock } from "@/payload/blocks/ShopifyHoursComparisonBlock";
import { ShopifyHoursTasksBlock } from "@/payload/blocks/ShopifyHoursTasksBlock";
import { NumberedProcessTimelineBlock } from "@/payload/blocks/NumberedProcessTimelineBlock";
import { ShopifyAppsHeroBlock } from "@/payload/blocks/ShopifyAppsHeroBlock";
import { ShopifyAppsGridBlock } from "@/payload/blocks/ShopifyAppsGridBlock";
import { ShopifyAppBenefitsBlock } from "@/payload/blocks/ShopifyAppBenefitsBlock";
import { ShopifyAppFeaturesBlock } from "@/payload/blocks/ShopifyAppFeaturesBlock";
import { ShopifyAppProcessBlock } from "@/payload/blocks/ShopifyAppProcessBlock";
import { RisksShopifyTopicsBlock } from "@/payload/blocks/RisksShopifyTopicsBlock";
import { ImageCtaBlock } from "@/payload/blocks/ImageCtaBlock";
import { CityPageHeroBlock } from "@/payload/blocks/CityPageHeroBlock";
import { ShopifySupportScenariosBlock } from "@/payload/blocks/ShopifySupportScenariosBlock";
import { DeliveryModelComparisonBlock } from "@/payload/blocks/DeliveryModelComparisonBlock";
import { WhiteLabelToolsBlock } from "@/payload/blocks/WhiteLabelToolsBlock";
import { HowAgenciesUseBlock } from "@/payload/blocks/HowAgenciesUseBlock";
import { WhiteLabelWhyBlock } from "@/payload/blocks/WhiteLabelWhyBlock";
import { WhiteLabelServicesBlock } from "@/payload/blocks/WhiteLabelServicesBlock";
import { WhiteLabelStatsBlock } from "@/payload/blocks/WhiteLabelStatsBlock";
import { DesignReasonsAccordionBlock } from "@/payload/blocks/DesignReasonsAccordionBlock";
import { TextBoxBlock } from "@/payload/blocks/TextBoxBlock";
import { RecentArchitecturePatternsBlock } from "@/payload/blocks/RecentArchitecturePatternsBlock";
import { AiServicesGridBlock } from "@/payload/blocks/AiServicesGridBlock";
import { TechKeywordBlock } from "@/payload/blocks/TechKeywordBlock";
import { PillListBlock } from "@/payload/blocks/PillListBlock";
import { ShopifyReasonsBlock } from "@/payload/blocks/ShopifyReasonsBlock";
import { ShopifyThemeTechBlock } from "@/payload/blocks/ShopifyThemeTechBlock";
import { ThemeWhyChooseBlock } from "@/payload/blocks/ThemeWhyChooseBlock";
import { LetsBuildBlock } from "@/payload/blocks/LetsBuildBlock";
import { TechnologiesWorkWithBlock } from "@/payload/blocks/TechnologiesWorkWithBlock";
import { ServicesCaseStudiesBlock } from "@/payload/blocks/ServicesCaseStudiesBlock";
import { MigrationProcessBlock } from "@/payload/blocks/MigrationProcessBlock";
import { previewDraftPath } from "@/lib/preview-url";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const rawSlug = typeof data?.slug === "string" ? data.slug.trim() : "";
        const slug = rawSlug.replace(/^\/+|\/+$/g, "");
        const path = !slug || slug === "home" || slug === "index" ? "/" : `/${slug}`;
        return previewDraftPath(path, slug || "home");
      },
    },
    preview: (doc) => {
      const rawSlug = typeof doc?.slug === "string" ? doc.slug.trim() : "";
      const slug = rawSlug.replace(/^\/+|\/+$/g, "");
      const path = !slug || slug === "home" || slug === "index" ? "/" : `/${slug}`;
      return previewDraftPath(path, slug || "home");
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        if (doc?.slug) {
          const routePath =
            doc.slug === "home" || doc.slug === "index" ? "/" : `/${doc.slug}`;
          safeRevalidatePath(routePath);
        }
        if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
          const prevRoutePath =
            previousDoc.slug === "home" || previousDoc.slug === "index"
              ? "/"
              : `/${previousDoc.slug}`;
          safeRevalidatePath(prevRoutePath);
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        if (doc?.slug) {
          const routePath =
            doc.slug === "home" || doc.slug === "index" ? "/" : `/${doc.slug}`;
          safeRevalidatePath(routePath);
        }
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "sections",
      type: "blocks",
      label: "Page Layout Sections (Drag & Drop)",
      blocks: [
        HeroBlock,
        ProofCountersBlock,
        FeaturesGridBlock,
        ProcessTimelineBlock,
        FaqAccordionBlock,
        HappyClientsBlock,
        CaseStudiesBlock,
        CtaBannerBlock,
        BrandPartnersBlock,
        PricingModelsBlock,
        TechnologiesGridBlock,
        TwoColImageWithTextBlock,
        IndustriesGridBlock,
        LegalContentBlock,
        SiteMapDirectoryBlock,
        RichTextBlock,
        ShopifyPlusAgencyBlock,
        WhiteLabelPartnerBlock,
        CommerceSolutionsBlock,
        SelectedWorkBlock,
        TestimonialsCarouselBlock,
        IntegrationsPartnersBlock,
        LatestInsightsBlock,
        AboutHeroBlock,
        AboutStoryBlock,
        AboutTimelineBlock,
        AboutFoundersBlock,
        AboutTeamBlock,
        AboutValuesBlock,
        LifeHeroBlock,
        WorkCultureBlock,
        LifeHiringBlock,
        LifeGalleryBlock,
        OurWorkHeroBlock,
        OurWorkProjectsBlock,
        OurWorkCaseStudiesBlock,
        ContactHeroBlock,
        ContactFormBlock,
        ContactOfficesBlock,
        ContactDetailsBlock,
        DiscoveryCallBlock,
        RequestQuoteHeroBlock,
        CareerHeroBlock,
        CareerOpportunitiesBlock,
        CareerPerksBlock,
        CareerApplyBlock,
        ServiceHeroVideoBlock,
        IndustryBrandsBlock,
        ShopifyPlusProofBlock,
        PortfolioShowcaseBlock,
        ShopifyStageServicesBlock,
        CaseStudyCardsBlock,
        EvaluationFrameworkBlock,
        ShopifyTeamBoxesBlock,
        ShopifyHorizontalProcessBlock,
        VerifiedKnowledgeBlock,
        CredentialEvidenceBlock,
        CredentialTabsBlock,
        CertifiedAgencySupportBlock,
        CertifiedServicesBlock,
        PartnerDirectoryProofBlock,
        WhiteLabelFinalCtaBlock,
        ShopifyMigrationServicesBlock,
        ShopifyMigrationNumberedGridBlock,
        SeoSafeMigrationBlock,
        WhyChooseShopifyMigrationBlock,
        ThemeCustomizationServicesBlock,
        ThemeCustomizationApproachBlock,
        ShopifyThemesGridBlock,
        AiEmpoweredDeliveryBlock,
        ShopifyCroBarriersBlock,
        ShopifyCroRevenueImpactBlock,
        ShopifyCroServicesBlock,
        ShopifyCroAssessmentBlock,
        ShopifyCroProcessBlock,
        ShopifyCroWhyBlock,
        ShopifyCroEngagementBlock,
        ShopifyMobileAppHeroBlock,
        WhiteLabelCounterBlock,
        ShopifyMobileAppDtcBlock,
        ShopifyMobileAppWorkBlock,
        ShopifyMobileAppComparisonBlock,
        ShopifyMobileAppExperienceBlock,
        WhiteLabelProcessBlock,
        AgencyServicesBlock,
        CityPageCounterBlock,
        ShopifyTeamBehindItBlock,
        CityWhyChooseBoxesBlock,
        ShopifyHoursHeroBlock,
        ShopifyHoursComparisonBlock,
        ShopifyHoursTasksBlock,
        NumberedProcessTimelineBlock,
        ShopifyAppsHeroBlock,
        ShopifyAppsGridBlock,
        ShopifyAppBenefitsBlock,
        ShopifyAppFeaturesBlock,
        ShopifyAppProcessBlock,
        RisksShopifyTopicsBlock,
        ImageCtaBlock,
        CityPageHeroBlock,
        ShopifySupportScenariosBlock,
        DeliveryModelComparisonBlock,
        WhiteLabelToolsBlock,
        HowAgenciesUseBlock,
        WhiteLabelWhyBlock,
        WhiteLabelServicesBlock,
        WhiteLabelStatsBlock,
        DesignReasonsAccordionBlock,
        TextBoxBlock,
        RecentArchitecturePatternsBlock,
        AiServicesGridBlock,
        TechKeywordBlock,
        PillListBlock,
        ShopifyReasonsBlock,
        ShopifyThemeTechBlock,
        ThemeWhyChooseBlock,
        LetsBuildBlock,
        TechnologiesWorkWithBlock,
        ServicesCaseStudiesBlock,
        MigrationProcessBlock,
      ],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "canonicalUrl", type: "text" },
        { name: "metaImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
