import { CaseStudyAllInfo } from "@/components/sections/case-study-details/case-study-all-info";
import { CaseStudyChallenge } from "@/components/sections/case-study-details/case-study-challenge";
import { CaseStudyCustomSections } from "@/components/sections/case-study-details/case-study-custom-sections";
import { CaseStudyHero } from "@/components/sections/case-study-details/case-study-hero";
import { CaseStudyKeyFeatures } from "@/components/sections/case-study-details/case-study-key-features";
import { CaseStudyKeyMetrics } from "@/components/sections/case-study-details/case-study-key-metrics";
import { CaseStudyRelated } from "@/components/sections/case-study-details/case-study-related";
import { CaseStudyServiceDelivered } from "@/components/sections/case-study-details/case-study-service-delivered";
import { CaseStudySolutions } from "@/components/sections/case-study-details/case-study-solutions";
import type { CaseStudyDetail } from "@/types/case-study";

type CaseStudyDetailPageProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyDetailPage({ caseStudy }: CaseStudyDetailPageProps) {
  return (
    <div className="single-case-study overflow-x-clip">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyAllInfo caseStudy={caseStudy} />
      {caseStudy.keyMetrics && (
        <CaseStudyKeyMetrics keyMetrics={caseStudy.keyMetrics} />
      )}
      <CaseStudyChallenge challenge={caseStudy.challenge} />
      <CaseStudySolutions solutions={caseStudy.solutions} />
      {caseStudy.keyFeatures && (
        <CaseStudyKeyFeatures keyFeatures={caseStudy.keyFeatures} />
      )}
      <CaseStudyServiceDelivered projectDelivery={caseStudy.projectDelivery} />
      {caseStudy.customSections && (
        <CaseStudyCustomSections sections={caseStudy.customSections} />
      )}
      <CaseStudyRelated
        currentSlug={caseStudy.slug}
        relatedSlugs={caseStudy.relatedCaseStudies}
        technology={caseStudy.technology}
        industry={caseStudy.industry}
      />
    </div>
  );
}
