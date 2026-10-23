import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyDetail } from "@/types/case-study";

import { CaseStudyKeyMetrics } from "./CaseStudyMetricsStrip";
import { CaseStudyChallenge, CaseStudySolutions } from "./CaseStudyOverviewSplit";
import {
  CaseStudyKeyFeatures,
  CaseStudyServiceDelivered,
  CaseStudyCustomSections,
} from "./CaseStudyVisualGallery";
import { CaseStudyRelated } from "./RelatedCaseStudiesSection";

type CaseStudyHeroProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const eyebrowBadges =
    caseStudy.heroEyebrows && caseStudy.heroEyebrows.length > 0
      ? caseStudy.heroEyebrows
      : [caseStudy.technology, caseStudy.industry].filter(Boolean);

  return (
    <section className="relative bg-[#F7F4E9] py-[60px] max-[992px]:py-10 max-[767px]:py-8" aria-labelledby="case-study-title">
      <Container>
        <div className="flex flex-wrap items-center justify-between max-[992px]:flex-col-reverse max-[992px]:gap-0">
          <div className="w-[47%] max-[1199px]:w-[50%] max-[992px]:mt-10 max-[992px]:w-full">
            {eyebrowBadges.length > 0 && (
              <div className="relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                {eyebrowBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className={`font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] max-[1199px]:text-[12px] max-[767px]:text-[10px] ${
                      index > 0
                        ? "relative ml-2.5 pl-2.5 after:absolute after:left-[-2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#535353] after:content-['']"
                        : ""
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <h1
              id="case-study-title"
              className="mb-[22px] font-display text-[38px] font-medium leading-[48px] tracking-[-0.76px] text-[#282828] max-[1199px]:text-[30px] max-[1199px]:leading-tight max-[767px]:mb-4 max-[767px]:text-[24px] max-[767px]:leading-[1.3]"
            >
              {caseStudy.title}
            </h1>
            <p className="mb-6 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-[14px] max-[767px]:leading-[26px]">
              {caseStudy.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2.5 max-[575px]:w-full max-[575px]:flex-col [&_a]:max-[575px]:w-full [&_a]:text-center">
              {caseStudy.websiteUrl ? (
                <ButtonLink
                  href={caseStudy.websiteUrl}
                  external
                  variant="primary"
                  aria-label={caseStudiesUiCopy.visitWebsite}
                >
                  {caseStudiesUiCopy.visitWebsite}
                </ButtonLink>
              ) : null}
              <ButtonLink
                href="#explore"
                variant="outline"
                aria-label={caseStudiesUiCopy.exploreCaseStudy}
              >
                {caseStudiesUiCopy.exploreCaseStudy}
              </ButtonLink>
            </div>
          </div>

          <div className="w-[46%] max-[1199px]:w-[47%] max-[992px]:w-full">
            <div className="overflow-hidden rounded-[20px] shadow-[0_28px_65px_rgba(40,40,40,0.11)] max-[992px]:mx-auto max-[992px]:max-w-[680px]">
              <Image
                src={caseStudy.hero.image.src}
                alt={caseStudy.hero.image.alt}
                width={caseStudy.hero.image.width}
                height={caseStudy.hero.image.height}
                sizes="(max-width: 991px) calc(100vw - 40px), 571px"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type CaseStudyAllInfoProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyAllInfo({ caseStudy }: CaseStudyAllInfoProps) {
  const items = [
    {
      label: caseStudiesUiCopy.facts.project,
      value: caseStudy.projectTitle || caseStudy.title,
      isPrimary: true,
    },
    {
      label: caseStudiesUiCopy.facts.industry,
      value: caseStudy.industry,
      isPrimary: false,
    },
    {
      label: caseStudiesUiCopy.facts.technology,
      value: caseStudy.technology,
      isPrimary: false,
    },
    {
      label: caseStudiesUiCopy.facts.location,
      value: caseStudy.location,
      isPrimary: false,
    },
  ];

  return (
    <section className="border-b border-[rgba(40,40,40,0.11)] bg-white max-[767px]:border-b-0" aria-label={caseStudiesUiCopy.keyMetricsHeading}>
      <Container>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <div
              key={item.label}
              className={
                item.isPrimary
                  ? "w-[40%] border-l-0 py-6 pr-6 pl-0 max-[1199px]:w-1/2 max-[1199px]:p-5 max-[767px]:w-full max-[767px]:border-b max-[767px]:border-[rgba(40,40,40,0.11)] max-[767px]:py-4 max-[767px]:px-0"
                  : "w-[20%] border-l border-[rgba(40,40,40,0.11)] p-6 max-[1199px]:w-1/2 max-[1199px]:p-5 max-[1199px]:even:border-l max-[1199px]:odd:border-l-0 max-[767px]:w-full max-[767px]:border-l-0 max-[767px]:border-b max-[767px]:border-[rgba(40,40,40,0.11)] max-[767px]:py-4 max-[767px]:px-0"
              }
            >
              <span className="mb-1.5 block font-montserrat text-[14px] font-extrabold uppercase leading-[19px] tracking-[1.12px] text-[#282828]">
                {item.label}
              </span>
              <p className="m-0 font-sans text-[16px] font-medium leading-[1.6] text-[#535353] max-[1199px]:text-[14px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type CaseStudyDetailPageProps = {
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
