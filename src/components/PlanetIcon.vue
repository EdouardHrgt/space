<script setup>
const props = defineProps({
  label: String,
})

console.log(props.label)
const img = {
  moon: '/images/destination/image-moon.webp',
  mars: '/images/destination/image-mars.webp',
  titan: '/images/destination/image-titan.webp',
  europa: '/images/destination/image-europa.webp',
}
</script>

<template>
  <img
    :src="img[label]"
    :alt="`A global view of the planet: ${label}`"
    class="block max-w-[480px] aspect-square max-[1024px]:max-w-[300px] max-[800px]:max-w-[150px]"
  />
</template>
