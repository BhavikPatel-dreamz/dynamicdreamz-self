import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryCustomDevelopmentSection } from "@/components/sections/industry/industry-custom-development-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import {
  petIndustryBrands,
  petIndustryBrandsConfig,
  petIndustryBrandsHeading,
  petIndustryChallenges,
  petIndustryCustomDev,
  petIndustryFaqEyebrow,
  petIndustryFaqHeading,
  petIndustryFaqs,
  petIndustryHero,
  petIndustryPortfolio,
  petIndustrySolutions,
  petIndustryTechnologies,
  petIndustryTestimonials,
  petIndustryWhyChoose,
} from "@/content/pet-industry";

export function PetIndustryPage() {
  return (
    <>
      <ServiceHeroVideoSection content={petIndustryHero} />
      <IndustryBrandsSection
        content={petIndustryBrandsConfig}
        heading={petIndustryBrandsHeading}
        items={petIndustryBrands}
      />
      <ThemeCustomizationServicesSection
        content={petIndustryChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={petIndustrySolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={petIndustryCustomDev} />
      <WhiteLabelToolsSection
        description={petIndustryTechnologies.description}
        rows={petIndustryTechnologies.rows}
        title={petIndustryTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={petIndustryPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={petIndustryWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={petIndustryTestimonials.description}
        eyebrow={petIndustryTestimonials.eyebrow}
        heading={petIndustryTestimonials.heading}
        items={petIndustryTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={petIndustryFaqEyebrow}
        heading={petIndustryFaqHeading}
        idPrefix="pet-industry-faq"
        items={petIndustryFaqs}
      />
    </>
  );
}
