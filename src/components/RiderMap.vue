<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import RiderGlyph from './RiderGlyph.vue'
const props = defineProps<{ progress: number; shop: string; destination: string }>()
const track = ref<SVGPathElement | null>(null)
const position = ref({ x: 75, y: 260 })
const route = 'M75 260 C75 100 200 105 200 190 S370 300 370 150 S475 65 495 90'
function update() {
  if (!track.value) return
  const point = track.value.getPointAtLength(track.value.getTotalLength() * Math.max(0, Math.min(1, props.progress)))
  position.value = { x: point.x, y: point.y }
}
onMounted(update)
watch(() => props.progress, update)
</script>
<template>
  <svg class="rider-map" viewBox="0 0 560 360" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="558" height="358" rx="28" fill="#eaf0e4" />
    <g stroke="#d4dfce" stroke-width="2"><path d="M0 90h560M0 175h560M0 275h560M120 0v360M285 0v360M450 0v360" /><path d="m0 340 560-230M80 0l480 335" stroke-width="15" stroke="#f7f8f3" /></g>
    <g fill="#dce7d5"><rect x="145" y="28" width="85" height="49" rx="12" /><rect x="303" y="28" width="112" height="45" rx="12" /><rect x="318" y="293" width="99" height="40" rx="10" /><rect x="143" y="293" width="91" height="40" rx="10" /><rect x="475" y="201" width="57" height="52" rx="12" /></g>
    <path ref="track" :d="route" stroke="#98b09a" stroke-width="4" stroke-dasharray="2 11" stroke-linecap="round" />
    <path :d="route" stroke="#0B6B46" stroke-width="4" pathLength="1" :stroke-dasharray="`${progress} 1`" stroke-linecap="round" />
    <g transform="translate(50 263)"><rect width="50" height="39" rx="10" fill="#f8f9f5" /><path d="M10 17h30l-4-8H14l-4 8Zm3 0v14h24V17M21 31v-9h8v9" stroke="#0B6B46" stroke-width="2" /></g>
    <text x="75" y="326" text-anchor="middle" fill="#335543" font-size="13">{{ shop }}</text>
    <g transform="translate(470 40)"><rect width="50" height="39" rx="10" fill="#f8f9f5" /><path d="m10 20 15-12 15 12M15 17v15h20V17M22 32v-9h6v9" stroke="#0B6B46" stroke-width="2" /></g>
    <text x="495" y="26" text-anchor="middle" fill="#335543" font-size="13">{{ destination }}</text>
    <g :transform="`translate(${position.x} ${position.y})`" class="rider-marker">
      <circle class="rider-signal" r="35" fill="#7AD8A9" opacity=".3" /><circle r="28" fill="#f8f9f5" stroke="#b1cbb3" />
      <RiderGlyph x="-31" y="-32" width="62" height="50" />
    </g>
  </svg>
</template>
