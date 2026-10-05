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
  headingClassName?: string;
  headingBrClassName?: string;
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
  containerClassName?: string;
  iconVariant?: "default" | "circle-cross";
  layout?: "split" | "centered";
};

/**
 * FAQ section supporting two layouts:
 * - "split" (default): Two-column layout with left heading column beside borderless accordion.
 * - "centered": Centered heading above a full-width boxed card accordion matching live .faq-sec.
 */
export function SplitFaqSection({
  items,
  idPrefix,
  heading = sharedUiCopy.faq.heading,
  headingClassName,
  headingBrClassName,
  description,
  eyebrow,
  eyebrowClassName,
  className,
  sectionId,
  animateOnReveal = false,
  lazyAccordion = false,
  lazyRootMargin,
  answerClassName,
  questionClassName,
  triggerClassName,
  itemClassName,
  panelContentClassName,
  containerClassName,
  iconVariant,
  layout = "split",
}: SplitFaqSectionProps) {
  const titleId = `${idPrefix}-title`;

  if (layout === "centered") {
    const resolvedIconVariant = iconVariant ?? "default";
    return (
      <section
        aria-labelledby={titleId}
        className={cn(
          "faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10",
          className,
        )}
        data-section="faq"
        id={sectionId ?? `${idPrefix}-section`}
      >
        <Container className={containerClassName}>
          <div className="wrapper">
            <div className="header-text mb-10 text-center max-[767px]:mb-6">
              <div className="faq-text">
                {eyebrow ? (
                  <Eyebrow
                    align="center"
                    as="span"
                    className={cn("mb-4", eyebrowClassName)}
                  >
                    {eyebrow}
                  </Eyebrow>
                ) : null}
                <h2
                  className={cn(
                    "font-display text-[40px] font-normal leading-[1.2] tracking-normal text-ink max-[1199px]:text-[34px] max-[767px]:text-2xl",
                    headingClassName,
                  )}
                  id={titleId}
                >
                  {formatBrText(
                    heading,
                    headingBrClassName ?? "max-[1199px]:hidden",
                  )}
                </h2>
              </div>
              {description ? (
                <p className="mx-auto mt-3 max-w-[600px] text-base font-medium leading-[28px] text-[#535353] max-[767px]:text-sm">
                  {formatBrText(description)}
                </p>
              ) : null}
            </div>
            <div className="accordion-main mx-auto max-w-[950px]">
              {lazyAccordion ? (
                <LazyFaqAccordion
                  animateOnReveal={animateOnReveal}
                  answerClassName={answerClassName}
                  fallback={
                    <StaticFaqAccordion
                      answerClassName={answerClassName}
                      iconVariant={resolvedIconVariant}
                      idPrefix={idPrefix}
                      itemClassName={itemClassName}
                      items={items}
                      panelContentClassName={panelContentClassName}
                      questionClassName={questionClassName}
                      triggerClassName={triggerClassName}
                    />
                  }
                  iconVariant={resolvedIconVariant}
                  idPrefix={idPrefix}
                  itemClassName={itemClassName}
                  items={items}
                  panelContentClassName={panelContentClassName}
                  questionClassName={questionClassName}
                  triggerClassName={triggerClassName}
                  rootMargin={lazyRootMargin}
                />
              ) : (
                <FaqAccordion
                  animateOnReveal={animateOnReveal}
                  answerClassName={answerClassName}
                  iconVariant={resolvedIconVariant}
                  idPrefix={idPrefix}
                  itemClassName={itemClassName}
                  items={items}
                  panelContentClassName={panelContentClassName}
                  questionClassName={questionClassName}
                  triggerClassName={triggerClassName}
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const resolvedIconVariant = iconVariant ?? "circle-cross";
  const resolvedAnswerClassName =
    answerClassName ?? "!text-sm !font-medium !leading-6 !text-[#535353]";

  return (
    <section
      aria-labelledby={titleId}
      className={cn("bg-[#fafaf7] py-[60px] max-[991px]:py-10", className)}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
    >
      <Container className={containerClassName}>
        <div className="flex justify-between gap-[105px] max-[1399px]:gap-8 max-[991px]:flex-col max-[991px]:gap-[30px]">
          <div className="w-[41%] max-[1199px]:w-[44%] max-[991px]:w-full">
            <header className="mb-0 flex flex-col items-start text-left min-[992px]:sticky min-[992px]:top-[20px]">
              {eyebrow ? (
                <Eyebrow as="span" className={cn("mb-4", eyebrowClassName)}>
                  {eyebrow}
                </Eyebrow>
              ) : null}
              <h2
                className={cn(
                  "mb-[10px] font-display text-[35px] leading-[1.4] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
                  headingClassName,
                )}
                id={titleId}
              >
                {formatBrText(heading, headingBrClassName ?? "max-[1199px]:hidden")}
              </h2>
              {description ? (
                <p className="max-w-[500px] text-base leading-[28px] font-medium text-[#535353] max-[767px]:text-sm max-[767px]:leading-[24px]">
                  {formatBrText(description, "max-[1199px]:hidden")}
                </p>
              ) : null}
            </header>
          </div>
          <div className="w-[57%] max-w-[654px] grow max-[1199px]:w-[53%] max-[1199px]:max-w-none max-[991px]:w-full">
            {lazyAccordion ? (
              <LazyFaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={resolvedAnswerClassName}
                fallback={
                  <StaticFaqAccordion
                    answerClassName={resolvedAnswerClassName}
                    iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                    iconVariant={resolvedIconVariant}
                    idPrefix={idPrefix}
                    itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                    items={items}
                    panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                    questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                    triggerClassName={cn("!px-0 !py-6 !pr-[37px] max-[767px]:!py-5 max-[767px]:!pr-[42px]", triggerClassName)}
                  />
                }
                iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                iconVariant={resolvedIconVariant}
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                triggerClassName={cn("!px-0 !py-6 !pr-[37px] max-[767px]:!py-5 max-[767px]:!pr-[42px]", triggerClassName)}
                rootMargin={lazyRootMargin}
              />
            ) : (
              <FaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={resolvedAnswerClassName}
                iconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
                iconVariant={resolvedIconVariant}
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0 first:[&>button]:!pt-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-6 max-[767px]:!pb-5", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6", questionClassName)}
                triggerClassName={cn("!px-0 !py-6 !pr-[37px] max-[767px]:!py-5 max-[767px]:!pr-[42px]", triggerClassName)}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export const FaqSection = SplitFaqSection;
