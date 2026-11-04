import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import {
  seoServicesBrands,
  seoServicesFaqs,
  seoServicesHeroContent,
  seoServicesOutcomesContent,
  seoServicesSectionCopy,
  seoServicesTools,
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
        density="flexible"
      />
      <ThemeCustomizationServicesSection
        content={seoServicesWhyChoose}
        id="why-choose-seo"
        variant="green"
      />
      <AgencyServicesSection
        columns={2}
        content={seoServicesWhatWeProvide}
        headerLayout="split"
        id="services"
      />
      <ShopifyMigrationNumberedGridSection
        description={seoServicesOutcomesContent.description}
        eyebrow={seoServicesOutcomesContent.eyebrow}
        heading={seoServicesOutcomesContent.heading}
        items={seoServicesOutcomesContent.items}
        id="seo-outcomes"
        variant="pista"
      />
      <WhiteLabelToolsSection
        className="seo-tools"
        description={seoServicesSectionCopy.toolsDescription}
        title={seoServicesSectionCopy.toolsHeading}
        rows={[seoServicesTools]}
      />
      <ThemeCustomizationServicesSection
        content={seoServicesWhyChooseUs}
        id="why-choose-dynamic-dreamz"
        variant="green"
      />
      <SplitFaqSection
        description={seoServicesSectionCopy.faqDescription}
        heading={seoServicesSectionCopy.faqHeading}
        idPrefix="seo-faq"
        items={seoServicesFaqs}
      />
    </div>
  );
}
