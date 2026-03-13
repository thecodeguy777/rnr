<script setup lang="ts">
import { collections } from '~/data/collections'
import { getProductsByCollection, formatPrice } from '~/data/products'

const route = useRoute()
const slug = route.params.slug as string

const collection = collections.find(c => c.slug === slug)
const allProducts = getProductsByCollection(slug)

// Filters
const selectedKarat = ref('all')
const sortBy = ref('default')

const karats = ['all', '14K', '18K', '21K', '24K']

const filteredProducts = computed(() => {
  let result = [...allProducts]

  if (selectedKarat.value !== 'all') {
    result = result.filter(p => p.karat === selectedKarat.value)
  }

  if (sortBy.value === 'price-asc') result.sort((a, b) => a.price - b.price)
  else if (sortBy.value === 'price-desc') result.sort((a, b) => b.price - a.price)
  else if (sortBy.value === 'weight') result.sort((a, b) => b.weightGrams - a.weightGrams)

  return result
})

if (collection) {
  useHead({ title: `${collection.name} — RNR Gold Jewelry` })
}
</script>

<template>
  <div v-if="collection" class="pt-20">
    <!-- Page Header -->
    <div class="px-6 lg:px-12 pt-8 pb-6 max-w-7xl mx-auto">
      <NuxtLink to="/collections" class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 hover:text-primary transition-colors mb-3 inline-block">
        &larr; All Collections
      </NuxtLink>
      <h1 class="font-serif text-3xl md:text-5xl font-light">{{ collection.name }}</h1>
      <p class="mt-2 text-base-content/40 text-sm max-w-lg">{{ collection.description }}</p>
    </div>

    <!-- Filters + Products -->
    <section class="px-6 lg:px-12 pb-24">
      <div class="max-w-7xl mx-auto">
        <!-- Filter bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-base-300">
          <div class="flex items-center gap-4">
            <span class="text-[10px] tracking-[0.2em] uppercase text-base-content/40">Finishing:</span>
            <div class="flex gap-1.5">
              <button
                v-for="k in karats"
                :key="k"
                class="px-3 py-1 text-[10px] tracking-wider uppercase border transition-colors rounded-sm"
                :class="selectedKarat === k
                  ? 'border-primary bg-primary text-primary-content'
                  : 'border-base-300 text-base-content/50 hover:border-base-content/30'"
                @click="selectedKarat = k"
              >
                {{ k === 'all' ? 'All' : k }}
              </button>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-[10px] tracking-[0.2em] uppercase text-base-content/40">Sort:</span>
            <select v-model="sortBy" class="select select-sm text-xs bg-transparent border-base-300 w-auto">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="weight">Weight</option>
            </select>
            <span class="text-xs text-base-content/30 ml-2">{{ filteredProducts.length }} pieces</span>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length" class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-else class="text-center py-20">
          <p class="text-base-content/40 text-sm">No pieces found with the selected filters.</p>
          <button class="text-primary text-xs mt-3 hover:underline" @click="selectedKarat = 'all'">
            Clear filters
          </button>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-screen flex items-center justify-center pt-20">
    <div class="text-center">
      <h1 class="font-serif text-4xl mb-4">Collection Not Found</h1>
      <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px]">
        View Collections
      </NuxtLink>
    </div>
  </div>
</template>
