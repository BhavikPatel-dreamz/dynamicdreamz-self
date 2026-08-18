import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { industryBrandLogos } from "@/content/industries";
import { cn } from "@/lib/class-names";
type IndustryBrandsSectionProps = {
  content: {
    slug: string;
    brands?: {
      ariaLabel: string;
    };
    ariaLabel?: string;
  };
  heading?: string;
  mobileSpacing?: "standard" | "spacious";
};

export function IndustryBrandsSection({
  content,
  heading,
  mobileSpacing = "standard",
}: IndustryBrandsSectionProps) {
  const hasSpaciousMobileLayout = mobileSpacing === "spacious";
  const ariaLabel = content.brands?.ariaLabel ?? content.ariaLabel ?? "Trusted Brands";

  return (
    <section
      className={cn(
        "h-[164px] overflow-hidden bg-[#fbf7ed] py-10",
        hasSpaciousMobileLayout ? "max-[991px]:h-[270px]" : "max-[991px]:h-[217px]",
      )}
      aria-labelledby={`${content.slug}-brands-title`}
      data-industry="brands"
    >
      <div className="flex items-center max-[991px]:block">
        <div
          className={cn(
            "w-[31%] pl-[calc((100%-1140px)/2)] min-[1400px]:pl-[calc((100%-1320px)/2)] max-[1199px]:w-[30%] max-[1199px]:pl-[calc((100%-920px)/2)] max-[991px]:w-full max-[991px]:p-0 max-[991px]:text-center",
            hasSpaciousMobileLayout ? "max-[991px]:mb-10" : "max-[991px]:mb-5",
          )}
        >
          <h2
            className="m-0 font-[Montserrat,sans-serif] text-[25px] leading-[33px] font-semibold tracking-[-.02em] text-ink"
            id={`${content.slug}-brands-title`}
          >
            {heading ?? (
              <>
                Trusted by <br /> Leading Brands
              </>
            )}
          </h2>
        </div>
        <div className="w-[69%] max-[1199px]:w-[70%] max-[991px]:w-full">
          <ClientLogoSlider
            ariaLabel={ariaLabel}
            items={industryBrandLogos}
            variant="industry"
          />
        </div>
      </div>
    </section>
  );
}
