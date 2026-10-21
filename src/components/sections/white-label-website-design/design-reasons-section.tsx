import { DesignReasonsAccordion } from "@/components/sections/white-label-website-design/design-reasons-accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import type { WhiteLabelCard } from "@/types/white-label-service";

export type DesignReasonsSectionProps = {
  title: string;
  description: string;
  items: readonly WhiteLabelCard[];
  className?: string;
};

export function DesignReasonsSection({
  title,
  description,
  items,
  className,
}: DesignReasonsSectionProps) {
  return (
    <section
      className={cn(
        "white_label_wp_development_service_accordion_section website-design bg-[#fafaf7] py-[60px] max-[767px]:py-10",
        className,
      )}
    >
      <Container className="max-[575px]:px-4">
        <div className="flex items-center justify-between gap-[60px] max-[992px]:flex-col max-[992px]:items-stretch max-[992px]:gap-5">
          <div data-aos="fade-up" className="w-[47%] max-[992px]:w-full">
            <h2 className="mb-[15px] font-display text-[35px] leading-[1.38] font-normal tracking-normal text-ink max-[992px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]">
              {title}
            </h2>
            <p className="text-base font-medium leading-[1.9] text-muted">
              {description}
            </p>
          </div>
          <div className="w-[47%] max-[992px]:w-full">
            <DesignReasonsAccordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
