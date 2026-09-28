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
import { useRef } from "react";
import type { CSSProperties } from "react";
import { Button, LogoImage } from "../components/UI";
import { useEcosystemMotion } from "../hooks/useEcosystemMotion";
const nodes = [
  {
    name: "Website",
    label: "DIGITAL PRESENCE",
    icon: PanelsTopLeft,
    className: "node-web",
    wave: 0,
    depth: 1.2,
  },
  {
    name: "Mobile app",
    label: "ON THE MOVE",
    icon: Smartphone,
    className: "node-mobile",
    wave: 1,
    depth: 0.8,
  },
  {
    name: "Business system",
    label: "YOUR OPERATIONS",
    icon: AppWindow,
    className: "node-system",
    wave: 6,
    depth: 1.0,
  },
  {
    name: "Automation",
    label: "CONNECTED WORKFLOWS",
    icon: Workflow,
    className: "node-automation",
    wave: 2,
    depth: 1.3,
  },
  {
    name: "AI",
    label: "PRACTICAL INTELLIGENCE",
    icon: Sparkles,
    className: "node-ai",
    wave: 3,
    depth: 0.9,
  },
  {
    name: "APIs",
    label: "SEAMLESS INTEGRATION",
    icon: Braces,
    className: "node-api",
    wave: 4,
    depth: 1.1,
  },
  {
    name: "Cloud",
    label: "BUILT TO GROW",
    icon: Cloud,
    className: "node-cloud",
    wave: 5,
    depth: 0.7,
  },
];
const connections = [
  "M300 260V95H157",
  "M310 260V79H428",
  "M300 270H96V237",
  "M305 275H475V226",
  "M300 280V423H440",
  "M295 280V469H236",
  "M290 270H105V395",
];
const vars = (values: Record<string, number>) => values as CSSProperties;
export function Hero() {
  const ecosystem = useRef<HTMLDivElement>(null);
  useEcosystemMotion(ecosystem);
  return (
    <>
      <section className="hero" id="home" data-canopy>
        <div className="hero-grid" aria-hidden="true" />
        <div className="canopy-light" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              SAOLA SYSTEMS · DIGITAL SOLUTIONS
            </p>
            <h1>
              <span className="hero-line">Digital solutions</span>{" "}
              <span className="hero-line">built around</span>{" "}
              <span className="hero-line">
                <em className="horn-underline">
                  your business.
                  <svg
                    className="horn-mark"
                    viewBox="0 0 300 24"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 17C78 6 176 3 296 7" pathLength="1" />
                    <path d="M30 22C104 13 190 10 282 13" pathLength="1" />
                  </svg>
                </em>
              </span>
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
            ref={ecosystem}
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
              <g className="core-ripples">
                <circle cx="300" cy="270" r="115" />
                <circle cx="300" cy="270" r="115" />
              </g>
              <g className="connections">
                {connections.map((d) => (
                  <path key={d} d={d} pathLength="1" />
                ))}
              </g>
              <g className="connection-pulses">
                {connections.map((d) => (
                  <path key={d} d={d} />
                ))}
              </g>
              <g className="connection-traces">
                {connections.map((d, i) => (
                  <path
                    key={d}
                    d={d}
                    pathLength="1"
                    style={vars({ "--wave": nodes[i].wave })}
                  />
                ))}
              </g>
            </svg>
            <div className="ecosystem-core ecosystem-core-branded">
              <LogoImage />
            </div>
            {nodes.map(({ icon: Icon, ...node }) => (
              <div
                key={node.name}
                className={`ecosystem-node ${node.className}`}
                style={vars({ "--wave": node.wave, "--depth": node.depth })}
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
            <span key={name} style={vars({ "--i": i })}>
              {i > 0 && <i aria-hidden="true">+</i>}
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
