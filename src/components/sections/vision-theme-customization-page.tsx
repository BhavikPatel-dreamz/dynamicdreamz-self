import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { visionThemeCustomizationContent } from "@/content/vision-theme-customization";

export function VisionThemeCustomizationPage() {
  const brandsContent = {
    heading: visionThemeCustomizationContent.brands.title,
    slug: "vision-theme-customization",
  };

  const servicesContent = {
    heading: visionThemeCustomizationContent.services.heading,
    description: visionThemeCustomizationContent.services.description,
    items: visionThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: visionThemeCustomizationContent.whyChoose.eyebrow,
    heading: visionThemeCustomizationContent.whyChoose.heading,
    description: visionThemeCustomizationContent.whyChoose.description,
    items: visionThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: visionThemeCustomizationContent.portfolio.eyebrow,
    heading: visionThemeCustomizationContent.portfolio.heading,
    description: visionThemeCustomizationContent.portfolio.description,
    items: visionThemeCustomizationContent.portfolio.items,
    ctaLabel: visionThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: visionThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={visionThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={visionThemeCustomizationContent.brands.title}
        items={visionThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={visionThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={visionThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={visionThemeCustomizationContent.services.eyebrow}
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
        eyebrow={visionThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={visionThemeCustomizationContent.faqsHeading}
        idPrefix="vision-faq"
        items={visionThemeCustomizationContent.faqs}
      />
    </div>
  );
}
