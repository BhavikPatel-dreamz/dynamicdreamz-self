import { AboutCounterStats } from "@/components/sections/about/about-counter-stats";
import { Container } from "@/components/ui/container";
import { aboutHero } from "@/content/about";

export function AboutHeroSection() {
  return (
    <>
      <section data-about="hero" className="bg-[#fbf7ed] pt-[248px] pb-[150px] max-[991px]:pt-40 max-[991px]:pb-[120px] max-[767px]:pt-[150px] max-[767px]:pb-[110px]">
        <Container>
          <div className="mx-auto max-w-[930px] text-center">
            <h1 className="mb-6 text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">
              {aboutHero.title}
            </h1>
            <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">{aboutHero.description}</p>
          </div>
        </Container>
      </section>

      <section data-about="delivery" aria-labelledby="about-delivery-title" className="relative z-10 -mt-[78px] max-[1199px]:-mt-16">
        <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
          <div data-about="delivery-card" className="flex flex-wrap items-center justify-between rounded-[26px] bg-black px-[75px] py-[38px] text-white max-[1199px]:rounded-[20px] max-[1199px]:p-[30px] max-[991px]:px-5 max-[991px]:py-[25px]">
            <div className="w-[45%] max-[991px]:w-full">
              <h2 id="about-delivery-title" className="text-[28px] leading-[40.42px] font-bold tracking-[-0.56px] text-white max-[1199px]:text-[25px] max-[991px]:mb-5 max-[991px]:text-center max-[767px]:text-2xl max-[767px]:leading-[34px]">
                A Team that always delivers
              </h2>
            </div>
            <AboutCounterStats statistics={aboutHero.statistics} />
          </div>
        </Container>
      </section>
    </>
  );
}
