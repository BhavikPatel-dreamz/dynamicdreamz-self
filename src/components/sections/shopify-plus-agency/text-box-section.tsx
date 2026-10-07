import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";
import { cn } from "@/lib/class-names";

export type TextBoxSectionProps = {
  heading: string;
  text?: string;
  paragraphs?: readonly string[];
  subheading?: string;
  listItems?: readonly string[];
  className?: string;
  variant?: "green" | "cream";
};

export function TextBoxSection({
  heading,
  text,
  paragraphs,
  subheading,
  listItems,
  className,
  variant = "green",
}: TextBoxSectionProps) {
  const contentParagraphs = paragraphs ?? (text ? [text] : []);
  const isGreen = variant === "green";

  return (
    <section
      className={cn(
        "single-text-box-sec pb-0 pt-20 max-[991px]:pt-[50px]",
        className,
      )}
      data-section="single-text-box"
    >
      <Container>
        <div
          data-aos="fade-up"
          className={cn(
            "text-box-wrap text-center",
            isGreen
              ? "rounded-[30px] border-[1.5px] border-[rgba(23,30,22,0.1)] bg-[#eff4ef] p-10 max-[767px]:p-5"
              : "rounded-[20px] bg-[#fbf7ed] px-[55px] py-[70px] max-[1199px]:p-[30px_20px]",
          )}
        >
          <div className="title mb-3">
            <h2 className="text-center font-montreal-medium text-[30px] font-normal leading-[42px] tracking-normal text-ink min-[1200px]:text-[35px] min-[1200px]:leading-[49px] max-[767px]:text-2xl max-[767px]:leading-8">
              {formatBrText(heading, "max-[1199px]:hidden")}
            </h2>
          </div>
          <div className={cn("text", isGreen ? "m-0" : "mx-[15px] max-[1199px]:mx-0")}>
            {contentParagraphs.map((paragraph, index) => (
              <p
                className="single-text-box-desc mb-[15px] text-center font-montserrat text-sm font-normal leading-6 text-[#535353] last:mb-0 max-[992px]:text-sm max-[992px]:leading-[27px]"
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