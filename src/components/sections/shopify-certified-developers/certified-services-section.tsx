import { SplitSectionHeading } from "@/components/sections/shopify-certified-developers/split-section-heading";
import { Container } from "@/components/ui/container";
import { certifiedDeveloperServices } from "@/content/shopify-certified-developers";
import { cn } from "@/lib/class-names";

type CertifiedServicesSectionProps = {
  content?: typeof certifiedDeveloperServices;
};

export function CertifiedServicesSection({
  content = certifiedDeveloperServices,
}: CertifiedServicesSectionProps) {
  return (
    <section
      className="pt-20 pb-20 max-[991px]:py-[50px]"
      aria-labelledby="certified-shopify-services-title"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] items-start max-[991px]:mb-[30px]"
          description={content.description}
          heading={content.heading}
          headingId="certified-shopify-services-title"
          textClassName="w-[43%]"
          titleClassName="w-[52%]"
        />
        <div className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[575px]:grid-cols-1">
          {content.items.map((item, index) => (
            <article
              className={cn(
                "h-full rounded-[20px] p-[40px_30px] max-[991px]:p-[30px_20px] max-[575px]:rounded-[10px]",
                index % 2 === 0 ? "bg-[#f7f4e9]" : "bg-[#fafaf7]",
              )}
              key={item.title}
            >
              <span className="mb-5 inline-block rounded-[5px] bg-brand-red/10 px-2.5 py-[5px] text-xs leading-[18px] font-bold text-brand-red">
                {item.eyebrow}
              </span>
              <h3 className="mb-[15px] text-lg leading-[27px] font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-base leading-[30.4px] font-medium text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
