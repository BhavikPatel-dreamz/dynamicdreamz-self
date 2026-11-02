import type { ReactNode } from "react";

import { cn } from "@/lib/class-names";

type SectionDescriptionProps = {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  width?: "half" | "full" | "auto";
};

export function SectionDescription({
  children,
  className,
  textClassName,
  width = "half",
}: SectionDescriptionProps) {
  return (
    <div
      className={cn(
        "section_text",
        width === "half" && "w-[48%] max-[1200px]:w-full",
        width === "full" && "w-full",
        className,
      )}
    >
      {children ? (
        <p
          className={cn(
            "text-base max-[1200px]:text-[14px] max-[768px]:text-sm leading-7 max-[1200px]:leading-[24px] max-[768px]:leading-[22px] font-medium text-muted",
            textClassName,
          )}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
