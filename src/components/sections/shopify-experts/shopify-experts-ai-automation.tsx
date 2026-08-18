import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyExpertsContent } from "@/content/shopify-experts";

export function ShopifyExpertsAiAutomation() {
  const { aiAutomation } = shopifyExpertsContent;

  return (
    <section className="smarter-shopify-store mt-20 bg-[#171E16] py-20 text-white max-[991px]:mt-10 max-[991px]:py-[50px]">
      <Container>
        <div className="title mx-auto mb-16 max-w-[900px] text-center max-[991px]:mb-10 max-[767px]:mb-10">
          <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-white max-[1199px]:text-[28px] max-[767px]:text-[24px]">
            {aiAutomation.heading}
          </h2>
          <p className="m-0 font-sans text-base font-normal leading-[30.4px] text-white/90 max-[767px]:text-[15px] max-[767px]:leading-[26px]">
            {aiAutomation.description}
          </p>
        </div>

        <div className="store-wrap flex flex-wrap -mx-[15px]">
          {aiAutomation.items.map((item) => (
            <div
              key={item.title}
              className="store-col w-1/2 px-[15px] max-[991px]:w-full"
            >
              <div className="store-item mb-[30px] flex h-[calc(100%-30px)] flex-col justify-between rounded-[15px] bg-[rgba(243,243,243,0.1)] p-[30px] transition-all duration-300 hover:bg-[rgba(243,243,243,0.15)] max-[767px]:p-[30px_15px]">
                <div>
                  <div className="icon mb-5 size-[55px] max-[767px]:size-[50px]">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={55}
                      height={55}
                      className="size-full object-contain"
                    />
                  </div>
                  <h3 className="mb-[15px] font-sans text-xl font-bold leading-[30px] text-white max-[767px]:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mb-5 font-sans text-base font-normal leading-[30.4px] text-white/85 max-[767px]:text-[15px] max-[767px]:leading-[26px]">
                    {item.description}
                  </p>
                </div>

                <div className="pill-item flex flex-wrap gap-2.5">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="pills rounded-[50px] bg-[#171E16] px-3 py-1.5 font-sans text-sm font-medium text-white shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
