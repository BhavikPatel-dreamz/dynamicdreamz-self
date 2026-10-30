import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { PortfolioProjectCard, type PortfolioAppLink } from "@/components/ui/portfolio-project-card";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

export type PortfolioShowcaseItem = {
  name: string;
  href?: string | null;
  image: string;
  imageAlt: string;
  category?: string;
  platformMark?: { src: string; width: number; height: number };
  appLinks?: readonly PortfolioAppLink[];
};

export type PortfolioShowcaseSectionProps = {
  content: {
    heading: string | readonly string[];
    description?: string | readonly string[];
    eyebrow?: string;
    items: readonly PortfolioShowcaseItem[];
    category?: string;
    platformMark?: { src: string; width: number; height: number };
    ctaLabel?: string;
    ctaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
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
  sectionId?: string;
  className?: string;
};

export function PortfolioShowcaseSection({
  content,
  ctaLabel,
  ctaHref,
  hideCta = false,
  columns = 4,
  cardVariant,
  imageAspectClassName,
  categoryClassName,
  eyebrow,
  eyebrowClassName = "mb-4!",
  itemsClassName,
  sectionId = "portfolio-showcase",
  variant = "default",
  className,
}: PortfolioShowcaseSectionProps) {
  const resolvedColumns = columns ?? 4;
  const resolvedEyebrow =
    eyebrow ?? content.eyebrow ?? sharedUiCopy.portfolioEyebrow;
  const resolvedCtaLabel =
    ctaLabel ?? content.ctaLabel ?? sharedUiCopy.viewOurWork;
  const resolvedCtaHref = ctaHref ?? content.ctaHref ?? siteConfig.ourWorkPath;
  const defaultPlatformMark = content.platformMark ?? {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  };

  const effectiveCardVariant = cardVariant ?? "ourWorkRefresh";

  const isShopifyPlusCategory = content.category === "SHOPIFY PLUS";
  const isLiveGrid = variant === "liveGrid";
  const sectionClassName = isShopifyPlusCategory
    ? "our-work-sec bg-white pt-0 pb-20 max-[991px]:pt-0 max-[991px]:pb-[50px]"
    : isLiveGrid
      ? "our-work-sec pt-20 pb-20 max-[991px]:pt-0 max-[767px]:pt-0"
      : "our-work-sec py-20 max-[991px]:py-[50px]";

  const gridColsClass =
    resolvedColumns === 4
      ? "grid-cols-4 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2"
      : resolvedColumns === 2
        ? "grid-cols-2 max-[767px]:grid-cols-2"
        : "grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2";

  return (
    <section className={cn(sectionClassName, className)} data-section="portfolio" id={sectionId}>
      <Container>
        <SplitSectionHeading
          description={content.description}
          eyebrow={resolvedEyebrow}
          eyebrowClassName={eyebrowClassName}
          heading={content.heading}
          variant="portfolio"
        />

        <div className={`mt-[42px] grid gap-x-[15px] gap-y-[60px] max-[992px]:mt-[50px] max-[992px]:gap-y-[30px] max-[767px]:mt-[30px] ${gridColsClass} ${itemsClassName ?? ""}`}>
          {content.items.map((item) => (
            <PortfolioProjectCard
              category={item.category ?? content.category}
              categoryClassName={categoryClassName}
              eagerImage
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              imageAspectClassName={imageAspectClassName ?? "pb-[115%]"}
              key={item.name}
              name={item.name}
              appLinks={item.appLinks}
              platformMark={item.platformMark ?? defaultPlatformMark}
              variant={effectiveCardVariant}
            />
          ))}
        </div>

        {!hideCta && content?.ctaHref && content?.ctaLabel ? (
          <div className="mt-[51px] flex flex-wrap justify-center gap-4 max-[767px]:mt-10 max-[575px]:flex-col [&_a]:max-[575px]:w-full" data-aos="fade-up">
            <ButtonLink href={resolvedCtaHref} variant="primary" className="text-center">
              {resolvedCtaLabel}
            </ButtonLink>
            {content.secondaryCtaLabel && content.secondaryCtaHref ? (
              <ButtonLink href={content.secondaryCtaHref} variant="outline" className="text-center">
                {content.secondaryCtaLabel}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
