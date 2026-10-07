import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type TechnologyCategoryItem = {
  category: string;
  technologies: readonly string[];
};

export type TechnologiesWorkWithContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  categories: readonly TechnologyCategoryItem[];
};

export type TechnologiesWorkWithSectionProps = {
  content: TechnologiesWorkWithContent;
  className?: string;
  id?: string;
};

export function TechnologiesWorkWithSection({
  content,
  className,
  id,
}: TechnologiesWorkWithSectionProps) {
  return (
    <section
      className={cn(
        "technologies_we_work_with_section bg-[#EFF4EF] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-10 gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div data-aos="fade-up" className="technologies-wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap">
          {content.categories.map((col) => (
            <div
              data-aos="fade-up"
              className="technologies-col mb-[15px] w-1/4 px-[7.5px] max-[1199px]:w-1/2 max-[767px]:w-full"
              key={col.category}
            >
              <div className="technologies-item h-full rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[30px_25px] max-[991px]:rounded-[16px] max-[991px]:p-5">
                <h3 className="mb-[25px] font-sans text-[20px] font-medium leading-[132%] text-[#AD5151] max-[991px]:mb-[15px] max-[991px]:text-[18px]">
                  {col.category}
                </h3>
                <div className="item-list flex flex-wrap gap-2.5">
                  {col.technologies.map((tech) => (
                    <span
                      className="block rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] p-[12px_10px] text-center font-sans text-sm font-semibold leading-none text-[#282828] shadow-[2px_2px_0_0_rgba(40,40,40,0.20)] max-[991px]:rounded-[6px] max-[991px]:p-[8px_8px] max-[991px]:text-[11px]"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
