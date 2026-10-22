import React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeFeaturesBannerContent = {
  eyebrow?: string;
  title?: string;
  heading?: string;
  description?: string;
  items: readonly string[];
};

export type ThemeFeatureBreakdownBlockProps = {
  content: ThemeFeaturesBannerContent;
  className?: string;
  id?: string;
};

export type ThemeFeaturesBannerSectionProps = ThemeFeatureBreakdownBlockProps;

export function ThemeFeatureBreakdownBlock({
  content,
  className = "theme-features py-20 max-[992px]:py-[50px]",
  id = "theme-features",
}: ThemeFeatureBreakdownBlockProps) {
  const displayTitle = content.title || content.heading || "";

  return (
    <section className={cn(className)} id={id}>
      <Container>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] max-[1199px]:rounded-[16px]"
        >
          <div className="left-block w-[37%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[30px] max-[1199px]:p-5 max-[991px]:w-full max-[991px]:border-r-0 max-[991px]:border-b max-[991px]:p-[25px_20px]">
            {content.eyebrow && (
              <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:pl-6 max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                <span className="font-montserrat text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] max-[1199px]:text-[12px] max-[767px]:text-[10px]">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="mb-0 font-montreal-medium text-[32px] font-normal leading-tight tracking-normal text-ink max-[1399px]:text-[28px] max-[991px]:text-2xl">
              {formatBrText(displayTitle)}
            </h2>
            {content.description && (
              <div className="section-description mt-2.5">
                <p className="m-0 font-sans text-sm font-medium leading-[24px] text-[#535353]">
                  {formatBrText(content.description)}
                </p>
              </div>
            )}
          </div>
          <div className="right-block flex w-[63%] max-[991px]:w-full">
            <div className="inner-wrapper flex w-full flex-wrap">
              {content.items.map((item) => (
                <div
                  className="item w-1/2 border-b border-[rgba(40,40,40,0.11)] p-6 max-[991px]:p-5 max-[767px]:w-full max-[767px]:!border-t max-[767px]:!border-b-0 max-[767px]:!border-l-0 max-[767px]:p-[15px_20px] [&:nth-child(even)]:border-l [&:nth-child(even)]:border-[rgba(40,40,40,0.11)] [&:nth-last-of-type(1)]:border-b-0 [&:nth-last-of-type(2)]:border-b-0"
                  key={item}
                >
                  <h3 className="m-0 font-display text-base font-normal tracking-normal text-ink">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ThemeFeatureBreakdownBlock as ThemeFeaturesBannerSection };
