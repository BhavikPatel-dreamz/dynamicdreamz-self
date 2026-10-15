import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { vesselThemeCustomizationContent } from "@/content/vessel-theme-customization";

export function VesselThemeCustomizationPage() {
  const brandsContent = {
    heading: vesselThemeCustomizationContent.brands.title,
    slug: "vessel-theme-customization",
  };

  const servicesContent = {
    heading: vesselThemeCustomizationContent.services.heading,
    description: vesselThemeCustomizationContent.services.description,
    items: vesselThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: vesselThemeCustomizationContent.whyChoose.eyebrow,
    heading: vesselThemeCustomizationContent.whyChoose.heading,
    description: vesselThemeCustomizationContent.whyChoose.description,
    items: vesselThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: vesselThemeCustomizationContent.portfolio.eyebrow,
    heading: vesselThemeCustomizationContent.portfolio.heading,
    description: vesselThemeCustomizationContent.portfolio.description,
    items: vesselThemeCustomizationContent.portfolio.items,
    ctaLabel: vesselThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: vesselThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={vesselThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={vesselThemeCustomizationContent.brands.title}
        items={vesselThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={vesselThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={vesselThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={vesselThemeCustomizationContent.services.eyebrow}
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
        eyebrow={vesselThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={vesselThemeCustomizationContent.faqsHeading}
        idPrefix="vessel-faq"
        items={vesselThemeCustomizationContent.faqs}
      />
    </div>
  );
}
