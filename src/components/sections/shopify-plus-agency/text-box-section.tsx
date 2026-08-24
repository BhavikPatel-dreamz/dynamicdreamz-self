import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type TextBoxSectionProps = {
  heading: string;
  text?: string;
  paragraphs?: readonly string[];
  className?: string;
};

export function TextBoxSection({
  heading,
  text,
  paragraphs,
  className = "single-text-box-sec pb-0",
}: TextBoxSectionProps) {
  const contentParagraphs = paragraphs ?? (text ? [text] : []);

  return (
    <section className={className} data-section="single-text-box">
      <Container>
        <div className="text-box-wrap rounded-[20px] bg-[#fbf7ed] px-[55px] py-[70px] max-[1199px]:p-[30px_20px]">
          <div className="text mx-[15px] max-[1199px]:mx-0">
            <h2 className="mb-6 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl">
              {formatBrText(heading, "max-[1199px]:hidden")}
            </h2>
            {contentParagraphs.map((paragraph, index) => (
              <p
                className="single-text-box-desc mb-6 text-center text-[16px] leading-[34.2px] font-medium text-[#535353] last:mb-0 max-[991px]:text-sm max-[991px]:leading-[27px]"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}