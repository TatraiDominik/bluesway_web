<script setup lang="ts">
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw'
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw'
import { ref } from 'vue'
import Button from '@/components/Button.vue'

interface Concert {
  name: string
  date: string
  place: string
  time: string
}
//Add concerts in order (closest to furthest)
const concerts = ref<Concert[]>([
  {
    name: 'I. Koncert neve',
    date: '2026.11.18',
    place: 'Koncert helye',
    time: '20:00',
  },
  {
    name: 'II. Koncert neve',
    date: '2026.11.18',
    place: 'Koncert helye',
    time: '20:00',
  },
  {
    name: 'III. Koncert neve',
    date: '2026.11.18',
    place: 'Koncert helye',
    time: '20:00',
  },
])
</script>

<template>
  <main class="w-full h-full bg-[url('@/assets/img/mainBg.JPG')] bg-cover bg-center">
    <section
      class="w-full h-full flex flex-col justify-end content-end items-end gap-8 p-16 bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden"
    >
      <!--Headlines-->
      <div
        class="flex flex-col justify-center content-start items-start self-center gap-4 uppercase font-bold text-5xl text-zinc-100 absolute left-16 bottom-0 h-full z-2"
      >
        <h1>KÖVESD AZ EGYÜTTES ÚTJÁT ÉS KONCERTJEIT</h1>
        <h1>FACEBOOKON</h1>
        <Button text="Követés"></Button>
      </div>
      <h3
        class="mix-blend-screen p-8 bg-zinc-100 flex flex-col justify-center content-start items-start text-7xl uppercase font-bold gap-8 text-black absolute bottom-0 left-0 z-2"
      >
        blues way<span>koncertek a közelben</span>
      </h3>

      <!--Upcoming concerts-->
      <div class="flex flex-col justify-end conent-end items-end text-zinc-100 gap-8 z-2">
        <!--I. concert-->
        <div
          class="flex flex-col justify-center conent-end items-end pt-4 gap-8 border-t-4 border-t-zinc-100 text-6xl"
        >
          <span class="font-bold uppercase">{{ concerts[0]?.name }}</span>
          <span class="font-normal">{{ concerts[0]?.date }}</span>
          <span class="font-bold uppercase"
            >{{ concerts[0]?.place }} | {{ concerts[0]?.time }}</span
          >
        </div>

        <!--II. concert-->
        <div
          class="flex flex-col justify-center conent-end items-end pt-4 gap-8 border-t-4 border-t-zinc-100 text-5xl"
        >
          <span class="font-bold uppercase">{{ concerts[1]?.name }}</span>
          <span class="font-normal">{{ concerts[1]?.date }}</span>
          <span class="font-bold uppercase"
            >{{ concerts[1]?.place }} | {{ concerts[1]?.time }}</span
          >
        </div>

        <!--III. concert-->
        <div
          class="flex flex-col justify-center conent-end items-end pt-4 gap-8 border-t-4 border-t-zinc-100 text-4xl"
        >
          <span class="font-bold uppercase">{{ concerts[2]?.name }}</span>
          <span class="font-normal">{{ concerts[2]?.date }}</span>
          <span class="font-bold uppercase"
            >{{ concerts[2]?.place }} | {{ concerts[2]?.time }}</span
          >
        </div>
      </div>

      <!--bgDecoration-->
      <div
        v-html="bgDecoration"
        class="absolute left-0 bottom-0 h-[105%] w-max z-1 opacity-5 [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-none"
      />
      <!--Ellipses-->
      <div v-html="lightEllipse" class="absolute top-35 -left-75 h-200 z-1" />
      <div v-html="lightEllipse" class="absolute -right-45 -bottom-130 h-200 z-1" />
    </section>
  </main>
</template>
