<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

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
</script>

<template>
  <section class="flex flex-row justify-center content-center items-center gap-8 w-full">
    <RouterLink
      v-for="navLink in navLinks"
      :key="navLink.path"
      :to="navLink.path"
      class="flex justify-center content-center items-center p-4 border-2 border-zinc-100 text-xl font-normal w-50"
      :class="
        route.path === navLink.path ? 'bg-zinc-100 text-zinc-900 ' : 'bg-zinc-900 text-zinc-200'
      "
    >
      {{ navLink.name }}
    </RouterLink>
  </section>
</template>

<style></style>
