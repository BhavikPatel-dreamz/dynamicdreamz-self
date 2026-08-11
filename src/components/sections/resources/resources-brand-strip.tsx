import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/resources/resources-brand-strip.module.css";
import { resourcesClientLogos } from "@/content/resources";
import { cn } from "@/lib/class-names";

export function ResourcesBrandStrip() {
  return (
    <section className="our-client-sec h-[164px] overflow-hidden bg-[#f7f5ef] py-10" aria-label="Brands supported by Dynamic Dreamz">
      <div className={styles.track}>
        {[...resourcesClientLogos, ...resourcesClientLogos].map((logo, index) => (
          <div className={cn(styles.item, "[&_img]:max-h-[58px] [&_img]:max-w-full [&_img]:object-contain")} aria-hidden={index >= resourcesClientLogos.length || undefined} key={`${logo.src}-${index}`}>
            <ClientLogo logo={logo} decorative={index >= resourcesClientLogos.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
