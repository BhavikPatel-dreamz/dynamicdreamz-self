"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  type MagentoWebTabNavItem,
  magentoWebContent,
  magentoWebTabsNav,
} from "@/content/magento-web-development";
import { cn } from "@/lib/class-names";

export type MagentoWebTabsProps = {
  navItems?: readonly MagentoWebTabNavItem[];
  content?: typeof magentoWebContent;
};

export function MagentoWebTabs({
  navItems = magentoWebTabsNav,
  content = magentoWebContent,
}: MagentoWebTabsProps) {
  const [activeTab, setActiveTab] = useState<string>("content-tab-1");
  const contentRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state for comparison table
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !tableRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - tableRef.current.offsetLeft);
    setScrollLeftState(tableRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !tableRef.current) return;
      e.preventDefault();
      const x = e.pageX - tableRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      tableRef.current.scrollLeft = scrollLeftState - walk;
    },
    [isDragging, startX, scrollLeftState],
  );

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle clicking a tab link
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    const container = contentRef.current;
    const target = document.getElementById(id);
    if (!target) return;

    if (window.innerWidth > 767 && container) {
      const targetOffset = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: targetOffset, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Synchronize active tab on scroll
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      const tabIds = navItems.map((item) => item.id);
      if (window.innerWidth > 767) {
        const containerTop = container.scrollTop + container.offsetTop;
        for (let i = tabIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(tabIds[i]);
          if (el && el.offsetTop <= containerTop + 80) {
            setActiveTab(tabIds[i]);
            break;
          }
        }
      } else {
        const scrollY = window.scrollY;
        for (let i = tabIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(tabIds[i]);
          if (el && el.offsetTop <= scrollY + 120) {
            setActiveTab(tabIds[i]);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <div className="new-web-magento-tab py-[60px]">
      <Container>
        <div className="new-web-magento-tab-wrapper flex items-start gap-[50px] border-b border-[#DFDFDF] pb-[60px] max-[991px]:gap-[30px] max-[767px]:flex-wrap">
          {/* Left sticky tabs navigation */}
          <nav
            aria-label="Guide Table of Contents"
            className="new-web-tab sticky top-5 w-full max-w-[367px] shrink-0 rounded-[13px] border border-[#EEF0F5] bg-white p-[18px_20px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-[top] duration-300 max-[991px]:max-w-[300px] max-[767px]:static max-[767px]:max-w-full"
          >
            <ul className="border-l border-[#e4e2e3]">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <li
                    className="mb-[35px] px-[22px] opacity-100 last:mb-0 max-[991px]:mb-[25px]"
                    key={item.id}
                  >
                    <a
                      className={cn(
                        "tab-link relative block text-base font-semibold leading-[137%] transition-colors duration-200",
                        isActive
                          ? "text-[#ad5151] after:absolute after:top-0 after:-left-[22px] after:h-full after:w-[3px] after:bg-[#ad5151]"
                          : "text-[#282828] hover:text-[#ad5151]",
                      )}
                      href={`#${item.id}`}
                      onClick={(e) => handleTabClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right scrollable content */}
          <div
            className="new-web-content h-screen w-full max-w-[calc(100%-417px)] overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-[991px]:max-w-[calc(100%-330px)] max-[767px]:h-auto max-[767px]:max-w-full max-[767px]:overflow-visible"
            ref={contentRef}
          >
            <div className="new-web-inner-content tab-content-item active-content" id="tab-1">
              {/* Tab 1 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-1">
                {content.tab1.paragraphs.map((para) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={para.slice(0, 30)}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Tab 2 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-2">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab2.title}
                </h2>
                {content.tab2.intro.map((p) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={p.slice(0, 30)}
                  >
                    {p}
                  </p>
                ))}
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab2.versionsSubheading}
                </span>
                {content.tab2.versions.map((ver) => (
                  <div className="new-web-inner-title-block mb-[25px] last:mb-0" key={ver.title}>
                    <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                      {ver.title}
                    </h6>
                    <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                      {ver.content}
                    </p>
                  </div>
                ))}
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab2.includesSubheading}
                </span>
                <ul className="mb-[25px] space-y-2.5">
                  {content.tab2.includesItems.map((item) => (
                    <li
                      className="relative pl-[35px] text-base font-medium leading-[190%] text-[#535353] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                      key={item.slice(0, 30)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab2.conclusion}
                </p>
              </div>

              {/* Tab 3 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-3">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab3.title}
                </h2>
                {content.tab3.paragraphs.map((p) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={p.slice(0, 30)}
                  >
                    {p}
                  </p>
                ))}
                {content.tab3.reasons.map((reason) => (
                  <div
                    className="new-web-inner-title-block mb-[25px] last:mb-0"
                    key={reason.title}
                  >
                    <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                      {reason.title}
                    </h6>
                    {Array.isArray(reason.content) ? (
                      reason.content.map((p) => (
                        <p
                          className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                          key={p.slice(0, 30)}
                        >
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {reason.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Tab 4 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-4">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab4.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab4.intro}
                </p>
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab4.processSubheading}
                </span>
                {content.tab4.stages.map((stage) => (
                  <div className="new-web-inner-title-block mb-[25px] last:mb-0" key={stage.title}>
                    <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                      {stage.title}
                    </h6>
                    <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                      {stage.intro}
                    </p>
                    {stage.subheading && (
                      <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                        {stage.subheading}
                      </span>
                    )}
                    {stage.items && (
                      <ul className="mb-[25px] space-y-2.5">
                        {stage.items.map((item) => (
                          <li
                            className="relative pl-[35px] text-base font-medium leading-[190%] text-[#535353] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                            key={item.slice(0, 30)}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {stage.closing && (
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {stage.closing}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Tab 5 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-5">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab5.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab5.intro}
                </p>
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab5.subheading}
                </span>
                {content.tab5.features.map((feature) => (
                  <div
                    className="new-web-inner-title-block mb-[25px] last:mb-0"
                    key={feature.title}
                  >
                    <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                      {feature.title}
                    </h6>
                    {Array.isArray(feature.description) ? (
                      feature.description.map((p) => (
                        <p
                          className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                          key={p.slice(0, 30)}
                        >
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {feature.description}
                      </p>
                    )}
                    {feature.subheading && (
                      <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                        {feature.subheading}
                      </span>
                    )}
                    {feature.items && (
                      <ul className="mb-[25px] space-y-2.5">
                        {feature.items.map((item) => (
                          <li
                            className="relative pl-[35px] text-base font-medium leading-[190%] text-[#535353] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                            key={item.slice(0, 30)}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {feature.closing && (
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {feature.closing}
                      </p>
                    )}
                  </div>
                ))}
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab5.closingSummary}
                </p>

                {/* Embedded Book Demo Banner */}
                <div
                  className="book-demo-block relative mt-[30px] flex w-full flex-wrap items-center gap-20 rounded-[20px] bg-cover bg-no-repeat px-10 py-[55px] after:absolute after:right-[200px] after:bottom-[45px] after:z-[1] after:h-[65px] after:w-[65px] after:bg-[url('/assets/magento-web-development/banner-decor-curve.svg')] after:bg-contain after:bg-no-repeat max-[1199px]:gap-[50px] max-[1199px]:px-[25px] max-[1199px]:py-10 max-[1199px]:after:right-auto max-[1199px]:after:bottom-0 max-[1199px]:after:left-0"
                  style={{
                    backgroundImage: `url('/assets/magento-web-development/need-help-banner.webp')`,
                  }}
                >
                  <div className="book-demo-left-col w-[60%] max-[1199px]:w-full">
                    <h3 className="mb-2.5 font-sans text-[28px] font-bold leading-[137%] tracking-[-0.32px] text-white">
                      {content.tab5.bookDemo.heading}
                    </h3>
                    <p className="text-base font-normal leading-[190%] text-white">
                      {content.tab5.bookDemo.description}
                    </p>
                  </div>
                  <div className="book-demo-right-col w-[27%] text-right max-[1199px]:w-full max-[1199px]:text-left">
                    <ButtonLink
                      className="btn btn-white inline-flex min-h-[42px] items-center justify-center rounded-[30px] border border-white bg-transparent px-[30px] py-2.5 text-center font-sans text-sm font-semibold tracking-[-0.2px] text-white uppercase transition-colors hover:bg-white hover:text-[#121212]"
                      href={content.tab5.bookDemo.ctaHref}
                      variant="outline"
                    >
                      {content.tab5.bookDemo.ctaLabel}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              {/* Tab 6 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-6">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab6.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab6.intro}
                </p>
                {content.tab6.comparisonSections.map((sec) => (
                  <div className="mb-[25px]" key={sec.criterion}>
                    <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                      {sec.criterion}
                    </span>
                    <div className="new-web-inner-title-block mb-[25px] last:mb-0">
                      <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                        {content.tab6.magentoLabel}
                      </h6>
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {sec.magentoText}
                      </p>
                    </div>
                    <div className="new-web-inner-title-block mb-[25px] last:mb-0">
                      <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                        {content.tab6.shopifyPlusLabel}
                      </h6>
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {sec.shopifyText}
                      </p>
                    </div>
                    <div className="new-web-inner-title-block mb-[25px] last:mb-0">
                      <h6 className="relative mb-[15px] pl-[30px] text-base font-bold tracking-[0.32px] text-[#282828] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat">
                        {content.tab6.verdictLabel}
                      </h6>
                      <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                        {sec.verdict}
                      </p>
                    </div>
                  </div>
                ))}
                {content.tab6.closingParagraphs.map((p) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={p.slice(0, 30)}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Tab 7 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-7">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab7.title}
                </h2>
                <div
                  className={cn(
                    "new-web-table-block rounded-[15px] bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)] p-[2px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                    isDragging ? "cursor-grabbing select-none" : "cursor-grab",
                  )}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseUpOrLeave}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  ref={tableRef}
                >
                  <table className="comparison-table m-0 w-full border-collapse overflow-hidden rounded-[13px] bg-white">
                    <thead>
                      <tr>
                        {content.tab7.tableHeaders.map((header) => (
                          <th
                            className="whitespace-nowrap border border-[#DFDFDF] border-b-[#EBEBEB] bg-[#F7F5EF] p-5 text-left text-lg font-bold leading-[167%] text-[#282828]"
                            key={header}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.tab7.tableRows.map((row) => (
                        <tr key={row.criteria}>
                          <td className="whitespace-nowrap border border-[#DFDFDF] p-[20px_25px] text-base font-bold leading-[167%] text-[#282828]">
                            <strong>{row.criteria}</strong>
                          </td>
                          <td className="whitespace-nowrap border border-[#DFDFDF] p-[20px_25px] text-base leading-[167%] text-[#282828]">
                            {row.magento}
                          </td>
                          <td className="whitespace-nowrap border border-[#DFDFDF] p-[20px_25px] text-base leading-[167%] text-[#282828]">
                            {row.shopifyPlus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tab 8 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-8">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab8.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab8.intro}
                </p>
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab8.subheading}
                </span>
                <ul className="mb-[25px] space-y-2.5">
                  {content.tab8.steps.map((step) => (
                    <li
                      className="relative pl-[35px] text-base font-medium leading-[190%] text-[#535353] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                      key={step.label}
                    >
                      <strong>{step.label} </strong>
                      {step.description}
                    </li>
                  ))}
                </ul>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab8.closing}
                </p>
              </div>

              {/* Tab 9 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-9">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab9.title}
                </h2>
                {content.tab9.paragraphs.map((p) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={p.slice(0, 30)}
                  >
                    {p}
                  </p>
                ))}
                <span className="mb-[30px] inline-block text-base font-bold tracking-[0.32px] text-[#282828]">
                  {content.tab9.subheading}
                </span>
                <ul className="mb-[25px] space-y-2.5">
                  {content.tab9.points.map((pt) => (
                    <li
                      className="relative pl-[35px] text-base font-medium leading-[190%] text-[#535353] before:absolute before:top-0.5 before:left-0 before:h-[22px] before:w-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat"
                      key={pt.label}
                    >
                      <strong>{pt.label} </strong>
                      {pt.description}
                    </li>
                  ))}
                </ul>
                <p className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0">
                  {content.tab9.closing}
                </p>
              </div>

              {/* Tab 10 */}
              <div className="new-web-title-block mb-[60px] last:mb-0" id="content-tab-10">
                <h2 className="relative mb-[25px] pl-5 font-sans text-[28px] font-bold leading-[137%] text-[#121212] before:absolute before:top-[5px] before:left-0 before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15C064_-0.6%,#00D1FF_92.42%)]">
                  {content.tab10.title}
                </h2>
                {content.tab10.paragraphs.map((p) => (
                  <p
                    className="mb-5 text-base font-medium leading-[190%] text-[#535353] last:mb-0"
                    key={p.slice(0, 30)}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
