"use client";

import React, { useSyncExternalStore } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import type { ImageItem } from "@/content/home-client";
import { cn } from "@/lib/class-names";

// ── 1. Re-export HorizontalDragScroll ──
import {
  HorizontalDragScroll,
  type HorizontalDragScrollProps,
  type HorizontalDragScrollVariant,
} from "@/components/ui/horizontal-drag-scroll";

export { HorizontalDragScroll, type HorizontalDragScrollProps, type HorizontalDragScrollVariant };
export const CarouselSliderClient = HorizontalDragScroll;

// ── 2. ClientLogoSlider ──
function ClientLogo({
  logo,
  decorative = false,
  sizes = "(max-width: 767px) 120px, 180px",
}: {
  logo: ImageItem;
  decorative?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
      sizes={sizes}
    />
  );
}

export type ClientLogoSliderItem = ImageItem & {
  href?: string;
};

export type ClientLogoSliderSlides = {
  desktop: number;
  laptop?: number;
  tablet: number;
  mobile: number;
};

type ClientLogoSliderProps = {
  items: readonly ClientLogoSliderItem[];
  slides?: ClientLogoSliderSlides;
  reverse?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  className?: string;
  itemClassName?: string;
  imageSizes?: string;
  fadeEdges?: boolean;
  pauseOnHover?: boolean;
  density?: "compact" | "regular";
  mobileSpacing?: "compact" | "standard";
  variant?: "brand" | "industry" | "industryCompact";
  compact?: boolean;
  railHeight?: "flexible" | "standard";
  autoplayStartDelayMs?: number;
  ariaLabel?: string;
};

export function ClientLogoSlider({
  items,
  slides = { desktop: 6, tablet: 4, mobile: 2 },
  reverse = false,
  speed = 4000,
  autoplaySpeed = 0,
  className = "",
  itemClassName = "",
  imageSizes = "(max-width: 767px) 120px, 180px",
  fadeEdges = true,
  pauseOnHover = false,
  density = "regular",
  mobileSpacing = "standard",
  variant = "brand",
}: ClientLogoSliderProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: slides.desktop,
    slidesToScroll: 1,
    autoplay: true,
    speed,
    autoplaySpeed,
    cssEase: "linear",
    pauseOnHover,
    pauseOnFocus: false,
    rtl: reverse,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slides.laptop ?? Math.min(slides.desktop, 5),
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slides.tablet,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slides.mobile,
        },
      },
    ],
  };

  const densitySpacing = density === "compact" ? "py-4 md:py-6" : "py-8 md:py-12";
  const mobileMargin = mobileSpacing === "compact" ? "max-[767px]:my-2" : "";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        densitySpacing,
        mobileMargin,
        fadeEdges &&
          "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent",
        className,
      )}
    >
      {mounted ? (
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={`${item.alt}-${index}`} className="outline-none">
              <div
                className={cn(
                  "flex items-center justify-center px-4 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100",
                  variant === "industry" ? "h-16" : "h-20",
                  itemClassName,
                )}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center outline-none"
                    aria-label={item.alt}
                  >
                    <ClientLogo logo={item} sizes={imageSizes} />
                  </a>
                ) : (
                  <ClientLogo logo={item} sizes={imageSizes} />
                )}
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-around">
          {items.slice(0, slides.desktop).map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className={cn(
                "flex items-center justify-center px-4 grayscale opacity-70",
                variant === "industry" ? "h-16" : "h-20",
                itemClassName,
              )}
            >
              <ClientLogo logo={item} sizes={imageSizes} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
