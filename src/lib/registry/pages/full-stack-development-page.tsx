import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { TechnologiesWorkWithSection } from "@/components/blocks/TechStackShowcaseBlock";
import { RecentArchitecturePatternsSection } from "@/components/blocks/PlatformComparisonTableBlock";
import { ServicesCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { CityWhyChooseBoxesSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import {
  fullStackDevelopmentHeroContent,
  fullStackDevelopmentBrandsContent,
  fullStackDevelopmentWhatWeBuildContent,
  fullStackDevelopmentServicesContent,
  fullStackDevelopmentTechnologiesContent,
  fullStackDevelopmentArchitectureContent,
  fullStackDevelopmentCaseStudiesContent,
  fullStackDevelopmentHowWeWorkContent,
  fullStackDevelopmentWhyChooseContent,
  fullStackDevelopmentTestimonialsContent,
  fullStackDevelopmentFaqContent,
} from "@/content/full-stack-development";

export function FullStackDevelopmentPage() {
  return (
    <>
      <CityPageHeroSection
        content={fullStackDevelopmentHeroContent}
      />
      <IndustryBrandsSection
        content={fullStackDevelopmentBrandsContent}
        density="flexible"
        heading={fullStackDevelopmentBrandsContent.heading}
      />
      <ThemeCustomizationServicesSection
        content={fullStackDevelopmentWhatWeBuildContent}
        id="our_services"
        variant="green"
      />
      <ShopifyStageServicesSection
        content={fullStackDevelopmentServicesContent}
        id="shopify-services"
        sixCards
      />
      <TechnologiesWorkWithSection
        content={fullStackDevelopmentTechnologiesContent}
      />
      <RecentArchitecturePatternsSection
        content={fullStackDevelopmentArchitectureContent}
      />
      <ServicesCaseStudiesSection
        description={fullStackDevelopmentCaseStudiesContent.description}
        eyebrow={fullStackDevelopmentCaseStudiesContent.eyebrow}
        heading={fullStackDevelopmentCaseStudiesContent.heading}
        items={fullStackDevelopmentCaseStudiesContent.items}
      />
      <EvaluationFrameworkSection
        content={fullStackDevelopmentHowWeWorkContent}
      />
      <CityWhyChooseBoxesSection
        columns={4}
        content={fullStackDevelopmentWhyChooseContent}
        theme="light"
      />
      <HappyClientSection
        description={fullStackDevelopmentTestimonialsContent.description}
        eyebrow={fullStackDevelopmentTestimonialsContent.eyebrow}
        heading={fullStackDevelopmentTestimonialsContent.heading}
      />
      <SplitFaqSection
        description={fullStackDevelopmentFaqContent.description}
        eyebrow={fullStackDevelopmentFaqContent.eyebrow}
        heading={fullStackDevelopmentFaqContent.heading}
        iconVariant="circle-cross"
        idPrefix={fullStackDevelopmentFaqContent.idPrefix}
        items={fullStackDevelopmentFaqContent.items}
      />
    </>
  );
}
