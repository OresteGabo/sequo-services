<script setup lang="ts">
const screens = [
  {
    name: 'Hub board',
    image: '/placeholders/hub.png',
    label: 'Relay control',
    title: 'See every parcel, locker, fee, and delay from one hub view.',
  },
  {
    name: 'Scanner',
    image: '/placeholders/scanner.png',
    label: 'Fast intake',
    title: 'Scan a package once, then assign the best available locker.',
  },
  {
    name: 'Actions',
    image: '/placeholders/actions.png',
    label: 'Verified handoff',
    title: 'Release orders with pickup codes, storage fees, and clear status.',
  },
  {
    name: 'Audit',
    image: '/placeholders/audit.png',
    label: 'Live audit',
    title: 'Track new events, damaged parcels, returns, and completed handoffs.',
  },
]

const steps = [
  'Customers discover local merchants and choose delivery, pickup, or relay collection.',
  'Orders move through acceptance, preparation, packing, and handoff with status updates.',
  'Riders and relay points complete verified delivery, pickup, storage, and return flows.',
]

const audiences = [
  {
    title: 'Customers',
    copy: 'Shop local, pay digitally, follow the order, and use pickup or relay collection when direct delivery does not fit the day.',
    stat: '4',
    label: 'ways to receive',
  },
  {
    title: 'Merchants',
    copy: 'Manage storefronts, accept orders, prepare packages, support bargaining, and keep payouts understandable.',
    stat: '15%',
    label: 'default commission',
  },
  {
    title: 'Riders',
    copy: 'Receive assigned missions with proof, PIN support, route context, and safe problem reporting.',
    stat: 'PIN',
    label: 'verified delivery',
  },
  {
    title: 'Relay partners',
    copy: 'Receive parcels, validate pickup codes, release items, and handle return intake with accountability.',
    stat: '72h',
    label: 'return window',
  },
]

const proofPoints = [
  'Zero-cash by default',
  'Mobile wallet payments',
  'Pickup codes and PIN flows',
  'Return and refund rules',
  'Audit trails for hub activity',
  'Server-side settlement tracking',
]

const faqs = [
  {
    q: 'Is Sequo only for delivery?',
    a: 'No. Sequo connects shopping, merchant operations, riders, relay points, payments, returns, and notifications in one commerce flow.',
  },
  {
    q: 'Can this site use better screenshots later?',
    a: 'Yes. The current screenshots are placeholders stored in the public folder, so final app images can replace them without changing the page structure.',
  },
  {
    q: 'Who should contact Sequo first?',
    a: 'Local merchants, relay partners, riders, investors, and early customers can all use the same contact path while the product expands.',
  },
]

const appLinks = [
  {
    label: 'Download for Android',
    detail: 'Phone and tablet',
    href: 'mailto:hello@sequoservices.com?subject=Sequo%20Android%20app',
  },
  {
    label: 'Get launch alert',
    detail: 'iOS and web app',
    href: 'mailto:hello@sequoservices.com?subject=Sequo%20app%20launch%20alert',
  },
]

const footerGroups = [
  {
    title: 'Join Sequo',
    links: [
      'Become a Sequo hub',
      'Become un livreur',
      'Open a merchant storefront',
      'Join the customer waitlist',
    ],
  },
  {
    title: 'Partners',
    links: [
      'Partner with Sequo',
      'Investor relations',
      'Relay network expansion',
      'Cooperative markets',
    ],
  },
  {
    title: 'Product',
    links: [
      'Customer app',
      'Merchant tools',
      'Rider missions',
      'Returns and pickup',
    ],
  },
]

const qrRows = [
  '111111100100101111111',
  '100000101011001000001',
  '101110100110101011101',
  '101110101101001011101',
  '101110100101101011101',
  '100000101010101000001',
  '111111101010101111111',
  '000000001101100000000',
  '101011111001111010110',
  '010100001111000111001',
  '111001101010110001011',
  '001110010111011101100',
  '110101111000101010111',
  '000000001011001011010',
  '111111100111101101101',
  '100000101000111011001',
  '101110101110001101111',
  '101110100011110010100',
  '101110101101011111001',
  '100000100010100010110',
  '111111101111001101011',
]

const qrActiveCells = new Set(
  qrRows.flatMap((row, rowIndex) =>
    [...row]
      .map((value, columnIndex) => (value === '1' ? rowIndex * row.length + columnIndex : -1))
      .filter((index) => index >= 0),
  ),
)

const qrCellCount = qrRows.length * 21
</script>

