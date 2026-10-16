import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { WooCommerceServiceIcon } from "@/lib/icons/woocommerce-service-icons";
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
    <div>
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
