import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type TextBoxSectionProps = {
  heading: string;
  text?: string;
  paragraphs?: readonly string[];
  subheading?: string;
  listItems?: readonly string[];
  className?: string;
};

export function TextBoxSection({
  heading,
  text,
  paragraphs,
  subheading,
  listItems,
  className = "single-text-box-sec pb-0",
}: TextBoxSectionProps) {
  const contentParagraphs = paragraphs ?? (text ? [text] : []);

  return (
    <section className={className} data-section="single-text-box">
      <Container>
        <div className="text-box-wrap rounded-[20px] bg-[#fbf7ed] px-[55px] py-[70px] max-[1199px]:p-[30px_20px]">
          <div className="text mx-[15px] max-[1199px]:mx-0">
            <h2 className="mb-3 text-center font-montreal-medium text-[35px] leading-[48.475px] font-medium tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl">
              {formatBrText(heading, "max-[1199px]:hidden")}
            </h2>
            {contentParagraphs.map((paragraph, index) => (
              <p
                className="single-text-box-desc mb-6 text-center text-sm leading-[24px] font-normal text-[#535353] last:mb-0 max-[992px]:text-sm max-[992px]:leading-[27px]"
                key={index}
              >
                {paragraph}
              </p>
            ))}
            {subheading ? (
              <h3 className="mt-8 mb-2.5 text-center font-montreal-medium text-[18px] font-medium leading-[34.2px] text-[#535353]">
                {subheading}
              </h3>
            ) : null}
            {listItems && listItems.length > 0 ? (
              <ul className="mx-auto w-fit list-disc text-left">
                {listItems.map((item, index) => (
                  <li
                    className="mx-auto mb-[15px] w-fit text-[16px] font-medium leading-[34.2px] text-[#535353] last:mb-0 max-[767px]:text-sm max-[767px]:leading-7"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}