<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
interface NavLink {
  name: string
  path: string
}

const navLinks = ref<NavLink[]>([
  {
    path: '/rolunk',
    name: 'Rólunk',
  },
  {
    path: '/koncertek',
    name: 'Koncertek',
  },
  {
    path: '/',
    name: 'Kezdőlap',
  },

  {
    path: '/archivum',
    name: 'Archívum',
  },

  {
    path: '/kapcsolatok',
    name: 'Kapcsolatok',
  },
])

const emit = defineEmits<{
  'update:opened': [value: boolean]
}>();

const route = useRoute()
const isOpened = ref(false)

const setOpened = (value: boolean) => {
  isOpened.value = value
  emit('update:opened', value)
}

watch(
  () => route.path,
  () => setOpened(false),
)

onMounted(() => {
  isOpened.value = false
})
</script>
<template>
  <div
    v-if="!isOpened"
    @click="setOpened(true)"
    class="flex flex-row justify-center content-center items-center p-4 gap-4 bg-zinc-900 border-2 border-zinc-100 text-zinc-100"
  >
    <i-uil-bars class="text-2xl"></i-uil-bars>
    <span class="text-xl">Menü</span>
  </div>

  <section v-else class="flex flex-col justify-end content-start items-end p-4 gap-4 bg-zinc-900 w-full">
    <div @click="setOpened(false)" class="flex flex-row justify-center content-center items-center p-2 text-zinc-300 border-2 border-zinc-300">
      <i-uil-multiply class="text-2xl"></i-uil-multiply>
      <span class="text-xl">Menü bezárása</span>
    </div>

    <div class="flex flex-col justify-center content-center items-center w-full">
      <RouterLink
        v-for="navLink in navLinks"
        :key="navLink.path"
        :to="navLink.path"
        class="flex flex-col justify-start content-start items-start border-b-2 border-zinc-100 py-4 w-full text-zinc-100 text-2xl font-normal"
      >
      {{ navLink.name }}
      </RouterLink>
    </div>
  </section>
</template>
