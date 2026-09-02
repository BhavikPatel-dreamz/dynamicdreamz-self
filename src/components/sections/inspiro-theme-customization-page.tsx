import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { inspiroThemeCustomizationContent } from "@/content/inspiro-theme-customization";

export function InspiroThemeCustomizationPage() {
  const brandsContent = {
    heading: inspiroThemeCustomizationContent.brands.title,
    slug: "inspiro-theme-customization",
  };

  const benefitsContent = {
    heading: inspiroThemeCustomizationContent.benefits.title,
    description: inspiroThemeCustomizationContent.benefits.subtitle,
    items: inspiroThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: inspiroThemeCustomizationContent.services.title,
    description: inspiroThemeCustomizationContent.services.subtitle,
    items: inspiroThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    eyebrow: inspiroThemeCustomizationContent.portfolio.eyebrow,
    heading: inspiroThemeCustomizationContent.portfolio.title,
    description: inspiroThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: inspiroThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection
        content={inspiroThemeCustomizationContent.hero}
        imageStretchesOnDesktop
        tabletImageHalfWidth
        tabletImageTopSpacing
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={inspiroThemeCustomizationContent.brands.title}
        items={inspiroThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={inspiroThemeCustomizationContent.features} />
      <ShopifyReasonsSection
        carouselFullBleed
        content={benefitsContent}
        layout="carousel"
        preserveHeadingBreaks
      />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection
        content={inspiroThemeCustomizationContent.whyChoose}
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
        idPrefix="inspiro-faq"
        items={inspiroThemeCustomizationContent.faqs}
      />
    </div>
  );
}
