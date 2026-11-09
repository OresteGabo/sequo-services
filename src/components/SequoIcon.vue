<script setup lang="ts">
withDefaults(defineProps<{ name: string }>(), { name: "arrow" });
const paths: Record<string, string> = {
  arrow: "M5 12h14m-5-5 5 5-5 5",
  "arrow-down": "M12 4v16m-5-5 5 5 5-5",
  "arrow-up": "M12 20V4m-5 5 5-5 5 5",
  bag: "M5 7h14l1 14H4L5 7Zm3 1V6a4 4 0 0 1 8 0v2",
  store:
    "M3 10h18l-2-6H5l-2 6Zm1 0v10h16V10M9 20v-6h6v6M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0",
  rider: "M8 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 18h8l4-8h2l3 8M9 12l3 2-2 4M10 10l2-4 4 5h3M13 3h3M3 10h5v4H3Z",
  route:
    "M5 6a2 2 0 1 0 0 .01M19 18a2 2 0 1 0 0 .01M8 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h6",
  parcel: "m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10M7.5 4.5l9 5v4",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  home: "m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8",
  check: "m5 12 4 4L19 6",
  shield: "m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5l8-3Zm-5 9 3 3 7-7",
  info: "M12 8v.01M12 11v6M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  return: "M9 5 4 10l5 5M4 10h11a6 6 0 0 1 0 12",
  person: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 22v-3a8 8 0 0 1 16 0v3",
  search: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-2 5 6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "m6 6 12 12M6 18 18 6",
};
</script>
<template>
  <svg
    class="icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.arrow" />
  </svg>
</template>
