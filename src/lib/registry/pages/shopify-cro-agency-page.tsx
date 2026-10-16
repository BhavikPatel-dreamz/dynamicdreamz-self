import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ShopifyCroAssessmentSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyCroBarriersSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyCroEngagementSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyCroProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyCroRevenueImpactSection } from "@/components/blocks/RevenueImpactComparisonBlock";
import { ShopifyCroServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyCroWhySection } from "@/components/blocks/WhyChooseUsBlock";
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
    <div>
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
