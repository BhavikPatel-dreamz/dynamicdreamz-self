import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { beYoursThemeCustomizationContent } from "@/content/be-yours-theme-customization";

export function BeYoursThemeCustomizationPage() {
  const brandsContent = {
    heading: beYoursThemeCustomizationContent.brands.title,
    slug: "be-yours-theme-customization",
  };

  const servicesContent = {
    heading: beYoursThemeCustomizationContent.services.heading,
    description: beYoursThemeCustomizationContent.services.description,
    items: beYoursThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: beYoursThemeCustomizationContent.whyChoose.eyebrow,
    heading: beYoursThemeCustomizationContent.whyChoose.heading,
    description: beYoursThemeCustomizationContent.whyChoose.description,
    items: beYoursThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: beYoursThemeCustomizationContent.portfolio.eyebrow,
    heading: beYoursThemeCustomizationContent.portfolio.heading,
    description: beYoursThemeCustomizationContent.portfolio.description,
    items: beYoursThemeCustomizationContent.portfolio.items,
    ctaLabel: beYoursThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: beYoursThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={beYoursThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={beYoursThemeCustomizationContent.brands.title}
        items={beYoursThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={beYoursThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={beYoursThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={beYoursThemeCustomizationContent.services.eyebrow}
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
        eyebrow={beYoursThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={beYoursThemeCustomizationContent.faqsHeading}
        idPrefix="beyours-faq"
        items={beYoursThemeCustomizationContent.faqs}
      />
    </div>
  );
}
