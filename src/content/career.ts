export type CareerLocation = {
  slug: "surat" | "ahmedabad";
  label: "Surat" | "Ahmedabad";
};

export type CareerJob = {
  slug: string;
  title: string;
  applicationTitle: string;
  experience: string;
  jobType: string;
  postedOn: string;
  postedDate: string;
  positions: number;
  locations: CareerLocation["slug"][];
  icon: string;
  iconAlt?: string;
  summary: string;
  jobDescription: string;
};

export type CareerHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type CareerHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const careerHero = {
  eyebrow: "Established in 2006",
  title: "Build Your Career with Dynamic Dreamz",
  description:
    "Join a team of 150+ professionals working across ecommerce, web, mobile, design, QA, project management and business teams for clients worldwide.",
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
  ] satisfies readonly CareerHeroBadge[],
  scrollingImages: [
    {
      src: "/assets/career/hero/career-team-1.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-2.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-3.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-4.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-5.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-6.webp",
      alt: "",
      width: 434,
      height: 256,
    },
    {
      src: "/assets/career/hero/career-team-7.webp",
      alt: "",
      width: 434,
      height: 256,
    },
  ] satisfies readonly CareerHeroImage[],
} as const;

export const currentOpportunities = {
  eyebrow: "Open Positions",
  title: "Current Opportunities",
  description:
    "Explore current openings at Dynamic Dreamz and find a role that matches your skills, experience and career goals.",
} as const;

export const careerSectionCopy = {
  applyNow: "Apply now",
  position: "Position",
  positions: "Positions",
  jobDetails: [
    { label: "Work Experience", key: "experience" },
    { label: "Job Type", key: "jobType" },
    { label: "Posted On", key: "postedOn" },
  ],
} as const;

export const careerLocations: CareerLocation[] = [
  { slug: "surat", label: "Surat" },
  { slug: "ahmedabad", label: "Ahmedabad" },
];

export const careerJobs: CareerJob[] = [
  {
    slug: "cre-project-coordinator",
    title: "Jr. CRE (Client Relationship Executive) / Project Coordinator",
    applicationTitle: "Customer Relationship Executive (CRE)",
    experience: "0 to 2 years",
    jobType: "Full time",
    postedOn: "31/08/2026",
    postedDate: "2026-08-31",
    positions: 1,
    locations: ["surat"],
    icon: "/assets/career/jobs/job-cre.svg",
    iconAlt: "CRE Icon",
    summary:
      "Coordinate client relationships, project timelines, communications, and requirements across cross-functional delivery teams.",
    jobDescription: "/assets/career/jobs/cre-project-coordinator.pdf",
  },
  {
    slug: "seo-aeo-geo-specialist",
    title: "SEO, AEO and GEO Specialist",
    applicationTitle: "SEO, AEO and GEO",
    experience: "2 years to 4 years ",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat", "ahmedabad"],
    icon: "/assets/career/jobs/job-seo-aeo-geo.svg",
    iconAlt: "",
    summary:
      "Improve organic and AI-search visibility through SEO, AEO, and GEO for ecommerce websites.",
    jobDescription: "/assets/career/jobs/seo-aeo-geo-specialist.pdf",
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    applicationTitle: "Conversion Rate Optimization (CRO)",
    experience: "1 year to 3 years ",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat", "ahmedabad"],
    icon: "/assets/career/jobs/job-conversion-rate-optimization.svg",
    iconAlt: "",
    summary:
      "Use analytics, behavior research, and experimentation to improve ecommerce conversion journeys.",
    jobDescription: "/assets/career/jobs/conversion-rate-optimization.pdf",
  },
];

export const workplaceBenefits = {
  eyebrow: "Employee Benefits",
  heading: "Workplace Benefits",
  description:
    "At Dynamic Dreamz, we offer a range of employee benefits designed to maintain work life balance and professional growth of our valued team members.",
  boxes: [
    {
      iconName: "professional-growth",
      title: "Professional & Growth-Oriented Work Environment",
    },
    {
      iconName: "recreation-zone",
      title: "Employee Recreation Zone",
    },
    {
      iconName: "career-growth",
      title: "Career Growth Opportunities",
    },
    {
      iconName: "engagement-activities",
      title: "Employee Engagement Activities",
    },
    {
      iconName: "five-day-week",
      title: "Five-Day Working Week",
    },
    {
      iconName: "paid-leave",
      title: "Paid Leave & Earned Leave Encashment",
    },
    {
      iconName: "development-activities",
      title: "Employee Development Activities",
    },
    {
      iconName: "flexible-hours",
      title: "Flexible and Convenient Working Hours",
    },
  ],
} as const;

export function careerApplicationPath(job: CareerJob, location: CareerLocation) {
  return `/career-apply-now?PositionAppliedFor=${encodeURIComponent(job.applicationTitle)}&Location=${encodeURIComponent(location.label)}`;
}
