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
        className={cn("py-20 max-[992px]:py-[50px] max-[768px]:pt-[30px] max-[768px]:pb-[60px]", className)}
        aria-labelledby="proof-counter-title"
      >
        <Container>
          {(safeContent.heading || safeContent.description) && (
            <div
              data-aos="fade-up"
              className="mx-auto mb-[70px] max-w-[650px] text-center max-[1200px]:mb-[50px] max-[768px]:mb-[45px]"
            >
              {safeContent.heading && (
                <h2
                  className="mb-3 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1200px]:text-[30px] max-[1200px]:leading-10 max-[768px]:mx-auto max-[768px]:max-w-[290px] max-[768px]:text-2xl max-[768px]:leading-[33.24px]"
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
    <section className={cn("city-page-counter py-20 max-[992px]:py-[50px]", className)}>
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
                "counter-box relative flex w-1/4 flex-col justify-center border-r border-[#d9d9d9] px-6 py-4 last:border-r-0 max-[992px]:w-1/2 max-[992px]:border-b max-[992px]:py-6 max-[768px]:w-full max-[768px]:border-r-0 max-[768px]:border-b max-[768px]:border-[#d9d9d9] max-[768px]:py-5 max-[768px]:px-0",
                "max-[768px]:last:border-b-0",
                idx % 2 === 1 && "max-[992px]:border-r-0",
                idx >= items.length - 2 && "max-[992px]:border-b-0",
              )}
            >
              <div className="counter-number mb-1 font-montreal-medium text-[50px] font-normal leading-[1.1] text-brand-red max-[1200px]:text-[40px] max-[768px]:text-[32px]">
                {item.value}
              </div>
              <div className="counter-label font-montserrat text-base font-semibold leading-[1.4] text-ink max-[768px]:text-sm">
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
