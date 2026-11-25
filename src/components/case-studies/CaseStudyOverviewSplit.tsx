import React from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import { cn } from "@/lib/class-names";
import type {
  CaseStudyChallenge as ChallengeType,
  CaseStudySolutions as SolutionsType,
} from "@/types/case-study";
import { SplitSectionHeading } from "../ui/split-section-heading";

function getChallengeBorderClasses(index: number, count: number) {
  const desktopCols =
    count <= 1 ? 1 : count === 2 ? 2 : count === 3 ? 3 : count === 5 ? 5 : 4;
  const tabletCols =
    count <= 1 ? 1 : count === 2 ? 2 : count === 3 ? 3 : count === 5 ? 3 : 4;

  const desktopTop = index < desktopCols;
  const desktopLeft = index % desktopCols === 0;
  const tabletTop = index < tabletCols;
  const tabletLeft = index % tabletCols === 0;
  const mobileTop = index === 0;

  return cn(
    "border-r border-b border-[rgba(40,40,40,0.11)]",
    desktopTop ? "min-[1200px]:border-t" : "min-[1200px]:border-t-0",
    desktopLeft ? "min-[1200px]:border-l" : "min-[1200px]:border-l-0",
    tabletTop
      ? "min-[768px]:max-[1200px]:border-t"
      : "min-[768px]:max-[1200px]:border-t-0",
    tabletLeft
      ? "min-[768px]:max-[1200px]:border-l"
      : "min-[768px]:max-[1200px]:border-l-0",
    mobileTop ? "max-[768px]:border-t" : "max-[768px]:border-t-0",
    "max-[768px]:border-l max-[768px]:border-r max-[768px]:border-b",
  );
}

export function CaseStudyChallenge({ challenge }: { challenge?: ChallengeType }) {
  if (!challenge || !challenge.items || challenge.items.length === 0) {
    return null;
  }

  const eyebrow = challenge.eyebrow || caseStudiesUiCopy.challengeEyebrow;
  const heading = challenge.heading || caseStudiesUiCopy.challengeHeading;

  const count = challenge.items.length;
  let gridColsClass = "grid-cols-4 max-[768px]:grid-cols-1";
  if (count <= 1) {
    gridColsClass = "grid-cols-1";
  } else if (count === 2) {
    gridColsClass = "grid-cols-2 max-[768px]:grid-cols-1";
  } else if (count === 3) {
    gridColsClass = "grid-cols-3 max-[768px]:grid-cols-1";
  } else if (count === 5) {
    gridColsClass = "grid-cols-5 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-1";
  }

  return (
    <section
      id="explore"
      className="scroll-mt-20 py-20 max-[992px]:py-[50px]"
      aria-labelledby="challenge-heading"
    >
      <Container>
        <SplitSectionHeading
          heading={heading}
          headingId="challenge-heading"
          description={challenge.description}
          eyebrow={eyebrow}
          variant="left"
        />

        <div className={`grid ${gridColsClass}`} data-aos="fade-up">
          {challenge.items.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className={cn(
                "flex flex-col bg-white p-5",
                getChallengeBorderClasses(index, count),
              )}
            >
              <div className="mb-[25px]">
                <span className="block font-montserrat text-[26px] font-medium leading-none text-[#ad5151]">
                  {item.number}
                </span>
              </div>
              <div>
                {item.title ? (
                  <h3 className="mb-2.5 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-[#282828] max-[992px]:text-[18px] max-[992px]:leading-[26px]">
                    {item.title}
                  </h3>
                ) : null}
                {item.description ? (
                  <p className="m-0 font-sans text-[14px] font-normal leading-[22px] text-[#535353] whitespace-pre-line">
                    {item.description}
                  </p>
                ) : null}
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
    <section
      className="bg-[#192019] py-20 text-white max-[992px]:py-[50px]"
      aria-labelledby="solutions-heading"
    >
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div data-aos="fade-up">
            <Eyebrow as="div" className="mb-4" lineThickness="thin" tone="inverse">
              {eyebrow}
            </Eyebrow>
            <h2
              id="solutions-heading"
              className="mb-3 font-montreal-medium text-[35px] font-normal leading-[1.4] text-white max-[1200px]:text-[30px] max-[768px]:text-2xl max-[768px]:leading-[1.3]"
            >
              {heading}
            </h2>
            {solutions.lead && (
              <p className="m-0 font-sans text-sm font-normal leading-6 text-white whitespace-pre-line">
                {solutions.lead}
              </p>
            )}
          </div>

          <div className="mt-8" data-aos="fade-up">
            {solutions.items.map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                className="flex items-start border-b border-white/16 py-4 first:border-t first:border-white/16"
              >
                <div className="w-[35px] shrink-0 font-montserrat font-semibold text-[#ad5151]">
                  <span>{item.number}</span>
                </div>
                <p className="m-0 w-[calc(100%-35px)] font-sans text-sm font-normal leading-6 text-white whitespace-pre-line">
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
