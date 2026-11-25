import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyProjectTakeaway } from "@/types/case-study";

type CaseStudyProjectTakeawaySectionProps = {
  projectTakeaway?: CaseStudyProjectTakeaway;
};

/**
 * Renders the closing warm-cream Project Takeaway summary band with centered
 * heading and highlighted red closing statement matching the live case study template.
 */
export function CaseStudyProjectTakeawaySection({
  projectTakeaway,
}: CaseStudyProjectTakeawaySectionProps) {
  if (!projectTakeaway || projectTakeaway.paragraphs.length === 0) {
    return null;
  }

  const eyebrow =
    projectTakeaway.eyebrow || caseStudiesUiCopy.projectTakeawayEyebrow;

  return (
    <section
      className="project-takeaway bg-[#fbefd7] py-20 max-[992px]:py-[50px]"
      aria-labelledby="project-takeaway-heading"
    >
      <Container>
        <div
          className="section_title_with_eyebrow mx-auto mb-0 max-w-[840px] text-center"
          data-aos="fade-up"
        >
          <div className="title">
            {eyebrow ? (
              <div className="mb-4 flex justify-center">
                <Eyebrow align="center" as="span" lineThickness="thin">
                  {eyebrow}
                </Eyebrow>
              </div>
            ) : null}
            <h2
              id="project-takeaway-heading"
              className="mb-3 font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-[#282828] max-[1200px]:text-[30px] max-[1200px]:leading-[42px] max-[768px]:text-2xl max-[768px]:leading-[31.2px]"
            >
              {projectTakeaway.heading}
            </h2>
          </div>

          <div className="section_text">
            {projectTakeaway.paragraphs.map((para, idx) => (
              <p
                key={`takeaway-p-${idx}`}
                className="mb-[15px] last:mb-0 font-sans text-base font-medium leading-7 text-[#535353] max-[1200px]:text-sm max-[1200px]:leading-6"
              >
                {para.highlight ? (
                  <strong className="font-bold text-[#ad5151]">
                    {para.text}
                  </strong>
                ) : (
                  para.text
                )}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
