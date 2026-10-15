import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { tradeThemeCustomizationContent } from "@/content/trade-theme-customization";

export function TradeThemeCustomizationPage() {
  const brandsContent = {
    heading: tradeThemeCustomizationContent.brands.title,
    slug: "trade-theme-customization",
  };

  const servicesContent = {
    heading: tradeThemeCustomizationContent.services.heading,
    description: tradeThemeCustomizationContent.services.description,
    items: tradeThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: tradeThemeCustomizationContent.whyChoose.eyebrow,
    heading: tradeThemeCustomizationContent.whyChoose.heading,
    description: tradeThemeCustomizationContent.whyChoose.description,
    items: tradeThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: tradeThemeCustomizationContent.portfolio.eyebrow,
    heading: tradeThemeCustomizationContent.portfolio.heading,
    description: tradeThemeCustomizationContent.portfolio.description,
    items: tradeThemeCustomizationContent.portfolio.items,
    ctaLabel: tradeThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: tradeThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={tradeThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={tradeThemeCustomizationContent.brands.title}
        items={tradeThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={tradeThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={tradeThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={tradeThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        eyebrow={tradeThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={tradeThemeCustomizationContent.faqsHeading}
        idPrefix="trade-faq"
        items={tradeThemeCustomizationContent.faqs}
      />
    </div>
  );
}
