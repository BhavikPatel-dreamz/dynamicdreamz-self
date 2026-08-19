"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/class-names";
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
};

export function FaqAccordion({
  items,
  idPrefix,
  answerClassName,
  questionClassName,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div data-faq-list>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
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
              "text-base leading-[30.4px] font-normal text-muted last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px]",
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
              : item.answer}
          </p>
        ) : null;

        const secondaryAnswerContent = item.secondaryAnswer ? (
          <p
            className={cn(
              "mt-4 text-base leading-[30.4px] font-normal text-muted last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px]",
              answerClassName,
            )}
          >
            {item.secondaryAnswer}
          </p>
        ) : null;

        return (
          <article
            className="mb-5 rounded-[10px] border-[1.3px] border-[#efefef] bg-white last:mb-0"
            data-faq-item
            key={item.question}
          >
            <button
              className="relative block w-full cursor-pointer border-0 bg-transparent py-6 pr-[70px] pl-8 text-left max-[1199px]:py-5 max-[1199px]:pr-[50px] max-[1199px]:pl-5"
              data-faq-trigger
              id={triggerId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3
                className={cn(
                  "m-0 font-sans text-xl leading-[25px] font-semibold text-ink max-[1199px]:text-base",
                  questionClassName,
                )}
              >
                {item.question}
              </h3>
              <Image
                aria-hidden="true"
                alt=""
                className="absolute top-1/2 right-8 size-8 -translate-y-1/2 max-[1199px]:right-5 max-[1199px]:size-[25px] max-[767px]:top-[26px] max-[767px]:size-[22px] max-[767px]:translate-y-0"
                src={
                  isOpen
                    ? "/assets/life-dynamicdreamz/faq/minus.svg"
                    : "/assets/life-dynamicdreamz/faq/plus.svg"
                }
                width={32}
                height={32}
              />
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
                <div className="px-8 pb-6 max-[1199px]:px-5 max-[1199px]:pb-5">
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
