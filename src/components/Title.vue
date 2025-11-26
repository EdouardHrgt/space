<script setup>
defineProps({
  label: String,
  number: String,
})
</script>

<template>
  <h1 class="mb-[4rem] tp-5 max-[800px]:mb-[1.5rem] text-white uppercase max-[800px]:text-center max-[800px]:mb-[3rem] max-[800px]:mt-[4rem]">
    <span class="tp-5 text-blue-300/50 mr-[1rem] font-bold">{{ number }}</span> {{ label }}
  </h1>
</template>
