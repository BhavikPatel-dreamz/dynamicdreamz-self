import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
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
  imageAspectClassName?: string;
  categoryClassName?: string;
  headingBreakClassName?: string;
};

export function PortfolioShowcaseSection({
  content,
  ctaLabel = "View our work",
  ctaHref = "/our-work",
  hideCta = false,
  className = "our-work-sec pb-20 max-[991px]:pb-[60px]",
  columns = 3,
  imageAspectClassName,
  categoryClassName,
  headingBreakClassName = "max-[1199px]:hidden",
}: PortfolioShowcaseSectionProps) {
  const defaultPlatformMark = content.platformMark ?? {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  };

  const gridColsClass =
    columns === 4
      ? "grid-cols-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1"
      : columns === 2
        ? "grid-cols-2 max-[767px]:grid-cols-1"
        : "grid-cols-3 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1";

  return (
    <section className={className} data-section="portfolio" id="portfolio-showcase">
      <Container>
        <div className="text-center">
          {content.eyebrow && (
            <span className="eyebrow mb-2 block font-sans text-sm font-semibold tracking-wider text-[#d92128] uppercase">
              {content.eyebrow}
            </span>
          )}
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, headingBreakClassName)}
          </h2>
          {content.description && (
            <p className="mx-auto mt-6 max-w-[740px] text-[18px] font-medium leading-[34.2px] text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
              {formatBrText(content.description, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div className={`mt-[42px] grid gap-x-[15px] gap-y-[60px] max-[991px]:mt-[50px] max-[991px]:gap-y-[30px] ${gridColsClass}`}>
          {content.items.map((item) => (
            <PortfolioProjectCard
              category={item.category ?? content.category ?? "SHOPIFY"}
              categoryClassName={categoryClassName}
              eagerImage
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              imageAspectClassName={imageAspectClassName}
              key={item.name}
              name={item.name}
              platformMark={item.platformMark ?? defaultPlatformMark}
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
