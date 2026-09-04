import Image from "next/image";

import { sharedUiCopy } from "@/content/common";
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
  category: string;
  href?: string | null;
  image: string;
  imageAlt: string;
  platformMark?: PortfolioPlatformMark;
  appLinks?: readonly PortfolioAppLink[];
  categoryClassName?: string;
  imageAspectClassName?: string;
  eagerImage?: boolean;
  variant?: "default" | "ourWorkRefresh";
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

function ProjectLinkOverlay() {
  return (
    <span
      className="absolute bottom-[-60px] left-1/2 z-2 flex -translate-x-1/2 items-center gap-2.5 text-lg leading-[25.2px] font-bold whitespace-nowrap text-white transition-[bottom] duration-500 ease-in-out group-hover/project:bottom-[30px] group-focus/project:bottom-[30px]"
      data-project-link
    >
      {sharedUiCopy.viewProject}
      <Image
        aria-hidden="true"
        className="h-3 w-3"
        src="/assets/icons/diagonal-arrow-white.svg"
        alt=""
        width={12}
        height={12}
      />
    </span>
  );
}

function PlatformMark({ platformMark }: { platformMark: PortfolioPlatformMark }) {
  return (
    <span
      className="absolute top-[25px] right-6 z-1 opacity-0 [transform:translateY(10px)] transition-all duration-500 ease-in-out group-hover/project:opacity-100 group-hover/project:[transform:translateY(0)] group-focus/project:opacity-100 group-focus/project:[transform:translateY(0)]"
      data-project-platform
    >
      <Image
        src={platformMark.src}
        alt=""
        width={platformMark.width}
        height={platformMark.height}
      />
    </span>
  );
}

function AppStoreLinks({ appLinks }: { appLinks: readonly PortfolioAppLink[] }) {
  return (
    <span
      className="absolute right-0 bottom-[30px] left-0 z-2 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover/project:opacity-100 group-focus-within/project:opacity-100 max-[1199px]:opacity-100"
      data-project-app-links
    >
      {appLinks.map((link, index) => (
        <a
          className={cn(
            "inline-flex items-center px-[27px] text-base leading-[25.2px] font-bold text-white max-[1199px]:px-[15px] max-[1199px]:text-sm max-[1199px]:leading-[18px] max-[359px]:px-2.5",
            index > 0 && "border-l-[1.5px] border-white",
          )}
          href={link.href}
          key={link.href}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            className="mr-2.5 h-[30px] w-[30px] max-[1199px]:h-7 max-[1199px]:w-7"
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
  platformMark,
  appLinks,
  categoryClassName,
  imageAspectClassName,
  eagerImage = false,
  variant = "default",
}: PortfolioProjectCardProps) {
  const isAppProject = !href && appLinks?.length;

  if (variant === "ourWorkRefresh") {
    return (
      <article>
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
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {category}
                </p>
                <h3 className="mt-2.5 font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:mt-[3px] max-[1199px]:text-sm max-[1199px]:font-semibold">
                  {name}
                </h3>
              </div>
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-black/20 bg-white transition-colors duration-300 group-hover/project:bg-brand-red group-focus/project:bg-brand-red max-[767px]:hidden">
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
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {category}
                </p>
                <h3 className="mt-2.5 font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:mt-[3px] max-[1199px]:text-sm max-[1199px]:font-semibold">
                  {name}
                </h3>
              </div>
            </div>
          </div>
        )}
      </article>
    );
  }

  return (
    <article>
      {href ? (
        <a
          className={cn(
            "group/project relative block w-full overflow-hidden focus-visible:outline-offset-4",
            imageAspectClassName ?? "pb-[115%]",
          )}
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={`View ${name} project`}
          data-project-card-link
        >
          <ProjectImage eagerImage={eagerImage} image={image} imageAlt={imageAlt} />
          <Overlay />
          <ProjectLinkOverlay />
          {platformMark ? <PlatformMark platformMark={platformMark} /> : null}
        </a>
      ) : (
        <div
          className={cn(
            "group/project relative block w-full overflow-hidden",
            imageAspectClassName ?? "pb-[115%]",
          )}
          data-project-app-card
        >
          <ProjectImage eagerImage={eagerImage} image={image} imageAlt={imageAlt} />
          <Overlay persistent={Boolean(isAppProject)} />
          {isAppProject ? <AppStoreLinks appLinks={appLinks} /> : null}
        </div>
      )}
      <p
        className={cn(
          "mt-5.5 mb-2.25 text-sm leading-[19.6px] font-bold tracking-[1px] text-black/70 uppercase",
          categoryClassName,
        )}
      >
        {category}
      </p>
      <h3 className="font-sans text-lg leading-5 font-bold text-ink capitalize">
        {href ? (
          <a
            className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
            href={href}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
    </article>
  );
}
