import { CaseStudiesHero } from "@/components/sections/case-studies/case-studies-hero";
import { CaseStudiesListing } from "@/components/sections/case-studies/case-studies-listing";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { caseStudiesBrandLogos, caseStudiesContent } from "@/content/case-studies";

const brandSection = {
  slug: "case-studies",
  brands: {
    ariaLabel: "Brands featured in Dynamic Dreamz case studies",
  },
} as const;

export function CaseStudiesPage() {
  return (
    <div className="overflow-x-clip" data-page="case-studies">
      <CaseStudiesHero />
      <IndustryBrandsSection
        content={brandSection}
        density="compact"
        items={caseStudiesBrandLogos}
        mobileSpacing="standard"
      />
      <CaseStudiesListing content={caseStudiesContent} />
    </div>
  );
}
