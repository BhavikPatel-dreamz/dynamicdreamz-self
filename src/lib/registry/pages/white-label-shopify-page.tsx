import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { WhiteLabelWhySection } from "@/components/blocks/TrustStatsBarBlock";
import { WhiteLabelToolsSection } from "@/components/blocks/TechStackShowcaseBlock";
import { DeliveryModelComparisonSection } from "@/components/blocks/EngagementModelsBlock";
import { HowAgenciesUseSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { ShopifySupportScenariosSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { ShopifyTeamBehindItSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import {
  whiteLabelShopifyBrandProtection,
  whiteLabelShopifyCounters,
  whiteLabelShopifyDeliveryComparison,
  whiteLabelShopifyFaqs,
  whiteLabelShopifyHero,
  whiteLabelShopifyPartnershipSteps,
  whiteLabelShopifyPortfolio,
  whiteLabelShopifyPricing,
  whiteLabelShopifyScenarios,
  whiteLabelShopifySectionCopy,
} from "@/content/white-label-shopify-development";

export function WhiteLabelShopifyPage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={whiteLabelShopifyHero} titleAccentTag="i" />

      {/* 2. Stats Counter Section */}
      <WhiteLabelCounterSection counters={whiteLabelShopifyCounters} />

      {/* 3. Brand Protection / Team Behind It */}
      <ShopifyTeamBehindItSection content={whiteLabelShopifyBrandProtection} />

      {/* 4. Scenario Tabs Section */}
      <ShopifySupportScenariosSection content={whiteLabelShopifyScenarios} />

      {/* 5. Portfolio Section */}
      <PortfolioShowcaseSection
        className="pt-0 max-[991px]:pt-0"
        columns={4}
        content={whiteLabelShopifyPortfolio}
        headerLayout="split"
        sectionId="our_work"
        variant="liveGrid"
      />

      {/* 6. Pricing / Engagement Models */}
      <PricingTableSection content={whiteLabelShopifyPricing} />

      {/* 7. Delivery Model Comparison Table */}
      <DeliveryModelComparisonSection content={whiteLabelShopifyDeliveryComparison} />

      {/* 8. Shopify Technologies & Tools Marquee */}
      <WhiteLabelToolsSection />

      {/* 9. Agency Use Cases */}
      <HowAgenciesUseSection />

      {/* 10. Partnership Onboarding Steps */}
      <WhiteLabelWhySection
        eyebrow={whiteLabelShopifySectionCopy.processEyebrow}
        reasons={whiteLabelShopifyPartnershipSteps}
        title={whiteLabelShopifySectionCopy.processTitle}
      />

      {/* 11. Client Stories Video Testimonials */}
      <HappyClientSection
        hasTopPadding={true}
        eyebrow={whiteLabelShopifySectionCopy.testimonialsEyebrow}
      />

      {/* 12. FAQ Accordion */}
      <SplitFaqSection
        description={whiteLabelShopifySectionCopy.faqDescription}
        eyebrow={whiteLabelShopifySectionCopy.faqEyebrow}
        heading={whiteLabelShopifySectionCopy.faqTitle}
        idPrefix="white-label-shopify-faq"
        items={whiteLabelShopifyFaqs}
      />
    </div>
  );
}

