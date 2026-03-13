<script setup lang="ts">
import { formatPrice, type Product } from '~/data/products'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`" class="group block">
    <!-- Image -->
    <div class="img-zoom aspect-[3/4] relative bg-base-200 mb-3">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
      <!-- Status badge -->
      <div v-if="product.status !== 'available'" class="absolute top-3 left-3">
        <span
          class="badge badge-sm tracking-widest uppercase text-[9px]"
          :class="product.status === 'sold' ? 'badge-error' : 'badge-warning'"
        >
          {{ product.status }}
        </span>
      </div>
    </div>

    <!-- Info — clean, minimal -->
    <div class="px-0.5">
      <h3 class="font-serif text-sm lg:text-base group-hover:text-primary transition-colors leading-snug">
        {{ product.name }}
      </h3>
      <div class="flex items-center gap-2 mt-1">
        <p class="text-sm text-base-content/70">
          {{ formatPrice(product.price) }}
        </p>
        <span class="text-[9px] tracking-wider text-base-content/30 uppercase">{{ product.karat }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
