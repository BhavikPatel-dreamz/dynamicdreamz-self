import { companyFacts } from "@/data/company";

export const aboutSectionCopy = {
  counterDigitPlaceholder: "8",
  deliveryTitle: "A Team that always delivers",
  foundersTitle: "The People Behind Dynamic Dreamz",
  foundersDescription: [
    "Leaders who drive creativity and technical excellence.",
    "Turning every project into a smooth, successful digital experience.",
  ],
  timelineTitle: "How we started",
  timelineDescription:
    "We Create Robust Strategic Plans That Always Begin with Getting to know you and What you’re trying to achieve",
  valuesTitle: "Our Core Values",
  valuesDescription:
    "We have deeply imbibed accountability, quality, and innovation as our core values and will continue in doing so.",
} as const;

export type AboutPerson = {
  name: string;
  role: string;
  image: string;
  alt: string;
  biography?: string;
  linkedIn?: string;
};

export const aboutHero = {
  title: "Agile. Adept. Accurate.",
  description:
    "We are an enthusiastic team of 150+ creative designers, pragmatic programmers, client centric business managers, stringent testers and above all visionary leaders who are ready to help your online business to grow and flourish by offering innovative and technology enabled solutions.",
  statistics: [
    { label: "Projects", value: companyFacts.projectsCompleted.display },
    { label: "Experts", value: companyFacts.experts.display },
    { label: "Happy Clients", value: companyFacts.happyClients.display },
  ],
} as const;

export const aboutStory = {
  title: "Hey, We Are Dynamic Dreamz",
  description:
    "We are a strong team of 150+ creative web designers, technically sound developers, project managers and analysts ready to help you to take your world changing idea from concept to reality.",
  videoId: "0GEJ928rBnM",
  videoTitle: "Meet the team at Dynamic Dreamz",
} as const;

export const milestones = [
  {
    year: "2006",
    description:
      "When three young college passed engineers started developing website for an offshore client just for sheer passion. They did not even have proper work place at that time. Dynamic Dreamz was established in that year.",
    image: "/assets/about/timeline/established-2006.webp",
    alt: "Three engineers establishing Dynamic Dreamz in 2006",
    width: 312,
    height: 232,
  },
  {
    year: "2008",
    description:
      "Soon their work started getting recognition. More and more clients got engaged with Dynamic Dreamz. The company started hiring with 2 employees and shifted to a small office in Surat, India.",
    image: "/assets/about/timeline/growth-2008.webp",
    alt: "Dynamic Dreamz team growth and first Surat office in 2008",
    width: 285,
    height: 190,
  },
  {
    year: "2012",
    description:
      "The company grew in terms of no. of projects, clients and employees as well. Dynamic Dreamz collaborated with OneIT, Australia",
    image: "/assets/about/timeline/collaboration-2012.webp",
    alt: "Dynamic Dreamz collaboration with OneIT Australia in 2012",
    width: 324,
    height: 172,
  },
  {
    year: "2015",
    description:
      "The company shifted to more spacious office at the center of Surat. Clients are from USA, Canada, European countries and Australia.",
    image: "/assets/about/timeline/surat-office-2015.webp",
    alt: "Dynamic Dreamz moving to a larger Surat office in 2015",
    width: 264,
    height: 190,
  },
  {
    year: "2020",
    description:
      "Dynamic Dreamz established another development center in Ahmedabad, India.",
    image: "/assets/about/timeline/ahmedabad-office-2020.svg",
    alt: "Dynamic Dreamz Ahmedabad development center established in 2020",
    width: 337,
    height: 193,
  },
  {
    year: "2023",
    description:
      "Dynamic Dreamz has been declared as one of the top 10 Shopify developers by UpWork.",
    image: "/assets/about/timeline/top-shopify-developer-2023.webp",
    alt: "Dynamic Dreamz recognized as a top Shopify developer in 2023",
    width: 201,
    height: 170,
  },
  {
    year: "2024",
    description:
      "Dynamic Dreamz proudly celebrates a milestone with a 150+ strong expert team driving innovation and success.",
    image: "/assets/about/timeline/expert-team-2024.svg",
    alt: "Dynamic Dreamz team growing to more than 150 experts in 2024",
    width: 421,
    height: 219,
  },
  {
    year: "2025",
    description:
      "Dynamic Dreamz has achieved the prestigious recognition of becoming a Shopify Platinum Partner, marking a new milestone in our journey of excellence.",
    image: "/assets/about/timeline/shopify-partner-2025.svg",
    alt: "Dynamic Dreamz becoming a Shopify Platinum Partner in 2025",
    width: 382,
    height: 232,
  },
  {
    year: "",
    description: "",
    image: "/assets/about/timeline/more-milestones-ahead.webp",
    alt: "Dynamic Dreamz journey toward future milestones",
    width: 424,
    height: 158,
  },
] as const;

