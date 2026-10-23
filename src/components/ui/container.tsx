import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/class-names";

export type ContainerVariant = "default" | "wide" | "narrow" | "fullBleedTablet" | "form";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  variant?: ContainerVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const containerVariantStyles: Record<ContainerVariant, string> = {
  default:
    "max-w-none px-4 md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1300px]:max-w-[1280px] min-[1400px]:max-w-[1360px]",
  wide:
    "max-w-none px-[15px] md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1300px]:max-w-[1280px] min-[1400px]:max-w-[1408px]",
  narrow:
    "max-w-none px-4 md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1440px]:max-w-[1180px]",
  fullBleedTablet:
    "max-w-none px-[15px] max-[1199px]:max-w-full max-[1199px]:px-0 min-[1200px]:max-w-[1180px] min-[1300px]:max-w-[1280px] min-[1400px]:max-w-[1408px]",
  form:
    "max-w-none px-4 md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1300px]:max-w-[1360px] min-[1300px]:px-10",
};

export function Container<T extends ElementType = "div">({
  as,
  className,
  variant = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "container mx-auto w-full",
        containerVariantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Eyebrow, type EyebrowProps } from "./eyebrow";
