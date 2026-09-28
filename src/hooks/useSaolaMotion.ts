import { useEffect } from "react";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Page-wide decorative motion. Everything is skipped for reduced motion and
 * content stays readable without it:
 *  - headings in <main> clear out of a forest mist as they arrive
 *  - the capability strip passes a signal from one capability to the next
 *  - saola watermarks drift at their own depth while the page scrolls
 *  - [data-canopy] sections let light through where the mouse is
 */
export function useSaolaMotion() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const cleanups: (() => void)[] = [];
    if ("IntersectionObserver" in window) {
      cleanups.push(mistHeadings(), signalStrip(), watermarkDrift());
    }
    if (hasFinePointer()) cleanups.push(canopyLight());
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

function mistHeadings() {
  // The animation starts from the misted state, so headings are never hidden
  // before they are observed.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("mist-clear");
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll("main h2").forEach((heading) => observer.observe(heading));
  return () => observer.disconnect();
}

function signalStrip() {
  const strip = document.querySelector<HTMLElement>(".capability-strip");
  if (!strip) return () => {};
  let timer = 0;
  const pass = () => {
    if (strip.classList.contains("is-signalling")) return;
    strip.classList.add("is-signalling");
    timer = window.setTimeout(() => strip.classList.remove("is-signalling"), 2000);
  };
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        pass();
        observer.disconnect();
      }
    },
    { threshold: 0.6 },
  );
  observer.observe(strip);
  strip.addEventListener("pointerenter", pass);
  return () => {
    observer.disconnect();
    window.clearTimeout(timer);
    strip.removeEventListener("pointerenter", pass);
  };
}

function watermarkDrift() {
  const marks = Array.from(document.querySelectorAll<HTMLElement>(".saola-watermark"));
  const visible = new Set<HTMLElement>();
  let frame = 0;
  const update = () => {
    frame = 0;
    const viewport = window.innerHeight;
    visible.forEach((mark) => {
      const box = mark.getBoundingClientRect();
      // -0.5 above the middle of the screen, +0.5 below it.
      const offset = (box.top + box.height / 2 - viewport / 2) / viewport;
      // Moving against the scroll makes the mark feel further away.
      mark.style.translate = `0 ${(offset * -44).toFixed(1)}px`;
      mark.style.rotate = `${(offset * -4).toFixed(2)}deg`;
    });
  };
  const schedule = () => {
    if (!frame && visible.size) frame = window.requestAnimationFrame(update);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const mark = entry.target as HTMLElement;
      if (entry.isIntersecting) visible.add(mark);
      else visible.delete(mark);
    });
    schedule();
  });
  marks.forEach((mark) => observer.observe(mark));
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return () => {
    window.cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    marks.forEach((mark) => {
      mark.style.translate = "";
      mark.style.rotate = "";
    });
  };
}

function canopyLight() {
  const zones = Array.from(document.querySelectorAll<HTMLElement>("[data-canopy]"));
  const cleanups = zones.map((zone) => {
    // The position lives on the light layer so only it restyles as the light eases.
    const light = zone.querySelector<HTMLElement>(".canopy-light") ?? zone;
    let frame = 0;
    let x = 0;
    let y = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const box = zone.getBoundingClientRect();
      x = event.clientX - box.left;
      y = event.clientY - box.top;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        light.style.setProperty("--canopy-x", `${x.toFixed(0)}px`);
        light.style.setProperty("--canopy-y", `${y.toFixed(0)}px`);
        zone.classList.add("canopy-on");
      });
    };
    const leave = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      zone.classList.remove("canopy-on");
    };
    zone.addEventListener("pointermove", move, { passive: true });
    zone.addEventListener("pointerleave", leave);
    return () => {
      leave();
      zone.removeEventListener("pointermove", move);
      zone.removeEventListener("pointerleave", leave);
    };
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}
