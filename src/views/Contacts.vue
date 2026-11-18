<script lang="ts" setup>
import darkEllipse from '@/assets/svg/darkEllipse.svg?raw'
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw'
import Button from '@/components/Button.vue'
</script>
<template>
  <main
    class="w-full h-screen bg-zinc-50 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-8"
  >
    <img src="@/assets/img/LogoDark.png" alt="logo" class="h-75 w-auto self-center z-10" />

    <h1
      class="uppercase font-bold text-[150px] bg-[url('@/assets/img/contacts/mask1.jpg')] bg-clip-text text-transparent bg-cover bg-center z-10 leading-37"
    >
      Kapcsolatok
    </h1>

    <h2 class="text-2xl font-bold uppercase text-zinc-900 z-10">
      LÉPJ KAPCSOLATBA A blues way EGYÜTTESSEL
    </h2>

    <div class="flex flex-row justify-center content-center items-center gap-16 z-10">
      <Button isDark text="makajitimotej@gmail.com"></Button>
      <Button isDark text="+36 (20) 775 9055"></Button>
      <Button isDark text="Facebook/messenger"></Button>
    </div>

    <!--bgDecoration-->
    <div
      v-html="bgDecoration"
      class="absolute left-0 bottom-0 h-[105%] w-max z-1 [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-none"
    />
    <!--Ellipses-->
    <div v-html="darkEllipse" class="absolute top-35 -left-75 h-200 z-2" />
    <div v-html="darkEllipse" class="absolute -bottom-130 -right-45 h-200 z-2" />
    <div v-html="darkEllipse" class="absolute -bottom-30 -right-215 h-375 z-2" />
  </main>
</template>
