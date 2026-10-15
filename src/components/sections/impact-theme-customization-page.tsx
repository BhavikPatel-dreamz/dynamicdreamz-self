import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { impactThemeCustomizationContent } from "@/content/impact-theme-customization";

export function ImpactThemeCustomizationPage() {
  const brandsContent = {
    heading: impactThemeCustomizationContent.brands.title,
    slug: "impact-theme-customization",
  };

  const servicesContent = {
    heading: impactThemeCustomizationContent.services.heading,
    description: impactThemeCustomizationContent.services.description,
    items: impactThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: impactThemeCustomizationContent.whyChoose.eyebrow,
    heading: impactThemeCustomizationContent.whyChoose.heading,
    description: impactThemeCustomizationContent.whyChoose.description,
    items: impactThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: impactThemeCustomizationContent.portfolio.eyebrow,
    heading: impactThemeCustomizationContent.portfolio.heading,
    description: impactThemeCustomizationContent.portfolio.description,
    items: impactThemeCustomizationContent.portfolio.items,
    ctaLabel: impactThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: impactThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={impactThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={impactThemeCustomizationContent.brands.title}
        items={impactThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={impactThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={impactThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={impactThemeCustomizationContent.services.eyebrow}
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
        eyebrow={impactThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={impactThemeCustomizationContent.faqsHeading}
        idPrefix="impact-faq"
        items={impactThemeCustomizationContent.faqs}
      />
    </div>
  );
}
