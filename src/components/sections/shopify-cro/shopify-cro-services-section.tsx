import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyCroServices } from "@/content/shopify-cro-agency";

export type ShopifyCroServicesSectionProps = {
  content?: typeof shopifyCroServices;
  className?: string;
};

export function ShopifyCroServicesSection({
  content = shopifyCroServices,
  className = "shopify-cro-services bg-white py-20 max-[991px]:py-12",
}: ShopifyCroServicesSectionProps) {
  return (
    <section className={className}>
      <Container>
        <SplitSectionHeading
          className="mb-10 max-[991px]:mb-[30px]"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
        />

        <div className="shopify-cro-services-grid flex flex-wrap justify-center">
          {content.items.map((item, idx) => {
            const isFirstInRow = idx === 0 || idx === 3;
            const isLastRow = idx >= 3;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                className={`shopify-cro-services-item w-1/3 p-[42px_37px] text-center max-[991px]:w-full max-[991px]:border-l-0 max-[991px]:border-b max-[991px]:border-black/10 max-[991px]:p-[25px] max-[991px]:last:border-b-0 ${
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
