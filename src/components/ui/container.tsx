import type { ComponentPropsWithoutRef, ElementType } from "react";

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
        "container mx-auto w-full max-w-none px-4 md:px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1400px]:max-w-[1360px]",
        className,
      )}
      {...props}
    />
  );
}
