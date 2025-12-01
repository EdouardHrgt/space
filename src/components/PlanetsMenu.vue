<script setup>
import { ref } from 'vue'

const planets = ['moon', 'mars', 'europa', 'titan']
const myPlanet = ref('')

const emit = defineEmits(['planetSelected'])

const handlePlanetClick = (planet) => {
  emit('planetSelected', planet)
  myPlanet.value = planet
}

</script>

<template>
  <nav class="w-full py-[1rem] mb-[1.5rem]">
    <ul class="flex items-center gap-[2rem] max-[800px]:justify-center">
      <li
        class="uppercase text-blue-300 tp-8 relative cursor-pointer group"
        v-for="planet in planets"
        :key="planet"
        @click="handlePlanetClick(planet)"
        @keydown.tab="alert('OK')"
      >
        {{ planet }}
        <span
          class="pointer-events-none absolute left-0 bottom-[-20px] h-[4px] bg-white transition-all duration-300 ease-out"
          :class="myPlanet === planet ? 'w-full' : 'w-0 group-hover:w-full'"
        ></span>
      </li>
    </ul>
  </nav>
</template>
