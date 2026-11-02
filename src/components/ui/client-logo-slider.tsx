"use client";

import { useEffect, useRef, useState } from "react";
import Slider, { type Settings } from "react-slick";

import "slick-carousel/slick/slick.css";

import { ClientLogo } from "@/components/sections/home/client-logo";
import type { ImageItem } from "@/content/home-client";
import { cn } from "@/lib/class-names";

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
  ariaLabel: string;
  items: readonly ClientLogoSliderItem[];
  variant: "industry" | "industryCompact" | "resources";
  compact?: boolean;
  /**
   * Rail height preset used by live flexible-css pages, which keep a 70px
   * logo rail (60px ≤767px) instead of the 84px services-page rail.
   * Defaults to the height implied by `variant`/`compact`.
   */
  railHeight?: "flexible";
  slides?: ClientLogoSliderSlides;
  autoplayStartDelayMs?: number;
};

type ClientLogoSlideProps = {
  logo: ClientLogoSliderItem;
  variant: ClientLogoSliderProps["variant"];
  hasCompactRail: boolean;
};

function ClientLogoSlide({ logo, variant, hasCompactRail }: ClientLogoSlideProps) {
  return (
    <div
      className={cn(
        "flex h-(--client-logo-slider-height) items-center justify-center [&_img]:h-auto [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain",
        variant === "resources"
          ? "px-7 max-[768px]:px-[22px] [&_img]:max-h-[58px]"
          : "px-5 max-[768px]:px-2.5 [&_img]:max-h-[70px]",
        hasCompactRail && variant !== "resources" && "[&_img]:max-h-(--client-logo-slider-height)",
      )}
    >
      {logo.href ? (
        <a
          className="flex h-full w-full items-center justify-center"
          href={logo.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ClientLogo logo={logo} />
        </a>
      ) : (
        <ClientLogo logo={logo} />
      )}
    </div>
  );
}

export function ClientLogoSlider({
  ariaLabel,
  items,
  variant,
  compact = false,
  railHeight,
  slides,
  autoplayStartDelayMs = 0,
}: ClientLogoSliderProps) {
  const regionRef = useRef<HTMLDivElement>(null);
  const isCompactSlider = variant === "industryCompact" || compact;
  // Live `.our-client-sec .wrapper` is 70px (60px ≤767px) on flexible-css pages.
  const usesFlexibleRail = railHeight === "flexible" && variant !== "resources";
  const hasCompactRail = isCompactSlider || usesFlexibleRail;
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoplayReady, setAutoplayReady] = useState(autoplayStartDelayMs === 0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(
    slides?.desktop ?? (variant === "industry" ? 4 : 6),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 991px)");
    const laptopQuery = window.matchMedia("(max-width: 1199px)");
    const compactMobileQuery = window.matchMedia("(max-width: 576px)");
    const compactTabletQuery = window.matchMedia("(max-width: 768px)");
    const compactLaptopQuery = window.matchMedia("(max-width: 1024px)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    const updateSlides = () => {
      if (slides) {
        if (mobileQuery.matches) {
          setSlidesToShow(slides.mobile);
        } else if (tabletQuery.matches) {
          setSlidesToShow(slides.tablet);
        } else if (laptopQuery.matches) {
          setSlidesToShow(slides.laptop ?? slides.tablet);
        } else {
          setSlidesToShow(slides.desktop);
        }
        return;
      }

      if (variant === "industry" || variant === "industryCompact") {
        setSlidesToShow(mobileQuery.matches ? 2 : laptopQuery.matches ? 3 : 4);
        return;
      }

      setSlidesToShow(
        compactMobileQuery.matches ? 2 : compactTabletQuery.matches ? 3 : compactLaptopQuery.matches ? 4 : 6,
      );
    };
    updatePreference();
    updateSlides();
    mediaQuery.addEventListener("change", updatePreference);
    const queries = [mobileQuery, tabletQuery, laptopQuery, compactMobileQuery, compactTabletQuery, compactLaptopQuery];
    queries.forEach((query) => query.addEventListener("change", updateSlides));
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      queries.forEach((query) => query.removeEventListener("change", updateSlides));
    };
  }, [slides, variant]);

  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsNearViewport(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" },
    );

    observer.observe(region);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoplayStartDelayMs === 0) return;

    const timer = window.setTimeout(() => setAutoplayReady(true), autoplayStartDelayMs);
    return () => window.clearTimeout(timer);
  }, [autoplayStartDelayMs]);

  const settings: Settings = {
    arrows: false,
    autoplay: !reducedMotion && autoplayReady,
    autoplaySpeed: 2000,
    dots: false,
    draggable: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: variant === "resources",
    slidesToScroll: 1,
    slidesToShow,
    speed: reducedMotion ? 0 : 500,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
  };

  const sliderClassName = cn(
    "h-(--client-logo-slider-height) [&_.slick-list]:h-(--client-logo-slider-height) [&_.slick-list]:cursor-grab [&_.slick-list]:overflow-hidden [&_.slick-list:active]:cursor-grabbing [&_.slick-slide]:h-(--client-logo-slider-height) [&_.slick-slide>div]:h-(--client-logo-slider-height) [&_.slick-track]:h-(--client-logo-slider-height) motion-reduce:[&_.slick-track]:!duration-[1ms]",
    // Live rail heights: 84px on services pages, 70px on flexible-css pages
    // (60px ≤767px). `cn` is a plain join, so the preset is exclusive.
    hasCompactRail
      ? "[--client-logo-slider-height:70px] max-[767px]:[--client-logo-slider-height:60px]"
      : variant === "industry"
        ? "[--client-logo-slider-height:84px] max-[767px]:[--client-logo-slider-height:60px]"
        : "[--client-logo-slider-height:84px]",
  );

  return (
    <div ref={regionRef} aria-label={ariaLabel} role="region">
      {isNearViewport ? (
        <Slider
          {...settings}
          className={sliderClassName}
          key={`${variant}-${slidesToShow}-${reducedMotion ? "reduced" : "motion"}-${autoplayReady ? "ready" : "waiting"}-${compact ? "compact" : "standard"}`}
        >
          {items.map((logo) => (
            <div key={logo.src}>
              <ClientLogoSlide hasCompactRail={hasCompactRail} logo={logo} variant={variant} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={cn(sliderClassName, "overflow-hidden")}>
          <div className="flex h-full">
            {items.map((logo) => (
              <div
                className="h-full shrink-0"
                key={logo.src}
                style={{ flexBasis: `${100 / slidesToShow}%` }}
              >
                <ClientLogoSlide hasCompactRail={hasCompactRail} logo={logo} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
