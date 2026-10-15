import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ritualThemeCustomizationContent } from "@/content/ritual-theme-customization";

export function RitualThemeCustomizationPage() {
  const brandsContent = {
    heading: ritualThemeCustomizationContent.brands.title,
    slug: "ritual-theme-customization",
  };

  const servicesContent = {
    heading: ritualThemeCustomizationContent.services.heading,
    description: ritualThemeCustomizationContent.services.description,
    items: ritualThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: ritualThemeCustomizationContent.whyChoose.eyebrow,
    heading: ritualThemeCustomizationContent.whyChoose.heading,
    description: ritualThemeCustomizationContent.whyChoose.description,
    items: ritualThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: ritualThemeCustomizationContent.portfolio.eyebrow,
    heading: ritualThemeCustomizationContent.portfolio.heading,
    description: ritualThemeCustomizationContent.portfolio.description,
    items: ritualThemeCustomizationContent.portfolio.items,
    ctaLabel: ritualThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: ritualThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={ritualThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={ritualThemeCustomizationContent.brands.title}
        items={ritualThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={ritualThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={ritualThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={ritualThemeCustomizationContent.services.eyebrow}
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
        eyebrow={ritualThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={ritualThemeCustomizationContent.faqsHeading}
        idPrefix="ritual-faq"
        items={ritualThemeCustomizationContent.faqs}
      />
    </div>
  );
}
