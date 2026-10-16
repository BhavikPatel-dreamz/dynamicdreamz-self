import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/class-names";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "container mx-auto w-full max-w-none px-4 md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1300px]:max-w-[1280px] min-[1400px]:max-w-[1360px]",
        className,
      )}
      {...props}
    />
  );
}

export type EyebrowProps<T extends ElementType = "p"> = {
  as?: T;
  children?: ReactNode;
  items?: readonly string[];
  className?: string;
  align?: "start" | "center" | "responsive-center";
  lineThickness?: "thin" | "regular";
  lineWidth?: "fixed" | "responsive";
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
        !unstyled && align === "responsive-center" && "justify-start max-[991px]:justify-center",
        !unstyled && linePosition === "flow" && "before:mr-3 max-[767px]:before:mr-2.5",
        !unstyled &&
          linePosition === "overlay" &&
          "relative pl-10 before:absolute before:left-0 before:top-[7px] max-[767px]:pl-6 max-[1199px]:before:top-[6px] max-[767px]:before:top-[4px]",
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
