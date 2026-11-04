import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { whiteLabelShopifyProcess, whiteLabelShopifySectionCopy } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import type { WhiteLabelProcessStep } from "@/types/white-label-service";

type WhiteLabelProcessSectionProps = {
  eyebrow?: string;
  title?: string | readonly string[];
  description?: string | readonly string[];
  steps?: readonly WhiteLabelProcessStep[];
  note?: string;
};

export function WhiteLabelProcessSection({
  eyebrow,
  title = whiteLabelShopifySectionCopy.processTitle,
  description,
  steps = whiteLabelShopifyProcess,
  note = whiteLabelShopifySectionCopy.processNote,
}: WhiteLabelProcessSectionProps) {
  const isMobileApp =
    (typeof title === "string" && title.toLowerCase().includes("mobile app")) ||
    (typeof eyebrow === "string" && eyebrow.toLowerCase().includes("mobile app"));
  const containerClass = isMobileApp
    ? "min-[1400px]:max-w-[1408px] px-[15px]"
    : undefined;

  return (
    <section className="white_label_how_partnership_works_section py-20 max-[992px]:py-15 max-[768px]:py-10">
      <Container className={cn("max-[576px]:px-4", containerClass)}>
        <SplitSectionHeading
          className={cn(
            "max-[768px]:mb-5",
            !eyebrow && !description && "mb-[60px] max-[1200px]:mb-[50px] max-[992px]:mb-[30px]",
          )}
          description={description}
          eyebrow={eyebrow}
          heading={title}
          titleColumnClassName={!description ? "w-full" : undefined}
          variant={eyebrow || description ? "left" : "centered"}
        />
        <div data-aos="fade-up" className="partnership_steps flex max-[992px]:flex-wrap">
          {steps.map((step, index) => (
            <article
              style={{ zIndex: steps.length - index }}
              className={cn(
                "step_card relative flex-1 bg-[#fafaf7] p-[60px_22px_40px] text-center odd:bg-cream max-[1200px]:p-[50px_20px_30px] max-[992px]:w-full max-[992px]:flex-none max-[992px]:p-[40px_20px_30px] max-[768px]:p-[30px_15px_20px]",
                index < steps.length - 1 &&
                  "before:content-[''] before:w-[30px] before:h-[30px] before:absolute before:top-1/2 before:right-[-4px] before:[transform:rotate(45deg)_translateY(-50%)] before:z-1 before:bg-[#fafaf7] odd:before:bg-cream max-[992px]:before:top-auto max-[992px]:before:right-auto max-[992px]:before:bottom-[-25px] max-[992px]:before:left-1/2 max-[992px]:before:[transform:rotate(45deg)_translateX(-50%)] max-[768px]:before:w-[25px] max-[768px]:before:h-[25px] max-[768px]:before:bottom-[-20px]",
              )}
              key={step.title}
            >
              <div className="mb-[30px] max-[1200px]:mb-[25px]">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-red font-sans text-[30px] leading-[39px] font-normal italic text-white outline outline-1 outline-dashed outline-offset-4 outline-brand-red max-[1200px]:size-[45px] max-[1200px]:text-[28px] max-[1200px]:leading-[38px]">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-6 font-montreal-medium text-base font-normal leading-[20.48px] text-ink max-[1200px]:mb-[22px] max-[768px]:mb-[15px]">
                {step.title}
              </h3>
              <p className="text-sm leading-[190%] font-medium text-muted">{step.description}</p>
            </article>
          ))}
        </div>
        {note ? (
          <div data-aos="fade-up" className="mt-8 rounded-[50px] border border-brand-red bg-brand-red/3 p-2.5 text-center max-[1200px]:mt-[25px] max-[992px]:mt-5 max-[768px]:rounded-[10px]">
            <p className="text-base leading-4 font-semibold text-muted max-[1200px]:text-[15px] max-[1200px]:leading-[22px] max-[768px]:text-sm max-[768px]:leading-5">
              {note}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
