import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { horizonThemeCustomizationContent } from "@/content/horizon-theme-customization";

export function HorizonThemeCustomizationPage() {
  const brandsContent = {
    heading: horizonThemeCustomizationContent.brands.title,
    slug: "horizon-theme-customization",
  };

  const benefitsContent = {
    heading: horizonThemeCustomizationContent.benefits.title,
    description: horizonThemeCustomizationContent.benefits.subtitle,
    items: horizonThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: horizonThemeCustomizationContent.services.title,
    description: horizonThemeCustomizationContent.services.subtitle,
    items: horizonThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: horizonThemeCustomizationContent.portfolio.title,
    description: horizonThemeCustomizationContent.portfolio.subtitle,
    items: horizonThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={horizonThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={horizonThemeCustomizationContent.brands.title}
        items={horizonThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={horizonThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={horizonThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="horizon-faq"
        items={horizonThemeCustomizationContent.faqs}
      />
    </div>
  );
}
