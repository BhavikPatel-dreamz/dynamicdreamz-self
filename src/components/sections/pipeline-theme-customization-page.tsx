import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { pipelineThemeCustomizationContent } from "@/content/pipeline-theme-customization";

export function PipelineThemeCustomizationPage() {
  const brandsContent = {
    heading: pipelineThemeCustomizationContent.brands.title,
    slug: "pipeline-theme-customization",
  };

  const benefitsContent = {
    heading: pipelineThemeCustomizationContent.benefits.title,
    description: pipelineThemeCustomizationContent.benefits.subtitle,
    items: pipelineThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: pipelineThemeCustomizationContent.services.title,
    description: pipelineThemeCustomizationContent.services.subtitle,
    items: pipelineThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: pipelineThemeCustomizationContent.portfolio.title,
    description: pipelineThemeCustomizationContent.portfolio.subtitle,
    items: pipelineThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={pipelineThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={pipelineThemeCustomizationContent.brands.title}
        items={pipelineThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={pipelineThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={pipelineThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="pipeline-faq"
        items={pipelineThemeCustomizationContent.faqs}
      />
    </div>
  );
}
