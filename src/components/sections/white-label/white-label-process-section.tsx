import { Container } from "@/components/ui/container";
import { whiteLabelShopifyProcess, whiteLabelShopifySectionCopy } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import type { WhiteLabelProcessStep } from "@/types/white-label-service";

type WhiteLabelProcessSectionProps = {
  title?: string;
  steps?: readonly WhiteLabelProcessStep[];
  note?: string;
};

export function WhiteLabelProcessSection({
  title = whiteLabelShopifySectionCopy.processTitle,
  steps = whiteLabelShopifyProcess,
  note = whiteLabelShopifySectionCopy.processNote,
}: WhiteLabelProcessSectionProps) {
  return (
    <section className="py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <h2 className="mb-[60px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:mb-[50px] max-[991px]:mb-[30px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-5 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          {title}
        </h2>
        <div className="flex max-[991px]:flex-wrap">
          {steps.map((step, index) => (
            <article
              className={cn(
                "step_card relative flex-1 bg-[#fafaf7] p-[60px_22px_40px] text-center odd:bg-cream max-[1199px]:p-[50px_20px_30px] max-[991px]:w-full max-[991px]:flex-none max-[991px]:p-[40px_20px_30px] max-[767px]:p-[30px_15px_20px]",
                index < steps.length - 1 &&
                  "step-card-after after:absolute after:top-1/2 after:right-[-15px] after:z-1 after:size-[30px] after:-translate-y-1/2 after:rotate-45 after:bg-[#fafaf7] odd:after:bg-cream max-[991px]:after:top-auto max-[991px]:after:right-auto max-[991px]:after:bottom-[-15px] max-[991px]:after:left-1/2 max-[991px]:after:-translate-x-1/2 max-[991px]:after:translate-y-0 max-[767px]:after:bottom-[-10px] max-[767px]:after:size-[25px]",
              )}
              key={step.title}
            >
              <div className="mb-[30px] max-[1199px]:mb-[25px]">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-red font-sans text-[30px] leading-[39px] font-bold italic text-white outline outline-1 outline-dashed outline-offset-4 outline-brand-red max-[1199px]:size-[45px] max-[1199px]:text-[28px] max-[1199px]:leading-[38px]">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-6 font-sans text-base leading-[20.48px] font-bold text-ink max-[1199px]:mb-[22px] max-[767px]:mb-[15px]">
                {step.title}
              </h3>
              <p className="text-sm leading-[190%] font-medium text-muted">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[50px] border border-brand-red bg-brand-red/3 p-2.5 text-center max-[1199px]:mt-[25px] max-[991px]:mt-5 max-[767px]:rounded-[10px]">
          <p className="text-base leading-4 font-semibold text-muted max-[1199px]:text-[15px] max-[1199px]:leading-[22px] max-[767px]:text-sm max-[767px]:leading-5">
            {note}
          </p>
        </div>
      </Container>
    </section>
  );
}
