import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { studioThemeCustomizationContent } from "@/content/studio-theme-customization";

export function StudioThemeCustomizationPage() {
  const brandsContent = {
    heading: studioThemeCustomizationContent.brands.title,
    slug: "studio-theme-customization",
  };

  const benefitsContent = {
    heading: studioThemeCustomizationContent.benefits.title,
    description: studioThemeCustomizationContent.benefits.subtitle,
    items: studioThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: studioThemeCustomizationContent.services.title,
    description: studioThemeCustomizationContent.services.subtitle,
    items: studioThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: studioThemeCustomizationContent.portfolio.title,
    description: studioThemeCustomizationContent.portfolio.subtitle,
    items: studioThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={studioThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={studioThemeCustomizationContent.brands.title}
        items={studioThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={studioThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={studioThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="studio-faq"
        items={studioThemeCustomizationContent.faqs}
      />
    </div>
  );
}
