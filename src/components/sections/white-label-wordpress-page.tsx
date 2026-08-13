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
} from "@/content/white-label-wordpress-development";

export function WhiteLabelWordPressPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection hero={whiteLabelWordPressHero} />
      <WhiteLabelStatsSection stats={whiteLabelWordPressStats} />
      <WhiteLabelWhySection
        reasons={whiteLabelWordPressReasons}
        title="Why Dynamic Dreamz for White-Label?"
      />
      <WhiteLabelServicesSection
        idPrefix="white-label-wordpress-service"
        services={whiteLabelWordPressServices}
        title="White Label WordPress Development Services"
      />
      <WhiteLabelPricingSection
        description="We offer scalable pricing models with no retainer required. Whether you need minor changes, a full-scale project, or a dedicated developer, we offer WordPress solutions customized to your agency's workflow."
        plans={whiteLabelWordPressPlans}
        title="Flexible White Label WordPress Development Plans"
      />
      <WhiteLabelToolsSection
        ariaLabel="WordPress technologies and tools"
        rows={whiteLabelWordPressToolRows}
        title="We Work with a Wide Range of WordPress Technologies"
      />
      <WhiteLabelProcessSection
        note="We value confidentiality and respect our partnership agreements, guaranteeing all work stays under your brand name."
        steps={whiteLabelWordPressProcess}
        title="How Our White Label Partnership Works"
      />
      <WhiteLabelFaqSection
        faqs={whiteLabelWordPressFaqs}
        idPrefix="white-label-wordpress-faq"
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} />
    </div>
  );
}
