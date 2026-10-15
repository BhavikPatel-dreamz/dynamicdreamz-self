import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { pitchThemeCustomizationContent } from "@/content/pitch-theme-customization";

export function PitchThemeCustomizationPage() {
  const brandsContent = {
    heading: pitchThemeCustomizationContent.brands.title,
    slug: "pitch-theme-customization",
  };

  const servicesContent = {
    heading: pitchThemeCustomizationContent.services.heading,
    description: pitchThemeCustomizationContent.services.description,
    items: pitchThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: pitchThemeCustomizationContent.whyChoose.eyebrow,
    heading: pitchThemeCustomizationContent.whyChoose.heading,
    description: pitchThemeCustomizationContent.whyChoose.description,
    items: pitchThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: pitchThemeCustomizationContent.portfolio.eyebrow,
    heading: pitchThemeCustomizationContent.portfolio.heading,
    description: pitchThemeCustomizationContent.portfolio.description,
    items: pitchThemeCustomizationContent.portfolio.items,
    ctaLabel: pitchThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: pitchThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={pitchThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={pitchThemeCustomizationContent.brands.title}
        items={pitchThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={pitchThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={pitchThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={pitchThemeCustomizationContent.services.eyebrow}
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
        eyebrow={pitchThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={pitchThemeCustomizationContent.faqsHeading}
        idPrefix="pitch-faq"
        items={pitchThemeCustomizationContent.faqs}
      />
    </div>
  );
}
