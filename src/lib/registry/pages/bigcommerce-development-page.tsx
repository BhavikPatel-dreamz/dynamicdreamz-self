import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { BigCommerceIcon } from "@/lib/icons/bigcommerce-icons";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { TextBoxSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import {
  bigCommerceDevelopmentBrands,
  bigCommerceDevelopmentBrandsHeading,
  bigCommerceDevelopmentFaqs,
  bigCommerceDevelopmentHero,
  bigCommerceDevelopmentIntro,
  bigCommerceDevelopmentPortfolio,
  bigCommerceDevelopmentProcess,
  bigCommerceDevelopmentServices,
  bigCommerceDevelopmentTestimonials,
  bigCommerceWhyChooseAgency,
  bigCommerceWhyChoosePlatform,
} from "@/content/bigcommerce-development";

export function BigCommerceDevelopmentPage() {
  const servicesContent = {
    ...bigCommerceDevelopmentServices,
    items: bigCommerceDevelopmentServices.items.map((item) => ({
      ...item,
      iconSvg: <BigCommerceIcon name={item.iconKey} />,
    })),
  };

  const whyChoosePlatformContent = {
    ...bigCommerceWhyChoosePlatform,
    boxes: bigCommerceWhyChoosePlatform.boxes.map((box) => ({
      ...box,
      icon: <BigCommerceIcon name={box.iconKey} />,
    })),
  };

  const whyChooseAgencyContent = {
    ...bigCommerceWhyChooseAgency,
    boxes: bigCommerceWhyChooseAgency.boxes.map((box) => ({
      ...box,
      icon: <BigCommerceIcon name={box.iconKey} />,
    })),
  };

  return (
    <div>
      <CityPageHeroSection
        content={bigCommerceDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "bigcommerce-development",
        }}
        heading={bigCommerceDevelopmentBrandsHeading}
        items={bigCommerceDevelopmentBrands}
      />
      <TextBoxSection
        heading={bigCommerceDevelopmentIntro.heading}
        paragraphs={bigCommerceDevelopmentIntro.paragraphs}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        content={servicesContent}
        eyebrow={bigCommerceDevelopmentServices.eyebrow}
        hideCta
        id="services"
      />
      <ThemeCustomizationServicesSection
        content={whyChoosePlatformContent}
        id="why-choose-bigcommerce"
        variant="yellow"
      />
      <OurDevelopmentProcessSection
        content={bigCommerceDevelopmentProcess}
      />
      <ThemeCustomizationServicesSection
        content={whyChooseAgencyContent}
        id="why-choose-dynamicdreamz"
        variant="green"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={bigCommerceDevelopmentPortfolio}
        eyebrow={bigCommerceDevelopmentPortfolio.eyebrow}
        sectionId="our_work"
      />
      <HappyClientSection
        description={bigCommerceDevelopmentTestimonials.description}
        heading={bigCommerceDevelopmentTestimonials.heading}
        items={bigCommerceDevelopmentTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="bigcommerce-faq"
        items={bigCommerceDevelopmentFaqs}
      />
    </div>
  );
}
