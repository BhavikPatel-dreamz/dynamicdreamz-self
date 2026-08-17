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
} from "@/content/white-label-website-design";

export function WhiteLabelWebsiteDesignPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <WhiteLabelHeroSection hero={whiteLabelWebsiteDesignHero} variant="websiteDesign" />
      <WhiteLabelStatsSection stats={whiteLabelWebsiteDesignStats} />

      <section className="bg-[#fafaf7] py-[60px] max-[767px]:py-10">
        <Container className="max-[575px]:px-4">
          <div className="flex items-center justify-between gap-[60px] max-[991px]:flex-col max-[991px]:items-stretch max-[991px]:gap-5">
            <div className="w-[47%] max-[991px]:w-full">
              <h2 className="mb-[15px] font-sans text-[35px] leading-[1.38] font-bold text-ink max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]">
                Why Choose White Label Website Design?
              </h2>
              <p className="text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">
                White label website design entrusts agencies with expanding their services, delivering high quality websites, and saving costs while maintaining their brand identity. It’s the perfect solution for scaling your business without adding complexity.
              </p>
            </div>
            <div className="w-[47%] max-[991px]:w-full">
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
        description="We provide a wide selection of white label website design services customized based on your client's requirements."
        idPrefix="white-label-website-design-service"
        services={whiteLabelWebsiteDesignServices}
        showCta={false}
        title="Our White Label Web Design Services"
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