export const founders: AboutPerson[] = [
  {
    name: "Virag Shah",
    role: "Co-Founder & CEO",
    biography:
      "A marketing maverick. Virag is growth hungry. He never settles down but always looks for the next.",
    image: "/assets/about/team/virag-shah.jpg",
    alt: "Virag Shah, Co-Founder and CEO of Dynamic Dreamz",
    linkedIn: "https://in.linkedin.com/in/virag-shah-950b9b102",
  },
  {
    name: "Gaurav Shah",
    role: "Co-Founder & CEO",
    biography:
      "A razor sharp analytic. Gaurav is spot-on in assessing business intricacy and comes up with unique solutions.",
    image: "/assets/about/team/gaurav-shah.jpg",
    alt: "Gaurav Shah, Co-Founder and CEO of Dynamic Dreamz",
    linkedIn: "https://in.linkedin.com/in/dynamicdreamz?trk=org-employees",
  },
  {
    name: "Sanjay Patel",
    role: "Co-Founder & CTO",
    biography:
      "A die hard techie. Sanjay is passionate to embrace latest technology to transform clients’ business.",
    image: "/assets/about/team/sanjay-patel.jpg",
    alt: "Sanjay Patel, Co-Founder and CTO of Dynamic Dreamz",
    linkedIn: "https://www.linkedin.com/in/sanjay-patel-799272137/",
  },
];

export const keyManagers: AboutPerson[] = [
  {
    name: "Mr. Tejal Parekh",
    role: "Operational Manager",
    image: "/assets/about/team/tejal-parekh.jpg",
    alt: "Tejal Parekh, Operational Manager at Dynamic Dreamz",
  },
  {
    name: "Mr. Rishabh Shah",
    role: "Project Manager",
    image: "/assets/about/team/rishabh-shah.jpg",
    alt: "Rishabh Shah, Project Manager at Dynamic Dreamz",
  },
  {
    name: "Ms. Mahima Vyas",
    role: "HR Manager",
    image: "/assets/about/team/mahima-vyas.jpg",
    alt: "Mahima Vyas, HR Manager at Dynamic Dreamz",
  },
  {
    name: "Mr. Ravindra Chauhan",
    role: "DevOps & Systems Manager",
    image: "/assets/about/team/ravindra-chauhan.jpg",
    alt: "Ravindra Chauhan, DevOps and Systems Manager at Dynamic Dreamz",
  },
];

