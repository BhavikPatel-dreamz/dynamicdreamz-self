import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ourWorkCaseStudies, ourWorkPage } from "@/content/our-work";

export function OurWorkCaseStudiesSection() {
  return (
    <section className="bg-[#eff4ef] py-20 max-[991px]:py-10" aria-labelledby="our-work-case-studies-title">
      <Container className="max-[575px]:px-4">
        <div className="mb-10 flex items-end justify-between gap-12 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-4">
          <div className="shrink-0">
            <p className="mb-5 flex items-center text-xs leading-none font-semibold text-ink uppercase before:mr-3 before:h-px before:w-[30px] before:bg-brand-red before:content-['']">
              {ourWorkPage.caseStudies.eyebrow}
            </p>
            <h2 className="max-w-[520px] text-[35px] leading-[1.38] font-medium text-ink max-[991px]:text-[30px] max-[767px]:text-2xl" id="our-work-case-studies-title">
              {ourWorkPage.caseStudies.title}
            </h2>
          </div>
          <p className="max-w-[625px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {ourWorkPage.caseStudies.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {ourWorkCaseStudies.map((item) => (
            <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_28px_rgb(0_0_0/5%)]" key={item.slug}>
              <Link className="flex h-full flex-col focus-visible:outline-offset-4" href={`/case-studies/${item.slug}`}>
                <span className="relative block shrink-0 overflow-hidden pb-[73.7%]">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 30px), 430px"
                  />
                </span>
                <span className="flex flex-1 flex-col p-6 max-[1199px]:p-5">
                  <span className="mb-2 block text-[10px] font-bold tracking-[.8px] text-brand-red uppercase">
                    {item.category}
                  </span>
                  <span className="block text-xl leading-[1.4] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-red">
                    {item.title}
                  </span>
                  <span className="mt-2.5 block text-[13px] leading-[1.75] font-medium text-muted">
                    {item.excerpt}
                  </span>
                  <span className="mt-5 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold text-ink" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </span>
                  <span className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 rounded-[30px] bg-brand-red px-5 py-3 text-sm font-bold text-white">
                      {ourWorkPage.ui.viewCaseStudy}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
