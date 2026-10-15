import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { spotlightThemeCustomizationContent } from "@/content/spotlight-theme-customization";

export function SpotlightThemeCustomizationPage() {
  const brandsContent = {
    heading: spotlightThemeCustomizationContent.brands.title,
    slug: "spotlight-theme-customization",
  };

  const servicesContent = {
    heading: spotlightThemeCustomizationContent.services.heading,
    description: spotlightThemeCustomizationContent.services.description,
    items: spotlightThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: spotlightThemeCustomizationContent.whyChoose.eyebrow,
    heading: spotlightThemeCustomizationContent.whyChoose.heading,
    description: spotlightThemeCustomizationContent.whyChoose.description,
    items: spotlightThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: spotlightThemeCustomizationContent.portfolio.eyebrow,
    heading: spotlightThemeCustomizationContent.portfolio.heading,
    description: spotlightThemeCustomizationContent.portfolio.description,
    items: spotlightThemeCustomizationContent.portfolio.items,
    ctaLabel: spotlightThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: spotlightThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={spotlightThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={spotlightThemeCustomizationContent.brands.title}
        items={spotlightThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={spotlightThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={spotlightThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={spotlightThemeCustomizationContent.services.eyebrow}
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
        eyebrow={spotlightThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={spotlightThemeCustomizationContent.faqsHeading}
        idPrefix="spotlight-faq"
        items={spotlightThemeCustomizationContent.faqs}
      />
    </div>
  );
}
