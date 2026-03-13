<script setup lang="ts">
import { collections } from '~/data/collections'

useHead({ title: 'Collections — RNR Gold Jewelry' })
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      image="https://images.unsplash.com/photo-1602752250015-52934bc45613?w=1600&q=80"
      height="min-h-[50vh]"
    >
      <p class="text-xs tracking-[0.3em] uppercase text-primary/80 mb-4">Browse</p>
      <h1 class="font-serif text-4xl md:text-6xl font-light tracking-wide">Collections</h1>
    </HeroSection>

    <!-- Collections Grid -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="collection in collections"
            :key="collection.slug"
            :to="`/collections/${collection.slug}`"
            class="group relative overflow-hidden aspect-[4/3]"
          >
            <img
              :src="collection.image"
              :alt="collection.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h2 class="font-serif text-3xl text-white group-hover:text-primary transition-colors mb-2">
                {{ collection.name }}
              </h2>
              <p class="text-white/50 text-sm leading-relaxed max-w-md">
                {{ collection.description }}
              </p>
              <p class="text-primary/60 text-xs mt-3 tracking-widest uppercase">
                {{ collection.itemCount }} pieces
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
