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
        "shopify-development-process bg-white py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="wrapper flex flex-wrap max-[1199px]:row-gap-[30px] max-[767px]:flex-col">
          {content.steps.map((step, index) => {
            const stepNum = step.number ?? String(index + 1).padStart(2, "0");

            return (
              <div
                className="item relative w-[20%] max-[1199px]:w-1/3 max-[767px]:flex max-[767px]:w-full max-[767px]:items-start max-[767px]:pb-6"
                key={step.title}
              >
                {/* Horizontal connecting line on desktop, vertical on mobile */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-6 left-0 h-[1px] w-full bg-[rgba(40,40,40,0.14)] max-[1199px]:hidden max-[767px]:!block max-[767px]:top-11 max-[767px]:left-[22px] max-[767px]:h-full max-[767px]:w-[1px] last:hidden"
                />

                <div className="number relative z-[2] grid size-12 place-items-center rounded-full border border-[#ad5151]/40 bg-white font-montserrat text-base font-bold text-[#ad5151] shadow-xs max-[767px]:size-11 shrink-0">
                  <span>{stepNum}</span>
                </div>

                <div className="text mt-[18px] pr-5 max-[1199px]:mt-[15px] max-[767px]:mt-2 max-[767px]:w-[calc(100%-44px)] max-[767px]:pr-0 max-[767px]:pl-4">
                  <h3 className="mb-1.5 font-montserrat text-lg font-bold text-ink max-[767px]:text-base">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm font-medium leading-6 text-[#535353]">
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
