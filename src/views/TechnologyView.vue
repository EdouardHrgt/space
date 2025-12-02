<script setup>
import TechnologyCard from '@/components/TechnologyCard.vue'
import { ref, onMounted } from 'vue'

const technology = ref(null)

const fetchData = async () => {
  try {
    const res = await fetch('/data.json')
    if (!res.ok) throw new Error('Error on Fetch')
    const json = await res.json()
    technology.value = json.technology
  } catch (error) {
    console.warn('Error While fetching datas... ' + error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <section
    class="relative flex items-center min-h-screen bg-[url(/images/technology/background-technology-desktop.jpg)] max-[800px]:bg-[url(/images/technology/background-technology-mobile.jpg)] max-[1024px]:bg-[url(/images/technology/background-technology-tablet.jpg)] bg-no-repeat bg-cover min-h-screen"
  >
    <TechnologyCard :technology="technology"/>
  </section>
</template>
