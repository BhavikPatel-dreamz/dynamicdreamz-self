import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { dawnThemeCustomizationContent } from "@/content/dawn-theme-customization";

export function DawnThemeCustomizationPage() {
  const brandsContent = {
    heading: dawnThemeCustomizationContent.brands.title,
    slug: "dawn-theme-customization",
  };

  const benefitsContent = {
    heading: dawnThemeCustomizationContent.benefits.title,
    description: dawnThemeCustomizationContent.benefits.subtitle,
    items: dawnThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: dawnThemeCustomizationContent.services.title,
    description: dawnThemeCustomizationContent.services.subtitle,
    items: dawnThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: dawnThemeCustomizationContent.portfolio.title,
    description: dawnThemeCustomizationContent.portfolio.subtitle,
    items: dawnThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={dawnThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={dawnThemeCustomizationContent.brands.title}
        items={dawnThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={dawnThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={dawnThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="dawn-faq"
        items={dawnThemeCustomizationContent.faqs}
      />
    </div>
  );
}
