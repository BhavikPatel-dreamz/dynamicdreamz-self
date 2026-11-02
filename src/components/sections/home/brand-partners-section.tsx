import { ClientLogo } from "@/components/sections/home/client-logo";
import { LoopingLogoTrack } from "@/components/sections/home/looping-logo-track";
import styles from "@/components/sections/home/brand-partners-section.module.css";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
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
        "trusted_leading_brands overflow-hidden",
        isShopifyHours
          ? "py-20 max-[992px]:py-[60px] max-[768px]:min-h-[365px] max-[768px]:pt-10 max-[768px]:pb-[50px]"
          : "py-20 max-[992px]:pb-20 max-[992px]:pt-[50px] max-[768px]:pt-10 max-[768px]:pb-[50px]",
      )}
    >
      <Container>
        <SplitSectionHeading
          className={cn(
            isShopifyHours
              ? "mb-10 max-[768px]:mb-[30px]"
              : "mb-[50px] min-[768px]:max-[992px]:mb-[30px] max-[768px]:mb-[55px]",
          )}
          description={description}
          heading={heading}
          variant="left"
        />
        <div
          data-aos="fade-up"
          className={cn(
            "grid grid-cols-5 -mx-3.75 max-[768px]:hidden",
            isShopifyHours
              ? "gap-y-0 min-[768px]:max-[992px]:grid-cols-4"
              : "gap-y-[50px] min-[768px]:max-[992px]:mx-[-15px] min-[768px]:max-[992px]:grid-cols-4 min-[768px]:max-[992px]:gap-y-[30px]",
          )}
        >
          {items.map((logo) => (
            <div
              className={cn(
                "flex items-center justify-center mx-[15px] min-[768px]:max-[992px]:mx-[15px] max-[992px]:px-[15px]",
                isShopifyHours ? "min-h-[113px] max-[992px]:min-h-[95px]" : "min-h-[50px]",
              )}
              key={logo.src}
            >
              <ClientLogo logo={logo} />
            </div>
          ))}
        </div>
      </Container>
      <div data-aos="fade-up" className="hidden flex-col max-[768px]:flex" aria-hidden="true">
        {mobileRows.map((row, index) => (
          <div className={cn("flex w-max items-center", index > 0 && "mt-2.5", index === 0 && "mb-5", index === 2 && "ml-[-25%]")} key={index}>
            <LoopingLogoTrack
              className={cn("flex shrink-0 items-center", index === 1 ? styles.moveRight : styles.moveLeft)}
              decorative
              logoClassName="mx-[30px] flex w-[120px] min-w-[120px] shrink-0 items-center justify-center [&_img]:h-auto [&_img]:w-auto"
              logos={row}
              trackCount={2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
