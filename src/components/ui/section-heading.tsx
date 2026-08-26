import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/class-names";

const sectionHeadingTypographyClassName =
  "font-display text-[35px] leading-[1.4] font-medium tracking-normal max-[1199px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]";

export const sectionHeadingClassName = `${sectionHeadingTypographyClassName} text-ink`;

type SectionHeadingProps = ComponentPropsWithoutRef<"h2"> & {
  /** Removes the shared typography so a section can provide a fully custom H2. */
  unstyled?: boolean;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  children,
  className,
  tone = "default",
  unstyled = false,
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        !unstyled && sectionHeadingTypographyClassName,
        !unstyled && (tone === "inverse" ? "text-white" : "text-ink"),
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
