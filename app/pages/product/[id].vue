<script setup lang="ts">
import { getProductById, getProductsByCollection, formatPrice, type Product } from '~/data/products'
import { collections } from '~/data/collections'

const route = useRoute()
const product = getProductById(route.params.id as string)

const collection = product ? collections.find(c => c.slug === product.collection) : null
const relatedProducts = product
  ? getProductsByCollection(product.collection).filter(p => p.id !== product.id).slice(0, 3)
  : []

const activeImage = ref(0)
const showInquiry = ref(false)

if (product) {
  useHead({ title: `${product.name} — RNR Gold Jewelry` })
}
</script>

<template>
  <div v-if="product" class="pt-20">
    <!-- Breadcrumb -->
    <div class="px-6 lg:px-12 py-6 max-w-7xl mx-auto">
      <div class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 flex items-center gap-2">
        <NuxtLink to="/collections" class="hover:text-primary transition-colors">Collections</NuxtLink>
        <span>/</span>
        <NuxtLink :to="`/collections/${product.collection}`" class="hover:text-primary transition-colors">
          {{ collection?.name }}
        </NuxtLink>
        <span>/</span>
        <span class="text-base-content/60">{{ product.name }}</span>
      </div>
    </div>

    <!-- Product Detail -->
    <section class="px-6 lg:px-12 pb-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Images -->
        <div>
          <!-- Main Image -->
          <div class="aspect-[3/4] overflow-hidden mb-4">
            <img
              :src="product.images[activeImage]"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Thumbnails -->
          <div v-if="product.images.length > 1" class="flex gap-3">
            <button
              v-for="(img, i) in product.images"
              :key="i"
              class="w-20 h-20 overflow-hidden border-2 transition-colors"
              :class="activeImage === i ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-80'"
              @click="activeImage = i"
            >
              <img :src="img" :alt="`${product.name} view ${i + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-col justify-center">
          <!-- Status -->
          <div v-if="product.status !== 'available'" class="mb-4">
            <span
              class="badge tracking-widest uppercase text-[10px]"
              :class="product.status === 'sold' ? 'badge-error' : 'badge-warning'"
            >
              {{ product.status }}
            </span>
          </div>

          <h1 class="font-serif text-3xl md:text-5xl font-light mb-2">{{ product.name }}</h1>

          <p class="text-primary text-2xl font-light mt-4 mb-8">
            {{ formatPrice(product.price) }}
          </p>

          <!-- Specs -->
          <div class="grid grid-cols-3 gap-4 py-8 border-y border-base-300">
            <div>
              <p class="text-xs tracking-widest uppercase text-base-content/40 mb-1">Karat</p>
              <p class="text-lg font-serif">{{ product.karat }}</p>
            </div>
            <div>
              <p class="text-xs tracking-widest uppercase text-base-content/40 mb-1">Weight</p>
              <p class="text-lg font-serif">{{ product.weightGrams }}g</p>
            </div>
            <div>
              <p class="text-xs tracking-widest uppercase text-base-content/40 mb-1">Collection</p>
              <p class="text-lg font-serif">{{ collection?.name }}</p>
            </div>
          </div>

          <!-- Description -->
          <div class="py-8 border-b border-base-300">
            <p class="text-base-content/60 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Craftsmanship -->
          <div class="py-8">
            <h3 class="text-xs tracking-widest uppercase text-primary/60 mb-3">Craftsmanship</h3>
            <p class="text-base-content/50 leading-relaxed text-sm">{{ product.craftsmanshipNotes }}</p>
          </div>

          <!-- CTA -->
          <div class="mt-4 flex gap-3">
            <button
              v-if="product.status === 'available'"
              class="btn btn-primary tracking-[0.2em] uppercase text-[10px] flex-1"
              @click="showInquiry = true"
            >
              Inquire About This Piece
            </button>
            <button v-else class="btn btn-disabled tracking-[0.2em] uppercase text-[10px] flex-1" disabled>
              {{ product.status === 'sold' ? 'Sold' : 'Reserved' }}
            </button>
            <NuxtLink
              to="/contact"
              class="btn btn-ghost border border-base-300 tracking-[0.2em] uppercase text-[10px]"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section v-if="relatedProducts.length" class="py-24 px-6 lg:px-12 bg-base-200">
      <div class="max-w-7xl mx-auto">
        <h2 class="font-serif text-2xl md:text-3xl font-light text-center mb-12">
          More from {{ collection?.name }}
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          <ProductCard
            v-for="p in relatedProducts"
            :key="p.id"
            :product="p"
          />
        </div>
      </div>
    </section>

    <!-- Inquiry Modal -->
    <dialog
      :open="showInquiry"
      class="modal modal-bottom sm:modal-middle"
      @close="showInquiry = false"
    >
      <div class="modal-box bg-base-200">
        <h3 class="font-serif text-2xl mb-2">Inquire About This Piece</h3>
        <p class="text-base-content/50 text-sm mb-6">{{ product.name }} — {{ product.karat }} {{ formatPrice(product.price) }}</p>

        <form @submit.prevent="showInquiry = false">
          <div class="space-y-4">
            <fieldset class="fieldset">
              <legend class="fieldset-legend text-xs tracking-widest uppercase">Your Name</legend>
              <input type="text" class="input w-full" placeholder="Juan Dela Cruz" />
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-legend text-xs tracking-widest uppercase">Email</legend>
              <input type="email" class="input w-full" placeholder="juan@email.com" />
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-legend text-xs tracking-widest uppercase">Phone (optional)</legend>
              <input type="tel" class="input w-full" placeholder="+63 9XX XXX XXXX" />
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-legend text-xs tracking-widest uppercase">Message</legend>
              <textarea class="textarea w-full" rows="3" placeholder="I'm interested in this piece..."></textarea>
            </fieldset>
          </div>

          <div class="modal-action">
            <button type="button" class="btn btn-ghost btn-sm" @click="showInquiry = false">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px]">Send Inquiry</button>
          </div>
        </form>
      </div>
      <div class="modal-backdrop" @click="showInquiry = false">
        <button type="button">close</button>
      </div>
    </dialog>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="font-serif text-4xl mb-4">Piece Not Found</h1>
      <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px]">
        View Collections
      </NuxtLink>
    </div>
  </div>
</template>
