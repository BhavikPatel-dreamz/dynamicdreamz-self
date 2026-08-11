import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { insights } from "@/content/home";
import { cn } from "@/lib/class-names";

export function InsightsSection() {
  return (
    <section className="min-h-[883px] overflow-hidden bg-white pt-20 pb-[60px] min-[768px]:max-[991px]:min-h-[806.61px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[722.33px] max-[767px]:py-[50px]">
      <Container>
        <div className="mx-auto mb-[47px] max-w-[700px] text-center">
          <h2 className="mb-6 text-[43px] leading-[1.2] font-medium max-[767px]:mb-4 max-[767px]:text-2xl">Featured Shopify Insights</h2>
          <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
            Practical guidance on Shopify Plus, migration, B2B, CRO, mobile commerce, performance and integrations from our in-house specialists.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-0">
          {insights.map((insight, insightIndex) => (
            <article className={cn("group/insight min-w-0 max-[991px]:mb-6 max-[991px]:block max-[991px]:border-b max-[991px]:border-[#efefef] max-[991px]:pb-6", insightIndex === insights.length - 1 && "max-[991px]:mb-0 max-[991px]:border-b-0 max-[991px]:pb-0")} key={insight.href}>
              <div className="contents max-[991px]:flex max-[991px]:items-stretch max-[991px]:justify-between max-[991px]:gap-5">
                <Link className="mb-5 block overflow-hidden rounded-[20px] max-[991px]:relative max-[991px]:m-0 max-[991px]:w-2/5 max-[991px]:flex-[1_1_40%] max-[991px]:rounded-[10px]" href={insight.href}>
                  <Image className="h-auto w-full object-cover transition-transform duration-300 [aspect-ratio:1504/1137] group-hover/insight:scale-[1.03] max-[991px]:absolute max-[991px]:inset-0 max-[991px]:h-full max-[991px]:[aspect-ratio:auto]" src={insight.image} alt={insight.title} width={1504} height={1137} sizes="(max-width: 991px) 40vw, 33vw" />
                </Link>
                <div className="max-[991px]:w-[calc(100%-110px)] max-[991px]:flex-[1_1_calc(100%-110px)]">
                  <div className="mb-[9px] flex flex-wrap gap-2 max-[767px]:mx-[-4px] max-[767px]:mb-[3px] max-[767px]:gap-0">
                    <Link className="inline-flex" href="/category/shopify/">
                      <span className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium hover:text-brand-red focus-visible:text-brand-red max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]">Shopify</span>
                    </Link>
                    <time className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]" dateTime={insight.date}>{insight.displayDate}</time>
                  </div>
                  <h3 className="font-display text-xl leading-[30px] font-medium max-[767px]:text-base max-[767px]:leading-[normal]">
                    <Link className="hover:underline hover:underline-offset-2 focus-visible:underline focus-visible:underline-offset-2" href={insight.href}>{insight.title}</Link>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[50px] flex justify-center max-[767px]:mt-[22px]">
          <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm" variant="dark" href="/blog/">View all blogs</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
