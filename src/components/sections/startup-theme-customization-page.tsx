import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { startupThemeCustomizationContent } from "@/content/startup-theme-customization";

export function StartupThemeCustomizationPage() {
  const brandsContent = {
    heading: startupThemeCustomizationContent.brands.title,
    slug: "startup-theme-customization",
  };

  const benefitsContent = {
    heading: startupThemeCustomizationContent.benefits.title,
    description: startupThemeCustomizationContent.benefits.subtitle,
    items: startupThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: startupThemeCustomizationContent.services.title,
    description: startupThemeCustomizationContent.services.subtitle,
    items: startupThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: startupThemeCustomizationContent.portfolio.title,
    description: startupThemeCustomizationContent.portfolio.subtitle,
    items: startupThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={startupThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={startupThemeCustomizationContent.brands.title}
        items={startupThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={startupThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={startupThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="startup-faq"
        items={startupThemeCustomizationContent.faqs}
      />
    </div>
  );
}
