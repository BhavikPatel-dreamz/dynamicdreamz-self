import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { heritageThemeCustomizationContent } from "@/content/heritage-theme-customization";

export function HeritageThemeCustomizationPage() {
  const brandsContent = {
    heading: heritageThemeCustomizationContent.brands.title,
    slug: "heritage-theme-customization",
  };

  const benefitsContent = {
    heading: heritageThemeCustomizationContent.benefits.title,
    description: heritageThemeCustomizationContent.benefits.subtitle,
    items: heritageThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: heritageThemeCustomizationContent.services.title,
    description: heritageThemeCustomizationContent.services.subtitle,
    items: heritageThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: heritageThemeCustomizationContent.portfolio.title,
    description: heritageThemeCustomizationContent.portfolio.subtitle,
    items: heritageThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={heritageThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={heritageThemeCustomizationContent.brands.title}
        items={heritageThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={heritageThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={heritageThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="heritage-faq"
        items={heritageThemeCustomizationContent.faqs}
      />
    </div>
  );
}
