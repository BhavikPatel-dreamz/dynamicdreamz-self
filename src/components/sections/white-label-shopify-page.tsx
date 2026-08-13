import {
  AiDrivenShoppingSection,
  DeliveredUnderBrandSection,
} from "@/components/sections/white-label-shopify/white-label-shopify-ai-sections";
import {
  WhiteLabelFaqSection,
  WhiteLabelFinalCtaSection,
} from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelHeroSection } from "@/components/sections/white-label/white-label-hero-section";
import { WhiteLabelPricingSection } from "@/components/sections/white-label/white-label-pricing-section";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import {
  WhiteLabelStatsSection,
  WhiteLabelWhySection,
} from "@/components/sections/white-label/white-label-proof-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";

export function WhiteLabelShopifyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection />
      <WhiteLabelStatsSection />
      <WhiteLabelWhySection />
      <DeliveredUnderBrandSection />
      <AiDrivenShoppingSection />
      <WhiteLabelServicesSection />
      <WhiteLabelPricingSection />
      <WhiteLabelToolsSection />
      <WhiteLabelProcessSection />
      <WhiteLabelFaqSection />
      <WhiteLabelFinalCtaSection />
    </div>
  );
}
