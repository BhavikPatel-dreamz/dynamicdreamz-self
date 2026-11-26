import { OurWorkFilterController } from "@/components/sections/our-work/our-work-filter-controller";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import {
  ourWorkPage,
  ourWorkProjects,
  type WorkFilter,
  type WorkPlatform,
  type WorkProject,
} from "@/content/our-work";

function buildProjectCounts(
  items: readonly WorkProject[],
): Record<WorkPlatform, number> {
  return {
    all: items.length,
    shopify: items.filter((project) => project.platform === "shopify").length,
    wordpress: items.filter((project) => project.platform === "wordpress").length,
    apps: items.filter((project) => project.platform === "apps").length,
    magento: items.filter((project) => project.platform === "magento").length,
    bigCommerce: items.filter((project) => project.platform === "bigCommerce").length,
  };
}

export type OurWorkProjectsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  filters?: readonly WorkFilter[];
  projects?: readonly WorkProject[];
};

export function OurWorkProjectsSection({
  eyebrow = ourWorkPage.portfolio.eyebrow,
  title = ourWorkPage.portfolio.title,
  description = ourWorkPage.portfolio.description,
  filters: customFilters,
  projects: customProjects,
}: OurWorkProjectsSectionProps = {}) {
  const activeFilters =
    customFilters && customFilters.length > 0 ? customFilters : ourWorkPage.filters;
  const activeProjects =
    customProjects && customProjects.length > 0 ? customProjects : ourWorkProjects;
  const projectCounts = buildProjectCounts(activeProjects);

  return (
    <section
      className="scroll-mt-20 py-20 max-[992px]:py-15 max-[768px]:py-10"
      id="our-work-projects"
      aria-labelledby="our-work-projects-title"
    >
      <Container>
        <SplitSectionHeading
          description={description}
          eyebrow={eyebrow}
          heading={title}
          headingId="our-work-projects-title"
          variant="left"
        />
        <OurWorkFilterController filters={activeFilters} counts={projectCounts} />

        <div className="mt-[50px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[992px]:mt-[40px] max-[992px]:gap-y-[30px] max-[768px]:gap-x-[10px] max-[768px]:gap-y-5">
          {activeProjects.map((project) => (
            <div
              data-aos="fade-up"
              className="w-[calc(25%_-_11.25px)] max-[1200px]:w-[calc(33.333%_-_10px)] max-[992px]:w-[calc(50%_-_7.5px)] max-[768px]:w-[calc(50%_-_5px)]"
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
