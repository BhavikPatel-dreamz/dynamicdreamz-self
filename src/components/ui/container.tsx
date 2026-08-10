import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/class-names";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  footer?: boolean;
};

export function Container({ className, footer = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 max-[767px]:max-w-[540px] max-[767px]:px-4 min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1440px]:max-w-[1360px]",
        footer && "min-[992px]:!max-w-[1170px]",
        className,
      )}
      {...props}
    />
  );
}
