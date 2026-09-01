import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { publisherThemeCustomizationContent } from "@/content/publisher-theme-customization";

export function PublisherThemeCustomizationPage() {
  const brandsContent = {
    heading: publisherThemeCustomizationContent.brands.title,
    slug: "publisher-theme-customization",
  };

  const benefitsContent = {
    heading: publisherThemeCustomizationContent.benefits.title,
    description: publisherThemeCustomizationContent.benefits.subtitle,
    items: publisherThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: publisherThemeCustomizationContent.services.title,
    description: publisherThemeCustomizationContent.services.subtitle,
    items: publisherThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: publisherThemeCustomizationContent.portfolio.title,
    description: publisherThemeCustomizationContent.portfolio.subtitle,
    items: publisherThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={publisherThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={publisherThemeCustomizationContent.brands.title}
        items={publisherThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={publisherThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={publisherThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="publisher-faq"
        items={publisherThemeCustomizationContent.faqs}
      />
    </div>
  );
}
