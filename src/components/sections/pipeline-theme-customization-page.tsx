import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
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
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={pipelineThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="pipeline-faq"
        items={pipelineThemeCustomizationContent.faqs}
      />
    </div>
  );
}
