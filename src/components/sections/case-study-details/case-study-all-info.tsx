import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyDetail } from "@/types/case-study";

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
