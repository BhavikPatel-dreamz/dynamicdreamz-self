import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type IndustryCustomDevelopmentContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly string[];
};

export type IndustryCustomDevelopmentSectionProps = {
  content: IndustryCustomDevelopmentContent;
  className?: string;
  id?: string;
};

export function IndustryCustomDevelopmentSection({
  content,
  className,
  id,
}: IndustryCustomDevelopmentSectionProps) {
  return (
    <section
      className={cn("industry-custom-development bg-[#192019] py-20", className)}
      id={id}
    >
      <Container>
        <div className="wrapper mx-auto max-w-[900px]" data-aos="fade-up">
          <div className="title-block">
            {content.eyebrow ? (
              <div className="eyebrow mb-6 relative pl-10 font-sans">
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[2px] bg-[#AD5151]"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold uppercase tracking-normal text-white">
                  {content.eyebrow}
                </span>
              </div>
            ) : null}
            <h2 className="mb-4 font-display font-medium text-[35px] leading-[1.4] tracking-normal text-white max-[992px]:text-[30px] max-[992px]:leading-[1.4] max-[767px]:text-2xl max-[767px]:leading-[1.4]">
              {content.heading}
            </h2>
            <p className="font-sans text-sm leading-6 text-white max-[767px]:text-sm max-[767px]:leading-6">
              {content.description}
            </p>
          </div>
          <div className="list-wrapper mt-8">
            <ul className="industry-list" role="list">
              {content.items.map((item, index) => (
                <li
                  className="industry-list__item flex border-t border-white/16 py-4 font-sans text-sm leading-6 text-white last:border-b last:border-white/16"
                  data-aos="fade-up"
                  key={index}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}