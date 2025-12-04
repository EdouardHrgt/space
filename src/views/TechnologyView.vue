<script setup>
import TechnologyCard from '@/components/TechnologyCard.vue'
import { ref, onMounted } from 'vue'
import Title from '@/components/Title.vue'

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
    <Title label="space launch 101" number="03" class="absolute top-[12rem] left-[2rem] max-[1024px]:top-[7.3rem] max-[1024px]:left-[50%] max-[1024px]:translate-x-[-50%] max-[800px]:top-[4rem]" />
    <TechnologyCard :technology="technology" />
  </section>
</template>
