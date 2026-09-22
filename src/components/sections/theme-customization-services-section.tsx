import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ThemeCustomizationBox = {
  number?: string;
  icon?: ReactNode;
  title: string;
  badge?: string;
  description: string;
};

export type ThemeCustomizationServicesContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  boxes: readonly ThemeCustomizationBox[];
  bottomNote?: string;
};

export type ThemeCustomizationServicesSectionProps = {
  content: ThemeCustomizationServicesContent;
  className?: string;
  id?: string;
  variant?: "green" | "yellow" | "transparent";
};

export function ThemeCustomizationServicesSection({
  content,
  className,
  id,
  variant = "green",
}: ThemeCustomizationServicesSectionProps) {
  return (
    <section
      className={cn(
        "theme-customization-services py-20 max-[992px]:py-[50px]",
        variant === "green"
          ? "green bg-[#eff4ef]"
          : variant === "yellow"
            ? "yellow bg-[#fafaf7]"
            : "transparent bg-transparent",
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

        <div className="wrapper grid grid-cols-3 gap-4 max-[1199px]:grid-cols-2 max-[767px]:flex max-[767px]:flex-col">
          {content.boxes.map((box) => (
            <div
              className="box rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[991px]:p-5"
              key={box.number ?? box.title}
            >
              <div className="icon mb-[15px] flex font-montserrat text-sm font-medium text-brand-red [&>svg]:size-6 [&>svg]:h-auto">
                {box.icon ?? box.number}
              </div>
              <h3 className="mb-2 font-montserrat text-[20px] font-bold leading-[28px] text-ink max-[1199px]:text-[18px]">
                {box.title}
                {box.badge ? (
                  <span className="mt-2.5 mb-[5px] block w-fit rounded-[30px] bg-[rgba(173,81,81,0.05)] px-[12.5px] py-[5.5px] font-montserrat text-xs font-bold uppercase leading-none text-[#ad5151] max-[767px]:text-[11px] max-[767px]:px-[13.5px] max-[767px]:py-[6.5px]">
                    {box.badge}
                  </span>
                ) : null}
              </h3>
              <p className="font-sans text-sm font-medium leading-[24px] text-[#535353]">
                {box.description}
              </p>
            </div>
          ))}
        </div>

        {content.bottomNote ? (
          <div className="bottom-text mt-5 font-sans text-sm font-medium text-[#535353]">
            <p>{content.bottomNote}</p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
