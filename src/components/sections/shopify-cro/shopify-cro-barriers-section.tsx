import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyCroBarriers } from "@/content/shopify-cro-agency";

export type ShopifyCroBarriersSectionProps = {
  content?: typeof shopifyCroBarriers;
  className?: string;
};

export function ShopifyCroBarriersSection({
  content = shopifyCroBarriers,
  className = "conversion-cro-section bg-white py-20 max-[992px]:py-12",
}: ShopifyCroBarriersSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="section-title mx-auto mb-[50px] max-w-[1040px] text-center max-[767px]:mb-8">
          <h2 className="mb-3 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {content.heading}
          </h2>
          <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {content.description}
          </p>
        </div>

        <div className="conversion-cro-grid -mx-3 -mb-6 flex flex-wrap">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="conversion-cro-col mb-6 w-1/4 px-3 max-[1199px]:w-1/3 max-[992px]:w-1/2 max-[575px]:w-full"
            >
              <div className="cro-card flex h-full flex-col items-center justify-center rounded-[15px] border border-black/10 bg-white p-[22px] text-center shadow-none transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <div className="icon mb-[15px] flex h-[62.5px] w-[56px] items-center justify-center rounded-[10px_10px_10px_24px] bg-[rgba(173,81,81,0.11)]">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={35}
                    height={35}
                    className="size-[35px] object-contain"
                  />
                </div>
                <h3 className="h6 m-0 font-sans text-base font-bold leading-[22px] text-ink">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
