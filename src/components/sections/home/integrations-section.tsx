import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/home/integrations-section.module.css";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy, integrationLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export function IntegrationsSection() {
  return (
    <section className="overflow-hidden bg-[#fafaf7] py-[55px] max-[767px]:py-[50px]">
      <Container>
        <div className="mb-[57px] flex items-center justify-between min-[768px]:max-[991px]:mb-[30px] min-[768px]:max-[991px]:flex-col min-[768px]:max-[991px]:items-start max-[767px]:mb-[29px] max-[767px]:flex-col max-[767px]:items-start">
          <SectionHeading className="max-w-[540px] min-[768px]:max-[991px]:mb-2.5 min-[768px]:max-[991px]:max-w-full max-[767px]:mb-4 max-[767px]:max-w-full">{homeSectionCopy.integrationsTitle}</SectionHeading>
          <p className="max-w-[560px] text-lg leading-[1.9] font-medium text-muted min-[768px]:max-[991px]:max-w-full min-[768px]:max-[991px]:text-base max-[767px]:max-w-full max-[767px]:text-base">
            {homeSectionCopy.integrationsDescription}
          </p>
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
