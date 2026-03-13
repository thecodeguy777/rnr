<script setup lang="ts">
import { getFeaturedProducts, formatPrice } from '~/data/products'
import { collections } from '~/data/collections'

const featured = getFeaturedProducts()
</script>

<template>
  <div>
    <!-- ── Hero: Full-bleed image with minimal overlay ── -->
    <section class="relative min-h-[90vh] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
        alt="Gold jewelry"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div class="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <p class="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4">Est. 1978</p>
        <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight text-white">
          Gold That<br />
          <span class="brand-gradient">Outlives Time</span>
        </h1>
        <p class="mt-6 text-white/60 text-base tracking-wider font-light max-w-md">
          Fine jewelry crafted with generational mastery. Investment-grade pieces meant to be kept forever.
        </p>
        <div class="mt-8 flex gap-4">
          <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px] px-8">
            Shop Collections
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Featured: Image-forward 4-col grid ── -->
    <section class="py-20 lg:py-28 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">New In</p>
            <h2 class="font-serif text-2xl md:text-4xl font-light">Featured Pieces</h2>
          </div>
          <NuxtLink to="/collections" class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 hover:text-primary transition-colors hidden md:block">
            View All &rarr;
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <ProductCard
            v-for="product in featured.slice(0, 8)"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="text-center mt-10 md:hidden">
          <NuxtLink to="/collections" class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 hover:text-primary transition-colors">
            View All &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── 50/50 Split: Heritage Story ── -->
    <section class="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
      <!-- Image -->
      <div class="relative overflow-hidden aspect-square lg:aspect-auto">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=80"
          alt="Goldsmith at work"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Text -->
      <div class="flex items-center bg-base-200 p-10 lg:p-20">
        <div class="max-w-md">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-4">Our Heritage</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light leading-snug mb-6">
            Three Generations<br />of Mastery
          </h2>
          <p class="text-base-content/50 leading-relaxed mb-4 text-sm">
            What began in a small workshop in the 1970s has become a legacy. Our grandfather learned the craft from the old masters — melting, casting, and shaping gold by hand.
          </p>
          <p class="text-base-content/50 leading-relaxed mb-8 text-sm">
            Today, that same fire still burns. Every piece carries the weight of decades of knowledge, passed from father to son.
          </p>
          <NuxtLink to="/our-story" class="text-[10px] tracking-[0.2em] uppercase text-primary hover:text-primary/70 transition-colors font-medium">
            Read Our Story &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Collections Grid ── -->
    <section class="py-20 lg:py-28 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">Browse</p>
          <h2 class="font-serif text-2xl md:text-4xl font-light">Collections</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          <NuxtLink
            v-for="col in collections"
            :key="col.slug"
            :to="`/collections/${col.slug}`"
            class="group relative overflow-hidden aspect-[3/4]"
          >
            <img
              :src="col.image"
              :alt="col.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <h3 class="font-serif text-lg lg:text-xl text-white group-hover:text-primary transition-colors">
                {{ col.name }}
              </h3>
              <p class="text-white/40 text-[10px] mt-1 tracking-wider uppercase">{{ col.itemCount }} pieces</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── 50/50 Split: Investment CTA (reversed) ── -->
    <section class="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
      <!-- Text -->
      <div class="flex items-center bg-base-200 p-10 lg:p-20 order-2 lg:order-1">
        <div class="max-w-md mx-auto lg:ml-auto lg:mr-0">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-4">Beyond Jewelry</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light leading-snug mb-6">
            Gold Is an Investment<br />That You Can Wear
          </h2>
          <p class="text-base-content/50 leading-relaxed mb-8 text-sm">
            Every piece holds its value in gold weight alone. As the years pass, your jewelry appreciates — becoming not just an heirloom, but a store of wealth for the next generation.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px] px-8">
            Start Your Collection
          </NuxtLink>
        </div>
      </div>
      <!-- Image -->
      <div class="relative overflow-hidden aspect-square lg:aspect-auto order-1 lg:order-2">
        <img
          src="https://images.unsplash.com/photo-1602752250015-52934bc45613?w=1000&q=80"
          alt="Gold necklace detail"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
  </div>
</template>
