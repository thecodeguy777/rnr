<script setup lang="ts">
import { formatPrice, type Product } from '~/data/products'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`" class="group block">
    <div class="card bg-base-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
      <!-- Image -->
      <figure class="img-zoom aspect-[3/4] relative">
        <img
          :src="product.images[0]"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
        <!-- Status badge -->
        <div v-if="product.status !== 'available'" class="absolute top-4 left-4">
          <span
            class="badge badge-sm tracking-widest uppercase text-[10px]"
            :class="product.status === 'sold' ? 'badge-error' : 'badge-warning'"
          >
            {{ product.status }}
          </span>
        </div>
      </figure>

      <!-- Info -->
      <div class="card-body p-5">
        <div class="flex items-start justify-between gap-2">
          <h3 class="font-serif text-lg group-hover:text-primary transition-colors">
            {{ product.name }}
          </h3>
          <span class="badge badge-outline badge-sm text-[10px] tracking-wider text-primary/70 border-primary/30 shrink-0">
            {{ product.karat }}
          </span>
        </div>
        <p class="text-sm text-base-content/40 mt-1">
          {{ product.weightGrams }}g
        </p>
        <p class="text-primary font-medium mt-2">
          {{ formatPrice(product.price) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
