<script setup lang="ts">
import { ref } from 'vue'
import { copy, type Locale } from '../content/pages'
import SequoIcon from './SequoIcon.vue'
const props = defineProps<{ screens: { id: string; label: string; caption: string; framed?: boolean }[]; locale: Locale; compact?: boolean }>()
const active = ref(0)
const dialog = ref<HTMLDialogElement | null>(null)
const text = copy[props.locale].common
function openImage() { dialog.value?.showModal() }
</script>

<template>
  <div class="app-screens" :class="{ compact }">
    <div v-if="!compact" class="screen-tabs" role="group" :aria-label="text.appScreens"><button v-for="(screen, i) in screens" :key="screen.id" :aria-pressed="active === i" type="button" @click="active = i">{{ screen.label }}</button></div>
    <figure class="screen-figure">
      <button class="screen-open" type="button" :aria-label="`${text.enlarge} — ${screens[active]!.caption}`" @click="openImage"><span class="device-shell" :class="{ 'has-frame': screens[active]!.framed }"><img :src="`/screens/${screens[active]!.id}.webp`" :alt="`${text.screenshotAlt} — ${screens[active]!.caption}`" :width="screens[active]!.framed ? 1408 : 1080" :height="screens[active]!.framed ? 2974 : 2400" :loading="compact ? 'eager' : 'lazy'" decoding="async" /><span class="device-camera" aria-hidden="true"></span></span><span v-if="!compact" class="enlarge-label"><SequoIcon name="search" />{{ text.enlarge }}</span></button>
      <figcaption>{{ screens[active]!.caption }}<span class="screenshot-origin">{{ locale === 'fr' ? 'Capture de l’application · Démonstration' : 'App screenshot · Demonstration' }}</span></figcaption>
    </figure>
    <dialog ref="dialog" class="screen-dialog" @click="($event.target === dialog) && dialog?.close()"><button type="button" class="dialog-close" :aria-label="text.closeImage" @click="dialog?.close()"><SequoIcon name="close" /></button><img :src="`/screens/${screens[active]!.id}.webp`" :alt="`${text.screenshotAlt} — ${screens[active]!.caption}`" :width="screens[active]!.framed ? 1408 : 1080" :height="screens[active]!.framed ? 2974 : 2400" /><p>{{ screens[active]!.caption }}</p></dialog>
  </div>
</template>
