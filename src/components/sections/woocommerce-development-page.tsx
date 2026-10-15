import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WooCommerceServiceIcon } from "@/components/sections/woocommerce/woocommerce-service-icons";
import {
  woocommerceDevelopmentBrands,
  woocommerceDevelopmentFaqs,
  woocommerceDevelopmentHero,
  woocommerceDevelopmentPortfolio,
  woocommerceDevelopmentServices,
  woocommerceDevelopmentTestimonials,
} from "@/content/woocommerce-development";

export function WooCommerceDevelopmentPage() {
  const servicesContent = {
    ...woocommerceDevelopmentServices,
    items: woocommerceDevelopmentServices.items.map((item) => ({
      ...item,
      iconSvg: item.iconKey ? (
        <WooCommerceServiceIcon name={item.iconKey} />
      ) : undefined,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={woocommerceDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{ slug: "woocommerce-development" }}
        heading={woocommerceDevelopmentBrands.title}
        items={woocommerceDevelopmentBrands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        hideCta
        id="services"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={woocommerceDevelopmentPortfolio}
        eyebrow={woocommerceDevelopmentPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
        variant="liveGrid"
      />
      <HappyClientSection
        description={woocommerceDevelopmentTestimonials.description}
        heading={woocommerceDevelopmentTestimonials.heading}
        items={woocommerceDevelopmentTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="woocommerce-dev-faq"
        items={woocommerceDevelopmentFaqs}
      />
    </div>
  );
}
