import Image from "next/image";

import { Container } from "@/components/ui/container";

export type ProcessWaveStep = {
  number?: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type ProcessWaveSectionProps = {
  content: {
    heading: string;
    description: string;
    steps: readonly ProcessWaveStep[];
  };
  className?: string;
};

export function ProcessWaveSection({
  content,
  className = "our-process-sec inner-process-sec big-commerce-process relative overflow-hidden py-20 max-[991px]:py-12.5 max-[767px]:py-10",
}: ProcessWaveSectionProps) {
  const steps = content.steps;

  return (
    <section className={className} data-section="process" id="our-process">
      <Container>
        <div className="title-with-text mx-auto mb-[50px] max-w-[850px] text-center max-[767px]:mb-8">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading.includes("<br>")
              ? content.heading.split("<br>").map((line, index, lines) => (
                  <span key={line}>
                    {line}
                    {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
                  </span>
                ))
              : content.heading}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {content.description.includes("<br>")
              ? content.description.split("<br>").map((line, index, lines) => (
                  <span key={line}>
                    {line}
                    {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
                  </span>
                ))
              : content.description}
          </p>
        </div>

        {/* Desktop Wave Layout */}
        <div className="relative mx-auto mt-20 hidden max-w-[1140px] min-[992px]:block">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
            <svg
              fill="none"
              height="339"
              viewBox="0 0 1131 339"
              width="1131"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.386225 312.28L19.8166 307.54C39.247 302.801 78.1077 293.323 121.234 301.331C164.36 309.34 211.751 334.836 253.456 337.016C295.16 339.196 331.177 318.059 361.507 273.606C391.837 229.152 414.168 212.99 457.294 220.999C500.42 229.008 564.342 261.188 610.311 280.855C656.281 300.522 686.611 256.068 722.628 234.932C758.645 213.795 800.35 215.975 836.367 194.838C872.384 173.701 902.714 129.248 941.575 119.769C980.435 110.291 1027.83 135.787 1062.42 108.821C1097.02 81.8551 1118.39 40.2135 1129.29 0.499516"
                stroke="url(#paint0_linear_process_wave)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_process_wave"
                  x1="-7.70301"
                  x2="1171.8"
                  y1="330"
                  y2="-21.9998"
                >
                  <stop offset="0" stopOpacity="0" />
                  <stop offset="0.556927" stopColor="#15c064" />
                  <stop offset="0.960243" stopColor="#00d1ff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex justify-between pl-[30px]">
            {/* Step 1 */}
            {steps[0] && (
              <div className="process-box mt-[110px] w-[28%] px-[15px]">
                <div className="relative mb-2.5">
                  <span className="absolute -top-[60px] left-0 right-0 text-center font-sans text-[50px] font-bold text-transparent opacity-60 [background:linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] [-webkit-background-clip:text]">
                    {steps[0].number ?? "01"}
                  </span>
                  <div className="relative mx-auto flex size-[60px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                    <Image
                      alt={steps[0].iconAlt}
                      className="size-9 object-contain"
                      height={36}
                      src={steps[0].icon}
                      width={36}
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-sans text-[18px] font-bold leading-6 tracking-[0.54px] text-ink">
                  {steps[0].title}
                </h3>
                <p className="text-center font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                  {steps[0].description}
                </p>
              </div>
            )}

            {/* Step 2 */}
            {steps[1] && (
              <div className="process-box mt-[30px] w-[28%] px-[15px]">
                <div className="relative mb-2.5">
                  <span className="absolute -top-[60px] left-0 right-0 text-center font-sans text-[50px] font-bold text-transparent opacity-60 [background:linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] [-webkit-background-clip:text]">
                    {steps[1].number ?? "02"}
                  </span>
                  <div className="relative mx-auto flex size-[60px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                    <Image
                      alt={steps[1].iconAlt}
                      className="size-[34px] object-contain"
                      height={34}
                      src={steps[1].icon}
                      width={34}
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-sans text-[18px] font-bold leading-6 tracking-[0.54px] text-ink">
                  {steps[1].title}
                </h3>
                <p className="text-center font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                  {steps[1].description}
                </p>
              </div>
            )}

            {/* Step 3 */}
            {steps[2] && (
              <div className="process-box mt-[10px] w-[21%] px-[5px]">
                <div className="relative mb-2.5">
                  <span className="absolute -top-[60px] left-0 right-0 text-center font-sans text-[50px] font-bold text-transparent opacity-60 [background:linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] [-webkit-background-clip:text]">
                    {steps[2].number ?? "03"}
                  </span>
                  <div className="relative mx-auto flex size-[60px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                    <Image
                      alt={steps[2].iconAlt}
                      className="size-[34px] object-contain"
                      height={34}
                      src={steps[2].icon}
                      width={34}
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-sans text-[18px] font-bold leading-6 tracking-[0.54px] text-ink">
                  {steps[2].title}
                </h3>
                <p className="text-center font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                  {steps[2].description}
                </p>
              </div>
            )}

            {/* Step 4 */}
            {steps[3] && (
              <div className="process-box -mt-[8%] w-[22%] p-0">
                <div className="relative mb-2.5">
                  <span className="absolute -top-[60px] left-0 right-0 text-center font-sans text-[50px] font-bold text-transparent opacity-60 [background:linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] [-webkit-background-clip:text]">
                    {steps[3].number ?? "04"}
                  </span>
                  <div className="relative mx-auto flex size-[60px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                    <Image
                      alt={steps[3].iconAlt}
                      className="size-[31px] object-contain"
                      height={31}
                      src={steps[3].icon}
                      width={31}
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-sans text-[18px] font-bold leading-6 tracking-[0.54px] text-ink">
                  {steps[3].title}
                </h3>
                <p className="text-center font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                  {steps[3].description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tablet & Mobile Stacked Layout */}
        <div className="mt-8 grid grid-cols-2 gap-6 min-[992px]:hidden max-[767px]:grid-cols-1">
          {steps.map((step, index) => (
            <div
              className="flex flex-col items-center rounded-[15px] border border-[#efefef] bg-white p-6 text-center shadow-sm"
              key={step.title}
            >
              <div className="mb-4 flex size-14 items-center justify-center rounded-xl border border-[#efefef] bg-[#fafaf7]">
                <Image
                  alt={step.iconAlt}
                  className="size-7 object-contain"
                  height={28}
                  src={step.icon}
                  width={28}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Step {step.number ?? `0${index + 1}`}
              </span>
              <h3 className="mt-1 mb-2 font-sans text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="font-sans text-sm font-medium leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
