# Tech Stack

## Recommended Stack

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Vue Router if the site becomes multi-page
- Simple form validation for lead capture
- Plausible, PostHog, or Google Analytics for analytics
- Vercel, Netlify, or Cloudflare Pages for hosting

## Why This Stack Fits

Vue 3 is a good fit because it is readable, component-based, and approachable. Sequo's public website will need reusable sections such as hero, app preview, benefits, audience blocks, FAQ, and forms. Vue makes those pieces easy to organize.

Vite is a good fit because this site is currently a lightweight marketing/product site. It gives fast local development and simple production builds without forcing a heavier full-stack framework too early.

TypeScript is useful because the site will grow: lead forms, API calls, analytics events, page data, and content models all benefit from typed structures.

Tailwind CSS is recommended because the site needs a polished responsive design quickly. It helps build consistent spacing, typography, layouts, and buttons without creating a large custom CSS system at the start.

Vue Router should be added only when the site expands beyond one page. A strong single-page version is enough for the first launch, but later the site may need pages for customers, merchants, riders, relay partners, investors, help, privacy, and terms.

Analytics should be added once the site is deployed because the public site is meant to attract customers, merchants, partners, and investors. Conversion data will matter.

Static hosting on Vercel, Netlify, or Cloudflare Pages is enough for the first version because the public site should be fast, reliable, and mostly static.

## What Not To Add Too Early

- Pinia unless the public site needs shared state.
- A complex CMS before the first content structure is stable.
- A heavy UI library that makes the brand look generic.
- Backend-only secrets in Vite environment variables.

