<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

interface NavLink {
  name: string
  path: string

}

const navLinks = ref<NavLink[]>([
  { path: '/', name: 'Kezdőlap' },
])
</script>

<template>

    <section class="flex flex-row justify-center content-center items-center gap-8">
        
        <RouterLink v-for="navLink in navLinks" :key="navLink.path" :to="navLink.path" class="flex justify-center content-center items-center p-4 border-2 bg-zinc-900 text-zinc-200 text-xl font-normal">
            {{navLink.name}}
        </RouterLink>

    </section>

</template>

<style>

</style>