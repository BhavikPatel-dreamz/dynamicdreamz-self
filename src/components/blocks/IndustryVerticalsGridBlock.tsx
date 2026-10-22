import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyIndustries } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type IndustryVerticalItem = {
  image: string;
  imageAlt: string;
  title: string;
  eyebrow?: string;
  description: string;
  href?: string;
  ctaLabel?: string;
};

export type IndustriesServedContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  bottomDescription?: string;
  items: readonly IndustryVerticalItem[];
};

export type IndustryVerticalsGridBlockProps = {
  content?: IndustriesServedContent;
  variant?: "carousel" | "grid";
  className?: string;
};

export type IndustriesServedSectionProps = IndustryVerticalsGridBlockProps;

export function IndustryVerticalsGridBlock({
  content = shopifyPlusAgencyIndustries,
  variant = "carousel",
  className,
}: IndustryVerticalsGridBlockProps) {
  const sectionClass =
    variant === "grid"
      ? "industries_box_section bg-white py-20 max-[992px]:py-[50px]"
      : "industries-served-sec pt-0 pb-20 max-[992px]:pb-[50px]";

  return (
    <section
      className={cn(sectionClass, className)}
      data-section="industries"
      id="industries-served"
    >
      <Container>
        <div
          data-aos="fade-up"
          className="mb-[50px] flex flex-wrap items-start justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
        >
          <div className="w-[44%] max-[992px]:w-full">
            {content.eyebrow && (
              <div className="eyebrow mb-3">
                <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.3] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description && (
            <div className="w-[48%] max-[992px]:w-full">
              <p className="font-sans text-base font-medium leading-[28px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>
            </div>
          )}
        </div>

        {variant === "grid" ? (
          <div
            data-aos="fade-up"
            className="grid grid-cols-4 gap-[18px] max-[1199px]:grid-cols-3 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1"
          >
            {content.items.map((item) => {
              const card = (
                <div className="h-full overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.06)] bg-[#fafaf7]">
                  <div className="relative h-[185px] overflow-hidden">
                    <Image
                      className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover/industry:scale-105"
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 24px), (max-width: 1199px) 30vw, 270px"
                    />
                  </div>
                  <div className="p-5">
                    {item.eyebrow ? (
                      <span className="mb-2 block font-montserrat text-[10px] font-bold tracking-[0.05em] uppercase text-[#ad5151]">
                        {item.eyebrow}
                      </span>
                    ) : null}
                    <h3 className="mb-2.5 font-display text-xl font-medium leading-6 text-ink max-[1399px]:text-[18px]">
                      {item.title}
                    </h3>
                    <p className="m-0 text-sm font-medium leading-6 text-[#535353]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <Link className="group/industry block h-full" href={item.href} key={item.title}>
                  {card}
                </Link>
              ) : (
                <div className="group/industry h-full" key={item.title}>
                  {card}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            data-aos="fade-up"
            className="relative left-1/2 flex w-screen -translate-x-1/2 snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[1200px]:justify-center min-[1200px]:px-0"
          >
            {content.items.map((item) => (
              <div
                className="w-[calc(100vw-32px)] shrink-0 snap-start min-[576px]:w-[500px] min-[768px]:w-[680px] min-[992px]:w-[450px] min-[1200px]:w-[560px]"
                key={item.title}
              >
                <div className="group h-full rounded-[10px] bg-[#dfdfdf] p-0.5 transition-[background] duration-300 hover:bg-[linear-gradient(to_right,#15c064,#00d1ff)]">
                  <div className="flex h-full flex-col justify-between rounded-[8px] bg-white p-6">
                    <div className="relative mb-4 h-[200px] overflow-hidden rounded-[6px]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      {item.eyebrow && (
                        <span className="mb-1 block text-xs font-semibold text-brand-red">
                          {item.eyebrow}
                        </span>
                      )}
                      <h3 className="mb-2 font-display text-xl font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                    {item.href && (
                      <div className="mt-4 pt-2">
                        <Link
                          href={item.href}
                          className="text-sm font-bold text-brand-red hover:underline"
                        >
                          {item.ctaLabel ?? sharedUiCopy.viewSolutions}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export { IndustryVerticalsGridBlock as IndustriesServedSection };
