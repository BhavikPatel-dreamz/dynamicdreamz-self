import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyCroProcess } from "@/content/shopify-cro-agency";

export type ShopifyCroProcessSectionProps = {
  content?: typeof shopifyCroProcess;
  className?: string;
};

export function ShopifyCroProcessSection({
  content = shopifyCroProcess,
  className = "white_label_process_step_box_section column-five bg-white py-20 max-[992px]:py-12",
}: ShopifyCroProcessSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="section-title mx-auto mb-[50px] max-w-[900px] text-center max-[767px]:mb-8">
          <h2 className="mb-3 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {content.heading}
          </h2>
          <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm">
            {content.description.split("<br>").map((line, idx, arr) => (
              <span key={idx}>
                {line}
                {idx < arr.length - 1 ? <br className="max-[992px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>

        <div className="wrapper -mx-5 -mb-[30px] flex flex-wrap max-[1199px]:-mx-2.5">
          {content.steps.map((step, idx) => {
            const isLast = idx === content.steps.length - 1;

            return (
              <div
                key={step.title}
                className="col mb-[30px] w-1/5 px-5 max-[1199px]:px-2.5 max-[992px]:w-1/3 max-[767px]:w-full"
              >
                <div className="step-box relative text-center">
                  <div className="icon relative mx-auto mb-5 flex size-[90px] items-center justify-center rounded-full border border-black/10 bg-[#FAF8F5] p-4 shadow-none">
                    <Image
                      src={step.icon}
                      alt=""
                      width={52}
                      height={52}
                      className="size-full object-contain"
                    />
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[90px] top-1/2 hidden h-[2px] w-[calc(100%-90px)] -translate-y-1/2 border-t-2 border-dashed border-[#AD5151]/30 min-[1200px]:block"
                      />
                    )}
                  </div>
                  <h3 className="mb-2.5 font-sans text-[20px] font-bold leading-[26px] text-ink">
                    {step.title}
                  </h3>
                  <p className="m-0 font-sans text-sm font-medium leading-[22px] text-muted">
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
