import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqAccordion, type FaqAccordionItem } from "@/components/ui/faq-accordion";
import { LazyFaqAccordion } from "@/components/sections/lazy-faq-accordion";
import { StaticFaqAccordion } from "@/components/sections/static-faq-accordion";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type SplitFaqSectionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string;
  description?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  className?: string;
  sectionId?: string;
  animateOnReveal?: boolean;
  lazyAccordion?: boolean;
  lazyRootMargin?: string;
  answerClassName?: string;
  questionClassName?: string;
  triggerClassName?: string;
  itemClassName?: string;
  panelContentClassName?: string;
};

/**
 * Two-column FAQ layout: a left-aligned heading/description column beside a
 * borderless, underlined accordion with circle-cross expand icons. This is the
 * shared, content-decoupled version of the design first used by the home FAQ so
 * other pages can reuse the exact styling by passing their own items/copy.
 *
 * `heading` falls back to the shared "Frequently Asked Questions" default, and
 * omitting `description` renders the heading column with no supporting sentence.
 */
export function SplitFaqSection({
  items,
  idPrefix,
  heading = sharedUiCopy.faq.heading,
  description,
  eyebrow,
  eyebrowClassName,
  className,
  sectionId,
  animateOnReveal = false,
  lazyAccordion = false,
  lazyRootMargin,
  answerClassName = "!text-sm",
  questionClassName,
  triggerClassName,
  itemClassName,
  panelContentClassName,
}: SplitFaqSectionProps) {
  const titleId = `${idPrefix}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={cn("bg-[#fafaf7] py-[60px] max-[767px]:py-10", className)}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
    >
      <Container>
        <div className="flex justify-between gap-[105px] max-[992px]:flex-col max-[992px]:gap-[30px]">
          <div className="w-[41%] max-[992px]:w-full">
            <header className="mb-0 flex flex-col items-start text-left min-[993px]:sticky min-[993px]:top-[20px]">
              {eyebrow ? (
                <Eyebrow as="span" className={cn("mb-4", eyebrowClassName)}>
                  {eyebrow}
                </Eyebrow>
              ) : null}
              <h2
                className="mb-[15px] font-display text-[35px] leading-[1.4] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
                id={titleId}
              >
                {formatBrText(heading, "max-[1199px]:hidden")}
              </h2>
              {description ? (
                <p className="max-w-[500px] text-base leading-[28px] font-medium text-[#535353] max-[767px]:text-sm max-[767px]:leading-[24px]">
                  {formatBrText(description, "max-[1199px]:hidden")}
                </p>
              ) : null}
            </header>
          </div>
          <div className="w-[57%] max-w-[654px] grow max-[992px]:w-full max-[992px]:max-w-none">
            {lazyAccordion ? (
              <LazyFaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={answerClassName}
                fallback={
                  <StaticFaqAccordion
                    answerClassName={answerClassName}
                    iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                    iconVariant="circle-cross"
                    idPrefix={idPrefix}
                    itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                    items={items}
                    panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                    questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                    triggerClassName={cn("!px-0 !py-6 !pr-12 max-[767px]:!py-5", triggerClassName)}
                  />
                }
                iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                iconVariant="circle-cross"
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                triggerClassName={cn("!px-0 !py-6 !pr-12 max-[767px]:!py-5", triggerClassName)}
                rootMargin={lazyRootMargin}
              />
            ) : (
              <FaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={answerClassName}
                iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                iconVariant="circle-cross"
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                triggerClassName={cn("!px-0 !py-6 !pr-12 max-[767px]:!py-5", triggerClassName)}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
