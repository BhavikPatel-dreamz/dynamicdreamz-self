import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { stilettoThemeCustomizationContent } from "@/content/stiletto-theme-customization";

export function StilettoThemeCustomizationPage() {
  const brandsContent = {
    heading: stilettoThemeCustomizationContent.brands.title,
    slug: "stiletto-theme-customization",
  };

  const benefitsContent = {
    heading: stilettoThemeCustomizationContent.benefits.title,
    description: stilettoThemeCustomizationContent.benefits.subtitle,
    items: stilettoThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: stilettoThemeCustomizationContent.services.title,
    description: stilettoThemeCustomizationContent.services.subtitle,
    items: stilettoThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: stilettoThemeCustomizationContent.portfolio.title,
    description: stilettoThemeCustomizationContent.portfolio.subtitle,
    items: stilettoThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={stilettoThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={stilettoThemeCustomizationContent.brands.title}
        items={stilettoThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={stilettoThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={stilettoThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="stiletto-faq"
        items={stilettoThemeCustomizationContent.faqs}
      />
    </div>
  );
}
