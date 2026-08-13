import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whiteLabelShopifyPlans } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";

export function WhiteLabelShopifyPricingSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mb-[50px] flex items-start justify-between gap-[60px] max-[1199px]:mb-10 max-[1199px]:gap-10 max-[991px]:mb-[30px] max-[991px]:gap-[30px] max-[767px]:mb-5 max-[767px]:flex-wrap max-[767px]:gap-[15px]">
          <h2 className="m-0 font-sans text-[32px] leading-[48.475px] font-bold tracking-[-0.64px] text-ink max-[1199px]:text-[28px] max-[1199px]:leading-[38px] max-[991px]:text-2xl max-[991px]:leading-[34px] max-[767px]:text-[22px] max-[767px]:leading-8">
            Flexible White Label Shopify Development Plans
          </h2>
          <p className="max-w-[572px] text-base leading-[30.4px] font-medium text-muted max-[1199px]:max-w-1/2 max-[1199px]:leading-[26px] max-[991px]:text-[15px] max-[991px]:leading-[22px] max-[767px]:max-w-full">
            We offer scalable hiring models with no retainers and minimum hours — providing you
            the flexibility to select the best fit for your agency&apos;s requirements.
          </p>
        </div>

        <div className="mb-10 flex gap-[21px] max-[1199px]:mb-[35px] max-[1199px]:gap-[15px] max-[991px]:mb-[30px] max-[991px]:gap-2.5 max-[767px]:mb-5 max-[767px]:flex-wrap max-[767px]:gap-5">
          {whiteLabelShopifyPlans.map((plan) => (
            <article className="flex-1 rounded-[20px] bg-cream p-[32px_24px] max-[1199px]:p-[25px_20px] max-[991px]:p-5 max-[991px]:px-[15px] max-[767px]:w-full max-[767px]:flex-none" key={plan.name}>
              <p className="mb-4 text-base leading-4 font-bold text-ink max-[991px]:text-[15px] max-[991px]:leading-[15px]">
                ENGAGEMENT MODEL
              </p>
              <p className="mb-[30px] inline-block rounded-[50px] bg-brand-red/5 px-[15px] py-1 text-base leading-4 font-semibold text-brand-red max-[1199px]:mb-[25px] max-[1199px]:px-2.5 max-[991px]:mb-5 max-[991px]:text-[15px] max-[991px]:leading-[15px] max-[767px]:mb-[15px]">
                {plan.name}
              </p>
              <p className="mb-6 border-b border-ink/10 pb-6 text-[22px] leading-[29.04px] font-bold text-ink max-[1199px]:mb-5 max-[1199px]:pb-5 max-[1199px]:text-xl max-[991px]:mb-[15px] max-[991px]:pb-[15px] max-[991px]:text-lg max-[991px]:leading-[26px]">
                {plan.price}
              </p>
              <p className="mb-5 text-sm leading-[18.48px] font-bold tracking-[0.28px] text-ink max-[1199px]:mb-[15px]">
                BEST FOR
              </p>
              <p className="text-base leading-6 font-medium text-muted max-[1199px]:text-[15px] max-[1199px]:leading-[22px] max-[991px]:text-sm max-[991px]:leading-5">
                {plan.bestFor}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center max-[991px]:pb-[10.4px]">
          <ButtonLink
            className="max-[991px]:min-h-0 max-[991px]:py-3 max-[991px]:text-sm max-[991px]:leading-[18px]"
            href={siteConfig.quotePath}
            variant="primary"
          >
            LET&apos;S DISCUSS YOUR PROJECT!
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
