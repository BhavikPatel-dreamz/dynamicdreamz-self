import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyPerformanceSecurity } from "@/types/case-study";

type CaseStudyPerformanceSecuritySectionProps = {
  performanceSecurity?: CaseStudyPerformanceSecurity;
};

/**
 * Renders the case-study Performance & Security section with the split header
 * and two-column (or single-row highlight when right column is absent) cards.
 */
export function CaseStudyPerformanceSecuritySection({
  performanceSecurity,
}: CaseStudyPerformanceSecuritySectionProps) {
  if (!performanceSecurity) {
    return null;
  }

  const eyebrow =
    performanceSecurity.eyebrow || caseStudiesUiCopy.performanceSecurityEyebrow;
  const hasRightCol = Boolean(
    performanceSecurity.rightTitle ||
      performanceSecurity.rightDescription ||
      (performanceSecurity.rightItems && performanceSecurity.rightItems.length > 0) ||
      performanceSecurity.rightNote,
  );
  const leftDescriptionParagraphs = performanceSecurity.leftDescription
    ? performanceSecurity.leftDescription.split(/\n{2,}/).filter(Boolean)
    : [];
  const rightDescriptionParagraphs = performanceSecurity.rightDescription
    ? performanceSecurity.rightDescription.split(/\n{2,}/).filter(Boolean)
    : [];

  return (
    <section
      className="performance-security pt-20 pb-0 max-[992px]:pt-[50px]"
      aria-labelledby="performance-security-heading"
    >
      <Container>
        <SplitSectionHeading
          description={performanceSecurity.description}
          eyebrow={eyebrow}
          heading={performanceSecurity.heading}
          headingId="performance-security-heading"
          variant="left"
        />

        {hasRightCol ? (
          <div
            className="wrapper grid grid-cols-2 gap-[18px] max-[992px]:grid-cols-1"
            data-aos="fade-up"
          >
            <div className="left-col">
              <div className="left-box-item h-full rounded-[22px] border border-[rgba(40,40,40,0.11)] bg-white p-[30px] max-[1200px]:p-5">
                <div className="left-box-item-title">
                  {performanceSecurity.leftSubtitle ? (
                    <span className="subtitle mb-2.5 block font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-[#ad5151]">
                      {performanceSecurity.leftSubtitle}
                    </span>
                  ) : null}
                  {performanceSecurity.leftTitle ? (
                    <h3 className="mb-2.5 font-montreal-medium text-[22px] font-normal leading-[30px] text-[#282828] max-[768px]:text-[18px] max-[768px]:leading-[26px]">
                      {performanceSecurity.leftTitle}
                    </h3>
                  ) : null}
                  {leftDescriptionParagraphs.map((para, idx) => (
                    <p
                      key={`perf-left-p-${idx}`}
                      className="mb-[15px] last:mb-0 font-sans text-sm font-normal leading-6 text-[#535353]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {performanceSecurity.leftRows.length > 0 ? (
                  <div className="stack-list-main">
                    <div className="stack-list mt-6 border-t border-[rgba(40,40,40,0.11)]">
                      {performanceSecurity.leftRows.map((row, idx) => (
                        <div
                          key={`${row.title}-${idx}`}
                          className="stack-row grid grid-cols-[125px_1fr_100px] items-start gap-2.5 border-b border-[rgba(40,40,40,0.11)] py-[13px] not-italic max-[1200px]:grid-cols-[125px_1fr_80px] max-[768px]:grid-cols-1"
                        >
                          <strong className="font-sans text-sm font-bold leading-6 text-[#535353]">
                            {row.title}
                          </strong>
                          <span className="font-sans text-sm font-normal leading-6 text-[#535353]">
                            {row.detail}
                          </span>
                          <em className="font-sans text-xs font-medium not-italic leading-6 text-[#ad5151] max-[1200px]:text-[10px] max-[768px]:text-sm">
                            {row.metric}
                          </em>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {performanceSecurity.leftNote ? (
                  <div className="label-box mt-5 block border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px] font-sans text-sm font-medium leading-6 text-[#535353] max-[1200px]:text-xs max-[1200px]:leading-[22px]">
                    {performanceSecurity.leftNote}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="right-col">
              <div className="right-box-item h-full rounded-[22px] border border-[rgba(40,40,40,0.11)] bg-[#edf2ee] p-[30px] max-[1200px]:p-5">
                {performanceSecurity.rightTitle ? (
                  <h3 className="mb-2.5 font-montreal-medium text-[22px] font-normal leading-[30px] text-[#282828] max-[768px]:text-[18px] max-[768px]:leading-[26px]">
                    {performanceSecurity.rightTitle}
                  </h3>
                ) : null}
                {rightDescriptionParagraphs.map((para, idx) => (
                  <p
                    key={`perf-right-p-${idx}`}
                    className="mb-[15px] font-sans text-sm font-normal leading-6 text-[#535353]"
                  >
                    {para}
                  </p>
                ))}

                {performanceSecurity.rightItems &&
                performanceSecurity.rightItems.length > 0 ? (
                  <div className="security-grid mt-6 grid grid-cols-2 gap-2.5 max-[768px]:grid-cols-1">
                    {performanceSecurity.rightItems.map((item, idx) => (
                      <div
                        key={`${item.title}-${idx}`}
                        className="security-item rounded-[14px] border border-[rgba(40,40,40,0.08)] bg-white p-[14px]"
                      >
                        <strong className="block font-sans text-sm font-bold leading-6 text-[#535353]">
                          {item.title}
                        </strong>
                        <span className="mt-[3px] block font-sans text-xs font-normal leading-[19px] text-[#535353]">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {performanceSecurity.rightNote ? (
                  <div className="label-box mt-5 block border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px] font-sans text-sm font-medium leading-6 text-[#535353] max-[1200px]:text-xs max-[1200px]:leading-[22px]">
                    {performanceSecurity.rightNote}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="wrapper grid grid-cols-1" data-aos="fade-up">
            <div className="left-col">
              <div className="left-box-item flex overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] bg-white max-[992px]:flex-wrap">
                <div className="left-box-item-title flex w-[40%] flex-col justify-center bg-[#fbefd7] p-[30px] max-[992px]:w-full max-[992px]:px-5 max-[992px]:py-[25px]">
                  {performanceSecurity.leftSubtitle ? (
                    <span className="subtitle mb-2.5 block font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-[#ad5151]">
                      {performanceSecurity.leftSubtitle}
                    </span>
                  ) : null}
                  {performanceSecurity.leftTitle ? (
                    <h3 className="m-0 font-montreal-medium text-[35px] font-normal leading-normal text-[#282828] max-[1200px]:text-[30px] max-[768px]:text-2xl">
                      {performanceSecurity.leftTitle}
                    </h3>
                  ) : null}
                  {leftDescriptionParagraphs.map((para, idx) => (
                    <p
                      key={`perf-single-p-${idx}`}
                      className="mt-2.5 mb-0 font-sans text-sm font-normal leading-6 text-[#535353]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="stack-list-main w-[60%] px-[30px] py-5 max-[992px]:w-full max-[992px]:px-5">
                  <div className="stack-list">
                    {performanceSecurity.leftRows.map((row, idx) => (
                      <div
                        key={`${row.title}-${idx}`}
                        className="stack-row grid grid-cols-[1.3fr_0.8fr_0.5fr] items-start justify-between gap-2.5 border-b border-[rgba(40,40,40,0.11)] py-[19px] last:border-b-0 max-[992px]:grid-cols-[1fr_1fr_0.5fr] max-[768px]:grid-cols-1"
                      >
                        <strong className="w-full font-sans text-sm font-bold leading-6 text-[#535353]">
                          {row.title}
                        </strong>
                        <span className="w-full text-center font-sans text-sm font-normal leading-6 text-[#535353] max-[768px]:text-left">
                          {row.detail}
                        </span>
                        <em className="w-full text-right font-sans text-xs font-semibold not-italic leading-6 text-[#3d7750] max-[768px]:text-left">
                          {row.metric}
                        </em>
                      </div>
                    ))}
                  </div>
                  {performanceSecurity.leftNote ? (
                    <div className="label-box mt-5 block border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px] font-sans text-sm font-medium leading-6 text-[#535353] max-[1200px]:text-xs max-[1200px]:leading-[22px]">
                      {performanceSecurity.leftNote}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
