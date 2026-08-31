import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
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
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={stilettoThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="stiletto-faq"
        items={stilettoThemeCustomizationContent.faqs}
      />
    </div>
  );
}
