import { ResourcesCounterGrid } from "@/components/sections/resources/resources-counter-grid";
import { Container } from "@/components/ui/container";
import { resourcesSectionCopy } from "@/content/resources";

export function ResourcesTrustSection() {
  return (
    <section className="trusted-web-sec py-20 max-[992px]:py-[50px]" aria-labelledby="resources-trust-title">
      <Container>
        <div className="resources-trust-intro mx-auto mb-[70px] max-w-[650px] text-center">
          <h2 id="resources-trust-title" className="mb-3 text-[35px] leading-[49px] font-normal tracking-normal text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-[24px] max-[767px]:leading-[33.24px]">{resourcesSectionCopy.trustTitle}</h2>
          <p className="text-muted">{resourcesSectionCopy.trustDescription}</p>
        </div>
        <ResourcesCounterGrid />
      </Container>
    </section>
  );
}
