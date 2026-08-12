import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/class-names";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  footer?: boolean;
  home?: boolean;
};

export function Container({ className, footer = false, home = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-none px-5 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px]",
        home && "min-[1440px]:max-w-[1360px]",
        footer && "min-[992px]:!max-w-[1170px]",
        className,
      )}
      {...props}
    />
  );
}
