# Bilingual public website update — 2026-11-09

Eight distinct pages in French and English: home, application, merchants, riders, relay points, about, help and contact. Role pages explain actual workflows and show real app screens. Help provides searchable, categorized FAQs and concrete availability information. Contact prepares an email without sending or storing it. No invented pricing, coverage, testimonials or store links were added.

The Vue/Vite stack and existing Vercel project are preserved. Static prerendering creates 16 localized HTML documents with canonical, alternate-language and social metadata, a sitemap, robots rules and a true 404. Language navigation retains the corresponding page. Favicon links use the current SEQUO icon with a versioned URL to refresh old Vue browser caches.

The generic illustration/availability footer and the “LE COMMERCE LOCAL, MIEUX CONNECTÉ” eyebrow were removed. The hero artwork retains a specific illustration caption. Screenshot sources are documented in SCREENSHOTS.md.

Validation: production build and TypeScript checks passed; 16 rendered routes and 48 Chrome page/viewport combinations (1440, 390 and 320 pixels) passed. Checks cover image loading, overflow, language links, metadata, console/hydration errors, mobile navigation and Escape focus, screenshot tabs and enlargement, FAQ search/disclosure and contact validation. No email was submitted. These checks do not establish public app-store availability, payment-provider readiness or field delivery coverage.

Publish only the reviewed commit to the existing sequo-services Vercel project and verify the public domain after deployment. Build outputs and QA captures remain ignored.

## Customer homepage refinement

The owner requested a customer-first homepage. Its main content now covers the customer app, real customer screenshots, shopping steps, customer help and access questions. Merchant/Hub cards and the four-role overview were removed from the homepage. A smaller text invitation after the shopping journey links to the dedicated rider page. Vendor and Hub screenshots remain on the merchant and relay pages, reachable through the partner menu and footer. No new page duplicates were needed. Both languages follow this hierarchy.

## Rider recruitment and scroll route

The rider page now explicitly invites visitors to become SEQUO delivery partners and explains how to contact the team about availability and entry conditions. A native SVG courier on a scooter follows a dotted route from shop to customer as the visitor scrolls the three delivery steps. The map stays visible beside the steps on desktop and above them on mobile. It is an illustration, with no live tracking, location permission, external map service or automatic page scrolling. Reduced-motion preferences keep the courier still and disable its signal pulse. The homepage rider invitation uses the same courier artwork. Real rider screenshots remain in the app section.

Browser checks verify movement with scroll, sticky visibility and reduced-motion behavior in both languages on desktop and phone, alongside the existing responsive suite.

## Relay customers and operators

The existing `/points-relais` and `/en/relay-points` URLs now explain parcel collection to customers: eligible basket options, readiness before travelling, personal collection code and requested identification. They use a collection illustration, not an operator app screenshot or invented live relay locations. A direct customer navigation link prioritizes this journey. Shop onboarding and existing Hub dashboard/history captures have moved to `/devenir-point-relais` and `/en/become-a-relay-point`, available through the partner menu and a small link after the customer guide. Each new page has localized metadata, canonical/alternate URLs and a sitemap entry. The site now contains nine pages in two languages.
