<script setup>
import DisplayButton from '@/components/DisplayButton.vue'
</script>

<template>
  <section
    class="flex items-center justify-center bg-[url(/images/home/background-home-desktop.jpg)] bg-no-repeat bg-cover min-h-screen max-[800px]:bg-[url(/images/home/background-home-mobile.jpg)] max-[1024px]:bg-[url(/images/home/background-home-tablet.jpg)]"
  >
    <div
      class="grid grid-cols-2 mx-auto max-w-[1500px] relative top-[10vh] max-[1400px]:w-full max-[1400px]:px-[2rem] max-[1024px]:grid-cols-1 max-[1024px]:place-items-center max-[1024px]:gap-[3.5rem] max-[1024px]:top-[3rem]"
    >
      <section class="max-[1024px]:text-center">
        <p><strong class="uppercase tp-5 text-blue-300">SO, YOU WANT TO TRAVEL TO</strong></p>
        <h1 class="tp-1 uppercase text-white">SPACE</h1>
        <p class="text-blue-300 tp-9 max-w-[600px]">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </section>
      <section class="flex items-center justify-center">
        <DisplayButton />
      </section>
    </div>
  </section>
</template>
