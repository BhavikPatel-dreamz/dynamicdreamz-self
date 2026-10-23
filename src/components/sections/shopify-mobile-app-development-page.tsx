import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { ShopifyMobileAppHeroSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import { ShopifyMobileAppDtcSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-dtc-section";
import { ShopifyMobileAppWorkSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import { ShopifyMobileAppComparisonSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-comparison-section";
import { ShopifyMobileAppExperienceSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section";
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
        
        items={shopifyMobileAppDevelopmentFaqs}
      />
    </div>
  );
}
