import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand, Button } from "../components/UI";
const links = ["Home", "Services", "Portfolio", "Solutions", "Process", "About", "Contact"];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const menu = dialog.current;
    if (open) menu?.showModal();
    else if (menu?.open) menu.close();
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const change = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const containKeyboardFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </nav>
          <Button href="#contact" className="nav-cta">
            Start a Project
          </Button>
          <button
            ref={trigger}
            className="menu-trigger icon-button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open navigation"
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        onCancel={close}
        onKeyDown={containKeyboardFocus}
        onClose={() => setOpen(false)}
        aria-label="Navigation"
      >
        <div className="mobile-menu-top">
          <span>Navigation</span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Close navigation"
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={close}>
              <span>0{i + 1}</span>
              {link}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
        <a className="button button-primary" href="#contact" onClick={close}>
          Start a Project
          <ArrowUpRight size={18} />
        </a>
        <p className="mobile-menu-note">
          Good systems start with a conversation.
        </p>
      </dialog>
    </>
  );
}
