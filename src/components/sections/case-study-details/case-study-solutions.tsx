import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudySolutions as SolutionsType } from "@/types/case-study";

type CaseStudySolutionsProps = {
  solutions?: SolutionsType;
};

export function CaseStudySolutions({ solutions }: CaseStudySolutionsProps) {
  if (!solutions || !solutions.items || solutions.items.length === 0) {
    return null;
  }

  const eyebrow = solutions.eyebrow || caseStudiesUiCopy.solutionsEyebrow;
  const heading = solutions.heading || caseStudiesUiCopy.solutionsHeading;

  return (
    <section className="bg-[#192019] py-20 text-white max-[767px]:py-[50px]" aria-labelledby="solutions-heading">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div className="mb-8">
            <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-white before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
              <span>{eyebrow}</span>
            </div>
            <h2
              id="solutions-heading"
              className="mb-4 font-montserrat text-[35px] font-bold leading-[1.38] text-white max-[1199px]:text-[28px] max-[767px]:text-2xl"
            >
              {heading}
            </h2>
            {solutions.lead && (
              <p className="m-0 font-sans text-[16px] font-normal leading-[30.4px] text-white/90 max-[767px]:text-[14px] max-[767px]:leading-[26px]">
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
                <p className="m-0 w-[calc(100%-35px)] font-sans text-[15px] leading-[26px] text-white/90 max-[767px]:text-[14px]">
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
