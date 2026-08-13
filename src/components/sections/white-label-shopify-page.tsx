import {
  AiDrivenShoppingSection,
  DeliveredUnderBrandSection,
} from "@/components/sections/white-label-shopify/white-label-shopify-ai-sections";
import {
  WhiteLabelShopifyFaqSection,
  WhiteLabelShopifyFinalCtaSection,
} from "@/components/sections/white-label-shopify/white-label-shopify-closing-sections";
import { WhiteLabelShopifyHeroSection } from "@/components/sections/white-label-shopify/white-label-shopify-hero-section";
import { WhiteLabelShopifyPricingSection } from "@/components/sections/white-label-shopify/white-label-shopify-pricing-section";
import { WhiteLabelShopifyProcessSection } from "@/components/sections/white-label-shopify/white-label-shopify-process-section";
import {
  WhiteLabelShopifyStatsSection,
  WhiteLabelShopifyWhySection,
} from "@/components/sections/white-label-shopify/white-label-shopify-proof-section";
import { WhiteLabelShopifyServicesSection } from "@/components/sections/white-label-shopify/white-label-shopify-services-section";
import { WhiteLabelShopifyToolsSection } from "@/components/sections/white-label-shopify/white-label-shopify-tools-section";

export function WhiteLabelShopifyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelShopifyHeroSection />
      <WhiteLabelShopifyStatsSection />
      <WhiteLabelShopifyWhySection />
      <DeliveredUnderBrandSection />
      <AiDrivenShoppingSection />
      <WhiteLabelShopifyServicesSection />
      <WhiteLabelShopifyPricingSection />
      <WhiteLabelShopifyToolsSection />
      <WhiteLabelShopifyProcessSection />
      <WhiteLabelShopifyFaqSection />
      <WhiteLabelShopifyFinalCtaSection />
    </div>
  );
}
