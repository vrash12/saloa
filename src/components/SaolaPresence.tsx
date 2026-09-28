import { useEffect, useRef } from "react";
import { siteConfig } from "../config/site";
import "../styles/saola-presence.css";

/** Frames only the saola in the supplied artwork; no new symbol is drawn. */
export function SaolaMark() {
  return (
    <span className="saola-mark" aria-hidden="true">
      <img src={siteConfig.logoUrl} width="577" height="433" alt="" />
    </span>
  );
}

export function SaolaPresence() {
  const companion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = companion.current;
    if (!element) return;
    const wideScreen = window.matchMedia("(min-width: 1440px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastY = window.scrollY;
    let walkTimer = 0;

    // While the page moves, the saola takes steps and leans the way it's heading.
    const walk = (y: number) => {
      if (reducedMotion.matches || y === lastY) return;
      element.setAttribute("data-heading", y > lastY ? "down" : "up");
      element.classList.add("is-walking");
      window.clearTimeout(walkTimer);
      walkTimer = window.setTimeout(() => element.classList.remove("is-walking"), 240);
    };

    const update = () => {
      frame = 0;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const heroEnd = document.getElementById("home")?.offsetHeight ?? 600;
      const visible = wideScreen.matches && window.scrollY > heroEnd;
      element.hidden = !visible;
      walk(window.scrollY);
      lastY = window.scrollY;
      if (!visible) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, scrollRange)));
      element.style.setProperty("--saola-progress", String(progress));
      element.style.setProperty("--saola-position", `${progress * 144}px`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    // A short, one-time arrival. Marks remain visible without animation support.
    const marks = document.querySelectorAll<HTMLElement>("[data-saola-reveal]");
    let entranceObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      entranceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("saola-arrived");
            entranceObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      marks.forEach((mark) => entranceObserver?.observe(mark));
    }

    const resizeObserver = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(schedule)
      : undefined;
    resizeObserver?.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wideScreen.addEventListener("change", schedule);
    reducedMotion.addEventListener("change", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(walkTimer);
      resizeObserver?.disconnect();
      entranceObserver?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wideScreen.removeEventListener("change", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    document.querySelector<HTMLAnchorElement>(".navbar .brand")?.focus({ preventScroll: true });
  };

  return (
    <div ref={companion} className="saola-companion" hidden>
      <span className="saola-trail" aria-hidden="true"><span /></span>
      <button type="button" className="saola-guide" aria-label="Back to top" onClick={backToTop}>
        <SaolaMark />
        <span className="saola-guide-label" aria-hidden="true">Back to top ↑</span>
      </button>
    </div>
  );
}
