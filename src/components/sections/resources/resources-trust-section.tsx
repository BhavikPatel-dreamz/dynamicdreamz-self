import { ResourcesCounterGrid } from "@/components/sections/resources/resources-counter-grid";
import { Container } from "@/components/ui/container";

export function ResourcesTrustSection() {
  return (
    <section className="trusted-web-sec py-20 max-[991px]:py-[50px]" aria-labelledby="resources-trust-title">
      <Container>
        <div className="resources-trust-intro mx-auto mb-[70px] max-w-[650px] text-center">
          <h2 id="resources-trust-title" className="mb-3 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-[24px] max-[767px]:leading-[33.24px]">A Trusted Web &amp; Mobile Development Company Since 2006</h2>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[991px]:text-[16px] max-[991px]:leading-[30.4px]">From web designs to custom web development, we work with cutting edge web technology and framework.</p>
        </div>
        <ResourcesCounterGrid />
      </Container>
    </section>
  );
}
