import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { impulseThemeCustomizationContent } from "@/content/impulse-theme-customization";

export function ImpulseThemeCustomizationPage() {
  const brandsContent = {
    heading: impulseThemeCustomizationContent.brands.title,
    slug: "impulse-theme-customization",
  };

  const servicesContent = {
    heading: impulseThemeCustomizationContent.services.heading,
    description: impulseThemeCustomizationContent.services.description,
    items: impulseThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: impulseThemeCustomizationContent.whyChoose.eyebrow,
    heading: impulseThemeCustomizationContent.whyChoose.heading,
    description: impulseThemeCustomizationContent.whyChoose.description,
    items: impulseThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: impulseThemeCustomizationContent.portfolio.eyebrow,
    heading: impulseThemeCustomizationContent.portfolio.heading,
    description: impulseThemeCustomizationContent.portfolio.description,
    items: impulseThemeCustomizationContent.portfolio.items,
    ctaLabel: impulseThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: impulseThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={impulseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={impulseThemeCustomizationContent.brands.title}
        items={impulseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={impulseThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={impulseThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={impulseThemeCustomizationContent.services.eyebrow}
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
        eyebrow={impulseThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={impulseThemeCustomizationContent.faqsHeading}
        idPrefix="impulse-faq"
        items={impulseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
