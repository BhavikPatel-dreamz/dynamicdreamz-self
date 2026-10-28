import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type FeatureGridItem = {
  title: string | readonly string[];
  description: string | readonly string[];
  icon?: string;
  iconAlt?: string;
  iconSvg?: React.ReactNode;
  linkText?: string;
  linkUrl?: string;
  href?: string;
  link?: string;
};

export type FeaturesGridSectionProps = {
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  eyebrow?: string;
  features?: readonly FeatureGridItem[];
  items?: readonly FeatureGridItem[];
  columns?: 2 | 3 | 4;
  titleAlign?: "left" | "center";
  className?: string;
  id?: string;
};

export function FeaturesGridSection({
  heading,
  title,
  description,
  eyebrow,
  features,
  items,
  columns = 3,
  titleAlign = "left",
  className,
  id,
}: FeaturesGridSectionProps) {
  const resolvedHeading = heading ?? title ?? "";
  const resolvedDescription = description ?? "";
  const resolvedEyebrow = eyebrow;
  const resolvedItems = features ?? items ?? [];

  const colClass =
    columns === 4
      ? "w-1/4 max-[1199px]:w-1/2 max-[767px]:w-full"
      : columns === 2
      ? "w-1/2 max-[767px]:w-full"
      : "w-1/3 max-[992px]:w-1/2 max-[767px]:w-full";

  return (
    <section
      className={cn("features-grid-sec py-20 max-[992px]:py-[50px]", className)}
      data-section="features"
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className={cn(
            "title mb-12 max-[767px]:mb-6",
            titleAlign === "center" ? "mx-auto max-w-[850px] text-center" : "text-left",
          )}
        >
          {resolvedEyebrow ? (
            <div className="mb-2.5">
              <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                {resolvedEyebrow}
              </span>
            </div>
          ) : null}
          <h2 className="font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {formatBrText(resolvedHeading, "max-[1199px]:hidden")}
          </h2>
          {resolvedDescription ? (
            <p className="mt-2.5 font-sans text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(resolvedDescription, "max-[1199px]:hidden")}
            </p>
          ) : null}
        </div>

        <div data-aos="fade-up" className="-mx-3 flex flex-wrap justify-center">
          {resolvedItems.map((item, idx) => (
            <div data-aos="fade-up" className={cn("mb-6 px-3", colClass)} key={`${typeof item.title === "string" ? item.title : idx}-${idx}`}>
              <article className="group relative z-0 flex h-full flex-col justify-between rounded-[10px] border border-[#efefef] bg-white p-[30px_26px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div>
                  {item.icon ? (
                    <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">
                      <Image
                        alt={item.iconAlt || (typeof item.title === "string" ? item.title : item.title.join(" "))}
                        className="size-full object-contain"
                        height={50}
                        src={item.icon}
                        width={50}
                      />
                    </div>
                  ) : item.iconSvg ? (
                    <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">{item.iconSvg}</div>
                  ) : null}
                  <h3 className="relative z-10 mt-2 mb-2.5 font-montreal-medium text-[20px] font-normal leading-[28px] text-ink max-[767px]:text-lg">
                    {formatBrText(item.title, "max-[767px]:hidden")}
                  </h3>
                  <p className="relative z-10 font-sans text-base font-medium leading-[27px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                    {formatBrText(item.description, "max-[767px]:hidden")}
                  </p>
                </div>

                {item.linkUrl || item.href || item.link ? (
                  <div className="relative z-10 mt-4 pt-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-red transition-colors hover:text-brand-red/80"
                      href={(item.linkUrl || item.href || item.link)!}
                    >
                      {item.linkText ?? sharedUiCopy.learnMore} →
                    </Link>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
