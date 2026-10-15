import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WhiteLabelFinalCtaSection } from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import {
  WhiteLabelStatsSection,
  WhiteLabelWhySection,
} from "@/components/sections/white-label/white-label-proof-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import {
  whiteLabelWordPressFaqs,
  whiteLabelWordPressFinalCta,
  whiteLabelWordPressHero,
  whiteLabelWordPressPricing,
  whiteLabelWordPressProcess,
  whiteLabelWordPressReasons,
  whiteLabelWordPressSectionCopy,
  whiteLabelWordPressServices,
  whiteLabelWordPressStats,
  whiteLabelWordPressToolRows,
} from "@/content/white-label-wordpress-development";

export function WhiteLabelWordPressPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={whiteLabelWordPressHero}
      />
      <WhiteLabelStatsSection
        stats={whiteLabelWordPressStats}
        variant="minimal"
      />
      <WhiteLabelWhySection
        reasons={whiteLabelWordPressReasons}
        title={whiteLabelWordPressSectionCopy.reasonsTitle}
      />
      <WhiteLabelServicesSection
        ctaLabel={whiteLabelWordPressSectionCopy.servicesCta}
        idPrefix="white-label-wordpress-service"
        services={whiteLabelWordPressServices}
        title={whiteLabelWordPressSectionCopy.servicesTitle}
      />
      <PricingTableSection content={whiteLabelWordPressPricing} />
      <WhiteLabelToolsSection
        ariaLabel="WordPress technologies and tools"
        description={whiteLabelWordPressSectionCopy.toolsDescription}
        rows={whiteLabelWordPressToolRows}
        title={whiteLabelWordPressSectionCopy.toolsTitle}
      />
      <WhiteLabelProcessSection
        note={whiteLabelWordPressSectionCopy.processNote}
        steps={whiteLabelWordPressProcess}
        title={whiteLabelWordPressSectionCopy.processTitle}
      />
      <SplitFaqSection
        heading={whiteLabelWordPressSectionCopy.faqHeading}
        headingClassName="!font-display !text-[35px] !font-medium !leading-[48.475px] !tracking-[-0.7px] text-ink max-[992px]:!text-[30px] max-[992px]:!leading-10 max-[767px]:!text-2xl max-[767px]:!leading-[33.24px] max-[767px]:!tracking-[-0.48px]"
        idPrefix="white-label-wordpress-faq"
        items={whiteLabelWordPressFaqs}
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} variant="certifiedDevelopers"/>
    </div>
  );
}
