<script setup lang="ts">
import type { Locale } from '../content/pages'
import { experience } from '../content/experience'
import AppScreens from './AppScreens.vue'
const props = defineProps<{ locale: Locale }>()
const text = experience[props.locale]
</script>
<template>
  <section id="commander" class="customer-walkthrough section-space"><div class="wrap"><div class="section-heading"><h2>{{ text.walkthroughTitle }}</h2><p class="section-intro">{{ text.walkthroughLead }}</p></div><ol class="walkthrough-grid"><li v-for="(step, i) in text.guideSteps" :key="step.screen"><span class="step-number">0{{ i + 1 }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p><AppScreens :screens="[{ id: step.screen, label: step.title, caption: step.caption }]" :locale="locale" /></li></ol><p class="walkthrough-demo-note">{{ locale === 'fr' ? 'Les points marqués [TEST] dans les captures sont fictifs et ne sont pas des lieux de retrait ouverts.' : 'Points marked [TEST] in the captures are fictional and are not open collection locations.' }}</p></div></section>
</template>
