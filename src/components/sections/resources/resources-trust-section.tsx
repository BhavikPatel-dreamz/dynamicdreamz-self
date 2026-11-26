import {
  ResourcesCounterGrid,
  type AnimatedCounterStat,
} from "@/components/sections/resources/resources-counter-grid";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { resourcesSectionCopy, resourcesStats } from "@/content/resources";

export type ResourcesTrustSectionProps = {
  title?: string;
  description?: string;
  stats?: readonly AnimatedCounterStat[];
};

export function ResourcesTrustSection({
  title = resourcesSectionCopy.trustTitle,
  description = resourcesSectionCopy.trustDescription,
  stats,
}: ResourcesTrustSectionProps = {}) {
  const activeStats = stats && stats.length > 0 ? stats : resourcesStats;

  return (
    <section className="trusted-web-sec py-20 max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="resources-trust-title">
      <Container>
        <SplitSectionHeading
          className="mb-[70px] max-[992px]:mb-[70px] !max-w-[650px]"
          description={description}
          heading={title}
          headingId="resources-trust-title"
          variant="centered"
          pClassName="!font-normal text-[14px]"
        />
        <ResourcesCounterGrid stats={activeStats} />
      </Container>
    </section>
  );
}
