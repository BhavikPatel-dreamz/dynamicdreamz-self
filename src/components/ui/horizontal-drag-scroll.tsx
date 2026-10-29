"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/class-names";

export type HorizontalDragScrollVariant = "default" | "timeline" | "fullBleedAligned";

const variantViewportStyles: Record<HorizontalDragScrollVariant, string> = {
  default: "",
  timeline:
    "h-[535px] w-full max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  fullBleedAligned:
    "relative left-1/2 w-screen -translate-x-1/2 snap-x snap-mandatory [scroll-padding-inline-start:16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:[scroll-padding-inline-start:calc((100vw-500px)/2)] min-[768px]:[scroll-padding-inline-start:calc((100vw-680px)/2)] min-[992px]:[scroll-padding-inline-start:calc((100vw-920px)/2)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1140px)/2)] min-[1400px]:[scroll-padding-inline-start:calc((100vw-1320px)/2)]",
};

const variantTrackStyles: Record<HorizontalDragScrollVariant, string> = {
  default: "",
  timeline: "",
  fullBleedAligned:
    "flex w-max items-stretch gap-5 px-4 py-[10px] min-[576px]:px-[calc((100vw-500px)/2)] min-[768px]:px-[calc((100vw-680px)/2)] min-[992px]:px-[calc((100vw-920px)/2)] min-[1200px]:px-[calc((100vw-1140px)/2)] min-[1400px]:px-[calc((100vw-1320px)/2)]",
};

export type HorizontalDragScrollProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  ariaLabel: string;
  variant?: HorizontalDragScrollVariant;
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
  variant = "default",
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
      if (!viewport.isConnected) return;
      const scrollLeft = viewport.scrollLeft;
      const clientWidth = viewport.clientWidth;
      const scrollWidth = viewport.scrollWidth;
      const padding = scrollPadding(viewport);
      const items = carouselItems(viewport);
      const target = scrollLeft + padding;
      const closest = items.reduce(
        (best, item, index) => {
          const distance = Math.abs(item.offsetLeft - target);
          return distance < best.distance ? { distance, index } : best;
        },
        { distance: Number.POSITIVE_INFINITY, index: 0 },
      );

      setCanScrollPrevious(scrollLeft > 1);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
      setActiveItem(closest.index);
    });
  }

  function moveBy(offset: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const items = carouselItems(viewport);
    goToItem(Math.min(Math.max(activeItem + offset, 0), items.length - 1));
  }

  function goToItem(index: number) {
    const viewport = viewportRef.current;
    const item = viewport ? carouselItems(viewport)[index] : undefined;
    if (!viewport || !item) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: item.offsetLeft - scrollPadding(viewport),
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActiveItem(index);
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    function handleWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        const canScrollRight = event.deltaY > 0 && viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1;
        const canScrollLeft = event.deltaY < 0 && viewport.scrollLeft > 1;
        if (canScrollRight || canScrollLeft) {
          event.preventDefault();
          viewport.scrollLeft += event.deltaY;
        }
      }
    }

    viewport.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, []);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !event.isPrimary || event.button !== 0) return;
    if (event.pointerType === "touch") return;

    dragState.current = {
      active: true,
      moved: false,
      pointerX: event.clientX,
      scrollLeft: viewport.scrollLeft,
      scrollSnapType: viewport.style.scrollSnapType,
    };
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !dragState.current.active) return;

    const distance = event.clientX - dragState.current.pointerX;
    if (Math.abs(distance) >= dragThreshold && !dragState.current.moved) {
      dragState.current.moved = true;
      viewport.style.scrollSnapType = "none";
      try {
        viewport.setPointerCapture(event.pointerId);
      } catch {
        // Pointer capture can throw InvalidPointerId if the pointer is already released
      }
    }
    viewport.scrollLeft = dragState.current.scrollLeft - distance;
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    dragState.current.active = false;
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.style.scrollSnapType = dragState.current.scrollSnapType;
    try {
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Ignore release capture errors
    }
  }

  return (
    <>
      <div
        ref={viewportRef}
        className={cn("cursor-grab touch-pan-y overscroll-x-contain select-none active:cursor-grabbing", variantViewportStyles[variant], className)}
        aria-label={ariaLabel}
        role="region"
        tabIndex={0}
        onScroll={(event) => updateActiveItem(event.currentTarget)}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onClickCapture={(event) => {
          if (!dragState.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          dragState.current.moved = false;
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {(trackClassName || variantTrackStyles[variant]) ? <div className={cn(variantTrackStyles[variant], trackClassName)}>{children}</div> : children}
      </div>
      {pagination ? (
        <div className={pagination.className} aria-label={`${ariaLabel} pagination`} role="group">
          {Array.from({ length: pagination.itemCount }, (_, index) => (
            <button
              className={cn(
                pagination.dotClassName,
                activeItem === index && pagination.activeDotClassName,
              )}
              key={index}
              type="button"
              aria-label={`Show ${pagination.itemLabel} ${index + 1}`}
              aria-current={activeItem === index ? "true" : undefined}
              onClick={() => goToItem(index)}
            />
          ))}
        </div>
      ) : null}
      {controls ? (
        <div className={controls.className} aria-label={`${ariaLabel} controls`} role="group">
          <button
            className={cn(controls.buttonClassName, !canScrollPrevious && controls.disabledButtonClassName)}
            type="button"
            aria-label={controls.previousLabel}
            disabled={!canScrollPrevious}
            onClick={() => moveBy(-1)}
          >
            <svg aria-hidden="true" className="size-5" viewBox="0 0 20 20" fill="none">
              <path d="m12.5 4.5-5.5 5.5 5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={cn(controls.buttonClassName, !canScrollNext && controls.disabledButtonClassName)}
            type="button"
            aria-label={controls.nextLabel}
            disabled={!canScrollNext}
            onClick={() => moveBy(1)}
          >
            <svg aria-hidden="true" className="size-5" viewBox="0 0 20 20" fill="none">
              <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}
