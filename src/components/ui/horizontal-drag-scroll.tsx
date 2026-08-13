"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/class-names";

type HorizontalDragScrollProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

const dragThreshold = 4;

export function HorizontalDragScroll({ children, className, ariaLabel }: HorizontalDragScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, moved: false, pointerX: 0, scrollLeft: 0, scrollSnapType: "" });

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
    <div
      ref={viewportRef}
      className={cn("cursor-grab touch-pan-y overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing", className)}
      aria-label={ariaLabel}
      tabIndex={0}
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
      {children}
    </div>
  );
}
