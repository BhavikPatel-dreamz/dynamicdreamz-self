import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { resourcesBrandsSection, resourcesClientLogos } from "@/content/resources";

export function ResourcesBrandStrip() {
  return (
    <IndustryBrandsSection
      content={resourcesBrandsSection}
      items={resourcesClientLogos}
    />
  );
}
