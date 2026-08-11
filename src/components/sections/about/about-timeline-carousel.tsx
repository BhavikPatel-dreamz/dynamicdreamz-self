"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export function AboutTimelineCarousel({ children }: { children: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, pointerX: 0, scrollLeft: 0 });

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport) return;

    dragState.current = {
      active: true,
      pointerX: event.clientX,
      scrollLeft: viewport.scrollLeft,
    };
    viewport.setPointerCapture(event.pointerId);
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || !dragState.current.active) return;

    viewport.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.pointerX);
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    dragState.current.active = false;
    viewportRef.current?.releasePointerCapture(event.pointerId);
  }

  return (
    <div
      ref={viewportRef}
      data-about-timeline-viewport
      className="h-[535px] w-full cursor-grab touch-pan-y overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing min-[1200px]:w-[calc(100%+max(0px,50vw-590px))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Dynamic Dreamz company milestones. Scroll horizontally to explore the timeline."
      tabIndex={0}
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onDragStart={(event) => event.preventDefault()}
    >
      {children}
    </div>
  );
}
