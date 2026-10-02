import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyCroAssessmentSection } from "@/components/sections/shopify-cro/shopify-cro-assessment-section";
import { ShopifyCroBarriersSection } from "@/components/sections/shopify-cro/shopify-cro-barriers-section";
import { ShopifyCroEngagementSection } from "@/components/sections/shopify-cro/shopify-cro-engagement-section";
import { ShopifyCroProcessSection } from "@/components/sections/shopify-cro/shopify-cro-process-section";
import { ShopifyCroRevenueImpactSection } from "@/components/sections/shopify-cro/shopify-cro-revenue-impact-section";
import { ShopifyCroServicesSection } from "@/components/sections/shopify-cro/shopify-cro-services-section";
import { ShopifyCroWhySection } from "@/components/sections/shopify-cro/shopify-cro-why-section";
import {
  shopifyCroAssessment,
  shopifyCroBarriers,
  shopifyCroBrands,
  shopifyCroEngagements,
  shopifyCroFaqs,
  shopifyCroHero,
  shopifyCroProcess,
  shopifyCroRevenueImpact,
  shopifyCroServices,
  shopifyCroWhyDynamicDreamz,
} from "@/content/shopify-cro-agency";

export function ShopifyCroAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection
        content={shopifyCroHero}
        titleAccentPosition="start"
        titleAccentTag="i"
      />

      {/* 2. Trusted by Leading Brands Section */}
      <IndustryBrandsSection
        content={shopifyCroBrands}
        heading={shopifyCroBrands.heading}
        items={shopifyCroBrands.items}
      />

      {/* 3. Conversion Barriers Section */}
      <ShopifyCroBarriersSection content={shopifyCroBarriers} />

      {/* 4. Revenue Impact Section */}
      <ShopifyCroRevenueImpactSection content={shopifyCroRevenueImpact} />

      {/* 5. CRO Services Section */}
      <ShopifyCroServicesSection content={shopifyCroServices} />

      {/* 6. CRO Assessment Section */}
      <ShopifyCroAssessmentSection content={shopifyCroAssessment} />

      {/* 7. Process Section */}
      <ShopifyCroProcessSection content={shopifyCroProcess} />

      {/* 8. Why Dynamic Dreamz Section */}
      <ShopifyCroWhySection content={shopifyCroWhyDynamicDreamz} />

      {/* 9. Engagement Models Section */}
      <ShopifyCroEngagementSection content={shopifyCroEngagements} />

      {/* 10. FAQ Section */}
      <SplitFaqSection
        idPrefix="shopify-cro-faq"
        items={shopifyCroFaqs}
      />
    </div>
  );
}
