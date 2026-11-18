<script setup lang="ts">
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw';
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw';
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import { motion } from "motion-v"

/*
const pictures = import.meta.glob('@/assets/img/members/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>*/
</script>

<template>

    <main class="w-full h-full flex flex-row justify-center content-center items-center">

        <section class="w-1/2 h-full bg-[url('@/assets/img/mainBg.JPG')] bg-cover bg-center">

            <div class="w-full h-full flex flex-col justify-center content-start items-start pl-16 bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden">

                <div class="flex flex-col justify-center content-start items-start gap-4 uppercase font-bold text-zinc-100">
                    <h1 class="text-8xl">BLUES WAY ARCHÍVUM</h1>
                    <h2 class="text-4xl">Fénykép és videó felvételek az együttesről</h2>
                    <h3 class="text-5xl">KÖVESD AZ EGYÜTTES ÚTJÁT ÉS KONCERTJEIT</h3>
                    <h3 class="text-5xl">facebookon</h3>
                    <Button text="Követés"></Button>
                </div>
                
                <!--bgDecoration-->
                <div
                v-html="bgDecoration"
                class="absolute left-0 bottom-0 h-[105%] w-max z-1 opacity-5 [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-none"
                />
                <!--Ellipses-->
                <div v-html="lightEllipse" class="absolute top-35 -left-75 h-200 z-1"/>
                
            </div>

        </section>
        <section class="w-1/2 h-full bg-linear-to-r from-zinc-900 to-zinc-950 flex flex-col justify-center content-center items-center relative overflow-hidden gap-8 uppercase font-bold">
            
            
            <h4 class="text-4xl text-zinc-100">Válassz a tartalmak közül</h4>
            <span class="flex flex-row justify-center content-center items-center gap-4 bg-zinc-100 text-zinc-900 p-4 text-6xl ">
                fényképek
                <i-solar-arrow-right-up-linear></i-solar-arrow-right-up-linear>
            </span>

            <span class="flex flex-row justify-center content-center items-center gap-4 bg-zinc-100 text-zinc-900 p-4 text-6xl ">
                videók
                <i-solar-arrow-right-up-linear></i-solar-arrow-right-up-linear>
            </span>

            <span class="flex flex-row justify-center content-center items-center gap-4 bg-zinc-100 text-zinc-900 p-4 text-6xl ">
                facebook
                <i-solar-arrow-right-up-linear></i-solar-arrow-right-up-linear>
            </span>

            <!--
            <div class="w-full h-full flex flex-col justify-start content-center items-center snap-y snap-mandatory overflow-y-scroll overflow-x-auto gap-8 py-8 z-10">
                <motion.img :whileHover="{ scale: 1.1 }" class="w-3/5 object-cover object-center self-center" v-for="picture in pictures" :src="picture"></motion.img>
            </div>-->

            <!--Ellipse-->
            <div v-html="lightEllipse" class="absolute -right-80 top-5 h-200 z-1"/>
        </section>
    </main>
</template>
