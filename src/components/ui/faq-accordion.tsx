"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/class-names";
import type { RichTextPart } from "@/types/white-label-service";

export type FaqAccordionItem = {
  question: string;
  answer: string;
  answerParts?: readonly RichTextPart[];
  listItems?: readonly {
    label?: string;
    text: string;
  }[];
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
                  "m-0 font-sans text-[18px] leading-[26px] font-semibold text-ink max-[1199px]:text-base max-[1199px]:leading-[22px]",
                  questionClassName,
                )}
              >
                {item.question}
              </h3>
              <Image
                aria-hidden="true"
                alt=""
                className="absolute top-1/2 right-8 size-8 -translate-y-1/2 max-[1199px]:right-5 max-[1199px]:size-[25px] max-[767px]:size-[22px]"
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
                  <p
                    className={cn(
                      "text-base leading-8 font-medium tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]",
                      item.listItems?.length ? "mb-3" : "mb-0",
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
                  {item.listItems?.length ? (
                    <ul className="mb-0 mt-3 space-y-2.5">
                      {item.listItems.map((listItem) => (
                        <li
                          className="relative mb-2.5 pl-[34px] text-base leading-8 font-medium tracking-[0.32px] text-[#535353] last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px] before:absolute before:top-[5px] before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat max-[1199px]:before:top-[2px]"
                          key={`${listItem.label ?? "item"}-${listItem.text}`}
                        >
                          {listItem.label ? (
                            <strong className="font-bold">{listItem.label} </strong>
                          ) : null}
                          {listItem.text}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
