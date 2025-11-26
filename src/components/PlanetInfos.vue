<script setup>
defineProps({
  label: String,
  description: String,
  distance: String,
  TravelTime: String,
})
import PlanetsMenu from './PlanetsMenu.vue'
</script>

<template>
  <div class="max-w-[550px] max-[800px]:text-center">
    <PlanetsMenu />
    <h3 class="uppercase tp-2 text-white">{{ label }}</h3>
    <p class="text-blue-300 tp-9">{{ description }}</p>
    <div
      class="flex gap-[6rem] border-t-[1px] border-t-blue-300/40 py-[2rem] mt-[2rem] max-[1024px]:gap-[3rem] max-[800px]:justify-between max-[800px]:gap-[0]"
    >
      <section>
        <p><strong class="tp-7 text-blue-300 uppercase mb-[1.5rem] block">avg. distance</strong></p>
        <p class="tp-6 text-white uppercase">{{ distance }} mil. km</p>
      </section>
      <section class="">
        <p><strong class="tp-7 text-blue-300 uppercase mb-[1.5rem] block">est. travel time</strong></p>
        <p class="tp-6 text-white uppercase">{{ TravelTime }} months</p>
      </section>
    </div>
  </div>
</template>
