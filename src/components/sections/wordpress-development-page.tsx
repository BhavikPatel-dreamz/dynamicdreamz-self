import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  wordpressDevelopmentBrands,
  wordpressDevelopmentCta,
  wordpressDevelopmentFaqs,
  wordpressDevelopmentHero,
  wordpressDevelopmentPortfolio,
  wordpressDevelopmentServices,
  wordpressDevelopmentTestimonials,
} from "@/content/wordpress-development";

export function WordPressDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={wordpressDevelopmentHero} />
      <IndustryBrandsSection content={wordpressDevelopmentBrands} />
      <AgencyServicesSection content={wordpressDevelopmentServices} />
      <PortfolioShowcaseSection
        content={wordpressDevelopmentPortfolio}
        ctaLabel={wordpressDevelopmentPortfolio.ctaLabel}
        ctaHref={wordpressDevelopmentPortfolio.ctaHref}
      />
      <div id="shopify-testimonials">
        <HappyClientSection
          description={wordpressDevelopmentTestimonials.description}
          heading={wordpressDevelopmentTestimonials.heading}
        />
      </div>
      <FaqSection
        items={wordpressDevelopmentFaqs}
        idPrefix="wordpress-development-faq"
      />
      <CtaBannerSection
        heading={wordpressDevelopmentCta.heading}
        ctaLabel={wordpressDevelopmentCta.ctaLabel}
        ctaHref={wordpressDevelopmentCta.ctaHref}
      />
    </div>
  );
}
