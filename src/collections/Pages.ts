import type { CollectionConfig } from "payload";
import { HeroBlock } from "@/blocks/HeroBlock";
import { ProofCountersBlock } from "@/blocks/ProofCountersBlock";
import { FeaturesGridBlock } from "@/blocks/FeaturesGridBlock";
import { ProcessTimelineBlock } from "@/blocks/ProcessTimelineBlock";
import { FaqAccordionBlock } from "@/blocks/FaqAccordionBlock";
import { HappyClientsBlock } from "@/blocks/HappyClientsBlock";
import { CaseStudiesBlock } from "@/blocks/CaseStudiesBlock";
import { CtaBannerBlock } from "@/blocks/CtaBannerBlock";
import { BrandPartnersBlock } from "@/blocks/BrandPartnersBlock";
import { PricingModelsBlock } from "@/blocks/PricingModelsBlock";
import { TechnologiesGridBlock } from "@/blocks/TechnologiesGridBlock";
import { TwoColImageWithTextBlock } from "@/blocks/TwoColImageWithTextBlock";
import { IndustriesGridBlock } from "@/blocks/IndustriesGridBlock";
import { LegalContentBlock } from "@/blocks/LegalContentBlock";
import { SiteMapDirectoryBlock } from "@/blocks/SiteMapDirectoryBlock";
import { RichTextBlock } from "@/blocks/RichTextBlock";
import { ShopifyPlusAgencyBlock } from "@/blocks/ShopifyPlusAgencyBlock";
import { WhiteLabelPartnerBlock } from "@/blocks/WhiteLabelPartnerBlock";
import { CommerceSolutionsBlock } from "@/blocks/CommerceSolutionsBlock";
import { SelectedWorkBlock } from "@/blocks/SelectedWorkBlock";
import { TestimonialsCarouselBlock } from "@/blocks/TestimonialsCarouselBlock";
import { IntegrationsPartnersBlock } from "@/blocks/IntegrationsPartnersBlock";
import { LatestInsightsBlock } from "@/blocks/LatestInsightsBlock";
import { AboutHeroBlock } from "@/blocks/AboutHeroBlock";
import { AboutStoryBlock } from "@/blocks/AboutStoryBlock";
import { AboutTimelineBlock } from "@/blocks/AboutTimelineBlock";
import { AboutFoundersBlock } from "@/blocks/AboutFoundersBlock";
import { AboutTeamBlock } from "@/blocks/AboutTeamBlock";
import { AboutValuesBlock } from "@/blocks/AboutValuesBlock";
import { OurWorkHeroBlock } from "@/blocks/OurWorkHeroBlock";
import { OurWorkProjectsBlock } from "@/blocks/OurWorkProjectsBlock";
import { OurWorkCaseStudiesBlock } from "@/blocks/OurWorkCaseStudiesBlock";
import { ContactHeroBlock } from "@/blocks/ContactHeroBlock";
import { ContactFormBlock } from "@/blocks/ContactFormBlock";
import { ContactOfficesBlock } from "@/blocks/ContactOfficesBlock";
import { ContactDetailsBlock } from "@/blocks/ContactDetailsBlock";
import { DiscoveryCallBlock } from "@/blocks/DiscoveryCallBlock";
import { RequestQuoteHeroBlock } from "@/blocks/RequestQuoteHeroBlock";
import { CareerHeroBlock } from "@/blocks/CareerHeroBlock";
import { CareerOpportunitiesBlock } from "@/blocks/CareerOpportunitiesBlock";
import { CareerPerksBlock } from "@/blocks/CareerPerksBlock";
import { CareerApplyBlock } from "@/blocks/CareerApplyBlock";
import { ServiceHeroVideoBlock } from "@/blocks/ServiceHeroVideoBlock";
import { IndustryBrandsBlock } from "@/blocks/IndustryBrandsBlock";
import { ShopifyPlusProofBlock } from "@/blocks/ShopifyPlusProofBlock";
import { PortfolioShowcaseBlock } from "@/blocks/PortfolioShowcaseBlock";
import { ShopifyStageServicesBlock } from "@/blocks/ShopifyStageServicesBlock";
import { CaseStudyCardsBlock } from "@/blocks/CaseStudyCardsBlock";
import { EvaluationFrameworkBlock } from "@/blocks/EvaluationFrameworkBlock";
import { ShopifyTeamBoxesBlock } from "@/blocks/ShopifyTeamBoxesBlock";
import { ShopifyHorizontalProcessBlock } from "@/blocks/ShopifyHorizontalProcessBlock";
import { VerifiedKnowledgeBlock } from "@/blocks/VerifiedKnowledgeBlock";
import { CredentialEvidenceBlock } from "@/blocks/CredentialEvidenceBlock";
import { CredentialTabsBlock } from "@/blocks/CredentialTabsBlock";
import { CertifiedAgencySupportBlock } from "@/blocks/CertifiedAgencySupportBlock";
import { CertifiedServicesBlock } from "@/blocks/CertifiedServicesBlock";
import { PartnerDirectoryProofBlock } from "@/blocks/PartnerDirectoryProofBlock";
import { WhiteLabelFinalCtaBlock } from "@/blocks/WhiteLabelFinalCtaBlock";
import { ShopifyMigrationServicesBlock } from "@/blocks/ShopifyMigrationServicesBlock";
import { ShopifyMigrationNumberedGridBlock } from "@/blocks/ShopifyMigrationNumberedGridBlock";
import { SeoSafeMigrationBlock } from "@/blocks/SeoSafeMigrationBlock";
import { WhyChooseShopifyMigrationBlock } from "@/blocks/WhyChooseShopifyMigrationBlock";
import { ThemeCustomizationServicesBlock } from "@/blocks/ThemeCustomizationServicesBlock";
import { ThemeCustomizationApproachBlock } from "@/blocks/ThemeCustomizationApproachBlock";
import { ShopifyThemesGridBlock } from "@/blocks/ShopifyThemesGridBlock";
import { AiEmpoweredDeliveryBlock } from "@/blocks/AiEmpoweredDeliveryBlock";
import { ShopifyCroBarriersBlock } from "@/blocks/ShopifyCroBarriersBlock";
import { ShopifyCroRevenueImpactBlock } from "@/blocks/ShopifyCroRevenueImpactBlock";
import { ShopifyCroServicesBlock } from "@/blocks/ShopifyCroServicesBlock";
import { ShopifyCroAssessmentBlock } from "@/blocks/ShopifyCroAssessmentBlock";
import { ShopifyCroProcessBlock } from "@/blocks/ShopifyCroProcessBlock";
import { ShopifyCroWhyBlock } from "@/blocks/ShopifyCroWhyBlock";
import { ShopifyCroEngagementBlock } from "@/blocks/ShopifyCroEngagementBlock";
import { ShopifyMobileAppHeroBlock } from "@/blocks/ShopifyMobileAppHeroBlock";
import { WhiteLabelCounterBlock } from "@/blocks/WhiteLabelCounterBlock";
import { ShopifyMobileAppDtcBlock } from "@/blocks/ShopifyMobileAppDtcBlock";
import { ShopifyMobileAppWorkBlock } from "@/blocks/ShopifyMobileAppWorkBlock";
import { ShopifyMobileAppComparisonBlock } from "@/blocks/ShopifyMobileAppComparisonBlock";
import { ShopifyMobileAppExperienceBlock } from "@/blocks/ShopifyMobileAppExperienceBlock";
import { WhiteLabelProcessBlock } from "@/blocks/WhiteLabelProcessBlock";
import { AgencyServicesBlock } from "@/blocks/AgencyServicesBlock";
import { CityPageCounterBlock } from "@/blocks/CityPageCounterBlock";
import { ShopifyTeamBehindItBlock } from "@/blocks/ShopifyTeamBehindItBlock";
import { CityWhyChooseBoxesBlock } from "@/blocks/CityWhyChooseBoxesBlock";
import { ShopifyHoursHeroBlock } from "@/blocks/ShopifyHoursHeroBlock";
import { ShopifyHoursComparisonBlock } from "@/blocks/ShopifyHoursComparisonBlock";
import { ShopifyHoursTasksBlock } from "@/blocks/ShopifyHoursTasksBlock";
import { NumberedProcessTimelineBlock } from "@/blocks/NumberedProcessTimelineBlock";
import { ShopifyAppsHeroBlock } from "@/blocks/ShopifyAppsHeroBlock";
import { ShopifyAppsGridBlock } from "@/blocks/ShopifyAppsGridBlock";
import { ShopifyAppBenefitsBlock } from "@/blocks/ShopifyAppBenefitsBlock";
import { ShopifyAppFeaturesBlock } from "@/blocks/ShopifyAppFeaturesBlock";
import { ShopifyAppProcessBlock } from "@/blocks/ShopifyAppProcessBlock";
import { RisksShopifyTopicsBlock } from "@/blocks/RisksShopifyTopicsBlock";
import { ImageCtaBlock } from "@/blocks/ImageCtaBlock";
import { CityPageHeroBlock } from "@/blocks/CityPageHeroBlock";
import { ShopifySupportScenariosBlock } from "@/blocks/ShopifySupportScenariosBlock";
import { DeliveryModelComparisonBlock } from "@/blocks/DeliveryModelComparisonBlock";
import { WhiteLabelToolsBlock } from "@/blocks/WhiteLabelToolsBlock";
import { HowAgenciesUseBlock } from "@/blocks/HowAgenciesUseBlock";
import { WhiteLabelWhyBlock } from "@/blocks/WhiteLabelWhyBlock";
import { WhiteLabelServicesBlock } from "@/blocks/WhiteLabelServicesBlock";
import { WhiteLabelStatsBlock } from "@/blocks/WhiteLabelStatsBlock";
import { DesignReasonsAccordionBlock } from "@/blocks/DesignReasonsAccordionBlock";
import { TextBoxBlock } from "@/blocks/TextBoxBlock";
import { RecentArchitecturePatternsBlock } from "@/blocks/RecentArchitecturePatternsBlock";
import { AiServicesGridBlock } from "@/blocks/AiServicesGridBlock";
import { TechKeywordBlock } from "@/blocks/TechKeywordBlock";
import { PillListBlock } from "@/blocks/PillListBlock";
import { ShopifyReasonsBlock } from "@/blocks/ShopifyReasonsBlock";
import { ShopifyThemeTechBlock } from "@/blocks/ShopifyThemeTechBlock";
import { ThemeWhyChooseBlock } from "@/blocks/ThemeWhyChooseBlock";
import { LetsBuildBlock } from "@/blocks/LetsBuildBlock";
import { TechnologiesWorkWithBlock } from "@/blocks/TechnologiesWorkWithBlock";
import { ServicesCaseStudiesBlock } from "@/blocks/ServicesCaseStudiesBlock";
import { MigrationProcessBlock } from "@/blocks/MigrationProcessBlock";
import { safeRevalidatePath } from "@/lib/revalidate";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
        return `${baseUrl}/api/draft?secret=${process.env.PAYLOAD_SECRET || ""}&slug=${data.slug || ""}`;
      },
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
