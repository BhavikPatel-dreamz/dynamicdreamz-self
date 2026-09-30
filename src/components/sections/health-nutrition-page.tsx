import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryCustomDevelopmentSection } from "@/components/sections/industry/industry-custom-development-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import {
  healthNutritionBrands,
  healthNutritionBrandsConfig,
  healthNutritionBrandsHeading,
  healthNutritionCaseStudies,
  healthNutritionChallenges,
  healthNutritionCustomDev,
  healthNutritionFaqEyebrow,
  healthNutritionFaqHeading,
  healthNutritionFaqs,
  healthNutritionHero,
  healthNutritionPortfolio,
  healthNutritionSolutions,
  healthNutritionTechnologies,
  healthNutritionWhyChoose,
} from "@/content/health-nutrition";

export function HealthNutritionPage() {
  return (
    <>
      <ServiceHeroVideoSection content={healthNutritionHero} />
      <IndustryBrandsSection
        content={healthNutritionBrandsConfig}
        heading={healthNutritionBrandsHeading}
        items={healthNutritionBrands}
      />
      <ServicesCaseStudiesSection
        description={healthNutritionCaseStudies.description}
        eyebrow={healthNutritionCaseStudies.eyebrow}
        heading={healthNutritionCaseStudies.heading}
        items={healthNutritionCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={healthNutritionChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={healthNutritionSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={healthNutritionCustomDev} />
      <WhiteLabelToolsSection
        description={healthNutritionTechnologies.description}
        rows={healthNutritionTechnologies.rows}
        title={healthNutritionTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={healthNutritionPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={healthNutritionWhyChoose} />
      <SplitFaqSection
        eyebrow={healthNutritionFaqEyebrow}
        heading={healthNutritionFaqHeading}
        idPrefix="health-nutrition-faq"
        items={healthNutritionFaqs}
      />
    </>
  );
}

