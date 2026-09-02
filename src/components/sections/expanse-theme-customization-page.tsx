import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { expanseThemeCustomizationContent } from "@/content/expanse-theme-customization";

export function ExpanseThemeCustomizationPage() {
  const brandsContent = {
    heading: expanseThemeCustomizationContent.brands.title,
    slug: "expanse-theme-customization",
  };

  const benefitsContent = {
    heading: expanseThemeCustomizationContent.benefits.title,
    description: expanseThemeCustomizationContent.benefits.subtitle,
    items: expanseThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: expanseThemeCustomizationContent.services.title,
    description: expanseThemeCustomizationContent.services.subtitle,
    items: expanseThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    eyebrow: expanseThemeCustomizationContent.portfolio.eyebrow,
    heading: expanseThemeCustomizationContent.portfolio.title,
    description: expanseThemeCustomizationContent.portfolio.subtitle,
    items: expanseThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection
        content={expanseThemeCustomizationContent.hero}
        imageStretchesOnDesktop
        tabletImageHalfWidth
        tabletImageTopSpacing
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={expanseThemeCustomizationContent.brands.title}
        items={expanseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={expanseThemeCustomizationContent.features} />
      <ShopifyReasonsSection
        carouselFullBleed
        content={benefitsContent}
        layout="carousel"
        preserveHeadingBreaks
      />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection
        content={expanseThemeCustomizationContent.whyChoose}
        preserveLiveIconSize
        variant="top-icon-mobile"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        headerLayout="split"
        variant="liveGrid"
      />
      <SplitFaqSection
        idPrefix="expanse-faq"
        items={expanseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
