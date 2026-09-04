import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ShopifyPlusProofSection } from "@/components/sections/shopify-plus-agency/shopify-plus-proof-section";
import {
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyHero,
  shopifyPlusAgencyFaqDescription,
  shopifyPlusAgencyHowToChoose,
  shopifyPlusAgencyIndustries,
  shopifyPlusAgencyPortfolio,
  shopifyPlusAgencyServices,
  shopifyPlusAgencyWhyChoose,
  shopifyPlusAgencyCaseStudies,
  shopifyPlusAgencyPricing,
  shopifyPlusAgencyPageTestimonials,
} from "@/content/shopify-plus-agency";

const brandSection = {
  slug: "shopify-plus-agency",
  ariaLabel: "Trusted by Leading Brands",
  brands: {
    ariaLabel: "Trusted by Leading Brands",
  },
} as const;

export function ShopifyPlusAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        bodyClassName="!text-[16px] !leading-[28px] max-[1199px]:!leading-6 max-[767px]:!text-[16px] max-[767px]:!leading-6"
        className="inner-hero-sec shopify-plus-experts relative overflow-hidden bg-[#f7f4e9] pt-[140px] pb-[85px] max-[992px]:pt-[100px] max-[992px]:pb-[36px] max-[767px]:pt-[102px] max-[767px]:pb-[40px]"
        content={shopifyPlusAgencyHero}
        leftColClassName="left-col w-[51%] max-[1199px]:w-full max-[1199px]:text-center"
        rightColClassName="right-col w-[43.182%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full"
        videoLogoClassName="left-[-90px]"
      />
      <IndustryBrandsSection
        className="max-[991px]:pb-[4px] max-[767px]:pb-4.25"
        content={brandSection}
      />
      <ShopifyPlusProofSection content={shopifyPlusAgencyWhyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec bg-white pt-20 pb-20 max-[992px]:pt-[50px] max-[992px]:pb-[50px]"
        content={{
          ...shopifyPlusAgencyPortfolio,
          platformMark: {
            src: shopifyPlusAgencyPortfolio.platformMark,
            width: 113,
            height: 27,
          },
        }}
        sectionId="our_work"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec bg-white py-20 max-[992px]:py-[50px]"
        content={shopifyPlusAgencyServices}
        eyebrow={shopifyPlusAgencyServices.eyebrow}
        id="services"
      />
      <CaseStudyCardsSection content={shopifyPlusAgencyCaseStudies} />
      <IndustriesServedSection
        className="industries_box_section bg-white py-20 max-[992px]:py-[50px]"
        content={shopifyPlusAgencyIndustries}
        variant="grid"
      />
      <PricingTableSection content={shopifyPlusAgencyPricing} />
      <HappyClientSection
        heading={shopifyPlusAgencyPageTestimonials.heading}
        description={shopifyPlusAgencyPageTestimonials.description}
        items={shopifyPlusAgencyPageTestimonials.items}
        className="bg-white"
      />
      <EvaluationFrameworkSection content={shopifyPlusAgencyHowToChoose} />
      <SplitFaqSection
        description={shopifyPlusAgencyFaqDescription}
        items={shopifyPlusAgencyFaqs}
        idPrefix="shopify-plus-agency-faq"
      />
    </div>
  );
}
