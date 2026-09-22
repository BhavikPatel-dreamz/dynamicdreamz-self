import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  HireShopifyIcon,
  type HireShopifyIconName,
} from "@/components/sections/hire-shopify-developers/hire-shopify-icons";
import { hireShopifyContent } from "@/content/hire-shopify-developers";

export function HireShopifyDevelopersPage() {
  const whyChooseContent = {
    eyebrow: hireShopifyContent.whyChoose.eyebrow,
    heading: hireShopifyContent.whyChoose.heading,
    description: hireShopifyContent.whyChoose.description,
    boxes: hireShopifyContent.whyChoose.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <HireShopifyIcon name={box.iconKey as HireShopifyIconName} />,
    })),
  };

  const advantagesContent = {
    eyebrow: hireShopifyContent.advantages.eyebrow,
    heading: hireShopifyContent.advantages.heading,
    description: hireShopifyContent.advantages.description,
    boxes: hireShopifyContent.advantages.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <HireShopifyIcon name={box.iconKey as HireShopifyIconName} />,
    })),
  };

  const servicesContent = {
    heading: hireShopifyContent.services.heading,
    description: hireShopifyContent.services.description,
    items: hireShopifyContent.services.items.map((item) => ({
      title: item.title,
      description: item.description,
      iconSvg: <HireShopifyIcon name={item.iconKey as HireShopifyIconName} />,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroVideoSection content={hireShopifyContent.hero} />
      <IndustryBrandsSection
        content={hireShopifyContent.brands}
        heading={hireShopifyContent.brands.heading}
      />
      <ThemeCustomizationServicesSection
        content={whyChooseContent}
        variant="yellow"
      />
      <OurDevelopmentProcessSection
        className="our-development-process bg-transparent"
        content={hireShopifyContent.process}
      />
      <ThemeCustomizationServicesSection
        content={advantagesContent}
        variant="green"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={servicesContent}
        hideCta
        id="services"
        variant="compact"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[60px]"
        columns={4}
        content={hireShopifyContent.work}
        sectionId="our_work"
      />
      <div id="shopify-testimonials">
        <HappyClientSection
          description={hireShopifyContent.testimonials.description}
          eyebrow={hireShopifyContent.testimonials.eyebrow}
          heading={hireShopifyContent.testimonials.heading}
        />
      </div>
      <SplitFaqSection
        heading={hireShopifyContent.faqs.heading}
        idPrefix="hire-shopify-developers-faq"
        items={hireShopifyContent.faqs.items}
      />
    </div>
  );
}
