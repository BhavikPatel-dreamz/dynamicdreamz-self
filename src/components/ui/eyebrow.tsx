import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/class-names";

type EyebrowProps<T extends ElementType = "p"> = {
  as?: T;
  children?: ReactNode;
  /**
   * Renders one eyebrow line per item with a dot separator between items,
   * matching the multi-item eyebrows used on the live site's page heroes.
   */
  items?: readonly string[];
  className?: string;
  align?: "start" | "center" | "responsive-center";
  lineThickness?: "thin" | "regular";
  lineWidth?: "fixed" | "responsive";
  /**
   * `flow` keeps the accent line as an inline flex item so it participates in
   * the eyebrow line box. `overlay` absolutely positions the accent line and
   * pads the eyebrow instead, matching live heroes where the eyebrow is
   * rendered inline inside a surrounding line box.
   */
  linePosition?: "flow" | "overlay";
  tone?: "ink" | "muted" | "inverse";
  unstyled?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Eyebrow<T extends ElementType = "p">({
  as,
  children,
  items,
  className,
  align = "start",
  lineThickness = "regular",
  lineWidth = "responsive",
  linePosition = "flow",
  tone = "ink",
  unstyled = false,
  ...props
}: EyebrowProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        !unstyled && "items-center text-[14px] leading-[1.2] font-semibold uppercase before:block before:shrink-0 before:bg-brand-red before:content-[''] max-[1199px]:text-[12px] max-[767px]:text-[10px]",
        !unstyled && (Component === "span" ? "inline-flex" : "flex"),
        !unstyled && align === "center" && "justify-center",
        !unstyled && align === "responsive-center" && "justify-start max-[992px]:justify-center",
        !unstyled && linePosition === "flow" && "before:mr-3 max-[767px]:before:mr-2",
        !unstyled &&
          linePosition === "overlay" &&
          "relative pl-10 before:absolute before:left-0 before:top-[7px] max-[767px]:pl-[23px] max-[1199px]:before:top-[6px] max-[767px]:before:top-[4px]",
        !unstyled && lineThickness === "regular" && "before:h-0.5",
        !unstyled && lineThickness === "thin" && "before:h-[2px]",
        !unstyled && lineWidth === "fixed" && "before:w-[30px]",
        !unstyled && lineWidth === "responsive" && "before:w-[30px] max-[767px]:before:w-[15px]",
        !unstyled && tone === "ink" && "text-ink",
        !unstyled && tone === "muted" && "text-muted",
        !unstyled && tone === "inverse" && "text-white",
        className,
      )}
      {...props}
    >
      {items
        ? items.map((item, index) => (
            <span
              className={cn(
                "relative inline-flex items-center",
                index > 0 &&
                  "ml-2.5 pl-2.5 after:absolute after:left-[-2px] after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-current after:content-['']",
              )}
              key={item}
            >
              {item}
            </span>
          ))
        : children}
    </Component>
  );
}
