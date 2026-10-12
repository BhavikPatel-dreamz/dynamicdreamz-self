export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatarUrl: string;
  linkedin: string;
  isAuthor?: boolean;
  isFounder?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dynamic Dreamz Team",
    slug: "dynamic-dreamz-team",
    role: "Agency Team",
    bio: "Expert Shopify Plus, ecommerce, and web development team at Dynamic Dreamz.",
    avatarUrl: "/assets/brand/dynamic-dreamz-logo.svg",
    linkedin: "https://in.linkedin.com/company/dynamic-dreamz-websolutions",
    isAuthor: true,
  },
  {
    name: "Rizwan Shaikh",
    slug: "rizwan-shaikh",
    role: "Content Team Lead",
    bio: "I lead the content team at Dynamic Dreamz, shaping clear, purposeful narratives across blogs, landing pages, and brand communication. With a strong grasp of SEO, storytelling, and buyer intent, I focus on creating content that is not just readable but also useful, relevant, and built to drive real business outcomes.",
    avatarUrl: "/assets/blog/authors/rizwanshaikh.webp",
    linkedin: "https://in.linkedin.com/company/dynamic-dreamz-websolutions",
    isAuthor: true,
  },
  {
    name: "Tejal Parekh",
    slug: "tejal-parekh",
    role: "Sr. SEO Expert",
    bio: "Tejal Parekh is a seasoned Senior SEO Expert with a proven track record of driving organic growth for businesses across diverse industries. With a deep understanding of search engine algorithms and a passion for digital marketing, Tejal brings a wealth of expertise to Dynamic Dreamz.",
    avatarUrl: "/assets/blog/authors/tejal-parekh-img.webp",
    linkedin: "https://in.linkedin.com/in/tejal-parekh-814310206",
    isAuthor: true,
  },
  {
    name: "Virag Shah",
    slug: "virag-shah",
    role: "Co-Founder & CEO",
    bio: "A marketing maverick. Virag is growth hungry. He never settles down but always looks for the next.",
    avatarUrl: "/assets/about/team/virag-shah.jpg",
    linkedin: "https://in.linkedin.com/in/virag-shah-950b9b102",
    isFounder: true,
  },
  {
    name: "Gaurav Shah",
    slug: "gaurav-shah",
    role: "Co-Founder & CEO",
    bio: "A razor sharp analytic. Gaurav is spot-on in assessing business intricacy and comes up with unique solutions.",
    avatarUrl: "/assets/about/team/gaurav-shah.jpg",
    linkedin: "https://in.linkedin.com/in/dynamicdreamz?trk=org-employees",
    isFounder: true,
  },
  {
    name: "Sanjay Patel",
    slug: "sanjay-patel",
    role: "Co-Founder & CTO",
    bio: "A die hard techie. Sanjay is passionate to embrace latest technology to transform clients' business.",
    avatarUrl: "/assets/about/team/sanjay-patel.jpg",
    linkedin: "https://www.linkedin.com/in/sanjay-patel-799272137/",
    isFounder: true,
  },
];
