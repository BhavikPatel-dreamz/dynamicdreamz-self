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
      className={cn(
        "industry-custom-development bg-[#192019] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div className="wrapper mx-auto max-w-[900px]" data-aos="fade-up">
          <div className="title-block">
            {content.eyebrow ? (
              <div className="eyebrow mb-2.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white">
                <span>{content.eyebrow}</span>
              </div>
            ) : null}
            <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              {content.heading}
            </h2>
            <p className="font-sans text-base leading-[30.4px] text-white/90 max-[767px]:text-sm max-[767px]:leading-6">
              {content.description}
            </p>
          </div>
          <div className="list-wrapper mt-8">
            <ul className="industry-list">
              {content.items.map((item, index) => (
                <li
                  className="industry-list__item flex border-t border-white/16 py-4 font-sans text-base leading-[28px] text-white last:border-b last:border-white/16 max-[767px]:text-sm max-[767px]:leading-6"
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
