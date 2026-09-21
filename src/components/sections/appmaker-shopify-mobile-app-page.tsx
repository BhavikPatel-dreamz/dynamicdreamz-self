import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { appmakerShopifyMobileAppDevelopmentContent } from "@/content/appmaker-shopify-mobile-app-development";

export function AppmakerShopifyMobileAppPage() {
  const { hero, brands, benefits, features, process, faqs } =
    appmakerShopifyMobileAppDevelopmentContent;

  const brandsContent = {
    heading: brands.title,
    slug: "appmaker-shopify-mobile-app-development",
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#faf8f5] py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column */}
            <div className="lg:col-span-7">
              {/* Partner Logos Row */}
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src={hero.partnerLogos.dynamicDreamz.src}
                  alt={hero.partnerLogos.dynamicDreamz.alt}
                  width={hero.partnerLogos.dynamicDreamz.width}
                  height={hero.partnerLogos.dynamicDreamz.height}
                  className="h-8 w-auto object-contain"
                  priority
                />
                <span className="text-xl font-bold text-[#ad5151]">✕</span>
                <Image
                  src={hero.partnerLogos.appmaker.src}
                  alt={hero.partnerLogos.appmaker.alt}
                  width={hero.partnerLogos.appmaker.width}
                  height={hero.partnerLogos.appmaker.height}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-[#282828] sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {hero.title}
              </h1>

              <div className="mt-8">
                <ButtonLink href={hero.ctaHref} variant="primary">
                  {hero.ctaText}
                </ButtonLink>
              </div>

              {/* Review Proof Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-black/10 pt-8">
                {hero.reviews.map((r) => (
                  <div className="flex items-center gap-2" key={r.name}>
                    <Image
                      src={r.icon}
                      alt={r.alt}
                      width={120}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Phone Mockup Frame */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[320px]">
                <Image
                  src={hero.phoneFrame.src}
                  alt={hero.phoneFrame.alt}
                  width={hero.phoneFrame.width}
                  height={hero.phoneFrame.height}
                  className="relative z-10 w-full object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute top-[3.5%] left-[8%] z-0 h-[92%] w-[84%] overflow-hidden rounded-[36px]">
                  <Image
                    src={hero.slides[0].src}
                    alt={hero.slides[0].alt}
                    width={hero.slides[0].width}
                    height={hero.slides[0].height}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Brands Slider */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={brands.title}
        items={brands.items}
      />

      {/* 3. Key Benefits */}
      <section className="bg-white py-20 max-[992px]:py-12.5">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#282828] sm:text-4xl">
              {benefits.title}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((b) => (
              <div
                className="rounded-2xl border border-black/8 bg-[#faf8f5] p-8 transition-all duration-300 hover:border-[#ad5151]/30 hover:shadow-lg"
                key={b.title}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Image
                    src={b.icon}
                    alt={b.iconAlt}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#282828]">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#535353]">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Features Section */}
      <section className="bg-[#faf8f5] py-20 max-[992px]:py-12.5">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#282828] sm:text-4xl">
              {features.title}
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="flex justify-center lg:col-span-5">
              <Image
                src={features.image.src}
                alt={features.image.alt}
                width={features.image.width}
                height={features.image.height}
                className="w-full max-w-[500px] rounded-2xl object-contain drop-shadow-md"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {features.items.map((f) => (
                <div
                  className="rounded-xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#ad5151]/20 hover:shadow-md"
                  key={f.title}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#faf8f5]">
                    <Image
                      src={f.icon}
                      alt={f.iconAlt}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#282828]">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#535353]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Process / How It Works */}
      <section className="bg-white py-20 max-[992px]:py-12.5">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#282828] sm:text-4xl">
              {process.title}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((s) => (
              <div
                className="relative rounded-2xl border border-black/8 bg-[#faf8f5] p-6 text-center"
                key={s.stepNumber}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src={s.icon}
                    alt={s.iconAlt}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="mb-1 block text-xs font-bold tracking-wider text-[#ad5151] uppercase">
                  {s.stepBadge}
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#282828]">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#535353]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FAQ Section */}
      <SplitFaqSection idPrefix="appmaker-faq" items={faqs} />
    </div>
  );
}
