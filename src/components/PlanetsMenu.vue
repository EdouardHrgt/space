<script setup>
const planets = ['moon', 'mars', 'europa', 'titan']
//   @keydown.tab="
</script>

<template>
  <nav class="w-full py-[1rem] mb-[1.5rem]">
    <ul class="flex items-center gap-[2rem] max-[800px]:justify-center">
      <li class="uppercase text-blue-300 tp-8 relative cursor-pointer group" v-for="planet in planets" :key="planet">
        {{ planet }}
        <span
          class="pointer-events-none absolute left-0 bottom-[-20px] h-[4px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"
        ></span>
      </li>
    </ul>
  </nav>
</template>
