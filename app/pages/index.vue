<script setup lang="ts">
import { getFeaturedProducts, formatPrice } from '~/data/products'
import { collections } from '~/data/collections'

const featured = getFeaturedProducts()
</script>

<template>
  <div>
    <!-- ── Hero ── -->
    <HeroSection image="https://images.unsplash.com/photo-1515562141589-67f0d932b7d6?w=1600&q=80">
      <p class="text-xs tracking-[0.4em] uppercase text-primary/80 mb-6">Est. 1978</p>
      <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight">
        Gold That<br />
        <span class="brand-gradient">Outlives Time</span>
      </h1>
      <p class="mt-8 text-base-content/50 text-lg tracking-wider font-light max-w-lg mx-auto">
        Fine jewelry crafted with generational mastery.<br class="hidden md:block" />
        Investment-grade pieces meant to be kept forever.
      </p>
      <div class="mt-10 flex gap-4 justify-center">
        <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-widest uppercase text-xs px-8">
          View Collections
        </NuxtLink>
        <NuxtLink to="/our-story" class="btn btn-ghost btn-sm tracking-widest uppercase text-xs px-8 border border-base-content/20">
          Our Story
        </NuxtLink>
      </div>
    </HeroSection>

    <!-- ── Featured Pieces ── -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">Curated Selection</p>
          <h2 class="font-serif text-3xl md:text-5xl font-light">Featured Pieces</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard
            v-for="product in featured.slice(0, 6)"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/collections" class="btn btn-ghost btn-sm tracking-widest uppercase text-xs border border-base-content/10 px-8">
            View All Collections
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Brand Story Teaser ── -->
    <section class="relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <!-- Image -->
        <div class="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=80"
            alt="Goldsmith at work"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent to-base-100 hidden lg:block"></div>
        </div>

        <!-- Text -->
        <div class="flex items-center p-12 lg:p-20">
          <div>
            <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">Our Heritage</p>
            <h2 class="font-serif text-3xl md:text-4xl font-light leading-snug mb-6">
              Three Generations<br />of Mastery
            </h2>
            <p class="text-base-content/50 leading-relaxed mb-4">
              What began in a small workshop in the 1970s has become a legacy. Our grandfather learned the craft from the old masters — melting, casting, and shaping gold by hand.
            </p>
            <p class="text-base-content/50 leading-relaxed mb-8">
              Today, that same fire still burns. Every piece carries the weight of decades of knowledge, passed from father to son. This is gold you don't just wear — you keep.
            </p>
            <NuxtLink to="/our-story" class="btn btn-ghost btn-sm tracking-widest uppercase text-xs border border-primary/30 text-primary px-8">
              Read Our Story
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Collections Preview ── -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">Browse by Category</p>
          <h2 class="font-serif text-3xl md:text-5xl font-light">Collections</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink
            v-for="collection in collections"
            :key="collection.slug"
            :to="`/collections/${collection.slug}`"
            class="group relative overflow-hidden aspect-[3/4]"
          >
            <img
              :src="collection.image"
              :alt="collection.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="font-serif text-2xl text-white group-hover:text-primary transition-colors">
                {{ collection.name }}
              </h3>
              <p class="text-white/40 text-sm mt-1">{{ collection.itemCount }} pieces</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Investment CTA ── -->
    <section class="py-24 px-6 lg:px-12 bg-base-200">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">Beyond Jewelry</p>
        <h2 class="font-serif text-3xl md:text-5xl font-light leading-snug mb-6">
          Gold Is an Investment<br />That You Can Wear
        </h2>
        <p class="text-base-content/50 leading-relaxed mb-10 max-w-xl mx-auto">
          Every piece holds its value in gold weight alone. As the years pass, your jewelry appreciates — becoming not just an heirloom, but a store of wealth for the next generation.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-sm tracking-widest uppercase text-xs px-8">
          Start Your Collection
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
