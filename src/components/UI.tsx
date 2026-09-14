import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "../config/site";

export function LogoImage() {
  return (
    <span className="logo-artwork">
      <img
        src={siteConfig.logoUrl}
        width="577"
        height="433"
        alt="Saola Systems"
      />
    </span>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Saola Systems home">
      <LogoImage />
    </a>
  );
}
export function Button({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-header ${className}`}>
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </div>
  );
}
