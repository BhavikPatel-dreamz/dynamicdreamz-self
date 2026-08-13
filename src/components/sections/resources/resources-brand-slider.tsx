import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { resourcesClientLogos } from "@/content/resources";

export function ResourcesBrandSlider() {
  return (
    <ClientLogoSlider
      ariaLabel="Client brand logos"
      items={resourcesClientLogos}
      variant="resources"
    />
  );
}
