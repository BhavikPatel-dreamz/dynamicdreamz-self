import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/class-names";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto w-full max-w-none md:px-5 px-4 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1180px] min-[1400px]:max-w-[1360px]",
        className,
      )}
      {...props}
    />
  );
}
