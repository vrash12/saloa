import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Layers3,
  MoveUpRight,
  Handshake,
  Building2,
  Hotel,
  ShoppingBag,
  GraduationCap,
  UsersRound,
  Landmark,
  BriefcaseBusiness,
  Rocket,
  Plus,
  Braces,
  Globe2,
} from "lucide-react";
import { SectionHeader } from "../components/UI";
import { process, technologies, solutions } from "../data/company";
import type { Solution } from "../data/company";

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="From problem to production."
        >
          <p>
            A clear path from the first conversation to a system your team can
            depend on.
          </p>
        </SectionHeader>
        <ol className="process-timeline">
          {process.map((stage, i) => (
            <li key={stage.title}>
              <div className="process-step">
                <span>0{i + 1}</span>
                <i />
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
        <div className="process-note">
          <span>
            <Handshake size={18} />A shared process, at every stage.
          </span>
          <p>Clear communication. Thoughtful decisions. No black box.</p>
        </div>
      </div>
    </section>
  );
}
export function WhySaola() {
  const reasons = [
    {
      icon: Target,
      title: "Business-first thinking",
      copy: "We begin with the problem—not the framework.",
    },
    {
      icon: Layers3,
      title: "End-to-end delivery",
      copy: "Strategy, design, development, deployment, and support.",
    },
    {
      icon: MoveUpRight,
      title: "Built to grow",
      copy: "Solutions designed to evolve alongside your organization.",
    },
    {
      icon: Handshake,
      title: "Long-term partnership",
      copy: "Launching the system is only the beginning.",
    },
  ];
  return (
    <section className="section why-section">
      <div className="container why-layout">
        <div>
          <p className="eyebrow">
            <span />
            WHY SAOLA
          </p>
          <h2>
            Technology built
            <br />
            around real
            <br />
            <span>business problems.</span>
          </h2>
        </div>
        <div className="why-reasons">
          {reasons.map(({ icon: Icon, title, copy }) => (
            <article key={title}>
              <Icon size={25} strokeWidth={1.5} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Solutions({
  onSelect,
}: {
  onSelect: (solution: Solution) => void;
}) {
  const [selected, setSelected] = useState(0);
  const solution = solutions[selected];
  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        <SectionHeader
          eyebrow="BUILT FOR WHAT’S NEXT"
          title={
            <>
              What can we
              <br />
              build together?
            </>
          }
        >
          <p>
            Different businesses. Different challenges.
            <br />
            Examples of solutions we can develop around yours.
          </p>
        </SectionHeader>
        <div className="solutions-layout">
          <div
            className="solution-options"
            role="group"
            aria-label="Explore solution capabilities"
          >
            {solutions.map((item, i) => (
              <button
                key={item.title}
                className={selected === i ? "is-active" : ""}
                aria-pressed={selected === i}
                aria-controls="solution-detail"
                onClick={() => setSelected(i)}
              >
                <span>{item.title}</span>
                {selected === i ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <Plus size={15} />
                )}
              </button>
            ))}
          </div>
          <div
            id="solution-detail"
            className="solution-detail"
            aria-live="polite"
          >
            <span className="small-label">{solution.category}</span>
            <div className="solution-symbol" aria-hidden="true">
              <Layers3 size={62} strokeWidth={0.8} />
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <button className="text-link" onClick={() => onSelect(solution)}>
              Talk about this solution
              <ArrowUpRight size={17} />
            </button>
            <span className="solution-disclaimer">
              A capability, ready to take shape around your business.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Industries() {
  const industries = [
    { icon: Building2, name: "Small & Medium Businesses" },
    { icon: Hotel, name: "Hospitality" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: GraduationCap, name: "Education" },
    { icon: UsersRound, name: "Cooperatives" },
    { icon: Landmark, name: "Government" },
    { icon: BriefcaseBusiness, name: "Professional Services" },
    { icon: Rocket, name: "Startups" },
  ];
  return (
    <section className="industries-section">
      <div className="container">
        <div className="industries-heading">
          <p className="eyebrow">
            <span />
            MANY INDUSTRIES. REAL POSSIBILITIES.
          </p>
          <h2>Digital solutions across industries.</h2>
        </div>
        <div className="industries-grid">
          {industries.map(({ icon: Icon, name }) => (
            <div key={name}>
              <Icon size={24} strokeWidth={1.35} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Technology() {
  return (
    <section className="section technology-section">
      <div className="container">
        <SectionHeader
          eyebrow="OUR TOOLKIT"
          title={
            <>
              Modern technology.
              <br />
              <em>Practical solutions.</em>
            </>
          }
        >
          <p>
            We choose technology based on the needs of the product—not because a
            framework is trendy.
          </p>
        </SectionHeader>
        <div className="technology-grid">
          {technologies.map((group) => (
            <div key={group.group}>
              <h3>{group.group}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-visual" aria-hidden="true">
          <div className="about-visual-top">
            <Braces size={18} />
            <span>PURPOSE → PROCESS → PRODUCT</span>
          </div>
          <div className="about-manifesto">
            Thoughtful
            <br />
            by design.
            <br />
            <span>
              Useful
              <br />
              by nature.
            </span>
          </div>
          <div className="about-visual-bottom">
            <Globe2 size={17} />
            <span>SAOLA SYSTEMS</span>
            <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">
            <span />
            ABOUT SAOLA SYSTEMS
          </p>
          <h2>
            We build systems
            <br />
            that help organizations
            <br />
            move forward.
          </h2>
          <p>
            Saola Systems is a software and digital solutions company focused on
            creating useful technology around real-world business needs.
          </p>
          <p>
            From websites and mobile applications to automation, AI,
            integrations, and custom software, we help organizations turn ideas
            and manual processes into reliable digital solutions.
          </p>
          <a href="#contact" className="text-link">
            Let’s get to know your business
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
