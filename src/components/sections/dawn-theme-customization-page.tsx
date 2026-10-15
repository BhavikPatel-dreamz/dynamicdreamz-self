import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { dawnThemeCustomizationContent } from "@/content/dawn-theme-customization";

export function DawnThemeCustomizationPage() {
  const brandsContent = {
    heading: dawnThemeCustomizationContent.brands.title,
    slug: "dawn-theme-customization",
  };

  const servicesContent = {
    heading: dawnThemeCustomizationContent.services.heading,
    description: dawnThemeCustomizationContent.services.description,
    items: dawnThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: dawnThemeCustomizationContent.whyChoose.eyebrow,
    heading: dawnThemeCustomizationContent.whyChoose.heading,
    description: dawnThemeCustomizationContent.whyChoose.description,
    items: dawnThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: dawnThemeCustomizationContent.portfolio.eyebrow,
    heading: dawnThemeCustomizationContent.portfolio.heading,
    description: dawnThemeCustomizationContent.portfolio.description,
    items: dawnThemeCustomizationContent.portfolio.items,
    ctaLabel: dawnThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: dawnThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={dawnThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={dawnThemeCustomizationContent.brands.title}
        items={dawnThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={dawnThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={dawnThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={dawnThemeCustomizationContent.services.eyebrow}
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
        eyebrow={dawnThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={dawnThemeCustomizationContent.faqsHeading}
        idPrefix="dawn-faq"
        items={dawnThemeCustomizationContent.faqs}
      />
    </div>
  );
}
