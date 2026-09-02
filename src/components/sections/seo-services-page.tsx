import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { LetsBuildSection } from "@/components/sections/lets-build-section";
import { PillListSection } from "@/components/sections/pill-list-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { ShopifyThemeTechSection } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
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
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec full-width-sec shopify-theme-customization-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]"
        content={seoServicesHeroContent}
        variant="centered"
      />
      <PillListSection
        content={seoServicesWhyChoose}
        id="why-choose-seo"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={seoServicesWhatWeProvide}
        headerLayout="split"
        id="services"
        variant="compact"
      />
      <ShopifyReasonsSection
        carouselFullBleed
        className="shopify-customization-services-sec mb-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[992px]:mb-[50px] max-[992px]:py-[50px]"
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
        className="industries-served-sec pb-20 max-[992px]:pb-[50px]"
        content={seoServicesIndustries}
      />
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[767px]:py-10"
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
