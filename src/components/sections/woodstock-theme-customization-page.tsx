import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { woodstockThemeCustomizationContent } from "@/content/woodstock-theme-customization";

export function WoodstockThemeCustomizationPage() {
  const brandsContent = {
    heading: woodstockThemeCustomizationContent.brands.title,
    slug: "woodstock-theme-customization",
  };

  const benefitsContent = {
    heading: woodstockThemeCustomizationContent.benefits.title,
    description: woodstockThemeCustomizationContent.benefits.subtitle,
    items: woodstockThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: woodstockThemeCustomizationContent.services.title,
    description: woodstockThemeCustomizationContent.services.subtitle,
    items: woodstockThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: woodstockThemeCustomizationContent.portfolio.title,
    description: woodstockThemeCustomizationContent.portfolio.subtitle,
    items: woodstockThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={woodstockThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={woodstockThemeCustomizationContent.brands.title}
        items={woodstockThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={woodstockThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={woodstockThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="woodstock-faq"
        items={woodstockThemeCustomizationContent.faqs}
      />
    </div>
  );
}
