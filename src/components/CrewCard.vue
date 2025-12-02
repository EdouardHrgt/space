<script setup>
import { ref } from 'vue'

defineProps({
  crew: Array,
})

const selectedIndex = ref(0)
</script>

<template>
  <article
    class="grid grid-cols-2 max-[1024px]:grid-cols-1 w-full max-[1024px]:gap-[2.5rem] min-[1024px]:items-center min-h-[700px]"
  >
    <div class="relative">
      <h3 class="tp-4 text-blue-300/50 uppercase max-[1024px]:text-center">
        {{ crew[selectedIndex].role }}
      </h3>
      <h2 class="tp-3 text-white uppercase mt-[3rem] mb-[2rem] max-[1024px]:text-center">
        {{ crew[selectedIndex].name }}
      </h2>
      <p class="tp-9 text-blue-300 max-w-[35rem] max-[1024px]:text-center max-[1024px]:max-w-[100%] ">
        {{ crew[selectedIndex].bio }}
      </p>
      <div class="flex gap-[1rem] items-center w-full min-[1025px]:mt-[5rem] mt-[2rem] max-[1024px]:justify-center">
        <span
          v-for="(member, i) in crew"
          :key="i"
          @click="selectedIndex = i"
          :class="selectedIndex === i ? 'bg-white' : 'bg-blue-300/50'"
          class="w-[15px] h-[15px] rounded-full block cursor-pointer transition-colors duration-300"
        ></span>
      </div>
    </div>
    <div class="max-[1024px]:mx-auto">
      <img :src="crew[selectedIndex].images.webp" :alt="crew[selectedIndex].name" />
    </div>
  </article>
</template>
