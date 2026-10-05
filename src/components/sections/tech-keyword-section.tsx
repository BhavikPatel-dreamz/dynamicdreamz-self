import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";

export type TechKeywordContent = {
  eyebrow?: string;
  heading: string;
  introText?: string;
  highlightedText?: string;
  bodyText?: string;
};

export type TechKeywordSectionProps = {
  content: TechKeywordContent;
  className?: string;
  id?: string;
};

export function TechKeywordSection({
  content,
  className,
  id,
}: TechKeywordSectionProps) {
  return (
    <section
      className={cn(
        "tech-keyword-box bg-[#fafaf7] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="wrapper grid grid-cols-[0.8fr_1.2fr] items-center gap-[55px] rounded-[24px] border border-[rgba(40,40,40,0.11)] bg-white p-[34px_38px] max-[1199px]:grid-cols-[0.8fr_1fr] max-[1199px]:gap-2.5 max-[1199px]:p-[30px_20px] max-[767px]:grid-cols-1 max-[767px]:gap-0">
          <div className="section_title_with_eyebrow mb-0">
            <div className="title w-full">
              {content.eyebrow ? (
                <div className="eyebrow mb-4">
                  <Eyebrow as="span">{content.eyebrow}</Eyebrow>
                </div>
              ) : null}
              <h2 className="font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-ink max-[1199px]:text-[28px] max-[1199px]:leading-[38px] max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {content.heading}
              </h2>
            </div>
          </div>
          <div className="tech-keyword-copy max-[767px]:mt-4">
            <p className="font-sans text-base font-normal leading-7 text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {content.introText ? `${content.introText} ` : null}
              {content.highlightedText ? (
                <strong className="font-semibold text-ink">
                  {content.highlightedText}
                </strong>
              ) : null}
              {content.bodyText ? content.bodyText : null}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
