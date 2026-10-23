import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { LetsBuildSection } from "@/components/sections/lets-build-section";
import { PillListSection } from "@/components/sections/pill-list-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { ShopifyThemeTechSection } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import {
  seoServicesBrands,
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
      />
      <IndustryBrandsSection
        content={{ slug: seoServicesBrands.slug }}
        heading={seoServicesBrands.heading}
        items={seoServicesBrands.items}
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
