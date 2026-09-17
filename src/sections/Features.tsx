import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  FileText,
  Mail,
  ClipboardCheck,
  Table2,
  BarChart3,
  Database,
  Workflow,
  Play,
  RotateCcw,
  LayoutDashboard,
  Users,
  Package,
  Settings,
  Search,
  ChevronDown,
  Bell,
  LockKeyhole,
  Smartphone,
  Zap,
  Accessibility,
  Sparkles,
  Send,
  BookOpen,
  ScanText,
  MessagesSquare,
} from "lucide-react";
const before = [
  { name: "Spreadsheet", icon: Table2 },
  { name: "Email thread", icon: Mail },
  { name: "Manual approval", icon: ClipboardCheck },
  { name: "Data encoding", icon: Database },
  { name: "Manual report", icon: FileText },
];
const after = [
  { name: "Digital form", icon: FileText },
  { name: "Automated workflow", icon: Workflow },
  { name: "Smart approval", icon: ClipboardCheck },
  { name: "Central database", icon: Database },
  { name: "Live dashboard", icon: BarChart3 },
];
const statuses = [
  "Ready to run a sample request.",
  "Sample form submitted. Routing to the right reviewer.",
  "Request routed. Ready for review.",
  "Your review is needed. Approve the sample to continue.",
  "Approved. Saving the request to the central database.",
  "Workflow complete. The sample request is ready in the dashboard.",
];
export function AutomationFeature() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step === 1 || step === 2 || step === 4) {
      const timer = window.setTimeout(() => setStep((s) => s + 1), 1150);
      return () => clearTimeout(timer);
    }
  }, [step]);
  return (
    <section className="automation-feature section" id="automation-feature">
      <div className="container">
        <div className="automation-heading">
          <p className="eyebrow">
            <span />
            LESS REPETITION. MORE POSSIBILITY.
          </p>
          <h2>
            Turn manual processes
            <br />
            into <em>digital workflows.</em>
          </h2>
          <p>
            Spreadsheets, email threads, paper forms, repetitive data entry.
            <br className="desktop-break" /> We build systems that connect the
            pieces—and keep work moving.
          </p>
        </div>
        <div className="workflow-comparison">
          <div className="workflow-row before">
            <div className="workflow-label">
              <span className="small-label">THE EVERYDAY BOTTLENECK</span>
              <h3>Before</h3>
            </div>
            <ol>
              {before.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <div>
                    <Icon size={22} strokeWidth={1.4} />
                    <span>{name}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="workflow-row after">
            <div className="workflow-label">
              <span className="small-label">A BETTER WAY TO WORK</span>
              <h3>
                With Saola
                <ArrowUpRight size={20} />
              </h3>
            </div>
            <ol>
              {after.map(({ name, icon: Icon }, i) => (
                <li className={step > i ? "is-active" : ""} key={name}>
                  <div>
                    <Icon size={22} strokeWidth={1.4} />
                    <span>{name}</span>
                    {step > i && <Check className="step-check" size={12} />}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="workflow-controls">
          <div>
            <span className="demo-label">INTERACTIVE CONCEPT</span>
            <p role="status" aria-live="polite">
              {statuses[step]}
            </p>
          </div>
          <div className="workflow-buttons">
            {step === 3 ? (
              <button
                className="button button-primary"
                onClick={() => setStep(4)}
              >
                Approve sample request
                <Check size={16} />
              </button>
            ) : (
              <button
                className="button button-primary"
                disabled={step > 0 && step < 5}
                onClick={() => setStep(1)}
              >
                {step === 5
                  ? "Run again"
                  : step > 0
                    ? "Workflow running…"
                    : "Run sample workflow"}
                <Play size={14} />
              </button>
            )}
            {step > 0 && (
              <button
                className="icon-button"
                onClick={() => setStep(0)}
                aria-label="Reset sample workflow"
              >
                <RotateCcw size={17} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
const dashboardTabs = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Operations", icon: Workflow },
  { label: "Customers", icon: Users },
  { label: "Inventory", icon: Package },
  { label: "Documents", icon: FileText },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];
const dashboardContent: Record<
  string,
  { title: string; description: string; rows: string[] }
> = {
  Dashboard: {
    title: "Your operations, at a glance.",
    description: "A shared view of what needs attention.",
    rows: ["Purchase request", "Customer onboarding", "Document review"],
  },
  Operations: {
    title: "Keep work moving.",
    description: "Track each request from creation to completion.",
    rows: ["Purchase request", "Leave application", "Equipment request"],
  },
  Customers: {
    title: "A clearer customer picture.",
    description: "Bring conversations and records together.",
    rows: [
      "New customer profile",
      "Onboarding checklist",
      "Customer follow-up",
    ],
  },
  Inventory: {
    title: "Everything in its place.",
    description: "Organize stock, movements, and replenishment.",
    rows: ["Item catalog", "Stock transfer", "Reorder request"],
  },
  Documents: {
    title: "Find the right information.",
    description: "Organize files, versions, and approvals.",
    rows: ["Operations handbook", "Request template", "Document review"],
  },
  Reports: {
    title: "Turn records into clarity.",
    description: "Build reports around your decisions.",
    rows: ["Operations summary", "Inventory movement", "Approval history"],
  },
  Settings: {
    title: "Make the system your own.",
    description: "Configure roles, workflows, and notifications.",
    rows: ["Team permissions", "Workflow rules", "Notification preferences"],
  },
};
export function SoftwareFeature() {
  const [tab, setTab] = useState("Dashboard");
  const content = dashboardContent[tab];
  return (
    <section className="section software-feature">
      <div className="container feature-split">
        <div className="feature-copy">
          <p className="eyebrow">
            <span />
            CUSTOM SOFTWARE · WEB + MOBILE
          </p>
          <h2>
            Software designed
            <br />
            around how your
            <br />
            <span className="software-heading-accent">organization works.</span>
          </h2>
          <p>
            Off-the-shelf tools don’t always match the way your organization
            operates. We build applications around your workflows, requirements,
            and users.
          </p>
          <ul className="check-list">
            <li>
              <Check />
              Built for your processes
            </li>
            <li>
              <Check />
              Designed for the people using it
            </li>
            <li>
              <Check />
              Ready to evolve with your business
            </li>
            <li>
              <Check />
              Security and access controls suited to your system
            </li>
          </ul>
          <a className="text-link" href="#service-software">
            Explore custom development
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="dashboard-frame">
          <div className="mockup-caption">
            <span>YOUR SYSTEM. YOUR WAY.</span>
            <span>CONCEPT INTERFACE ↗</span>
          </div>
          <div className="dashboard">
            <aside className="dashboard-sidebar">
              <div className="workspace-label">
                <span className="workspace-icon">
                  <LayoutDashboard size={15} />
                </span>
                <strong>Workspace</strong>
              </div>
              <nav aria-label="Concept dashboard views">
                {dashboardTabs.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className={tab === label ? "is-active" : ""}
                    aria-pressed={tab === label}
                    onClick={() => setTab(label)}
                  >
                    <Icon size={13} />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
              <div className="sidebar-bottom">
                <span>W</span> Your workspace
              </div>
            </aside>
            <div className="dashboard-main">
              <div className="dashboard-top">
                <span>
                  {tab}
                  <ChevronDown size={10} />
                </span>
                <div>
                  <Search size={12} />
                  <Bell size={12} />
                  <span className="avatar">U</span>
                </div>
              </div>
              <div className="dashboard-content">
                <p className="dashboard-breadcrumb">Workspace / {tab}</p>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <div className="dashboard-statuses">
                  <div>
                    <span className="status-icon">
                      <FileText size={15} />
                    </span>
                    <small>Requests</small>
                    <strong>In one place</strong>
                  </div>
                  <div>
                    <span className="status-icon">
                      <ClipboardCheck size={15} />
                    </span>
                    <small>Approvals</small>
                    <strong>Easy to follow</strong>
                  </div>
                  <div>
                    <span className="status-icon">
                      <Workflow size={15} />
                    </span>
                    <small>Workflows</small>
                    <strong>Connected</strong>
                  </div>
                </div>
                <div className="requests-heading">
                  <strong>
                    {tab === "Dashboard" ? "Recent activity" : tab}
                  </strong>
                  <span>Sample view</span>
                </div>
                <div className="requests-table">
                  <div className="table-heading">
                    <span>ITEM</span>
                    <span>STATUS</span>
                  </div>
                  {content.rows.map((row, i) => (
                    <div className="request-row" key={row}>
                      <span>
                        <FileText size={12} />
                        {row}
                      </span>
                      <span
                        className={`status-pill ${i === 1 ? "status-complete" : ""}`}
                      >
                        {["In review", "Ready", "Draft"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="dashboard-bottom">
                  <span>
                    <LockKeyhole size={10} />
                    Role-based access
                  </span>
                  <span>Designed around your team</span>
                </div>
              </div>
            </div>
          </div>
          <p className="concept-note">
            Illustrative interface. A glimpse of what we can build together.
          </p>
        </div>
      </div>
    </section>
  );
}
export function WebsiteFeature() {
  return (
    <section className="section website-feature">
      <div className="container feature-split reverse">
        <div className="website-visual">
          <div className="browser-mockup">
            <div className="browser-bar">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>
                <LockKeyhole size={10} />
                your-business.com
              </span>
              <ArrowUpRight size={12} />
            </div>
            <div className="example-website">
              <div className="example-nav">
                <span>YOUR BUSINESS</span>
                <div>
                  About <span>Services</span> Contact
                </div>
              </div>
              <div className="example-hero">
                <p>A BETTER DIGITAL EXPERIENCE</p>
                <h3>
                  Make a great
                  <br />
                  first impression.
                </h3>
                <span>
                  A clear story. A thoughtful experience.
                  <br />A website that works for you.
                </span>
                <div className="example-button">
                  Let’s connect <ArrowUpRight size={11} />
                </div>
                <div className="website-geometry" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="example-lower">
                <div>
                  <span>01</span>Build credibility
                </div>
                <div>
                  <span>02</span>Connect with customers
                </div>
                <div>
                  <span>03</span>Grow your presence
                </div>
              </div>
            </div>
          </div>
          <div className="phone-mockup" aria-hidden="true">
            <div className="phone-notch" />
            <span>YOUR BUSINESS</span>
            <h4>
              A great
              <br />
              experience.
              <br />
              Everywhere.
            </h4>
            <div className="phone-geometry" />
            <div className="example-button">Let’s connect ↗</div>
          </div>
          <p className="concept-note">
            Responsive website concept · Desktop to mobile
          </p>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">
            <span />
            WEBSITE & DIGITAL PRESENCE
          </p>
          <h2>
            Your website
            <br />
            should do more
            <br />
            than simply exist.
          </h2>
          <p>
            We create responsive websites with technical SEO foundations,
            designed to build credibility, perform well across devices, and
            help customers take action.
          </p>
          <div className="website-benefits">
            {[
              { icon: Smartphone, name: "Responsive" },
              { icon: Zap, name: "Fast" },
              { icon: Accessibility, name: "Accessible" },
              { icon: Search, name: "SEO-ready" },
              { icon: ArrowUpRight, name: "Conversion-focused" },
              { icon: Settings, name: "Easy to maintain" },
            ].map(({ icon: Icon, name }) => (
              <span key={name}>
                <Icon size={16} />
                {name}
              </span>
            ))}
          </div>
          <a className="text-link" href="#service-website">
            Build your digital presence
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
const aiExamples = [
  {
    title: "Knowledge assistants",
    icon: BookOpen,
    question: "How do I submit a purchase request?",
    answer:
      "Start with the purchase request form. Add the items, business purpose, and supporting documents. Your request will be routed to the designated approver.",
    source: "Example operations handbook · Purchasing",
    caption:
      "Help your team find useful answers in approved internal knowledge.",
  },
  {
    title: "Document intelligence",
    icon: ScanText,
    question: "Extract the fields we need from this document.",
    answer:
      "I can prepare a structured draft with the document type, reference, dates, and line items. Your team reviews the extracted fields before they enter your system.",
    source: "Example document workflow · Human review",
    caption:
      "Extract data and prepare summaries, with review where it matters.",
  },
  {
    title: "Customer support",
    icon: MessagesSquare,
    question: "Can an assistant help customers after hours?",
    answer:
      "An assistant can answer routine questions using your approved content, collect the context for a request, and pass issues to your team when a person needs to help.",
    source: "Example support workflow · Team handoff",
    caption:
      "Handle common questions and make the handoff to your team smoother.",
  },
];
export function AIFeature() {
  const [selected, setSelected] = useState(0);
  const example = aiExamples[selected];
  return (
    <section className="section ai-feature">
      <div className="container feature-split">
        <div className="feature-copy">
          <p className="eyebrow">
            <span />
            PRACTICAL INTELLIGENCE
          </p>
          <h2>
            AI where it creates
            <br />
            real business value.
          </h2>
          <p>
            Useful AI starts with a useful job to do. We connect intelligence to
            the information, tools, and workflows your team already relies on.
          </p>
          <div
            className="ai-options"
            role="group"
            aria-label="Explore AI examples"
          >
            {aiExamples.map(({ title, icon: Icon }, i) => (
              <button
                key={title}
                aria-pressed={selected === i}
                className={selected === i ? "is-active" : ""}
                onClick={() => setSelected(i)}
              >
                <Icon size={19} />
                <span>{title}</span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
          <p className="ai-footnote">
            AI-powered search, summaries, data extraction, and workflow
            intelligence—with human oversight built in.
          </p>
        </div>
        <div className="ai-demo">
          <div className="ai-demo-header">
            <span className="ai-icon">
              <Sparkles size={18} />
            </span>
            <div>
              <strong>Business assistant</strong>
              <span>Grounded in your knowledge</span>
            </div>
            <span className="demo-badge">CONCEPT</span>
          </div>
          <div className="ai-conversation" aria-live="polite">
            <div className="ai-question">{example.question}</div>
            <div className="ai-response">
              <Sparkles size={16} />
              <div>
                <p>{example.answer}</p>
                <div className="ai-source">
                  <FileText size={13} />
                  <span>{example.source}</span>
                </div>
              </div>
            </div>
            <p className="ai-caption">{example.caption}</p>
          </div>
          <div className="ai-input" aria-hidden="true">
            <span>Ask a question about your business…</span>
            <Send size={15} />
          </div>
          <div className="ai-demo-footer">
            <LockKeyhole size={11} />
            Configured around your data and access policies.
          </div>
        </div>
      </div>
    </section>
  );
}
