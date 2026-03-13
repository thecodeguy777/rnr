<script setup lang="ts">
defineProps<{
  image: string
  title?: string
  subtitle?: string
  height?: string
}>()
</script>

<template>
  <div
    class="hero relative"
    :class="height || 'min-h-screen'"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="hero-overlay bg-black/60"></div>
    <div class="hero-content text-center text-white">
      <div class="max-w-2xl">
        <slot>
          <h1 v-if="title" class="font-serif text-5xl md:text-7xl font-light tracking-wide leading-tight">
            {{ title }}
          </h1>
          <p v-if="subtitle" class="mt-6 text-base-content/60 text-lg tracking-wider font-light">
            {{ subtitle }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>
