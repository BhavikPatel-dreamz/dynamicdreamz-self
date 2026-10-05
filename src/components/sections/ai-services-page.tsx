import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { AiServicesGridSection } from "@/components/sections/ai-services-grid-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { TechKeywordSection } from "@/components/sections/tech-keyword-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  aiServicesHero,
  aiServicesBrands,
  aiServicesWhatWeBuild,
  aiServicesDetailedGrid,
  aiServicesShopifyEcommerce,
  aiServicesHowWeWork,
  aiServicesReliableAi,
  aiServicesWhyChoose,
  aiServicesTechKeywords,
  aiServicesTestimonials,
  aiServicesFaqs,
} from "@/content/ai-services";

export function AiServicesPage() {
  return (
    <>
      <ServiceHeroVideoSection
        content={aiServicesHero}
        rightColClassName="max-[991px]:hidden"
      />
      <IndustryBrandsSection
        content={aiServicesBrands}
        density="flexible"
        heading={aiServicesBrands.heading}
      />
      <ThemeCustomizationServicesSection
        content={aiServicesWhatWeBuild}
        variant="yellow"
      />
      <AiServicesGridSection content={aiServicesDetailedGrid} />
      <ShopifyTeamBoxesSection content={aiServicesShopifyEcommerce} />
      <EvaluationFrameworkSection content={aiServicesHowWeWork} />
      <CityWhyChooseBoxesSection
        className="reliable_ai_section"
        columns={4}
        content={aiServicesReliableAi}
        theme="dark"
      />
      <CityWhyChooseBoxesSection
        columns={4}
        content={aiServicesWhyChoose}
        theme="light"
      />
      <TechKeywordSection content={aiServicesTechKeywords} />
      <HappyClientSection
        description={aiServicesTestimonials.description}
        eyebrow={aiServicesTestimonials.eyebrow}
        heading={aiServicesTestimonials.heading}
      />
      <SplitFaqSection
        description={aiServicesFaqs.description}
        eyebrow={aiServicesFaqs.eyebrow}
        heading={aiServicesFaqs.heading}
        iconVariant="circle-cross"
        idPrefix="ai-services-faq"
        items={aiServicesFaqs.items}
      />
    </>
  );
}
