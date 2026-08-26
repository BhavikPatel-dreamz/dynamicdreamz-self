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
            "text-base leading-7 font-medium text-muted",
            textClassName,
          )}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
