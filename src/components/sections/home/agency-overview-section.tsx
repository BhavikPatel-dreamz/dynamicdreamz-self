import Image from "next/image";

import styles from "@/components/sections/home/agency-overview-section.module.css";
import { Container } from "@/components/ui/container";
import { companyStats, showcaseImages } from "@/content/home";
import { cn } from "@/lib/class-names";

const showcaseItemClass =
  "flex shrink-0 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991px]:h-[227px] max-[991px]:rounded-[10px] max-[767px]:h-52 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top";

function ShowcaseSet({ decorative = false }: { decorative?: boolean }) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-col gap-6 max-[991px]:mt-0 max-[991px]:flex-row max-[991px]:gap-4 max-[991px]:pr-6",
        styles.showcaseMotion,
      )}
      aria-hidden={decorative || undefined}
    >
      <div className={cn(showcaseItemClass, "max-[991px]:w-[342px]")}>
        <Image
          src={showcaseImages[0].src}
          alt={decorative ? "" : showcaseImages[0].alt}
          width={showcaseImages[0].width}
          height={showcaseImages[0].height}
          sizes="(max-width: 767px) 362px, 548px"
        />
      </div>
      <div className="flex shrink-0 justify-between gap-[17px] overflow-visible max-[991px]:w-[227px] max-[767px]:h-52">
        {[showcaseImages[1], showcaseImages[2]].map((image) => (
          <span className="flex flex-1 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991px]:w-[105px] max-[991px]:shrink-0 max-[991px]:basis-[105px] max-[991px]:rounded-[10px] [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top" key={image.src}>
            <Image
              src={image.src}
              alt={decorative ? "" : image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 767px) 105px, 266px"
            />
          </span>
        ))}
      </div>
      {showcaseImages.slice(3).map((image) => (
        <div className={cn(showcaseItemClass, "max-[991px]:w-[342px]")} key={image.src}>
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 362px, 548px"
          />
        </div>
      ))}
    </div>
  );
}

export function AgencyOverviewSection() {
  return (
    <section className="agency_overview_section">
      <Container home>
        <div className="global_agency_col_wrap flex justify-between overflow-hidden rounded-[30px] bg-pale-blue min-[768px]:max-[991px]:flex-col max-[767px]:flex-col max-[767px]:rounded-[20px]">
          <div className="content_left_section mx-[37px] ml-15 w-[492px] shrink-0 py-[105px] max-[1199px]:ml-5 max-[1199px]:w-[44%] max-[1199px]:basis-[44%] max-[991px]:m-0 max-[991px]:w-full max-[991px]:px-[25px] max-[991px]:py-[50px] max-[767px]:px-[17px] max-[767px]:pt-[35px] max-[767px]:pb-[63px]">
            <h2 className="mb-6 text-[35px] leading-[1.385] font-medium min-[768px]:max-[991px]:text-[30px] min-[768px]:max-[991px]:leading-10 min-[768px]:max-[991px]:tracking-[-0.7px] max-[767px]:text-2xl max-[767px]:leading-[1.24]">Globally Trusted Web &amp; App Development Agency</h2>
            <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
              With sharp custom design, smooth development, and long-term support, build a brand that scales worldwide.
            </p>
            <ul className="counter_number_wrap relative mx-[-15px] mt-[53px] -mb-[46px] flex flex-wrap justify-between list-none p-0 before:absolute before:top-[calc(50%-16px)] before:left-0 before:z-[2] before:h-px before:w-full before:bg-[linear-gradient(90deg,transparent,#282828,transparent)] before:opacity-20 before:content-[''] after:absolute after:top-0 after:left-1/2 after:z-[2] after:h-full after:w-px after:bg-[linear-gradient(0deg,transparent,#282828,transparent)] after:opacity-20 after:content-[''] max-[767px]:mt-6">
              {companyStats.map((stat) => (
                <li className="col_item mx-[15px] mb-[46px] flex w-[calc(50%-30px)] max-w-[161px] flex-col items-start lg:justify-center justify-start max-[991px]:w-[calc(50%-40px)] max-[991px]:max-w-[50%]" key={stat.value}>
                  <Image className="mb-3 h-[42px] w-[42px] max-[767px]:h-[35px] max-[767px]:w-[35px]" src={stat.icon} alt="" width={42} height={42} aria-hidden="true" />
                  <strong className="text-[40px] leading-[1.15] font-extrabold text-black max-[1199px]:text-[34px] min-[768px]:max-[991px]:text-[40px] max-[767px]:text-[32px]">{stat.value}</strong>
                  <p className="text-base leading-[1.24] font-semibold text-black max-[767px]:text-sm">
                    {stat.label.map((line, index) => (
                      <span key={line}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="scrolling_img_wrap relative w-3/5 max-w-[731px] shrink-0 basis-3/5 overflow-hidden max-[991px]:h-[277px] max-[991px]:w-full max-[991px]:max-w-none max-[991px]:basis-[277px] max-[991px]:pb-[50px] max-[767px]:h-[258px] max-[767px]:basis-[258px]">
            <div className="absolute top-0 left-0 flex w-full flex-col px-[68px] max-[991px]:static max-[991px]:h-[227px] max-[991px]:w-max max-[991px]:flex-row max-[991px]:p-0 max-[767px]:h-52">
              <ShowcaseSet />
              <ShowcaseSet decorative />
              <ShowcaseSet decorative />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
