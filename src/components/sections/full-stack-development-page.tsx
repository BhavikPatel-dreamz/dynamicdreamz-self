import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { TechnologiesWorkWithSection } from "@/components/sections/technologies-work-with-section";
import { RecentArchitecturePatternsSection } from "@/components/sections/recent-architecture-patterns-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
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
        className="hide-logo"
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
