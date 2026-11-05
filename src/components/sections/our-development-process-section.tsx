import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ProcessStepItem = {
  step: string;
  title: string;
  description: string;
};

export type OurDevelopmentProcessContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: readonly ProcessStepItem[];
};

export type OurDevelopmentProcessSectionProps = {
  content: OurDevelopmentProcessContent;
  isBgTransparent?: boolean
  id?: string;
  eyebrowVariant?: "pill" | "dash";
  columns?: 3 | 4;
};

export function OurDevelopmentProcessSection({
  content,
  id,
  columns,
  isBgTransparent
}: OurDevelopmentProcessSectionProps) {
  const is3Col = columns === 3 || content.steps.length === 6;
  const bg = isBgTransparent ? "bg-transparent" : "bg-[#fafaf7]";

  return (
    <section
      id={id}
      className={cn(
        "our-development-process py-20 max-[992px]:py-15 max-[768px]:py-10",
        bg,
      )}
    >
      <Container>
        <SplitSectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {content.steps.map((item, idx) => (
            <div
              key={item.step}
              className={cn(
                is3Col
                  ? cn(
                      "item p-5 border-[rgba(40,40,40,0.11)]",
                      // Desktop 3-col
                      "min-[1200px]:w-1/3 min-[1200px]:border-t min-[1200px]:border-r",
                      idx < 3 ? "min-[1200px]:border-b-0" : "min-[1200px]:border-b",
                      idx % 3 === 0 && "min-[1200px]:border-l",
                      // Tablet 2-col
                      "max-[1200px]:w-1/2 max-[1200px]:border-b",
                      idx < 2 ? "max-[1200px]:border-t" : "max-[1200px]:border-t-0",
                      idx % 2 === 0
                        ? "max-[1200px]:border-l max-[1200px]:border-r-0"
                        : "max-[1200px]:border-l max-[1200px]:border-r",
                      // Mobile 1-col
                      "max-[768px]:w-full max-[768px]:border-t! max-[768px]:border-l! max-[768px]:border-r! max-[768px]:border-b-0! max-[768px]:p-[18px] max-[768px]:last:border-b!",
                    )
                  : cn(
                      "item w-1/4 p-5 border-t border-r border-b border-[rgba(40,40,40,0.11)]",
                      idx === 0 && "border-l",
                      "max-[1200px]:w-1/2 max-[1200px]:[&:nth-child(odd)]:border-l max-[1200px]:[&:nth-child(n+3)]:border-t-0",
                      "max-[768px]:w-full max-[768px]:border-t! max-[768px]:border-l! max-[768px]:border-r! max-[768px]:border-b-0! max-[768px]:p-[18px] max-[768px]:last:border-b!",
                    ),
              )}
            >
              <span className="mb-[15px] block text-xs font-semibold uppercase text-brand-red">
                {item.step}
              </span>
              <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[992px]:text-[18px] max-[992px]:leading-[26px]">
                {item.title}
              </h3>
              <p className="text-sm font-normal leading-[22px] text-[#535353]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
