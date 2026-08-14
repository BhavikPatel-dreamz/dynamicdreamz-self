import Image from "next/image";

import { Container } from "@/components/ui/container";
import {
  aiDrivenShopping,
  deliveredUnderBrand,
} from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";

export function DeliveredUnderBrandSection() {
  return (
    <section className="bg-[#171e16] py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mb-16 text-center text-white max-[767px]:mb-10">
          <h2 className="mb-6 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
            {deliveredUnderBrand.title}
          </h2>
          <p className="mx-auto max-w-[900px] text-base leading-[30.4px] font-medium max-[767px]:text-[15px] max-[767px]:leading-[26px]">
            {deliveredUnderBrand.description}
          </p>
        </div>

        <div className="-mx-[15px] flex flex-wrap max-[767px]:mx-0">
          {deliveredUnderBrand.items.map((item) => (
            <article className="w-1/2 px-[15px] max-[767px]:w-full max-[767px]:px-0" key={item.title}>
              <div className="mb-[30px] h-[calc(100%-30px)] rounded-[15px] bg-white/10 p-[30px] text-white max-[767px]:px-[15px]">
                <Image
                  className="mb-5 size-[55px] object-contain max-[767px]:size-[50px]"
                  src={item.icon}
                  alt=""
                  width={55}
                  height={55}
                  aria-hidden="true"
                />
                <h3 className="mb-[15px] font-sans text-xl leading-[28.8px] font-bold max-[767px]:text-lg max-[767px]:leading-[26px]">
                  {item.title}
                </h3>
                <p className="mb-4 text-base leading-[30.4px] font-medium min-[992px]:mb-[21px] max-[767px]:mb-6 max-[767px]:text-[15px] max-[767px]:leading-[26px]">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2.5" aria-label={`${item.title} tools`}>
                  {item.tools.map((itemTool) => (
                    <li
                      className="rounded-[50px] bg-[#171e16] px-3 py-1.5 text-sm leading-normal font-medium max-[767px]:leading-[18px]"
                      key={itemTool}
                    >
                      {itemTool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AiDrivenShoppingSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mb-16 text-center max-[767px]:mb-[25px]">
          <h2 className="mb-6 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink min-[992px]:mb-[31.6px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
            {aiDrivenShopping.title}
          </h2>
          <p className="mx-auto max-w-[900px] text-base leading-[30.4px] font-medium text-muted">
            {aiDrivenShopping.description}
          </p>
        </div>

        <div className="flex flex-wrap">
          {aiDrivenShopping.items.map((item, index) => (
            <article
              className={cn(
                "w-1/4 border-r border-ink/10 px-5 last:border-r-0 max-[991px]:w-1/2 max-[991px]:border-b max-[991px]:nth-[2n]:border-r-0 max-[991px]:nth-[n+3]:border-b-0 max-[767px]:nth-[n+3]:border-b max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:last:border-b-0",
                index === 0 && "max-[991px]:pb-7.5 max-[767px]:pt-7.5 max-[767px]:pl-0",
                index === 1 && "max-[991px]:pb-7.5 max-[767px]:pt-7.5 max-[767px]:pl-0",
                index === 2 && "max-[991px]:pt-7.5 max-[767px]:pl-0 max-[767px]:pb-7.5",
                index === 3 && "max-[991px]:pt-7.5 max-[767px]:pl-0",
                index === aiDrivenShopping.items.length - 1 && "pr-0",
              )}
              key={item.title}
            >
              <Image
                className="mb-5 size-[50px] object-contain"
                src={item.icon}
                alt=""
                width={50}
                height={50}
                aria-hidden="true"
              />
              <h3 className="mb-[15px] font-sans text-lg leading-[25.92px] font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-base leading-[26px] font-medium text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
7