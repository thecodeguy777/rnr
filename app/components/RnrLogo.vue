<script setup lang="ts">
defineProps<{
  class?: string
  variant?: 'white' | 'orange'
  height?: string
}>()
</script>

<template>
  <img
    src="/logo.svg"
    alt="RNR Gold Jewelry"
    :class="$props.class"
    :style="{ height: height || '40px', width: 'auto', objectFit: 'contain' }"
  />
</template>
