import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

export type PortfolioPlatformMark = {
  src: string;
  width: number;
  height: number;
};

export type PortfolioAppLink = {
  label: string;
  href: string;
  icon: string;
};

export type PortfolioShowcaseItem = {
  name: string;
  href?: string | null;
  image: string;
  imageAlt: string;
  category?: string;
  platformMark?: PortfolioPlatformMark;
  appLinks?: readonly PortfolioAppLink[];
};

export type PortfolioSnippetsBlockProps = {
  content: any;
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
  id?: string;
  titleColumnClassName?: string;
  textColumnClassName?: string;
  className?: string;
};

export type PortfolioShowcaseSectionProps = PortfolioSnippetsBlockProps;

function ProjectCard({
  item,
  category,
  categoryClassName,
  imageAspectClassName,
  cardVariant: _cardVariant,
}: {
  item: PortfolioShowcaseItem;
  category?: string;
  categoryClassName?: string;
  imageAspectClassName?: string;
  cardVariant?: "default" | "ourWorkRefresh";
}) {
  const isAppProject = !item.href && item.appLinks && item.appLinks.length > 0;
  const resolvedCategory = item.category ?? category;

  return (
    <article data-aos="fade-up">
      {item.href ? (
        <a
          className="group/project block focus-visible:outline-offset-4"
          href={item.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={`View ${item.name} project`}
          data-project-card-link
        >
          <div
            className={cn(
              "relative block w-full overflow-hidden",
              imageAspectClassName ?? "pb-[115%]",
            )}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              src={item.image}
              alt={item.imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 575px) calc(50vw - 23px), (max-width: 991px) calc(50vw - 28px), (max-width: 1199px) calc(33vw - 20px), 370px"
            />
            <span
              className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%)] opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 group-focus-within/project:opacity-100"
              data-project-overlay
            />
          </div>
          <div className="mt-2.5 flex items-start justify-between gap-2 max-[767px]:gap-1.5">
            <div className="min-w-0 flex-1">
              {resolvedCategory ? (
                <p
                  className={cn(
                    "font-montserrat text-[10px] leading-[14px] font-bold uppercase tracking-[0.8px] text-brand-red",
                    categoryClassName,
                  )}
                >
                  {resolvedCategory}
                </p>
              ) : null}
              <h3
                className={cn(
                  resolvedCategory ? "mt-2.5 max-[1199px]:mt-2 max-[767px]:mt-1.5" : "mt-0",
                  "font-montserrat text-lg leading-5 font-bold text-ink capitalize max-[1399px]:text-base max-[1399px]:leading-[18px] max-[767px]:text-sm max-[767px]:leading-tight",
                )}
              >
                {item.name}
              </h3>
            </div>
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-black/20 bg-white transition-colors duration-300 group-hover/project:bg-brand-red group-focus/project:bg-brand-red">
              <Image
                aria-hidden="true"
                className="h-[9px] w-[9px] brightness-0 transition-[filter] duration-300 group-hover/project:brightness-100 group-focus/project:brightness-100"
                src="/assets/icons/diagonal-arrow-white.svg"
                alt=""
                width={12}
                height={12}
              />
            </span>
          </div>
        </a>
      ) : (
        <div className="group/project block" data-project-app-card>
          <div
            className={cn(
              "relative block w-full overflow-hidden",
              imageAspectClassName ?? "pb-[115%]",
            )}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              src={item.image}
              alt={item.imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 575px) calc(50vw - 23px), (max-width: 991px) calc(50vw - 28px), (max-width: 1199px) calc(33vw - 20px), 370px"
            />
            <span
              className={cn(
                "pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%)] opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 group-focus-within/project:opacity-100",
                Boolean(isAppProject) && "max-[1199px]:opacity-100",
              )}
              data-project-overlay
            />
            {isAppProject && item.appLinks && (
              <span
                className="absolute right-0 bottom-[30px] left-0 z-2 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover/project:opacity-100 group-focus-within/project:opacity-100 max-[1199px]:opacity-100 max-[575px]:bottom-[15px]"
                data-project-app-links
              >
                {item.appLinks.map((link, idx) => (
                  <a
                    className={cn(
                      "inline-flex items-center px-[27px] text-base leading-[25.2px] font-bold text-white max-[1199px]:px-[15px] max-[1199px]:text-sm max-[1199px]:leading-[18px] max-[575px]:text-[0px] max-[575px]:px-[11px] max-[359px]:px-2.5",
                      idx > 0 && "border-l-[1.5px] border-white",
                    )}
                    href={link.href}
                    key={link.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="mr-2.5 h-[30px] w-[30px] max-[1199px]:h-7 max-[1199px]:w-7 max-[575px]:mr-0 max-[575px]:h-6 max-[575px]:w-6"
                      src={link.icon}
                      alt=""
                      width={39}
                      height={39}
                    />
                    {link.label}
                  </a>
                ))}
              </span>
            )}
          </div>
          <div className="mt-2.5 flex items-start justify-between gap-2 max-[767px]:gap-1.5">
            <div className="min-w-0 flex-1">
              {resolvedCategory ? (
                <p
                  className={cn(
                    "font-montserrat text-[10px] leading-[14px] font-bold uppercase tracking-[0.8px] text-brand-red",
                    categoryClassName,
                  )}
                >
                  {resolvedCategory}
                </p>
              ) : null}
              <h3
                className={cn(
                  resolvedCategory ? "mt-2.5 max-[1199px]:mt-2 max-[767px]:mt-1.5" : "mt-0",
                  "font-montserrat text-lg leading-5 font-bold text-ink capitalize max-[1399px]:text-base max-[1399px]:leading-[18px] max-[767px]:text-sm max-[767px]:leading-tight",
                )}
              >
                {item.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function PortfolioSnippetsBlock({
  content,
  ctaLabel,
  ctaHref,
  hideCta = false,
  columns = 4,
  cardVariant = "ourWorkRefresh",
  imageAspectClassName,
  categoryClassName,
  eyebrow,
  eyebrowClassName = "mb-4!",
  itemsClassName,
  sectionId = "portfolio-showcase",
  titleColumnClassName,
  textColumnClassName,
  variant = "default",
  className,
}: PortfolioSnippetsBlockProps) {
  const resolvedColumns = columns ?? 4;
  const resolvedEyebrow =
    eyebrow ?? content.eyebrow ?? sharedUiCopy.portfolioEyebrow;
  const resolvedCtaLabel =
    ctaLabel ?? content.ctaLabel ?? sharedUiCopy.viewOurWork;
  const resolvedCtaHref = ctaHref ?? content.ctaHref ?? siteConfig.ourWorkPath;

  const isShopifyPlusCategory = content.category === "SHOPIFY PLUS";
  const isLiveGrid = variant === "liveGrid";
  const sectionClassName = isShopifyPlusCategory
    ? "our-work-sec bg-white pt-0 pb-20 max-[991px]:pt-0 max-[991px]:pb-[50px]"
    : isLiveGrid
      ? "our-work-sec pt-0 pb-20 max-[991px]:pt-0 max-[767px]:pt-0"
      : "our-work-sec py-20 max-[991px]:py-[50px]";

  const gridColsClass =
    resolvedColumns === 4
      ? "grid-cols-4 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2"
      : resolvedColumns === 2
        ? "grid-cols-2 max-[767px]:grid-cols-2"
        : "grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2";

  const headingText = Array.isArray(content.heading)
    ? content.heading.join(" ")
    : content.heading;
  const descriptionText = Array.isArray(content.description)
    ? content.description.join(" ")
    : content.description;

  return (
    <section className={cn(sectionClassName, className)} data-section="portfolio" id={sectionId}>
      <Container>
        <div data-aos="fade-up" className="mb-10 flex items-end justify-between gap-12 max-[992px]:items-start max-[767px]:mb-[30px] max-[767px]:flex-col max-[767px]:gap-4">
          <div className={cn("shrink-0", titleColumnClassName)}>
            {resolvedEyebrow && (
              <div className={cn("mb-5 flex items-center gap-2", eyebrowClassName)}>
                <span className="h-[2px] w-6 bg-brand-red" />
                <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">
                  {resolvedEyebrow}
                </span>
              </div>
            )}
            <h2 className="font-montreal-medium text-[35px] leading-[1.38] font-normal text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">
              {headingText}
            </h2>
          </div>
          {descriptionText && (
            <p className={cn("max-w-[690px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]", textColumnClassName)}>
              {descriptionText}
            </p>
          )}
        </div>

        <div className={`mt-[42px] grid gap-x-[15px] gap-y-[60px] max-[992px]:mt-[50px] max-[992px]:gap-y-[30px] max-[767px]:mt-[30px] ${gridColsClass} ${itemsClassName ?? ""}`}>
          {content.items.map((item: any) => (
            <ProjectCard
              key={item.name}
              item={item}
              category={item.category ?? content.category}
              categoryClassName={categoryClassName}
              imageAspectClassName={imageAspectClassName ?? "pb-[115%]"}
              cardVariant={cardVariant}
            />
          ))}
        </div>

        {!hideCta && (
          <div className="mt-[51px] flex flex-wrap justify-center gap-4 max-[767px]:mt-10 max-[575px]:flex-col" data-aos="fade-up">
            <Link
              href={resolvedCtaHref}
              className="inline-flex items-center justify-center rounded-[30px] bg-brand-red px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-black max-[575px]:w-full text-center"
            >
              {resolvedCtaLabel}
            </Link>
            {content.secondaryCtaLabel && content.secondaryCtaHref ? (
              <Link
                href={content.secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-[30px] border border-black/20 bg-transparent px-8 py-3.5 text-sm font-bold text-ink transition-colors duration-300 hover:border-black hover:bg-black hover:text-white max-[575px]:w-full text-center"
              >
                {content.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}

export {
  SelectedWorkSection,
  type SelectedWorkSectionProps,
} from "@/components/sections/home/selected-work-section";

export const PortfolioShowcaseSection = PortfolioSnippetsBlock;
export const ShopifyMobileAppWorkSection = PortfolioSnippetsBlock;
