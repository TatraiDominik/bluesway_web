<script lang="ts" setup>
import lightEllipse from '@/assets/svg/lightEllipse.svg?raw';
import darkEllipse from '@/assets/svg/darkEllipse.svg?raw';
import bgDecoration from '@/assets/svg/bgDecoration.svg?raw';
import { ref } from 'vue';

</script>

<template>
    <main class="w-full h-screen overflow-y-scroll overflow-x-auto snap-y snap-mandatory">

        <section class="w-full h-screen bg-zinc-50 overflow-hidden snap-center relative flex flex-col justify-center content-center items-center gap-8">

            <img src="@/assets/img/LogoDark.png" alt="logo" class="h-75 w-auto self-center z-10"/>

            <h1 class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10">
                bajai blues együttes
            </h1>

            <h2 class="absolute bottom-8 uppercase font-bold text-[150px] bg-[url('@/assets/img/aboutUs/mask1.jpg')] bg-clip-text text-transparent bg-cover bg-center z-10 leading-37">rólunk</h2>

            <h3 class="p-4 text-6xl uppercase font-bold bg-zinc-900 text-zinc-100 z-10 absolute bottom-0 right-0">
                2023 óta
            </h3>

            <div class="flex flex-row justify-center content-center items-center uppercase font-bold text-zinc-900 text-4xl z-10 gap-8">
                <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900">Az együttesről röviden<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear></a>
                <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900">Műfajaink<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear></a>
                <a class="flex flex-row gap-8 pt-4 border-b-4 border-zinc-900">Repertoár<i-solar-arrow-right-down-linear></i-solar-arrow-right-down-linear></a>
            </div>
            
            <!--bgDecoration-->
            <div
                v-html="bgDecoration"
                class="absolute left-0 bottom-0 h-[105%] w-max z-1 [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-none"
            />
            <!--Ellipses-->
            <div v-html="darkEllipse" class="absolute top-35 -left-75 h-200 z-2"/>
            <div v-html="darkEllipse" class="absolute -bottom-130 -right-45 h-200 z-2"/>
            <div v-html="darkEllipse" class="absolute -bottom-30 -right-215 h-375 z-2"/>
        </section>

    </main>
</template>
