import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryCustomDevelopmentSection } from "@/components/sections/industry/industry-custom-development-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import {
  fashionBrands,
  fashionBrandsConfig,
  fashionBrandsHeading,
  fashionCaseStudies,
  fashionChallenges,
  fashionCustomDev,
  fashionFaqEyebrow,
  fashionFaqHeading,
  fashionFaqs,
  fashionHero,
  fashionPortfolio,
  fashionSolutions,
  fashionTechnologies,
  fashionTestimonials,
  fashionWhyChoose,
} from "@/content/fashion";

export function FashionPage() {
  return (
    <>
      <ServiceHeroVideoSection content={fashionHero} />
      <IndustryBrandsSection
        content={fashionBrandsConfig}
        heading={fashionBrandsHeading}
        items={fashionBrands}
      />
      <ServicesCaseStudiesSection
        description={fashionCaseStudies.description}
        eyebrow={fashionCaseStudies.eyebrow}
        heading={fashionCaseStudies.heading}
        hideCardDescription={false}
        items={fashionCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={fashionChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={fashionSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={fashionCustomDev} />
      <WhiteLabelToolsSection
        description={fashionTechnologies.description}
        rows={fashionTechnologies.rows}
        title={fashionTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={fashionPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={fashionWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={fashionTestimonials.description}
        eyebrow={fashionTestimonials.eyebrow}
        heading={fashionTestimonials.heading}
        items={fashionTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={fashionFaqEyebrow}
        heading={fashionFaqHeading}
        idPrefix="fashion-faq"
        items={fashionFaqs}
      />
    </>
  );
}
