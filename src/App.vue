<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="flex justify-center content-center items-center w-full h-full relative">
    <Navbar class="absolute top-8"></Navbar>
    <RouterView>  </RouterView>
  </div>

</template>

<style scoped></style>
