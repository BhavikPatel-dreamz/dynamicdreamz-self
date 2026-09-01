import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { craftThemeCustomizationContent } from "@/content/craft-theme-customization";

export function CraftThemeCustomizationPage() {
  const brandsContent = {
    heading: craftThemeCustomizationContent.brands.title,
    slug: "craft-theme-customization",
  };

  const benefitsContent = {
    heading: craftThemeCustomizationContent.benefits.title,
    description: craftThemeCustomizationContent.benefits.subtitle,
    items: craftThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: craftThemeCustomizationContent.services.title,
    description: craftThemeCustomizationContent.services.subtitle,
    items: craftThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: craftThemeCustomizationContent.portfolio.title,
    description: craftThemeCustomizationContent.portfolio.subtitle,
    items: craftThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={craftThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={craftThemeCustomizationContent.brands.title}
        items={craftThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={craftThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={craftThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="craft-faq"
        items={craftThemeCustomizationContent.faqs}
      />
    </div>
  );
}
