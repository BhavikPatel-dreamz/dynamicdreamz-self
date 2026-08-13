import type { ReactNode } from "react";

import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";

export function AboutTimelineCarousel({ children }: { children: ReactNode }) {
  return (
    <HorizontalDragScroll
      className="h-[535px] w-full cursor-grab touch-pan-y overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing min-[1200px]:w-[calc(100%+max(0px,50vw-590px))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      ariaLabel="Dynamic Dreamz company milestones. Scroll horizontally to explore the timeline."
    >
      {children}
    </HorizontalDragScroll>
  );
}
