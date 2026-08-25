import { ClientLogo } from "@/components/sections/home/client-logo";
import styles from "@/components/sections/home/brand-partners-section.module.css";
import { Container } from "@/components/ui/container";
import {
  clientLogos,
  homeSectionCopy,
  mobileClientLogoRows,
  type ImageItem,
} from "@/content/home";
import { cn } from "@/lib/class-names";

type BrandPartnersSectionProps = {
  heading?: string;
  description?: string;
  items?: readonly ImageItem[];
  mobileRows?: readonly (readonly ImageItem[])[];
  variant?: "home" | "shopifyHours";
};

export function BrandPartnersSection({
  heading = homeSectionCopy.brandPartnersHeading,
  description = homeSectionCopy.brandPartnersDescription,
  items = clientLogos,
  mobileRows = mobileClientLogoRows,
  variant = "home",
}: BrandPartnersSectionProps = {}) {
  const isShopifyHours = variant === "shopifyHours";

  return (
    <section
      className={cn(
        "overflow-hidden",
        isShopifyHours
          ? "py-20 max-[991px]:py-[60px] max-[767px]:min-h-[365px] max-[767px]:pt-10 max-[767px]:pb-[50px]"
          : "min-h-[640.78px] py-20 pb-[84px] min-[768px]:max-[991px]:min-h-[614.78px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[443.69px] max-[767px]:pt-10 max-[767px]:pb-[50px]",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-end justify-between",
            isShopifyHours
              ? "mb-10 justify-center text-center max-[767px]:mb-[53px]"
              : "mb-[50px] min-[768px]:max-[991px]:mb-[30px] min-[768px]:max-[991px]:flex-col min-[768px]:max-[991px]:items-start max-[767px]:mb-[55px] max-[767px]:flex-col max-[767px]:text-center",
          )}
        >
          <h2
            className={cn(
              isShopifyHours
                ? "font-sans text-[40px] leading-[55.4px] font-bold tracking-[-0.8px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
                : "text-2xl leading-none font-medium min-[768px]:max-[991px]:mb-2.5 min-[768px]:max-[991px]:w-full max-[767px]:mb-2.5 max-[767px]:text-[23px] max-[767px]:leading-[1.24]",
            )}
          >
            {heading}
          </h2>
          {description ? (
            <p className="max-w-[482px] text-left text-base leading-[1.9] font-semibold text-muted min-[768px]:max-[991px]:max-w-full max-[767px]:mx-auto max-[767px]:max-w-[350px] max-[767px]:text-center max-[767px]:text-sm">
              {description}
            </p>
          ) : null}
        </div>
        <div
          className={cn(
            "grid grid-cols-5 -mx-3.75 max-[767px]:hidden",
            isShopifyHours
              ? "gap-y-0 min-[768px]:max-[991px]:grid-cols-4"
              : "gap-y-[50px] min-[768px]:max-[991px]:mx-[-15px] min-[768px]:max-[991px]:h-[390px] min-[768px]:max-[991px]:grid-cols-4 min-[768px]:max-[991px]:content-between min-[768px]:max-[991px]:gap-y-[30px]",
          )}
        >
          {items.map((logo) => (
            <div
              className={cn(
                "flex items-center justify-center mx-[15px] min-[768px]:max-[991px]:mx-[15px] max-[991px]:px-[15px]",
                isShopifyHours ? "min-h-[113px] max-[991px]:min-h-[95px] [&_img]:grayscale" : "min-h-[50px]",
              )}
              key={logo.src}
            >
              <ClientLogo logo={logo} />
            </div>
          ))}
        </div>
      </Container>
      <div className="hidden flex-col max-[767px]:flex" aria-hidden="true">
        {mobileRows.map((row, index) => (
          <div className={cn("flex w-max items-center", index > 0 && "mt-2.5", index === 0 && "mb-5", index === 2 && "ml-[-25%]")} key={index}>
            {[0, 1, 2].map((set) => (
              <div className={cn("flex shrink-0 items-center", index === 1 ? styles.moveRight : styles.moveLeft)} key={set}>
                {row.map((logo) => (
                  <span className={cn("mx-[30px] flex w-[120px] min-w-[120px] shrink-0 items-center justify-center [&_img]:h-auto [&_img]:w-auto", isShopifyHours && "[&_img]:grayscale")} key={`${set}-${logo.src}`}>
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
