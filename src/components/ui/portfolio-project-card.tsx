import Image from "next/image";

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

export type PortfolioProjectCardProps = {
  name: string;
  category?: string;
  href?: string | null;
  image: string;
  imageAlt: string;
  platformMark?: PortfolioPlatformMark;
  appLinks?: readonly PortfolioAppLink[];
  categoryClassName?: string;
  imageAspectClassName?: string;
  eagerImage?: boolean;
  variant?: "default" | "ourWorkRefresh";
  showMobileArrow?: boolean;
  showArrow?: boolean;
};

function ProjectImage({
  image,
  imageAlt,
  eagerImage = false,
  className,
}: Pick<PortfolioProjectCardProps, "image" | "imageAlt" | "eagerImage"> & {
  className?: string;
}) {
  return (
    <Image
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      src={image}
      alt={imageAlt}
      fill
      loading={eagerImage ? "eager" : "lazy"}
      sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 28px), 370px"
    />
  );
}

function Overlay({ persistent = false }: { persistent?: boolean }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%)] opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus/project:opacity-100 group-focus-within/project:opacity-100",
        persistent && "max-[1199px]:opacity-100",
      )}
      data-project-overlay
    />
  );
}



function AppStoreLinks({ appLinks }: { appLinks: readonly PortfolioAppLink[] }) {
  return (
    <span
      className="absolute right-0 bottom-[30px] left-0 z-2 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover/project:opacity-100 group-focus-within/project:opacity-100 max-[1199px]:opacity-100 max-[575px]:bottom-[15px]"
      data-project-app-links
    >
      {appLinks.map((link, index) => (
        <a
          className={cn(
            "inline-flex items-center px-[27px] text-base leading-[25.2px] font-bold text-white max-[1199px]:px-[15px] max-[1199px]:text-sm max-[1199px]:leading-[18px] max-[575px]:text-[0px] max-[575px]:px-[11px] max-[359px]:px-2.5",
            index > 0 && "border-l-[1.5px] border-white",
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
  );
}

export function PortfolioProjectCard({
  name,
  category,
  href,
  image,
  imageAlt,
  appLinks,
  imageAspectClassName,
  eagerImage = false,
  showMobileArrow = false,
  showArrow = false,
}: PortfolioProjectCardProps) {
  const isAppProject = !href && appLinks?.length;

  return (
    <article data-aos="fade-up">
      {href ? (
        <a
          className="group/project block focus-visible:outline-offset-4"
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={`View ${name} project`}
          data-project-card-link
        >
          <div
            className={cn(
              "relative block w-full overflow-hidden",
              imageAspectClassName ?? "pb-[115%]",
            )}
          >
            <ProjectImage
              className="transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              eagerImage={eagerImage}
              image={image}
              imageAlt={imageAlt}
            />
            <Overlay />
          </div>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <div>
              {category ? (
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {category}
                </p>
              ) : null}
              <h3
                className={cn(
                  category ? "mt-2.5 max-[1199px]:mt-[3px]" : "mt-0",
                  "font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:text-sm max-[1199px]:font-semibold",
                )}
              >
                {name}
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
            <ProjectImage
              className="transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              eagerImage={eagerImage}
              image={image}
              imageAlt={imageAlt}
            />
            <Overlay persistent={Boolean(isAppProject)} />
            {isAppProject ? <AppStoreLinks appLinks={appLinks} /> : null}
          </div>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <div>
              {category ? (
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {category}
                </p>
              ) : null}
              <h3
                className={cn(
                  category ? "mt-2.5 max-[1199px]:mt-[3px]" : "mt-0",
                  "font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:text-sm max-[1199px]:font-semibold",
                )}
              >
                {name}
              </h3>
            </div>
            {showArrow && (
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
            )}
          </div>
        </div>
      )}
    </article>
  );
}
