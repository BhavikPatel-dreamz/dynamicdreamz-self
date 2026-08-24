"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { CaseStudyItem } from "@/types/case-study";

type CaseStudiesListingProps = {
  content: {
    filter: { technologies: readonly string[]; industries: readonly string[] };
    items: readonly CaseStudyItem[];
    sectionTitle: { eyebrow?: string; heading: string; description: string };
  };
};

const BATCH_SIZE = 10;

export function CaseStudiesListing({ content }: CaseStudiesListingProps) {
  const { filter, items, sectionTitle } = content;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [openMenu, setOpenMenu] = useState<"technology" | "industry" | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const techId = useId();
  const industryId = useId();

  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (!filterRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return items.filter((item) => {
      const searchable = [item.title, item.excerpt, item.technology, item.industry, ...item.tags].join(" ").toLowerCase();
      const matchesTechnology = !selectedTech ||
        (selectedTech === "Shopify / Shopify Plus"
          ? ["shopify / shopify plus", "shopify"].includes(item.technology.toLowerCase()) || item.technology.toLowerCase().startsWith("shopify (")
          : item.technology === selectedTech);
      return (!query || searchable.includes(query)) && matchesTechnology &&
        (!selectedIndustry || item.industry === selectedIndustry);
    });
  }, [items, searchQuery, selectedTech, selectedIndustry]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleItems.length < filteredItems.length;
  const hasFilters = Boolean(searchQuery || selectedTech || selectedIndustry);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || loadingMore) return;
      setLoadingMore(true);
      window.setTimeout(() => {
        setVisibleCount((count) => Math.min(count + BATCH_SIZE, filteredItems.length));
        setLoadingMore(false);
      }, 180);
    }, { rootMargin: "320px" });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredItems.length, hasMore, loadingMore]);

  function clearFilters() {
    setSearchQuery("");
    setSelectedTech("");
    setSelectedIndustry("");
    setVisibleCount(BATCH_SIZE);
    setOpenMenu(null);
  }

  return (
    <section className="cs-listing-sec bg-[#eff4ef]" ref={filterRef}>
      <div id="explore_case_studies" className="cs-main-wrapp bg-[#eff4ef] px-0 pt-[54px] pb-[120px] max-[1199px]:pt-[50px] max-[1199px]:pb-10 max-[991px]:pt-10 max-[991px]:pb-[30px]">
        <Container className="min-[1200px]:max-w-[1140px] min-[1300px]:!max-w-[1240px]">
          <div className="cs-filter-main">
            <div className="mx-auto max-w-[1170px]">
              <div className="cs-filter grid grid-cols-[minmax(260px,1fr)_260px_260px] items-center gap-3 rounded-[20px] border-[1.5px] border-[rgba(18,18,18,0.1)] bg-white p-[13px] shadow-[0_8px_30px_rgba(40,40,40,0.04)] max-[991px]:grid-cols-2 max-[991px]:gap-[13px] max-[767px]:grid-cols-1">
                <label className="cs-search relative w-full max-[991px]:col-span-2 max-[767px]:col-span-1">
                  <span className="sr-only">Search case studies</span>
                  <input value={searchQuery} onChange={(event) => { setSearchQuery(event.target.value); setVisibleCount(BATCH_SIZE); }} type="search" placeholder="Search case studies…" className="h-[50px] w-full rounded-[10px] border border-[rgba(40,40,40,0.12)] bg-[rgba(255,255,255,0.05)] pl-11 pr-4 font-sans text-sm font-medium text-[#282828] outline-none placeholder:text-[#282828]/80 focus:border-[#ad5151]" />
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 left-[15px] size-5 -translate-y-1/2 text-[#ad5151]" fill="none"><path d="m17.5 17.5-3.62-3.62M15.83 9.17a6.67 6.67 0 1 1-13.33 0 6.67 6.67 0 0 1 13.33 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </label>
                <FilterMenu id={techId} label="All Technologies" value={selectedTech} options={filter.technologies} open={openMenu === "technology"} onToggle={() => setOpenMenu(openMenu === "technology" ? null : "technology")} onSelect={(value) => { setSelectedTech(value); setVisibleCount(BATCH_SIZE); setOpenMenu(null); }} />
                <FilterMenu id={industryId} label="All Industries" value={selectedIndustry} options={filter.industries} open={openMenu === "industry"} onToggle={() => setOpenMenu(openMenu === "industry" ? null : "industry")} onSelect={(value) => { setSelectedIndustry(value); setVisibleCount(BATCH_SIZE); setOpenMenu(null); }} />
              </div>
              {hasFilters && <button type="button" onClick={clearFilters} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#ad5151] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"><svg aria-hidden="true" viewBox="0 0 32 32" className="size-5" fill="none"><path d="M5.33 10.67A12 12 0 1 1 4 16V4m0 0h8" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" /></svg>Clear all filters</button>}
            </div>
          </div>

          <div className="cs-section-title mt-[54px] flex flex-wrap items-end justify-between border-t border-black/10 pt-[54px] max-[991px]:mt-5 max-[991px]:mb-[30px] max-[991px]:pt-5">
            <div className="title w-[44%] max-[1399px]:w-[35%] max-[1199px]:w-[36%] max-[991px]:w-full">
              {sectionTitle.eyebrow && <span className="mb-3 block font-montserrat text-xs font-semibold uppercase tracking-[0.8px] text-[#ad5151]">{sectionTitle.eyebrow}</span>}
              <h2 className="m-0 font-montserrat text-[35px] font-bold leading-[1.38] text-[#090909] max-[1199px]:text-[28px] max-[991px]:mb-2.5 max-[767px]:text-2xl">{sectionTitle.heading}</h2>
            </div>
            <div className="text w-[49%] max-[1399px]:w-[56%] max-[1199px]:w-[51%] max-[991px]:w-full"><p className="m-0 font-sans text-base font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-[26px]">{sectionTitle.description}</p></div>
          </div>

          {visibleItems.length === 0 ? <div className="rounded-[20px] bg-white p-12 text-center text-lg text-[#535353]">No case studies match your search criteria. Try adjusting your search or filter.</div> : <div className="cs-listing-main -mb-5 flex flex-wrap justify-between max-[991px]:mb-0">{visibleItems.map((item) => <CaseStudyCard key={item.slug} item={item} />)}</div>}
          <div ref={sentinelRef} className="flex min-h-10 items-center justify-center pt-8" aria-live="polite">{loadingMore && <span className="text-sm text-[#535353]">Loading more case studies…</span>}{!hasMore && filteredItems.length > BATCH_SIZE && <span className="text-sm text-[#535353]">You’ve reached the end of the case studies.</span>}</div>
        </Container>
      </div>
    </section>
  );
}

function FilterMenu({ id, label, value, options, open, onToggle, onSelect }: { id: string; label: string; value: string; options: readonly string[]; open: boolean; onToggle: () => void; onSelect: (value: string) => void }) {
  return <div className="dropdown_menu relative min-w-[190px]"><button type="button" className="flex h-[50px] w-full items-center justify-between rounded-[10px] border border-[rgba(40,40,40,0.12)] bg-[rgba(254,254,254,0.93)] px-4 py-3 text-left font-montserrat text-sm font-semibold text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]" aria-haspopup="listbox" aria-expanded={open} aria-controls={id} onClick={onToggle}><span className="truncate">{value || label}</span><svg aria-hidden="true" viewBox="0 0 10 6" className={`size-2.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></button>{open && <ul id={id} role="listbox" className="absolute top-[calc(100%+5px)] left-0 z-30 max-h-[272px] w-full overflow-y-auto rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_rgba(0,0,0,0.08)]">{["", ...options].map((option) => <li key={option || label} role="option" aria-selected={value === option} onClick={() => onSelect(option)} className={`cursor-pointer px-4 py-2.5 text-sm font-medium text-[#282828]/80 transition-colors hover:bg-[#f4f4f4] ${value === option ? "bg-[#f4f4f4] font-semibold" : ""}`}>{option || label}</li>)}</ul>}</div>;
}

function CaseStudyCard({ item }: { item: CaseStudyItem }) {
  return <article className="cs-listing-row mb-5 flex w-[calc(50%-10px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-[991px]:mb-[30px] max-[991px]:w-full"><div className="flex h-full flex-col"><Link href={item.href} className="relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 991px) 100vw, (max-width: 1300px) 50vw, 610px" className="object-cover transition-transform duration-1000 hover:scale-105" /></Link><div className="flex flex-grow flex-col p-5 max-[767px]:p-[15px]"><div className="flex h-full flex-col justify-between"><div><Link href={item.href} className="group/title block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"><div className="mb-2.5 flex flex-wrap items-center"><span className="relative mr-2.5 mb-1 pr-2.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151] after:absolute after:top-1/2 after:right-0 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#ad5151] after:content-['']">{item.technology}</span><span className="mb-1 font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151]">{item.industry}</span></div><h3 className="mb-2.5 font-montserrat text-xl font-semibold leading-[28.8px] text-[#090909] transition-colors group-hover/title:text-[#ad5151]">{item.title}</h3></Link><p className="m-0 font-sans text-[13px] font-medium leading-[1.75] text-[#535353] max-[767px]:text-sm max-[767px]:leading-[26.6px]">{item.excerpt}</p><div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="inline-flex items-center rounded-full border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] text-[10px] font-semibold uppercase leading-none text-[#565656]">{tag}</span>)}</div></div><div className="mt-5 border-t border-[rgba(40,40,40,0.08)] pt-5"><Link href={item.href} className="group/visit inline-flex items-center gap-2 font-montserrat text-sm font-bold uppercase text-[#ad5151] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad5151]">view Case study<svg aria-hidden="true" viewBox="0 0 12 12" className="size-3 transition-transform group-hover/visit:translate-x-1"><path d="m.33 10.26 11.34-9.26M11.99 2.05 11.05 11.04M11.99 2.05 2.07 1.53" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg></Link></div></div></div></div></article>;
}
