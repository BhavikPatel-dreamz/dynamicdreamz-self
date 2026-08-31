import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyCroServices } from "@/content/shopify-cro-agency";

export type ShopifyCroServicesSectionProps = {
  content?: typeof shopifyCroServices;
  className?: string;
};

export function ShopifyCroServicesSection({
  content = shopifyCroServices,
  className = "shopify-cro-services bg-white py-20 max-[992px]:py-12",
}: ShopifyCroServicesSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="section-title mx-auto mb-[50px] max-w-[800px] text-center max-[767px]:mb-8">
          <h2 className="mb-3 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {content.heading}
          </h2>
          <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm">
            {content.description}
          </p>
        </div>

        <div className="shopify-cro-services-grid flex flex-wrap justify-center">
          {content.items.map((item, idx) => {
            const isFirstInRow = idx === 0 || idx === 3;
            const isLastRow = idx >= 3;

            return (
              <div
                key={item.title}
                className={`shopify-cro-services-item w-1/3 p-[42px_37px] text-center max-[992px]:w-full max-[992px]:border-l-0 max-[992px]:border-b max-[992px]:border-black/10 max-[992px]:p-[25px] max-[992px]:last:border-b-0 ${
                  !isFirstInRow
                    ? "min-[992px]:border-l min-[992px]:border-black/10"
                    : ""
                } ${
                  !isLastRow
                    ? "min-[992px]:border-b min-[992px]:border-black/10"
                    : ""
                }`}
              >
                <div className="icon mx-auto mb-[18px] size-[54px]">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={54}
                    height={54}
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="h4 mb-5 font-sans text-[20px] font-bold leading-[26px] text-ink">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-sm font-medium leading-[190%] text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
