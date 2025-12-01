<script setup>
const props = defineProps({
  label: String,
  planet: String,
})

const img = {
  moon: '/images/destination/image-moon.webp',
  mars: '/images/destination/image-mars.webp',
  titan: '/images/destination/image-titan.webp',
  europa: '/images/destination/image-europa.webp',
}
</script>

<template>
  <Transition name="slide" mode="out-in">
    <img
      :key="planet"
      :src="img[label]"
      :alt="`A global view of the planet: ${label}`"
      class="block max-w-[480px] aspect-square max-[1024px]:max-w-[300px] max-[800px]:max-w-[150px]"
    />
  </Transition>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.4s ease-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in;
}

.slide-enter-from {
  opacity: 0.3;
  transform: translateX(-100px) scale(0.85);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.slide-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.slide-leave-to {
  opacity: 0.3;
  transform: translateX(100px) scale(0.85);
}
</style>