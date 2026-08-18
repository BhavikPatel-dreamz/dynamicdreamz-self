import Image from "next/image";

import { Container } from "@/components/ui/container";
import type { ShopifyThemeCustomizationProcessStep } from "@/content/shopify-theme-customization";

export type ShopifyThemeProcessSectionProps = {
  content: {
    title: string;
    subtitle: string;
    centerIllustration?: string;
    steps: readonly ShopifyThemeCustomizationProcessStep[];
  };
};

export function ShopifyThemeProcessSection({ content }: ShopifyThemeProcessSectionProps) {
  const steps = content.steps;
  const leftSteps = [steps[0], steps[2], steps[4]];
  const rightSteps = [steps[1], steps[3], steps[5]];

  return (
    <section className="theme-customization-process-sec pt-10 pb-20 max-[767px]:pt-5 max-[767px]:pb-10" id="process">
      <Container>
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.title}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {content.subtitle}
          </p>
        </div>

        {/* Desktop Serpentine Process Layout */}
        <div className="relative mx-auto mt-[50px] hidden max-w-[1100px] min-[992px]:block">
          {content.centerIllustration && (
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-[720px] w-[227px] -translate-x-1/2">
              <Image
                alt="Process Diagram"
                className="size-full object-contain"
                height={720}
                priority={false}
                src={content.centerIllustration}
                width={227}
              />
            </div>
          )}

          <div className="relative z-10 flex justify-between">
            {/* Left Column (Steps 1, 3, 5) */}
            <div className="w-[42%] space-y-[120px] pt-5">
              {leftSteps.map((step) => (
                <div
                  className="flex items-center gap-5 pl-[30px]"
                  key={step.title}
                >
                  <div className="flex size-[66px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white shadow-sm">
                    <Image
                      alt={`${step.title} Icon`}
                      className="size-8 object-contain"
                      height={32}
                      src={step.icon}
                      width={32}
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold leading-[27.72px] tracking-[0.32px] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base font-medium leading-[26.2px] tracking-[0.32px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Steps 2, 4, 6) */}
            <div className="w-[42%] space-y-[120px] pt-[90px]">
              {rightSteps.map((step) => (
                <div
                  className="flex items-center gap-5 pr-[20px]"
                  key={step.title}
                >
                  <div className="flex size-[66px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white shadow-sm">
                    <Image
                      alt={`${step.title} Icon`}
                      className="size-8 object-contain"
                      height={32}
                      src={step.icon}
                      width={32}
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold leading-[27.72px] tracking-[0.32px] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base font-medium leading-[26.2px] tracking-[0.32px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Responsive Grid */}
        <div className="mt-8 grid grid-cols-2 gap-6 max-[991px]:grid max-[767px]:grid-cols-1 min-[992px]:hidden">
          {content.steps.map((step, index) => (
            <div
              className="flex items-start gap-4 rounded-[12px] border border-[#efefef] bg-white p-5 shadow-sm"
              key={step.title}
            >
              <div className="flex size-[54px] shrink-0 items-center justify-center rounded-[10px] border border-[#efefef] bg-[#fafafa]">
                <Image
                  alt={`${step.title} Icon`}
                  className="size-7 object-contain"
                  height={28}
                  src={step.icon}
                  width={28}
                />
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-[#15c064]">
                  STEP 0{index + 1}
                </span>
                <h3 className="font-sans text-base font-bold leading-[24px] text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-[22px] text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
