import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { studioThemeCustomizationContent } from "@/content/studio-theme-customization";

export function StudioThemeCustomizationPage() {
  const brandsContent = {
    heading: studioThemeCustomizationContent.brands.title,
    slug: "studio-theme-customization",
  };

  const servicesContent = {
    heading: studioThemeCustomizationContent.services.heading,
    description: studioThemeCustomizationContent.services.description,
    items: studioThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: studioThemeCustomizationContent.whyChoose.eyebrow,
    heading: studioThemeCustomizationContent.whyChoose.heading,
    description: studioThemeCustomizationContent.whyChoose.description,
    items: studioThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: studioThemeCustomizationContent.portfolio.eyebrow,
    heading: studioThemeCustomizationContent.portfolio.heading,
    description: studioThemeCustomizationContent.portfolio.description,
    items: studioThemeCustomizationContent.portfolio.items,
    ctaLabel: studioThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: studioThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={studioThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={studioThemeCustomizationContent.brands.title}
        items={studioThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={studioThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={studioThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={studioThemeCustomizationContent.services.eyebrow}
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
        eyebrow={studioThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={studioThemeCustomizationContent.faqsHeading}
        idPrefix="studio-faq"
        items={studioThemeCustomizationContent.faqs}
      />
    </div>
  );
}
