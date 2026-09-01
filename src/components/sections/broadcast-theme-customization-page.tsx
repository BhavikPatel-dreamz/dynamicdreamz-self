import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { broadcastThemeCustomizationContent } from "@/content/broadcast-theme-customization";

export function BroadcastThemeCustomizationPage() {
  const brandsContent = {
    heading: broadcastThemeCustomizationContent.brands.title,
    slug: "broadcast-theme-customization",
  };

  const benefitsContent = {
    heading: broadcastThemeCustomizationContent.benefits.title,
    description: broadcastThemeCustomizationContent.benefits.subtitle,
    items: broadcastThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: broadcastThemeCustomizationContent.services.title,
    description: broadcastThemeCustomizationContent.services.subtitle,
    items: broadcastThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: broadcastThemeCustomizationContent.portfolio.title,
    description: broadcastThemeCustomizationContent.portfolio.subtitle,
    items: broadcastThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={broadcastThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={broadcastThemeCustomizationContent.brands.title}
        items={broadcastThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={broadcastThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={broadcastThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="broadcast-faq"
        items={broadcastThemeCustomizationContent.faqs}
      />
    </div>
  );
}
