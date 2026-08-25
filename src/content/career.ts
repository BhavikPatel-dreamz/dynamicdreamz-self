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
  summary: string;
  jobDescription: string;
};

export type CareerBenefit = {
  title: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
};

export type CareerGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const careerSectionCopy = {
  galleryTitle: "Life at Dynamic Dreamz",
  applyNow: "Apply now",
  position: "Position",
  positions: "Positions",
  jobDetails: [
    { label: "Work Experience", key: "experience" },
    { label: "Job Type", key: "jobType" },
    { label: "Posted On", key: "postedOn" },
  ],
} as const;

export const careerHero = {
  title:
    "Explore rewarding career in IT, where your talents thrive and possibilities flourish.",
  descriptionBeforeBreak:
    "We are a strong team of 150+ creative designers, agile developers, quality conscious testers,",
  descriptionAfterBreak:
    "adept project managers and visionary leaders and we help our clients to achieve their goals.",
} as const;

export const currentOpportunities = {
  title: "Current Opportunities",
  description:
    "Embrace this chance to unleash your potential, ignite your passion, and chart a path where growth knows no limits. Explore rewarding career prospects in IT, where your talents thrive and possibilities flourish.",
} as const;

export const careerLocations: CareerLocation[] = [
  { slug: "surat", label: "Surat" },
  { slug: "ahmedabad", label: "Ahmedabad" },
];

export const careerJobs: CareerJob[] = [
  {
    slug: "performance-marketing-specialist",
    title: "Performance Marketing Specialist",
    applicationTitle: "Performance Marketing Specialist",
    experience: "2 years to 5 years",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat"],
    icon: "/assets/career/jobs/job-performance-marketing.svg",
    summary:
      "Manage paid campaigns, acquisition, tracking, A/B testing, and performance reporting across major advertising platforms.",
    jobDescription: "/assets/career/jobs/performance-marketing-specialist.pdf",
  },
  {
    slug: "seo-aeo-geo-specialist",
    title: "SEO, AEO and GEO Specialist",
    applicationTitle: "SEO, AEO and GEO",
    experience: "2 years to 4 years",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat", "ahmedabad"],
    icon: "/assets/career/jobs/job-seo-aeo-geo.svg",
    summary:
      "Improve organic and AI-search visibility through SEO, AEO, and GEO for ecommerce websites.",
    jobDescription: "/assets/career/jobs/seo-aeo-geo-specialist.pdf",
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    applicationTitle: "Conversion Rate Optimization (CRO)",
    experience: "1 year to 3 years",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat"],
    icon: "/assets/career/jobs/job-conversion-rate-optimization.svg",
    summary:
      "Use analytics, behavior research, and experimentation to improve ecommerce conversion journeys.",
    jobDescription: "/assets/career/jobs/conversion-rate-optimization.pdf",
  },
  {
    slug: "linkedin-growth-executive",
    title: "LinkedIn Growth Executive",
    applicationTitle: "LinkedIn Growth Executive",
    experience: "2 years to 3 years",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["ahmedabad"],
    icon: "/assets/career/jobs/job-linkedin-growth.svg",
    summary:
      "Grow the company's LinkedIn presence through research, relationship building, content, and profile management.",
    jobDescription: "/assets/career/jobs/linkedin-growth-executive.pdf",
  },
  {
    slug: "junior-outbound-sales-executive",
    title: "Jr. Outbound Sales Executive",
    applicationTitle: "Outbound Sales Executive",
    experience: "2 years to 5 years",
    jobType: "Full time",
    postedOn: "20/07/2026",
    postedDate: "2026-07-20",
    positions: 1,
    locations: ["surat", "ahmedabad"],
    icon: "/assets/career/jobs/job-outbound-sales.svg",
    summary:
      "Develop international IT-services opportunities through research, outbound prospecting, qualification, and pipeline management.",
    jobDescription: "/assets/career/jobs/outbound-sales-executive.pdf",
  },
];

export const workplaceBenefits = {
  title: "Workplace Benefits",
  description:
    "At Dynamic Dreamz, we offer a range of employee benefits designed to maintain work life balance and professional growth of our valued team members.",
  items: [
    {
      title: "Professional & Growth oriented Work Environment",
      icon: "/assets/career/benefits/professional-growth-work-environment.svg",
      alt: "Professional growth-oriented work environment",
      width: 78,
      height: 68,
    },
    {
      title: "Recreation Zone for Employees",
      icon: "/assets/career/benefits/employee-recreation-zone.svg",
      alt: "Employee recreation zone",
      width: 66,
      height: 66,
    },
    {
      title: "Rewarding Career Growth",
      icon: "/assets/career/benefits/rewarding-career-growth.svg",
      alt: "Rewarding career growth",
      width: 66,
      height: 66,
    },
    {
      title: "Ample of Employee Engagement Activities",
      icon: "/assets/career/benefits/employee-engagement-activities.svg",
      alt: "Employee engagement activities",
      width: 72,
      height: 44,
    },
    {
      title: "Five Days a Week Working",
      icon: "/assets/career/benefits/five-day-work-week.svg",
      alt: "Five-day work week",
      width: 68,
      height: 68,
    },
    {
      title: "Paid Leave and Earned Leave Encashment",
      icon: "/assets/career/benefits/paid-leave-encashment.svg",
      alt: "Paid leave and earned leave encashment",
      width: 58,
      height: 59,
    },
    {
      title: "Holistic Development Activities",
      icon: "/assets/career/benefits/holistic-development-activities.svg",
      alt: "Holistic development activities",
      width: 62,
      height: 62,
    },
    {
      title: "Flexible and Convenient Working Hours",
      icon: "/assets/career/benefits/flexible-working-hours.svg",
      alt: "Flexible and convenient working hours",
      width: 56,
      height: 56,
    },
  ] satisfies CareerBenefit[],
} as const;

export const careerGallery: CareerGalleryImage[] = [
  {
    src: "/assets/team/events/movie-auditorium-group.webp",
    alt: "Dynamic Dreamz team gathered in a movie auditorium",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/movie-day-team.webp",
    alt: "Dynamic Dreamz colleagues enjoying movie day together",
    width: 668,
    height: 812,
  },
  {
    src: "/assets/team/events/team-bus-trip.webp",
    alt: "Dynamic Dreamz colleagues taking a team bus trip",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/white-feather-resort-team.webp",
    alt: "Dynamic Dreamz team members at White Feather Tent Resort",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/diwali-office-celebration.webp",
    alt: "Dynamic Dreamz colleagues celebrating Diwali at the office",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/team-at-work.webp",
    alt: "Dynamic Dreamz colleagues working together in the office",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/poolside-team-activity.webp",
    alt: "Dynamic Dreamz colleagues taking part in a poolside team activity",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/holi-team-celebration.webp",
    alt: "Dynamic Dreamz team celebrating Holi",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/team-pool-day.webp",
    alt: "Dynamic Dreamz colleagues enjoying a team pool day",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/dgv-resort-team-outing.webp",
    alt: "Dynamic Dreamz colleagues on a team resort outing",
    width: 668,
    height: 812,
  },
  {
    src: "/assets/team/events/team-swimming-activity.webp",
    alt: "Dynamic Dreamz colleagues enjoying a swimming activity",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/lakeside-team-outing.webp",
    alt: "Dynamic Dreamz colleagues together on a lakeside outing",
    width: 668,
    height: 812,
  },
];

export function careerApplicationPath(job: CareerJob, location: CareerLocation) {
  return `/career-apply-now?PositionAppliedFor=${encodeURIComponent(job.applicationTitle)}&Location=${encodeURIComponent(location.label)}`;
}
