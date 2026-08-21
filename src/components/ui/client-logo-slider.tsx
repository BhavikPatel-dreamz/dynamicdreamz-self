"use client";

import { useEffect, useState } from "react";
import Slider, { type Settings } from "react-slick";

import { ClientLogo } from "@/components/sections/home/client-logo";
import type { ImageItem } from "@/content/home";
import { cn } from "@/lib/class-names";

import styles from "./client-logo-slider.module.css";

export type ClientLogoSliderItem = ImageItem & {
  href?: string;
};

type ClientLogoSliderProps = {
  ariaLabel: string;
  items: readonly ClientLogoSliderItem[];
  variant: "industry" | "industryCompact" | "resources";
  compact?: boolean;
};

function slidesForWidth(variant: ClientLogoSliderProps["variant"], width: number) {
  if (variant === "industry" || variant === "industryCompact") {
    if (width < 768) return 2;
    if (width < 1200) return 3;
    return 4;
  }

  if (width < 577) return 2;
  if (width < 769) return 3;
  if (width < 1025) return 4;
  return 6;
}

export function ClientLogoSlider({
  ariaLabel,
  items,
  variant,
  compact = false,
}: ClientLogoSliderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(
    variant === "industry" || variant === "industryCompact" ? 4 : 6,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    const updateSlides = () => setSlidesToShow(slidesForWidth(variant, window.innerWidth));
    updatePreference();
    updateSlides();
    mediaQuery.addEventListener("change", updatePreference);
    window.addEventListener("resize", updateSlides);
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      window.removeEventListener("resize", updateSlides);
    };
  }, [variant]);

  const settings: Settings = {
    arrows: false,
    autoplay: !reducedMotion,
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

  return (
    <div aria-label={ariaLabel} role="region">
      <Slider
        {...settings}
        className={cn(cn(styles.slider, variant === "industryCompact" && styles.compactSlider), compact && styles.compactSlider)}
        key={`${variant}-${slidesToShow}-${reducedMotion ? "reduced" : "motion"}-${compact ? "compact" : "standard"}`}
      >
        {items.map((logo) => (
          <div key={logo.src}>
            <div
              className={cn(
                styles.item,
                variant === "resources" ? styles.resourcesItem : styles.industryItem,
                variant === "industryCompact" && styles.compactIndustryItem,
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
