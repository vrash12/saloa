import {
  PanelsTopLeft,
  AppWindow,
  Workflow,
  Sparkles,
  Braces,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  className: string;
}
export const services: Service[] = [
  {
    id: "software",
    number: "02",
    title: "Custom Software Development",
    description:
      "Custom web, mobile, and business applications designed around how your organization actually operates.",
    icon: AppWindow,
    className: "service-software",
    capabilities: [
      "Web Applications",
      "Mobile Applications",
      "SaaS Platforms",
      "Management Systems",
      "Customer Portals",
      "Admin Dashboards",
      "Inventory Systems",
      "HR Systems",
      "CRM Systems",
      "Booking Systems",
      "GIS & Mapping Systems",
      "Internal Business Tools",
    ],
  },
  {
    id: "automation",
    number: "03",
    title: "Business Process Automation",
    description:
      "Replace repetitive manual work with streamlined digital workflows that save time and reduce operational errors.",
    icon: Workflow,
    className: "service-automation",
    capabilities: [
      "Workflow Automation",
      "Approval Workflows",
      "Document Tracking",
      "Automated Reporting",
      "Form Automation",
      "Notifications",
      "Customer Onboarding",
      "Employee Workflows",
      "Operational Dashboards",
      "Spreadsheet Replacement",
      "Scheduling",
      "Process Digitization",
    ],
  },
  {
    id: "website",
    number: "01",
    title: "Website & Digital Presence",
    description:
      "Build fast, professional digital experiences that establish credibility and help your business connect with customers.",
    icon: PanelsTopLeft,
    className: "service-website",
    capabilities: [
      "Corporate Websites",
      "Business Websites",
      "E-commerce",
      "Booking & Reservation Platforms",
      "WordPress Development",
      "Custom Websites",
      "Website Redesign",
      "Responsive Design",
      "Accessibility",
      "SEO Foundations",
      "Domain Setup",
      "Business Email Setup",
      "Hosting Setup",
    ],
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Intelligent Solutions",
    description:
      "Practical AI solutions that help teams automate tasks, process information, and create smarter digital experiences.",
    icon: Sparkles,
    className: "service-ai",
    capabilities: [
      "AI Assistants",
      "AI Chatbots",
      "OpenAI Integration",
      "Claude Integration",
      "Gemini Integration",
      "Document Intelligence",
      "AI Search",
      "Knowledge Assistants",
      "AI Workflow Automation",
      "LLM Integration",
      "Computer Vision",
      "Intelligent Data Processing",
    ],
  },
  {
    id: "integration",
    number: "05",
    title: "System Integration & APIs",
    description:
      "Connect applications, business data, payments, and third-party platforms into one seamless ecosystem.",
    icon: Braces,
    className: "service-integration",
    capabilities: [
      "REST APIs",
      "Third-party Integrations",
      "Payment Gateways",
      "Data Synchronization",
      "CRM Integration",
      "Accounting Integration",
      "Maps Integration",
      "Email Integration",
      "SMS Integration",
      "Legacy Systems",
      "API Development",
    ],
  },
  {
    id: "cloud",
    number: "06",
    title: "Cloud & Managed Support",
    description:
      "Deploy, maintain, monitor, and continuously improve your systems so your organization can focus on its operations.",
    icon: Cloud,
    className: "service-cloud",
    capabilities: [
      "Cloud Deployment",
      "Database Deployment",
      "Docker",
      "Monitoring",
      "Backups",
      "Maintenance",
      "Bug Fixing",
      "Performance Optimization",
      "Security Updates",
      "Technical Support",
      "System Enhancements",
    ],
  },
];
