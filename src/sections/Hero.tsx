import {
  AppWindow,
  Smartphone,
  Workflow,
  Sparkles,
  Braces,
  Cloud,
  PanelsTopLeft,
  ArrowDown,
} from "lucide-react";
import { Button, LogoImage } from "../components/UI";
const nodes = [
  {
    name: "Website",
    label: "DIGITAL PRESENCE",
    icon: PanelsTopLeft,
    className: "node-web",
  },
  {
    name: "Mobile app",
    label: "ON THE MOVE",
    icon: Smartphone,
    className: "node-mobile",
  },
  {
    name: "Business system",
    label: "YOUR OPERATIONS",
    icon: AppWindow,
    className: "node-system",
  },
  {
    name: "Automation",
    label: "CONNECTED WORKFLOWS",
    icon: Workflow,
    className: "node-automation",
  },
  {
    name: "AI",
    label: "PRACTICAL INTELLIGENCE",
    icon: Sparkles,
    className: "node-ai",
  },
  {
    name: "APIs",
    label: "SEAMLESS INTEGRATION",
    icon: Braces,
    className: "node-api",
  },
  {
    name: "Cloud",
    label: "BUILT TO GROW",
    icon: Cloud,
    className: "node-cloud",
  },
];
export function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              SAOLA SYSTEMS · DIGITAL SOLUTIONS
            </p>
            <h1>
              Digital solutions
              <br />
              built around
              <br />
              <em>your business.</em>
            </h1>
            <p className="hero-description">
              We design and develop websites, custom software, intelligent
              automation, and digital systems that help organizations operate
              smarter and grow.
            </p>
            <div className="button-row">
              <Button href="#contact">Start a Project</Button>
              <Button href="#services" secondary>
                Explore Our Services
              </Button>
            </div>
            <p className="hero-capabilities">
              Web <i /> Mobile <i /> Automation <i /> AI <i /> Cloud
            </p>
          </div>
          <div
            className="ecosystem"
            role="img"
            aria-label="Saola Systems connects websites, mobile applications, business systems, automation, AI, APIs, and cloud into a connected digital business."
          >
            <div className="diagram-coordinate coordinate-top">
              YOUR BUSINESS, CONNECTED.
            </div>
            <svg
              className="network-lines"
              viewBox="0 0 600 550"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="300" cy="270" r="184" className="orbit" />
              <circle cx="300" cy="270" r="115" className="orbit orbit-inner" />
              <g className="connections">
                <path d="M300 260V95H157" />
                <path d="M310 260V79H428" />
                <path d="M300 270H96V237" />
                <path d="M305 275H475V226" />
                <path d="M300 280V423H440" />
                <path d="M295 280V469H236" />
                <path d="M290 270H105V395" />
              </g>
              <g className="connection-pulses">
                <path d="M300 260V95H157" />
                <path d="M310 260V79H428" />
                <path d="M300 270H96V237" />
                <path d="M305 275H475V226" />
                <path d="M300 280V423H440" />
                <path d="M295 280V469H236" />
                <path d="M290 270H105V395" />
              </g>
            </svg>
            <div className="ecosystem-core ecosystem-core-branded">
              <LogoImage />
            </div>
            {nodes.map(({ icon: Icon, ...node }) => (
              <div
                key={node.name}
                className={`ecosystem-node ${node.className}`}
              >
                <Icon size={19} aria-hidden="true" />
                <div>
                  <small>{node.label}</small>
                  <strong>{node.name}</strong>
                </div>
                <span className="node-port" />
              </div>
            ))}
            <div className="diagram-coordinate coordinate-bottom">
              <span>01 — SYSTEM OVERVIEW</span>
              <span>∞ POSSIBILITIES</span>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Thoughtfully designed. Purposefully built.</span>
          <a href="#services">
            Discover what’s possible <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="capability-strip" aria-label="Our capabilities">
        <div className="container">
          {[
            "Custom software",
            "Web & mobile",
            "Automation",
            "AI solutions",
            "API integration",
            "Cloud & support",
          ].map((name, i) => (
            <span key={name}>
              {i > 0 && <i aria-hidden="true">+</i>}
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
