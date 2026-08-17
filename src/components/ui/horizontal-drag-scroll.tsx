"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/class-names";

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
};

const dragThreshold = 4;

export function HorizontalDragScroll({
  children,
  className,
  trackClassName,
  ariaLabel,
  pagination,
}: HorizontalDragScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const dragState = useRef({ active: false, moved: false, pointerX: 0, scrollLeft: 0, scrollSnapType: "" });

  function carouselItems(viewport: HTMLDivElement) {
    return [...viewport.querySelectorAll<HTMLElement>("[data-carousel-item]")];
  }

  function scrollPadding(viewport: HTMLDivElement) {
    return Number.parseFloat(getComputedStyle(viewport).scrollPaddingInlineStart) || 0;
  }

  function updateActiveItem(viewport: HTMLDivElement) {
    if (!pagination) return;
    const target = viewport.scrollLeft + scrollPadding(viewport);
    const closest = carouselItems(viewport).reduce(
      (best, item, index) => {
        const distance = Math.abs(item.offsetLeft - target);
        return distance < best.distance ? { distance, index } : best;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    );
    setActiveItem(closest.index);
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

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !event.isPrimary || event.button !== 0) return;

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

  function drag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !dragState.current.active) return;

    const distance = event.clientX - dragState.current.pointerX;
    if (Math.abs(distance) >= dragThreshold) dragState.current.moved = true;
    viewport.scrollLeft = dragState.current.scrollLeft - distance;
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    dragState.current.active = false;
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.style.scrollSnapType = dragState.current.scrollSnapType;
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  }

  return (
    <>
      <div
        ref={viewportRef}
        className={cn("cursor-grab touch-pan-y overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing", className)}
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
        {trackClassName ? <div className={trackClassName}>{children}</div> : children}
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
    </>
  );
}
