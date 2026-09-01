import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { ritualThemeCustomizationContent } from "@/content/ritual-theme-customization";

export function RitualThemeCustomizationPage() {
  const brandsContent = {
    heading: ritualThemeCustomizationContent.brands.title,
    slug: "ritual-theme-customization",
  };

  const benefitsContent = {
    heading: ritualThemeCustomizationContent.benefits.title,
    description: ritualThemeCustomizationContent.benefits.subtitle,
    items: ritualThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: ritualThemeCustomizationContent.services.title,
    description: ritualThemeCustomizationContent.services.subtitle,
    items: ritualThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: ritualThemeCustomizationContent.portfolio.title,
    description: ritualThemeCustomizationContent.portfolio.subtitle,
    items: ritualThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={ritualThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={ritualThemeCustomizationContent.brands.title}
        items={ritualThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={ritualThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={ritualThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="ritual-faq"
        items={ritualThemeCustomizationContent.faqs}
      />
    </div>
  );
}
