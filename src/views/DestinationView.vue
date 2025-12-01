<script setup>
import PlanetIcon from '@/components/PlanetIcon.vue'
import PlanetInfos from '@/components/PlanetInfos.vue'
import Title from '@/components/Title.vue'
import { ref, onMounted, computed } from 'vue'

const selectedPlanet = ref('mars')
const planetsData = ref(null)

const fetchData = async () => {
  try {
    const res = await fetch('/data.json')
    if (!res.ok) throw new Error('Error on Fetch')
    const json = await res.json()
    planetsData.value = json.destinations
    console.table(planetsData.value)
  } catch (error) {
    console.warn('Error While fetching datas... ' + error)
  }
}

onMounted(() => {
  fetchData()
})

const handlePlanetChange = (planet) => {
  selectedPlanet.value = planet
  console.log(`Yo j'ai choisi :  ${selectedPlanet.value}`)
}

const currentPlanet = computed(() => {
  if (!planetsData.value) return null
  return planetsData.value.find(
    planet => planet.name.toLowerCase() === selectedPlanet.value.toLowerCase()
  )
})

const stars = ref([])
onMounted(() => {
  stars.value = Array.from({ length: 75 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }))
})
</script>

<template>
  <section
    class="relative flex items-center min-h-screen bg-[url(/images/destination/background-destination-desktop.jpg)] max-[800px]:bg-[url(/images/destination/background-destination-mobile.jpg)] max-[1024px]:bg-[url(/images/destination/background-destination-tablet.jpg)] bg-no-repeat bg-cover overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="(star, index) in stars"
        :key="index"
        class="absolute rounded-full bg-white star"
        :style="{
          left: star.x + '%',
          top: star.y + '%',
          width: star.size + 'px',
          height: star.size + 'px',
          animationDuration: star.duration + 's',
          animationDelay: star.delay + 's'
        }"
      ></div>
    </div>

    <div v-if="currentPlanet" class="px-[2rem] w-full relative z-10">
      <Title label="pick your destination" number="01" />
      <article
        class="grid grid-cols-2 max-[800px]:grid-cols-1 w-full gap-[6rem] max-[800px]:gap-[2.5rem] min-[801px]:items-center"
      >
        <PlanetIcon 
          :label="currentPlanet.name.toLowerCase()" 
          :planet="selectedPlanet"
          class="justify-self-end max-[800px]:justify-self-center"
        />
        <PlanetInfos
          :label="currentPlanet.name.toLowerCase()"
          :TravelTime="currentPlanet.travel"
          :description="currentPlanet.description"
          :distance="currentPlanet.distance"
          :planet="selectedPlanet"
          class="justify-self-start max-[800px]:justify-self-center"
          @planet-changed="handlePlanetChange"
        />
      </article>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-100vw, -50vh);
    opacity: 0;
  }
}

.star {
  animation: float linear infinite;
}
</style>
