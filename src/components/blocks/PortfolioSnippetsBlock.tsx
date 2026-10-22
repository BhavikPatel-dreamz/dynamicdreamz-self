import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
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
  showMobileArrow?: boolean;
  mobileColumns?: 1 | 2;
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
  defaultPlatformMark,
  showMobileArrow,
  cardVariant,
}: {
  item: PortfolioShowcaseItem;
  category?: string;
  categoryClassName?: string;
  imageAspectClassName?: string;
  defaultPlatformMark?: PortfolioPlatformMark;
  showMobileArrow?: boolean;
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
              sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 28px), 370px"
            />
            <span
              className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%)] opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 group-focus-within/project:opacity-100"
              data-project-overlay
            />
          </div>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <div>
              {resolvedCategory ? (
                <p
                  className={cn(
                    "text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]",
                    categoryClassName,
                  )}
                >
                  {resolvedCategory}
                </p>
              ) : null}
              <h3
                className={cn(
                  resolvedCategory ? "mt-2.5 max-[1199px]:mt-[3px]" : "mt-0",
                  "font-montreal-medium text-lg leading-5 font-normal text-ink capitalize max-[1199px]:text-sm",
                )}
              >
                {item.name}
              </h3>
            </div>
            <span
              className={cn(
                "flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-black/20 bg-white transition-colors duration-300 group-hover/project:bg-brand-red group-focus/project:bg-brand-red",
                !showMobileArrow && "max-[767px]:hidden",
              )}
            >
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
              sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 28px), 370px"
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
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <div>
              {resolvedCategory ? (
                <p
                  className={cn(
                    "text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]",
                    categoryClassName,
                  )}
                >
                  {resolvedCategory}
                </p>
              ) : null}
              <h3
                className={cn(
                  resolvedCategory ? "mt-2.5 max-[1199px]:mt-[3px]" : "mt-0",
                  "font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:text-sm max-[1199px]:font-semibold",
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
  showMobileArrow = false,
  mobileColumns = 1,
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
  const defaultPlatformMark = content.platformMark ?? {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  };

  const isShopifyPlusCategory = content.category === "SHOPIFY PLUS";
  const isLiveGrid = variant === "liveGrid";
  const sectionClassName = isShopifyPlusCategory
    ? "our-work-sec bg-white pt-0 pb-20 max-[991px]:pt-0 max-[991px]:pb-[50px]"
    : isLiveGrid
      ? "our-work-sec pt-0 pb-20 max-[991px]:pt-0 max-[767px]:pt-0"
      : "our-work-sec py-20 max-[991px]:py-[50px]";

  const gridColsClass =
    resolvedColumns === 4
      ? mobileColumns === 2
        ? "grid-cols-4 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2"
        : "grid-cols-4 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
      : resolvedColumns === 2
        ? mobileColumns === 2
          ? "grid-cols-2 max-[767px]:grid-cols-2"
          : "grid-cols-2 max-[767px]:grid-cols-1"
        : mobileColumns === 2
          ? "grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-2"
          : "grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1";

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

        <div className={`mt-[42px] grid gap-x-[15px] gap-y-[60px] max-[992px]:mt-[50px] max-[992px]:gap-y-[30px] ${gridColsClass} ${itemsClassName ?? ""}`}>
          {content.items.map((item: any) => (
            <ProjectCard
              key={item.name}
              item={item}
              category={item.category ?? content.category}
              categoryClassName={categoryClassName}
              imageAspectClassName={imageAspectClassName ?? "pb-[115%]"}
              defaultPlatformMark={defaultPlatformMark}
              showMobileArrow={showMobileArrow}
              cardVariant={cardVariant}
            />
          ))}
        </div>

        {!hideCta && (
          <div className="mt-[51px] flex flex-wrap justify-center gap-4 max-[767px]:mt-10 max-[575px]:flex-col" data-aos="fade-up">
            <Link
              href={resolvedCtaHref}
              className="inline-flex items-center justify-center rounded-[30px] bg-brand-red px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-black"
            >
              {resolvedCtaLabel}
            </Link>
            {content.secondaryCtaLabel && content.secondaryCtaHref ? (
              <Link
                href={content.secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-[30px] border border-black/20 bg-transparent px-8 py-3.5 text-sm font-bold text-ink transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
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

import styles from "./PortfolioSnippetsBlock.module.css";
import { homeSectionCopy, projects, type Project } from "@/content/home";

function DiagonalArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33336 15.4418C0.649946 16.1252 0.649946 17.2332 1.33336 17.9166C2.01678 18.6001 3.12482 18.6001 3.80824 17.9166L2.5708 16.6792L1.33336 15.4418ZM19.25 1.74995C19.25 0.783455 18.4665 -4.65033e-05 17.5 -4.59975e-05L1.75005 -4.62504e-05C0.783549 -4.62504e-05 4.67197e-05 0.783456 4.67197e-05 1.74995C4.67197e-05 2.71645 0.783549 3.49995 1.75005 3.49995L15.75 3.49995L15.75 17.5C15.75 18.4665 16.5335 19.25 17.5 19.25C18.4665 19.25 19.25 18.4665 19.25 17.5L19.25 1.74995ZM2.5708 16.6792L3.80824 17.9166L18.7375 2.98739L17.5 1.74995L16.2626 0.512517L1.33336 15.4418L2.5708 16.6792Z" fill="white" />
    </svg>
  );
}

const projectVideoPosters: Record<string, string> = {
  "/assets/portfolio/sleepy-cat.mp4": "/assets/case-studies/sleepycat.png",
  "/assets/portfolio/tropicfeel.mp4": "/assets/fashion/portfolio/tropicfeel-fashion.webp",
};

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === "video") {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={projectVideoPosters[project.media.src]}
        src={project.media.src}
      />
    );
  }

  return (
    <Image
      className="absolute inset-0 h-full w-full object-cover scale-[1.01] transition-transform duration-300 ease-in-out group-hover/project:scale-[1.06] will-change-transform"
      src={project.media.src}
      alt={project.media.alt}
      width={668}
      height={469}
      sizes="(max-width: 767px) calc(100vw - 50px), 50vw"
    />
  );
}

function ProjectList({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="flex w-1/2 shrink-0 basis-1/2 max-[767px]:w-auto max-[767px]:basis-auto max-[767px]:aria-hidden:hidden" aria-hidden={decorative || undefined}>
      {projects.map((project) => (
        <a
          className="group/project block w-1/5 shrink-0 basis-1/5 text-white max-[767px]:w-[calc(100cqw-50px)] max-[767px]:basis-[calc(100cqw-50px)] max-[767px]:snap-start"
          key={project.name}
          href={project.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          tabIndex={decorative ? -1 : undefined}
        >
          <span className="relative block w-full overflow-hidden pb-[70%] min-[992px]:pb-[56.25%] min-[1200px]:pb-[68%] min-[1600px]:pb-[56.25%]">
            <ProjectMedia project={project} />
          </span>
          <span className="relative flex flex-col items-start justify-between border-y border-r border-[#45433d] px-[30px] py-5 font-montreal-medium text-[30px] leading-[1.2] font-normal text-white max-[1380px]:p-5 max-[1380px]:text-2xl max-[767px]:min-h-[94px] max-[767px]:p-4 max-[767px]:pr-[35px] max-[767px]:text-lg max-[767px]:leading-[1.24]">
            <span>{project.name}</span>
            <span className="mt-2.5 block font-montserrat text-[15px] font-semibold uppercase leading-[1.29] text-white/80 max-[1199px]:text-[11px] max-[767px]:mt-[7px] max-[767px]:text-xs">
              {project.technology}
            </span>
            <span className="absolute right-[30px] top-1/2 -translate-y-1/2 max-[1380px]:right-5 max-[767px]:right-4" aria-hidden="true">
              <DiagonalArrowIcon className="h-5 w-5 max-[767px]:h-[13px] max-[767px]:w-[13px]" />
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

export type SelectedWorkSectionProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SelectedWorkSection({
  title = homeSectionCopy.selectedWorkTitle,
  description = homeSectionCopy.selectedWorkDescription,
  ctaLabel = homeSectionCopy.ctaViewWork,
  ctaHref = homeSectionCopy.ctaViewWorkHref,
}: SelectedWorkSectionProps = {}) {
  return (
    <section className="overflow-hidden bg-[#181e18] pt-[60px] pb-[52px] text-white max-[767px]:py-[30px]">
      <Container
        data-aos="fade-up"
        className="flex items-end justify-between max-[992px]:flex-col max-[992px]:items-start"
      >
        <h2 className="mr-5 max-w-[600px] font-montreal-medium text-[43px] font-normal leading-[1.2] text-white min-[768px]:max-[992px]:m-0 min-[768px]:max-[992px]:max-w-full max-[767px]:m-0 max-[767px]:mb-4 max-[767px]:max-w-full max-[767px]:text-[24px]">
          {title}
        </h2>
        <p className="max-w-[580px] font-sans text-base leading-7 font-medium text-white min-[768px]:max-[992px]:mt-2.5 min-[768px]:max-[992px]:max-w-full max-[767px]:max-w-full max-[767px]:text-sm max-[767px]:leading-[180%]">
          {description}
        </p>
      </Container>
      <div
        data-aos="fade-up"
        className="w-full overflow-hidden py-[57px] pb-[51px] max-[767px]:overflow-x-auto max-[767px]:px-0 max-[767px]:pt-[34px] max-[767px]:pb-[30px] max-[767px]:[container-type:inline-size] max-[767px]:[scrollbar-width:none] max-[767px]:snap-x max-[767px]:snap-mandatory max-[767px]:[&::-webkit-scrollbar]:hidden"
        aria-label="Selected ecommerce work"
      >
        <div className={cn("flex w-[calc(500%+5px)] min-[1600px]:w-[calc(425%+5px)] max-[767px]:w-max", styles.projectMotion)}>
          <ProjectList />
          <ProjectList decorative />
        </div>
      </div>
      <div data-aos="fade-up" className="flex justify-center">
        <ButtonLink
          className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[992px]:min-h-[42px] max-[992px]:py-3 max-[992px]:text-sm"
          variant="light"
          href={ctaHref}
        >
          {ctaLabel}
        </ButtonLink>
      </div>
    </section>
  );
}

export const PortfolioShowcaseSection = PortfolioSnippetsBlock;
export const ShopifyMobileAppWorkSection = PortfolioSnippetsBlock;
