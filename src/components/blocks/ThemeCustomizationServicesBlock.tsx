import React from "react";

import {
  ThemeCustomizationServicesSection,
  type ThemeCustomizationBox,
  type ThemeCustomizationServicesContent,
} from "@/components/sections/theme-customization-services-section";

export type { ThemeCustomizationBox, ThemeCustomizationServicesContent };

export type ThemeCustomizationServicesBlockProps = {
  content?: ThemeCustomizationServicesContent;
  eyebrow?: string;
  heading?: string | readonly string[];
  description?: string | readonly string[];
  bottomNote?: string;
  boxes?: readonly ThemeCustomizationBox[];
  id?: string;
  variant?: "green" | "yellow" | "transparent";
  className?: string;
};

export type ThemeCustomizationServicesSectionProps = ThemeCustomizationServicesBlockProps;

export function ThemeCustomizationServicesBlock({
  content,
  eyebrow,
  heading,
  description,
  bottomNote,
  boxes,
  id,
  variant,
  className,
}: ThemeCustomizationServicesBlockProps) {
  const finalEyebrow = eyebrow ?? content?.eyebrow;
  const finalHeading = heading ?? content?.heading ?? "";
  const finalDescription = description ?? content?.description;
  const finalBottomNote = bottomNote ?? content?.bottomNote;
  const finalBoxes = boxes ?? content?.boxes ?? [];
  const finalVariant = variant ?? (content as any)?.variant ?? "green";
  const finalId = id ?? (content as any)?.id;

  return (
    <ThemeCustomizationServicesSection
      className={className}
      id={finalId}
      variant={finalVariant}
      content={{
        eyebrow: finalEyebrow,
        heading: finalHeading,
        description: finalDescription,
        bottomNote: finalBottomNote,
        boxes: finalBoxes,
      }}
    />
  );
}

export { ThemeCustomizationServicesSection };
