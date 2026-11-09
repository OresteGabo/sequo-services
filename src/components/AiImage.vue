<script setup lang="ts">
import type { Locale } from '../content/pages'
defineProps<{ src: string; alt: string; caption: string; locale: Locale; priority?: boolean }>()
</script>
<template>
  <figure class="ai-image"><img :src="src" :alt="alt" width="1200" height="800" :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : 'auto'" /><figcaption><span class="ai-label">{{ locale === 'fr' ? 'Image générée par IA' : 'AI-generated image' }}</span><span>{{ caption }}</span></figcaption></figure>
</template>
