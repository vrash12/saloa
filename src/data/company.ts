export const process = [
  {
    title: "Discover",
    description:
      "We learn about your business, users, existing processes, challenges, and objectives.",
  },
  {
    title: "Plan",
    description:
      "We define requirements, security needs, scope, architecture, and the roadmap.",
  },
  {
    title: "Design",
    description:
      "We design workflows, interfaces, prototypes, and the product experience.",
  },
  {
    title: "Build",
    description:
      "We build maintainable software with access controls and data protection suited to your system.",
  },
  {
    title: "Test & launch",
    description:
      "We test functionality and security controls, then configure CI/CD and release checks to suit your project.",
  },
  {
    title: "Support & improve",
    description:
      "We monitor, apply security updates, and improve your product through the agreed support plan.",
  },
];
export interface TechnologyItem {
  name: string;
  logo?: string;
}

export interface TechnologyGroup {
  group: string;
  items: TechnologyItem[];
}

const technologyLogo = (name: string) => `/logos/technology/${name}.svg`;

export const technologies: TechnologyGroup[] = [
  {
    group: "Frontend frameworks",
    items: [
      { name: "React", logo: technologyLogo("react") },
      { name: "TypeScript", logo: technologyLogo("typescript") },
      { name: "Next.js", logo: technologyLogo("nextjs") },
      { name: "Vite", logo: technologyLogo("vitejs") },
      { name: "JavaScript", logo: technologyLogo("javascript") },
      { name: "HTML5", logo: technologyLogo("html5") },
      { name: "CSS3", logo: technologyLogo("css3") },
      { name: "Tailwind CSS", logo: technologyLogo("tailwindcss") },
      { name: "Vue.js", logo: technologyLogo("vuejs") },
    ],
  },
  {
    group: "Backend frameworks",
    items: [
      { name: "Node.js", logo: technologyLogo("nodejs") },
      { name: "Express", logo: technologyLogo("express") },
      { name: "NestJS", logo: technologyLogo("nestjs") },
      { name: "Python", logo: technologyLogo("python") },
      { name: "Django", logo: technologyLogo("django") },
      { name: "Flask", logo: technologyLogo("flask") },
      { name: "PHP", logo: technologyLogo("php") },
      { name: "Laravel", logo: technologyLogo("laravel") },
      { name: "REST APIs" },
      { name: "Zod", logo: technologyLogo("zod") },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "React Native", logo: technologyLogo("react") },
      { name: "QR & barcode flows" },
    ],
  },
  {
    group: "Data & storage",
    items: [
      { name: "PostgreSQL", logo: technologyLogo("postgresql") },
      { name: "MySQL", logo: technologyLogo("mysql") },
      { name: "SQLite", logo: technologyLogo("sqlite") },
      { name: "Supabase", logo: technologyLogo("supabase") },
      { name: "Drizzle ORM", logo: technologyLogo("drizzle") },
      { name: "PostGIS" },
    ],
  },
  {
    group: "Cloud & delivery",
    items: [
      { name: "Docker", logo: technologyLogo("docker") },
      { name: "Google Cloud", logo: technologyLogo("googlecloud") },
      { name: "Vercel", logo: technologyLogo("vercel") },
      { name: "GitHub", logo: technologyLogo("github") },
      { name: "Linux", logo: technologyLogo("linux") },
      { name: "CI/CD" },
    ],
  },
  {
    group: "AI & intelligence",
    items: [
      { name: "OpenAI", logo: technologyLogo("openai") },
      { name: "Claude", logo: technologyLogo("claude") },
      { name: "Gemini", logo: technologyLogo("googlegemini") },
      { name: "Document intelligence" },
      { name: "Knowledge retrieval" },
    ],
  },
  {
    group: "Design & quality",
    items: [
      { name: "Figma", logo: technologyLogo("figma") },
      { name: "Playwright", logo: technologyLogo("playwright") },
      { name: "Vitest", logo: technologyLogo("vitest") },
      { name: "Chart.js", logo: technologyLogo("chartjs") },
      { name: "Alpine.js", logo: technologyLogo("alpinejs") },
    ],
  },
  {
    group: "Maps & connected systems",
    items: [
      { name: "Google APIs" },
      { name: "Google Maps" },
      { name: "Leaflet", logo: technologyLogo("leaflet") },
      { name: "MQTT", logo: technologyLogo("mqtt") },
      { name: "Arduino", logo: technologyLogo("arduino") },
      { name: "GIS & mapping" },
    ],
  },
  {
    group: "Business integrations",
    items: [
      { name: "Payment gateways" },
      { name: "Email notifications" },
      { name: "Resend", logo: technologyLogo("resend") },
      { name: "OAuth & JWT" },
      { name: "Exports & reporting" },
    ],
  },
];
export interface Solution {
  title: string;
  category: string;
  description: string;
  interest: string;
}
export const solutions: Solution[] = [
  {
    title: "Business Management System",
    category: "OPERATIONS",
    description:
      "Bring people, processes, records, and approvals into a shared workspace designed around your operations.",
    interest: "Custom Software",
  },
  {
    title: "Inventory Management Platform",
    category: "OPERATIONS",
    description:
      "Organize your item catalog, stock movements, purchasing, and reorder workflows in one system.",
    interest: "Custom Software",
  },
  {
    title: "Hotel Booking System",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Connect room availability, reservations, guest details, and booking administration.",
    interest: "Custom Software",
  },
  {
    title: "Customer Portal",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Give customers a clear place to manage requests, access documents, and follow updates.",
    interest: "Custom Software",
  },
  {
    title: "Mobile Application",
    category: "DIGITAL PRODUCTS",
    description:
      "Put useful tools in your users’ hands with a mobile experience built around their needs.",
    interest: "Custom Software",
  },
  {
    title: "SaaS Platform",
    category: "DIGITAL PRODUCTS",
    description:
      "Turn a product idea into a maintainable application with user accounts, core workflows, and subscription integrations.",
    interest: "Custom Software",
  },
  {
    title: "AI Business Assistant",
    category: "INTELLIGENCE",
    description:
      "Help teams search approved knowledge, summarize information, and prepare routine work for review.",
    interest: "AI Solution",
  },
  {
    title: "Workflow Automation Platform",
    category: "AUTOMATION",
    description:
      "Move requests from intake to approval with routing, notifications, and a clear activity history.",
    interest: "Business Automation",
  },
  {
    title: "Operations Dashboard",
    category: "OPERATIONS",
    description:
      "Bring relevant records and activity into a clear view that supports everyday decisions.",
    interest: "Custom Software",
  },
  {
    title: "CRM",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Organize contacts, conversations, opportunities, and customer follow-ups around your sales process.",
    interest: "Custom Software",
  },
  {
    title: "HRIS",
    category: "OPERATIONS",
    description:
      "Connect employee records, leave requests, onboarding, and internal HR workflows with appropriate access controls.",
    interest: "Custom Software",
  },
  {
    title: "GIS / Mapping Platform",
    category: "DIGITAL PRODUCTS",
    description:
      "Explore location-based information with interactive maps, search, and layers relevant to your organization.",
    interest: "Custom Software",
  },
  {
    title: "E-commerce Platform",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Build a considered shopping experience with a product catalog, checkout, payments, and order management.",
    interest: "Website & Digital Presence",
  },
  {
    title: "Document Management System",
    category: "OPERATIONS",
    description:
      "Organize documents, versions, reviews, and retrieval with roles and workflows tailored to your team.",
    interest: "Custom Software",
  },
  {
    title: "Reservation System",
    category: "CUSTOMER EXPERIENCE",
    description:
      "Manage availability, reservations, confirmations, and scheduling for your services or spaces.",
    interest: "Custom Software",
  },
];
