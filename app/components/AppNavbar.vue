<script setup lang="ts">
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <div class="drawer">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <!-- Navbar -->
      <nav
        class="navbar fixed top-14 z-50 transition-all duration-500 px-6 lg:px-12"
        :class="isScrolled ? 'bg-base-100/95 backdrop-blur-md shadow-sm border-b border-base-300/50' : 'bg-base-100/80 backdrop-blur-sm'"
      >
        <div class="navbar-start">
          <!-- Mobile hamburger -->
          <label for="nav-drawer" class="btn btn-ghost btn-sm lg:hidden text-base-content/70">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <RnrLogo height="36px" variant="dark" />
          </NuxtLink>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-1 text-[11px] tracking-[0.2em] uppercase font-medium">
            <li><NuxtLink to="/collections" class="text-base-content/60 hover:text-primary transition-colors">Collections</NuxtLink></li>
            <li><NuxtLink to="/our-story" class="text-base-content/60 hover:text-primary transition-colors">Our Story</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-base-content/60 hover:text-primary transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="navbar-end">
          <NuxtLink to="/contact" class="btn btn-sm text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-content border-none hover:bg-primary/90 hidden lg:flex">
            Inquire
          </NuxtLink>
        </div>
      </nav>

      <!-- Page content -->
      <slot />
    </div>

    <!-- Mobile sidebar -->
    <div class="drawer-side z-[60]">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <div class="min-h-full w-72 bg-base-100 p-6 flex flex-col border-r border-base-300">
        <div class="flex items-center justify-between mb-12">
          <RnrLogo height="32px" variant="dark" />
          <label for="nav-drawer" class="btn btn-ghost btn-sm text-base-content/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <ul class="space-y-6 text-sm tracking-[0.15em] uppercase text-base-content/70">
          <li><NuxtLink to="/" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Home</NuxtLink></li>
          <li><NuxtLink to="/collections" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Collections</NuxtLink></li>
          <li><NuxtLink to="/our-story" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Our Story</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Contact</NuxtLink></li>
        </ul>

        <div class="mt-auto pt-12 text-[10px] text-base-content/30 tracking-[0.2em] uppercase">
          Fine Gold Since 1978
        </div>
      </div>
    </div>
  </div>
</template>
