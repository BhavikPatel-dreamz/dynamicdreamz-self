import { CaseStudyDetailHero } from "@/components/sections/case-study-details/case-study-detail-hero";
import { CaseStudyNarrative } from "@/components/sections/case-study-details/case-study-narrative";
import { CaseStudyShowcases } from "@/components/sections/case-study-details/case-study-showcases";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import type { CaseStudyDetail } from "@/types/case-study";

type CaseStudyDetailPageProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyDetailPage({ caseStudy }: CaseStudyDetailPageProps) {
  return (
    <div className="overflow-x-clip">
      <CaseStudyDetailHero caseStudy={caseStudy} />
      <CaseStudyNarrative clientName={caseStudy.clientName} sections={caseStudy.sections} />
      <CaseStudyShowcases
        clientName={caseStudy.clientName}
        wireframes={caseStudy.wireframes}
        colors={caseStudy.colors}
        typefaces={caseStudy.typefaces}
        design={caseStudy.design}
      />
      <CtaBannerSection ctaLabel="REQUEST A QUOTE" />
    </div>
  );
}
