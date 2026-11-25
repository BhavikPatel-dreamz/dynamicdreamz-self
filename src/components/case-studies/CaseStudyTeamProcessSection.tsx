import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyTeamProcess } from "@/types/case-study";

type CaseStudyTeamProcessSectionProps = {
  teamProcess?: CaseStudyTeamProcess;
};

/**
 * Renders the case-study Team & Process section with a cream role-chip block
 * on the left and a numbered engineering workflow panel on the right.
 */
export function CaseStudyTeamProcessSection({
  teamProcess,
}: CaseStudyTeamProcessSectionProps) {
  if (!teamProcess) {
    return null;
  }

  const eyebrow = teamProcess.eyebrow || caseStudiesUiCopy.teamProcessEyebrow;
  const processParagraphs = teamProcess.processDescription
    ? teamProcess.processDescription.split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <section
      className="service-delivered team-process pt-20 pb-0 max-[992px]:pt-[50px]"
      aria-labelledby="team-process-heading"
    >
      <Container>
        <div
          className="wrapper flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)]"
          data-aos="fade-up"
        >
          <div className="left-block w-[35%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[34px] max-[1200px]:w-[40%] max-[1200px]:p-[30px] max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:px-5 max-[992px]:py-[25px] max-[768px]:px-[15px] max-[768px]:py-5">
            {eyebrow ? (
              <Eyebrow align="start" as="div" className="mb-4" lineThickness="thin">
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2
              id="team-process-heading"
              className="m-0 font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-[#282828] max-[1200px]:text-[30px] max-[1200px]:leading-[42px] max-[768px]:text-2xl max-[768px]:leading-[31.2px]"
            >
              {teamProcess.heading}
            </h2>

            {teamProcess.teamChips.length > 0 ? (
              <div className="team-grid-new mt-[15px] grid grid-cols-2 gap-2.5 max-[768px]:gap-[9px]">
                {teamProcess.teamChips.map((chip, idx) => (
                  <div
                    key={`${chip.role}-${idx}`}
                    className="team-chip rounded-[14px] border border-[rgba(40,40,40,0.11)] bg-white p-[15px] max-[768px]:rounded-[10px] max-[768px]:px-2.5 max-[768px]:py-[15px]"
                  >
                    <strong className="block font-sans text-[20px] font-bold leading-6 text-[#ad5151] max-[768px]:text-base">
                      {chip.count}
                    </strong>
                    <span className="mt-1 block font-sans text-xs font-medium leading-[1.4] text-[#535353]">
                      {chip.role}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="right-block flex w-[65%] bg-white max-[1200px]:w-[60%] max-[992px]:w-full">
            <div className="process-panel w-full p-[30px] max-[768px]:px-[15px] max-[768px]:py-5">
              {teamProcess.processHeading ? (
                <h3 className="mb-3 font-montreal-medium text-[24px] font-normal leading-normal text-[#282828] max-[768px]:text-[18px] max-[768px]:leading-[28px]">
                  {teamProcess.processHeading}
                </h3>
              ) : null}
              {processParagraphs.map((para, idx) => (
                <p
                  key={`process-desc-${idx}`}
                  className="mb-[15px] last:mb-0 font-sans text-sm font-normal leading-6 text-[#535353]"
                >
                  {para}
                </p>
              ))}

              {teamProcess.processSteps.length > 0 ? (
                <div className="process-steps mt-6 border-t border-[rgba(40,40,40,0.11)]">
                  {teamProcess.processSteps.map((step, idx) => (
                    <div
                      key={`${step.number}-${idx}`}
                      className="process-step grid grid-cols-[20px_1fr] gap-2.5 border-b border-[rgba(40,40,40,0.11)] py-[18px] last:border-b-0 last:pb-0"
                    >
                      <span className="font-sans text-sm font-medium leading-6 text-[#ad5151]">
                        {step.number}
                      </span>
                      <strong className="font-sans text-sm font-medium leading-6 text-[#535353]">
                        {step.text}
                      </strong>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
