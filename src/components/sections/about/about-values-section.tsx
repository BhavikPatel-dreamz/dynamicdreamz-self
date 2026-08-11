import Image from "next/image";

import { Container } from "@/components/ui/container";
import { coreValues } from "@/content/about";

export function AboutValuesSection() {
  return (
    <section data-about="values" aria-labelledby="about-values-title" className="pt-[50px] pb-20 max-[991px]:pt-5 max-[991px]:pb-[50px]">
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <header className="mx-auto mb-12 max-w-[570px] text-center max-[991px]:mb-[30px]">
          <h2 id="about-values-title" className="mb-6 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
            Our Core Values
          </h2>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
            We have deeply imbibed accountability, quality, and innovation as our core values and will continue in doing so.
          </p>
        </header>

        <div className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[575px]:grid-cols-1">
          {coreValues.map((value) => (
            <article className="group relative z-0 rounded-[15px]" key={value.title}>
              <span className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[15px] bg-linear-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-all duration-500 group-hover:-top-[9px] group-hover:opacity-100" aria-hidden="true" />
              <div data-about="value-card" className="relative z-10 h-full rounded-[15px] border-[1.5px] border-[#d9d9d9] bg-white px-5 py-[47px] transition-all duration-500 group-hover:-translate-y-[7px] group-hover:border-transparent group-hover:bg-[linear-gradient(180deg,#f9feff_2.98%,#fff_114.73%)]">
                <div className="mb-4 flex size-[66px] items-center justify-center rounded-xl border-[1.5px] border-[#efefef] max-[1199px]:size-[50px]">
                  <Image className="max-[1199px]:w-[30px]" src={value.icon} alt="" width={40} height={40} />
                </div>
                <h3 className="mb-5 text-xl leading-[28.8px] font-bold max-[1199px]:mb-[10px] max-[1199px]:text-[18px] max-[1199px]:leading-[26px]">{value.title}</h3>
                <p className="text-base leading-[31px] font-medium text-muted">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
