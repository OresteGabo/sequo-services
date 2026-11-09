<script setup lang="ts">
import { merchantGuide } from '../content/merchant'
import type { Locale } from '../content/pages'
import AiImage from './AiImage.vue'
import SequoIcon from './SequoIcon.vue'
const props = defineProps<{ locale: Locale }>()
const text = merchantGuide[props.locale]
</script>
<template>
  <section class="merchant-story wrap"><AiImage src="/images/merchant-preparation-partner.webp" :alt="text.packingAlt" :caption="text.packingCaption" :locale="locale" /><div><h2>{{ text.packingTitle }}</h2><p class="section-intro">{{ text.packingLead }}</p><ul class="merchant-points"><li v-for="point in text.packingPoints" :key="point"><SequoIcon name="check" /><span>{{ point }}</span></li></ul></div></section>
  <section class="merchant-preparation section-space"><div class="wrap"><div class="section-heading"><h2>{{ text.prepareTitle }}</h2><p class="section-intro">{{ text.prepareLead }}</p></div><ol class="merchant-checklist"><li v-for="(item, i) in text.checklist" :key="item.title"><span class="step-number">0{{ i + 1 }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></li></ol></div></section>
  <section class="wrap merchant-questions"><h2>{{ text.faqTitle }}</h2><div class="faq-list"><details v-for="faq in text.faqs" :key="faq.q"><summary>{{ faq.q }}<span aria-hidden="true">+</span></summary><p>{{ faq.a }}</p></details></div></section>
</template>
