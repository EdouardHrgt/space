<script setup>
import { ref } from 'vue'
import Title from './Title.vue'
defineProps({
  technology: Array,
})
const choice = ref(0)
</script>

<template>
  <article class="px-[2rem] grid grid-cols-2 gap-[1rem] max-[1024px]:grid-cols-1 mt-[8.5rem] w-full" v-if="technology">
    <section
      class="flex items-center gap-[2rem] max-[1024px]:flex-col max-[1024px]:gap-0 max-[1024px]:order-2 relative"
    >
      <div class="shooting-stars">
        <span class="shooting-star"></span>
        <span class="shooting-star"></span>
        <span class="shooting-star"></span>
        <span class="shooting-star"></span>
        <span class="shooting-star"></span>
      </div>
      <div class="flex flex-col items-center max-[1024px]:flex-row gap-[1rem]">
        <span
          v-for="(tech, i) in technology"
          :key="i"
          @click="choice = i"
          class="border-1 border-blue-300/50 rounded-full w-[80px] max-[1024px]:w-[56px] max-[800px]:w-[40px] aspect-square grid place-content-center tp-4 cursor-pointer max-[800px]:mb-[1rem]"
          :class="choice === i ? 'bg-white text-blue-900' : 'text-white'"
        >
          {{ i + 1 }}
        </span>
      </div>
      <div class="min-h-[300px] flex flex-col justify-center">
        <h3 class="tp-4 text-blue-300/50 uppercase max-[1024px]:text-center">THE TERMINOLOGY…</h3>
        <h2 class="tp-3 text-white uppercase mt-[3rem] mb-[2rem] max-[1024px]:text-center">
          {{ technology[choice].name }}
        </h2>
        <p class="tp-9 text-blue-300 max-w-[35rem] max-[1024px]:text-center max-[1024px]:max-w-[100%]">
          {{ technology[choice].description }}
        </p>
      </div>
    </section>
    <section class="max-[1024px]:order-1">
      <picture>
        <source media="(min-width: 1025px)" :srcset="technology[choice].images.portrait" />
        <source media="(max-width: 1024px)" :srcset="technology[choice].images.landscape" />
        <img :src="technology[choice].images.landscape" :alt="technology[choice].name" class="w-full h-auto" />
      </picture>
    </section>
  </article>
</template>
