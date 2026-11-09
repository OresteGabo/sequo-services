<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import RiderMap from './RiderMap.vue'
import type { Locale } from '../content/pages'
const props = defineProps<{ locale: Locale; steps: { title: string; text: string }[] }>()
const section = ref<HTMLElement | null>(null)
const progress = ref(0)
let frame = 0
let motion: MediaQueryList | undefined
function update() {
  frame = 0
  if (!section.value) return
  const rect = section.value.getBoundingClientRect()
  progress.value = motion?.matches ? .5 : Math.max(0, Math.min(1, (innerHeight * .55 - rect.top) / Math.max(1, rect.height - innerHeight * .4)))
}
function schedule() { if (!frame) frame = requestAnimationFrame(update) }
onMounted(() => { motion = matchMedia('(prefers-reduced-motion: reduce)'); motion.addEventListener('change', schedule); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule); update() })
onUnmounted(() => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); motion?.removeEventListener('change', schedule); cancelAnimationFrame(frame) })
</script>
<template>
  <section id="parcours-livreur" ref="section" class="rider-journey wrap" aria-labelledby="rider-journey-title">
    <div class="rider-journey-visual"><p class="section-label">{{ locale === 'fr' ? 'Du commerce au client' : 'From shop to customer' }}</p><h2 id="rider-journey-title">{{ locale === 'fr' ? 'Vous faites le lien.' : 'You make the connection.' }}</h2><RiderMap :progress="progress" :shop="locale === 'fr' ? 'Le commerce' : 'The shop'" :destination="locale === 'fr' ? 'Le client' : 'The customer'" /><p class="rider-map-note">{{ locale === 'fr' ? 'Suivez le parcours en faisant défiler la page.' : 'Follow the journey as you scroll.' }}</p></div>
    <ol class="rider-journey-steps"><li v-for="(step, i) in steps" :key="step.title" :class="{ 'is-current': Math.min(2, Math.floor(progress * 3)) === i }"><span class="step-number">0{{ i + 1 }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol>
  </section>
</template>
