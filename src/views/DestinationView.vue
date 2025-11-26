<script setup>
import PlanetIcon from '@/components/PlanetIcon.vue'
import PlanetInfos from '@/components/PlanetInfos.vue'
import Title from '@/components/Title.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section
    class="flex items-center min-h-screen bg-[url(/images/destination/background-destination-desktop.jpg)] max-[800px]:bg-[url(/images/destination/background-destination-mobile.jpg)] max-[1024px]:bg-[url(/images/destination/background-destination-tablet.jpg)] bg-no-repeat bg-cover"
  >
    <div class="px-[2rem] w-full">
      <Title label="pick your destination" number="01" />
      <article
        class="grid grid-cols-2 max-[800px]:grid-cols-1 w-full gap-[6rem] max-[800px]:gap-[2.5rem] min-[801px]:items-center"
      >
        <PlanetIcon label="mars" class="justify-self-end max-[800px]:justify-self-center" />
        <PlanetInfos
          label="mars"
          TravelTime="9"
          description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
          distance="225"
          class="justify-self-start max-[800px]:justify-self-center"
        />
      </article>
    </div>
  </section>
</template>
