import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/class-names";

const sectionHeadingSizes = {
  default:
    "font-montreal-medium text-[35px] leading-[49px] font-normal tracking-normal max-[992px]:text-[30px] max-[992px]:leading-10 max-[768px]:text-2xl max-[768px]:leading-[33.24px]",
  xl:
    "font-montreal-medium text-[43px] leading-[1.2] font-normal tracking-normal max-[992px]:text-[30px] max-[992px]:leading-10 max-[768px]:text-2xl max-[768px]:leading-[33.24px]",
};

type SectionHeadingProps = ComponentPropsWithoutRef<"h2"> & {
  /** Removes the shared typography so a section can provide a fully custom H2. */
  unstyled?: boolean;
  size?: "default" | "xl";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  children,
  className,
  size = "default",
  tone = "default",
  unstyled = false,
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        !unstyled && sectionHeadingSizes[size],
        !unstyled && (tone === "inverse" ? "text-white" : "text-ink"),
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
