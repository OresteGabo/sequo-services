<script setup lang="ts">
import type { Locale } from '../content/pages'
import { legalContent } from '../content/legal'
const props = defineProps<{ locale: Locale; kind: 'privacy' | 'terms' }>()
const text = legalContent[props.locale][props.kind]
</script>
<template>
  <section class="page-heading wrap legal-heading"><p class="section-label">SEQUO</p><h1>{{ text.title }}</h1><p class="hero-lead">{{ text.lead }}</p><p class="legal-updated">{{ text.updated }}</p></section>
  <div class="legal-layout wrap"><nav class="legal-toc" :aria-label="locale === 'fr' ? 'Dans cette page' : 'On this page'"><a v-for="section in text.sections" :key="section.id" :href="`#${section.id}`">{{ section.title }}</a></nav><div class="legal-body"><section v-for="section in text.sections" :id="section.id" :key="section.id"><h2>{{ section.title }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p><ul v-if="section.links"><li v-for="link in section.links" :key="link.href"><a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a></li></ul></section></div></div>
</template>
