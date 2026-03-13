<script setup lang="ts">
import { collections } from '~/data/collections'
import { getProductsByCollection } from '~/data/products'

const route = useRoute()
const slug = route.params.slug as string

const collection = collections.find(c => c.slug === slug)
const allProducts = getProductsByCollection(slug)

// Filters
const selectedKarat = ref('all')
const sortBy = ref('default')

const karats = ['all', '14K', '18K', '21K']

const filteredProducts = computed(() => {
  let result = [...allProducts]

  if (selectedKarat.value !== 'all') {
    result = result.filter(p => p.karat === selectedKarat.value)
  }

  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'weight') {
    result.sort((a, b) => b.weightGrams - a.weightGrams)
  }

  return result
})

if (collection) {
  useHead({ title: `${collection.name} — RNR Gold Jewelry` })
}
</script>

<template>
  <div v-if="collection">
    <!-- Hero -->
    <HeroSection
      :image="collection.image"
      height="min-h-[50vh]"
    >
      <NuxtLink to="/collections" class="text-xs tracking-[0.3em] uppercase text-primary/60 hover:text-primary transition-colors mb-4 inline-block">
        &larr; Collections
      </NuxtLink>
      <h1 class="font-serif text-4xl md:text-6xl font-light tracking-wide">{{ collection.name }}</h1>
      <p class="mt-4 text-base-content/50 text-sm tracking-wider max-w-lg mx-auto">
        {{ collection.description }}
      </p>
    </HeroSection>

    <!-- Filters + Products -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Filters -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-base-content/5">
          <!-- Karat filter -->
          <div class="flex items-center gap-2">
            <span class="text-xs tracking-widest uppercase text-base-content/40">Karat:</span>
            <div class="flex gap-1">
              <button
                v-for="k in karats"
                :key="k"
                class="btn btn-xs tracking-wider"
                :class="selectedKarat === k ? 'btn-primary' : 'btn-ghost border border-base-content/10'"
                @click="selectedKarat = k"
              >
                {{ k === 'all' ? 'All' : k }}
              </button>
            </div>
          </div>

          <!-- Sort -->
          <div class="flex items-center gap-2">
            <span class="text-xs tracking-widest uppercase text-base-content/40">Sort:</span>
            <select v-model="sortBy" class="select select-sm select-ghost text-xs tracking-wider w-auto">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="weight">Weight</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-else class="text-center py-20">
          <p class="text-base-content/40 text-sm">No pieces found with the selected filters.</p>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="font-serif text-4xl mb-4">Collection Not Found</h1>
      <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-widest uppercase text-xs">
        View Collections
      </NuxtLink>
    </div>
  </div>
</template>
