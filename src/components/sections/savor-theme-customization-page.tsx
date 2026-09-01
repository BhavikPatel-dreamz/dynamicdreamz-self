import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { savorThemeCustomizationContent } from "@/content/savor-theme-customization";

export function SavorThemeCustomizationPage() {
  const brandsContent = {
    heading: savorThemeCustomizationContent.brands.title,
    slug: "savor-theme-customization",
  };

  const benefitsContent = {
    heading: savorThemeCustomizationContent.benefits.title,
    description: savorThemeCustomizationContent.benefits.subtitle,
    items: savorThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: savorThemeCustomizationContent.services.title,
    description: savorThemeCustomizationContent.services.subtitle,
    items: savorThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: savorThemeCustomizationContent.portfolio.title,
    description: savorThemeCustomizationContent.portfolio.subtitle,
    items: savorThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={savorThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={savorThemeCustomizationContent.brands.title}
        items={savorThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={savorThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={savorThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="savor-faq"
        items={savorThemeCustomizationContent.faqs}
      />
    </div>
  );
}
