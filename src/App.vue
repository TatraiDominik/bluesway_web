<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import { ref } from 'vue'
const menuOpened = ref(false)
</script>

<template>
  <div class="flex justify-center content-center items-center w-full h-full relative">
    <Navbar class="absolute top-8 xl:flex hidden z-100"></Navbar>
    <HamburgerMenu
      class="absolute xl:hidden flex z-100"
      :class="menuOpened ? 'top-0 left-0' : 'top-8 left-8'"
      @update:opened="menuOpened = $event"
    ></HamburgerMenu>
    <RouterView class="z-0"> </RouterView>
  </div>
</template>

<style scoped></style>
