<script setup lang="ts">
const props = defineProps<{
  class?: string
  variant?: 'white' | 'dark'
  height?: string
}>()

const src = computed(() => props.variant === 'white' ? '/logo.svg' : '/logo-dark.svg')
</script>

<template>
  <img
    :src="src"
    alt="RNR Gold Jewelry"
    :class="$props.class"
    :style="{ height: height || '40px', width: 'auto', objectFit: 'contain' }"
  />
</template>
