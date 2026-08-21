import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { CaseStudyDetail } from "@/types/case-study";

type CaseStudyDetailHeroProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyDetailHero({ caseStudy }: CaseStudyDetailHeroProps) {
  const facts = [
    { label: "Industry", value: caseStudy.industry },
    { label: "Technology", value: caseStudy.technology },
    { label: "Location", value: caseStudy.location },
  ];

  return (
    <section className="relative pt-[190px] max-[991px]:pt-[140px]" aria-labelledby="case-study-title">
      <Container className="max-[575px]:px-5">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 rounded-sm text-[16px] font-bold text-[#15190f] transition-colors duration-300 hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-5"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M19 6.75a.75.75 0 0 0 0-1.5v1.5ZM.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 0 0 1.06-1.06L2.061 6l4.242-4.243A.75.75 0 1 0 5.243.697L.47 5.47ZM19 5.25H1v1.5h18v-1.5Z"
              fill="currentColor"
            />
          </svg>
          Go back
        </Link>
      </Container>

      <div className="relative mt-10 before:absolute before:top-1/2 before:right-0 before:-z-10 before:h-[550px] before:w-1/3 before:-translate-y-1/2 before:rounded-l-[20px] before:bg-[linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] before:opacity-10 before:content-[''] max-[1199px]:before:h-[470px] max-[991px]:before:hidden">
        <Container className="max-[575px]:px-5">
          <div className="grid grid-cols-[47%_50%] items-center justify-between gap-[3%] max-[991px]:flex max-[991px]:flex-col-reverse max-[991px]:gap-0">
            <div className="max-[991px]:mt-10 max-[991px]:w-full">
              <h1
                id="case-study-title"
                className="mb-[22px] font-montserrat text-[38px] font-bold leading-[48px] tracking-[-0.76px] text-[#282828] max-[1199px]:text-[30px] max-[1199px]:leading-normal max-[767px]:mb-4 max-[767px]:text-[30px]"
              >
                {caseStudy.title}
              </h1>
              <p className="text-[16px] font-medium leading-[30.4px] text-[#535353]">
                {caseStudy.summary}
              </p>
              <dl className="mt-7 flex flex-wrap items-start max-[767px]:mt-5 max-[767px]:block">
                {facts.map((fact) => (
                  <div
                    className="mb-5 w-fit border-t border-[#efefef] pt-8 pr-[46px] last:pr-0 max-[1199px]:pr-[25px] max-[767px]:mb-0 max-[767px]:w-full max-[767px]:py-[15px] max-[767px]:pr-0 max-[767px]:last:pb-0"
                    key={fact.label}
                  >
                    <dt className="mb-1.5 text-[14px] font-extrabold leading-[19px] tracking-[1.12px] text-[#282828] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-[16px] font-medium leading-[30.88px] text-[#535353] max-[1199px]:text-[14px] max-[767px]:text-[16px]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex w-full justify-start max-[991px]:justify-center">
              <div className="relative w-full max-w-[571px] after:absolute after:right-[-52px] after:bottom-1 after:-z-10 after:h-3 after:w-[122px] after:bg-[radial-gradient(circle,#000_0%,rgba(164,164,164,0)_70%)] after:opacity-20 after:blur-[3px] after:content-[''] before:absolute before:bottom-1 before:left-[-52px] before:-z-10 before:h-3 before:w-[122px] before:bg-[radial-gradient(circle,#000_0%,rgba(164,164,164,0)_70%)] before:opacity-20 before:blur-[3px] before:content-[''] max-[1299px]:after:right-[-28px] max-[1299px]:after:w-[100px] max-[1299px]:before:left-[-30px] max-[1299px]:before:w-[100px] max-[991px]:max-w-[680px] max-[767px]:after:right-[-20px] max-[767px]:after:w-[50px] max-[767px]:before:left-[-20px] max-[767px]:before:w-[50px]">
                <Image
                  src={caseStudy.hero.image.src}
                  alt={caseStudy.hero.image.alt}
                  width={caseStudy.hero.image.width}
                  height={caseStudy.hero.image.height}
                  sizes="(max-width: 991px) calc(100vw - 40px), 571px"
                  className="h-auto w-full shadow-[1px_-3px_10px_0_rgba(0,0,0,0.1)]"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
