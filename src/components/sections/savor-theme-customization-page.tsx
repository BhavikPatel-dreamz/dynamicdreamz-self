import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { savorThemeCustomizationContent } from "@/content/savor-theme-customization";

export function SavorThemeCustomizationPage() {
  const brandsContent = {
    heading: savorThemeCustomizationContent.brands.title,
    slug: "savor-theme-customization",
  };

  const servicesContent = {
    heading: savorThemeCustomizationContent.services.heading,
    description: savorThemeCustomizationContent.services.description,
    items: savorThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: savorThemeCustomizationContent.whyChoose.eyebrow,
    heading: savorThemeCustomizationContent.whyChoose.heading,
    description: savorThemeCustomizationContent.whyChoose.description,
    items: savorThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: savorThemeCustomizationContent.portfolio.eyebrow,
    heading: savorThemeCustomizationContent.portfolio.heading,
    description: savorThemeCustomizationContent.portfolio.description,
    items: savorThemeCustomizationContent.portfolio.items,
    ctaLabel: savorThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: savorThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={savorThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={savorThemeCustomizationContent.brands.title}
        items={savorThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={savorThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={savorThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={savorThemeCustomizationContent.services.eyebrow}
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
        eyebrow={savorThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={savorThemeCustomizationContent.faqsHeading}
        idPrefix="savor-faq"
        items={savorThemeCustomizationContent.faqs}
      />
    </div>
  );
}
