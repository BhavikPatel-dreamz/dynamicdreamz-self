import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  ShopifyAdvantagesSection,
  ShopifyReasonsSection,
} from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  bigCommerceDevelopmentBrands,
  bigCommerceDevelopmentCtaBanner,
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
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={bigCommerceDevelopmentHero} />
      <IndustryBrandsSection
        content={{
          slug: "bigcommerce-development",
        }}
        items={bigCommerceDevelopmentBrands}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={bigCommerceDevelopmentIntro.heading}
        paragraphs={bigCommerceDevelopmentIntro.paragraphs}
      />
      <AgencyServicesSection content={bigCommerceDevelopmentServices} />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mt-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]"
        content={bigCommerceWhyChoosePlatform}
        id="why-choose-bigcommerce"
      />
      <ProcessWaveSection content={bigCommerceDevelopmentProcess} />
      <ShopifyAdvantagesSection
        align="left"
        className="three-column-icon-with-text-sec why_dynamic_dreamz_sec py-20 max-[767px]:py-[60px]"
        content={bigCommerceWhyChooseAgency}
        id="why-choose-dynamicdreamz"
      />
      <PortfolioShowcaseSection
        className="our-work-sec pb-20 max-[992px]:pb-[60px]"
        content={bigCommerceDevelopmentPortfolio}
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
      <CtaBannerSection
        ctaHref={bigCommerceDevelopmentCtaBanner.ctaHref}
        ctaLabel={bigCommerceDevelopmentCtaBanner.ctaLabel}
        heading={bigCommerceDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
