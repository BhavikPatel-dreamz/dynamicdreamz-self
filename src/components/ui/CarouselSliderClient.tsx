"use client";

import React, { useRef, useState, useSyncExternalStore, type PointerEvent, type ReactNode } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import type { ImageItem } from "@/content/home-client";
import { cn } from "@/lib/class-names";

// ── 1. HorizontalDragScroll ──
type HorizontalDragScrollProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  ariaLabel: string;
  pagination?: {
    itemCount: number;
    itemLabel: string;
    className?: string;
    dotClassName?: string;
    activeDotClassName?: string;
  };
  controls?: {
    className?: string;
    buttonClassName?: string;
    disabledButtonClassName?: string;
    previousLabel: string;
    nextLabel: string;
  };
};

const dragThreshold = 4;

export function HorizontalDragScroll({
  children,
  className,
  trackClassName,
  ariaLabel,
  pagination,
  controls,
}: HorizontalDragScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const dragState = useRef({ active: false, moved: false, pointerX: 0, scrollLeft: 0, scrollSnapType: "" });
  const scrollPaddingRef = useRef<number | null>(null);
  const scrollFrame = useRef(0);

  function carouselItems(viewport: HTMLDivElement) {
    return [...viewport.querySelectorAll<HTMLElement>("[data-carousel-item]")];
  }

  function scrollPadding(viewport: HTMLDivElement) {
    if (scrollPaddingRef.current == null) {
      scrollPaddingRef.current = Number.parseFloat(getComputedStyle(viewport).scrollPaddingInlineStart) || 0;
    }
    return scrollPaddingRef.current;
  }

  function updateActiveItem(viewport: HTMLDivElement) {
    if (!pagination && !controls) return;
    if (scrollFrame.current) return;

    scrollFrame.current = window.requestAnimationFrame(() => {
      scrollFrame.current = 0;
      const items = carouselItems(viewport);
      if (!items.length) return;

      const viewportLeft = viewport.getBoundingClientRect().left + scrollPadding(viewport);
      let closestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      for (let index = 0; index < items.length; index += 1) {
        const item = items[index];
        const distance = Math.abs(item.getBoundingClientRect().left - viewportLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }

      setActiveItem(closestIndex);
      setCanScrollPrevious(viewport.scrollLeft > 4);
      setCanScrollNext(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 4);
    });
  }

  function scrollToItem(index: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const targetItem = carouselItems(viewport)[index];
    if (!targetItem) return;

    viewport.scrollTo({
      left: targetItem.offsetLeft - scrollPadding(viewport),
      behavior: "smooth",
    });
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || event.pointerType === "touch" || event.button !== 0) return;

    dragState.current = {
      active: true,
      moved: false,
      pointerX: event.clientX,
      scrollLeft: viewport.scrollLeft,
      scrollSnapType: viewport.style.scrollSnapType,
    };

    viewport.style.scrollSnapType = "none";
    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !dragState.current.active) return;

    const deltaX = event.clientX - dragState.current.pointerX;
    if (!dragState.current.moved && Math.abs(deltaX) > dragThreshold) {
      dragState.current.moved = true;
    }

    if (dragState.current.moved) {
      viewport.scrollLeft = dragState.current.scrollLeft - deltaX;
      updateActiveItem(viewport);
    }
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !dragState.current.active) return;

    viewport.style.scrollSnapType = dragState.current.scrollSnapType;
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragState.current.active = false;
    window.setTimeout(() => {
      dragState.current.moved = false;
    }, 0);
  }

  return (
    <div className={className}>
      <div
        ref={viewportRef}
        aria-label={ariaLabel}
        className={trackClassName}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onScroll={(event) => updateActiveItem(event.currentTarget)}
        onClickCapture={(event) => {
          if (dragState.current.moved) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        {children}
      </div>

      {controls ? (
        <div className={controls.className}>
          <button
            type="button"
            aria-label={controls.previousLabel}
            disabled={!canScrollPrevious}
            className={cn(controls.buttonClassName, !canScrollPrevious && controls.disabledButtonClassName)}
            onClick={() => scrollToItem(Math.max(0, activeItem - 1))}
          >
            <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={controls.nextLabel}
            disabled={!canScrollNext}
            className={cn(controls.buttonClassName, !canScrollNext && controls.disabledButtonClassName)}
            onClick={() => scrollToItem(Math.min((pagination?.itemCount ?? 1) - 1, activeItem + 1))}
          >
            <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : null}

      {pagination ? (
        <div className={pagination.className}>
          {Array.from({ length: pagination.itemCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`${pagination.itemLabel} ${index + 1}`}
              aria-current={activeItem === index ? "true" : undefined}
              className={cn(pagination.dotClassName, activeItem === index && pagination.activeDotClassName)}
              onClick={() => scrollToItem(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

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
