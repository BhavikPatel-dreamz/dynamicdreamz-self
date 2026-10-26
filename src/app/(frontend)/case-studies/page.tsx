import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { CaseStudiesListing } from "@/components/case-studies/CaseStudyHubFilterGrid";
import { caseStudiesBrandLogos, caseStudiesContent } from "@/content/case-studies";
import { pageMetadata } from "@/data/seo";
import {
  adaptPayloadCaseStudiesToItems,
  getPayloadCaseStudies,
} from "@/lib/payload";
import { createCaseStudiesPageSchema, serializeJsonLd } from "@/lib/schema";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";

export const metadata = pageMetadata.caseStudies;

const brandSection = {
  slug: "case-studies",
  heading:"Trusted by Leading Brands",
  brands: {},
} as const;

export default async function CaseStudiesRoute() {
  const payloadStudies = await getPayloadCaseStudies();
  const items =
    payloadStudies && payloadStudies.length > 0
      ? adaptPayloadCaseStudiesToItems(payloadStudies)
      : caseStudiesContent.items;

  const content = { ...caseStudiesContent, items };

  return (
    <main id="main-content" data-page="case-studies">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCaseStudiesPageSchema(items)),
        }}
      />
      <div className="overflow-x-clip" data-page="case-studies">
        <OurWorkHeroSection
          content={caseStudiesContent.hero}
          fullBleedShowcaseAtTablet
          layout="caseStudiesLive"
          typography="liveMontserrat"
        />
        <IndustryBrandsSection
          content={brandSection}
          heading={brandSection.heading}
          items={caseStudiesBrandLogos}
        />
        <CaseStudiesListing content={content} />
      </div>
    </main>
  );
}
