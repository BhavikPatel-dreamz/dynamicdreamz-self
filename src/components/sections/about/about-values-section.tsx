import { AboutValueIcon } from "@/components/sections/about/about-values-icons";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { aboutSectionCopy, coreValues } from "@/content/about";

export type AboutValuesSectionProps = {
  title?: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    iconName: string;
  }[];
};

export function AboutValuesSection({
  title = aboutSectionCopy.valuesTitle,
  description = aboutSectionCopy.valuesDescription,
  values: customValues,
}: AboutValuesSectionProps = {}) {
  const activeValues =
    customValues && customValues.length > 0 ? customValues : coreValues;

  return (
    <ThemeCustomizationServicesSection
      variant="transparent"
      content={{
        heading: title,
        description: description,
        boxes: activeValues.map((value) => ({
          icon: <AboutValueIcon name={value.iconName} />,
          title: value.title,
          description: value.description,
        })),
      }}
    />
  );
}
