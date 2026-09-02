import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { vesselThemeCustomizationContent } from "@/content/vessel-theme-customization";

export function VesselThemeCustomizationPage() {
  const brandsContent = {
    heading: vesselThemeCustomizationContent.brands.title,
    slug: "vessel-theme-customization",
  };

  const benefitsContent = {
    heading: vesselThemeCustomizationContent.benefits.title,
    description: vesselThemeCustomizationContent.benefits.subtitle,
    items: vesselThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: vesselThemeCustomizationContent.services.title,
    description: vesselThemeCustomizationContent.services.subtitle,
    items: vesselThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: vesselThemeCustomizationContent.portfolio.title,
    description: vesselThemeCustomizationContent.portfolio.subtitle,
    items: vesselThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={vesselThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={vesselThemeCustomizationContent.brands.title}
        items={vesselThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={vesselThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={vesselThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="vessel-faq"
        items={vesselThemeCustomizationContent.faqs}
      />
    </div>
  );
}
