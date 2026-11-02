import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { AnimatedProofCounters } from "@/components/sections/animated-proof-counters";
import { cn } from "@/lib/class-names";

export type AnimatedCounterStat = {
  value: number | string;
  suffix?: string;
  label: string;
};

export type ProofCounterSectionContent = {
  heading?: string;
  description?: string;
  eyebrow?: string;
  stats?: readonly AnimatedCounterStat[];
  items?: readonly ProofCounterItem[];
};

export type ProofCounterItem = {
  value: string | number;
  label: string;
  subLabel?: string;
};

export type ProofCounterSectionProps = {
  content?: ProofCounterSectionContent;
  className?: string;
};

export function ProofCounterSection({
  content = {},
  className,
}: ProofCounterSectionProps = {}) {
  const safeContent = content || {};

  if (safeContent.stats && safeContent.stats.length > 0) {
    return (
      <section
        className={cn("py-20 max-[991px]:py-[50px] max-[767px]:pt-[30px] max-[767px]:pb-[60px]", className)}
        aria-labelledby="proof-counter-title"
      >
        <Container>
          {(safeContent.heading || safeContent.description) && (
            <div
              data-aos="fade-up"
              className="mx-auto mb-[70px] max-w-[650px] text-center max-[1199px]:mb-[50px] max-[767px]:mb-[45px]"
            >
              {safeContent.heading && (
                <h2
                  className="mb-3 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mx-auto max-[767px]:max-w-[290px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]"
                  id="proof-counter-title"
                >
                  {safeContent.heading}
                </h2>
              )}
              {safeContent.description && (
                <p className="text-base font-medium leading-[30px] text-muted">
                  {safeContent.description}
                </p>
              )}
            </div>
          )}
          <AnimatedProofCounters stats={safeContent.stats} />
        </Container>
      </section>
    );
  }

  const items = safeContent.items || [];

  return (
    <section className={cn("city-page-counter py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        {(safeContent.heading || safeContent.description) && (
          <SplitSectionHeading
            description={safeContent.description}
            eyebrow={safeContent.eyebrow}
            heading={safeContent.heading || ""}
            textColumnClassName="max-w-[560px]"
            titleColumnClassName="max-w-[620px]"
            variant="left"
          />
        )}

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "counter-box relative flex w-1/4 flex-col justify-center border-r border-[#d9d9d9] px-6 py-4 last:border-r-0 max-[991px]:w-1/2 max-[991px]:border-b max-[991px]:py-6 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:border-[#d9d9d9] max-[767px]:py-5 max-[767px]:px-0",
                "max-[767px]:last:border-b-0",
                idx % 2 === 1 && "max-[991px]:border-r-0",
                idx >= items.length - 2 && "max-[991px]:border-b-0",
              )}
            >
              <div className="counter-number mb-1 font-montreal-medium text-[50px] font-normal leading-[1.1] text-brand-red max-[1199px]:text-[40px] max-[767px]:text-[32px]">
                {item.value}
              </div>
              <div className="counter-label font-montserrat text-base font-semibold leading-[1.4] text-ink max-[767px]:text-sm">
                {item.label}
              </div>
              {item.subLabel && (
                <div className="counter-sublabel mt-1 text-xs text-muted">
                  {item.subLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
