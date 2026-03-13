<script setup lang="ts">
import { collections } from '~/data/collections'
import { products } from '~/data/products'

const { getProductPrice, formatPrice } = useGoldPrice()

useHead({ title: 'Collections — RNR Gold Jewelry' })

// All products combined for the "all" view
const allProducts = products
const selectedCategory = ref('all')
const selectedKarat = ref('all')
const selectedStone = ref('all')
const sortBy = ref('default')
const priceRange = ref([0, 200000])

const karats = ['all', '14K', '18K', '21K', '24K']
const stones = ['all', 'Diamond', 'Pearl', 'None']

const categories = [
  { slug: 'all', name: 'All Pieces' },
  ...collections.map(c => ({ slug: c.slug, name: c.name })),
]

const filteredProducts = computed(() => {
  let result = [...allProducts]

  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.collection === selectedCategory.value)
  }

  if (selectedKarat.value !== 'all') {
    result = result.filter(p => p.karat === selectedKarat.value)
  }

  // Price filter (dynamic)
  result = result.filter(p => getProductPrice(p) >= priceRange.value[0] && getProductPrice(p) <= priceRange.value[1])

  // Sort (dynamic)
  if (sortBy.value === 'price-asc') result.sort((a, b) => getProductPrice(a) - getProductPrice(b))
  else if (sortBy.value === 'price-desc') result.sort((a, b) => getProductPrice(b) - getProductPrice(a))
  else if (sortBy.value === 'weight') result.sort((a, b) => b.weightGrams - a.weightGrams)
  else if (sortBy.value === 'newest') result.reverse()

  return result
})

const maxPrice = computed(() => Math.max(...allProducts.map(p => getProductPrice(p))))
</script>

<template>
  <div class="pt-20">
    <!-- Page Header -->
    <div class="px-6 lg:px-12 pt-8 pb-6 max-w-7xl mx-auto">
      <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">Browse</p>
      <h1 class="font-serif text-3xl md:text-5xl font-light">Collections</h1>
    </div>

    <!-- Main: Sidebar + Grid -->
    <section class="px-6 lg:px-12 pb-24">
      <div class="max-w-7xl mx-auto flex gap-10">

        <!-- Sidebar Filters (desktop) -->
        <aside class="hidden lg:block w-56 shrink-0 border-r border-base-300 pr-8">
          <!-- Categories -->
          <div class="mb-8">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-4">Category</h3>
            <ul class="space-y-2">
              <li v-for="cat in categories" :key="cat.slug">
                <button
                  class="text-sm transition-colors w-full text-left py-0.5"
                  :class="selectedCategory === cat.slug ? 'text-primary font-medium' : 'text-base-content/50 hover:text-base-content/80'"
                  @click="selectedCategory = cat.slug"
                >
                  {{ cat.name }}
                </button>
              </li>
            </ul>
          </div>

          <!-- Sort -->
          <div class="mb-8">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-4">Sort By</h3>
            <select v-model="sortBy" class="select select-sm w-full text-xs bg-transparent border-base-300">
              <option value="default">Default</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="weight">Weight</option>
            </select>
          </div>

          <!-- Karat / Finishing -->
          <div class="mb-8">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-4">Finishing</h3>
            <div class="flex flex-wrap gap-1.5">
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

          <!-- Price Range -->
          <div class="mb-8">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-4">Per Gram Price</h3>
            <input
              type="range"
              :min="0"
              :max="maxPrice"
              :step="5000"
              v-model.number="priceRange[1]"
              class="range range-xs range-primary w-full"
            />
            <div class="flex justify-between text-[10px] text-base-content/40 mt-2">
              <span>₱0</span>
              <span>{{ formatPrice(priceRange[1]) }}</span>
            </div>
          </div>

          <!-- Stones -->
          <div class="mb-8">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-4">Stones</h3>
            <div class="flex flex-wrap gap-1.5">
              <button
                v-for="s in stones"
                :key="s"
                class="px-3 py-1 text-[10px] tracking-wider uppercase border transition-colors rounded-sm"
                :class="selectedStone === s
                  ? 'border-primary bg-primary text-primary-content'
                  : 'border-base-300 text-base-content/50 hover:border-base-content/30'"
                @click="selectedStone = s"
              >
                {{ s === 'all' ? 'All' : s }}
              </button>
            </div>
          </div>
        </aside>

        <!-- Product Grid -->
        <div class="flex-1">
          <!-- Top bar: count + mobile filter toggle -->
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-base-300">
            <p class="text-xs text-base-content/40">
              {{ filteredProducts.length }} piece{{ filteredProducts.length !== 1 ? 's' : '' }}
            </p>

            <!-- Mobile filters (dropdown) -->
            <div class="flex items-center gap-3 lg:hidden">
              <select v-model="selectedCategory" class="select select-xs text-[10px] bg-transparent border-base-300">
                <option v-for="cat in categories" :key="cat.slug" :value="cat.slug">{{ cat.name }}</option>
              </select>
              <select v-model="selectedKarat" class="select select-xs text-[10px] bg-transparent border-base-300">
                <option v-for="k in karats" :key="k" :value="k">{{ k === 'all' ? 'All Karats' : k }}</option>
              </select>
            </div>
          </div>

          <!-- Grid -->
          <div v-if="filteredProducts.length" class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <div v-else class="text-center py-20">
            <p class="text-base-content/40 text-sm">No pieces found with the selected filters.</p>
            <button class="text-primary text-xs mt-3 hover:underline" @click="selectedCategory = 'all'; selectedKarat = 'all'; selectedStone = 'all'; priceRange[1] = maxPrice">
              Clear filters
            </button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
