# Bilingual public website update — 2026-11-09

Eight distinct pages in French and English: home, application, merchants, riders, relay points, about, help and contact. Role pages explain actual workflows and show real app screens. Help provides searchable, categorized FAQs and concrete availability information. Contact prepares an email without sending or storing it. No invented pricing, coverage, testimonials or store links were added.

The Vue/Vite stack and existing Vercel project are preserved. Static prerendering creates 16 localized HTML documents with canonical, alternate-language and social metadata, a sitemap, robots rules and a true 404. Language navigation retains the corresponding page. Favicon links use the current SEQUO icon with a versioned URL to refresh old Vue browser caches.

The generic illustration/availability footer and the “LE COMMERCE LOCAL, MIEUX CONNECTÉ” eyebrow were removed. The hero artwork retains a specific illustration caption. Screenshot sources are documented in SCREENSHOTS.md.

Validation: production build and TypeScript checks passed; 16 rendered routes and 48 Chrome page/viewport combinations (1440, 390 and 320 pixels) passed. Checks cover image loading, overflow, language links, metadata, console/hydration errors, mobile navigation and Escape focus, screenshot tabs and enlargement, FAQ search/disclosure and contact validation. No email was submitted. These checks do not establish public app-store availability, payment-provider readiness or field delivery coverage.

Publish only the reviewed commit to the existing sequo-services Vercel project and verify the public domain after deployment. Build outputs and QA captures remain ignored.

## Customer homepage refinement

The owner requested a customer-first homepage. Its main content now covers the customer app, real customer screenshots, shopping steps, customer help and access questions. Merchant/Hub cards and the four-role overview were removed from the homepage. A smaller text invitation after the shopping journey links to the dedicated rider page. Vendor and Hub screenshots remain on the merchant and relay pages, reachable through the partner menu and footer. No new page duplicates were needed. Both languages follow this hierarchy.
