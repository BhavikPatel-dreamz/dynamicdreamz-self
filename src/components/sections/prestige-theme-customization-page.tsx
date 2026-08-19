import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { prestigeThemeCustomizationContent } from "@/content/prestige-theme-customization";

export function PrestigeThemeCustomizationPage() {
  const brandsContent = {
    heading: prestigeThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Prestige theme customization",
    slug: "prestige-theme-customization",
  };

  const benefitsContent = {
    heading: prestigeThemeCustomizationContent.benefits.title,
    description: prestigeThemeCustomizationContent.benefits.subtitle,
    items: prestigeThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: prestigeThemeCustomizationContent.services.title,
    description: prestigeThemeCustomizationContent.services.subtitle,
    items: prestigeThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: prestigeThemeCustomizationContent.portfolio.title,
    description: prestigeThemeCustomizationContent.portfolio.subtitle,
    items: prestigeThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={prestigeThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={prestigeThemeCustomizationContent.brands.title}
        items={prestigeThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={prestigeThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={prestigeThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="prestige-theme-faq"
        items={prestigeThemeCustomizationContent.faqs}
      />
    </div>
  );
}
