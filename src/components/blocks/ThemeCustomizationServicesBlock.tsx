import Image from "next/image";
import React from "react";

import { Container, Eyebrow } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { ThemeCustomizationBox, ThemeCustomizationServicesContent } from "@/types/blocks";

export type { ThemeCustomizationBox, ThemeCustomizationServicesContent };

export type ThemeCustomizationServicesBlockProps = {
  content?: ThemeCustomizationServicesContent;
  eyebrow?: string;
  heading?: string | readonly string[];
  description?: string | readonly string[];
  bottomNote?: string;
  boxes?: readonly ThemeCustomizationBox[];
  id?: string;
  variant?: "green" | "yellow" | "transparent";
  className?: string;
};

export type ThemeCustomizationServicesSectionProps = ThemeCustomizationServicesBlockProps;

export function ThemeCustomizationServicesBlock({
  content,
  eyebrow,
  heading,
  description,
  bottomNote,
  boxes,
  id,
  variant,
  className,
}: ThemeCustomizationServicesBlockProps) {
  const finalEyebrow = eyebrow ?? content?.eyebrow;
  const finalHeading = heading ?? content?.heading ?? "";
  const finalDescription = description ?? content?.description;
  const finalBottomNote = bottomNote ?? content?.bottomNote;
  const finalBoxes = boxes ?? content?.boxes ?? [];
  const finalVariant = variant ?? (content as any)?.variant ?? "green";
  const finalId = id ?? (content as any)?.id;

  return (
    <section
      className={cn(
        "theme-customization-services py-20 max-[992px]:py-[50px]",
        finalVariant === "green"
          ? "green bg-[#eff4ef]"
          : finalVariant === "yellow"
            ? "yellow bg-[#fafaf7]"
            : "transparent bg-transparent",
        className,
      )}
      id={finalId}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5 max-[991px]:flex-col max-[991px]:items-start"
        >
          <div className="title w-[44%] max-[992px]:w-full">
            {finalEyebrow ? (
              <Eyebrow as="span" className="mb-4">
                {finalEyebrow}
              </Eyebrow>
            ) : null}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-ink max-[991px]:mb-[10px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
              {formatBrText(finalHeading)}
            </h2>
          </div>
          {finalDescription ? (
            <div className="section_text w-[48.3%] max-[1199px]:w-1/2 max-[991px]:w-full">
              <p className="font-sans text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                {formatBrText(finalDescription)}
              </p>
            </div>
          ) : null}
        </div>

        <div className="wrapper grid grid-cols-3 gap-4 max-[1199px]:grid-cols-2 max-[767px]:flex max-[767px]:flex-col">
          {finalBoxes.map((box, idx) => (
            <div
              className="box rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[991px]:p-5"
              data-aos="fade-up"
              key={box.number ?? (typeof box.title === "string" ? box.title : Array.isArray(box.title) ? box.title.join(" ") : idx)}
            >
              {box.icon ? (
                <div
                  className={cn(
                    "icon mb-[15px] flex font-montserrat text-sm font-medium text-brand-red [&>svg]:h-auto",
                    "[&>svg]:size-6",
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
                <div className="number">
                  <span className="mb-5 flex size-[34px] items-center justify-center rounded-full bg-[#fbefd7] font-montserrat text-[10px] font-bold text-brand-red max-[991px]:mb-3">
                    {box.number}
                  </span>
                </div>
              ) : null}
              <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[1199px]:text-[18px]">
                {formatBrText(box.title)}
                {box.badge ? (
                  <span className="mt-2.5 mb-[5px] block w-fit rounded-[30px] bg-[rgba(173,81,81,0.05)] px-[12.5px] py-[5.5px] font-montserrat text-xs font-bold uppercase leading-none text-[#ad5151] max-[767px]:text-[11px] max-[767px]:px-[13.5px] max-[767px]:py-[6.5px]">
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
        <div className="bottom-text mt-5 font-sans text-sm font-medium text-[#535353]" data-aos="fade-up">
          {finalBottomNote ? <p>{formatBrText(finalBottomNote)}</p> : null}
        </div>
      </Container>
    </section>
  );
}

export { ThemeCustomizationServicesBlock as ThemeCustomizationServicesSection };
