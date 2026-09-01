import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { pitchThemeCustomizationContent } from "@/content/pitch-theme-customization";

export function PitchThemeCustomizationPage() {
  const brandsContent = {
    heading: pitchThemeCustomizationContent.brands.title,
    slug: "pitch-theme-customization",
  };

  const benefitsContent = {
    heading: pitchThemeCustomizationContent.benefits.title,
    description: pitchThemeCustomizationContent.benefits.subtitle,
    items: pitchThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: pitchThemeCustomizationContent.services.title,
    description: pitchThemeCustomizationContent.services.subtitle,
    items: pitchThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: pitchThemeCustomizationContent.portfolio.title,
    description: pitchThemeCustomizationContent.portfolio.subtitle,
    items: pitchThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={pitchThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={pitchThemeCustomizationContent.brands.title}
        items={pitchThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={pitchThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={pitchThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="pitch-faq"
        items={pitchThemeCustomizationContent.faqs}
      />
    </div>
  );
}
