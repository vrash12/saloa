export interface PortfolioProject {
  id: string;
  title: string;
  category: "Business websites" | "Operations & records" | "Connected systems";
  idea: string;
  problem: string;
  features: string[];
  sourceUrl: string;
}

export const projects: PortfolioProject[] = [
  {
    id: "corporate-services-website",
    title: "Corporate Services Website",
    category: "Business websites",
    idea: "A corporate website that brings telecommunications and infrastructure services, technical credentials, and project inquiries into a clear, responsive experience for prospective customers.",
    problem: "Technical service buyers need a clear way to understand a company's capabilities and provide the right information when requesting a project quote.",
    features: [
      "Responsive service pages",
      "Technical credentials",
      "Validated quote requests",
      "Contact forms",
      "Email notifications",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/17",
  },
  {
    id: "cemetery-management",
    title: "Cemetery Management System",
    category: "Operations & records",
    idea: "A cemetery management platform connecting burial records, plot reservations, maintenance, and visitor services with an interactive map for locating plots and planning a visit.",
    problem: "Cemetery teams need organized records and plot information, while visitors need a practical way to find a burial location and navigate to it.",
    features: [
      "Burial records & plot reservations",
      "Interactive cemetery map",
      "Deceased-person search",
      "QR scanning & route guidance",
      "Maintenance schedules",
      "Role-based access",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/15",
  },
  {
    id: "adoption-case-management",
    title: "Adoption Case Management System",
    category: "Operations & records",
    idea: "An adoption case and donation management platform that connects applications, sensitive documents, and review stages, with AI assistance that keeps matching decisions with human reviewers.",
    problem: "Adoption teams need to coordinate sensitive profiles, document requirements, reviews, and donations while keeping case access controlled and decisions accountable to human reviewers.",
    features: [
      "Applications & case tracking",
      "Child & parent profiles",
      "Controlled document access",
      "Donation tracking & reports",
      "Human-reviewed matching assistance",
      "AI-assisted legal information retrieval",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/14",
  },
  {
    id: "network-access-management",
    title: "Network Access Management System",
    category: "Connected systems",
    idea: "A network management system linking an administrative dashboard with a Linux network agent to control hotspot access, apply bandwidth policies, and monitor connected devices.",
    problem: "Shared networks need a manageable way to approve devices, set access permissions, and apply bandwidth rules while giving administrators visibility into network activity.",
    features: [
      "Automatic device detection",
      "Access approval workflows",
      "Role-based permissions",
      "Firewall policy enforcement",
      "Bandwidth management",
      "Activity logs & reporting",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/13",
  },
  {
    id: "equipment-catalog-website",
    title: "Equipment Catalog Website",
    category: "Business websites",
    idea: "A commercial kitchen equipment website that connects product discovery with parts and service support, helping customers prepare useful equipment details before making an inquiry.",
    problem: "Equipment customers need to find product information and communicate model, serial, and service details clearly so a distributor can understand their parts or support request.",
    features: [
      "Equipment catalogs",
      "Product detail pages",
      "Supported brand listings",
      "Parts request forms",
      "Service information",
      "Organization & team pages",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/12",
  },
  {
    id: "public-transport-management",
    title: "Public Transport Management System",
    category: "Connected systems",
    idea: "A connected public transport platform bringing live bus information, passenger visibility, digital fares, and daily fleet operations into linked commuter and staff experiences.",
    problem: "Commuters need reliable arrival and occupancy information, while transport staff need connected tools for ticketing, top-ups, schedules, and vehicle monitoring throughout daily operations.",
    features: [
      "Live bus tracking",
      "Occupancy, ETAs & schedules",
      "QR wallet ticketing",
      "Top-ups & staff ticket issuance",
      "Announcements & pickup sharing",
      "Fleet operations dashboard",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/11",
  },
  {
    id: "healthcare-workflow-records",
    title: "Healthcare Workflow & Records System",
    category: "Operations & records",
    idea: "A healthcare workflow and medical records management system designed to support hospital or clinic operations, organize patient records, and provide trend forecasting tools.",
    problem: "Healthcare teams need a structured way to coordinate service workflows and maintain patient records so operational information can be handled consistently across their work.",
    features: [
      "Healthcare workflow management",
      "Medical records management",
      "Trend forecasting",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/10",
  },
  {
    id: "barangay-management",
    title: "Barangay Management System",
    category: "Operations & records",
    idea: "A service operations and records platform that brings resident information, public service requests, staff processing, and administrative reporting into connected workflows for a barangay office.",
    problem: "Barangay offices need a searchable, traceable way to coordinate resident records, requests, appointments, complaints, and financial activity that may otherwise sit in separate files.",
    features: [
      "Resident & household records",
      "Certificates, appointments & complaints",
      "Financial transaction tracking",
      "Role permissions & audit logs",
      "Notifications & reminders",
      "Analytics & PDF, CSV, Excel exports",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/16",
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Operations & records",
    idea: "A patient-focused healthcare platform bringing medical records, patient information, and healthcare service processes together to support more organized handling of day-to-day care administration.",
    problem: "Healthcare services need a consistent way to organize patient details and medical records while keeping the administrative processes around those records connected and manageable.",
    features: [
      "Medical records management",
      "Patient information management",
      "Healthcare service workflows",
    ],
    sourceUrl: "https://vrmsuliva.online/projects/9",
  },
];
