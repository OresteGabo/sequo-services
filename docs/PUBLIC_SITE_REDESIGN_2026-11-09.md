# Public website redesign and verification — 2026-11-09

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

## Public site and publication gate

The live domain responded HTTP 200 and still showed the old English Hub-first page when reviewed. Public response headers indicate Vercel behind Cloudflare. This does not identify the owner's exact Vercel project or prove which Git branch publishes to that domain.

There is no local `.vercel/project.json`, Vercel CLI or tracked host configuration in this checkout. The installed GitHub CLI also has no verified authentication, so repository deployment records were not available through the existing CLI session. No publishing command, remote push, DNS change or hosting-account change has been made. **The redesign is locally verified; it has not been published to www.sequoservice.com.**

### Publication steps for the existing owner/project

1. In the existing website hosting project, verify that `www.sequoservice.com` points to the intended project and that its source is `OresteGabo/sequo-services`. Preserve the existing domain/DNS setup.
2. Confirm the production branch and the intended reviewed commit. Use the existing host's preview deployment for that commit before replacing the public site.
3. Use the repository root as the project root, its existing lockfile and supported Node version, `npm run build` as the build command and `dist` as the static output. No API key or production credential is needed by this page.
4. Review the preview at phone and desktop widths. Confirm contact, availability statements, image disclosure, role buttons, FAQ, favicon and sharing metadata. Confirm no old download/QR/payment claims remain.
5. Publish the same reviewed commit through the existing project. Verify the actual public domain's French title/content, images, anchors and payment-availability answer after publication.
6. If the public check fails, use that host's previous-deployment rollback. Keep the code/content evidence attached to the release; do not claim publication based only on a successful local build or Git push.

Until publication is verified, the next task can depend on the committed source and local preview only. Real payment connectivity, unapproved commercial values, public launch/service coverage and app-store links remain separate owner/operator decisions.
