import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { originThemeCustomizationContent } from "@/content/origin-theme-customization";

export function OriginThemeCustomizationPage() {
  const brandsContent = {
    heading: originThemeCustomizationContent.brands.title,
    slug: "origin-theme-customization",
  };

  const benefitsContent = {
    heading: originThemeCustomizationContent.benefits.title,
    description: originThemeCustomizationContent.benefits.subtitle,
    items: originThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: originThemeCustomizationContent.services.title,
    description: originThemeCustomizationContent.services.subtitle,
    items: originThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: originThemeCustomizationContent.portfolio.title,
    description: originThemeCustomizationContent.portfolio.subtitle,
    items: originThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={originThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={originThemeCustomizationContent.brands.title}
        items={originThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={originThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={originThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="origin-faq"
        items={originThemeCustomizationContent.faqs}
      />
    </div>
  );
}
