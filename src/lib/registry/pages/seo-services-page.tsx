import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyReasonsSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { LetsBuildSection } from "@/components/blocks/QuoteRequestCTABlock";
import { PillListSection } from "@/components/blocks/TechStackShowcaseBlock";
import { ServiceHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustriesServedSection } from "@/components/blocks/IndustryVerticalsGridBlock";
import { ShopifyThemeTechSection } from "@/components/blocks/TechStackShowcaseBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeWhyChooseSection } from "@/components/blocks/KeyBenefitsGridBlock";
import {
  seoServicesFaqs,
  seoServicesHeroContent,
  seoServicesIndustries,
  seoServicesLetsBuild,
  seoServicesOutcomesContent,
  seoServicesSectionCopy,
  seoServicesToolsContent,
  seoServicesWhatWeProvide,
  seoServicesWhyChoose,
  seoServicesWhyChooseUs,
} from "@/content/seo-services";

export function SeoServicesPage() {
  return (
    <div>
      <ServiceHeroSection
        content={seoServicesHeroContent}
        variant="centered"
      />
      <PillListSection
        content={seoServicesWhyChoose}
        id="why-choose-seo"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={seoServicesWhatWeProvide}
        headerLayout="split"
        id="services"
        variant="compact"
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={seoServicesOutcomesContent}
        id="seo-outcomes"
        layout="carousel"
      />
      <ShopifyThemeTechSection
        columns={5}
        content={seoServicesToolsContent}
      />
      <ThemeWhyChooseSection
        backgroundVariant="gradient"
        content={seoServicesWhyChooseUs}
        id="why-choose-dynamic-dreamz"
      />
      <IndustriesServedSection
        content={seoServicesIndustries}
      />
      <SplitFaqSection
        heading={seoServicesSectionCopy.faqHeading}
        idPrefix="seo-faq"
        items={seoServicesFaqs}
      />
      <LetsBuildSection
        content={seoServicesLetsBuild}
        id="lets-build"
      />
    </div>
  );
}
