import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { refreshThemeCustomizationContent } from "@/content/refresh-theme-customization";

export function RefreshThemeCustomizationPage() {
  const brandsContent = {
    heading: refreshThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Refresh theme customization",
    slug: "refresh-theme-customization",
  };

  const benefitsContent = {
    heading: refreshThemeCustomizationContent.benefits.title,
    description: refreshThemeCustomizationContent.benefits.subtitle,
    items: refreshThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: refreshThemeCustomizationContent.services.title,
    description: refreshThemeCustomizationContent.services.subtitle,
    items: refreshThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: refreshThemeCustomizationContent.portfolio.title,
    description: refreshThemeCustomizationContent.portfolio.subtitle,
    items: refreshThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={refreshThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={refreshThemeCustomizationContent.brands.title}
        items={refreshThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={refreshThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={refreshThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="refresh-faq"
        items={refreshThemeCustomizationContent.faqs}
      />
    </div>
  );
}
