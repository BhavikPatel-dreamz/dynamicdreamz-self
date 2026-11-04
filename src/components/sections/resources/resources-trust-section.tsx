import { ResourcesCounterGrid } from "@/components/sections/resources/resources-counter-grid";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { resourcesSectionCopy } from "@/content/resources";

export function ResourcesTrustSection() {
  return (
    <section className="trusted-web-sec py-20 max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="resources-trust-title">
      <Container>
        <SplitSectionHeading
          className="mx-auto mb-[70px] max-w-[650px]"
          description={resourcesSectionCopy.trustDescription}
          heading={resourcesSectionCopy.trustTitle}
          headingId="resources-trust-title"
          variant="centered"
        />
        <ResourcesCounterGrid />
      </Container>
    </section>
  );
}
