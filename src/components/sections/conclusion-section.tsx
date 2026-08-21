import { Container } from "@/components/ui/container";

export type ConclusionSectionProps = {
  content: {
    heading?: string;
    paragraphs: readonly string[];
    ctaText?: string;
  };
  className?: string;
  id?: string;
};

export function ConclusionSection({
  content,
  className = "conclusion-sec pt-[18px] pb-20 max-[767px]:pb-[50px]",
  id = "conclusion",
}: ConclusionSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="conclusion-txt mx-auto max-w-[1140px]">
          {content.heading && (
            <h4 className="mb-4 font-sans text-[24px] font-bold leading-[33px] text-ink max-[767px]:text-[20px]">
              {content.heading}
            </h4>
          )}
          {content.paragraphs.map((paragraph, idx) => (
            <p
              className="mb-4 font-sans text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6"
              key={idx}
            >
              {paragraph}
            </p>
          ))}
          {content.ctaText && (
            <p
              className="font-sans text-base font-bold leading-[27.2px] tracking-[0.02em] text-[#282828] max-[767px]:text-sm max-[767px]:leading-6"
              dangerouslySetInnerHTML={{ __html: content.ctaText }}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
