import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { pipelineThemeCustomizationContent } from "@/content/pipeline-theme-customization";

export function PipelineThemeCustomizationPage() {
  const brandsContent = {
    heading: pipelineThemeCustomizationContent.brands.title,
    slug: "pipeline-theme-customization",
  };

  const servicesContent = {
    heading: pipelineThemeCustomizationContent.services.heading,
    description: pipelineThemeCustomizationContent.services.description,
    items: pipelineThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: pipelineThemeCustomizationContent.whyChoose.eyebrow,
    heading: pipelineThemeCustomizationContent.whyChoose.heading,
    description: pipelineThemeCustomizationContent.whyChoose.description,
    items: pipelineThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: pipelineThemeCustomizationContent.portfolio.eyebrow,
    heading: pipelineThemeCustomizationContent.portfolio.heading,
    description: pipelineThemeCustomizationContent.portfolio.description,
    items: pipelineThemeCustomizationContent.portfolio.items,
    ctaLabel: pipelineThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: pipelineThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={pipelineThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={pipelineThemeCustomizationContent.brands.title}
        items={pipelineThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={pipelineThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={pipelineThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={pipelineThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        eyebrow={pipelineThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={pipelineThemeCustomizationContent.faqsHeading}
        idPrefix="pipeline-faq"
        items={pipelineThemeCustomizationContent.faqs}
      />
    </div>
  );
}
