import {
  WhiteLabelFaqSection,
} from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelHeroSection } from "@/components/sections/white-label/white-label-hero-section";
import { WhiteLabelStatsSection } from "@/components/sections/white-label/white-label-proof-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { DesignReasonsAccordion } from "@/components/sections/white-label-website-design/design-reasons-accordion";
import {
  WhiteLabelDesignAdvantagesSection,
  WhiteLabelDesignBenefitsSection,
} from "@/components/sections/white-label-website-design/design-card-carousels";
import {
  WhiteLabelDesignAiDiscoverySection,
  WhiteLabelDesignAiEnginesSection,
  WhiteLabelDesignFeaturesSection,
  WhiteLabelDesignPartnerAndIndustriesSections,
  WhiteLabelDesignProcessSection,
  WhiteLabelDesignTestimonialsSection,
} from "@/components/sections/white-label-website-design/design-static-sections";
import { Container } from "@/components/ui/container";
import {
  whiteLabelWebsiteDesignFaqs,
  whiteLabelWebsiteDesignHero,
  whiteLabelWebsiteDesignReasons,
  whiteLabelWebsiteDesignServices,
  whiteLabelWebsiteDesignStats,
  whiteLabelWebsiteDesignSectionCopy,
} from "@/content/white-label-website-design";

export function WhiteLabelWebsiteDesignPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection hero={whiteLabelWebsiteDesignHero} variant="websiteDesign" />
      <WhiteLabelStatsSection stats={whiteLabelWebsiteDesignStats} />

      <section className="bg-[#fafaf7] py-[60px] max-[767px]:py-10">
        <Container className="max-[575px]:px-4">
          <div className="flex items-center justify-between gap-[60px] max-[992px]:flex-col max-[992px]:items-stretch max-[992px]:gap-5">
            <div className="w-[47%] max-[992px]:w-full">
              <h2 className="mb-[15px] font-sans text-[35px] leading-[1.38] font-bold text-ink max-[992px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35] tracking-[-.7px]">
                {whiteLabelWebsiteDesignSectionCopy.whyChooseTitle}
              </h2>
              <p className="text-base leading-[1.9] font-medium text-muted">
                {whiteLabelWebsiteDesignSectionCopy.whyChooseDescription}
              </p>
            </div>
            <div className="w-[47%] max-[992px]:w-full">
              <DesignReasonsAccordion items={whiteLabelWebsiteDesignReasons} />
            </div>
          </div>
        </Container>
      </section>

      <WhiteLabelDesignBenefitsSection />
      <WhiteLabelDesignAiEnginesSection />
      <WhiteLabelDesignAiDiscoverySection />
      <WhiteLabelDesignProcessSection />
      <WhiteLabelDesignFeaturesSection />
      <WhiteLabelDesignAdvantagesSection />
      <WhiteLabelServicesSection
        description={whiteLabelWebsiteDesignSectionCopy.servicesDescription}
        idPrefix="white-label-website-design-service"
        services={whiteLabelWebsiteDesignServices}
        showCta={false}
        title={whiteLabelWebsiteDesignSectionCopy.servicesTitle}
      />
      <WhiteLabelDesignPartnerAndIndustriesSections />
      <WhiteLabelDesignTestimonialsSection />
      <WhiteLabelFaqSection
        faqs={whiteLabelWebsiteDesignFaqs}
        idPrefix="white-label-website-design-faq"
      />
    </div>
  );
}
