import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyExpertsContent } from "@/content/shopify-experts";

export function ShopifyExpertsAiDiscovery() {
  const { aiDiscovery } = shopifyExpertsContent;

  return (
    <section className="ai-driven-shopping py-20 max-[991px]:py-[50px]">
      <Container>
        <div className="title mx-auto mb-16 max-w-[900px] text-center max-[991px]:mb-10 max-[767px]:mb-[25px]">
          <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[28px] max-[767px]:text-[24px]">
            {aiDiscovery.heading}
          </h2>
          <p className="m-0 font-sans text-base font-normal leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {aiDiscovery.description}
          </p>
        </div>

        <div className="ai-driven-row flex flex-wrap">
          {aiDiscovery.items.map((item, idx) => {
            const isLastDesktop = (idx + 1) % 4 === 0;
            const isLastTablet = (idx + 1) % 2 === 0;
            const isLastMobile = idx === aiDiscovery.items.length - 1;

            return (
              <div
                key={item.title}
                className={`ai-driven-col w-1/4 px-5 max-[991px]:w-1/2 max-[991px]:border-b max-[991px]:border-[#2828281A] max-[991px]:py-5 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:px-0 max-[767px]:py-[30px] ${
                  !isLastDesktop
                    ? "min-[992px]:border-r min-[992px]:border-[#2828281A]"
                    : ""
                } ${
                  !isLastTablet
                    ? "max-[991px]:min-[768px]:border-r max-[991px]:min-[768px]:border-[#2828281A]"
                    : ""
                } ${
                  idx >= aiDiscovery.items.length - 2
                    ? "max-[991px]:min-[768px]:border-b-0"
                    : ""
                } ${
                  isLastMobile ? "max-[767px]:border-b-0 max-[767px]:pb-0" : ""
                }`}
              >
                <div className="ai-driven-item flex h-full flex-col items-center text-center">
                  <div className="icon mb-5 size-[50px]">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={50}
                      height={50}
                      className="size-full object-contain"
                    />
                  </div>
                  <h4 className="mb-[15px] font-sans text-[18px] font-bold leading-6 text-ink max-[767px]:text-[17px]">
                    {item.title}
                  </h4>
                  <p className="m-0 font-sans text-base font-normal leading-[26px] text-muted max-[767px]:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
