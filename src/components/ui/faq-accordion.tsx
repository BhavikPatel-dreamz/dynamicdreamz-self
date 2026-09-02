"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { RichTextPart } from "@/types/white-label-service";

export type FaqAccordionListItem = {
  label?: string;
  text: string;
};

export type FaqAccordionItem = {
  question: string;
  answer: string;
  answerParts?: readonly RichTextPart[];
  secondaryAnswer?: string;
  listItems?: readonly FaqAccordionListItem[];
  listPosition?: "before" | "after";
};

type FaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  answerClassName?: string;
  questionClassName?: string;
  itemClassName?: string;
  triggerClassName?: string;
  panelContentClassName?: string;
  iconClassName?: string;
  iconVariant?: "default" | "circle-cross";
  animateOnReveal?: boolean;
  revealDelayStepMs?: number;
  revealDurationMs?: number;
  revealOffsetPx?: number;
};

export function FaqAccordion({
  items,
  idPrefix,
  answerClassName,
  questionClassName,
  itemClassName,
  triggerClassName,
  panelContentClassName,
  iconClassName,
  iconVariant = "default",
  animateOnReveal = false,
  revealDelayStepMs = 150,
  revealDurationMs = 800,
  revealOffsetPx = 80,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [revealedItems, setRevealedItems] = useState<ReadonlySet<number>>(
    () => new Set(),
  );
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animateOnReveal) return;

    const elements = listRef.current?.querySelectorAll<HTMLElement>(
      "[data-faq-reveal-index]",
    );
    if (!elements?.length) return;

    const revealAll = () => {
      setRevealedItems(new Set(items.map((_, index) => index)));
    };

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const enteredIndexes = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) =>
            Number((entry.target as HTMLElement).dataset.faqRevealIndex),
          );

        if (!enteredIndexes.length) return;

        setRevealedItems((current) => {
          const next = new Set(current);
          enteredIndexes.forEach((index) => next.add(index));
          return next;
        });

        entries.forEach((entry) => {
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: `0px 0px -${revealOffsetPx}px`,
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [animateOnReveal, items, revealOffsetPx]);

  return (
    <div data-faq-list ref={listRef}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isRevealed = !animateOnReveal || revealedItems.has(index);
        const triggerId = `${idPrefix}-trigger-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;
        const isListBefore = item.listPosition === "before";

        const listContent = item.listItems?.length ? (
          <ul
            className={cn(
              "space-y-2.5",
              isListBefore ? "mb-4" : "mb-1",
            )}
          >
            {item.listItems.map((listItem) => (
              <li
                className="relative pl-[34px] text-base leading-8 font-medium tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]"
                key={`${listItem.label ?? "item"}-${listItem.text}`}
              >
                <Image
                  aria-hidden="true"
                  alt=""
                  className="absolute top-[5px] left-0 size-[22px] max-[1199px]:top-[2px] max-[1199px]:size-[18px]"
                  height={22}
                  src="/assets/icons/gradient-check.svg"
                  width={22}
                />
                {listItem.label ? (
                  <strong className="font-bold text-[#535353]">{listItem.label} </strong>
                ) : null}
                {listItem.text}
              </li>
            ))}
          </ul>
        ) : null;

        const mainAnswerContent = item.answer || item.answerParts ? (
          <p
            className={cn(
              "text-base leading-6 font-medium text-muted last:mb-0 max-[1199px]:text-sm",
              item.listItems?.length && !isListBefore ? "mb-3" : "mb-0",
              answerClassName,
            )}
          >
            {item.answerParts
              ? item.answerParts.map((part, partIndex) =>
                  part.strong ? (
                    <strong className="font-bold" key={`${part.text}-${partIndex}`}>
                      {part.text}
                    </strong>
                  ) : (
                    part.text
                  ),
                )
              : formatBrText(item.answer)}
          </p>
        ) : null;

        const secondaryAnswerContent = item.secondaryAnswer ? (
          <p
            className={cn(
              "mt-4 text-base leading-[30.4px] font-normal text-muted last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px]",
              answerClassName,
            )}
          >
            {formatBrText(item.secondaryAnswer)}
          </p>
        ) : null;

        return (
          <article
            className={cn(
              "mb-5 rounded-[10px] border-[1.3px] border-[#efefef] bg-white last:mb-0",
              animateOnReveal && "aos-init transition-[opacity,transform] motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:[transform:translate3d(0,0,0)]",
              animateOnReveal && isRevealed && "aos-animate",
              isRevealed
                ? "opacity-100 [transform:translate3d(0,0,0)]"
                : "opacity-0 [transform:translate3d(0,100px,0)]",
              itemClassName,
            )}
            data-aos={animateOnReveal ? "fade-up" : undefined}
            data-aos-delay={
              animateOnReveal ? index * revealDelayStepMs : undefined
            }
            data-faq-item
            data-faq-reveal-index={animateOnReveal ? index : undefined}
            key={item.question}
            style={
              animateOnReveal
                ? {
                    transitionDelay: isRevealed
                      ? `${index * revealDelayStepMs}ms`
                      : "0ms",
                    transitionDuration: `${revealDurationMs}ms`,
                    transitionTimingFunction:
                      "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }
                : undefined
            }
          >
            <button
              className={cn(
                "relative block w-full cursor-pointer border-0 bg-transparent py-6 pr-[70px] pl-8 text-left max-[1199px]:py-5 max-[1199px]:pr-[50px] max-[1199px]:pl-5",
                triggerClassName,
              )}
              data-faq-trigger
              id={triggerId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3
                className={cn(
                  "m-0 font-montreal-medium text-[20px] leading-[120%] tracking-0 font-medium text-ink max-[1199px]:text-[18px]",
                  questionClassName,
                )}
              >
                {formatBrText(item.question)}
              </h3>
              {iconVariant === "circle-cross" ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1/2 right-0 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink transition-colors max-[575px]:translate-y-0",
                    isOpen && "bg-ink/10",
                    iconClassName,
                  )}
                >
                  <span className={cn("relative block size-3 transition-transform duration-300", isOpen && "rotate-45")}>
                    <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
                    <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-current" />
                  </span>
                </span>
              ) : (
                <Image
                  aria-hidden="true"
                  alt=""
                  className={cn(
                    "absolute top-1/2 right-8 size-8 -translate-y-1/2 max-[1199px]:right-5 max-[1199px]:size-[25px] max-[767px]:top-[26px] max-[767px]:size-[22px] max-[767px]:translate-y-0",
                    iconClassName,
                  )}
                  src={
                    isOpen
                      ? "/assets/life-dynamicdreamz/faq/minus.svg"
                      : "/assets/life-dynamicdreamz/faq/plus.svg"
                  }
                  width={32}
                  height={32}
                />
              )}
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-400 ease-in-out motion-reduce:duration-0 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              data-faq-panel
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "px-8 pb-6 max-[1199px]:px-5 max-[1199px]:pb-5",
                    panelContentClassName,
                  )}
                >
                  {isListBefore ? (
                    <>
                      {listContent}
                      {mainAnswerContent}
                      {secondaryAnswerContent}
                    </>
                  ) : (
                    <>
                      {mainAnswerContent}
                      {listContent}
                      {secondaryAnswerContent}
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
