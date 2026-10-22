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
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
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

