import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { industryBrandLogos } from "@/content/industries";
import { cn } from "@/lib/class-names";
type IndustryBrandsSectionProps = {
  content: {
    slug: string;
    brands: {
      ariaLabel: string;
    };
  };
  mobileSpacing?: "standard" | "spacious";
};

export function IndustryBrandsSection({
  content,
  mobileSpacing = "standard",
}: IndustryBrandsSectionProps) {
  const hasSpaciousMobileLayout = mobileSpacing === "spacious";

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
            "w-[31%] pl-[calc((100%-1140px)/2)] max-[1199px]:w-[30%] max-[1199px]:pl-[calc((100%-920px)/2)] max-[991px]:w-full max-[991px]:p-0 max-[991px]:text-center",
            hasSpaciousMobileLayout ? "max-[991px]:mb-10" : "max-[991px]:mb-5",
          )}
        >
          <h2
            className="m-0 text-[25px] leading-[33px] font-medium tracking-[-0.5px] text-ink"
            id={`${content.slug}-brands-title`}
          >
            Trusted by <br className="max-[991px]:hidden" /> Leading Brands
          </h2>
        </div>
        <div className="w-[69%] max-[1199px]:w-[70%] max-[991px]:w-full">
          <ClientLogoSlider
            ariaLabel={content.brands.ariaLabel}
            items={industryBrandLogos}
            variant="industry"
          />
        </div>
      </div>
    </section>
  );
}
