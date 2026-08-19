import { Container } from "@/components/ui/container";

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
        <div className="rounded-[20px] bg-[#fbf7ed] px-[55px] py-[70px] max-[1199px]:p-[30px_20px]">
          <div className="mx-[15px] max-[1199px]:mx-0">
            <h2 className="mb-6 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl">
              {heading.includes("<br>")
                ? heading.split("<br>").map((line, index, lines) => (
                    <span key={line}>
                      {line}
                      {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
                    </span>
                  ))
                : heading}
            </h2>
            {contentParagraphs.map((paragraph, index) => (
              <p
                className="mb-6 text-center text-[18px] leading-[34.2px] font-medium text-[#535353] last:mb-0 max-[767px]:text-base max-[767px]:leading-[28px]"
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