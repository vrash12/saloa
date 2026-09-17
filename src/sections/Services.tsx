import {
  ArrowUpRight,
  Plus,
  Check,
  Smartphone,
  Monitor,
  Database,
  ArrowRight,
  ShieldCheck,
  Search,
  GitBranch,
} from "lucide-react";
import { SectionHeader } from "../components/UI";
import { services } from "../data/services";
export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title={
            <>
              Technology that works
              <br />
              for your business.
            </>
          }
        >
          <p>
            From establishing your digital presence to automating complex
            workflows, we create technology around real business needs.
          </p>
        </SectionHeader>
        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card ${service.className}`}
            >
              <div className="service-top">
                <service.icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <span>/{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.id === "software" && (
                <div
                  className="service-mini-visual software-mini"
                  aria-hidden="true"
                >
                  <span>
                    <Monitor size={19} />
                    WEB
                  </span>
                  <i>+</i>
                  <span>
                    <Smartphone size={18} />
                    MOBILE
                  </span>
                  <span className="mini-caption">
                    One considered experience.
                  </span>
                </div>
              )}
              {service.id === "automation" && (
                <div
                  className="service-mini-visual automation-mini"
                  aria-hidden="true"
                >
                  <span>
                    <Database size={17} />
                    Request
                  </span>
                  <ArrowRight size={15} />
                  <span>
                    <Check size={17} />
                    Approve
                  </span>
                  <ArrowRight size={15} />
                  <span>
                    <Check size={17} />
                    Done
                  </span>
                </div>
              )}
              {service.id === "cloud" && (
                <div className="cloud-note">
                  <ShieldCheck size={22} />
                  <span>
                    From the first deployment.
                    <br />
                    <strong>Through every improvement.</strong>
                  </span>
                </div>
              )}
              <ul className="service-tags">
                {service.capabilities.slice(0, 3).map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
              <details className="service-details">
                <summary>
                  Learn more
                  <span className="sr-only"> about {service.title}</span>
                  <Plus size={16} aria-hidden="true" />
                </summary>
                <div className="service-details-content">
                  <p className="small-label">WHAT WE CAN HELP WITH</p>
                  <ul>
                    {service.capabilities.map((capability) => (
                      <li key={capability}>
                        <Check size={13} aria-hidden="true" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <a className="text-link" href="#contact">
                    Discuss this service
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </details>
            </article>
          ))}
        </div>
        <div className="delivery-principles">
          <article>
            <ShieldCheck size={23} strokeWidth={1.5} aria-hidden="true" />
            <h3>Security in every system.</h3>
            <p>
              We plan security into every solution, from websites to internal
              systems. Access controls, data protection, and secure configuration
              are tailored to the people, information, and risks involved.
            </p>
          </article>
          <article>
            <Search size={23} strokeWidth={1.5} aria-hidden="true" />
            <h3>Responsive. Search-ready.</h3>
            <p>
              Websites are designed for mobile, tablet, and desktop, with
              technical SEO foundations: clear page structure, metadata,
              sitemaps, and performance-conscious development.
            </p>
          </article>
          <article>
            <GitBranch size={23} strokeWidth={1.5} aria-hidden="true" />
            <h3>CI/CD that fits your project.</h3>
            <p>
              We configure continuous integration and deployment around your
              hosting, scope, and release needs—with automated build and test
              checks, approval steps, and rollback planning as appropriate.
            </p>
          </article>
        </div>
        <div className="services-footnote">
          <span className="small-label">BUSINESS FIRST. ALWAYS.</span>
          <p>
            We don’t start with technology. We start by understanding what your
            organization is trying to improve.
          </p>
        </div>
      </div>
    </section>
  );
}
