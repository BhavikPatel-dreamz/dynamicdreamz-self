"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  ourWorkPage,
  ourWorkProjects,
  type WorkFilter,
  type WorkPlatform,
  type WorkProject,
} from "@/content/our-work";
import { cn } from "@/lib/class-names";

const projectCounts = {
  all: ourWorkProjects.length,
  shopify: ourWorkProjects.filter((project) => project.platform === "shopify").length,
  wordpress: ourWorkProjects.filter((project) => project.platform === "wordpress").length,
  apps: ourWorkProjects.filter((project) => project.platform === "apps").length,
  magento: ourWorkProjects.filter((project) => project.platform === "magento").length,
  bigCommerce: ourWorkProjects.filter((project) => project.platform === "bigCommerce").length,
} satisfies Record<WorkPlatform, number>;

export type FullPortfolioFilterBlockProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export type OurWorkProjectsSectionProps = FullPortfolioFilterBlockProps;

function ProjectCard({ project }: { project: WorkProject }) {
  const isAppProject = !project.href && project.appLinks && project.appLinks.length > 0;

  return (
    <article data-aos="fade-up">
      {project.href ? (
        <a
          className="group/project block focus-visible:outline-offset-4"
          href={project.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={`View ${project.name} project`}
          data-project-card-link
        >
          <div className="relative block w-full overflow-hidden pb-[115%]">
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              src={project.image}
              alt={project.imageAlt}
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
              {project.category ? (
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {project.category}
                </p>
              ) : null}
              <h3 className="mt-2.5 font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:mt-[3px] max-[1199px]:text-sm max-[1199px]:font-semibold">
                {project.name}
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
          <div className="relative block w-full overflow-hidden pb-[115%]">
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/project:scale-105 group-focus/project:scale-105"
              src={project.image}
              alt={project.imageAlt}
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
            {isAppProject && project.appLinks && (
              <span
                className="absolute right-0 bottom-[30px] left-0 z-2 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover/project:opacity-100 group-focus-within/project:opacity-100 max-[1199px]:opacity-100 max-[575px]:bottom-[15px]"
                data-project-app-links
              >
                {project.appLinks.map((link, idx) => (
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
              {project.category ? (
                <p className="text-xs leading-4 font-semibold tracking-[1px] text-brand-red uppercase max-[1199px]:text-[10px]">
                  {project.category}
                </p>
              ) : null}
              <h3 className="mt-2.5 font-sans text-lg leading-5 font-bold text-ink capitalize max-[1199px]:mt-[3px] max-[1199px]:text-sm max-[1199px]:font-semibold">
                {project.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function FullPortfolioFilterBlock({
  eyebrow = ourWorkPage.portfolio.eyebrow,
  title = ourWorkPage.portfolio.title,
  description = ourWorkPage.portfolio.description,
}: FullPortfolioFilterBlockProps = {}) {
  const [activeFilter, setActiveFilter] = useState<WorkPlatform>("all");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  const updateIndicator = useCallback(() => {
    const activeButton = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-work-filter="${activeFilter}"]`,
    );

    if (!activeButton) return;
    const left = activeButton.offsetLeft;
    const width = activeButton.offsetWidth;
    setIndicator((current) =>
      current.left === left && current.width === width ? current : { left, width },
    );
  }, [activeFilter]);

  useEffect(() => {
    let frame = 0;
    function scheduleUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateIndicator();
      });
    }

    scheduleUpdate();
    const list = listRef.current;
    if (!list) return;

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(list);
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [updateIndicator]);

  const filteredProjects =
    activeFilter === "all"
      ? ourWorkProjects
      : ourWorkProjects.filter((project) => project.platform === activeFilter);

  return (
    <section
      className="scroll-mt-20 pt-20 pb-20 max-[992px]:pt-[50px] max-[992px]:pb-[50px]"
      id="our-work-projects"
      aria-labelledby="our-work-projects-title"
    >
      <Container>
        <div data-aos="fade-up" className="mb-10 flex items-end justify-between gap-12 max-[992px]:items-start max-[767px]:mb-[30px] max-[767px]:flex-col max-[767px]:gap-4">
          <div className="shrink-0">
            {eyebrow && (
              <div className="mb-5 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-brand-red" />
                <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-montreal-medium text-[35px] leading-[1.38] font-normal text-ink max-[992px]:text-[30px] max-[767px]:text-2xl" id="our-work-projects-title">
              {title}
            </h2>
          </div>
          <p className="max-w-[690px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {description}
          </p>
        </div>

        <div>
          <div className="w-full">
            <div className="our-work-category w-full min-w-full max-[767px]:p-0">
              <ul
                className="relative flex w-full gap-2 overflow-x-auto max-[992px]:whitespace-nowrap"
                id="category_filter"
                ref={listRef}
                aria-label="Filter projects by platform"
              >
                {ourWorkPage.filters.map((filter) => (
                  <li className="shrink-0" key={filter.id}>
                    <button
                      className="relative z-1 cursor-pointer rounded-[30px] border border-black/15 bg-transparent px-5 py-[10px] text-xs leading-[normal] font-bold tracking-[.45px] whitespace-nowrap uppercase transition-colors duration-300 max-[767px]:px-4"
                      data-work-filter={filter.id}
                      type="button"
                      aria-pressed={activeFilter === filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      <span className={activeFilter === filter.id ? "text-white" : "text-[#090909]"}>
                        {filter.label}
                      </span>
                    </button>
                  </li>
                ))}
                <li
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 bottom-0 z-0 rounded-[25px] bg-brand-red transition-[width,left] duration-300 ease-in-out"
                  style={{ left: indicator.left, width: indicator.width }}
                />
              </ul>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {ourWorkPage.ui.showing} {projectCounts[activeFilter]} {projectCounts[activeFilter] === 1 ? ourWorkPage.ui.project : ourWorkPage.ui.projects}.
          </p>
        </div>

        <div className="mt-[50px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[992px]:mt-[40px] max-[992px]:gap-y-[30px]">
          {filteredProjects.map((project) => (
            <div
              data-aos="fade-up"
              className="w-[calc(25%_-_11.25px)] max-[1199px]:w-[calc(33.333%_-_10px)] max-[992px]:w-[calc(50%_-_7.5px)] max-[767px]:w-full"
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export const OurWorkProjectsSection = FullPortfolioFilterBlock;
