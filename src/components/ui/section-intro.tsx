import type { ReactNode } from "react";

import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/class-names";

export type SectionIntroProps = {
  heading: ReactNode;
  description?: ReactNode;
  className?: string;
  headingClassName?: string;
  headingId?: string;
  descriptionClassName?: string;
  descriptionTextClassName?: string;
  tone?: "default" | "inverse";
};

export function SectionIntro({
  heading,
  description,
  className,
  headingClassName,
  headingId,
  descriptionClassName,
  descriptionTextClassName,
  tone = "default",
}: SectionIntroProps) {
  return (
    <header className={cn("text-center", className)}>
      <SectionHeading
        className={headingClassName}
        id={headingId}
        tone={tone}
      >
        {heading}
      </SectionHeading>
      {description ? (
        <SectionDescription
          className={descriptionClassName}
          textClassName={cn(
            tone === "inverse" && "text-white/80",
            descriptionTextClassName,
          )}
        >
          {description}
        </SectionDescription>
      ) : null}
    </header>
  );
}
