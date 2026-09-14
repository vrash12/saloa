import { useEffect, useState } from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import {
  AutomationFeature,
  SoftwareFeature,
  WebsiteFeature,
  AIFeature,
} from "./sections/Features";
import {
  Process,
  WhySaola,
  Solutions,
  Industries,
  Technology,
  About,
} from "./sections/Company";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import type { Solution } from "./data/company";
import { siteConfig } from "./config/site";
export default function App() {
  const [selected, setSelected] = useState<Solution | null>(null);
  const selectSolution = (solution: Solution) => {
    setSelected(solution);
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    window.setTimeout(
      () =>
        document.getElementById("contact-name")?.focus({ preventScroll: true }),
      50,
    );
  };
  useEffect(() => {
    if (siteConfig.faviconUrl) {
      const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (icon) icon.href = siteConfig.faviconUrl;
    }
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".section-header,.feature-copy,.process-timeline,.why-reasons,.about-visual",
      )
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <AutomationFeature />
        <SoftwareFeature />
        <WebsiteFeature />
        <AIFeature />
        <Portfolio />
        <Process />
        <WhySaola />
        <Solutions onSelect={selectSolution} />
        <Industries />
        <Technology />
        <About />
        <Contact selected={selected} onClear={() => setSelected(null)} />
      </main>
      <Footer />
    </>
  );
}
