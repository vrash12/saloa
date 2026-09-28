import { useEffect } from "react";
import type { RefObject } from "react";
import { hasFinePointer, prefersReducedMotion } from "./useSaolaMotion";

const BROADCAST_MS = 2200;
const AMBIENT_MS = 12000;

/**
 * Brings the hero system diagram to life:
 *  - the saola at the centre broadcasts a signal down every connection
 *    (shortly after load, on hover, and now and then while the hero is in view)
 *  - hovering a system lights the path between it and the saola
 *  - on mouse devices the diagram leans toward the pointer, nodes at their own depth
 */
export function useEcosystemMotion(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const map = ref.current;
    if (!map || prefersReducedMotion()) return;
    const hero = map.closest<HTMLElement>(".hero") ?? map;
    const core = map.querySelector<HTMLElement>(".ecosystem-core");
    const nodes = Array.from(map.querySelectorAll<HTMLElement>(".ecosystem-node"));
    const traces = Array.from(map.querySelectorAll<SVGPathElement>(".connection-traces path"));
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    let broadcasting = false;
    const broadcast = () => {
      if (broadcasting) return;
      broadcasting = true;
      map.classList.add("is-broadcasting");
      later(() => {
        map.classList.remove("is-broadcasting");
        broadcasting = false;
      }, BROADCAST_MS);
    };

    const light = (index: number | null) => {
      nodes.forEach((node, i) => node.classList.toggle("is-lit", i === index));
      traces.forEach((trace, i) => trace.classList.toggle("is-lit", i === index));
      map.classList.toggle("has-focus", index !== null);
    };
    const enters = nodes.map((_, i) => () => light(i));
    const leave = () => light(null);
    nodes.forEach((node, i) => {
      node.addEventListener("pointerenter", enters[i]);
      node.addEventListener("pointerleave", leave);
    });
    core?.addEventListener("pointerenter", broadcast);

    // Wait for the entrance to settle, then keep an occasional pulse while visible.
    later(broadcast, 1600);
    let inView = true;
    const viewObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => (inView = entry.isIntersecting))
        : undefined;
    viewObserver?.observe(map);
    const ambient = window.setInterval(() => {
      if (inView && !document.hidden && !map.classList.contains("has-focus")) broadcast();
    }, AMBIENT_MS);

    let stopDepth = () => {};
    if (hasFinePointer()) {
      map.classList.add("has-depth");
      let targetX = 0;
      let targetY = 0;
      let x = 0;
      let y = 0;
      let frame = 0;
      const step = () => {
        x += (targetX - x) * 0.08;
        y += (targetY - y) * 0.08;
        map.style.setProperty("--tilt-x", x.toFixed(3));
        map.style.setProperty("--tilt-y", y.toFixed(3));
        frame =
          Math.abs(targetX - x) + Math.abs(targetY - y) > 0.002
            ? window.requestAnimationFrame(step)
            : 0;
      };
      const kick = () => {
        if (!frame) frame = window.requestAnimationFrame(step);
      };
      const clamp = (value: number) => Math.max(-1, Math.min(1, value));
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const box = map.getBoundingClientRect();
        targetX = clamp((event.clientX - (box.left + box.width / 2)) / (box.width / 2));
        targetY = clamp((event.clientY - (box.top + box.height / 2)) / (box.height / 2));
        kick();
      };
      const rest = () => {
        targetX = 0;
        targetY = 0;
        kick();
      };
      hero.addEventListener("pointermove", move, { passive: true });
      hero.addEventListener("pointerleave", rest);
      stopDepth = () => {
        window.cancelAnimationFrame(frame);
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", rest);
        map.classList.remove("has-depth");
        map.style.removeProperty("--tilt-x");
        map.style.removeProperty("--tilt-y");
      };
    }

    return () => {
      stopDepth();
      timers.forEach((id) => window.clearTimeout(id));
      window.clearInterval(ambient);
      viewObserver?.disconnect();
      nodes.forEach((node, i) => {
        node.removeEventListener("pointerenter", enters[i]);
        node.removeEventListener("pointerleave", leave);
      });
      core?.removeEventListener("pointerenter", broadcast);
      light(null);
      map.classList.remove("is-broadcasting");
    };
  }, [ref]);
}