<template>
  <main class="site-shell">
    <div class="life-field" aria-hidden="true">
      <span v-for="cell in 96" :key="cell"></span>
    </div>

    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand-mark" href="#top" aria-label="Sequo home">
        <span class="brand-symbol">S</span>
        <span>Sequo</span>
      </a>
      <div class="nav-links" aria-label="Page sections">
        <a href="#platform">Platform</a>
        <a href="#operators">Operators</a>
        <a href="#trust">Trust</a>
      </div>
      <a class="nav-cta" href="mailto:hello@sequoservices.com">Talk to us</a>
    </nav>

    <section id="top" class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">Local commerce operations</p>
        <h1>Local commerce with every handoff accounted for.</h1>
        <p class="lead">
          A commerce and logistics platform for local merchants, riders, and relay points:
          digital payments, verified delivery, pickup, storage, returns, and live operational
          accountability in one flow.
        </p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button primary" href="mailto:hello@sequoservices.com?subject=Joining%20Sequo">Join the waitlist</a>
          <a class="button secondary" href="#platform">Explore the flow</a>
        </div>
        <div class="install-actions" aria-label="App download options">
          <a
            v-for="link in appLinks"
            :key="link.label"
            class="download-button"
            :href="link.href"
          >
            <span>{{ link.detail }}</span>
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="hero-visual" aria-label="Sequo app preview">
        <div class="product-note product-note-one">
          <span>Relay queue</span>
          <strong>3 waiting</strong>
        </div>
        <div class="screenshot-frame hero-phone">
          <img src="/placeholders/hub.png" alt="Sequo hub screen placeholder" />
        </div>
        <div class="product-note product-note-two">
          <span>Verified handoff</span>
          <strong>PIN</strong>
        </div>
        <aside class="qr-card" aria-label="Desktop app QR code">
          <div class="qr-code" aria-hidden="true">
            <span
              v-for="cell in qrCellCount"
              :key="cell"
              :class="{ active: qrActiveCells.has(cell - 1) }"
            ></span>
          </div>
          <p>Scan to get Sequo on your phone when the app opens.</p>
        </aside>
      </div>
    </section>

    <section id="platform" class="scroll-story" aria-labelledby="platform-title">
      <div class="story-intro">
        <p class="eyebrow">Scroll the operating system</p>
        <h2 id="platform-title">One flow for the messy parts of local commerce.</h2>
        <p>
          The page pins the product stage while scroll advances the story: intake, hub visibility,
          fees, returns, and audit trails. Later, the same slots can hold final Sequo app captures.
        </p>
      </div>

      <div class="story-pin">
        <div class="story-copy">
          <p class="kicker">Operational rhythm</p>
          <h3>Scan. Store. Release. Return.</h3>
          <p>
            Sequo keeps the practical work visible for every participant. Customers get clarity,
            merchants keep orders moving, riders get proof, and relay points know exactly what to do.
          </p>
          <ul class="step-list">
            <li v-for="(step, index) in steps" :key="step">
              <span aria-hidden="true">{{ index + 1 }}</span>
              {{ step }}
            </li>
          </ul>
        </div>

        <div class="screen-stack" aria-label="Animated Sequo screenshots">
          <figure
            v-for="(screen, index) in screens"
            :key="screen.name"
            class="screen-card"
            :style="{ '--i': index }"
          >
            <img :src="screen.image" :alt="`${screen.name} placeholder screenshot`" />
            <figcaption>
              <span>{{ screen.label }}</span>
              {{ screen.title }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="operators" class="audience-section" aria-labelledby="operators-title">
      <div class="section-heading">
        <p class="eyebrow">Built for the people doing the work</p>
        <h2 id="operators-title">Every role gets a clear next action.</h2>
      </div>

      <div class="audience-grid">
        <article v-for="audience in audiences" :key="audience.title" class="audience-card">
          <div>
            <p>{{ audience.label }}</p>
            <strong>{{ audience.stat }}</strong>
          </div>
          <h3>{{ audience.title }}</h3>
          <p>{{ audience.copy }}</p>
        </article>
      </div>
    </section>

    <section id="trust" class="trust-section" aria-labelledby="trust-title">
      <div class="trust-copy">
        <p class="eyebrow">Trust by design</p>
        <h2 id="trust-title">Made for markets where timing, payment, and proof matter.</h2>
        <p>
          Sequo avoids vague promises. It focuses on concrete operating rules: wallet payment,
          identity checks, relay custody, storage fees, return windows, and auditable status changes.
        </p>
      </div>
      <div class="proof-grid">
        <span v-for="point in proofPoints" :key="point">{{ point }}</span>
      </div>
    </section>

    <section class="moment-section" aria-label="Brand identity">
      <div class="moment-track">
        <span>Shop local</span>
        <span>Pay digitally</span>
        <span>Prepare orders</span>
        <span>Move parcels</span>
        <span>Collect nearby</span>
        <span>Return with rules</span>
      </div>
    </section>

    <section class="investor-section" aria-labelledby="investor-title">
      <div class="section-heading">
        <p class="eyebrow">The bigger picture</p>
        <h2 id="investor-title">Local commerce infrastructure with daily operational gravity.</h2>
      </div>
      <div class="investor-panel">
        <p>
          Sequo is not only a storefront. It is the layer that coordinates sellers, payments,
          delivery choices, riders, relay partners, returns, and financial accountability.
        </p>
        <a class="button secondary dark" href="mailto:hello@sequoservices.com?subject=Sequo%20partnership">
          Partner with Sequo
        </a>
      </div>
    </section>

    <section class="faq-section" aria-labelledby="faq-title">
      <div class="section-heading">
        <p class="eyebrow">Simple answers</p>
        <h2 id="faq-title">What Sequo is becoming.</h2>
      </div>
      <div class="faq-list">
        <details v-for="faq in faqs" :key="faq.q" open>
          <summary>{{ faq.q }}</summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </section>

    <footer class="footer-section">
      <div class="footer-lead">
        <p class="eyebrow">Sequo Services</p>
        <h2>Bring the next version of local commerce online.</h2>
        <p>
          Build with Sequo as a hub operator, rider, merchant, logistics partner, or investor.
        </p>
      </div>
      <div class="footer-links">
        <div v-for="group in footerGroups" :key="group.title" class="footer-group">
          <h3>{{ group.title }}</h3>
          <a
            v-for="link in group.links"
            :key="link"
            href="mailto:hello@sequoservices.com"
          >
            {{ link }}
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <a class="button primary" href="mailto:hello@sequoservices.com">hello@sequoservices.com</a>
        <p>Sequo coordinates local commerce, relay pickup, delivery, returns, and accountability.</p>
      </div>
    </footer>
  </main>
</template>
