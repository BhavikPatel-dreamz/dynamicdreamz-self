import { Container } from "@/components/ui/container";
import { ServiceHeroReviews } from "@/components/sections/service-hero-reviews";
import { shopifyDevelopmentBarcelonaContent } from "@/content/shopify-development-in-barcelona-spain";
import { BarcelonaClientSliders } from "./barcelona-client-sliders";
import { QuoteForm } from "@/components/sections/request-quote/quote-form";

export function BarcelonaHeroSection() {
  const { hero } = shopifyDevelopmentBarcelonaContent;
  const reviews = hero.reviews.map((review) => ({
    platform: review.platform,
    reviewCount: review.reviewsCount,
    rating: review.rating,
    logoSrc: review.logo,
    logoAlt: review.alt,
    logoWidth: review.width,
    logoHeight: review.height,
    href: review.href,
    starsAlt: review.starsAlt,
  }));

  return (
    <section className="barcelona-spain-sec pt-10 pb-20 max-[991px]:pb-12 max-[767px]:pt-6 max-[767px]:pb-10" id="contact-section">
      <Container>
        <div className="barcelona-spain-main">
          <div className="wrapper flex flex-wrap justify-between items-start max-[991px]:flex-col">
            {/* Left Column */}
            <div className="left-col w-[40%] max-[1199px]:w-[49%] max-[991px]:w-full">
              <div className="barcelona-text max-[991px]:text-center max-[767px]:max-w-[280px] max-[767px]:mx-auto">
                <h1 className="font-sans text-[40px] font-bold leading-[45px] tracking-[-0.8px] text-ink max-[1199px]:text-[34px] max-[991px]:leading-10 max-[767px]:text-[28px] max-[767px]:leading-[33.24px]">
                  {hero.title}
                </h1>
                <p className="mt-2 text-base font-medium leading-relaxed text-[#535353]">
                  {hero.subtitle.replace(" Spain", "")}{" "}
                  <span className="relative font-extrabold text-[#ad5151]">
                    {hero.subtitle.split(" ")[hero.subtitle.split(" ").length - 1]}
                    <svg
                      aria-hidden="true"
                      className="absolute left-0 top-full"
                      fill="none"
                      height="8"
                      viewBox="0 0 52 8"
                      width="52"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.65863C7 3.99196 25.3 -0.741373 50.5 1.65863"
                        stroke="#AD5151"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </p>
              </div>

              {/* Client Logo Tickers */}
              <BarcelonaClientSliders
                row1={hero.clientRows.row1}
                row2={hero.clientRows.row2}
              />

              {/* Reviews */}
              <ServiceHeroReviews items={reviews} />
            </div>

            {/* Right Column Form */}
            <div className="right-col w-[57%] rounded-[30px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.66)_33.98%,rgba(0,209,255,0)_78.28%)] p-[3px] max-[1199px]:w-[49%] max-[991px]:mt-[50px] max-[991px]:w-full">
              <QuoteForm
                className="request-quote-form rounded-[30px] bg-white p-[42px_42px_30px_42px] max-[1199px]:p-[40px_20px_20px_20px] max-[767px]:p-[30px_20px_20px_20px]"
                phonePlaceholder={null}
                showTitle={false}
                submitButtonClassName="group/quote-submit relative inline-flex min-h-[49px] w-auto cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red lg:px-8 px-6 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-600 hover:border-[#4f4f4f] hover:text-[#4f4f4f] max-[767px]:w-full disabled:cursor-wait disabled:opacity-70"
                submitLabel={hero.form.submitText}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
