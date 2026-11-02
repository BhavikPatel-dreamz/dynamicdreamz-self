import { LoopingLogoTrack } from "@/components/sections/home/looping-logo-track";
import styles from "@/components/sections/home/integrations-section.module.css";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, integrationLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export type IntegrationsSectionProps = {
  title?: string;
};

export function IntegrationsSection({
  title = homeSectionCopy.integrationsTitle,
}: IntegrationsSectionProps = {}) {
  return (
    <section className="our_partners overflow-hidden bg-[#fafaf7] py-[55px] max-[768px]:py-[50px]">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title mx-auto mb-[57px] max-w-[540px] text-center max-[1200px]:max-w-[400px] max-[992px]:max-w-full max-[1200px]:mb-10 min-[768px]:max-[992px]:mb-[30px] max-[768px]:mb-[29px]"
        >
          <SectionHeading size="xl" className="m-0">
            {title}
          </SectionHeading>
        </div>
      </Container>
      <div
        data-aos="fade-up"
        className="our_partners_logo_wrap space-y-[50px] max-[768px]:space-y-6"
        aria-label="Platforms and integrations"
      >
        {integrationLogoRows.map((row, index) => (
          <div className="flex w-full min-h-[50px] max-[768px]:min-h-[30px] items-center overflow-hidden" key={index}>
            <LoopingLogoTrack
              className={cn("flex shrink-0 items-center", index === 0 ? styles.moveLeft : styles.moveRight)}
              logoClassName="mx-[45px] flex items-center justify-center max-[768px]:mx-6 [&_img]:h-auto [&_img]:w-auto [&_img]:object-contain max-[768px]:[&_img]:max-h-[30px] max-[768px]:[&_img]:max-w-[120px]"
              logos={row}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
