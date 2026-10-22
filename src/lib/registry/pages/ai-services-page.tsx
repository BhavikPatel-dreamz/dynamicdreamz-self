import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { AiServicesGridSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyTeamBoxesSection } from "@/components/blocks/WhyChooseUsBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { CityWhyChooseBoxesSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { TechKeywordSection } from "@/components/blocks/TechStackShowcaseBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
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
        hasTopPadding={true}
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
