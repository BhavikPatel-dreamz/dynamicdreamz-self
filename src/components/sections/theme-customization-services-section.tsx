import Image from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeCustomizationBox = {
  number?: string;
  icon?: ReactNode | string;
  iconWrapperClassName?: string;
  title: string | readonly string[];
  badge?: string;
  description?: string | readonly string[];
};

export type ThemeCustomizationServicesContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  boxes: readonly ThemeCustomizationBox[];
  bottomNote?: string;
};

export type ThemeCustomizationServicesSectionProps = {
  className?: string;
  content: ThemeCustomizationServicesContent;
  id?: string;
  variant?: "green" | "yellow" | "transparent";
};

export function ThemeCustomizationServicesSection({
  className,
  content,
  id,
  variant = "green",
}: ThemeCustomizationServicesSectionProps) {
  return (
    <section
      className={cn(
        "theme-customization-services",
        variant === "transparent"
          ? "transparent bg-transparent pt-0 pb-20 max-[991px]:pt-0 max-[992px]:pt-0 max-[991px]:pb-[50px] max-[992px]:pb-[50px]"
          : "py-20 max-[991px]:py-[50px] max-[992px]:py-[50px]",
        variant === "green"
          ? "green bg-[#eff4ef]"
          : variant === "yellow"
            ? "yellow bg-[#fafaf7]"
            : undefined,
        className,
      )}
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between gap-10 max-[991px]:mb-[30px] max-[992px]:mb-[30px] max-[991px]:flex-col max-[992px]:flex-col max-[991px]:items-start max-[992px]:items-start max-[991px]:gap-2.5 max-[992px]:gap-2.5"
        >
          <div className="title w-[44%] max-[991px]:w-full max-[992px]:w-full">
            {content.eyebrow ? (
              <Eyebrow as="span" className="mb-4">
                {content.eyebrow}
              </Eyebrow>
            ) : null}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-ink max-[1199px]:text-[30px] max-[1199px]:leading-[42px] max-[991px]:mb-[10px] max-[992px]:mb-[10px] max-[767px]:text-2xl max-[768px]:text-2xl max-[767px]:leading-[31.2px] max-[768px]:leading-[31.2px]">
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description ? (
            <div className="section_text w-[48.3%] max-[1199px]:w-1/2 max-[991px]:w-full max-[992px]:w-full">
              <p className="font-sans text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                {formatBrText(content.description)}
              </p>
            </div>
          ) : null}
        </div>

        <div className="wrapper grid grid-cols-3 gap-4 max-[1199px]:grid-cols-2 max-[767px]:flex max-[768px]:flex max-[767px]:flex-col max-[768px]:flex-col max-[767px]:gap-4 max-[768px]:gap-4">
          {content.boxes.map((box, idx) => (
            <div
              className="box rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[991px]:p-5 max-[992px]:p-5"
              data-aos="fade-up"
              key={box.number ?? (typeof box.title === "string" ? box.title : Array.isArray(box.title) ? box.title.join(" ") : idx)}
            >
              {box.icon ? (
                <div
                  className={cn(
                    "icon mb-[15px] flex font-montserrat text-sm font-medium text-brand-red [&>svg]:h-auto [&>svg]:size-6",
                    box.iconWrapperClassName,
                  )}
                >
                  {typeof box.icon === "string" ? (
                    <Image
                      src={box.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ) : (
                    box.icon
                  )}
                </div>
              ) : box.number ? (
                <div className="number mb-[15px]">
                  <span className="font-montserrat font-medium text-brand-red">
                    {box.number}
                  </span>
                </div>
              ) : null}
              <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[1199px]:text-[18px] max-[1199px]:leading-[26px]">
                {formatBrText(box.title)}
                {box.badge ? (
                  <span className="mt-2.5 mb-[5px] inline-block rounded-[30px] bg-[rgba(173,81,81,0.05)] px-[12.5px] py-[5.5px] font-montserrat text-xs font-bold uppercase leading-none text-[#ad5151] max-[767px]:text-[11px] max-[768px]:text-[11px] max-[767px]:px-[13.5px] max-[768px]:px-[13.5px] max-[767px]:py-[6.5px] max-[768px]:py-[6.5px]">
                    {box.badge}
                  </span>
                ) : null}
              </h3>
              {box.description ? (
                <p className="font-sans text-sm font-normal leading-[24px] text-[#535353]">
                  {formatBrText(box.description)}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        {/* Live template always renders `.bottom-text` (margin-top: 20px), even when empty. */}
        <div className="bottom-text mt-5 font-sans text-[#535353] [&:has(.btn)]:text-center [&:has(a)]:text-center" data-aos="fade-up">
          {content.bottomNote ? <p className="font-medium">{formatBrText(content.bottomNote)}</p> : null}
        </div>
      </Container>
    </section>
  );
}
