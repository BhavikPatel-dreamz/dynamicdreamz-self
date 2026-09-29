import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { BigCommerceIcon } from "@/components/sections/bigcommerce/bigcommerce-icons";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        className="hide-logo"
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
        className="single-text-box-sec pb-0 pt-20"
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
        className="our-development-process bg-transparent"
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