export const departmentLeaders: AboutPerson[] = [
  { name: "Mr. Mukesh Patel", role: "Head of Marketing & Growth", image: "/assets/about/team/mukesh-patel.jpg", alt: "Mukesh Patel, Head of Marketing and Growth at Dynamic Dreamz" },
  { name: "Mr. Manish Patel", role: "Client Relationship Manager", image: "/assets/about/team/manish-patel.jpg", alt: "Manish Patel, Client Relationship Manager at Dynamic Dreamz" },
  { name: "Mr. Umesh Kanani", role: "Head of Shopify Development", image: "/assets/about/team/umesh-kanani.jpg", alt: "Umesh Kanani, Head of Shopify Development at Dynamic Dreamz" },
  { name: "Mr. Bhavik Patel", role: "Head of Full Stack Development", image: "/assets/about/team/bhavik-patel.jpg", alt: "Bhavik Patel, Head of Full Stack Development at Dynamic Dreamz" },
  { name: "Mr. Satish Khairnar", role: "Creative Head", image: "/assets/about/team/satish-khairnar.jpg", alt: "Satish Khairnar, Creative Head at Dynamic Dreamz" },
  { name: "Mr. Dilip Kaklotar", role: "Head of Mobile App Development", image: "/assets/about/team/dilip-kaklotar.jpg", alt: "Dilip Kaklotar, Head of Mobile App Development at Dynamic Dreamz" },
  { name: "Mr. Vijay Borad", role: "Head of PHP Development", image: "/assets/about/team/vijay-borad.jpg", alt: "Vijay Borad, Head of PHP Development at Dynamic Dreamz" },
  { name: "Mr. Roopesh Bahree", role: "Head of WordPress Development", image: "/assets/about/team/roopesh-bahree.jpg", alt: "Roopesh Bahree, Head of WordPress Development at Dynamic Dreamz" },
  { name: "Mr. Ashwin Karena", role: "Team Leader", image: "/assets/about/team/ashwin-karena.jpg", alt: "Ashwin Karena, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Virag Patel", role: "Team Leader", image: "/assets/about/team/virag-patel.jpg", alt: "Virag Patel, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Kevin Desai", role: "Team Leader", image: "/assets/about/team/kevin-desai.jpg", alt: "Kevin Desai, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Taufik Taibani", role: "Team Leader", image: "/assets/about/team/taufik-taibani.jpg", alt: "Taufik Taibani, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Jevin Amareliya", role: "Team Leader", image: "/assets/about/team/jevin-amareliya.jpg", alt: "Jevin Amareliya, Team Leader at Dynamic Dreamz" },
  { name: "Ms. Arzoo Dhingani", role: "Team Leader", image: "/assets/about/team/arzoo-dhingani.jpg", alt: "Arzoo Dhingani, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Bhaumil Mehta", role: "Team Leader", image: "/assets/about/team/bhaumil-mehta.jpg", alt: "Bhaumil Mehta, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Vikas Gamit", role: "Magento Team Leader", image: "/assets/about/team/vikas-gamit.jpg", alt: "Vikas Gamit, Magento Team Leader at Dynamic Dreamz" },
  { name: "Ms. Hinal Tailor", role: "Quality Assurance Lead", image: "/assets/about/team/hinal-tailor.jpg", alt: "Hinal Tailor, Quality Assurance Lead at Dynamic Dreamz" },
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "Uphold unwavering ethics, ensuring transparency, honesty, and accountability in all interactions.",
    icon: "/assets/about/values/integrity.svg",
  },
  {
    title: "Adaptability",
    description:
      "Embrace change, follow industry trends, and empower the team to deliver solutions.",
    icon: "/assets/about/values/adaptability.svg",
  },
  {
    title: "Transparency",
    description:
      "Maintain open communication internally and externally, providing clarity on processes and progress.",
    icon: "/assets/about/values/transparency.svg",
  },
  {
    title: "Client Centric Approach",
    description:
      "Tailoring solutions to client goals, we prioritize satisfaction through personalized experiences.",
    icon: "/assets/about/values/client-centric-approach.svg",
  },
  {
    title: "User Centric Design",
    description:
      "Prioritizing user experience, our intuitive and user friendly designs create positive, seamless Experience.",
    icon: "/assets/about/values/user-centric-design.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Committed to high quality products, our rigorous testing ensures optimal performance, security, and reliability.",
    icon: "/assets/about/values/quality-assurance.svg",
  },
] as const;
