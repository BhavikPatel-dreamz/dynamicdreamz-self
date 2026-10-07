import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { DesignReasonsAccordion } from "@/components/sections/white-label-website-design/design-reasons-accordion";
import {
  WhiteLabelWebsiteDesignAdvantageIcon,
  WhiteLabelWebsiteDesignBenefitIcon,
} from "@/components/sections/white-label-website-design/white-label-website-design-icons";
import { Container } from "@/components/ui/container";
import {
  whiteLabelWebsiteDesignAdvantagesContent,
  whiteLabelWebsiteDesignAiDiscoveryContent,
  whiteLabelWebsiteDesignAiEnginesContent,
  whiteLabelWebsiteDesignBenefitsContent,
  whiteLabelWebsiteDesignCounters,
  whiteLabelWebsiteDesignFaqCopy,
  whiteLabelWebsiteDesignFaqs,
  whiteLabelWebsiteDesignHero,
  whiteLabelWebsiteDesignProcessContent,
  whiteLabelWebsiteDesignReasons,
  whiteLabelWebsiteDesignServices,
  whiteLabelWebsiteDesignServicesContent,
  whiteLabelWebsiteDesignWhyCopy,
} from "@/content/white-label-website-design";

export function WhiteLabelWebsiteDesignPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <CityPageHeroSection content={whiteLabelWebsiteDesignHero} />

      {/* 2. Counters */}
      <WhiteLabelCounterSection counters={whiteLabelWebsiteDesignCounters} />

      {/* 3. Why Choose Accordion */}
      <section className="white_label_wp_development_service_accordion_section website-design bg-[#fafaf7] py-[60px] max-[767px]:py-10">
        <Container className="max-[575px]:px-4">
          <div className="flex items-center justify-between gap-[60px] max-[992px]:flex-col max-[992px]:items-stretch max-[992px]:gap-5">
            <div data-aos="fade-up" className="w-[47%] max-[992px]:w-full">
              <h2 className="mb-[15px] font-sans text-[35px] leading-[1.38] font-bold tracking-[-.7px] text-ink max-[992px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]">
                {whiteLabelWebsiteDesignWhyCopy.title}
              </h2>
              <p className="text-base font-medium leading-[1.9] text-muted">
                {whiteLabelWebsiteDesignWhyCopy.description}
              </p>
            </div>
            <div className="w-[47%] max-[992px]:w-full">
              <DesignReasonsAccordion items={whiteLabelWebsiteDesignReasons} />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Key Benefits */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: whiteLabelWebsiteDesignBenefitsContent.eyebrow,
          heading: whiteLabelWebsiteDesignBenefitsContent.heading,
          description: whiteLabelWebsiteDesignBenefitsContent.description,
          boxes: whiteLabelWebsiteDesignBenefitsContent.boxes.map((box) => ({
            title: box.title,
            description: box.description,
            icon: <WhiteLabelWebsiteDesignBenefitIcon name={box.iconName} />,
          })),
        }}
        variant="green"
      />

      {/* 5. Websites Built for Search & AI */}
      <ShopifyStageServicesSection
        content={whiteLabelWebsiteDesignAiEnginesContent}
      />

      {/* 6. AI Search Visibility */}
      <ShopifyTeamBoxesSection
        content={whiteLabelWebsiteDesignAiDiscoveryContent}
      />

      {/* 7. Process */}
      <OurDevelopmentProcessSection
        content={whiteLabelWebsiteDesignProcessContent}
      />

      {/* 8. The Agency Advantage */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: whiteLabelWebsiteDesignAdvantagesContent.eyebrow,
          heading: whiteLabelWebsiteDesignAdvantagesContent.heading,
          description: whiteLabelWebsiteDesignAdvantagesContent.description,
          boxes: whiteLabelWebsiteDesignAdvantagesContent.boxes.map((box) => ({
            title: box.title,
            description: box.description,
            icon: <WhiteLabelWebsiteDesignAdvantageIcon />,
          })),
        }}
        variant="transparent"
      />

      {/* 9. White Label Services */}
      <WhiteLabelServicesSection
        description={whiteLabelWebsiteDesignServicesContent.description}
        eyebrow={whiteLabelWebsiteDesignServicesContent.eyebrow}
        idPrefix="white-label-website-design-service"
        services={whiteLabelWebsiteDesignServices}
        showCta={false}
        title={whiteLabelWebsiteDesignServicesContent.title}
      />

      {/* 10. Happy Clients */}
      <HappyClientSection />

      {/* 11. FAQs */}
      <SplitFaqSection
        className="faq-sec bg-sky-blue"
        description={whiteLabelWebsiteDesignFaqCopy.description}
        heading={whiteLabelWebsiteDesignFaqCopy.heading}
        idPrefix="white-label-website-design-faq"
        items={whiteLabelWebsiteDesignFaqs}
      />
    </div>
  );
}
