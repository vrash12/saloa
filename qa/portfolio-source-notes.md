# Portfolio source notes

Initially reviewed on 2026-09-14. Original project names and screenshots added on 2026-09-24 at the user's request.

## Evidence and editorial scope

- User-supplied source: https://vrmsuliva.online/projects
- The public page loads its project records from https://api.vrmsuliva.online/api/projects. The read-only detail endpoints at `/api/projects/{id}` were retrieved for all nine IDs below and contained the same descriptions as the listing.
- Three projects have additional first-party case study copy in the page's published asset: https://vrmsuliva.online/assets/projectCaseStudies-Cqd-Qpjb.js (PGT Onboard, Barangay SOMS, AmoraCare).
- The source identifies the work as independently designed and developed by Van Rodolf M. Suliva. The user authorized including this work in Saola's portfolio; the copy does not assert that named organizations are Saola clients or partners.
- `idea` is an original summary of documented scope. `problem` is a general business need inferred from that scope, except where detailed case study problem statements provide direct support. Display `problem` under a label such as “The need”; do not portray inferred needs as customer testimony or measured before/after results.
- Features are limited to the public descriptions and the three additional public case studies. Screenshots were added on 2026-09-24 as documented below. No awards, customer counts, metrics, or outcome guarantees are added to the copy.
- The listing describes published projects but does not establish current production deployment status for every system. Do not label all items as live deployments or completed client commissions.

## Source-derived project scope

### CTS Pacific

Source: https://vrmsuliva.online/projects/17

Documented: responsive corporate services website, technical service and certification information, validated quote and contact workflows, email notifications. Administration is described as foundational. Product sales, PayPal, and e-commerce are expressly future-ready capabilities, so they are excluded from delivered features. The portfolio's “technical credentials” refers to the subject company's presented credentials, not Saola certifications.

### Garden of Peace

Source: https://vrmsuliva.online/projects/15

Documented: burial records, plot reservations, maintenance schedules, visitor inquiries, interactive cemetery map, deceased-person search, QR scanning, plot visualization, route guidance, and administrator/staff/visitor roles. The stated need is an editorial inference from these documented functions; no claimed time saving or deployment scale.

### AmoraCare

Source: https://vrmsuliva.online/projects/14

Documented: parent applications, child/parent profiles, case stages, document control, donations, reporting, retrieval-assisted legal guidance, matching scores and explanations. The published case study expressly keeps decisions with human reviewers and preserves deterministic scoring if AI fails. Portfolio copy therefore describes human-reviewed assistance and legal information retrieval; it does not promise legal advice or automatic adoption eligibility decisions.

### PermitNet

Source: https://vrmsuliva.online/projects/13

Documented: administrative dashboard linked to a Python/Linux network agent, automatic hotspot device detection, access approvals, role-based permissions, firewall and bandwidth policies, activity monitoring, and statistical reporting. No general cybersecurity certification or security outcome claim.

### Copacific Website

Source: https://vrmsuliva.online/projects/12

Documented: commercial kitchen equipment website, supported brands, catalogs, product details, parts request forms, service information, and organization/team content. Its description explicitly identifies finding equipment details and preparing model/serial information for parts or service requests as the customer use case. An external live URL is present in the source, but the section uses the first-party project detail URL for consistent provenance.

### PGT Onboard

Source: https://vrmsuliva.online/projects/11

Documented: live bus GPS, passenger occupancy, ETA and schedule views, announcements, pickup-location sharing, QR wallet ticketing, top-ups, staff ticket issuance, sales monitoring, and fleet operations. Additional case study copy describes commuter and staff workflows plus Arduino/MQTT hardware integration. Awards and other “verified outcome” blocks are omitted from Saola's copy. The problem paragraph is supported by the published case study.

### FabellaCare

Source: https://vrmsuliva.online/projects/10

The public description is brief. Documented only: healthcare workflow management, medical records management, and trend forecasting. Only three features are listed rather than inventing a fourth. The forecast's subject and validation are unspecified; no diagnostic, treatment, clinical prediction, or automated decision claims are made.

### Barangay SOMS

Source: https://vrmsuliva.online/projects/16

Documented: resident/household profiles, certificate requests, appointments, complaints, financial transactions, reports, announcements, role-based access, demographic analytics, decision support, automated notices/reminders, audit logging, and PDF/CSV/Excel exports. The case study also describes the fragmented-record need. Test counts and other numerical outcome blocks are omitted from the portfolio.

### PatientCare

Source: https://vrmsuliva.online/projects/9

The public description is brief. Documented only: medical records, patient information, and healthcare service processes. Only three features are listed rather than inventing unsupported appointments, billing, prescriptions, access roles, or AI. The need is a general editorial inference. No clinical outcomes are claimed.

