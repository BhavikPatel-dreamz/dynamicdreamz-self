import React from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type {
  CaseStudyChallenge as ChallengeType,
  CaseStudySolutions as SolutionsType,
} from "@/types/case-study";

export function CaseStudyChallenge({ challenge }: { challenge?: ChallengeType }) {
  if (!challenge || !challenge.items || challenge.items.length === 0) {
    return null;
  }

  const eyebrow = challenge.eyebrow || caseStudiesUiCopy.challengeEyebrow;
  const heading = challenge.heading || caseStudiesUiCopy.challengeHeading;

  const count = challenge.items.length;
  let gridColsClass = "grid-cols-4 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1";
  if (count <= 2) {
    gridColsClass = "grid-cols-2 max-[768px]:grid-cols-1";
  } else if (count === 3 || count === 5 || count === 6) {
    gridColsClass = "grid-cols-3 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1";
  }

  return (
    <section id="explore" className="scroll-mt-20 py-20 max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="challenge-heading">
      <Container>
        <div >
          <Eyebrow as="div" className="mb-4" linePosition="overlay">
            {eyebrow}
          </Eyebrow>
          <h2
            id="challenge-heading"
            className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1200px]:text-[28px] max-[768px]:text-2xl"
          >
            {heading}
          </h2>
          {challenge.description && (
            <p className="m-0 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[768px]:text-sm">
              {challenge.description}
            </p>
          )}
        </div>

        <div className={`grid ${gridColsClass}`}>
          {challenge.items.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className="flex flex-col justify-between border border-[rgba(40,40,40,0.11)] bg-white p-5 -ml-[1px] first:ml-0 max-[1200px]:-ml-0 max-[1200px]:-mt-[1px] max-[768px]:border-b-0 max-[768px]:last:border-b max-[768px]:-mt-[1px]"
            >
              <div className="mb-6">
                <span className="block font-montserrat text-[26px] font-medium leading-none text-[#ad5151]">
                  {item.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2.5 font-display text-[18px] font-medium leading-[26px] text-[#282828]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="m-0 font-sans text-[14px] font-normal leading-[22px] text-[#535353]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CaseStudySolutions({ solutions }: { solutions?: SolutionsType }) {
  if (!solutions || !solutions.items || solutions.items.length === 0) {
    return null;
  }

  const eyebrow = solutions.eyebrow || caseStudiesUiCopy.solutionsEyebrow;
  const heading = solutions.heading || caseStudiesUiCopy.solutionsHeading;

  return (
    <section className="bg-[#192019] py-20 text-white max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="solutions-heading">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div >
            <Eyebrow as="div" className="mb-4" linePosition="overlay" tone="inverse">
              {eyebrow}
            </Eyebrow>
            <h2
              id="solutions-heading"
              className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-white max-[1200px]:text-[28px] max-[768px]:text-2xl"
            >
              {heading}
            </h2>
            {solutions.lead && (
              <p className="m-0 font-sans text-[16px] font-normal leading-[30.4px] text-white/90 max-[768px]:text-[14px] max-[768px]:leading-[26px]">
                {solutions.lead}
              </p>
            )}
          </div>

          <div className="mt-8">
            {solutions.items.map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                className="flex items-start border-b border-white/16 py-4 first:border-t first:border-white/16"
              >
                <div className="w-[35px] shrink-0 font-montserrat text-[16px] font-semibold text-[#ad5151]">
                  <span>{item.number}</span>
                </div>
                <p className="m-0 w-[calc(100%-35px)] font-sans text-[15px] leading-[26px] text-white/90 max-[768px]:text-[14px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export type CaseStudyOverviewSplitProps = {
  challenge?: ChallengeType;
  solutions?: SolutionsType;
};

export function CaseStudyOverviewSplit({ challenge, solutions }: CaseStudyOverviewSplitProps) {
  return (
    <>
      {challenge && <CaseStudyChallenge challenge={challenge} />}
      {solutions && <CaseStudySolutions solutions={solutions} />}
    </>
  );
}
