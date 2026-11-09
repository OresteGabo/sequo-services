# SEQUO Services

Public, French-first product website for **https://www.sequoservice.com**. Vue 3, TypeScript and Vite; no new runtime dependency is required for the redesign.

The site explains shopping, merchant preparation, delivery and eligible relay collection. Four interactive role panels describe SEQUO, SEQUO Vendor, SEQUO Rider and SEQUO Hub. This is a public presentation site, not a customer checkout or staff admin application.

## Run and build

Use a Node version supported by `package.json` and install the lockfile dependencies with `npm ci` on a fresh checkout.

```sh
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
npm run type-check
npm run build
npm run preview -- --host 127.0.0.1 --port 4174 --strictPort
```

`build` runs `vue-tsc --build` and the Vite production build. The generated static site is in `dist/`. Do not commit `dist/`, dependencies or test screenshots.

## Content and assets

- [Current claim review and app/API evidence](docs/CONTENT_REVIEW_2026-11-09.md).
- [Redesign verification and publication checklist](docs/PUBLIC_SITE_REDESIGN_2026-11-09.md).
- [AI/developer guidance](AI_CONTEXT.md).
- [Image and logo provenance](public/images/PROVENANCE.md).
- Public contact is centralized in `src/content/site.ts`. The owner confirmed `hello@sequoservices.com` on 2026-11-09 and will update it manually if needed. Mail links open the visitor's email application; this website does not send email, register accounts or store waitlist submissions.

The hero is an original, explicitly labelled illustration, not evidence of a real partner. The phone graphic is an interactive **illustration of the journey**, with demonstration content, not an exact app screenshot. Never use QA screenshots containing accounts, codes, order references or internal dashboards as public artwork.

## Availability and publication

Public launch, store listings and active service zones have not been confirmed. Payment-provider connections and unapproved subscription/referral benefits remain inactive. Do not add download badges, QR install links, fixed delivery promises or live-payment claims without current evidence and approved destinations.

This static site makes no API calls, handles no credentials and links to no administrative application. The apps' production API origin is `https://api.sequoservice.com`; the previous planning documents' plural API spelling is stale.

No tracked hosting configuration establishes the live provider or a push-to-deploy trigger. Building locally does not publish the redesign. Confirm the existing hosting project's repository, branch and static output settings before a separately verified deployment; see the publication checklist.

Older documents (`PRODUCT_BRIEF`, `DESIGN_AND_CONTENT`, `SEQUO_API_SUMMARY`, `TECH_STACK`, `ROADMAP`, `IMPLEMENTATION_PLAN`) are historical planning material. Their payment, distribution, domain and availability statements must be checked against the current claim review and actual app/API code before reuse.
