import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { sharedUiCopy } from "@/content/common";
import { formatBrText } from "@/lib/text-formatting";

export type PortfolioShowcaseItem = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  category?: string;
  platformMark?: { src: string; width: number; height: number };
};

export type PortfolioShowcaseSectionProps = {
  content: {
    heading: string;
    description?: string;
    eyebrow?: string;
    items: readonly PortfolioShowcaseItem[];
    category?: string;
    platformMark?: { src: string; width: number; height: number };
  };
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
  className?: string;
  columns?: 2 | 3 | 4;
  cardVariant?: "default" | "ourWorkRefresh";
  imageAspectClassName?: string;
  categoryClassName?: string;
  descriptionBreakClassName?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  headingBreakClassName?: string;
  headerLayout?: "centered" | "split";
  itemsClassName?: string;
  variant?: "default" | "liveGrid";
};

export function PortfolioShowcaseSection({
  content,
  ctaLabel = sharedUiCopy.viewOurWork,
  ctaHref = "/our-work",
  hideCta = false,
  className = "our-work-sec pb-20 max-[992px]:pb-[60px]",
  columns = 3,
  cardVariant,
  imageAspectClassName,
  categoryClassName,
  descriptionBreakClassName = "max-[1199px]:hidden",
  eyebrow,
  eyebrowClassName,
  headingBreakClassName = "max-[1199px]:hidden",
  headerLayout = "centered",
  itemsClassName,
  variant = "default",
}: PortfolioShowcaseSectionProps) {
  const isLiveGrid = variant === "liveGrid";
  const resolvedColumns = columns ?? (isLiveGrid ? 4 : 3);
  const resolvedEyebrow = isLiveGrid ? (eyebrow ?? content.eyebrow) : eyebrow;
  const defaultPlatformMark = content.platformMark ?? {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  };

  const isSplit = headerLayout === "split";
  const effectiveCardVariant = cardVariant ?? (resolvedColumns === 4 ? "ourWorkRefresh" : "default");

  const gridColsClass =
    resolvedColumns === 4
      ? "grid-cols-4 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      : resolvedColumns === 2
        ? "grid-cols-2 max-[767px]:grid-cols-1"
        : "grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1";

  return (
    <section className={className} data-section="portfolio" id="portfolio-showcase">
      <Container>
        {isLiveGrid ? (
          <SplitSectionHeading
            description={content.description}
            eyebrow={resolvedEyebrow}
            eyebrowClassName={eyebrowClassName}
            heading={content.heading}
            variant="portfolio"
          />
        ) : (
          <>
            {!isSplit && resolvedEyebrow ? (
              <Eyebrow
                align="center"
                className={cn("mb-5 tracking-[0.02em]", eyebrowClassName)}
                lineWidth="fixed"
                tone="muted"
              >
                {resolvedEyebrow}
              </Eyebrow>
            ) : null}

            <div
              className={
                isSplit
                  ? "flex items-end justify-between text-left max-[992px]:flex-col max-[992px]:items-center max-[992px]:text-center"
                  : "text-center"
              }
            >
              <div className={isSplit ? "w-[43%] max-[992px]:w-full" : undefined}>
                {isSplit && resolvedEyebrow ? (
                  <Eyebrow
                    align="responsive-center"
                    className={cn("mb-4 tracking-[0.02em]", eyebrowClassName)}
                    lineWidth="fixed"
                    tone="muted"
                  >
                    {resolvedEyebrow}
                  </Eyebrow>
                ) : null}
                <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
                  {formatBrText(content.heading, headingBreakClassName)}
                </h2>
              </div>
              {content.description && (
                <div className={isSplit ? "w-[51%] max-[992px]:mt-[15px] max-[992px]:w-full" : undefined}>
                  <p className={`${isSplit ? "" : "mx-auto mt-6 max-w-[740px] "}our-works-desc text-[18px] font-medium leading-[34.2px] text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]`}>
                    {formatBrText(content.description, descriptionBreakClassName)}
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        <div className={`mt-[42px] grid gap-x-[15px] gap-y-[60px] max-[992px]:mt-[50px] max-[992px]:gap-y-[30px] ${gridColsClass} ${itemsClassName ?? ""}`}>
          {content.items.map((item) => (
            <PortfolioProjectCard
              category={item.category ?? content.category ?? "SHOPIFY"}
              categoryClassName={categoryClassName}
              eagerImage
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              imageAspectClassName={imageAspectClassName ?? (isLiveGrid ? "pb-[115%]" : undefined)}
              key={item.name}
              name={item.name}
              platformMark={item.platformMark ?? defaultPlatformMark}
              variant={effectiveCardVariant}
            />
          ))}
        </div>

        {!hideCta && (
          <div className="mt-[51px] text-center max-[767px]:mt-10">
            <ButtonLink href={ctaHref} variant="primary">
              {ctaLabel}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
