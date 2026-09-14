import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  X,
  Mail,
  Phone,
  Download,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { SaolaMark } from "../components/SaolaPresence";
import type { Solution } from "../data/company";
export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  description: string;
  budget: string;
  solution: string;
}
type FieldError = Partial<Record<"name" | "email" | "description", string>>;
export function validateContact(data: ContactPayload): FieldError {
  const errors: FieldError = {};
  if (data.name.trim().length < 2)
    errors.name = "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (data.description.trim().length < 20)
    errors.description =
      "Tell us a little more about your project (at least 20 characters).";
  return errors;
}
function formatInquiry(inquiry: ContactPayload): string {
  return [
    "SAOLA SYSTEMS — PROJECT INQUIRY",
    "",
    `Name: ${inquiry.name}`,
    `Company: ${inquiry.company || "Not specified"}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not specified"}`,
    `Interest: ${inquiry.interest}`,
    `Solution: ${inquiry.solution || "Not specified"}`,
    `Budget: ${inquiry.budget || "Not specified"}`,
    "",
    inquiry.description,
  ].join("\n");
}
function inquiryEmailHref(inquiry: ContactPayload): string {
  const subject = ("Project inquiry — " + inquiry.interest).replace(/[\r\n]+/g, " ");
  const body = formatInquiry(inquiry).replace(/\r?\n/g, "\r\n");
  return "mailto:" + siteConfig.email
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);
}
const interests = [
  "Website & Digital Presence",
  "Custom Software",
  "Business Automation",
  "AI Solution",
  "System Integration",
  "Cloud & Support",
  "Other",
];
export function Contact({
  selected,
  onClear,
}: {
  selected: Solution | null;
  onClear: () => void;
}) {
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<{
    kind: "idle" | "sending" | "draft" | "unsent" | "success" | "error";
    message: string;
  }>({ kind: "idle", message: "" });
  const [inquiry, setInquiry] = useState<ContactPayload | null>(null);
  useEffect(() => {
    setInquiry(null);
    setStatus({ kind: "idle", message: "" });
  }, [selected]);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const get = (key: string) => String(values.get(key) || "").trim();
    const payload: ContactPayload = {
      name: get("name"),
      company: get("company"),
      email: get("email"),
      phone: get("phone"),
      interest: get("interest"),
      description: get("description"),
      budget: get("budget"),
      solution: selected?.title || "",
    };
    const fieldErrors = validateContact(payload);
    setErrors(fieldErrors);
    setInquiry(null);
    if (Object.keys(fieldErrors).length) {
      setStatus({
        kind: "error",
        message: "Please check the highlighted fields.",
      });
      form
        .querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${Object.keys(fieldErrors)[0]}"]`,
        )
        ?.focus();
      return;
    }
    setInquiry(payload);
    if (!siteConfig.contactEndpoint) {
      setStatus({
        kind: siteConfig.email ? "draft" : "unsent",
        message: siteConfig.email
          ? "Your inquiry is ready. Open the email draft below, then review and send it to " + siteConfig.email + " from your email app. Nothing has been sent yet."
          : "Your message has not been sent. This preview is not connected to a contact service yet. You can download your inquiry to keep a copy.",
      });
      return;
    }
    setStatus({ kind: "sending", message: "Sending your inquiry…" });
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Request failed");
      const result: unknown = await response.json();
      if (
        typeof result !== "object" ||
        result === null ||
        !("accepted" in result) ||
        result.accepted !== true
      )
        throw new Error("Delivery was not acknowledged");
      setStatus({
        kind: "success",
        message:
          "Your inquiry has been received. Thank you for telling us about your project.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "We couldn’t confirm delivery. Your details are still here. Please try again or download your inquiry.",
      });
    }
  };
  const downloadHref = () => {
    if (!inquiry) return;
    const text = formatInquiry(inquiry) + "\n\nThis is a local copy. Downloading does not send this inquiry.";
    return `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
  };
  const change = () => {
    if (status.kind !== "sending") {
      setStatus({ kind: "idle", message: "" });
      setInquiry(null);
    }
  };
  return (
    <>
      <section className="final-cta">
        <div className="saola-watermark closing-saola" data-saola-reveal aria-hidden="true"><SaolaMark /></div>
        <div className="container">
          <div>
            <p className="eyebrow">
              <span />
              YOUR NEXT CHAPTER STARTS HERE
            </p>
            <h2>
              Have an idea?
              <br />
              <em>Let’s build it.</em>
            </h2>
          </div>
          <div className="final-cta-copy">
            <p>
              Tell us what you’re trying to improve, automate, or create. We’ll
              help turn it into a reliable digital solution.
            </p>
            <a className="button button-primary" href="#contact">
              Start Your Project
              <ArrowDown size={18} />
            </a>
            <a className="cta-secondary" href="#contact">
              Talk to us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">
              <span />
              LET’S TALK
            </p>
            <h2>
              Good systems start
              <br />
              with a conversation.
            </h2>
            <p>
              No complicated sales pitch. Start with the problem you’re trying
              to solve.
            </p>
            <div className="contact-expectations">
              <h3>What happens next?</h3>
              <p>
                <span>01</span>We get to know your challenge.
              </p>
              <p>
                <span>02</span>We explore what’s possible.
              </p>
              <p>
                <span>03</span>We map out the next step together.
              </p>
            </div>
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="contact-direct">
                <Mail size={17} />
                {siteConfig.email}
              </a>
            )}
            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`} className="contact-direct">
                <Phone size={17} />
                {siteConfig.phone}
              </a>
            )}
            <div className="contact-side-note">
              <span>AN IDEA. A CHALLENGE. A BETTER WAY.</span>
              <p>
                You don’t need a finished specification.
                <br />
                That’s something we can work on together.
              </p>
            </div>
          </div>
          <form
            onSubmit={submit}
            onChange={change}
            noValidate
            className="contact-form"
            aria-label="Project inquiry"
            aria-busy={status.kind === "sending"}
          >
            <p className="form-intro">
              Tell us a little about your project.<span>* Required fields</span>
            </p>
            {!siteConfig.contactEndpoint && (
              <p className="preview-notice">
                {siteConfig.email ? <Mail size={16} /> : <AlertCircle size={16} />}
                <span>
                  {siteConfig.email
                    ? "Prepare your inquiry here, then review and send it from your email app."
                    : "Preview form · Messages are not sent yet."}
                </span>
              </p>
            )}
            {selected && (
              <div className="selected-solution">
                <span>
                  Let’s explore: <strong>{selected.title}</strong>
                </span>
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Remove selected solution"
                  onClick={onClear}
                >
                  <X size={15} />
                </button>
              </div>
            )}
            <div className="form-grid">
              <div className="field">
                <label htmlFor="contact-name">
                  Name <span>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="field-error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="field">
                <label htmlFor="contact-company">Company / Organization</label>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  maxLength={180}
                  placeholder="Your organization"
                />
              </div>
              <div className="field">
                <label htmlFor="contact-email">
                  Email <span>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="field-error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="field">
                <label htmlFor="contact-phone">
                  Phone <small>(optional)</small>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  placeholder="Your contact number"
                />
              </div>
              <div className="field full-width">
                <label htmlFor="contact-interest">
                  What are you interested in?
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  key={selected?.title || "default"}
                  defaultValue={selected?.interest || "Other"}
                >
                  {interests.map((interest) => (
                    <option key={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              <div className="field full-width">
                <label htmlFor="contact-description">
                  Project description <span>*</span>
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  rows={4}
                  required
                  maxLength={6000}
                  placeholder="What would you like to build, improve, or automate?"
                  aria-invalid={!!errors.description}
                  aria-describedby={`description-hint${errors.description ? " description-error" : ""}`}
                />
                <span id="description-hint" className="field-hint">
                  A few sentences about your goals is a great place to start.
                </span>
                {errors.description && (
                  <span className="field-error" id="description-error">
                    {errors.description}
                  </span>
                )}
              </div>
              <div className="field full-width">
                <label htmlFor="contact-budget">
                  Budget <small>(optional)</small>
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  maxLength={100}
                  placeholder="An estimate or range, with currency"
                />
              </div>
            </div>
            <div className="form-actions">
              <p>
                {siteConfig.contactEndpoint
                  ? "Your details are used to respond to your inquiry."
                  : siteConfig.email
                    ? "Your email draft will be addressed to " + siteConfig.email + "."
                    : "Your details stay in this form until you choose to download them."}
              </p>
              <button
                type="submit"
                className="button button-dark"
                disabled={status.kind === "sending"}
              >
                {status.kind === "sending"
                  ? "Sending…"
                  : !siteConfig.contactEndpoint && siteConfig.email
                    ? "Prepare Email"
                    : "Start the Conversation"}
                <ArrowUpRight size={17} />
              </button>
            </div>
            <div
              className="form-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status.message && (
                <div
                  className={`status-message ${status.kind === "success" ? "success-message" : ""}`}
                >
                  {status.kind === "success" ? (
                    <Check size={18} />
                  ) : status.kind === "draft" ? (
                    <Mail size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
            </div>
            {inquiry &&
              status.kind !== "sending" &&
              status.kind !== "success" && (
                <div className="inquiry-options">
                  <div className="inquiry-links">
                    {siteConfig.email && (
                      <a
                        className="button button-dark"
                        href={inquiryEmailHref(inquiry)}
                        aria-describedby="email-draft-hint"
                      >
                        Open email draft
                        <Mail size={17} />
                      </a>
                    )}
                    <a
                      className="text-link download-inquiry"
                      href={downloadHref()}
                      download="saola-project-inquiry.txt"
                    >
                      <Download size={16} />
                      Download inquiry
                    </a>
                  </div>
                  {siteConfig.email && (
                    <p id="email-draft-hint" className="email-draft-hint">
                      If your email app doesn’t open or the draft is incomplete,
                      download your inquiry and email it to{" "}
                      <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>.
                    </p>
                  )}
                </div>
              )}
          </form>
        </div>
      </section>
    </>
  );
}
