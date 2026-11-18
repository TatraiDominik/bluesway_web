<script setup lang="ts">
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw';
import darkEllipse from '@/assets/svg/darkEllipse.svg?raw';
</script>

<template>
  <main class="w-full flex flex-col justify-center content-center items-center">

    <!--Top section-->
    <section class="w-full h-screen bg-[url('@/assets/img/mainBg.JPG')] bg-cover bg-center overflow-hidden">
      <div
        class="w-full h-full flex flex-col justify-center content-center items-center bg-linear-to-t from-zinc-900 to-zinc-900/0 gap-8 relative"
      >
        <img src="@/assets/img/Logo.png" alt="logo" class="h-75 w-auto self-center" />
        <h1 class="text-4xl font-bold zinc-100 uppercase text-zinc-100">
          A BLUES WAY EGYÜTTES HIVATALOS WEBOLDALA
        </h1>
        <h2 class="text-3xl font-light text-zinc-200">Kövess minket itt is:</h2>
        <span
          class="flex flex-row justify-center content-center items-center bg-zinc-900 border-2 border-zinc-100 text-zinc-100 p-4 gap-4"
        >
          <i-brandico-facebook class="text-xl"></i-brandico-facebook>
          <p class="uppercase font-bold text-2xl">blues way</p>
        </span>

        
        
        <h3 class="mix-blend-screen w-155 h-30 bg-zinc-100 flex flex-row justify-center content-center items-center text-7xl uppercase font-bold gap-4 text-black absolute bottom-5">a zenekar tagjai <i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear></h3>

        <!--Ellipses-->
        <div v-html="lightEllipse" class="absolute top-35 -left-75 h-200"/>
        <div v-html="lightEllipse" class="absolute -bottom-130 -right-45 h-200"/>
      </div>
    </section>

  </main>
</template>
