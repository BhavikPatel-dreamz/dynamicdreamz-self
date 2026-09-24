import { Container } from "@/components/ui/container";
import { whiteLabelShopifyProcess, whiteLabelShopifySectionCopy } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { WhiteLabelProcessStep } from "@/types/white-label-service";

type WhiteLabelProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: readonly WhiteLabelProcessStep[];
  note?: string;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
};

export function WhiteLabelProcessSection({
  eyebrow,
  title = whiteLabelShopifySectionCopy.processTitle,
  description,
  steps = whiteLabelShopifyProcess,
  note = whiteLabelShopifySectionCopy.processNote,
  className,
  titleClassName,
  containerClassName,
}: WhiteLabelProcessSectionProps) {
  return (
    <section
      className={cn(
        "white_label_how_partnership_works_section py-20 max-[992px]:py-[50px]",
        className,
      )}
    >
      <Container className={cn("max-[575px]:px-4", containerClassName)}>
        {eyebrow || description ? (
          <div
            className={cn(
              "section_title_with_eyebrow mb-10 max-[991px]:mb-[30px] max-[767px]:mb-5",
              description &&
                "flex flex-wrap items-end justify-between max-[991px]:flex-col max-[991px]:items-start",
            )}
          >
            <div
              className={cn("title", description && "w-[44%] max-[991px]:w-full")}
            >
              {eyebrow && (
                <div className="eyebrow relative mb-4 inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:before:top-[6px] max-[767px]:mb-3 max-[767px]:pl-[23px] max-[767px]:before:top-[4px] max-[767px]:before:w-[15px]">
                  <span className="font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-xs max-[767px]:text-[10px]">
                    {eyebrow}
                  </span>
                </div>
              )}
              <h2
                className={cn(
                  "m-0 font-montreal-medium text-[35px] font-normal leading-[49px] text-[#282828] max-[1199px]:[&_br]:hidden max-[991px]:mb-2.5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]",
                  titleClassName,
                )}
              >
                {formatBrText(title, "max-[1199px]:hidden")}
              </h2>
            </div>
            {description && (
              <div className="section_text w-[48.3%] max-[1199px]:w-[50%] max-[991px]:w-full max-[991px]:mt-2.5">
                <p className="m-0 font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                  {description}
                </p>
              </div>
            )}
          </div>
        ) : (
          <h2
            className={cn(
              "mb-[60px] text-center font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[1199px]:mb-[50px] max-[992px]:mb-[30px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-5 max-[767px]:text-2xl max-[767px]:leading-[33.24px]",
              titleClassName,
            )}
          >
            {title}
          </h2>
        )}
        <div className="flex max-[992px]:flex-wrap">
          {steps.map((step, index) => (
            <article
              className={cn(
                "step_card relative flex-1 bg-[#fafaf7] p-[60px_22px_40px] text-center odd:bg-cream max-[1199px]:p-[50px_20px_30px] max-[992px]:w-full max-[992px]:flex-none max-[992px]:p-[40px_20px_30px] max-[767px]:p-[30px_15px_20px]",
                index < steps.length - 1 &&
                  "step-card-after after:absolute after:top-1/2 after:right-[-15px] after:z-1 after:size-[30px] after:-translate-y-1/2 after:rotate-45 after:bg-[#fafaf7] odd:after:bg-cream max-[992px]:after:top-auto max-[992px]:after:right-auto max-[992px]:after:bottom-[-15px] max-[992px]:after:left-1/2 max-[992px]:after:-translate-x-1/2 max-[992px]:after:translate-y-0 max-[767px]:after:bottom-[-10px] max-[767px]:after:size-[25px]",
              )}
              key={step.title}
            >
              <div className="mb-[30px] max-[1199px]:mb-[25px]">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-red font-sans text-[30px] leading-[39px] font-normal italic text-white outline outline-1 outline-dashed outline-offset-4 outline-brand-red max-[1199px]:size-[45px] max-[1199px]:text-[28px] max-[1199px]:leading-[38px]">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-6 font-montreal-medium text-base font-normal leading-[20.48px] text-ink max-[1199px]:mb-[22px] max-[767px]:mb-[15px]">
                {step.title}
              </h3>
              <p className="text-sm leading-[190%] font-medium text-muted">{step.description}</p>
            </article>
          ))}
        </div>
        {note ? (
          <div className="mt-8 rounded-[50px] border border-brand-red bg-brand-red/3 p-2.5 text-center max-[1199px]:mt-[25px] max-[992px]:mt-5 max-[767px]:rounded-[10px]">
            <p className="text-base leading-4 font-semibold text-muted max-[1199px]:text-[15px] max-[1199px]:leading-[22px] max-[767px]:text-sm max-[767px]:leading-5">
              {note}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