### Agriculture Information System

Added on 2026-09-17 from the project overview supplied directly by the user. No public project URL was supplied.

Documented: centralized farmer profiles and classifications, assistance histories, printable/digital QR registry cards, GIS parcel boundaries and imports, approximate area calculations, agriculture and fisheries input releases, animal-health services, cooperative memberships, machinery assignments and maintenance, program and data-completeness dashboards, role/province/municipality access controls, audit trails, simultaneous-edit safeguards, municipality-level weather forecasts and agricultural guidance, links to official PAGASA bulletins, and public QR-linked parcel pages excluding sensitive internal records.

Primary authenticated users are authorized government personnel: provincial and municipal agriculture offices and staff, municipal head agriculturists, the provincial veterinary office, and authorized administrators and decision-makers. Farmers, fisheries assistance recipients, cooperatives, and associations are beneficiaries and record subjects. The system owner and technical support team handle account governance, maintenance, security, and continuity. The portfolio summary does not imply farmer or cooperative login accounts.

The supplied operational challenges support the problem summary. Administrative efficiency, better-informed planning, coordination, accountability, data protection, and accessible verification are intended benefits; no measured savings, service improvements, deployment scale, or outcome guarantees are claimed. Parcel areas remain explicitly approximate, and public verification exposes selected information only.

## Original names and screenshot import — 2026-09-24

The public project listing was rechecked and still contains the same nine entries. All nine titles now match the listing exactly. Agriculture Information System remains the existing tenth project; no KAI / LeadFlow or other new project is added.

Each gallery image has a full-size WebP (up to 1600px wide) and a 640px preview. Aspect ratios are preserved without cropping. Images are served by Saola, without depending on the original portfolio's image server at runtime. Source filenames below are relative to `https://api.vrmsuliva.online/static/images/` unless a local source is specified. Output folders are under `public/images/portfolio/`.

| Output folder | Image 01 source | Image 02 source |
| --- | --- | --- |
| `cts-pacific` | `1788065351239-c4ee770c4756db8387a0d3f8.png` | `1788065351241-c9d3dbf04b78bf17801f60ea.png` |
| `garden-of-peace` | `1786344070828-458424748-d4.png` | `1786344070843-439663569-d7.png` |
| `amoracare` | Local curated `amoracare/01-care-platform-hero.png` | `1784701416782-345718058-amor1.png` |
| `permitnet` | `1784544820552-678620451-permit1.png` | `1784544820564-900430270-permitnet5.png` |
| `copacific` | `1783513488586-4337460-copac.png` | `1783513488596-200054692-copac2.png` |
| `pgt-onboard` | Local manager demo, frame at 50 seconds | Local manager demo, frame at 10 seconds |
| `fabellacare` | `1783513615164-994648451-f1.png` | `1783513615164-18780084-f2.png` |
| `barangay-soms` | `1787351715257-07e92bfed2c5386f9b4b4fd7.png` | `1787351715257-1dc48c4eeedabc24f911aafa.png` |
| `patientcare` | `1783513643569-386748863-p1.png` | `1783513643572-939369843-p4.png` |
| `agriculture-information-system` | Local curated `agri-ms/01-add-farmer-workflow.png` | — |

Local curated images are from `C:/Users/MAURICIO/Documents/portfolio-ni-Van/portfolio-images-curated/`. The PGT source is `C:/Users/MAURICIO/Documents/portfolio-ni-Van/backend/public/static/images/1783513662427-358853717-manager.mp4`; its published poster returned 404, so actual app frames were extracted instead. The video itself is not copied into Saola.

The selected images were visually inspected. AmoraCare uses its public homepage and aggregate dashboard rather than child or adoption case records. PatientCare and FabellaCare show their public/operational interfaces rather than patient records. Agriculture initially used an empty registration form; the supplied AgriGOV screens below were subsequently added. Screenshot contents illustrate the original interfaces; their on-screen numbers are not claims about Saola customers or results.

### Supplied AgriGOV screenshots — 2026-09-24

Added `C:/Users/MAURICIO/Downloads/agrigov1.PNG` as `agrigov-dashboard.webp` and `C:/Users/MAURICIO/Downloads/agrigov2.PNG` as `agrigov-geofences.webp` in the agriculture image folder, each with a 640px `-preview.webp` variant. The dashboard is the project's main preview and first gallery image; municipality geofences follows, and the original farmer registration image remains third. Both supplied screenshots retain their complete framing. The dashboard visibly labels its example recipients as synthetic/sample records. The portfolio now contains 21 screenshots across ten projects.
