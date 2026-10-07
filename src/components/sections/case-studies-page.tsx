import { CaseStudiesHero } from "@/components/sections/case-studies/case-studies-hero";
import { CaseStudiesListing } from "@/components/sections/case-studies/case-studies-listing";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { caseStudiesBrandLogos, caseStudiesContent } from "@/content/case-studies";
import type { CaseStudyItem } from "@/types/case-study";

const brandSection = {
  slug: "case-studies",
  brands: {
  },
} as const;

type CaseStudiesPageProps = {
  items?: readonly CaseStudyItem[];
};

export function CaseStudiesPage({ items }: CaseStudiesPageProps = {}) {
  const content = items ? { ...caseStudiesContent, items } : caseStudiesContent;

  return (
    <div className="overflow-x-clip" data-page="case-studies">
      <CaseStudiesHero />
      <IndustryBrandsSection
        content={brandSection}
        density="compact"
        items={caseStudiesBrandLogos}
        mobileSpacing="standard"
      />
      <CaseStudiesListing content={content} />
    </div>
  );
}
