<script lang="ts" setup>
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw'
import darkEllipse from '@/assets/svg/darkEllipse.svg?raw'
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw'
import { ref } from 'vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <main class="w-full h-screen overflow-y-scroll overflow-x-auto snap-y snap-mandatory">
    <!--Top-->
    <section
      class="w-full h-screen bg-zinc-50 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-8"
    >
      <img src="@/assets/img/LogoDark.png" alt="logo" class="h-75 w-auto self-center z-10" />

      <h1 class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10">
        bajai blues együttes
      </h1>

      <h2
        class="absolute bottom-8 uppercase font-bold text-[150px] bg-[url('@/assets/img/aboutUs/mask1.jpg')] bg-clip-text text-transparent bg-cover bg-center z-10 leading-37"
      >
        rólunk
      </h2>

      <h3
        class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10 absolute bottom-0 right-0"
      >
        2023 óta
      </h3>

      <div
        class="flex flex-row justify-center content-center items-center uppercase font-bold text-zinc-900 text-4xl z-10 gap-8"
      >
        <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900"
          >Az együttesről röviden<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear
        ></a>
        <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900"
          >Műfajaink<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear
        ></a>
        <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900"
          >Repertoár<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear
        ></a>
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
    </section>

    <!--Short introduction-->
    <section
      class="w-full h-screen bg-[url('@/assets/img/aboutUs/background.jpg')] bg-cover bg-center"
    >
      <div
        class="w-full h-screen bg-linear-to-b from-50% from-zinc-50 to-zinc-50/25 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-16"
      >
        <h1 class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10">
          az együttesről röviden
        </h1>

        <p class="text-2xl text-justify uppercase font-normal w-250 z-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem alias fugit expedita
          dolore odit facere adipisci eius reiciendis officia quis voluptatibus maxime, tempora
          exercitationem in. Numquam quae nulla atque maiores. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Placeat, cumque aut optio esse nam mollitia vel? Nostrum
          quae error aspernatur quasi dolore laboriosam, at iure, consequuntur deleniti labore esse
          maxime?
        </p>

        <div class="flex flex-row justify-center content-center items-center gap-16 z-10">
          <Button isDark text="követés facebookon"></Button>
          <Button isDark text="műfajaink"></Button>
          <Button isDark text="repertoár"></Button>
        </div>

        <!--Ellipses-->
        <div v-html="darkEllipse" class="absolute top-35 -left-75 h-200 z-2 opacity-30" />
        <div v-html="darkEllipse" class="absolute -bottom-130 -right-45 h-200 z-2 opacity-30" />
        <div v-html="darkEllipse" class="absolute -bottom-30 -right-215 h-375 z-2 opacity-30" />
      </div>
    </section>

    <!--Genres-->
    <section
      class="w-full h-screen bg-linear-to-r from-zinc-950 to-zinc-900 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-16"
    >
      <div
        class="flex flex-row justify-center content-center items-center gap-8 text-zinc-900 uppercase font-bold text-3xl h-fit z-10"
      >
        <span class="w-1 h-full bg-zinc-100" />
        <span class="p-4 bg-zinc-100 flex justify-center content-center items-center">blues</span>
        <span class="w-1 h-full bg-zinc-100" />
        <span class="p-4 bg-zinc-100 flex justify-center content-center items-center">rock</span>
        <span class="w-1 h-full bg-zinc-100" />
        <span class="p-4 bg-zinc-100 flex justify-center content-center items-center">funk</span>
        <span class="w-1 h-full bg-zinc-100" />
        <span class="p-4 bg-zinc-100 flex justify-center content-center items-center">reggie</span>
        <span class="w-1 h-full bg-zinc-100" />
      </div>

      <div class="flex flex-row justify-center content-center items-center gap-16 z-10">
        <Button text="követés facebookon"></Button>
        <Button text="az együttesről"></Button>
        <Button text="repertoár"></Button>
      </div>

      <!--Ellipses-->
      <div v-html="lightEllipse" class="absolute top-35 -left-75 h-200 z-2" />
      <div v-html="lightEllipse" class="absolute -bottom-130 -right-45 h-200 z-2" />
      <div v-html="lightEllipse" class="absolute -bottom-30 -right-215 h-375 z-2" />
    </section>

    <!--Repertoire-->
    <section
      class="w-full h-screen bg-[url('@/assets/img/aboutUs/background.jpg')] bg-cover bg-center"
    >
      <div
        class="w-full h-screen bg-linear-to-b from-50% from-zinc-50 to-zinc-50/25 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-16"
      >
        <h1 class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10">Repertoár</h1>

        <div class="flex flex-row justify-center content-center items-center gap-16 z-10">
          <Button isDark text="követés facebookon"></Button>
          <Button isDark text="műfajaink"></Button>
          <Button isDark text="repertoár"></Button>
        </div>

        <!--Ellipses-->
        <div v-html="darkEllipse" class="absolute top-35 -left-75 h-200 z-2 opacity-30" />
        <div v-html="darkEllipse" class="absolute -bottom-130 -right-45 h-200 z-2 opacity-30" />
        <div v-html="darkEllipse" class="absolute -bottom-30 -right-215 h-375 z-2 opacity-30" />
      </div>
    </section>
  </main>
</template>
