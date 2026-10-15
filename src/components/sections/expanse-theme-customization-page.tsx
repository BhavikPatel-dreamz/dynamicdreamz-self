import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { expanseThemeCustomizationContent } from "@/content/expanse-theme-customization";

export function ExpanseThemeCustomizationPage() {
  const brandsContent = {
    heading: expanseThemeCustomizationContent.brands.title,
    slug: "expanse-theme-customization",
  };

  const servicesContent = {
    heading: expanseThemeCustomizationContent.services.heading,
    description: expanseThemeCustomizationContent.services.description,
    items: expanseThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: expanseThemeCustomizationContent.whyChoose.eyebrow,
    heading: expanseThemeCustomizationContent.whyChoose.heading,
    description: expanseThemeCustomizationContent.whyChoose.description,
    items: expanseThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: expanseThemeCustomizationContent.portfolio.eyebrow,
    heading: expanseThemeCustomizationContent.portfolio.heading,
    description: expanseThemeCustomizationContent.portfolio.description,
    items: expanseThemeCustomizationContent.portfolio.items,
    ctaLabel: expanseThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: expanseThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={expanseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={expanseThemeCustomizationContent.brands.title}
        items={expanseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={expanseThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={expanseThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={expanseThemeCustomizationContent.services.eyebrow}
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
        eyebrow={expanseThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={expanseThemeCustomizationContent.faqsHeading}
        idPrefix="expanse-faq"
        items={expanseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
