import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyMeasuredResults } from "@/types/case-study";

type CaseStudyMeasuredResultsSectionProps = {
  measuredResults?: CaseStudyMeasuredResults;
};

/**
 * Renders the dark forest-green Measured Results section with header and
 * bordered 3-column metric card grid matching the live case study template.
 */
export function CaseStudyMeasuredResultsSection({
  measuredResults,
}: CaseStudyMeasuredResultsSectionProps) {
  if (!measuredResults || measuredResults.items.length === 0) {
    return null;
  }

  const eyebrow = measuredResults.eyebrow || caseStudiesUiCopy.featuresEyebrow;

  return (
    <section
      className="measured-results mt-20 bg-[#192019] py-20 max-[992px]:mt-[50px] max-[992px]:py-[50px]"
      aria-labelledby="measured-results-heading"
    >
      <Container>
        <SplitSectionHeading
          dark
          description={measuredResults.description}
          eyebrow={eyebrow}
          heading={measuredResults.heading}
          headingId="measured-results-heading"
          pClassName="text-white"
          variant="left"
        />

        <div
          className="results-grid grid grid-cols-3 gap-px overflow-hidden rounded-[22px] border border-[#424842] bg-[#424842] max-[768px]:grid-cols-1"
          data-aos="fade-up"
        >
          {measuredResults.items.map((item, index) => (
            <div
              key={`${item.stat}-${index}`}
              className="result-card h-full bg-[#222823] p-6"
            >
              <strong className="mb-3 block font-sans text-[30px] font-bold leading-6 text-white max-[1200px]:text-[24px] max-[992px]:text-[20px] max-[768px]:mb-[7px]">
                {item.stat}
              </strong>
              <span className="block font-sans text-sm font-normal leading-6 text-white">
                {item.label}
              </span>
              {item.note ? (
                <small className="block font-sans text-xs font-normal leading-6 text-[#d79a96]">
                  {item.note}
                </small>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
