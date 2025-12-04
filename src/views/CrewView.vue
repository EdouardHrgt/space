<script setup>
import Title from '@/components/Title.vue'
import CrewCard from '@/components/CrewCard.vue'
import { onMounted, ref } from 'vue'

const crew = ref(null)

const fetchData = async () => {
  try {
    const res = await fetch('/data.json')
    if (!res.ok) throw new Error('Error on Fetch')
    const json = await res.json()
    crew.value = json.crew
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
    class="relative flex items-center min-h-screen bg-[url(/images/crew/background-crew-desktop.jpg)] max-[800px]:bg-[url(/images/crew/background-crew-mobile.jpg)] max-[1024px]:bg-[url(/images/crew/background-crew-tablet.jpg)] bg-no-repeat bg-cover overflow-hidden"
  >
    <div class="shooting-stars">
      <span class="shooting-star"></span>
      <span class="shooting-star"></span>
      <span class="shooting-star"></span>
      <span class="shooting-star"></span>
      <span class="shooting-star"></span>
    </div>

    <div class="px-[2rem] w-full relative z-10 mt-[6rem]" v-if="crew">
      <Title label="meet your crew" number="02" class="mt-[6rem]" />
      <CrewCard :crew="crew" />
    </div>
  </section>
</template>

<style >
.shooting-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
  animation: shoot 3s linear infinite;
  opacity: 0;
}

.shooting-star:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
  animation-duration: 2.5s;
}

.shooting-star:nth-child(2) {
  top: 30%;
  left: 60%;
  animation-delay: 4s;
  animation-duration: 3s;
}

.shooting-star:nth-child(3) {
  top: 50%;
  left: 80%;
  animation-delay: 8s;
  animation-duration: 2.8s;
}

.shooting-star:nth-child(4) {
  top: 20%;
  left: 40%;
  animation-delay: 12s;
  animation-duration: 3.2s;
}

.shooting-star:nth-child(5) {
  top: 70%;
  left: 30%;
  animation-delay: 16s;
  animation-duration: 2.6s;
}

@keyframes shoot {
  0% {
    transform: translate(0, 0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translate(-300px, 300px) rotate(-45deg);
    opacity: 0;
  }
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
  transform: translateX(2px);
}
</style>
