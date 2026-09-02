import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type CityWhyChooseBoxItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type CityWhyChooseBoxesContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly CityWhyChooseBoxItem[];
};

export type CityWhyChooseBoxesSectionProps = {
  content: CityWhyChooseBoxesContent;
  className?: string;
  id?: string;
};

export function CityWhyChooseBoxesSection({
  content,
  className,
  id,
}: CityWhyChooseBoxesSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "city-page-why-choose-boxes bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
        className,
      )}
    >
      <Container>
        <div className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4">
          <div className="title max-w-[620px]">
            {content.eyebrow && (
              <div className="eyebrow mb-3">
                <span className="inline-block rounded-[30px] border border-[rgba(40,40,40,0.12)] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.5px] text-[#4d5577]">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {content.heading}
            </h2>
          </div>
          <div className="section_text max-w-[560px]">
            <p className="text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {content.description}
            </p>
          </div>
        </div>

        <div className="why-choose-box-main">
          <div className="wrapper grid grid-cols-5 gap-[15px] max-[1199px]:grid-cols-3 max-[767px]:grid-cols-1">
            {content.items.map((item) => (
              <div
                key={item.title}
                className="why-choose-box flex flex-col justify-start rounded-[18px] border border-[rgba(40,40,40,0.06)] bg-white p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="why-choose-box-text">
                  <div className="mb-2.5 size-6">
                    <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                    />
                  </div>
                  <h3 className="mb-2 font-sans text-base font-bold leading-[24px] text-ink">
                    {item.title}
                  </h3>
                  <p className="m-0 text-sm font-medium leading-[22px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
