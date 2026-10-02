import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyCroProcess } from "@/content/shopify-cro-agency";

export type ShopifyCroProcessSectionProps = {
  content?: typeof shopifyCroProcess;
  className?: string;
};

export function ShopifyCroProcessSection({
  content = shopifyCroProcess,
  className = "white_label_process_step_box_section column-five bg-white py-20 max-[991px]:py-12",
}: ShopifyCroProcessSectionProps) {
  return (
    <section className={className}>
      <Container>
        <SplitSectionHeading
          className="mb-10 max-[991px]:mb-[30px]"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          preserveBreaks
        />

        <div className="wrapper -mx-5 -mb-[30px] flex flex-wrap max-[1199px]:-mx-2.5 max-[767px]:m-0 max-[767px]:ml-[5px] max-[767px]:flex-col max-[767px]:border-l-2 max-[767px]:border-[#AD5151] max-[767px]:pl-5">
          {content.steps.map((step, idx) => {
            const isLast = idx === content.steps.length - 1;

            return (
              <div
                key={step.title}
                className="col mb-[30px] w-1/5 px-5 max-[1199px]:px-2.5 max-[991px]:w-1/3 max-[767px]:w-full max-[767px]:p-0 max-[767px]:last:mb-0"
              >
                <div className="step-box relative text-center max-[767px]:text-left">
                  <div className="icon relative mx-auto mb-[17px] size-[97px] max-[767px]:ml-0 max-[767px]:size-[70px]">
                    <Image
                      src={step.icon}
                      alt=""
                      width={97}
                      height={97}
                      className="size-full object-contain"
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <svg
                        className="pointer-events-none absolute top-1/2 left-[97px] -z-10 h-[13px] w-[136px] -translate-y-1/2 overflow-visible max-[1199px]:w-[100px] max-[991px]:hidden"
                        viewBox="0 0 204 13"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 1 C68 12 136 12 204 1"
                          fill="none"
                          stroke="#ad5151"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 -left-[26px] hidden size-2.5 -translate-y-1/2 rounded-full bg-[#AD5151] max-[767px]:block"
                    />
                  </div>
                  <h3 className="mb-2.5 font-sans text-lg font-bold leading-[1.28] text-ink max-[767px]:text-base">
                    {step.title}
                  </h3>
                  <p className="m-0 font-sans text-sm font-medium leading-[190%] text-muted">
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
