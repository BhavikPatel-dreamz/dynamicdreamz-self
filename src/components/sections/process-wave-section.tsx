import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

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

const desktopStepClasses = [
  "mt-[110px] w-[28%] px-[15px]",
  "mt-[30px] w-[28%] px-[15px]",
  "mt-[10px] w-[21%] px-[5px]",
  "-mt-[8%] w-[22%] p-0",
] as const;

const desktopIconSizes = ["size-9", "size-[34px]", "size-[34px]", "size-[31px]"] as const;

export function ProcessWaveSection({
  content,
  className = "our-process-sec inner-process-sec big-commerce-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10",
}: ProcessWaveSectionProps) {
  const steps = content.steps;

  return (
    <section className={className} data-section="process" id="our-process">
      <Container>
        <SplitSectionHeading
          className="title-with-text mb-[50px] max-w-[850px] max-[767px]:mb-8"
          description={content.description}
          heading={content.heading}
          variant="centered"
        />

        <div className="relative mx-auto mt-40 hidden min-h-[405px] max-w-[1140px] min-[992px]:block max-[1199px]:mt-[130px]">
          <div className="pointer-events-none absolute -top-[196px] left-1/2 -translate-x-1/2">
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
            {steps.map((step, index) => (
              <article
                className={cn("process-box text-left", desktopStepClasses[index] ?? "w-1/4 px-[15px]")}
                key={step.title}
              >
                <div className="relative mb-2.5">
                  <span className="absolute -top-[60px] left-0 right-0 text-center font-sans text-[50px] font-bold text-transparent opacity-60 bg-clip-text bg-[linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)]">
                    {step.number ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative mx-auto flex size-[60px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                    <Image
                      alt={step.iconAlt}
                      className={cn("object-contain", desktopIconSizes[index] ?? "size-[34px]")}
                      height={36}
                      src={step.icon}
                      width={36}
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-sans text-[18px] font-bold leading-6 tracking-[0.54px] text-ink">
                  {step.title}
                </h3>
                <p className="text-center font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="-mx-[15px] -mb-5 hidden flex-wrap min-[576px]:max-[991px]:flex max-[575px]:block">
          {steps.map((step, index) => (
            <article
              className="mb-5 w-1/2 px-[15px] pt-10 text-center max-[575px]:w-full max-[575px]:px-[21px] max-[575px]:pt-[50px]"
              key={step.title}
            >
              <div className="relative mx-auto mb-5 flex size-[51px] items-center justify-center rounded-[9.44px] bg-white shadow-[0_4.72px_19.588px_0_rgba(0,0,0,0.05)]">
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] bg-clip-text font-sans text-[35px] font-bold leading-none text-transparent opacity-60">
                  {step.number ?? String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  alt={step.iconAlt}
                  className="size-8 object-contain"
                  height={32}
                  src={step.icon}
                  width={32}
                />
              </div>
              <h3 className="mb-4 font-sans text-base font-bold leading-6 tracking-[0.48px] text-ink">
                {step.title}
              </h3>
              <p className="mx-auto max-w-[360px] font-sans text-sm font-normal leading-[24.22px] text-[#535353]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
