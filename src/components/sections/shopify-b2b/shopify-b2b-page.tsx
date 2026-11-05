import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ShopifyB2BApproachSection } from "@/components/sections/shopify-b2b/shopify-b2b-approach-section";
import { ShopifyB2BSmartB2BSection } from "@/components/sections/shopify-b2b/shopify-b2b-smart-b2b-section";
import { ShopifyHorizontalProcessSection } from "@/components/sections/shopify-horizontal-process-section";
import { ShopifyMobileAppExperienceSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { globalBrandLogos } from "@/content/brands";
import {
  shopifyB2bApproach,
  shopifyB2bBehind,
  shopifyB2bBrands,
  shopifyB2bCaseStudies,
  shopifyB2bFaqs,
  shopifyB2bHero,
  shopifyB2bIndustries,
  shopifyB2bProcess,
  shopifyB2bServices,
  shopifyB2bSmartB2b,
  shopifyB2bWhyChoose,
} from "@/content/shopify-b2b";

export function ShopifyB2BPage() {
  return (
    <>
      <ServiceHeroVideoSection content={shopifyB2bHero} />
      <IndustryBrandsSection
        content={shopifyB2bBrands}
        heading={shopifyB2bBrands.heading}
        items={globalBrandLogos}
        showHeading
      />
      <EvaluationFrameworkSection
        content={shopifyB2bBehind}
        id="behind-shopify-b2b"
        theme="cyan"
      />
      <ShopifyMobileAppExperienceSection
        columns={3}
        content={shopifyB2bServices}
        id="shopping_eperience"
      />
      <ShopifyB2BApproachSection
        content={shopifyB2bApproach}
        id="choose-approach"
      />
      <ShopifyB2BSmartB2BSection
        content={shopifyB2bSmartB2b}
        id="smart-b2b"
      />
      <IndustriesServedSection
        content={shopifyB2bIndustries}
        variant="grid"
      />
      <ShopifyHorizontalProcessSection
      className="pt-0 max-[992px]:pt-0 max-[768px]:pt-0"
        content={shopifyB2bProcess}
        id="shopify-development-process"
      />
      <ServicesCaseStudiesSection
        description={shopifyB2bCaseStudies.description}
        eyebrow={shopifyB2bCaseStudies.eyebrow}
        heading={shopifyB2bCaseStudies.heading}
        id="b2b-case-studies"
        items={shopifyB2bCaseStudies.items}
      />
      <ShopifyMobileAppExperienceSection
        columns={4}
        content={shopifyB2bWhyChoose}
        id="why-choose-dd"
      />
      <SplitFaqSection
        description={shopifyB2bFaqs.description}
        eyebrow={shopifyB2bFaqs.eyebrow}
        heading={shopifyB2bFaqs.heading}
        idPrefix="shopify-b2b-faq"
        items={shopifyB2bFaqs.items}
        sectionId="shopify-b2b-faq-section"
      />
    </>
  );
}
