import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/home/brand-partners-section.module.css";
import { Container } from "@/components/ui/container";
import { clientLogos, mobileClientLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export function BrandPartnersSection() {
  return (
    <section className="min-h-[640.78px] overflow-hidden py-20 pb-[84px] min-[768px]:max-[991px]:min-h-[614.78px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[443.69px] max-[767px]:pt-10 max-[767px]:pb-[50px]">
      <Container>
        <div className="mb-[50px] flex items-center justify-between min-[768px]:max-[991px]:mb-[30px] min-[768px]:max-[991px]:flex-col min-[768px]:max-[991px]:items-start max-[767px]:mb-[55px] max-[767px]:flex-col max-[767px]:text-center">
          <h2 className="text-2xl leading-none font-medium min-[768px]:max-[991px]:mb-2.5 min-[768px]:max-[991px]:w-full max-[767px]:mb-2.5 max-[767px]:text-[23px] max-[767px]:leading-[1.24]">Partnering with Ambitious Brands</h2>
          <p className="max-w-[482px] text-left text-base leading-[1.9] font-semibold text-muted min-[768px]:max-[991px]:max-w-full max-[767px]:mx-auto max-[767px]:max-w-[350px] max-[767px]:text-center max-[767px]:text-sm">
            Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-y-[50px] min-[768px]:max-[991px]:mx-[-15px] min-[768px]:max-[991px]:h-[390px] min-[768px]:max-[991px]:grid-cols-4 min-[768px]:max-[991px]:content-between min-[768px]:max-[991px]:gap-y-[30px] max-[767px]:hidden">
          {clientLogos.map((logo) => (
            <div className="flex min-h-[50px] items-center justify-center px-[15px] min-[768px]:max-[991px]:mx-[15px] [&_img]:h-auto [&_img]:w-auto [&_img]:max-h-[50px] [&_img]:object-contain min-[768px]:max-[991px]:[&_img]:max-h-none" key={logo.src}>
              <ClientLogo logo={logo} />
            </div>
          ))}
        </div>
      </Container>
      <div className="hidden flex-col max-[767px]:flex" aria-hidden="true">
        {mobileClientLogoRows.map((row, index) => (
          <div className={cn("flex w-max items-center", index > 0 && "mt-2.5", index === 0 && "mb-5", index === 2 && "ml-[-25%]")} key={index}>
            {[0, 1, 2].map((set) => (
              <div className={cn("flex shrink-0 items-center", index === 1 ? styles.moveRight : styles.moveLeft)} key={set}>
                {row.map((logo) => (
                  <span className="mx-[30px] flex w-[120px] min-w-[120px] shrink-0 items-center justify-center [&_img]:h-auto [&_img]:w-auto" key={`${set}-${logo.src}`}>
                    <ClientLogo logo={logo} decorative />
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
