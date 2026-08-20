import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { dwellThemeCustomizationContent } from "@/content/dwell-theme-customization";

export function DwellThemeCustomizationPage() {
  const brandsContent = {
    heading: dwellThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Dwell theme customization",
    slug: "dwell-theme-customization",
  };

  const benefitsContent = {
    heading: dwellThemeCustomizationContent.benefits.title,
    description: dwellThemeCustomizationContent.benefits.subtitle,
    items: dwellThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: dwellThemeCustomizationContent.services.title,
    description: dwellThemeCustomizationContent.services.subtitle,
    items: dwellThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: dwellThemeCustomizationContent.portfolio.title,
    description: dwellThemeCustomizationContent.portfolio.subtitle,
    items: dwellThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={dwellThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={dwellThemeCustomizationContent.brands.title}
        items={dwellThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={dwellThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={dwellThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="dwell-faq"
        items={dwellThemeCustomizationContent.faqs}
      />
    </div>
  );
}
