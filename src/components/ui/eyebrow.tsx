import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/class-names";

type EyebrowProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  align?: "start" | "center" | "responsive-center";
  lineThickness?: "thin" | "regular";
  lineWidth?: "fixed" | "responsive";
  tone?: "ink" | "muted" | "inverse";
  unstyled?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Eyebrow<T extends ElementType = "p">({
  as,
  children,
  className,
  align = "start",
  lineThickness = "regular",
  lineWidth = "responsive",
  tone = "ink",
  unstyled = false,
  ...props
}: EyebrowProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        !unstyled && "items-center text-[13px] leading-none font-semibold uppercase before:mr-3 before:max-[767px]:mr-2 before:block before:shrink-0 before:bg-brand-red before:content-[''] max-[1199px]:text-[12px] max-[767px]:text-[10px]",
        !unstyled && (Component === "span" ? "inline-flex" : "flex"),
        !unstyled && align === "center" && "justify-center",
        !unstyled && align === "responsive-center" && "justify-start max-[991px]:justify-center",
        !unstyled && lineThickness === "regular" && "before:h-0.5",
        !unstyled && lineThickness === "thin" && "before:h-px",
        !unstyled && lineWidth === "fixed" && "before:w-[30px]",
        !unstyled && lineWidth === "responsive" && "before:w-[30px] max-[767px]:before:w-[15px]",
        !unstyled && tone === "ink" && "text-ink",
        !unstyled && tone === "muted" && "text-muted",
        !unstyled && tone === "inverse" && "text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
