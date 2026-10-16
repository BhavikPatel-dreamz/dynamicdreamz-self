"use client";

import type { MouseEvent } from "react";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import type { RisksShopifyTopic } from "@/content/risks-of-shopify-outsourcing";

type RisksShopifyTopicsProps = {
  items: readonly RisksShopifyTopic[];
};

export function RisksShopifyTopics({ items }: RisksShopifyTopicsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  function handleTopicClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setActiveId(id);

    const scrollContainer = event.currentTarget
      .closest("[data-risks-topics]")
      ?.querySelector<HTMLElement>("[data-risks-topic-content]");
    const target = document.getElementById(id);

    if (!scrollContainer || !target) return;

    const offset = target.offsetTop - scrollContainer.offsetTop + scrollContainer.scrollTop;
    scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
  }

  return (
    <section className="new-web-magento-tab" data-risks-topics>
      <Container>
        <div className="flex items-start gap-[50px] border-t border-[#dfdfdf] pt-[60px] pb-[60px] max-[1199px]:flex-col max-[1199px]:gap-8">
          <nav className="sticky top-5 w-full max-w-[367px] shrink-0 rounded-[13px] border border-[#eef0f5] bg-white px-5 py-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] max-[1199px]:static max-[1199px]:max-w-none" aria-label="Shopify outsourcing topics">
            <ul className="border-l border-[#e4e2e3]">
              {items.map((item) => (
                <li
                  className="mb-[30px] px-[22px] last:mb-0 max-[991px]:mb-[25px]"
                  key={item.id}
                >
                  <a
                    className={cn(
                      "relative text-base font-semibold leading-[137%] text-[#282828] no-underline transition-colors hover:text-[#ad5151] focus-visible:text-[#ad5151]",
                      activeId === item.id && "text-[#ad5151] before:absolute before:top-0 before:-left-[22px] before:h-full before:w-[3px] before:bg-[#ad5151]",
                    )}
                    href={`#${item.id}`}
                    onClick={(event) => handleTopicClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="h-screen w-full max-w-[calc(100%-417px)] overflow-y-auto scroll-smooth [scrollbar-width:none] max-[1199px]:max-w-none [&::-webkit-scrollbar]:hidden"
            data-risks-topic-content
          >
            {items.map((item) => (
              <article className="mb-[60px] last:mb-0" id={item.id} key={item.id}>
                {item.introParagraphs?.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <h2 className="relative mb-5 pl-5 text-[28px] font-medium leading-[1.37] text-[#282828] before:absolute before:top-[5px] before:left-0 before:block before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[1199px]:text-2xl max-[767px]:text-[21px] max-[767px]:leading-[1.45]">
                  {item.heading}
                </h2>
                {item.paragraphs.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {item.bullets ? (
                  <ul className="mb-6">
                    {item.bullets.map((bullet) => (
                      <li className="relative mb-2.5 pl-[35px] text-base font-medium leading-[190%] text-[#535353] last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px] before:absolute before:top-0.5 before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat" key={bullet.label}>
                        <strong className="text-black">{bullet.label}</strong> {bullet.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.closingParagraphs?.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
