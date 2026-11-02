import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

type NumberedProcessTimelineSectionProps = {
  heading: string;
  eyebrow?: string;
  description?: string;
  items: readonly (string | NumberedProcessTimelineItem)[];
  className?: string;
  headingId?: string;
  layout?: "centered" | "split";
};

type NumberedProcessTimelineItem = {
  text: string;
  lines: readonly [string, string];
};

export function NumberedProcessTimelineSection({
  heading,
  eyebrow,
  description,
  items,
  className,
  headingId = "numbered-process-timeline-title",
}: NumberedProcessTimelineSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "bg-[#fafaf7] py-[110px] max-[1200px]:py-[60px] max-[768px]:py-[50px]",
        className,
      )}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[60px]"
          description={description}
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          variant="left"
        />

        <ol data-aos="fade-up" className="relative grid grid-cols-5 before:absolute before:top-[129px] before:right-0 before:left-0 before:border-t-[1.5px] before:border-dashed before:border-brand-red max-[768px]:grid-cols-1 max-[768px]:border-l-[1.5px] max-[768px]:border-brand-red max-[768px]:pl-2.5 max-[768px]:[border-image:repeating-linear-gradient(to_bottom,#ad5151_0,#ad5151_6px,transparent_6px,transparent_12px)_1] max-[768px]:before:hidden">
          {items.map((item, index) => {
            const label = typeof item === "string" ? item : item.text;

            return (
              <li
                data-aos="fade-up"
                className="relative z-1 flex flex-col items-center px-3 text-center max-[768px]:items-start max-[768px]:py-3 max-[768px]:pr-0 max-[768px]:pl-3 max-[768px]:text-left"
                key={label}
              >
                <span className="relative flex size-[90px] shrink-0 items-center justify-center rounded-full bg-[#f7eeee] text-[30px] leading-[57px] font-bold text-brand-red after:absolute after:-inset-1 after:rounded-full after:border after:border-dashed after:border-brand-red max-[768px]:size-[50px] max-[768px]:text-base max-[768px]:leading-[43px] max-[768px]:after:-inset-1">
                  {index + 1}
                </span>
                <span aria-hidden="true" className="mt-[30px] size-[18px] rounded-[6px] bg-brand-red max-[768px]:absolute max-[768px]:top-4 max-[768px]:-left-[19px] max-[768px]:mt-0 max-[768px]:size-[15px]" />
                <span className="mt-[30px] max-w-[210px] text-lg leading-[25.2px] font-semibold max-[1200px]:text-base max-[992px]:text-sm max-[992px]:leading-[19px] max-[768px]:mt-5 max-[768px]:max-w-none max-[768px]:text-[15px] max-[768px]:leading-5">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <span className="sr-only">{label}</span>
                      <span aria-hidden="true" className="text-[#282828]">
                        {item.lines[0]}
                        <br className="max-[768px]:hidden" />
                        {item.lines[1]}
                      </span>
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
