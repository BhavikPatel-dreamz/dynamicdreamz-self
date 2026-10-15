import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { craftThemeCustomizationContent } from "@/content/craft-theme-customization";

export function CraftThemeCustomizationPage() {
  const brandsContent = {
    heading: craftThemeCustomizationContent.brands.title,
    slug: "craft-theme-customization",
  };

  const servicesContent = {
    heading: craftThemeCustomizationContent.services.heading,
    description: craftThemeCustomizationContent.services.description,
    items: craftThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: craftThemeCustomizationContent.whyChoose.eyebrow,
    heading: craftThemeCustomizationContent.whyChoose.heading,
    description: craftThemeCustomizationContent.whyChoose.description,
    items: craftThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: craftThemeCustomizationContent.portfolio.eyebrow,
    heading: craftThemeCustomizationContent.portfolio.heading,
    description: craftThemeCustomizationContent.portfolio.description,
    items: craftThemeCustomizationContent.portfolio.items,
    ctaLabel: craftThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: craftThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={craftThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={craftThemeCustomizationContent.brands.title}
        items={craftThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={craftThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={craftThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={craftThemeCustomizationContent.services.eyebrow}
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
        eyebrow={craftThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={craftThemeCustomizationContent.faqsHeading}
        idPrefix="craft-faq"
        items={craftThemeCustomizationContent.faqs}
      />
    </div>
  );
}
