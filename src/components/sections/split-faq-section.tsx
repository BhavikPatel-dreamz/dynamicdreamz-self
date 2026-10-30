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
  heading?: string | readonly string[];
  headingClassName?: string;
  headingBrClassName?: string;
  description?: string | readonly string[];
  eyebrow?: string;
  sectionId?: string;
  animateOnReveal?: boolean;
  lazyAccordion?: boolean;
  lazyRootMargin?: string;
  answerClassName?: string;
  questionClassName?: string;
  triggerClassName?: string;
  itemClassName?: string;
  panelContentClassName?: string;
  iconVariant?: "default" | "circle-cross";
  className?: string;
  bgOffWhite?:boolean
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
  headingClassName,
  headingBrClassName,
  description,
  eyebrow,
  sectionId,
  animateOnReveal = false,
  lazyAccordion = false,
  lazyRootMargin,
  answerClassName,
  questionClassName,
  triggerClassName,
  itemClassName,
  panelContentClassName,
  iconVariant = "circle-cross",
  className,
  bgOffWhite,
}: SplitFaqSectionProps) {
  const titleId = `${idPrefix}-title`;

  const bg =
    bgOffWhite ||
    idPrefix.startsWith("white-label-website-design") ||
    idPrefix.startsWith("white-label-wordpress") ||
    idPrefix.startsWith("white-label-shopify") ||
    idPrefix.startsWith("shopify-certified-developers") ||
    idPrefix.startsWith("shopify-cro");
  const isPt0 = idPrefix.startsWith("risks-of-shopify-outsourcing");
  const isMobileAppFaq = idPrefix.startsWith("shopify-mobile-app");

  const bgClass = bg
    ? "bg-[#fafaf7]"
    : "bg-white"
  const paddingClass =
    isPt0
      ? "pt-0 pb-20 max-[991px]:py-10 max-[767px]:pb-5"
      : "py-[60px] max-[991px]:py-10 max-[767px]:pb-5";
  const containerClass = isMobileAppFaq
    ? "min-[1400px]:max-w-[1408px] px-[15px]"
    : undefined;

  return (
    <section
      aria-labelledby={titleId}
      className={cn("faq-sec", bgClass, paddingClass, className)}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
    >
      <Container className={containerClass}>
        <div className="wrapper flex justify-between gap-[105px] max-[1399px]:gap-8 max-[991px]:flex-col max-[991px]:gap-[30px]">
          <div className="w-[41%] max-[1199px]:w-[44%] max-[991px]:w-full" data-aos="fade-up">
            <header className="header-text mb-0 flex flex-col items-start text-left min-[992px]:sticky min-[992px]:top-[20px]">
              {eyebrow ? (
                <Eyebrow as="span" className="mb-4">
                  {eyebrow}
                </Eyebrow>
              ) : null}
              <h2
                className={cn(
                  "mb-2.5 font-display text-[35px] leading-[49px] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
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
          <div className="accordion-main w-[57%] max-w-[654px] grow max-[1199px]:w-[53%] max-[1199px]:max-w-none max-[991px]:w-full" data-aos="fade-up">
            {lazyAccordion ? (
              <LazyFaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={answerClassName}
                fallback={
                  <StaticFaqAccordion
                    answerClassName={answerClassName}
                    
                    iconVariant={iconVariant}
                    idPrefix={idPrefix}
                    itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent !py-6 max-[767px]:!py-5 last:!border-b-0", itemClassName)}
                    items={items}
                    panelContentClassName={cn("!px-0 !pt-5 !pb-0", panelContentClassName)}
                    questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[28px] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[640px]:!text-base max-[640px]:!leading-6", questionClassName)}
                    triggerClassName={cn("!pl-0 !pr-[37px] !py-0", triggerClassName)}
                  />
                }
                
                iconVariant={iconVariant}
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent !py-6 max-[767px]:!py-5 last:!border-b-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-0", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[28px] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[640px]:!text-base max-[640px]:!leading-6", questionClassName)}
                triggerClassName={cn("!pl-0 !pr-[37px] !py-0", triggerClassName)}
                rootMargin={lazyRootMargin}
              />
            ) : (
              <FaqAccordion
                animateOnReveal={animateOnReveal}
                answerClassName={answerClassName}
                
                iconVariant={iconVariant}
                idPrefix={idPrefix}
                itemClassName={cn("!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent !py-6 max-[767px]:!py-5 last:!border-b-0", itemClassName)}
                items={items}
                panelContentClassName={cn("!px-0 !pt-5 !pb-0", panelContentClassName)}
                questionClassName={cn("!font-montreal-medium !text-[20px] !leading-[28px] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[640px]:!text-base max-[640px]:!leading-6", questionClassName)}
                triggerClassName={cn("!pl-0 !pr-[37px] !py-0", triggerClassName)}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
