import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyCroAssessmentSection } from "@/components/sections/shopify-cro/shopify-cro-assessment-section";
import { ShopifyCroBarriersSection } from "@/components/sections/shopify-cro/shopify-cro-barriers-section";
import { ShopifyCroCtaSection } from "@/components/sections/shopify-cro/shopify-cro-cta-section";
import { ShopifyCroEngagementSection } from "@/components/sections/shopify-cro/shopify-cro-engagement-section";
import { ShopifyCroHeroSection } from "@/components/sections/shopify-cro/shopify-cro-hero-section";
import { ShopifyCroProcessSection } from "@/components/sections/shopify-cro/shopify-cro-process-section";
import { ShopifyCroRevenueImpactSection } from "@/components/sections/shopify-cro/shopify-cro-revenue-impact-section";
import { ShopifyCroServicesSection } from "@/components/sections/shopify-cro/shopify-cro-services-section";
import { ShopifyCroWhySection } from "@/components/sections/shopify-cro/shopify-cro-why-section";
import {
  shopifyCroAssessment,
  shopifyCroBarriers,
  shopifyCroBottomCta,
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
      <ShopifyCroHeroSection hero={shopifyCroHero} />
      <ShopifyCroBarriersSection content={shopifyCroBarriers} />
      <ShopifyCroRevenueImpactSection content={shopifyCroRevenueImpact} />
      <ShopifyCroServicesSection content={shopifyCroServices} />
      <ShopifyCroAssessmentSection content={shopifyCroAssessment} />
      <ShopifyCroProcessSection content={shopifyCroProcess} />
      <ShopifyCroWhySection content={shopifyCroWhyDynamicDreamz} />
      <ShopifyCroEngagementSection content={shopifyCroEngagements} />
      <FaqSection
        items={shopifyCroFaqs}
        idPrefix="shopify-cro-faq"
        className="faq-sec bg-sky-blue py-20 max-[992px]:py-12"
      />
      <ShopifyCroCtaSection content={shopifyCroBottomCta} />
    </div>
  );
}
