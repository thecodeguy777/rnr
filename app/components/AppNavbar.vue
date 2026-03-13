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
        :class="isScrolled ? 'bg-base-200/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
      >
        <div class="navbar-start">
          <!-- Mobile hamburger -->
          <label for="nav-drawer" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <RnrLogo height="36px" variant="white" />
          </NuxtLink>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-1 text-sm tracking-widest uppercase">
            <li><NuxtLink to="/collections" class="hover:text-primary transition-colors">Collections</NuxtLink></li>
            <li><NuxtLink to="/our-story" class="hover:text-primary transition-colors">Our Story</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="navbar-end">
          <NuxtLink to="/contact" class="btn btn-ghost btn-sm text-xs tracking-widest uppercase hidden lg:flex">
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
      <div class="min-h-full w-72 bg-base-200 p-6 flex flex-col">
        <div class="flex items-center justify-between mb-12">
          <RnrLogo height="32px" variant="white" />
          <label for="nav-drawer" class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <ul class="space-y-6 text-sm tracking-widest uppercase">
          <li><NuxtLink to="/" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Home</NuxtLink></li>
          <li><NuxtLink to="/collections" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Collections</NuxtLink></li>
          <li><NuxtLink to="/our-story" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Our Story</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-primary transition-colors" @click="() => { const el = document.getElementById('nav-drawer') as HTMLInputElement; if (el) el.checked = false }">Contact</NuxtLink></li>
        </ul>

        <div class="mt-auto pt-12 text-xs text-base-content/40 tracking-wider uppercase">
          Fine Gold Since 1978
        </div>
      </div>
    </div>
  </div>
</template>
