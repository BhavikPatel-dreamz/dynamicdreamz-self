import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/sections/case-study-details/case-study-detail-page";
import { caseStudyDetails, getCaseStudyBySlug } from "@/content/case-study-details";
import { createPageMetadata, type PageSeoConfig } from "@/data/seo";
import { createCaseStudyDetailPageSchema, serializeJsonLd } from "@/lib/schema";

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyDetails.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
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
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <main id="main-content" data-page="case-study-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCaseStudyDetailPageSchema(caseStudy)),
        }}
      />
      <CaseStudyDetailPage caseStudy={caseStudy} />
    </main>
  );
}
