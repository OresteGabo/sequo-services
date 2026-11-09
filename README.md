# SEQUO Services

Public, French-first product website for **https://www.sequoservice.com**. Vue 3, TypeScript and Vite; no new runtime dependency is required for the redesign.

The site explains shopping, merchant preparation, delivery and eligible relay collection. Twelve dedicated pages cover the home, application, availability/access, customer parcel collection, merchants, riders, relay-point partnerships, about, help, contact, website privacy and website terms, in French and English. The language switch preserves the current page. This is a public presentation site, not a customer checkout or staff admin application.

## Run and build

Use a Node version supported by `package.json` and install the lockfile dependencies with `npm ci` on a fresh checkout.

```sh
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
npm run type-check
npm run build
npm run preview -- --port 4185
npm run check:site
```

`build` runs type checking, the Vite client/server builds and static prerendering of 24 localized HTML pages, plus a sitemap and 404 page. Vercel clean URLs serve these static pages without a runtime server. The generated static site is in `dist/`. Do not commit generated builds, dependencies or QA screenshots. Curated product screenshots are documented in `docs/SCREENSHOTS.md`.

## Content and assets

- [Current claim review and app/API evidence](docs/CONTENT_REVIEW_2026-11-09.md).
- [Redesign verification and publication checklist](docs/PUBLIC_SITE_REDESIGN_2026-11-09.md).
- [AI/developer guidance](AI_CONTEXT.md).
- [Image and logo provenance](public/images/PROVENANCE.md).
- Public email and the owner-approved WhatsApp number are centralized in `src/content/site.ts`. See [access and website notices](docs/PUBLIC_ACCESS_AND_NOTICES_2026-11-09.md). The owner confirmed `hello@sequoservices.com` on 2026-11-09 and will update it manually if needed. Mail links open the visitor's email application; this website does not send email, register accounts or store waitlist submissions.

The hero is an original, explicitly labelled illustration, not evidence of a real partner. The phone galleries show real app captures: newly captured local synthetic Customer, Vendor and Rider fixtures, plus owner-supplied framed Hub captures. See [capture provenance](docs/SCREENSHOTS.md). Never publish private customer information or pickup credentials.

## Availability and publication

Public launch, store listings and active service zones have not been confirmed. Payment-provider connections and unapproved subscription/referral benefits remain inactive. Do not add download badges, QR install links, fixed delivery promises or live-payment claims without current evidence and approved destinations.

This static site makes no API calls, handles no credentials and links to no administrative application. The apps' production API origin is `https://api.sequoservice.com`; the previous planning documents' plural API spelling is stale.

Publication uses the existing [Vercel project](https://vercel.com/orestegabos-projects/sequo-services), connected to `OresteGabo/sequo-services` on GitHub. Check Git deployment status after pushing; when the integration does not trigger, deploy the exact pushed commit with the existing authenticated Vercel CLI into this same project. The redesign is now live at https://www.sequoservice.com/; the apex domain redirects there. See the verification report for deployment evidence and rollback. A local build or commit alone does not publish the site; verify the Vercel commit status and the actual public domain after each push. Preserve the existing hosting project and domain setup.

Older documents (`PRODUCT_BRIEF`, `DESIGN_AND_CONTENT`, `SEQUO_API_SUMMARY`, `TECH_STACK`, `ROADMAP`, `IMPLEMENTATION_PLAN`) are historical planning material. Their payment, distribution, domain and availability statements must be checked against the current claim review and actual app/API code before reuse.
