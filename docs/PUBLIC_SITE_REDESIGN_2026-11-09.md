# Public website redesign and verification — 2026-11-09

> **Publication confirmed, 2026-11-09:** the owner subsequently requested publication. The redesign is now live at https://www.sequoservice.com/. The original local-only milestone below is historical; see the publication addendum for the current release evidence.

## Result and scope

The existing `sequo-services` Vue site has been redesigned in place. The French-first page uses the apps’ SEQUO logo and emerald family, warm neutral backgrounds, a newly generated and labelled commerce illustration, an interactive illustrated customer journey, four role panels, native FAQ disclosures and owner-approved email contact. Mobile and desktop share the same content and brand.

The accompanying [content review](CONTENT_REVIEW_2026-11-09.md) maps public claims to current app/API sources. It distinguishes implemented workflows from public availability, disconnected payment providers, unapproved benefits and unimplemented Hub camera/locker hardware. No app/backend/production setting, financial operation, account or secret was changed.

### Files changed

- `src/App.vue`: content, semantic sections, journey/role selection, responsive menu and FAQ.
- `src/components/SequoIcon.vue`: consistent decorative SVG icons.
- `src/content/site.ts`: owner-approved public contact, centralized for manual edits.
- `src/assets/base.css` and `src/assets/main.css`: complete responsive visual system, focus states and reduced-motion support.
- `index.html`: French document language, title/description, SEQUO favicon and public-domain sharing metadata.
- `public/images/commerce-local.webp`, `sequo-logo.png`, `sequo-icon.png`, `PROVENANCE.md`: original illustrative image, reused app brand and provenance. These are product assets, not QA captures.
- `README.md`, `AI_CONTEXT.md`, this report and `CONTENT_REVIEW_2026-11-09.md`: current run/build, claim evidence and publication guidance.

No dependency or lockfile changed. Existing historical planning docs and legacy placeholder asset URLs were preserved; the redesigned page no longer references the old placeholders.

## Reviewed implementation

Website implementation commit: `12ceefd` (`feat(web): redesign the public SEQUO experience and correct product claims`). Documentation is committed separately. No remote push was made.

## Checks run

All commands below ran from the `sequo-services` checkout.

| Check | Result |
| --- | --- |
| `npm run build` | PASS. Runs `vue-tsc --build` and Vite production build. Repeated after keyboard-focus and contrast improvements; no type or build errors. |
| `git diff --check` | PASS. No whitespace errors. |
| Cached Prettier 3.9.8 on touched Vue/TS/CSS/HTML | PASS. Used existing local formatter; no install or dependency change. |
| `npm run dev -- --host 127.0.0.1 --port 5174 --strictPort` | PASS. HTTP 200; interactive development review. |
| `npm run preview -- --host 127.0.0.1 --port 4174 --strictPort` | PASS. HTTP 200 from the actual production output. |
| Production preview, widths 320 / 390 / 768 / 1280 px | PASS. No horizontal document overflow at the checked widths. Images loaded; no missing section targets. |
| Customer journey: choose / follow / receive | PASS. All three buttons update both description and illustrative phone content. Relay view specifies eligibility. |
| Customer / merchant / rider / relay panels | PASS. All four change title, actual role features, illustrative panel and the email subject. No local app/session access is implied. |
| Mobile menu | PASS. Opens/closes; selecting a section closes it and navigates. Escape from a link returns focus to the menu toggle. |
| FAQ and keyboard | PASS. Native disclosure opens/closes, including Enter. Return and payment wording verified in production preview. |
| Images, anchors, contact | PASS. Zero broken images and zero missing fragment targets in sampled production layouts. Mail links use the owner-confirmed mailbox with encoded subjects. No form submissions or emails sent. |
| Console | PASS. No warnings/errors observed in the checked tab; development connection/update debug messages only. |
| Small-text contrast review | Corrected flagged colors in step numbers, receipt indices, timeline, preview captions and labels. This targeted source review is not a full accessibility certification. |

Production output: HTML 1.59 kB, CSS 26.77 kB (6.20 kB gzip), JavaScript 83.61 kB (32.13 kB gzip). Original hero derivative: 196,092 bytes, 960×1200 WebP. No third-party fonts, trackers or new runtime libraries were introduced.

Browser checks used the in-app Chromium browser with responsive viewport overrides; these are not physical Android/iOS Safari/Chrome tests. Mailbox delivery and public store distribution remain unverified. No live provider or native-app journey was re-executed for this website task.

