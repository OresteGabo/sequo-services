# Sequo Services

Public website for Sequo at `sequoservices.com`.

This project is the marketing, product education, and investor-facing website for Sequo. It should explain the app clearly to new visitors without requiring technical knowledge.

## What This Site Should Do

- Explain what Sequo is: a local commerce and logistics platform.
- Show who Sequo serves: customers, merchants, riders, relay partners, and investors.
- Present the app experience with screenshots, mockups, and clear flows.
- Build trust around digital payments, relay pickup, verified delivery, returns, and operational accountability.
- Convert visitors into leads: waitlist, merchant/rider/relay applications, investor contact, or general inquiries.

## Current Stack

- Vue 3
- Vite
- TypeScript
- `vue-tsc`

Recommended additions:

- Tailwind CSS
- Vue Router if the site becomes multi-page
- A small form/validation layer for lead capture
- Analytics after deployment

## Important Docs

- [AI_CONTEXT.md](AI_CONTEXT.md): AI/developer context for this specific website.
- [docs/SEQUO_API_SUMMARY.md](docs/SEQUO_API_SUMMARY.md): copied summary of the implemented Sequo API.
- [docs/PRODUCT_BRIEF.md](docs/PRODUCT_BRIEF.md): product narrative and audience guidance.
- [docs/DESIGN_AND_CONTENT.md](docs/DESIGN_AND_CONTENT.md): design, tone, and content direction.
- [docs/TECH_STACK.md](docs/TECH_STACK.md): recommended frontend stack and why it fits this site.
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md): local development and implementation guidance.
- [docs/ROADMAP.md](docs/ROADMAP.md): suggested build phases.
- [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md): step-by-step tasks from first build to launch.

## Development

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Type-check and build:

```sh
npm run build
```

## API Usage

The first version of this public site should not require much API access. If forms or live data are added, use:

```text
VITE_SEQUO_API_BASE_URL=https://api.sequoservices.com
```

The implemented backend currently uses `/api`, not `/api/v1`.

## Build Principle

This site should feel like a real company website, not a Vue starter, technical demo, or generic landing page. Lead with Sequo's value to local commerce, then support it with credible app flows and operational trust.
