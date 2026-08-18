import { CaseStudiesHero } from "@/components/sections/case-studies/case-studies-hero";
import { CaseStudiesListing } from "@/components/sections/case-studies/case-studies-listing";

export function CaseStudiesPage() {
  return (
    <div className="overflow-x-clip" data-page="case-studies">
      <CaseStudiesHero />
      <CaseStudiesListing />
    </div>
  );
}
