import { LoopingLogoTrack } from "@/components/sections/home/looping-logo-track";
import styles from "@/components/sections/home/integrations-section.module.css";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { homeSectionCopy, integrationLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export type IntegrationsSectionProps = {
  title?: string;
};

export function IntegrationsSection({
  title = homeSectionCopy.integrationsTitle,
}: IntegrationsSectionProps = {}) {
  return (
    <section className="our_partners overflow-hidden bg-[#fafaf7] py-20 max-[992px]:py-15 max-[768px]:py-10">
      <Container>
        <SplitSectionHeading
          className="mb-[57px] max-w-[540px] max-[1200px]:mb-10 max-[1200px]:max-w-[400px] max-[992px]:max-w-full min-[768px]:max-[992px]:mb-[30px] max-[768px]:mb-[29px]"
          heading={title}
          variant="centered"
        />
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
