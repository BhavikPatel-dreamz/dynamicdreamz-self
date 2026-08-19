import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { resourcesClientLogos } from "@/content/resources";

export function ResourcesBrandStrip() {
  return (
    <section className="our-client-sec h-[164px] overflow-hidden bg-[#f7f5ef] py-10" aria-label="Brands supported by Dynamic Dreamz">
      <ClientLogoSlider
        ariaLabel="Client brand logos"
        items={resourcesClientLogos}
        variant="resources"
      />
    </section>
  );
}
