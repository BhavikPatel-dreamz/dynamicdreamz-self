import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { brandTrustAriaLabels, migrationSectionCopy } from "@/content/migration-common";
import type {
  ClientLogoSliderItem,
  ClientLogoSliderSlides,
} from "@/components/ui/client-logo-slider";
import { industryBrandLogos } from "@/content/industries";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

type IndustryBrandsSectionProps = {
  content: {
    slug: string;
    brands?: {
      ariaLabel?: string;
    };
    ariaLabel?: string;
  };
  heading?: string | readonly string[];
  items?: readonly ClientLogoSliderItem[];
  mobileSpacing?: "standard" | "spacious";
  /**
   * Logo rail density.
   * - `standard`: 84px rail, 31% heading column (legacy services pages).
   * - `compact`: 70px rail, one-third heading column.
   * - `flexible`: 70px rail, 30% heading column (live flexible-css pages).
   */
  density?: "standard" | "compact" | "flexible";
  className?: string;
  showHeading?: boolean;
  sliderSlides?: ClientLogoSliderSlides;
  sliderAutoplayStartDelayMs?: number;
};

export function IndustryBrandsSection({
  content,
  heading,
  items = industryBrandLogos,
  mobileSpacing = "standard",
  density = "standard",
  className,
  showHeading = true,
  sliderSlides,
  sliderAutoplayStartDelayMs,
}: IndustryBrandsSectionProps) {
  const hasSpaciousMobileLayout = mobileSpacing === "spacious";
  const isCompact = density === "compact";
  // Live flexible-css pages use a 70px rail with a 30% heading column.
  const isFlexible = density === "flexible";
  const ariaLabel =
    content.brands?.ariaLabel ??
    content.ariaLabel ??
    brandTrustAriaLabels[content.slug] ??
    migrationSectionCopy.brandsAriaLabel;

  return (
    <section
      className={cn(
        "our-client-sec dev overflow-hidden bg-[#FBEED5] py-4.25",
        className,
      )}
      aria-label={showHeading ? undefined : ariaLabel}
      aria-labelledby={showHeading ? `${content.slug}-brands-title` : undefined}
      data-industry="brands"
    >
      <div className="main-wrapper flex items-center max-[991.98px]:block">
        {showHeading ? (
          <div
            className={cn(
              "left-col pl-[calc((100%-1140px)/2)] max-[1199px]:pl-[calc((100%-920px)/2)] max-[991.98px]:w-full max-[991.98px]:p-0 max-[991.98px]:text-center",
              // `cn` is a plain join, so width/padding presets stay mutually exclusive.
              isCompact
                ? "w-1/3 min-[1400px]:pl-[calc((100%-1320px)/2)] max-[991.98px]:mb-5 max-[767px]:mb-[15px]"
                : isFlexible
                  ? "w-[30%] max-[1199px]:w-[30%] min-[1400px]:pl-[calc((100%-1320px)/2)] max-[991.98px]:mb-5 max-[767px]:mb-[15px]"
                  : cn(
                      "w-[31%] max-[1199px]:w-[30%] min-[1400px]:pl-[calc((100%-1334px)/2)]",
                      hasSpaciousMobileLayout
                        ? "max-[991.98px]:mb-10"
                        : "max-[991.98px]:mb-5",
                    ),
            )}
            data-aos="fade-up"
          >
            <h2
              className={cn(
                "m-0 whitespace-nowrap font-montreal-medium text-xl leading-[26.4px] font-medium tracking-normal text-ink max-[1199px]:text-lg max-[991.98px]:whitespace-normal",
              )}
              id={`${content.slug}-brands-title`}
            >
              {heading ? (
                formatBrText(heading, "max-[991.98px]:hidden")
              ) : (
                migrationSectionCopy.brandsHeading
              )}
            </h2>
          </div>
        ) : null}
        <div
          className={cn(
            "right-col max-[991.98px]:w-full",
            isCompact
              ? "w-2/3 max-[1199px]:w-[70%]"
              : isFlexible
                ? // Live `.right-col` is 69% (70% ≤1199px), matching the 30% heading column.
                  "w-[69%] max-[1199px]:w-[70%]"
                : showHeading
                  ? "w-[69%] max-[1199px]:w-[70%]"
                  : "w-full",
          )}
          data-aos="fade-up"
        >
          <ClientLogoSlider
            ariaLabel={ariaLabel}
            compact={isCompact}
            items={items}
            autoplayStartDelayMs={sliderAutoplayStartDelayMs}
            railHeight={isFlexible ? "flexible" : undefined}
            slides={sliderSlides}
            variant={isCompact ? "industryCompact" : "industry"}
          />
        </div>
      </div>
    </section>
  );
}
