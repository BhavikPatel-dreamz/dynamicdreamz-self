import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/sections/case-study-details/case-study-detail-page";
import { caseStudyDetails, getCaseStudyBySlug } from "@/content/case-study-details";
import { draftPreviewCopy } from "@/content/common";
import { createPageMetadata, type PageSeoConfig } from "@/data/seo";
import {
  adaptPayloadCaseStudyToDetail,
  getPayloadCaseStudyBySlug,
} from "@/lib/payload";
import { createCaseStudyDetailPageSchema, serializeJsonLd } from "@/lib/schema";

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return caseStudyDetails.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const draft = await draftMode();
  const rawPayloadCaseStudy = await getPayloadCaseStudyBySlug(slug, { preview: draft.isEnabled });
  const fallbackCaseStudy = getCaseStudyBySlug(slug);

  const caseStudy = rawPayloadCaseStudy
    ? adaptPayloadCaseStudyToDetail(rawPayloadCaseStudy, fallbackCaseStudy)
    : fallbackCaseStudy;

  if (!caseStudy) return {};

  const page: PageSeoConfig = {
    path: `/case-studies/${caseStudy.slug}`,
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    keywords: [
      `${caseStudy.clientName} case study`,
      `${caseStudy.technology} case study`,
      caseStudy.industry ? `${caseStudy.industry} case study` : "",
      "Dynamic Dreamz case studies",
    ].filter(Boolean),
    openGraphType: "article",
    modifiedTime: caseStudy.seo.lastModified,
    image: {
      path: caseStudy.hero.image.src,
      width: caseStudy.hero.image.width,
      height: caseStudy.hero.image.height,
      alt: caseStudy.hero.image.alt,
    },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.7,
    },
  };

  return createPageMetadata(page);
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const draft = await draftMode();
  const rawPayloadCaseStudy = await getPayloadCaseStudyBySlug(slug, { preview: draft.isEnabled });
  const fallbackCaseStudy = getCaseStudyBySlug(slug);

  const caseStudy = rawPayloadCaseStudy
    ? adaptPayloadCaseStudyToDetail(rawPayloadCaseStudy, fallbackCaseStudy)
    : fallbackCaseStudy;

  if (!caseStudy) notFound();

  return (
    <main id="main-content" data-page="case-study-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCaseStudyDetailPageSchema(caseStudy)),
        }}
      />
      {draft.isEnabled ? (
        <aside
          aria-label="Draft mode indicator"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
        >
          <span>{draftPreviewCopy.badge}</span>
          <span aria-hidden="true">{draftPreviewCopy.separator}</span>
          <Link
            className="underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
            href="/api/exit-preview"
            prefetch={false}
          >
            {draftPreviewCopy.exit}
          </Link>
        </aside>
      ) : null}
      <CaseStudyDetailPage caseStudy={caseStudy} />
    </main>
  );
}
