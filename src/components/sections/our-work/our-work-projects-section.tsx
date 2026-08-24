import { OurWorkFilterController } from "@/components/sections/our-work/our-work-filter-controller";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import {
  ourWorkPage,
  ourWorkProjects,
  type WorkPlatform,
} from "@/content/our-work";

const projectCounts = {
  all: ourWorkProjects.length,
  shopify: ourWorkProjects.filter((project) => project.platform === "shopify").length,
  wordpress: ourWorkProjects.filter((project) => project.platform === "wordpress").length,
  apps: ourWorkProjects.filter((project) => project.platform === "apps").length,
  magento: ourWorkProjects.filter((project) => project.platform === "magento").length,
  bigCommerce: ourWorkProjects.filter((project) => project.platform === "bigCommerce").length,
} satisfies Record<WorkPlatform, number>;

export function OurWorkProjectsSection() {
  return (
    <section
      className="scroll-mt-20 pt-20 pb-20 max-[991px]:pt-[50px] max-[991px]:pb-[50px]"
      id="our-work-projects"
      aria-labelledby="our-work-projects-title"
    >
      <Container className="max-[575px]:px-4">
        <div className="mb-10 flex items-end justify-between gap-12 max-[991px]:items-start max-[767px]:mb-[30px] max-[767px]:flex-col max-[767px]:gap-4">
          <div className="shrink-0">
            <p className="mb-5 flex items-center text-xs leading-none font-semibold text-ink uppercase before:mr-3 before:h-px before:w-[30px] before:bg-brand-red before:content-['']">
              {ourWorkPage.portfolio.eyebrow}
            </p>
            <h2 className="text-[35px] leading-[1.38] font-medium text-ink max-[991px]:text-[30px] max-[767px]:text-2xl" id="our-work-projects-title">
              {ourWorkPage.portfolio.title}
            </h2>
          </div>
          <p className="max-w-[690px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {ourWorkPage.portfolio.description}
          </p>
        </div>
        <OurWorkFilterController filters={ourWorkPage.filters} counts={projectCounts} />

        <div className="mt-[50px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[991px]:mt-[40px] max-[991px]:gap-y-[30px]">
          {ourWorkProjects.map((project) => (
            <div
              className="w-[calc(25%_-_11.25px)] max-[991px]:w-[calc(50%_-_7.5px)] max-[767px]:w-full"
              data-work-project
              data-work-platform={project.platform}
              key={project.id}
            >
              <PortfolioProjectCard
                appLinks={project.appLinks}
                category={project.category}
                href={project.href}
                image={project.image}
                imageAlt={project.imageAlt}
                name={project.name}
                platformMark={project.platformMark}
                variant="ourWorkRefresh"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
