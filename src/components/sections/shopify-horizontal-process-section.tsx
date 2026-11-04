import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ProcessStepItem = {
  number?: string;
  title: string;
  description: string;
};

export type ShopifyHorizontalProcessContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  steps: readonly ProcessStepItem[];
};

export type ShopifyHorizontalProcessSectionProps = {
  content: ShopifyHorizontalProcessContent;
  className?: string;
  id?: string;
};

export function ShopifyHorizontalProcessSection({
  content,
  className,
  id = "shopify-development-process",
}: ShopifyHorizontalProcessSectionProps) {
  return (
    <section
      className={cn(
        "shopify-development-process py-20 max-[992px]:py-15 max-[768px]:py-10",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px]"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div data-aos="fade-up" className="wrapper flex flex-wrap max-[1200px]:row-gap-[30px] max-[768px]:flex-col">
          {content.steps.map((step, index) => {
            const stepNum = step.number ?? String(index + 1).padStart(2, "0");

            return (
              <div
                data-aos="fade-up"
                className="item relative w-[20%] max-[1200px]:w-1/3 max-[768px]:flex max-[768px]:w-full max-[768px]:items-start max-[768px]:pb-6"
                key={step.title}
              >
                {/* Horizontal connecting line on desktop, vertical on mobile */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-6 left-0 h-[1px] w-full bg-[rgba(40,40,40,0.14)] max-[1200px]:hidden max-[768px]:!block max-[768px]:top-11 max-[768px]:left-[22px] max-[768px]:h-full max-[768px]:w-[1px] last:hidden"
                />

                <div className="number relative z-[2] grid size-12 place-items-center rounded-full border border-[#ad5151]/40 bg-white font-montserrat text-sm font-bold text-[#ad5151] shadow-xs max-[768px]:size-11 shrink-0">
                  <span>{stepNum}</span>
                </div>

                <div className="text mt-[18px] pr-5 max-[1200px]:mt-[15px] max-[768px]:mt-2 max-[768px]:w-[calc(100%-44px)] max-[768px]:pr-0 max-[768px]:pl-4">
                  <h3 className="mb-[5px] font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[768px]:text-base">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-6 text-[#535353]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
