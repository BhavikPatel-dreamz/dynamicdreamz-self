import Image from "next/image";

import { Container } from "@/components/ui/container";

export type ThemeCustomizationProcessStep = {
  number?: string;
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeProcessSectionProps = {
  content: {
    title: string;
    subtitle: string;
    centerIllustration?: string;
    steps: readonly ThemeCustomizationProcessStep[];
  };
};

export function ShopifyThemeProcessSection({ content }: ShopifyThemeProcessSectionProps) {
  const steps = content.steps;
  const leftSteps = [steps[0], steps[2], steps[4]].filter(Boolean);
  const rightSteps = [steps[1], steps[3], steps[5]].filter(Boolean);

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
                    <h3 className="font-sans text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-[26.6px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Steps 2, 4, 6) */}
            <div className="w-[42%] space-y-[120px] pt-[140px]">
              {rightSteps.map((step) => (
                <div
                  className="flex items-center gap-5 pr-[30px]"
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
                    <h3 className="font-sans text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-[26.6px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Process List */}
        <div className="mt-8 space-y-6 min-[992px]:hidden">
          {steps.map((step, index) => (
            <div
              className="flex items-start gap-4 rounded-[15px] border border-[#efefef] bg-white p-5 shadow-sm"
              key={step.title}
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-[#efefef] bg-[#FAF8F5]">
                <Image
                  alt={`${step.title} Icon`}
                  className="size-6 object-contain"
                  height={24}
                  src={step.icon}
                  width={24}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#D92128]">
                    STEP {step.number ?? `0${index + 1}`}
                  </span>
                </div>
                <h3 className="font-sans text-base font-bold leading-6 text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-normal leading-relaxed text-muted">
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
