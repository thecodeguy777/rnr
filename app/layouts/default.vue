<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <div class="fixed top-0 left-0 right-0 z-[60]">
      <ClientOnly>
        <GoldPriceTicker />
        <template #fallback>
          <div class="w-full bg-base-300 border-b border-primary/10 h-14"></div>
        </template>
      </ClientOnly>
    </div>
    <div class="pt-14">
      <AppNavbar>
        <main>
          <slot />
        </main>
      </AppNavbar>
    </div>
    <AppFooter />
  </div>
</template>
