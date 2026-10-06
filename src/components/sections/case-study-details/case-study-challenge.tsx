import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyChallenge as ChallengeType } from "@/types/case-study";

type CaseStudyChallengeProps = {
  challenge?: ChallengeType;
};

export function CaseStudyChallenge({ challenge }: CaseStudyChallengeProps) {
  if (!challenge || !challenge.items || challenge.items.length === 0) {
    return null;
  }

  const eyebrow = challenge.eyebrow || caseStudiesUiCopy.challengeEyebrow;
  const heading = challenge.heading || caseStudiesUiCopy.challengeHeading;

  const count = challenge.items.length;
  let gridColsClass = "grid-cols-4 max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1";
  if (count <= 2) {
    gridColsClass = "grid-cols-2 max-[767px]:grid-cols-1";
  } else if (count === 3 || count === 5 || count === 6) {
    gridColsClass = "grid-cols-3 max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1";
  }

  return (
    <section id="explore" className="scroll-mt-20 py-20 max-[767px]:py-[50px]" aria-labelledby="challenge-heading">
      <Container>
        <div className="mb-10 max-[767px]:mb-6">
          <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
            <span>{eyebrow}</span>
          </div>
          <h2
            id="challenge-heading"
            className="mb-4 font-montserrat text-[35px] font-bold leading-[1.38] text-[#282828] max-[1199px]:text-[28px] max-[767px]:text-2xl"
          >
            {heading}
          </h2>
          {challenge.description && (
            <p className="m-0 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm">
              {challenge.description}
            </p>
          )}
        </div>

        <div className={`grid ${gridColsClass}`}>
          {challenge.items.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className="flex flex-col justify-between border border-[rgba(40,40,40,0.11)] bg-white p-5 -ml-[1px] first:ml-0 max-[1199px]:-ml-0 max-[1199px]:-mt-[1px]"
            >
              <div className="mb-6">
                <span className="block font-montserrat text-[26px] font-medium leading-none text-[#ad5151]">
                  {item.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2.5 font-montserrat text-[18px] font-bold leading-[26px] text-[#282828]">
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
