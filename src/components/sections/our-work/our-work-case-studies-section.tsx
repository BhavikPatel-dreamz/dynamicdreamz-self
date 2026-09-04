import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ourWorkCaseStudies, ourWorkPage } from "@/content/our-work";

export function OurWorkCaseStudiesSection() {
  return (
    <section
      className="see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-10 max-[767px]:py-10"
      aria-labelledby="our-work-case-studies-title"
    >
      <Container className="max-[575px]:px-4">
        <div className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between max-[992px]:mb-[30px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-4">
          <div className="title w-[44%] max-[1399px]:w-[35%] max-[1199px]:w-[36%] max-[992px]:w-full">
            <Eyebrow className="mb-3.75 max-[767px]:mb-5" tone="muted">
              {ourWorkPage.caseStudies.eyebrow}
            </Eyebrow>
            <h2
              className="m-0 font-montserrat text-[35px] font-bold leading-[1.38] text-[#090909] max-[1199px]:text-[28px] max-[992px]:mb-2.5 max-[767px]:text-2xl"
              id="our-work-case-studies-title"
            >
              {ourWorkPage.caseStudies.title}
            </h2>
          </div>
          <div className="text w-[49%] max-[1399px]:w-[56%] max-[1199px]:w-[51%] max-[992px]:w-full">
            <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-[#535353] max-[992px]:text-sm max-[992px]:leading-[26px]">
              {ourWorkPage.caseStudies.description}
            </p>
          </div>
        </div>

        <div className="cs-listing-main three-col flex flex-wrap justify-between gap-y-5">
          {ourWorkCaseStudies.map((item) => (
            <article
              className="cs-listing-row flex w-[calc(33.333%_-_14px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[992px]:w-[calc(50%_-_10px)] max-[767px]:w-full"
              key={item.slug}
            >
              <div className="cs-wrapper flex h-full flex-col">
                <div className="cs-col-left">
                  <Link
                    className="cs_list_img relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
                    href={`/case-studies/${item.slug}`}
                    aria-label={`View ${item.title} case study`}
                  >
                    <Image
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 410px"
                    />
                  </Link>
                </div>
                <div className="cs-col-right flex flex-1 flex-col p-5 max-[767px]:p-[15px]">
                  <div className="cs-text flex h-full flex-col justify-between">
                    <div className="cs-title">
                      <Link
                        className="group/title block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                        href={`/case-studies/${item.slug}`}
                      >
                        <div className="cs-cate-wrapp mb-2.5">
                          <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151]">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="mb-3.5 font-montserrat text-xl font-semibold leading-[1.4] tracking-[-.48px] text-[#090909] line-clamp-2 transition-colors group-hover/title:text-[#ad5151]">
                          {item.title}
                        </h3>
                      </Link>
                      <div className="cs-meta mt-4 flex flex-wrap gap-2">
                        {item.chips.map((chip) => (
                          <span
                            className="cs-chip inline-flex items-center rounded-full border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] text-[10px] font-semibold uppercase leading-none text-[#565656]"
                            key={chip}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="cs-visit mt-5 border-t border-[rgba(40,40,40,0.08)] pt-5">
                      <Link
                        className="group/visit inline-flex items-center gap-2 font-montserrat text-sm font-bold uppercase text-[#ad5151] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad5151]"
                        href={`/case-studies/${item.slug}`}
                      >
                        {ourWorkPage.ui.viewCaseStudy}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 12 12"
                          className="size-3 transition-transform group-hover/visit:translate-x-1"
                        >
                          <path
                            d="m.33 10.26 11.34-9.26M11.99 2.05 11.05 11.04M11.99 2.05 2.07 1.53"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
