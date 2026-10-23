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
    <div>
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
        
        idPrefix="white-label-wordpress-faq"
        items={whiteLabelWordPressFaqs}
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} variant="certifiedDevelopers"/>
    </div>
  );
}
