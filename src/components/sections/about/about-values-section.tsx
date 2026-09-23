import { AboutValueIcon } from "@/components/sections/about/about-values-icons";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { aboutSectionCopy, coreValues } from "@/content/about";

export function AboutValuesSection() {
  return (
    <ThemeCustomizationServicesSection
      className="transparent"
      variant="transparent"
      content={{
        heading: aboutSectionCopy.valuesTitle,
        description: aboutSectionCopy.valuesDescription,
        boxes: coreValues.map((value) => ({
          icon: <AboutValueIcon name={value.iconName} />,
          title: value.title,
          description: value.description,
        })),
      }}
    />
  );
}
