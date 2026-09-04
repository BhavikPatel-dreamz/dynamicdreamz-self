import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { WhiteLabelWhySection } from "@/components/sections/white-label/white-label-proof-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { DeliveryModelComparisonSection } from "@/components/sections/white-label-shopify/delivery-model-comparison-section";
import { HowAgenciesUseSection } from "@/components/sections/white-label-shopify/how-agencies-use-section";
import { ShopifySupportScenariosSection } from "@/components/sections/white-label-shopify/shopify-support-scenarios-section";
import { ShopifyTeamBehindItSection } from "@/components/sections/white-label-shopify/shopify-team-behind-it-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { WhiteLabelShopifyHeroSection } from "@/components/sections/white-label-shopify/white-label-shopify-hero-section";
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
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <WhiteLabelShopifyHeroSection content={whiteLabelShopifyHero} />

      {/* 2. Stats Counter Section */}
      <WhiteLabelCounterSection counters={whiteLabelShopifyCounters} />

      {/* 3. Scenario Tabs Section */}
      <ShopifySupportScenariosSection content={whiteLabelShopifyScenarios} />

      {/* 4. Portfolio Section */}
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-12.5"
        columns={4}
        content={whiteLabelShopifyPortfolio}
        headerLayout="split"
        variant="liveGrid"
      />

      {/* 5. Pricing / Engagement Models */}
      <PricingTableSection content={whiteLabelShopifyPricing} />

      {/* 6. Delivery Model Comparison Table */}
      <DeliveryModelComparisonSection content={whiteLabelShopifyDeliveryComparison} />

      {/* 7. Brand Protection / Team Behind It */}
      <ShopifyTeamBehindItSection content={whiteLabelShopifyBrandProtection} />

      {/* 8. Shopify Technologies & Tools Marquee */}
      <WhiteLabelToolsSection
        eyebrow={whiteLabelShopifySectionCopy.toolsEyebrow}
      />

      {/* 9. Agency Use Cases */}
      <HowAgenciesUseSection />

      {/* 10. Partnership Onboarding Steps */}
      <WhiteLabelWhySection
        eyebrow={whiteLabelShopifySectionCopy.processEyebrow}
        reasons={whiteLabelShopifyPartnershipSteps}
        title={whiteLabelShopifySectionCopy.processTitle}
      />

      {/* 11. Client Stories Video Testimonials */}
      <HappyClientSection eyebrow={whiteLabelShopifySectionCopy.testimonialsEyebrow} />

      {/* 12. FAQ Accordion */}
      <SplitFaqSection
        answerClassName="!text-base !leading-[28px] max-[767px]:!text-sm max-[767px]:!leading-6 font-medium text-[#535353]"
        description={whiteLabelShopifySectionCopy.faqDescription}
        eyebrow={whiteLabelShopifySectionCopy.faqEyebrow}
        heading={whiteLabelShopifySectionCopy.faqTitle}
        idPrefix="white-label-shopify-faq"
        items={whiteLabelShopifyFaqs}
      />
    </div>
  );
}

