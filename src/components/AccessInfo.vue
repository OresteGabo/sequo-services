<script setup lang="ts">
import type { Locale } from '../content/pages'
import { paths } from '../content/pages'
import { experience } from '../content/experience'
import { publicContact, whatsappUrl } from '../content/site'
import SequoIcon from './SequoIcon.vue'
const props = defineProps<{ locale: Locale }>()
const text = experience[props.locale]
</script>
<template>
  <section class="page-heading wrap"><p class="availability-label"><span aria-hidden="true"></span>{{ text.status }}</p><h1>{{ text.title }}<br /><em>{{ text.emphasis }}</em></h1><p class="hero-lead">{{ text.lead }}</p></section>
  <section class="wrap access-overview"><h2>{{ text.accessTitle }}</h2><div class="feature-grid"><article v-for="card in text.accessCards" :key="card.title"><span class="outline-icon"><SequoIcon :name="card.icon" /></span><h3>{{ card.title }}</h3><p>{{ card.text }}</p></article></div><p class="access-store-note">{{ text.noStore }}</p><div class="access-links"><a class="text-link" :href="paths[locale].app">{{ locale === 'fr' ? 'Voir le parcours client' : 'See the customer journey' }}<SequoIcon name="arrow" /></a><a class="text-link" :href="paths[locale].relays">{{ locale === 'fr' ? 'Les points relais à venir' : 'Upcoming relay points' }}<SequoIcon name="arrow" /></a></div></section>
  <section class="access-contact wrap"><div><h2>{{ text.nextTitle }}</h2><p>{{ text.nextText }}</p></div><div><a class="button" :href="`mailto:${publicContact.email}?subject=${encodeURIComponent(locale === 'fr' ? 'Accès à SEQUO' : 'SEQUO access')}`">{{ text.email }}<SequoIcon name="arrow" /></a><a class="text-link" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">{{ text.whatsapp }}<SequoIcon name="arrow" /></a><p class="channel-note">{{ text.whatsappNote }}</p></div></section>
</template>
