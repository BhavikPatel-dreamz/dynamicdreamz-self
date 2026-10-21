import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ServicesCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { WhiteLabelProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { ShopifyMobileAppHeroSection } from "@/components/blocks/MobileAppInteractiveShowcaseBlock";
import { ShopifyMobileAppDtcSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyMobileAppWorkSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ShopifyMobileAppComparisonSection } from "@/components/blocks/PlatformComparisonTableBlock";
import { ShopifyMobileAppExperienceSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import {
  shopifyMobileAppCaseStudies,
  shopifyMobileAppComparison,
  shopifyMobileAppCounters,
  shopifyMobileAppDevelopmentFaqs,
  shopifyMobileAppDtcBrands,
  shopifyMobileAppExperience,
  shopifyMobileAppExploreWork,
  shopifyMobileAppFaqCopy,
  shopifyMobileAppHero,
  shopifyMobileAppPricing,
  shopifyMobileAppProcess,
} from "@/content/shopify-mobile-app-development";

export function ShopifyMobileAppDevelopmentPage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={shopifyMobileAppHero} />

      {/* 2. Stats / Counters Section */}
      <WhiteLabelCounterSection counters={shopifyMobileAppCounters} />

      {/* 3. DTC Brands / Why Dynamic Dreamz */}
      <ShopifyMobileAppDtcSection content={shopifyMobileAppDtcBrands} />

      {/* 4. Explore Our Work (Portfolio Apps) */}
      <ShopifyMobileAppWorkSection content={shopifyMobileAppExploreWork} />

      {/* 5. Engagement Models / Pricing */}
      <PricingTableSection content={shopifyMobileAppPricing} />

      {/* 6. App Builder vs Custom Development Table */}
      <ShopifyMobileAppComparisonSection content={shopifyMobileAppComparison} />

      {/* 7. Shopping Moments / Experience */}
      <ShopifyMobileAppExperienceSection content={shopifyMobileAppExperience} />

      {/* 8. Case Studies */}
      <ServicesCaseStudiesSection
        eyebrow={shopifyMobileAppCaseStudies.eyebrow}
        heading={shopifyMobileAppCaseStudies.heading}
        description={shopifyMobileAppCaseStudies.description}
        items={shopifyMobileAppCaseStudies.items}
      />

      {/* 9. Process */}
      <WhiteLabelProcessSection
        eyebrow={shopifyMobileAppProcess.eyebrow}
        title={shopifyMobileAppProcess.title}
        description={shopifyMobileAppProcess.description}
        steps={shopifyMobileAppProcess.steps}
        note=""
      />

      {/* 10. FAQs */}
      <SplitFaqSection
        idPrefix="shopify-mobile-app-faq"
        sectionId="shopify-mobile-app-faq-section"
        eyebrow={shopifyMobileAppFaqCopy.eyebrow}
        heading={shopifyMobileAppFaqCopy.heading}
        headingBrClassName="max-[991px]:hidden"
        items={shopifyMobileAppDevelopmentFaqs}
      />
    </div>
  );
}