Temporary visual proof was saved **outside Git** at `/tmp/sequo-public-desktop-2026-11-09.jpg` and `/tmp/sequo-public-mobile-2026-11-09.jpg`. Do not commit those captures. See `public/images/PROVENANCE.md` for the deliberately published illustrative asset.

## Public site and publication gate — original local QA milestone

The live domain responded HTTP 200 and still showed the old English Hub-first page when reviewed. Public response headers indicate Vercel behind Cloudflare. This does not identify the owner's exact Vercel project or prove which Git branch publishes to that domain.

There is no local `.vercel/project.json`, Vercel CLI or tracked host configuration in this checkout. The installed GitHub CLI also has no verified authentication, so repository deployment records were not available through the existing CLI session. At the original local QA milestone, no publishing command, remote push, DNS change or hosting-account change had been made. That milestone ended before publication; the subsequent confirmed release is recorded below.

### Publication steps for the existing owner/project

1. In the existing website hosting project, verify that `www.sequoservice.com` points to the intended project and that its source is `OresteGabo/sequo-services`. Preserve the existing domain/DNS setup.
2. Confirm the production branch and the intended reviewed commit. Use the existing host's preview deployment for that commit before replacing the public site.
3. Use the repository root as the project root, its existing lockfile and supported Node version, `npm run build` as the build command and `dist` as the static output. No API key or production credential is needed by this page.
4. Review the preview at phone and desktop widths. Confirm contact, availability statements, image disclosure, role buttons, FAQ, favicon and sharing metadata. Confirm no old download/QR/payment claims remain.
5. Publish the same reviewed commit through the existing project. Verify the actual public domain's French title/content, images, anchors and payment-availability answer after publication.
6. If the public check fails, use that host's previous-deployment rollback. Keep the code/content evidence attached to the release; do not claim publication based only on a successful local build or Git push.

The original checklist above remains useful for future releases. Publication was subsequently verified as recorded below. Real payment connectivity, unapproved commercial values, public launch/service coverage and app-store links remain separate owner/operator decisions.


## Publication addendum — 2026-11-09

The owner explicitly requested publication after reviewing the local redesign.

- Verified the connected GitHub repository through the GitHub connector: `OresteGabo/sequo-services`, default branch `main`, authorized push access. The previous commit’s successful Vercel check identified the existing `orestegabos-projects/sequo-services` project. The connector worked even though the separate local GitHub CLI authentication had not been verified.
- `git fetch origin main` confirmed remote `76dc61580d84c479a850d6232e4b807e8fc69d13`; the only local additions were reviewed implementation `12ceefd` and documentation `a9ce77b`.
- `git push origin HEAD:main` succeeded as a normal fast-forward, `76dc615..a9ce77b`; no forced update, DNS, environment, provider, account-access or hosting-project change.
- GitHub reported Vercel **success** for `a9ce77b76835df6a9ffe2389e3dc09b5f33bf39d`: [production deployment](https://vercel.com/orestegabos-projects/sequo-services/HtXS1LfHw4xa4eorKM7G6QgMg8MX).
- Public verification at `2026-11-09T09:34:43Z`: `https://www.sequoservice.com/` returned HTTP 200 with the new French title and metadata; `https://sequoservice.com/` returned HTTP 200 after redirecting to the www domain.
- The served HTML, JavaScript, CSS, hero illustration, logo and favicon matched the locally reviewed `dist/` files byte for byte (SHA-256 comparison). Live script `index-C5dNIhC6.js` and stylesheet `index-DOX78Vyy.css` match the recorded production build above.
- Actual live browser checks passed at desktop 1280 px and phone 390 px: images loaded, no horizontal document overflow, all section anchors resolved, the customer journey and merchant/relay role panels updated, mobile navigation opened/closed and reached the chosen section, and the payment-availability FAQ showed the correct non-live status. No console entries were reported in the live tab. These are responsive browser checks, not physical-device tests.
- The live page was left open for the owner. Visual proof `/tmp/sequo-public-live-2026-11-09.jpg` and the detailed hash receipt `/tmp/sequo-public-publication-verification-2026-11-09.json` remain outside Git; no test screenshot is committed.

The follow-up documentation commit changes no website source, assets, dependencies or configuration. Its push uses the same existing production connection; the final live asset check must still match the verified build.

For a rollback, preserve history: prepare a reviewed revert of the redesign commit, build it and publish it through the same connection, or use the existing host’s previous-deployment rollback. Baseline `76dc61580d84c479a850d6232e4b807e8fc69d13` remains available. Do not force-reset remote history or create a replacement hosting project.
