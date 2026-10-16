"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/ui/container";
import {
  ClientLogoSlider,
  type ClientLogoSliderItem,
  type ClientLogoSliderSlides,
} from "@/components/ui/CarouselSliderClient";
import {
  clientLogos,
  homeSectionCopy,
  mobileClientLogoRows,
  type ImageItem,
} from "@/content/home";
import { industryBrandLogos } from "@/content/industries";
import { brandTrustAriaLabels, migrationSectionCopy } from "@/content/migration-common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type { ClientLogoSliderItem, ClientLogoSliderSlides };

export type ClientLogoMarqueeBlockProps = {
  heading?: string | readonly string[];
  description?: string;
  items?: readonly ClientLogoSliderItem[];
  mobileRows?: readonly (readonly ImageItem[])[];
  variant?: "home" | "shopifyHours" | "industry" | "compact" | "flexible";
  content?: {
    slug?: string;
    heading?: string | readonly string[];
    brands?: {
      ariaLabel?: string;
    };
    ariaLabel?: string;
    [key: string]: any;
  };
  mobileSpacing?: "standard" | "spacious";
  density?: "standard" | "compact" | "flexible";
  showHeading?: boolean;
  sliderSlides?: ClientLogoSliderSlides;
  sliderAutoplayStartDelayMs?: number;
};

export type BrandPartnersSectionProps = ClientLogoMarqueeBlockProps;
export type IndustryBrandsSectionProps = ClientLogoMarqueeBlockProps;

export function ClientLogoMarqueeBlock({
  heading,
  description,
  items,
  mobileRows = mobileClientLogoRows,
  variant,
  content,
  mobileSpacing = "standard",
  density = "standard",
  showHeading = true,
  sliderSlides,
  sliderAutoplayStartDelayMs,
}: ClientLogoMarqueeBlockProps) {
  // If variant is home or shopifyHours, render the homepage style
  if (variant === "home" || variant === "shopifyHours" || (!content && !density && !variant)) {
    const isShopifyHours = variant === "shopifyHours";
    const h = (typeof heading === "string" ? heading : undefined) ?? homeSectionCopy.brandPartnersHeading;
    const d = description ?? homeSectionCopy.brandPartnersDescription;
    const list = (items as readonly ImageItem[] | undefined) ?? clientLogos;

    return (
      <section
        className={cn(
          "trusted_leading_brands overflow-hidden",
          isShopifyHours
            ? "py-20 max-[992px]:py-[60px] max-[767px]:min-h-[365px] max-[767px]:pt-10 max-[767px]:pb-[50px]"
            : "min-h-[640.78px] py-20 min-[768px]:max-[992px]:min-h-[614.78px] min-[768px]:max-[992px]:py-[50px] max-[767px]:min-h-[443.69px] max-[767px]:pt-10 max-[767px]:pb-[50px]",
        )}
      >
        <Container>
          <div
            data-aos="fade-up"
            className={cn(
              "flex items-end justify-between max-[992px]:flex-col max-[992px]:items-start",
              isShopifyHours
                ? "mb-10 max-[767px]:mb-[30px]"
                : "mb-[50px] min-[768px]:max-[992px]:mb-[30px] max-[767px]:mb-[55px] max-[767px]:text-center",
            )}
          >
            <div className="title w-full lg:w-[44%]">
              <h2
                className={cn(
                  "m-0 font-montreal-medium text-[43px] font-normal leading-[1.2] text-ink",
                  isShopifyHours
                    ? "font-sans text-[35px] font-normal leading-[1.4] tracking-normal text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]"
                    : "max-[1199px]:text-[35px] max-[1199px]:leading-[48px] max-[992px]:mb-2.5 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33px]",
                )}
              >
                {h}
              </h2>
            </div>
            <div className="description w-full lg:w-[50%]">
              <p className="m-0 font-sans text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                {d}
              </p>
            </div>
          </div>

          {/* Desktop/tablet logo grid */}
          <div
            data-aos="fade-up"
            className="hidden flex-wrap items-center justify-between min-[768px]:flex"
          >
            {list.map((logo) => (
              <div
                key={logo.src}
                className="flex h-[100px] w-1/4 items-center justify-center p-4 min-[768px]:max-[992px]:h-[80px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-[50px] w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Mobile logo rows */}
          <div data-aos="fade-up" className="flex flex-col gap-6 min-[768px]:hidden">
            {mobileRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex items-center justify-around gap-4">
                {row.map((logo) => (
                  <div key={logo.src} className="flex h-[60px] items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-[35px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Otherwise, render the industry slider layout
  const logos = items ?? industryBrandLogos;
  const slug = content?.slug ?? "industry";
  const ariaLabel =
    content?.brands?.ariaLabel ??
    content?.ariaLabel ??
    brandTrustAriaLabels[slug] ??
    migrationSectionCopy.brandsAriaLabel;
  const isCompact = density === "compact";
  const isFlexible = density === "flexible";

  return (
    <section
      className={cn(
        "our-client-sec overflow-hidden bg-[#FBEED5]",
        showHeading ? "dev py-4.25" : "py-10",
      )}
      aria-label={showHeading ? undefined : ariaLabel}
    >
      <Container className="max-[1199px]:max-w-full max-[1199px]:px-0">
        <div
          className={cn(
            "wrapper flex items-center justify-between max-[1199px]:flex-col max-[1199px]:items-start",
            showHeading &&
              (isCompact
                ? "h-[70px] max-[1199px]:h-auto"
                : isFlexible
                ? "h-[70px] max-[767px]:h-auto"
                : "h-[84px] max-[1199px]:h-auto"),
          )}
        >
          {showHeading && heading && (
            <div
              className={cn(
                "title relative z-10 flex shrink-0 items-center justify-between bg-[#FBEED5] pr-10 after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-[#d9d9d9] after:content-[''] max-[1199px]:w-full max-[1199px]:justify-center max-[1199px]:px-4 max-[1199px]:py-2.5 max-[1199px]:text-center max-[1199px]:after:hidden",
                isCompact
                  ? "w-1/3 max-[1199px]:w-full"
                  : isFlexible
                  ? "w-[30%] max-[1199px]:w-full"
                  : "w-[31%] max-[1199px]:w-full",
              )}
            >
              <h2 className="m-0 font-montreal-medium text-[20px] font-normal leading-[1.3] text-ink max-[1199px]:text-[18px] max-[767px]:text-[16px]">
                {formatBrText(heading)}
              </h2>
            </div>
          )}

          <div
            className={cn(
              "slider-wrap overflow-hidden",
              showHeading
                ? isCompact
                  ? "w-2/3 max-[1199px]:w-full"
                  : isFlexible
                  ? "w-[70%] max-[1199px]:w-full"
                  : "w-[69%] max-[1199px]:w-full"
                : "w-full",
              mobileSpacing === "spacious" && "max-[767px]:py-2",
            )}
          >
            <ClientLogoSlider
              ariaLabel={ariaLabel}
              items={logos}
              variant={isCompact ? "industryCompact" : "industry"}
              compact={isCompact}
              railHeight={isFlexible ? "flexible" : undefined}
              slides={sliderSlides}
              autoplayStartDelayMs={sliderAutoplayStartDelayMs}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export {
  ClientLogoMarqueeBlock as BrandPartnersBlock,
  ClientLogoMarqueeBlock as BrandPartnersSection,
  ClientLogoMarqueeBlock as IndustryBrandsSection,
  ClientLogoMarqueeBlock as ResourcesBrandStrip,
};
