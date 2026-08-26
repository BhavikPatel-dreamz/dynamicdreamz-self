import type { ReactNode } from "react";

import { cn } from "@/lib/class-names";

type SectionDescriptionProps = {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
};

export function SectionDescription({
  children,
  className,
  textClassName,
}: SectionDescriptionProps) {
  return (
    <div className={cn("section_text", className)}>
      {children ? (
        <p
          className={cn(
            "text-base max-[1199px]:text-[14px] leading-7 max-[1199px]:leading-[24px] font-medium text-muted",
            textClassName,
          )}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
