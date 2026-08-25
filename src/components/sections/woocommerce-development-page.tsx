import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  woocommerceDevelopmentFaqs,
  woocommerceDevelopmentHero,
  woocommerceDevelopmentPortfolio,
  woocommerceDevelopmentServices,
  woocommerceDevelopmentTestimonials,
} from "@/content/woocommerce-development";

export function WooCommerceDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={woocommerceDevelopmentHero}
      />
      <AgencyServicesSection content={woocommerceDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[991px]:pt-10"
        content={woocommerceDevelopmentPortfolio}
      />
      <HappyClientSection
        description={woocommerceDevelopmentTestimonials.description}
        heading={woocommerceDevelopmentTestimonials.heading}
        items={woocommerceDevelopmentTestimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20"
        idPrefix="woocommerce-dev-faq"
        items={woocommerceDevelopmentFaqs}
      />
    </div>
  );
}
