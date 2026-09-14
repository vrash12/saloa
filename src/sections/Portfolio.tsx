import { useState } from "react";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { SectionHeader } from "../components/UI";
import { projects } from "../data/portfolio";
import type { PortfolioProject } from "../data/portfolio";
import "../styles/portfolio.css";

const categories: Array<"All projects" | PortfolioProject["category"]> = [
  "All projects",
  "Business websites",
  "Operations & records",
  "Connected systems",
];

export function Portfolio() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All projects");
  const visibleProjects = projects.filter(
    (project) => category === "All projects" || project.category === category,
  );

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <SectionHeader
          eyebrow="PORTFOLIO"
          title={<>Real projects.<br /><span className="portfolio-heading-accent">Useful systems.</span></>}
        >
          <p>
            Websites and software built around practical needs. Explore the
            idea behind each project, the problem it addresses, and its key features.
          </p>
        </SectionHeader>

        <div className="portfolio-toolbar">
          <div className="portfolio-filters" role="group" aria-label="Filter portfolio projects">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                aria-controls="portfolio-projects"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="portfolio-count" role="status" aria-live="polite">
            {visibleProjects.length} projects
          </p>
        </div>

        <div className="portfolio-projects" id="portfolio-projects">
          {visibleProjects.map((project) => (
            <details className="portfolio-project" key={`${category}-${project.id}`}>
              <summary aria-labelledby={`portfolio-title-${project.id}`}>
                <span className="portfolio-number" aria-hidden="true">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title" id={`portfolio-title-${project.id}`}>{project.title}</h3>
                <span className="portfolio-idea"><span className="portfolio-idea-label">The idea / </span>{project.idea}</span>
                <span className="portfolio-expand" aria-hidden="true"><Plus size={20} /></span>
              </summary>
              <div className="portfolio-details">
                <div className="portfolio-problem">
                  <h4>The problem it addresses</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="portfolio-features">
                  <h4>Key features</h4>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}><Check size={15} aria-hidden="true" /><span>{feature}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="portfolio-footer">
          <p>A similar challenge in your organization?</p>
          <a className="text-link" href="#contact">
            Let’s talk about your project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
