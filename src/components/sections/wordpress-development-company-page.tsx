import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceBenefitsTimelineSection } from "@/components/sections/service-benefits-timeline-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import {
  wordpressDevelopmentCompanyBenefits,
  wordpressDevelopmentCompanyBrands,
  wordpressDevelopmentCompanyCta,
  wordpressDevelopmentCompanyFaqs,
  wordpressDevelopmentCompanyHero,
  wordpressDevelopmentCompanyPortfolio,
  wordpressDevelopmentCompanyProcess,
  wordpressDevelopmentCompanyReasons,
  wordpressDevelopmentCompanyServices,
  wordpressDevelopmentCompanyTestimonials,
} from "@/content/wordpress-development-company";

export function WordPressDevelopmentCompanyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        bodyClassName="min-[1200px]:!text-lg min-[1200px]:!leading-[34.2px]"
        content={wordpressDevelopmentCompanyHero}
        imageClassName="!max-w-[446px]"
        leftColClassName="left-col w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center"
        reviewClassName="!mt-4 max-[991px]:!mt-4"
        rightColClassName="right-col w-[41%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[991px]:w-full"
      />
      <IndustryBrandsSection
        content={wordpressDevelopmentCompanyBrands.content}
        density="compact"
        items={wordpressDevelopmentCompanyBrands.items}
      />
      <AgencyServicesSection
        content={wordpressDevelopmentCompanyServices}
        headerLayout="centered"
        hideCta
        id="wordpress-development-services"
      />
      <ShopifyReasonsSection
        content={wordpressDevelopmentCompanyReasons}
        id="why-choose-dynamic-dreamz"
        layout="carousel"
      />
      <ServiceBenefitsTimelineSection
        content={wordpressDevelopmentCompanyBenefits}
        id="why-choose-wordpress"
      />
      <ProcessWaveSection content={wordpressDevelopmentCompanyProcess} />
      <PortfolioShowcaseSection
        content={wordpressDevelopmentCompanyPortfolio}
        ctaHref={wordpressDevelopmentCompanyPortfolio.ctaHref}
        ctaLabel={wordpressDevelopmentCompanyPortfolio.ctaLabel}
      />
      <HappyClientSection
        description={wordpressDevelopmentCompanyTestimonials.description}
        heading={wordpressDevelopmentCompanyTestimonials.heading}
        items={wordpressDevelopmentCompanyTestimonials.items}
      />
      <FaqSection
        idPrefix="wordpress-development-company-faq"
        items={wordpressDevelopmentCompanyFaqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentCompanyCta.ctaHref}
        ctaLabel={wordpressDevelopmentCompanyCta.ctaLabel}
        heading={wordpressDevelopmentCompanyCta.heading}
      />
    </div>
  );
}
