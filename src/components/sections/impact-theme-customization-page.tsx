import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { impactThemeCustomizationContent } from "@/content/impact-theme-customization";

export function ImpactThemeCustomizationPage() {
  const brandsContent = {
    heading: impactThemeCustomizationContent.brands.title,
    slug: "impact-theme-customization",
  };

  const benefitsContent = {
    heading: impactThemeCustomizationContent.benefits.title,
    description: impactThemeCustomizationContent.benefits.subtitle,
    items: impactThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: impactThemeCustomizationContent.services.title,
    description: impactThemeCustomizationContent.services.subtitle,
    items: impactThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: impactThemeCustomizationContent.portfolio.title,
    description: impactThemeCustomizationContent.portfolio.subtitle,
    items: impactThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={impactThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={impactThemeCustomizationContent.brands.title}
        items={impactThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={impactThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={impactThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="impact-faq"
        items={impactThemeCustomizationContent.faqs}
      />
    </div>
  );
}
