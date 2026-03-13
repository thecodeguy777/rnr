<script setup lang="ts">
import { getFeaturedProducts } from '~/data/products'
import { collections } from '~/data/collections'

const featured = getFeaturedProducts()

// 4 category cards matching Milanote spec
const categories = [
  { name: 'Necklaces & Pendants', slug: 'necklaces', image: collections.find(c => c.slug === 'necklaces')?.image || '' },
  { name: 'Bracelets', slug: 'bracelets', image: collections.find(c => c.slug === 'bracelets')?.image || '' },
  { name: 'Earrings', slug: 'earrings', image: collections.find(c => c.slug === 'earrings')?.image || '' },
  { name: 'Rings', slug: 'rings', image: collections.find(c => c.slug === 'rings')?.image || '' },
]

const carouselRef = ref<HTMLElement | null>(null)
function scrollCarousel(dir: number) {
  if (!carouselRef.value) return
  const scrollAmount = carouselRef.value.clientWidth * 0.6
  carouselRef.value.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <!-- ── Hero: RNR Logo + Categories + Product Photo + Motto + SHOP NOW ── -->
    <section class="relative min-h-[90vh] flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
        alt="Gold jewelry craftsmanship"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>

      <!-- Top: Logo + Category Links -->
      <div class="relative z-10 w-full px-6 lg:px-12 pt-24 lg:pt-28 max-w-7xl mx-auto text-center">
        <!-- RNR Logo -->
        <RnrLogo variant="white" height="80px" class="mx-auto mb-6" />
        <!-- Subheader Categories -->
        <div class="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          <NuxtLink
            v-for="col in collections"
            :key="col.slug"
            :to="`/collections/${col.slug}`"
            class="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
          >
            {{ col.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Center/Bottom: Motto + SHOP NOW -->
      <div class="relative z-10 mt-auto w-full px-6 lg:px-12 pb-16 lg:pb-24 max-w-7xl mx-auto text-center">
        <p class="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">Fine Gold Since 1978</p>
        <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight text-white">
          Gold That <span class="brand-gradient">Outlives Time</span>
        </h1>
        <div class="mt-8">
          <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px] px-10">
            Shop Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── [SECOND PAGE] Categories Product Showcase ── -->
    <section class="py-20 lg:py-28 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">Shop By Category</p>
          <h2 class="font-serif text-2xl md:text-4xl font-light">Our Collections</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/collections/${cat.slug}`"
            class="group relative overflow-hidden aspect-[3/4]"
          >
            <img
              :src="cat.image"
              :alt="cat.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <h3 class="font-serif text-lg lg:text-2xl text-white group-hover:text-primary transition-colors">
                {{ cat.name }}
              </h3>
              <p class="text-white/40 text-[10px] mt-1 tracking-[0.2em] uppercase">Shop Now</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── [THIRD PAGE] Best Seller Product Showcase Slider ── -->
    <section class="py-20 lg:py-28 px-6 lg:px-12 bg-base-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">Best Sellers</p>
            <h2 class="font-serif text-2xl md:text-4xl font-light">Most Loved Pieces</h2>
          </div>
          <NuxtLink to="/collections" class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 hover:text-primary transition-colors hidden md:block">
            View All &rarr;
          </NuxtLink>
        </div>

        <!-- Horizontal scroll carousel -->
        <div class="relative">
          <div ref="carouselRef" class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-2 px-2 no-scrollbar">
            <div
              v-for="product in featured"
              :key="product.id"
              class="snap-start shrink-0 w-[45%] md:w-[30%] lg:w-[22%]"
            >
              <ProductCard :product="product" />
            </div>
          </div>

          <!-- Scroll arrows (desktop) -->
          <button
            class="hidden lg:flex absolute -left-5 top-1/3 w-10 h-10 items-center justify-center bg-base-100 border border-base-300 rounded-full shadow-sm hover:border-primary transition-colors"
            @click="scrollCarousel(-1)"
          >
            <span class="text-base-content/60">&larr;</span>
          </button>
          <button
            class="hidden lg:flex absolute -right-5 top-1/3 w-10 h-10 items-center justify-center bg-base-100 border border-base-300 rounded-full shadow-sm hover:border-primary transition-colors"
            @click="scrollCarousel(1)"
          >
            <span class="text-base-content/60">&rarr;</span>
          </button>
        </div>

        <div class="text-center mt-10 md:hidden">
          <NuxtLink to="/collections" class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 hover:text-primary transition-colors">
            View All &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── [FOURTH PAGE] Collection Summary — 50/50 Split ── -->
    <section class="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
      <!-- Image -->
      <div class="relative overflow-hidden aspect-square lg:aspect-auto">
        <img
          src="https://images.unsplash.com/photo-1602752250015-52934bc45613?w=1000&q=80"
          alt="Gold necklace detail"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Text -->
      <div class="flex items-center bg-base-200 p-10 lg:p-20">
        <div class="max-w-md">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-4">Our Promise</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light leading-snug mb-6">
            Gold That Holds<br />Its Value Forever
          </h2>
          <p class="text-base-content/50 leading-relaxed mb-4 text-sm">
            Every piece holds its value in gold weight alone. As the years pass, your jewelry appreciates — becoming not just an heirloom, but a store of wealth for the next generation.
          </p>
          <p class="text-base-content/50 leading-relaxed mb-8 text-sm">
            With three generations of craftsmanship and transparent pricing based on real-time gold rates, you always know the true worth of what you wear.
          </p>
          <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px] px-8">
            Start Your Collection
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
