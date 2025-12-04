<script setup>
import NavMenu from '@/components/NavMenu.vue'
import { onMounted, ref } from 'vue'

const ambientAudio = ref(null)
const isPlaying = ref(false)
const showWelcomeModal = ref(true)

const toggleSound = () => {
  if (ambientAudio.value) {
    if (isPlaying.value) {
      ambientAudio.value.pause()
      isPlaying.value = false
    } else {
      ambientAudio.value.play()
      isPlaying.value = true
    }
  }
}

const enableSoundAndClose = () => {
  if (ambientAudio.value && !isPlaying.value) {
    ambientAudio.value.play()
    isPlaying.value = true
  }
  showWelcomeModal.value = false
}

const closeModalWithoutSound = () => {
  showWelcomeModal.value = false
}

onMounted(() => {
  if (ambientAudio.value) {
    ambientAudio.value.volume = 0.05
    ambientAudio.value.loop = true
  }
})
</script>

<template>
  <Transition name="slide-bottom" appear>
    <div
      v-if="showWelcomeModal"
      class="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 z-[1002] shadow-2xl max-[800px]:bottom-[1rem] max-[800px]:left-[10px] max-[800px]:right-[10px] max-[800px]:" 
    >
      <h2 class="text-white text-xl font-bold mb-3">Welcome Aboard! 🚀</h2>
      <p class="text-blue-300 mb-4 text-sm leading-relaxed">
        For the best experience exploring space, we recommend enabling ambient sound. Immerse yourself in the cosmic
        journey!
      </p>
      <div class="flex gap-3 max-[800px]:flex-col">
        <button
          @click="enableSoundAndClose"
          class="flex-1 bg-white text-black px-4 py-2 rounded hover:bg-blue-100 transition-colors font-semibold text-sm"
          style="pointer-events: auto; user-select: auto"
        >
          Enable Sound 🔊
        </button>
        <button
          @click="closeModalWithoutSound"
          class="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm"
          style="pointer-events: auto; user-select: auto"
        >
          Maybe later
        </button>
      </div>
    </div>
  </Transition>

  <button
    @click="toggleSound"
    class="fixed top-[3.1rem] left-[6rem] text-white text-2xl bg-black/30 p-4 rounded hover:bg-black/50 transition-colors cursor-pointer max-[1024px]:p-3 max-[1024px]:top-[6.3rem] max-[1024px]:left-[1.8rem] max-[800px]:top-[1.6rem] max-[800px]:left-[7rem]"
    style="pointer-events: auto; user-select: auto; z-index: 1001"
  >
    {{ isPlaying ? '🔊' : '🔇' }}
  </button>

  <audio ref="ambientAudio" src="/ambient-sound.mp3" preload="auto"></audio>
  <NavMenu />
  <main class="h-screen min-[1025px]:overflow-hidden">
    <RouterView />
  </main>
</template>

<style scoped>
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all .7s ease;
}

.slide-bottom-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-bottom-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>

