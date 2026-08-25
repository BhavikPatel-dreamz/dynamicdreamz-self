import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { visionThemeCustomizationContent } from "@/content/vision-theme-customization";

export function VisionThemeCustomizationPage() {
  const brandsContent = {
    heading: visionThemeCustomizationContent.brands.title,
    slug: "vision-theme-customization",
  };

  const benefitsContent = {
    heading: visionThemeCustomizationContent.benefits.title,
    description: visionThemeCustomizationContent.benefits.subtitle,
    items: visionThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: visionThemeCustomizationContent.services.title,
    description: visionThemeCustomizationContent.services.subtitle,
    items: visionThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: visionThemeCustomizationContent.portfolio.title,
    description: visionThemeCustomizationContent.portfolio.subtitle,
    items: visionThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={visionThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={visionThemeCustomizationContent.brands.title}
        items={visionThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={visionThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={visionThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="vision-faq"
        items={visionThemeCustomizationContent.faqs}
      />
    </div>
  );
}
