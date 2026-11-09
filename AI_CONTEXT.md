# SEQUO public website — implementation guidance

This repository contains the existing public website at **https://www.sequoservice.com**. Keep the Vue 3 / Vite / TypeScript implementation and the existing external hosting setup. The site is French-first and nontechnical. Explain what SEQUO does in language useful to customers, merchants, riders and relay partners.

## Verify claims against the product

Read [the current content review](docs/CONTENT_REVIEW_2026-11-09.md) and recheck the relevant app/API entry points when behavior changes. Historical planning documents are not proof of runtime behavior or public service availability.

- Implemented journeys include merchant catalog publication, a customer basket/quote, scoped preparation and delivery statuses, eligible relay collection with personal codes, bargaining on allowed products, and eligible return requests/statuses.
- Customer reception choices currently exposed are home and eligible available relay collection. Do not promise four universal delivery modes, connected locker hardware, automatic optimal routing, full-city coverage or fixed delivery times.
- Native app code/local builds do not establish a public App Store/Play Store listing. Publish real approved store destinations only when confirmed. An email link is not a download, registration or waitlist submission.
- Yas/Moov provider operations remain unconnected. Do not market live collections, refunds or electronic payouts. Ledger/status tracking and refund instructions do not mean that funds were transferred.
- Subscription/referral commercial values are unapproved and production benefits remain inactive. Do not promise prices, percentage savings, rewards or cashback.
- Return requests have a 72-hour eligibility window after delivery; this is not a relay-storage deadline or a guarantee of reimbursement. Relay eligibility excludes food, perishables and sensitive goods. That exclusion is not a blanket rule for every return.
- Hub live camera scanning is unavailable. Use truthful personal-code/manual validation wording. Do not turn a decorative pattern into an advertised QR/download mechanism.
- No actual public testable delivery, service launch or full production coverage is established by the source review. Keep availability explicit until the owner confirms it.

## Design and interactions

Reuse the apps' emerald family (`#0B6B46`) and existing SEQUO brand assets. Use warm neutral backgrounds, clear typography, generous but purposeful spacing, restrained borders and consistent icons. Keep each section useful; avoid heavy gradients, floating decorative card piles, fabricated metrics, testimonials and partner logos.

The commerce hero is explicitly illustrative; preserve its caption. The phone galleries use real app captures, authorized by the owner on 2026-11-09. Curated local synthetic fixture captures and supplied framed Hub images are documented in `docs/SCREENSHOTS.md`; these product assets may be committed. Do not publish private account/profile information, pickup credentials or arbitrary internal QA captures. Hero provenance is in `public/images/PROVENANCE.md`.

Keep the mobile navigation keyboard-accessible, including focus return on Escape. Preserve visible focus, native buttons, truthful pressed states, native FAQ disclosures, reduced-motion support and sufficiently contrasting text. Check small phones as well as desktop/tablet. Keep links and controls meaningful; no fake form success or nonfunctional store badges.

## Contact, checks and release

`src/content/site.ts` owns the public email. The owner approved `hello@sequoservices.com` on 2026-11-09 and plans to update it manually. Contact links and the contact form prepare an email in the visitor’s mail application. They do not send messages or store leads. This static site makes no authenticated API calls and must not expose internal admin/local-fixture entry points or secrets.

Run `npm run build` (type checking, production builds and static prerendering) and `npm run check:site`, then check interactions, images, anchors, phone widths, readable content and console errors in the local preview. Record validation limits. Do not commit QA screenshots, generated builds, dependencies or local configuration; documented curated product captures are intended public assets.

The existing Vercel project `orestegabos-projects/sequo-services` publishes this GitHub repository’s `main` branch. That connection and the live redesign were verified on 2026-11-09 through GitHub commit status and the actual public domain. Preserve this project/domain setup. Publishing changes requires the user’s authorization, a clean/reviewed fast-forward push and verification of the resulting Vercel status plus the live page/assets. A local build or commit alone does not establish publication. See the publication addendum in `docs/PUBLIC_SITE_REDESIGN_2026-11-09.md`.
