import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import { cn } from "@/lib/class-names";
import type { CaseStudyPlatformArchitecture } from "@/types/case-study";

type CaseStudyPlatformArchitectureSectionProps = {
  platformArchitecture?: CaseStudyPlatformArchitecture;
};

/**
 * Renders the case-study Platform Architecture split block with a cream overview
 * + core rule panel on the left and a layered architecture node diagram on the right.
 */
export function CaseStudyPlatformArchitectureSection({
  platformArchitecture,
}: CaseStudyPlatformArchitectureSectionProps) {
  if (!platformArchitecture || platformArchitecture.flowRows.length === 0) {
    return null;
  }

  const eyebrow =
    platformArchitecture.eyebrow || caseStudiesUiCopy.platformArchitectureEyebrow;
  const descriptionParagraphs = platformArchitecture.description
    ? platformArchitecture.description.split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <section
      className="service-delivered platform-architecture py-20 max-[992px]:py-[50px]"
      aria-labelledby="platform-architecture-heading"
    >
      <Container>
        <div
          className="wrapper flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)]"
          data-aos="fade-up"
        >
          <div className="left-block w-[35%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[34px] max-[1200px]:p-[30px] max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:px-5 max-[992px]:py-[25px] max-[768px]:p-5">
            {eyebrow ? (
              <Eyebrow align="start" as="div" className="mb-4" lineThickness="thin">
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2
              id="platform-architecture-heading"
              className="mb-3 font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-[#282828] max-[1200px]:text-[30px] max-[1200px]:leading-[42px] max-[768px]:text-2xl max-[768px]:leading-[31.2px]"
            >
              {platformArchitecture.heading}
            </h2>
            {descriptionParagraphs.map((para, idx) => (
              <p
                key={`arch-desc-${idx}`}
                className="mb-[15px] font-sans text-sm font-normal leading-6 text-[#535353]"
              >
                {para}
              </p>
            ))}
            {platformArchitecture.coreRuleText ? (
              <div className="core-rule">
                <span className="mb-2.5 block font-sans text-sm font-semibold leading-6 text-[#535353]">
                  {platformArchitecture.coreRuleLabel || caseStudiesUiCopy.coreRuleLabel}
                </span>
                <p className="m-0 border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px] font-sans text-[13px] font-medium leading-6 text-[#535353]">
                  {platformArchitecture.coreRuleText}
                </p>
              </div>
            ) : null}
          </div>

          <div className="right-block flex w-[65%] max-[992px]:w-full">
            <div className="arch-flow grid w-full gap-3 bg-white p-[34px] max-[1200px]:p-5">
              {platformArchitecture.flowRows.map((row, rowIndex) => (
                <div key={`arch-row-group-${rowIndex}`} className="contents">
                  <div className="arch-row flex flex-wrap justify-center gap-2.5">
                    {row.nodes.map((node, nodeIndex) => {
                      const variant = node.variant || "default";
                      return (
                        <div
                          key={`${node.title}-${nodeIndex}`}
                          className={cn(
                            "arch-node min-w-[130px] flex-1 rounded-[16px] border px-[14px] py-[17px] text-center",
                            variant === "primary"
                              ? "primary border-[#192019] bg-[#192019] text-white"
                              : variant === "accent"
                                ? "accent border-[rgba(40,40,40,0.11)] bg-[#edf2ee] text-[#535353]"
                                : "border-[rgba(40,40,40,0.11)] bg-[#fafaf7] text-[#535353]",
                          )}
                        >
                          <small
                            className={cn(
                              "block text-xs font-semibold uppercase leading-[1.4]",
                              variant === "primary" ? "text-white" : "text-[#535353]",
                            )}
                          >
                            {node.category}
                          </small>
                          <strong
                            className={cn(
                              "mt-1.5 block text-[13px] font-bold leading-[1.3]",
                              variant === "primary" ? "text-white" : "text-[#282828]",
                            )}
                          >
                            {node.title}
                          </strong>
                        </div>
                      );
                    })}
                  </div>
                  {row.showArrowAfter ? (
                    <div
                      aria-hidden="true"
                      className="arch-arrow text-center text-[18px] font-bold leading-6 text-[#ad5151]"
                    >
                      {caseStudiesUiCopy.architectureArrow}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
