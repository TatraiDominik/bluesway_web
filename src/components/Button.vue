<script lang="ts" setup>
const props = defineProps<{
  text?: string
  isDark?: boolean
}>()
</script>
<template>
  <button v-if="isDark" class="button border-zinc-900 text-zinc-900">
    <p>{{ props.text }}</p>
  </button>

  <button v-else class="button border-zinc-100 text-zinc-100">
    <p>{{ props.text }}</p>
  </button>
</template>
<style scoped>
@import 'tailwindcss';

button {
  @apply flex justify-center content-center items-center cursor-pointer p-4 relative border-2 w-fit text-2xl uppercase;
}
</style>
