import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { impulseThemeCustomizationContent } from "@/content/impulse-theme-customization";

export function ImpulseThemeCustomizationPage() {
  const brandsContent = {
    heading: impulseThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Impulse theme customization",
    slug: "impulse-theme-customization",
  };

  const benefitsContent = {
    heading: impulseThemeCustomizationContent.benefits.title,
    description: impulseThemeCustomizationContent.benefits.subtitle,
    items: impulseThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: impulseThemeCustomizationContent.services.title,
    description: impulseThemeCustomizationContent.services.subtitle,
    items: impulseThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: impulseThemeCustomizationContent.portfolio.title,
    description: impulseThemeCustomizationContent.portfolio.subtitle,
    items: impulseThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={impulseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={impulseThemeCustomizationContent.brands.title}
        items={impulseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={impulseThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={impulseThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="impulse-theme-faq"
        items={impulseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
