import { Brand } from "../components/UI";
import { services } from "../data/services";
import { siteConfig } from "../config/site";
export function Footer() {
  const hasSocial =
    siteConfig.linkedin || siteConfig.facebook || siteConfig.email;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
          </div>
          <div className="footer-column">
            <h2>Services</h2>
            {[...services]
              .sort((a, b) => a.number.localeCompare(b.number))
              .map((service) => (
                <a key={service.id} href={`#service-${service.id}`}>
                  {service.title}
                </a>
              ))}
          </div>
          <div className="footer-column">
            <h2>Company</h2>
            {["About", "Process", "Solutions", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h2>Connect</h2>
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            )}
            {siteConfig.facebook && (
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook ↗
              </a>
            )}
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>Email ↗</a>
            )}
            {!hasSocial && (
              <>
                <a href="#contact">Start a conversation ↗</a>
                <span className="footer-pending">
                  Social profiles coming soon.
                </span>
              </>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Saola Systems. All rights reserved.
          </span>
          <div>
            {siteConfig.privacyUrl ? (
              <a href={siteConfig.privacyUrl}>Privacy Policy</a>
            ) : (
              <span title="Approved policy to be supplied before public launch">
                Privacy Policy <small>(pending)</small>
              </span>
            )}
            {siteConfig.termsUrl ? (
              <a href={siteConfig.termsUrl}>Terms of Service</a>
            ) : (
              <span title="Approved terms to be supplied before public launch">
                Terms of Service <small>(pending)</small>
              </span>
            )}
          </div>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
