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
  sportsOutdoorsBrands,
  sportsOutdoorsBrandsConfig,
  sportsOutdoorsBrandsHeading,
  sportsOutdoorsChallenges,
  sportsOutdoorsCustomDev,
  sportsOutdoorsFaqEyebrow,
  sportsOutdoorsFaqHeading,
  sportsOutdoorsFaqs,
  sportsOutdoorsHero,
  sportsOutdoorsPortfolio,
  sportsOutdoorsSolutions,
  sportsOutdoorsTechnologies,
  sportsOutdoorsTestimonials,
  sportsOutdoorsWhyChoose,
} from "@/content/sports-outdoors";

export function SportsOutdoorsPage() {
  return (
    <>
      <ServiceHeroVideoSection content={sportsOutdoorsHero} />
      <IndustryBrandsSection
        content={sportsOutdoorsBrandsConfig}
        heading={sportsOutdoorsBrandsHeading}
        items={sportsOutdoorsBrands}
      />
      <ThemeCustomizationServicesSection
        content={sportsOutdoorsChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={sportsOutdoorsSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={sportsOutdoorsCustomDev} />
      <WhiteLabelToolsSection
        description={sportsOutdoorsTechnologies.description}
        rows={sportsOutdoorsTechnologies.rows}
        title={sportsOutdoorsTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={sportsOutdoorsPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={sportsOutdoorsWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={sportsOutdoorsTestimonials.description}
        eyebrow={sportsOutdoorsTestimonials.eyebrow}
        heading={sportsOutdoorsTestimonials.heading}
        items={sportsOutdoorsTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={sportsOutdoorsFaqEyebrow}
        heading={sportsOutdoorsFaqHeading}
        idPrefix="sports-outdoors-faq"
        items={sportsOutdoorsFaqs}
      />
    </>
  );
}
