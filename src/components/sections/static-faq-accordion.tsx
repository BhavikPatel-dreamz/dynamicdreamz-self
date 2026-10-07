import Image from "next/image";
import { FaqCircleCrossIcon, type FaqAccordionItem } from "@/components/ui/faq-accordion";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

type StaticFaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  answerClassName?: string;
  questionClassName?: string;
  itemClassName?: string;
  triggerClassName?: string;
  panelContentClassName?: string;
  iconClassName?: string;
  iconVariant?: "default" | "circle-cross";
};

export function StaticFaqAccordion({
  items,
  idPrefix,
  answerClassName,
  questionClassName,
  itemClassName,
  triggerClassName,
  panelContentClassName,
  iconClassName,
  iconVariant = "default",
}: StaticFaqAccordionProps) {
  return (
    <div data-aos="fade-up" data-faq-list>
      {items.map((item, index) => {
        const isOpen = index === 0;
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
                className="relative pl-[30px] text-base leading-7 font-medium text-[#535353] max-[1199px]:pl-[26px] max-[1199px]:text-sm max-[1199px]:leading-6"
                key={`${listItem.label ?? "item"}-${listItem.text}`}
              >
                <Image
                  aria-hidden="true"
                  alt=""
                  className="absolute top-[4px] left-0 size-[18px] max-[1199px]:top-[3px] max-[1199px]:size-[16px]"
                  height={18}
                  src="/assets/icons/gradient-check.svg"
                  width={18}
                />
                {listItem.label ? (
                  <strong className="font-semibold text-ink">{listItem.label} </strong>
                ) : null}
                {listItem.text}
              </li>
            ))}
          </ul>
        ) : null;

        const mainAnswerContent = item.answer || item.answerParts ? (
          <p
            className={cn(
              "text-base leading-7 font-medium text-[#535353] last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-6",
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
              "mt-4 text-base leading-7 font-medium text-[#535353] last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-6",
              answerClassName,
            )}
          >
            {formatBrText(item.secondaryAnswer)}
          </p>
        ) : null;

        return (
          <article
            data-aos="fade-up"
            className={cn(
              "mb-5 rounded-[10px] border-[1.3px] border-[#efefef] bg-white last:mb-0",
              itemClassName,
            )}
            data-faq-item
            key={item.question}
          >
            <button
              className={cn(
                "relative block w-full cursor-default border-0 bg-transparent py-6 pr-[70px] pl-8 text-left max-[1199px]:py-5 max-[1199px]:pr-[50px] max-[1199px]:pl-5",
                triggerClassName,
              )}
              data-faq-trigger
              id={triggerId}
              type="button"
              tabIndex={-1}
              aria-disabled="true"
              aria-controls={panelId}
              aria-expanded={isOpen}
            >
              <h3 className={cn("m-0 font-montreal-medium text-[20px] leading-[120%] tracking-0 font-medium text-ink max-[1199px]:text-[18px]", questionClassName)}>
                {formatBrText(item.question)}
              </h3>
              {iconVariant === "circle-cross" ? (
                <FaqCircleCrossIcon
                  className={cn(
                    "absolute top-1/2 right-0 size-[30px] -translate-y-1/2 max-[767px]:size-[26px]",
                    iconClassName,
                  )}
                  isOpen={isOpen}
                />
              ) : null}
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
            >
              <div className="overflow-hidden">
                <div className={cn("px-8 pb-6 max-[1199px]:px-5 max-[1199px]:pb-5", panelContentClassName)}>
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
