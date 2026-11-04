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
        "tech-keyword-box bg-[#fafaf7] py-20 max-[992px]:py-15 max-[768px]:py-10",
        className,
      )}
      id={id}
    >
      <Container>
        <div data-aos="fade-up" className="wrapper grid grid-cols-[0.8fr_1.2fr] items-center gap-[55px] rounded-[24px] border border-[rgba(40,40,40,0.11)] bg-white p-[34px_38px] max-[1200px]:grid-cols-[0.8fr_1fr] max-[1200px]:gap-2.5 max-[1200px]:p-[30px_20px] max-[768px]:grid-cols-1 max-[768px]:gap-0">
          <div className="section_title_with_eyebrow mb-0">
            <div className="title w-full">
              {content.eyebrow ? (
                <Eyebrow className="mb-4">{content.eyebrow}</Eyebrow>
              ) : null}
              <h2 className="font-display text-[35px] font-medium leading-[48px] tracking-[-0.7px] text-ink max-[1200px]:text-[28px] max-[1200px]:leading-[38px] max-[768px]:text-2xl max-[768px]:leading-[33px]">
                {content.heading}
              </h2>
            </div>
          </div>
          <div className="tech-keyword-copy max-[768px]:mt-4">
            <p className="text-[#535353] font-normal text-[#535353] max-[768px]:text-sm">
              {content.introText ? `${content.introText} ` : null}
              {content.highlightedText ? (
                <strong className="font-bold">
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
