<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const links = [
  { label: 'home', number: '00', to: '/' },
  { label: 'destination', number: '01', to: '/destination' },
  { label: 'crew', number: '02', to: '/crew' },
  { label: 'technology', number: '03', to: '/technology' },
]

const menu = ref(false)
const navRef = ref(null)

const closeMenu = () => {
  menu.value = false
}

</script>

<template>
  <header class="flex items-center py-[2rem] fixed top-0 left-0 right-0 max-[1024px]:gap-[2rem] max-[1024px]:py-[0] max-[800px]:py-[2rem] z-[1000]">
    <img src="/images/shared/logo.svg" alt="Space logo" class="ml-[2rem]" />
    <nav
      ref="navRef"
      class="relative z-[999] px-[6rem] py-[2.5rem] ml-auto bg-white/10 backdrop-blur-lg max-[1024px]:w-[100%] max-[800px]:fixed max-[800px]:top-0 max-[800px]:w-[70%] max-[800px]:bottom-0 max-[800px]:transition-all max-[800px]:duration-300"
      :class="menu ? 'max-[800px]:right-0' : 'max-[800px]:right-[-100%]'"
    >
      <span
        id="line"
        class="absolute h-[1px] bg-blue-300/40 left-[-50rem] right-[92%] top-[50%] max-[1024px]:hidden max-[1640px]:left-[-35rem] max-[1380px]:left-[-25rem] max-[1210px]:left-[-15rem]"
      ></span>
      <ul
        class="flex items-center gap-[2.5rem] max-[800px]:flex-col max-[1024px]:justify-between max-[800px]:items-start max-[800px]:pt-[6rem]"
      >
        <li class="relative group flex items-center gap-[12px] cursor-pointer max-[800px]:w-full max-[800px]:h-[1rem]" v-for="el in links" :key="el.number">
          <span class="font-bold text-white max-[800px]:hidden">{{ el.number }}</span>

          <router-link
            :to="el.to"
            class="uppercase tp-8 text-white font-extralight"
            active-class="active-link"
            @click="closeMenu"
          >
            {{ el.label }}
          </router-link>

          <span
            class="pointer-events-none absolute left-0 h-[4px] bg-white translate-y-[50px] w-0 group-hover:w-full group-focus-within:w-full group-has-[.active-link]:w-full transition-all duration-300 max-[800px]:duration-0 ease-out max-[800px]:left-auto max-[800px]:right-[-1rem] max-[800px]:top-0 max-[800px]:bottom-0 max-[800px]:h-full max-[800px]:w-0 max-[800px]:translate-y-0 max-[800px]:translate-x-0 max-[800px]:group-hover:w-[3px] max-[800px]:group-focus-within:w-[3px] max-[800px]:group-has-[.active-link]:w-[3px]"
          ></span>
        </li>
      </ul>
    </nav>
    <img
      src="/images/shared/icon-hamburger.svg"
      alt="Open the navigation"
      class="cursor-pointer hidden ml-auto mr-[2rem] z-[1001]"
      :class="menu ? 'max-[800px]:hidden' : 'max-[800px]:block'"
      @click="menu = true"
    />

    <img
      src="/images/shared/icon-close.svg"
      alt="Close the navigation"
      class="cursor-pointer ml-auto mr-[2rem] z-[1001] hidden"
      :class="menu ? 'max-[800px]:block' : ''"
      @click="closeMenu"
    />
  </header>
</template>
