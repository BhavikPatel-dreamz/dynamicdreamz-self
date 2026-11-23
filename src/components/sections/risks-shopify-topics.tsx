"use client";

import type { MouseEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import type { RisksShopifyTopic } from "@/content/risks-of-shopify-outsourcing";

type RisksShopifyTopicsProps = {
  items: readonly RisksShopifyTopic[];
};

export function RisksShopifyTopics({ items }: RisksShopifyTopicsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollRafRef = useRef<number | null>(null);

  const scrollToTopic = useCallback((id: string) => {
    setActiveId(id);

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const target = document.getElementById(id);
    if (!target) return;

    const targetOffset =
      target.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top +
      scrollContainer.scrollTop;

    if (scrollRafRef.current !== null) {
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
    }

    const startTop = scrollContainer.scrollTop;
    const distance = targetOffset - startTop;

    if (Math.abs(distance) < 2) {
      isProgrammaticScroll.current = false;
      return;
    }

    let startTime: number | null = null;
    isProgrammaticScroll.current = true;
    const duration = 800; // Match live site jQuery 800ms duration

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // jQuery swing / ease-in-out quadratic curve
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      scrollContainer.scrollTop = startTop + distance * ease;

      if (progress < 1) {
        scrollRafRef.current = requestAnimationFrame(step);
      } else {
        scrollContainer.scrollTop = targetOffset;
        isProgrammaticScroll.current = false;
        scrollRafRef.current = null;
      }
    };

    scrollRafRef.current = requestAnimationFrame(step);
  }, []);

  function handleTopicClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    event.stopPropagation();
    scrollToTopic(id);
  }

  // Intercept all tab clicks at capture phase to completely block window scroll
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleCaptureClick = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest<HTMLAnchorElement>("a.tab-link");
      if (!link) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.slice(1);
      scrollToTopic(id);
    };

    nav.addEventListener("click", handleCaptureClick, { capture: true });
    return () => {
      nav.removeEventListener("click", handleCaptureClick, { capture: true });
    };
  }, [scrollToTopic]);

  // Synchronize active tab when user manually scrolls the content container
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const containerRect = scrollContainer.getBoundingClientRect();
      const containerTop = containerRect.top;

      let currentActiveId = items[0]?.id ?? "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const elRect = el.getBoundingClientRect();
        if (elRect.top - containerTop <= 80) {
          currentActiveId = item.id;
        }
      }

      setActiveId(currentActiveId);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [items]);

  return (
    <section className="new-web-magento-tab" data-risks-topics data-no-smooth-scroll>
      <Container>
        <div className="new-web-magento-tab-wrapper flex items-start gap-[50px] border-t border-[#dfdfdf] pt-[60px] pb-[60px] max-[1200px]:flex-col max-[1200px]:gap-8">
          <nav
            className="new-web-tab sticky top-5 w-full max-w-[367px] shrink-0 rounded-[13px] border border-[#eef0f5] bg-white px-5 py-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-[top] duration-300 max-[1200px]:static max-[1200px]:max-w-full"
            aria-label="Shopify outsourcing topics"
            data-no-smooth-scroll
            ref={navRef}
          >
            <ul className="m-0 list-none border-l border-[#e4e2e3] p-0">
              {items.map((item) => (
                <li
                  className="mb-[30px] list-none px-[22px] last:mb-0 max-[992px]:mb-[25px]"
                  key={item.id}
                >
                  <a
                    className={cn(
                      "tab-link relative block font-sans text-base font-semibold leading-[137%] text-[#282828] no-underline transition-colors hover:text-[#ad5151] focus-visible:text-[#ad5151]",
                      activeId === item.id &&
                        "active text-[#ad5151] after:absolute after:top-0 after:-left-[22px] after:h-full after:w-[3px] after:border-b-[6px] after:border-b-transparent after:bg-[#ad5151] after:transition-[0.1s_linear] after:content-['']",
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
            className="new-web-content h-screen w-full max-w-[calc(100%-417px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] max-[1200px]:max-w-full [&::-webkit-scrollbar]:hidden"
            data-risks-topic-content
            ref={scrollContainerRef}
          >
            <div className="new-web-inner-content">
              {items.map((item) => (
                <article className="new-web-title-block mb-[60px] last:mb-0" id={item.id} key={item.id}>
                  {item.introParagraphs?.map((paragraph) => (
                    <p
                      className="mb-[15px] font-sans text-[14px] font-normal leading-[26px] text-[#535353] last:mb-0"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <h2 className="relative mb-3 pl-5 font-montreal-medium text-[35px] font-normal leading-[49px] text-[#282828] before:absolute before:top-[5px] before:left-0 before:block before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[1200px]:text-[30px] max-[1200px]:leading-[42px] max-[768px]:text-[24px] max-[768px]:leading-[31.2px]">
                    {item.heading}
                  </h2>
                  {item.paragraphs.map((paragraph) => (
                    <p
                      className="mb-[15px] font-sans text-[14px] font-normal leading-[26px] text-[#535353] last:mb-0"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {item.bullets ? (
                    <ul className="mb-[25px] list-none p-0">
                      {item.bullets.map((bullet) => (
                        <li
                          className="relative mb-2.5 list-none pl-[35px] font-sans text-[14px] font-medium leading-[190%] text-[#535353] last:mb-0 before:absolute before:top-0.5 before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                          key={bullet.label}
                        >
                          <strong className="font-bold text-black">{bullet.label}</strong> {bullet.text}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {item.closingParagraphs?.map((paragraph) => (
                    <p
                      className="mb-[15px] font-sans text-[14px] font-normal leading-[26px] text-[#535353] last:mb-0"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
