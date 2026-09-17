# Saola Systems

A complete, responsive landing page built with React, TypeScript, Vite, Lucide icons, and custom CSS. PostCSS runs Autoprefixer and removes unused selectors with PurgeCSS in production. Manrope is self-hosted as a single Latin variable-font file.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

`build` performs strict TypeScript checking and produces the static website in `dist/`. The included lockfile supports reproducible installation with `npm ci`.

## Official logo

The supplied transparent logo is installed as `src/assets/saola-logo.png`. The original artwork is preserved. CSS clips the bottom “IDEAS AUTOMATE PROGRESS” tagline while keeping the full saola symbol and Saola Systems lettering.

Navigation, the hero system diagram, and footer share this artwork. CSS frames the logo without stretching it and applies a white treatment on their dark forest backgrounds for contrast. Transparency is retained, with no backing panel. The source PNG's colors remain unchanged. Extra text under the footer logo has been removed.

`siteConfig.logoUrl` centralizes the asset reference. If a new asset has different canvas dimensions or margins, update the `.logo-artwork` framing in `src/styles/readability.css`. The supplied September 17 Saola symbol is installed as `public/favicon.ico` (16, 32, and 48px), `public/favicon-96x96.png`, and `public/apple-touch-icon.png` (180px). The source artwork is framed square and resized with its original colors and light background preserved for dark browser tabs. Static links in `index.html` load the icons before React; keep the ICO URL and cache version in sync with `siteConfig.faviconUrl` when replacing them.

## Company details

`src/config/site.ts` centralizes email, phone, verified social URLs, approved legal-document URLs, logo availability, favicon, and contact endpoint. Unprovided contact links and legal-document links are omitted. No clients, endorsements, business metrics, office addresses, or company history are invented.

The canonical URL, Open Graph URL, sitemap, and Organization schema use the supplied `https://saolasystems.com/` domain. Any private Sites deployment is a review copy; publishing it does not configure or transfer the custom domain.

## Connect the contact form

The contact address is **info@saolasystems.com**. Without a contact endpoint, the form runs in **email-draft mode**: it validates name, email, and project description, focuses the first invalid field, then offers an “Open email draft” link with all inquiry fields addressed to that inbox. The visitor reviews and sends the message from their email app. Preparing or opening a draft never claims delivery. An inquiry download is available if no mail handler is configured or a mail client truncates a long draft. Contact and footer email links use the same configured address.

Draft links URL-encode the subject and body, preserving special characters and line breaks. Editing the form clears the previous draft link to prevent sending stale details. There is no browser storage or server transmission in draft mode. If both the endpoint and contact email are empty, the form falls back to explicit unsent preview mode.

To send directly from the website, copy `.env.example` to `.env.local`, set `VITE_CONTACT_ENDPOINT` to the intended HTTPS endpoint, configure the backend recipient as `info@saolasystems.com`, and rebuild. The public contact email alone does not configure a backend's recipient. Vite variables are public build-time configuration; never put API keys or other secrets in them.

The endpoint receives a JSON POST:

```json
{
  "name": "Visitor-supplied name",
  "company": "Optional organization",
  "email": "Visitor-supplied email",
  "phone": "Optional phone",
  "interest": "Custom Software",
  "description": "Visitor-supplied project description",
  "budget": "Optional estimate with currency",
  "solution": "Optional selected solution"
}
```

After actually storing the inquiry or durably enqueueing its delivery, the service must return a successful HTTP status with JSON `{ "accepted": true }`. Only that explicit acknowledgement produces the received state. Empty responses, a generic HTTP 200 page, malformed JSON, network errors, and a 15-second timeout do not report success. Fields are retained for retry or download.

Implement validation, rate limiting, origin/CORS configuration when needed, spam controls, and secret management on the server. The repository does not contain or pretend to contain a sending backend. Add the approved privacy policy before connecting visitor data collection.

## Content and architecture

The portfolio at `#portfolio` contains ten text-only project summaries: nine adapted from the user-supplied [VRMS project archive](https://vrmsuliva.online/projects), plus Agriculture Information System from the user's supplied project overview. Public titles describe the type of website or management system, without project or client brand names. Each entry explains the idea, the operational need it addresses, and documented features. Available project source URLs are retained in `src/data/portfolio.ts`; evidence and exclusions are recorded in `qa/portfolio-source-notes.md`. Category filters and native expandable details work with keyboard navigation. No project galleries, client testimonials, deployment claims, or performance metrics are imported.

- `src/sections/`: navigation, hero, services, product concepts, company sections, contact, and footer.
- `src/data/`: complete service capability lists, process, technology groups, and solution descriptions.
- `src/components/UI.tsx`: shared button, section header, and official-logo integration.
- `src/styles/`: tokens, base layout, section styles, responsive readability, and self-hosted font.
- `src/config/site.ts`: company and integration configuration.

Service disclosures use native `details`. The mobile navigation uses a modal `dialog` for focus containment and supports Escape and scroll locking. The workflow demo pauses for an explicit sample approval. Dashboard and AI controls switch conceptual examples. Choosing a solution carries its context into the contact form without replacing a visitor’s description.

CSS and IntersectionObserver provide restrained motion. Reduced-motion preferences disable decorative animations, transitions, and smooth scrolling. Content stays readable without IntersectionObserver. All dashboard, website, workflow, and AI visuals are concepts, not client projects or measured results.

`SaolaPresence` frames the symbol from the supplied logo for subtle About and closing-section watermarks. On screens at least 1440px wide, a small saola follows reading progress in the outer gutter and provides a keyboard-accessible back-to-top button. Hero and watermark entrances run once. Reduced motion keeps the guide stationary and removes the decorative movement. If the source logo dimensions change, also update the crop in `src/styles/saola-presence.css`.

## Before public launch

- Add verified contact/social details and approved Privacy Policy and Terms URLs.
- Implement and connect the contact endpoint, then verify actual delivery.
- Configure `saolasystems.com` with the chosen host and HTTPS.

See `qa/review.md` for the completed browser and build checks.

## Hostinger deployment

Source repository: [vrash12/saloa](https://github.com/vrash12/saloa), branch `main`.

Deploy this project as a Vite static app. Install with `npm ci`, build with `npm run build`, and publish the `dist` directory. No server process or secret environment variables are required for the current email-draft contact flow. The intended production domain is `saolasystems.com`.

Local preview registration metadata is excluded from Git and is not used by Hostinger.
