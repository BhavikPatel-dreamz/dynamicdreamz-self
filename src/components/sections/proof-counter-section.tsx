import { ResourcesCounterGrid } from "@/components/sections/resources/resources-counter-grid";
import type { AnimatedCounterStat } from "@/components/sections/resources/resources-counter-grid";
import { Container } from "@/components/ui/container";

export type ProofCounterContent = {
  heading: string;
  description: string;
  stats: readonly AnimatedCounterStat[];
};

type ProofCounterSectionProps = {
  content: ProofCounterContent;
};

export function ProofCounterSection({ content }: ProofCounterSectionProps) {
  return (
    <section
      className="py-20 max-[767px]:pt-[30px] max-[767px]:pb-[60px]"
      aria-labelledby="proof-counter-title"
    >
      <Container>
        <div className="mx-auto mb-[70px] max-w-[650px] text-center max-[1199px]:mb-[50px] max-[767px]:mb-[45px]">
          <h2
            className="mb-3 font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[767px]:mx-auto max-[767px]:max-w-[290px] max-[575px]:text-[22px] max-[575px]:leading-8"
            id="proof-counter-title"
          >
            {content.heading}
          </h2>
          <p className="text-base leading-[30px] font-medium text-muted">
            {content.description}
          </p>
        </div>
        <ResourcesCounterGrid stats={content.stats} />
      </Container>
    </section>
  );
}
