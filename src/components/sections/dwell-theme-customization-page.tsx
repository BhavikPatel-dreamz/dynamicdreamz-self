import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { dwellThemeCustomizationContent } from "@/content/dwell-theme-customization";

export function DwellThemeCustomizationPage() {
  const brandsContent = {
    heading: dwellThemeCustomizationContent.brands.title,
    slug: "dwell-theme-customization",
  };

  const servicesContent = {
    heading: dwellThemeCustomizationContent.services.heading,
    description: dwellThemeCustomizationContent.services.description,
    items: dwellThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: dwellThemeCustomizationContent.whyChoose.eyebrow,
    heading: dwellThemeCustomizationContent.whyChoose.heading,
    description: dwellThemeCustomizationContent.whyChoose.description,
    items: dwellThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: dwellThemeCustomizationContent.portfolio.eyebrow,
    heading: dwellThemeCustomizationContent.portfolio.heading,
    description: dwellThemeCustomizationContent.portfolio.description,
    items: dwellThemeCustomizationContent.portfolio.items,
    ctaLabel: dwellThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: dwellThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={dwellThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={dwellThemeCustomizationContent.brands.title}
        items={dwellThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={dwellThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={dwellThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={dwellThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={3}
        content={portfolioContent}
        eyebrow={dwellThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={dwellThemeCustomizationContent.faqsHeading}
        idPrefix="dwell-faq"
        items={dwellThemeCustomizationContent.faqs}
      />
    </div>
  );
}
