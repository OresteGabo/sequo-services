<script setup lang="ts">
import { computed, ref } from 'vue'
import SequoIcon from './components/SequoIcon.vue'
import AppScreens from './components/AppScreens.vue'
import RiderJourney from './components/RiderJourney.vue'
import RiderGlyph from './components/RiderGlyph.vue'
import RelayPickup from './components/RelayPickup.vue'
import AiImage from './components/AiImage.vue'
import MerchantDetails from './components/MerchantDetails.vue'
import { merchantGuide } from './content/merchant'
import { publicContact } from './content/site'
import { copy, paths, resolvePath, type Page, type ProductPage } from './content/pages'

const props = defineProps<{ initialPath?: string }>()
const route = resolvePath(props.initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
const locale = route.locale
const page = route.page
const text = copy[locale]
const aiImageLabel = locale === 'fr' ? 'Image générée par IA' : 'AI-generated image'
const aiArtworkLabel = locale === 'fr' ? 'Illustration créée avec l’IA' : 'Illustration created with AI'
const menuOpen = ref(false)
const menuToggle = ref<HTMLButtonElement | null>(null)
const partnerMenu = ref<HTMLDetailsElement | null>(null)
const products: ProductPage[] = ['app', 'merchants', 'riders', 'hubPartners']
const partners: ProductPage[] = ['merchants', 'riders', 'hubPartners']
const product = page in text.products ? text.products[page as ProductPage] : null
const link = (id: Page) => paths[locale][id]
const contactCopy = page === 'home' ? text.home : page === 'relays' ? {
  contactTitle: locale === 'fr' ? 'Une question' : 'A question',
  contactEmphasis: locale === 'fr' ? 'sur votre retrait ?' : 'about collection?',
  contactText: locale === 'fr' ? 'Un doute sur les possibilités de retrait ou les informations à préparer ? Consultez l’aide ou contactez l’équipe.' : 'Unsure about collection options or what to bring? Visit help or contact the team.',
  contactAction: text.common.contactAction,
} : text.common
const mail = (subject: string) => `mailto:${publicContact.email}?subject=${encodeURIComponent(subject)}`
function closeNavigation(event?: KeyboardEvent) {
  if (partnerMenu.value?.open) { partnerMenu.value.open = false; partnerMenu.value.querySelector('summary')?.focus() }
  if (menuOpen.value) { menuOpen.value = false; menuToggle.value?.focus() }
  event?.preventDefault()
}
const search = ref('')
const category = ref('')
const categories = [...new Set(text.help.faqs.map(faq => faq.category))]
const normalise = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const filteredFaqs = computed(() => text.help.faqs.filter(faq => (!category.value || faq.category === category.value) && normalise(faq.q + ' ' + faq.a).includes(normalise(search.value.trim()))))
const name = ref('')
const topic = ref(text.contact.topics[0]!)
const message = ref('')
function prepareEmail() {
  const body = `${text.contact.draftGreeting}\n\n${message.value.trim()}\n\n${name.value.trim()}`
  window.location.href = `${mail(`${topic.value} — SEQUO`)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <a class="skip-link" href="#contenu">{{ text.skip }}</a>
  <header id="top" class="site-header" @keydown.esc="closeNavigation">
    <div class="header-inner">
      <a class="brand" :href="link('home')" :aria-label="text.homeLabel"><img src="/brand/sequo-logo-light.svg" alt="SEQUO" width="1622" height="448" /></a>
      <nav id="navigation" :class="{ 'is-open': menuOpen }" :aria-label="text.mainNav">
        <a :href="link('app')" :aria-current="page === 'app' ? 'page' : undefined">{{ text.nav.app }}</a>
        <a :href="link('relays')" :aria-current="page === 'relays' ? 'page' : undefined">{{ text.nav.relays }}</a>
        <details ref="partnerMenu" class="partner-menu">
          <summary :class="{ active: partners.includes(page as ProductPage) }">{{ text.partners }}<SequoIcon name="arrow-down" /></summary>
          <div class="partner-links"><a v-for="id in partners" :key="id" :href="link(id)" :aria-current="page === id ? 'page' : undefined"><SequoIcon :name="text.products[id].icon" /><span>{{ text.nav[id] }}<small>{{ text.products[id].product }}</small></span><SequoIcon name="arrow" /></a></div>
        </details>
        <a :href="link('about')" :aria-current="page === 'about' ? 'page' : undefined">{{ text.nav.about }}</a>
        <a :href="link('help')" :aria-current="page === 'help' ? 'page' : undefined">{{ text.nav.help }}</a>
        <a class="button button-small" :href="link('contact')" :aria-current="page === 'contact' ? 'page' : undefined">{{ text.nav.contact }}<SequoIcon name="arrow" /></a>
      </nav>
      <div class="header-actions">
        <button ref="menuToggle" class="menu-toggle" type="button" :aria-label="menuOpen ? text.close : text.menu" :aria-expanded="menuOpen" aria-controls="navigation" @click="menuOpen = !menuOpen"><SequoIcon :name="menuOpen ? 'close' : 'menu'" /></button>
      </div>
    </div>
  </header>

  <main id="contenu" tabindex="-1">
    <section v-if="!route.found" class="wrap not-found"><p class="section-label">404</p><h1>{{ text.notFound.title }}</h1><p>{{ text.notFound.text }}</p><a class="button" :href="link('home')">{{ text.notFound.action }}<SequoIcon name="arrow" /></a></section>

    <template v-else-if="page === 'home'">
      <section class="hero wrap" aria-labelledby="hero-title">
        <div class="hero-copy"><h1 id="hero-title">{{ text.home.title }}<br /><em>{{ text.home.emphasis }}</em></h1><p class="hero-lead">{{ text.home.lead }}</p><div class="hero-actions"><a class="button" :href="link('app')">{{ text.home.action }}<SequoIcon name="arrow" /></a><a class="text-link" :href="link('help')">{{ text.home.secondary }}<SequoIcon name="arrow-down" /></a></div></div>
        <figure class="hero-visual"><img class="hero-photo" src="/images/commerce-local.webp" :alt="text.home.imageAlt" width="960" height="1200" fetchpriority="high" /><div class="handoff-note"><span class="icon-circle"><SequoIcon name="check" /></span><div><strong>{{ text.home.handoff }}</strong><span>{{ text.home.handoffSmall }}</span></div></div><figcaption><span class="ai-label">{{ aiImageLabel }}</span>{{ text.home.imageCaption }}</figcaption></figure>
      </section>
      <nav class="ecosystem-strip wrap" :aria-label="text.home.customerNav"><p>{{ text.home.strip }}<br /><strong>{{ text.home.stripStrong }}</strong></p><a href="#app-title"><SequoIcon name="bag" />{{ text.home.browse }}<SequoIcon name="arrow" /></a><a href="#journey-title"><SequoIcon name="route" />{{ text.home.howTitle }}<SequoIcon name="arrow" /></a><a :href="link('help')"><SequoIcon name="info" />{{ text.nav.help }}<SequoIcon name="arrow" /></a></nav>
      <section class="app-introduction section-space" aria-labelledby="app-title"><div class="wrap split-layout"><div class="section-copy"><p class="section-label">SEQUO</p><h2 id="app-title">{{ text.home.appTitle }}<br /><em>{{ text.home.appEmphasis }}</em></h2><p class="section-intro">{{ text.home.appText }}</p><ul class="feature-checks"><li v-for="item in text.products.app.features" :key="item.title"><SequoIcon name="check" />{{ item.title }}</li></ul><a class="text-link" :href="link('app')">{{ text.home.appAction }}<SequoIcon name="arrow" /></a></div><AppScreens :screens="text.products.app.screens" :locale="locale" /></div></section>

      <section class="journey-section section-space"><div class="wrap"><h2 id="journey-title">{{ text.home.howTitle }}</h2><ol class="journey-grid"><li v-for="(step, i) in text.home.steps" :key="step.title"><span class="step-number">0{{ i + 1 }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol></div></section>
      <aside class="rider-invitation wrap" aria-labelledby="rider-title"><span class="rider-invitation-icon"><RiderGlyph /></span><div><h2 id="rider-title">{{ text.home.riderTitle }}</h2><p>{{ text.home.riderText }}</p></div><a class="text-link" :href="link('riders')">{{ text.home.riderAction }}<SequoIcon name="arrow" /></a></aside>
    </template>

    <template v-else-if="page === 'relays'">
      <section class="product-hero wrap relay-customer-hero" aria-labelledby="relay-title"><div class="product-copy"><p class="product-label"><SequoIcon name="parcel" />{{ text.nav.relays }}</p><h1 id="relay-title">{{ text.relays.title }}<br /><em>{{ text.relays.emphasis }}</em></h1><p class="hero-lead">{{ text.relays.lead }}</p><div class="hero-actions"><a class="button" :href="link('app')">{{ text.relays.action }}<SequoIcon name="arrow" /></a><a class="text-link" href="#retirer-colis">{{ text.relays.how }}<SequoIcon name="arrow-down" /></a></div></div><figure class="relay-customer-visual"><RelayPickup /><figcaption><span class="ai-label">{{ aiArtworkLabel }}</span>{{ text.relays.visualCaption }}</figcaption></figure></section>
      <section class="section-space wrap"><div class="section-heading"><h2>{{ text.relays.intro }}</h2><p class="section-intro">{{ text.relays.detail }}</p></div><div class="feature-grid"><article v-for="item in text.relays.features" :key="item.title"><span class="outline-icon"><SequoIcon :name="item.icon" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div></section>
      <section id="retirer-colis" class="journey-section section-space"><div class="wrap"><h2>{{ text.relays.how }}</h2><ol class="journey-grid"><li v-for="(step, i) in text.relays.steps" :key="step.title"><span class="step-number">0{{ i + 1 }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol></div></section>
      <section class="wrap question-section"><div><SequoIcon name="info" /><h2>{{ text.relays.question }}</h2><p>{{ text.relays.answer }}</p><a class="text-link" :href="link('help')">{{ text.common.viewHelp }}<SequoIcon name="arrow" /></a></div></section>
      <aside class="relay-partner-note wrap"><p>{{ text.relays.partnerPrompt }}</p><a class="text-link" :href="link('hubPartners')">{{ text.relays.partnerAction }}<SequoIcon name="arrow" /></a></aside>
    </template>

    <template v-else-if="product">
      <section class="product-hero wrap" :class="{ 'rider-hero': page === 'riders' }" aria-labelledby="product-title"><div class="product-copy"><p class="product-label"><SequoIcon :name="product.icon" />{{ page === 'riders' ? (locale === 'fr' ? 'Devenir partenaire · SEQUO Rider' : 'Become a partner · SEQUO Rider') : product.product }}</p><h1 id="product-title">{{ product.title }}<br /><em>{{ product.emphasis }}</em></h1><p class="hero-lead">{{ product.lead }}</p><div class="hero-actions"><a class="button" :href="mail(product.subject)">{{ product.action }}<SequoIcon name="arrow" /></a><a class="text-link" :href="page === 'riders' ? '#parcours-livreur' : '#dans-application'">{{ page === 'riders' ? (locale === 'fr' ? 'Découvrez votre parcours' : 'Explore the rider journey') : text.common.inside }}<SequoIcon name="arrow-down" /></a></div></div><AiImage v-if="page === 'riders'" class="rider-hero-photo" src="/images/rider-scooter-street.webp" :alt="locale === 'fr' ? 'Image générée par IA : un livreur casqué sur un scooter gris aligné avec la rue, un colis SEQUO et une petite enseigne de commerce partenaire.' : 'AI-generated image: a helmeted rider on a gray scooter aligned with the street, a SEQUO delivery package and a small partner-shop sign.'" :caption="locale === 'fr' ? 'Scène fictive · Un livreur et son colis SEQUO.' : 'Fictional scene · A rider and a SEQUO delivery package.'" :locale="locale" priority /><AiImage v-else-if="page === 'merchants'" src="/images/merchant-catalogue.webp" :alt="merchantGuide[locale].catalogueAlt" :caption="merchantGuide[locale].catalogueCaption" :locale="locale" priority /><AppScreens v-else :screens="product.screens" :locale="locale" compact /></section>
      <RiderJourney v-if="page === 'riders'" :locale="locale" :steps="product.steps" />
      <section class="section-space wrap"><div class="section-heading"><h2>{{ product.intro }}</h2><p class="section-intro">{{ product.detail }}</p></div><div class="feature-grid"><article v-for="item in product.features" :key="item.title"><span class="outline-icon"><SequoIcon :name="item.icon" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div></section>
      <MerchantDetails v-if="page === 'merchants'" :locale="locale" />
      <section id="dans-application" class="screen-section section-space"><div class="wrap screen-layout"><div class="section-copy"><p class="section-label">{{ product.product }}</p><h2>{{ text.common.inside }}.</h2><ol class="vertical-steps"><li v-for="(step, i) in product.steps" :key="step.title"><span>0{{ i + 1 }}</span><div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div></li></ol></div><AppScreens :screens="product.screens" :locale="locale" /></div></section>
      <section class="wrap question-section"><div><SequoIcon name="info" /><h2>{{ product.question }}</h2><p>{{ product.answer }}</p><a class="text-link" :href="link('help')">{{ text.common.viewHelp }}<SequoIcon name="arrow" /></a></div></section>
      <section class="related-section wrap"><h2>{{ text.common.related }}</h2><div class="related-links"><a v-for="id in products.filter(id => id !== page)" :key="id" :href="link(id)"><SequoIcon :name="text.products[id].icon" /><span>{{ text.products[id].product }}</span><SequoIcon name="arrow" /></a></div></section>
    </template>

    <template v-else-if="page === 'about'">
      <section class="page-heading wrap"><p class="section-label">SEQUO</p><h1>{{ text.about.title }}<br /><em>{{ text.about.emphasis }}</em></h1><p class="hero-lead">{{ text.about.lead }}</p></section>
      <section class="about-story wrap"><figure><img src="/images/commerce-local.webp" :alt="text.home.imageAlt" width="960" height="1200" /><figcaption><span class="ai-label">{{ aiImageLabel }}</span>{{ text.home.imageCaption }}</figcaption></figure><div><h2>{{ text.about.storyTitle }}</h2><p v-for="paragraph in text.about.story" :key="paragraph">{{ paragraph }}</p><a class="text-link" :href="link('app')">{{ text.home.action }}<SequoIcon name="arrow" /></a></div></section>
      <section class="section-space wrap"><div class="feature-grid"><article v-for="item in text.about.values" :key="item.title"><span class="outline-icon"><SequoIcon :name="item.icon" /></span><h2>{{ item.title }}</h2><p>{{ item.text }}</p></article></div></section>
      <section class="place-section"><div class="wrap"><span class="outline-icon"><SequoIcon name="pin" /></span><h2>{{ text.about.placeTitle }}</h2><p>{{ text.about.placeText }}</p><a class="text-link" :href="link('contact')">{{ contactCopy.contactAction }}<SequoIcon name="arrow" /></a></div></section>
    </template>

    <template v-else-if="page === 'help'">
      <section class="page-heading wrap help-heading"><h1>{{ text.help.title }}<br /><em>{{ text.help.emphasis }}</em></h1><p class="hero-lead">{{ text.help.lead }}</p><label class="help-search"><span class="sr-only">{{ text.help.search }}</span><SequoIcon name="search" /><input v-model="search" type="search" :placeholder="text.help.searchPlaceholder" autocomplete="off" /></label></section>
      <section class="help-layout wrap"><div class="help-categories" role="group" :aria-label="text.help.search"><button type="button" :aria-pressed="!category" @click="category = ''">{{ text.help.all }}</button><button v-for="item in categories" :key="item" type="button" :aria-pressed="category === item" @click="category = item">{{ item }}</button></div><div class="faq-list"><p v-if="!filteredFaqs.length" class="empty-search" role="status">{{ text.help.noResults }}<button type="button" class="text-link" @click="search = ''; category = ''">{{ text.help.reset }}</button></p><details v-for="faq in filteredFaqs" :id="faq.id" :key="faq.id"><summary>{{ faq.q }}<span aria-hidden="true">+</span></summary><p>{{ faq.a }}</p></details><a class="text-link help-contact" :href="link('contact')">{{ text.help.ask }}<SequoIcon name="arrow" /></a></div></section>
    </template>

    <template v-else-if="page === 'contact'">
      <section class="page-heading wrap"><h1>{{ text.contact.title }}<br /><em>{{ text.contact.emphasis }}</em></h1><p class="hero-lead">{{ text.contact.lead }}</p></section>
      <section class="contact-layout wrap"><aside><span class="outline-icon"><SequoIcon name="person" /></span><h2>{{ text.contact.emailLabel }}</h2><a class="email-address" :href="mail('Bonjour SEQUO')">{{ publicContact.email }}</a><div class="contact-related"><a :href="link('merchants')">{{ text.nav.merchants }}<SequoIcon name="arrow" /></a><a :href="link('riders')">{{ text.nav.riders }}<SequoIcon name="arrow" /></a><a :href="link('relays')">{{ text.nav.relays }}<SequoIcon name="arrow" /></a><a :href="link('help')">{{ text.nav.help }}<SequoIcon name="arrow" /></a></div></aside><form class="contact-form" :action="mail(locale === 'fr' ? 'Bonjour SEQUO' : 'Hello SEQUO')" method="post" enctype="text/plain" @submit.prevent="prepareEmail"><label>{{ text.contact.name }}<input v-model="name" name="name" autocomplete="name" :placeholder="text.contact.namePlaceholder" maxlength="120" required /></label><label>{{ text.contact.topic }}<select v-model="topic" name="topic"><option v-for="item in text.contact.topics" :key="item">{{ item }}</option></select></label><label>{{ text.contact.message }}<textarea v-model="message" name="message" :placeholder="text.contact.messagePlaceholder" rows="6" minlength="10" maxlength="3000" required></textarea></label><button class="button" type="submit">{{ text.contact.action }}<SequoIcon name="arrow" /></button><p class="form-note">{{ text.contact.note }}</p></form></section>
    </template>

    <section v-if="route.found && page !== 'contact'" class="contact-band wrap"><div><h2>{{ contactCopy.contactTitle }}<br /><em>{{ contactCopy.contactEmphasis }}</em></h2><p>{{ contactCopy.contactText }}</p><a class="button button-light" :href="link('contact')">{{ contactCopy.contactAction }}<SequoIcon name="arrow" /></a></div><img src="/brand/sequo-symbol-white.svg" alt="" width="464" height="448" aria-hidden="true" /></section>
  </main>

  <footer class="site-footer wrap"><div class="footer-main"><div class="footer-brand"><a class="brand" :href="link('home')" :aria-label="text.homeLabel"><img src="/brand/sequo-logo-light.svg" alt="SEQUO" width="1622" height="448" /></a><p>{{ text.common.footerLine }}<br />{{ text.common.footerSub }}</p></div><nav :aria-label="text.footerNav"><a v-for="id in ['app', 'relays', 'riders', 'merchants', 'about', 'help', 'contact'] as Page[]" :key="id" :href="link(id)" :aria-current="page === id ? 'page' : undefined">{{ text.nav[id] }}</a></nav><a class="footer-mail" :href="mail('Bonjour SEQUO')">{{ publicContact.email }}<SequoIcon name="arrow" /></a></div><div class="footer-bottom"><p>© {{ new Date().getFullYear() }} SEQUO Services</p><div class="footer-languages" role="group" :aria-label="text.language"><a :href="paths.fr[page]" lang="fr" hreflang="fr" :aria-current="locale === 'fr' ? 'true' : undefined">Français</a><a :href="paths.en[page]" lang="en" hreflang="en" :aria-current="locale === 'en' ? 'true' : undefined">English</a></div><a href="#top">{{ text.common.top }}<SequoIcon name="arrow-up" /></a></div></footer>
</template>
