import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { beautyBrandLogos } from "@/content/beauty-cosmetics";

export function BeautyBrandsSection() {
  return (
    <section
      className="h-[164px] overflow-hidden bg-[#fbf7ed] py-10 max-[991px]:h-[217px]"
      aria-labelledby="beauty-brands-title"
      data-beauty="brands"
    >
      <div className="flex items-center max-[991px]:block">
        <div className="w-[31%] pl-[calc((100%-1140px)/2)] max-[1199px]:w-[30%] max-[1199px]:pl-[calc((100%-920px)/2)] max-[991px]:mb-5 max-[991px]:w-full max-[991px]:p-0 max-[991px]:text-center">
          <h2
            className="m-0 text-[25px] leading-[33px] font-semibold tracking-[-0.5px] text-ink"
            id="beauty-brands-title"
          >
            Trusted by <br className="max-[991px]:hidden" /> Leading Brands
          </h2>
        </div>
        <div className="w-[69%] max-[1199px]:w-[70%] max-[991px]:w-full">
          <ClientLogoSlider
            ariaLabel="Leading brands supported by Dynamic Dreamz"
            items={beautyBrandLogos}
            variant="industry"
          />
        </div>
      </div>
    </section>
  );
}
