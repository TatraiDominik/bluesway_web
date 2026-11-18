<script setup lang="ts">
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw';
import darkEllipse from '@/assets/svg/darkEllipse.svg?raw';
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw';
import { ref } from 'vue';

interface bandMember{
  name:string,
  nickname:string,
  role: string,
  introduction: string,
}

const bandMembers = ref<bandMember[]>([
  {
    name:"Makaji Timotej",
    nickname: "Timo",
    role: "ének, gitár",
    introduction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime itaque ad magni, natus obcaecati nihil optio veritatis veniam saepe sequi. Aperiam dolore amet iure perspiciatis corrupti veniam debitis! In?"
  },
  {
    name:"Péter Barnabás",
    nickname: "Barni",
    role: "Basszusgitár",
    introduction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime itaque ad magni, natus obcaecati nihil optio veritatis veniam saepe sequi. Aperiam dolore amet iure perspiciatis corrupti veniam debitis! In?"
  },
  {
    name:"Szöllősi Gábor",
    nickname: "Gabi",
    role: "dob",
    introduction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime itaque ad magni, natus obcaecati nihil optio veritatis veniam saepe sequi. Aperiam dolore amet iure perspiciatis corrupti veniam debitis! In?"
  },
  {
    name:"Tátrai Dominik Oszkár",
    nickname: "Domi",
    role: "Gitár",
    introduction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime itaque ad magni, natus obcaecati nihil optio veritatis veniam saepe sequi. Aperiam dolore amet iure perspiciatis corrupti veniam debitis! In?"
  }
]);
</script>

<template>
  <main class="w-full h-screen overflow-y-scroll overflow-x-auto snap-y snap-mandatory">

    <!--Top section-->
    <section class="w-full h-screen bg-[url('@/assets/img/mainBg.JPG')] bg-cover bg-center overflow-hidden snap-center">
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

    <!--Band members-->
    <section v-for="bandMember in bandMembers" :key="bandMember.nickname" class="w-full h-screen flex flex-row justify-center content-center items-center overflow-hidden snap-center relative">

      <div class="w-1/2 h-full flex flex-col justify-center content-start items-start p-16 gap-8 z-2">

        <!--Name-->
        <h1 class="text-8xl font-bold uppercase text-zinc-900">{{bandMember.name}}</h1>
        <h2 class="text-5xl font-bold text-zinc-800">({{ bandMember.nickname }})</h2>
        <!--Separator-->
        <span class="w-full h-1 bg-linear-to-r from-zinc-900 to-zinc-50"/>
        <h3 class="text-7xl font-bold uppercase text-zinc-600">{{bandMember.role}}</h3>
        <!--Separator-->
        <span class="w-full h-1 bg-linear-to-r from-zinc-900 to-zinc-50"/>
        <h4 class="text-3xl font-bold text-zinc-900">Bemutatkozás</h4>
        <p class="text-2xl font-normal text-zinc-900">{{bandMember.introduction}}</p>
      </div>

      <img :src="`../src/assets/img/members/${bandMember.nickname}.jpg`" :alt="bandMember.nickname" class="w-1/2 h-full object-cover object-center z-2">

      <!--bgDecoration-->
      <div
        v-html="bgDecoration"
        class="absolute left-0 bottom-0 h-[105%] w-max z-1 [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-none"
      />
      <!--Ellipses-->
      <div v-html="darkEllipse" class="absolute -left-25 -top-75 h-125 z-1"/>
      <div v-html="darkEllipse" class="absolute -left-75 -bottom-80 h-125 z-1"/>
    </section>
  </main>
</template>
