import Image from "next/image";

import { Container } from "@/components/ui/container";
import { workCulture } from "@/content/life-dynamicdreamz";
import { cn } from "@/lib/class-names";

export function WorkCultureSection() {
  return (
    <section
      className="pt-20 pb-0 max-[992px]:pt-[50px]"
      data-life="culture"
      aria-labelledby="work-culture-title"
    >
      <Container>
        <header className="mx-auto mb-[50px] max-w-[620px] text-center max-[1199px]:mb-[30px]">
          <h2
            className="mb-2 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id="work-culture-title"
          >
            {workCulture.title}
          </h2>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
            {workCulture.description}
          </p>
        </header>

        <div
          className="flex flex-wrap rounded-[10px] border-[1.3px] border-[#efefef] max-[767px]:border-0"
          data-life="culture-grid"
        >
          {workCulture.values.map((value, index) => (
            <article
              className={cn(
                "w-1/2 border-[#efefef] transition-shadow duration-300 hover:shadow-[-10px_4px_30px_rgba(0,38,31,0.06)] max-[992px]:w-full max-[767px]:rounded-[10px] max-[767px]:!border-[1.3px]",
                index % 2 === 0 && "border-r-[1.3px]",
                index < workCulture.values.length - 2 && "border-b-[1.3px]",
                index === workCulture.values.length - 2 &&
                  "max-[992px]:border-b-[1.3px]",
                index < workCulture.values.length - 1 &&
                  "max-[767px]:mb-[15px]",
              )}
              data-life="culture-card"
              key={value.title}
            >
              <div
                className={cn(
                  "flex h-full bg-white py-[30px] pr-8 pl-[49px] max-[1199px]:p-[30px] max-[767px]:flex-col max-[767px]:rounded-[10px] max-[767px]:p-5 max-[767px]:text-center",
                  index === 0 && "rounded-tl-[10px]",
                  index === 1 && "rounded-tr-[10px]",
                  index === workCulture.values.length - 2 &&
                    "rounded-bl-[10px]",
                  index === workCulture.values.length - 1 &&
                    "rounded-br-[10px]",
                )}
                data-life="culture-card-inner"
              >
                <div className="mr-[30px] w-[85px] shrink-0 max-[1199px]:mr-5 max-[1199px]:min-h-[74.41px] max-[1199px]:w-16 max-[767px]:!mx-auto">
                  <Image
                    className="h-auto max-w-full"
                    src={value.icon}
                    alt={value.alt}
                    width={85}
                    height={85}
                  />
                </div>
                <div className="w-[calc(100%-115px)] max-[1199px]:w-[calc(100%-84px)] max-[767px]:w-full">
                  <h3 className="mb-[5px] text-xl leading-[28.8px] font-bold text-ink max-[992px]:text-[18px] max-[992px]:leading-[26px]">
                    {value.title}
                  </h3>
                  <p className="text-base leading-[30.88px] font-normal text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
