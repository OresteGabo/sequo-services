# Sequo Services Website AI Context

This file is for AI assistants and developers building `sequoservices.com`, the public website for Sequo.

## Project Purpose

`sequoservices.com` is the public, non-technical website for Sequo. It should help someone who has just discovered Sequo understand what the app does, why it matters, who it serves, and why the company is credible.

The site should also work as an investor-facing product narrative. It must feel professional, trustworthy, modern, and operationally serious, while staying clear enough for ordinary customers, merchants, riders, relay partners, and local business owners.

Do not write like an API manual. Do not expose backend implementation details unless they help explain trust, reliability, safety, or scale in plain language.

## Product Summary

Sequo is a local commerce and logistics platform. It connects customers, merchants, riders, relay points, and Sequo operations into one trusted delivery and commerce system.

In plain language, Sequo lets people:

- Discover and buy products from local merchants.
- Pay digitally through supported mobile wallet providers.
- Receive orders through fast delivery, grouped delivery, pickup, or relay-point collection.
- Negotiate prices with merchants when bargaining is enabled.
- Buy from cooperative markets where multiple sellers can be grouped into one storefront.
- Return eligible items through relay drop-off within the return window.
- Receive notifications and real-time order updates.

Sequo helps merchants:

- Sell online without building their own ecommerce infrastructure.
- Manage orders, preparation, packing, and handoff.
- Use live product evidence where needed to build trust.
- Participate in cooperative markets.
- Receive payouts after commission, refunds, and settlement rules are applied.

Sequo helps riders:

- Receive assigned missions.
- Pick up and deliver packages with proof and PIN-based delivery flows.
- Deposit parcels at relay points when the customer chooses relay delivery.
- Report problems safely when pickup, routing, or delivery cannot continue normally.

Sequo helps relay partners and hubs:

- Receive and store parcels.
- Validate pickup codes.
- Release parcels to the right customer or Sequo agent.
- Handle returns and delayed parcel workflows.

## Business Rules To Reflect Publicly

Use these rules only when useful for product copy. Keep them human-friendly.

- Sequo is zero-cash by default.
- Supported wallet providers in the backend are Yas Togo and Moov Africa.
- Delivery pricing starts with a minimum fee for nearby trips and scales with distance.
- Sequo supports monthly subscription tiers and loyalty discounts.
- Merchant commission defaults to 15%, with configurable merchant rates from 5% to 15%.
- Returns have a 72-hour window for eligible goods.
- Relay points can be used for parcel pickup, storage, and return intake.
- Cooperative markets can group independent sellers into one customer-facing market experience.
- Accepted bargaining prices can be locked for a limited time.
- Payouts, refunds, commissions, and shortfalls are tracked server-side for financial accountability.

## Suggested Site Structure

Build the first version as a polished single-page site with enough sections to later become multiple pages.

Recommended pages or sections:

- Hero: Sequo as a trusted local commerce and delivery platform.
- App Preview: screenshots or realistic product mockups for customer, merchant, rider, and hub experiences.
- How It Works: shop, pay, prepare, deliver or collect, track, return if needed.
- For Customers: digital payment, local merchants, delivery choices, pickup/relay options, notifications.
- For Merchants: storefront, order management, bargaining, cooperative markets, payout clarity.
- For Riders: assigned missions, proof-based delivery, route and problem flows.
- For Relay Partners: pickup codes, parcel custody, return drop-off, locker/availability management.
- Trust And Safety: authentication, permissions, PINs, audit trails, no cash handling, wallet validation.
- Investor Story: market opportunity, local commerce infrastructure, revenue model, operational leverage.
- FAQ: simple answers for customers, merchants, riders, relay partners, and investors.
- Contact/Waitlist: collect leads from customers, merchants, riders, relay partners, investors.

## Tone And Messaging

Use confident, simple language.

Good:

- "Sequo helps local commerce move from seller to customer with payment, delivery, relay pickup, and returns in one flow."
- "Customers pay digitally, merchants prepare orders, riders complete verified deliveries, and relay points keep parcels moving."
- "Built for local markets where trust, timing, and accountability matter."

Avoid:

- Technical backend jargon.
- Overpromising national/global scale before the product proves it.
- Saying "blockchain", "AI-powered", or "autonomous" unless a real feature exists.
- Mentioning private admin endpoints, internal role names, or implementation internals.

## Visual Direction

The design should feel premium, operational, African-local-commerce aware, and trustworthy.

Recommended visual qualities:

- Clean responsive layout.
- Strong typography.
- Real app screenshots when available.
- Product UI mockups if screenshots are not ready.
- Clear section rhythm.
- Confident but restrained color palette.
- Avoid generic stock-photo business imagery.
- Avoid heavy gradients, decorative blobs, and vague tech imagery.

The first viewport should immediately communicate:

- The name Sequo.
- What it does.
- Who it helps.
- A clear call to action.

Suggested CTAs:

- "Join the waitlist"
- "Partner with Sequo"
- "Talk to the team"
- "Explore how it works"

## Current Frontend Stack

This project is currently a fresh Vue 3 + Vite + TypeScript app.

Current package hints:

- Vue `^3.5.42`
- Vite `^8.2.2`
- TypeScript `~6.0.0`
- `vue-tsc` for type checking

Recommended additions when building:

- Vue Router for multi-page navigation if needed.
- Tailwind CSS for styling.
- Pinia only if state becomes necessary.
- A forms solution or simple validated lead form.
- A lightweight animation library only if it improves clarity.

## Relationship To Backend

The public site should not depend heavily on live backend data for the first version.

Possible API integrations later:

- Lead capture.
- Waitlist.
- Merchant/rider/relay partner applications.
- Public status or service availability.
- Help/contact forms.

Use `https://api.sequoservices.com` as the production API origin when API integration exists. During local development, use an environment variable such as `VITE_SEQUO_API_BASE_URL`.

The backend currently exposes implemented routes under `/api`, not `/api/v1`.

## Source Backend Context

This context is derived from the Sequo API repository:

`/Users/muhirwagabooreste/AndroidStudioProjects/SequoService/sequo-api`

Important backend documents:

- `README.md`
- `ARCHITECTURE.md`
- `MOBILE_API_GUIDE.md`
- `API_SPEC.md`
- `SECURITY.md`
- `PRICING_ENGINE.md`
- `COMMISSION_MODEL.md`
- `SETTLEMENTS_AND_RETURNS.md`
- `NOTIFICATION_SYSTEM.md`
- `WEBSOCKET_ARCHITECTURE.md`

## Build Priorities For AI Assistants

When asked to build this site:

1. Replace the default Vite starter UI completely.
2. Create a polished responsive public website, not a developer dashboard.
3. Keep copy non-technical and benefit-focused.
4. Use real Sequo domain concepts from this file.
5. Include sections for customers, merchants, riders, relay partners, and investors.
6. Make the design credible enough for ads and investor review.
7. Keep forms safe: no real secrets, no fake payment collection, no private admin actions.
8. Run `npm run build` and `npm run type-check` before finishing when dependencies are available.

