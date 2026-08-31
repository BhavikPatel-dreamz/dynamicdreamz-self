import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/home/integrations-section.module.css";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, integrationLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export function IntegrationsSection() {
  return (
    <section className="our_partners overflow-hidden bg-[#fafaf7] py-[55px] max-[767px]:py-[50px]">
      <Container>
        <div className="section_title mb-[57px] flex items-center justify-center min-[768px]:max-[992px]:mb-[30px] max-[767px]:mb-[29px]">
          <SectionHeading
            unstyled
            className="m-0 max-w-[540px] font-montreal-medium text-[43px] leading-[1.2] font-normal tracking-normal text-ink max-[1199px]:max-w-[400px] max-[1199px]:text-[35px] max-[1199px]:leading-[48.475px] max-[992px]:mb-2.5 max-[992px]:max-w-full max-[992px]:text-left max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33.24px]"
          >
            {homeSectionCopy.integrationsTitle}
          </SectionHeading>
        </div>
      </Container>
      <div className="space-y-[50px] max-[767px]:space-y-6" aria-label="Platforms and integrations">
        {integrationLogoRows.map((row, index) => (
          <div className="flex w-full items-center overflow-hidden" key={index}>
            {[0, 1, 2].map((set) => (
              <div className={cn("flex shrink-0 items-center", index === 0 ? styles.moveLeft : styles.moveRight)} key={set} aria-hidden={set > 0 || undefined}>
                {row.map((logo) => (
                  <span className="mx-[45px] flex items-center justify-center max-[767px]:mx-6 [&_img]:h-auto [&_img]:w-auto [&_img]:object-contain max-[767px]:[&_img]:max-h-[30px] max-[767px]:[&_img]:max-w-[120px]" key={`${set}-${logo.src}`}>
                    <ClientLogo logo={logo} decorative={set > 0} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
