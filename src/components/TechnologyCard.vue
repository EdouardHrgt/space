<script setup>
import { ref } from 'vue'
defineProps({
  technology: Array,
})
const index = ref('0')
</script>

<template>
  <article class="px-[2rem]">
    <div class="flex flex-col items-center max-[1024px]:flex-row gap-[1rem]">
      <span
        v-for="(tech, i) in technology"
        :key="i"
        class="border-1 border-blue-300/50 rounded-full w-[80px] max-[1024px]:w-[56px] max-[800px]:w-[40px] aspect-square grid place-content-center text-white tp-4 cursor-pointer"
      >
        {{ i + 1 }}
      </span>
    </div>
  </article>
</template>
