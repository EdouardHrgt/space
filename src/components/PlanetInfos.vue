<script setup>
import { ref } from 'vue'
import PlanetsMenu from './PlanetsMenu.vue'
const emit = defineEmits(['planetChanged'])

const props = defineProps({
  label: String,
  description: String,
  distance: String,
  TravelTime: String,
  planet: String,
})

const myPlanet = ref('mars')

const handlePlanetSelection = (planet) => {
  myPlanet.value = planet
  emit('planetChanged', planet)
}
</script>

<template>
  <div class="max-w-[550px] max-[800px]:text-center min-h-[435px]">
    <PlanetsMenu @planet-selected="handlePlanetSelection" />
    <Transition name="slide" mode="out-in">
      <div :key="planet">
        <h3 class="uppercase tp-2 text-white">{{ label }}</h3>
        <p class="text-blue-300 tp-9">{{ description }}</p>
        <div
          class="flex gap-[6rem] border-t-[1px] border-t-blue-300/40 py-[2rem] mt-[2rem] max-[1024px]:gap-[3rem] max-[800px]:justify-between max-[800px]:gap-[0]"
        >
          <section>
            <p><strong class="tp-7 text-blue-300 uppercase mb-[1.5rem] block">avg. distance</strong></p>
            <p class="tp-6 text-white uppercase">{{ distance }}</p>
          </section>
          <section class="">
            <p><strong class="tp-7 text-blue-300 uppercase mb-[1.5rem] block">est. travel time</strong></p>
            <p class="tp-6 text-white uppercase">{{ TravelTime }}</p>
          </section>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>