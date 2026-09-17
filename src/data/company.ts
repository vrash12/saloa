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
export const technologies = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "JavaScript"],
  },
  {
    group: "Backend",
    items: ["Python", "Django", "Flask", "PHP", "Laravel", "Node.js"],
  },
  { group: "Mobile", items: ["React Native"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"] },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Google Cloud", "GitHub", "Linux", "CI/CD"],
  },
  { group: "AI", items: ["OpenAI", "Claude", "Gemini"] },
  { group: "Design", items: ["Figma"] },
  {
    group: "Integration",
    items: ["REST APIs", "Google APIs", "Maps", "Payment Gateways"],
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
