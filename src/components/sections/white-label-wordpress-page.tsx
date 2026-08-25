import {
  WhiteLabelFaqSection,
  WhiteLabelFinalCtaSection,
} from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelHeroSection } from "@/components/sections/white-label/white-label-hero-section";
import { WhiteLabelPricingSection } from "@/components/sections/white-label/white-label-pricing-section";
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
  whiteLabelWordPressPlans,
  whiteLabelWordPressProcess,
  whiteLabelWordPressReasons,
  whiteLabelWordPressServices,
  whiteLabelWordPressStats,
  whiteLabelWordPressToolRows,
  whiteLabelWordPressSectionCopy,
} from "@/content/white-label-wordpress-development";

export function WhiteLabelWordPressPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection hero={whiteLabelWordPressHero} />
      <WhiteLabelStatsSection stats={whiteLabelWordPressStats} />
      <WhiteLabelWhySection
        reasons={whiteLabelWordPressReasons}
        title={whiteLabelWordPressSectionCopy.reasonsTitle}
      />
      <WhiteLabelServicesSection
        idPrefix="white-label-wordpress-service"
        services={whiteLabelWordPressServices}
        title={whiteLabelWordPressSectionCopy.servicesTitle}
      />
      <WhiteLabelPricingSection
        description={whiteLabelWordPressSectionCopy.pricingDescription}
        plans={whiteLabelWordPressPlans}
        title={whiteLabelWordPressSectionCopy.pricingTitle}
      />
      <WhiteLabelToolsSection
        ariaLabel="WordPress technologies and tools"
        rows={whiteLabelWordPressToolRows}
        title={whiteLabelWordPressSectionCopy.toolsTitle}
      />
      <WhiteLabelProcessSection
        note={whiteLabelWordPressSectionCopy.processNote}
        steps={whiteLabelWordPressProcess}
        title={whiteLabelWordPressSectionCopy.processTitle}
      />
      <WhiteLabelFaqSection
        faqs={whiteLabelWordPressFaqs}
        idPrefix="white-label-wordpress-faq"
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} />
    </div>
  );
}
