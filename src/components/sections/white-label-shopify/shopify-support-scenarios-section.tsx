"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  whiteLabelShopifyScenarios,
} from "@/content/white-label-shopify-development";

type ShopifySupportScenariosSectionProps = {
  content?: typeof whiteLabelShopifyScenarios;
};

export function ShopifySupportScenariosSection({
  content = whiteLabelShopifyScenarios,
}: ShopifySupportScenariosSectionProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    content.items[0]?.id ?? "capacity",
  );

  const activePanel =
    content.items.find((item) => item.id === activeTabId) ?? content.items[0];

  return (
    <section className="scenario-tab-sec overflow-hidden bg-white py-20 max-[991px]:py-12">
      <Container>
        <div className="section_title mb-12 max-[991px]:mb-8">
          {content.eyebrow ? (
            <Eyebrow className="mb-3 text-[#ad5151]">{content.eyebrow}</Eyebrow>
          ) : null}
          <div className="flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col">
            <h2 className="w-full max-w-[580px] font-sans text-[35px] font-bold leading-[1.3] text-ink max-[991px]:text-[28px] max-[767px]:text-2xl">
              {content.heading}
            </h2>
            {content.description ? (
              <p className="w-full max-w-[540px] font-sans text-base font-medium leading-7 text-[#535353]">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        {/* Desktop & Tablet Split View (>= 768px) */}
        <div className="scenario-shell hidden md:flex md:flex-wrap md:justify-between">
          <div
            aria-label={content.heading}
            className="scenario-tabs w-[37%] max-[1399px]:w-[35%]"
            role="tablist"
          >
            {content.items.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  aria-controls={`scenario-panel-${tab.id}`}
                  aria-selected={isActive}
                  className={`scenario-tab mb-3 block w-full rounded-[15px] p-[15px] text-left transition-all ${
                    isActive
                      ? "border-[1.3px] border-[#AD5151] bg-[rgba(173,81,81,0.03)]"
                      : "border border-[rgba(40,40,40,0.10)] bg-white hover:border-[#AD5151] hover:bg-[rgba(173,81,81,0.03)]"
                  }`}
                  id={`scenario-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  role="tab"
                  type="button"
                >
                  <strong className="mb-2 block font-sans text-base font-semibold leading-none text-[#282828]">
                    {tab.title}
                  </strong>
                  <span className="block font-sans text-xs font-medium leading-5 text-[#535353]">
                    {tab.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="scenario-panels sticky top-[108px] flex h-fit w-[61%] flex-col justify-between rounded-[20px] bg-[#EFF4EF] p-[30px] max-[1399px]:w-[63%] max-[991px]:p-6">
            {activePanel && (
              <div
                aria-labelledby={`scenario-tab-${activePanel.id}`}
                className="scenario-panel active flex h-full flex-col justify-between"
                id={`scenario-panel-${activePanel.id}`}
                role="tabpanel"
              >
                <div>
                  <span className="section-kicker mb-3 block text-xs font-bold uppercase tracking-[1.5px] text-[#AD5151]">
                    {activePanel.kicker}
                  </span>
                  <h3 className="mb-4 max-w-[530px] font-sans text-[28px] font-medium leading-[1.4] tracking-[-0.56px] text-[#282828] max-[991px]:text-xl max-[991px]:leading-7">
                    {activePanel.heading}
                  </h3>
                  <p className="max-w-[650px] font-sans text-base font-medium leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6">
                    {activePanel.description}
                  </p>
                  <div className="service-features mt-6 flex flex-wrap gap-3">
                    {activePanel.features.map((feat) => (
                      <div
                        className="service-feature w-[calc(33.33%-8px)] rounded-[17px] border border-[#D0D0CE] bg-[#FAFAF7] px-2.5 py-3.5 text-center text-sm font-bold leading-none text-[#282828] shadow-[2px_2px_0_0_rgba(40,40,40,0.20)] max-[991px]:w-[calc(50%-8px)] max-[991px]:rounded-full max-[991px]:border-[rgba(40,40,40,0.10)] max-[991px]:bg-white max-[991px]:text-xs max-[991px]:shadow-none"
                        key={feat}
                      >
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="scenario-meta my-5 font-sans text-sm font-medium text-[#535353]">
                    {activePanel.meta}
                  </div>
                </div>
                <div className="btns_group flex flex-wrap items-center gap-4">
                  <ButtonLink href={activePanel.primaryCta.href} variant="primary">
                    {activePanel.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink
                    href={activePanel.secondaryCta.href}
                    variant="outline"
                  >
                    {activePanel.secondaryCta.label}
                  </ButtonLink>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Horizontal Scroll Carousel (< 768px) */}
        <div className="scenario-mobile flex md:hidden overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
          {content.items.map((panel) => (
            <div
              className="scenario-panel-card min-w-[85vw] flex-shrink-0 snap-center rounded-[20px] bg-[#EFF4EF] p-6 flex flex-col justify-between"
              key={panel.id}
            >
              <div>
                <span className="section-kicker mb-2.5 block text-xs font-bold uppercase tracking-[1.5px] text-[#AD5151]">
                  {panel.kicker}
                </span>
                <h3 className="mb-3 font-sans text-xl font-medium leading-7 text-[#282828]">
                  {panel.heading}
                </h3>
                <p className="font-sans text-sm font-medium leading-6 text-[#535353]">
                  {panel.description}
                </p>
                <div className="service-features mt-4 flex flex-wrap gap-2">
                  {panel.features.map((feat) => (
                    <div
                      className="service-feature rounded-full border border-[rgba(40,40,40,0.10)] bg-white px-3 py-2 text-xs font-bold text-[#282828]"
                      key={feat}
                    >
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="scenario-meta my-4 font-sans text-xs font-medium leading-5 text-[#535353]">
                  {panel.meta}
                </div>
              </div>
              <div className="btns_group mt-4 flex flex-col gap-3">
                <ButtonLink href={panel.primaryCta.href} variant="primary">
                  {panel.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={panel.secondaryCta.href} variant="outline">
                  {panel.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
