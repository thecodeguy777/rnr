<script setup lang="ts">
import { getProductById, getProductsByCollection, getFeaturedProducts, type Product } from '~/data/products'
import { collections } from '~/data/collections'

const { getProductPrice, getKaratPricePerGram, formatPrice } = useGoldPrice()

const route = useRoute()
const product = getProductById(route.params.id as string)

const collection = product ? collections.find(c => c.slug === product.collection) : null
const relatedProducts = product
  ? getProductsByCollection(product.collection).filter(p => p.id !== product.id).slice(0, 4)
  : []
const bestSellers = getFeaturedProducts().slice(0, 6)

const activeImage = ref(0)
const showInquiry = ref(false)

// New selectors
const selectedFinish = ref(product?.karat || '18K')
const finishOptions = ['18K', '21K', '24K']
const selectedSize = ref('7"')
const sizeOptions = ['5.5"', '6"', '6.5"', '7"', '7.5"', '8"']
const isWishlisted = ref(false)

// FAQ accordion
const openFaq = ref<number | null>(null)
const faqs = [
  { q: 'Is this real gold?', a: 'Yes — every piece is crafted from genuine solid gold. We guarantee karat purity with every purchase and provide a certificate of authenticity.' },
  { q: 'How is the pricing?', a: 'Pricing is based on the current gold price per gram, the karat, and craftsmanship. Our prices are transparent and reflect the actual gold weight plus artisan labor.' },
  { q: 'Shipping options?', a: 'We offer insured nationwide shipping via LBC or J&T. Metro Manila orders typically arrive within 1-2 business days. Provincial orders take 3-5 business days.' },
  { q: 'Payment options?', a: 'We accept GCash, bank transfer (BDO/BPI), and cash on delivery for Metro Manila. Installment plans are available for purchases above ₱50,000.' },
  { q: 'Store available for walk-ins or schedule?', a: 'Yes! Our showroom is open Monday to Saturday, 10AM - 6PM. Walk-ins are welcome, but we recommend scheduling an appointment for a personalized consultation.' },
]

// Accordion sections
const openSection = ref<string | null>(null)

// Mock rating
const rating = 4.8
const reviewCount = 24

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

    <!-- Product Detail: 50/50 split -->
    <section class="px-6 lg:px-12 pb-16">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <!-- LEFT: Image Slideshow -->
        <div>
          <!-- Main Image -->
          <div class="aspect-square overflow-hidden mb-3 bg-base-200">
            <img
              :src="product.images[activeImage]"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Thumbnails -->
          <div v-if="product.images.length > 1" class="flex gap-2">
            <button
              v-for="(img, i) in product.images"
              :key="i"
              class="w-16 h-16 lg:w-20 lg:h-20 overflow-hidden border-2 transition-colors"
              :class="activeImage === i ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-80'"
              @click="activeImage = i"
            >
              <img :src="img" :alt="`${product.name} view ${i + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- RIGHT: Product Info -->
        <div class="flex flex-col">
          <!-- Status -->
          <div v-if="product.status !== 'available'" class="mb-3">
            <span
              class="badge tracking-widest uppercase text-[10px]"
              :class="product.status === 'sold' ? 'badge-error' : 'badge-warning'"
            >
              {{ product.status }}
            </span>
          </div>

          <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-2">{{ product.name }}</h1>

          <!-- Price (dynamic based on gold market) -->
          <p class="text-primary text-2xl font-light mt-2 mb-3">
            {{ formatPrice(getProductPrice(product)) }}
          </p>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex">
              <template v-for="i in 5" :key="i">
                <svg
                  class="w-4 h-4"
                  :class="i <= Math.round(rating) ? 'text-yellow-500' : 'text-base-300'"
                  fill="currentColor" viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </template>
            </div>
            <span class="text-xs text-base-content/50">{{ rating }} ({{ reviewCount }} reviews)</span>
          </div>

          <!-- Finish Selector -->
          <div class="mb-5">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-2">Finish</h3>
            <div class="flex gap-2">
              <button
                v-for="f in finishOptions"
                :key="f"
                class="px-4 py-2 text-xs tracking-wider uppercase border transition-colors rounded-sm"
                :class="selectedFinish === f
                  ? 'border-primary bg-primary text-primary-content'
                  : 'border-base-300 text-base-content/50 hover:border-base-content/30'"
                @click="selectedFinish = f"
              >
                {{ f }}
              </button>
            </div>
          </div>

          <!-- Size Selector -->
          <div class="mb-5">
            <h3 class="text-[10px] tracking-[0.2em] uppercase text-base-content/40 font-medium mb-2">Size</h3>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="s in sizeOptions"
                :key="s"
                class="w-12 h-10 text-xs tracking-wider border transition-colors rounded-sm flex items-center justify-center"
                :class="selectedSize === s
                  ? 'border-primary bg-primary text-primary-content'
                  : 'border-base-300 text-base-content/50 hover:border-base-content/30'"
                @click="selectedSize = s"
              >
                {{ s }}
              </button>
            </div>
          </div>

          <!-- Per Gram -->
          <div class="mb-6 py-3 border-y border-base-300">
            <div class="flex items-center justify-between">
              <span class="text-[10px] tracking-[0.2em] uppercase text-base-content/40">Per Gram</span>
              <span class="text-sm font-medium">{{ formatPrice(getKaratPricePerGram(product.karat)) }}/g</span>
            </div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-[10px] tracking-[0.2em] uppercase text-base-content/40">Weight</span>
              <span class="text-sm font-medium">{{ product.weightGrams }}g</span>
            </div>
          </div>

          <!-- ADD TO CART + Wishlist -->
          <div class="flex gap-3 mb-8">
            <button
              v-if="product.status === 'available'"
              class="btn btn-primary tracking-[0.2em] uppercase text-[10px] flex-1"
              @click="showInquiry = true"
            >
              Add to Cart
            </button>
            <button v-else class="btn btn-disabled tracking-[0.2em] uppercase text-[10px] flex-1" disabled>
              {{ product.status === 'sold' ? 'Sold Out' : 'Reserved' }}
            </button>
            <button
              class="btn btn-ghost border border-base-300 px-4"
              :class="isWishlisted ? 'text-red-500' : ''"
              @click="isWishlisted = !isWishlisted"
            >
              <svg class="w-5 h-5" :fill="isWishlisted ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <!-- Accordion: Details -->
          <div class="border-t border-base-300">
            <button
              class="w-full flex items-center justify-between py-4 text-left"
              @click="openSection = openSection === 'details' ? null : 'details'"
            >
              <span class="text-sm font-medium">Details</span>
              <svg class="w-4 h-4 transition-transform" :class="openSection === 'details' ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openSection === 'details'" class="pb-4 text-sm text-base-content/60 leading-relaxed">
              <p>{{ product.description }}</p>
              <p class="mt-3">{{ product.craftsmanshipNotes }}</p>
            </div>
          </div>

          <!-- Accordion: Delivery -->
          <div class="border-t border-base-300">
            <button
              class="w-full flex items-center justify-between py-4 text-left"
              @click="openSection = openSection === 'delivery' ? null : 'delivery'"
            >
              <span class="text-sm font-medium">Delivery</span>
              <svg class="w-4 h-4 transition-transform" :class="openSection === 'delivery' ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openSection === 'delivery'" class="pb-4 text-sm text-base-content/60 leading-relaxed">
              <p>We offer insured nationwide delivery. Metro Manila orders arrive in 1-2 business days; provincial in 3-5 business days. All shipments are fully insured and require signature upon delivery.</p>
            </div>
          </div>

          <!-- Accordion: FAQs -->
          <div class="border-t border-b border-base-300">
            <button
              class="w-full flex items-center justify-between py-4 text-left"
              @click="openSection = openSection === 'faqs' ? null : 'faqs'"
            >
              <span class="text-sm font-medium">FAQs</span>
              <svg class="w-4 h-4 transition-transform" :class="openSection === 'faqs' ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openSection === 'faqs'" class="pb-4">
              <div v-for="(faq, i) in faqs" :key="i" class="border-t border-base-200 first:border-0">
                <button
                  class="w-full flex items-center justify-between py-3 text-left"
                  @click="openFaq = openFaq === i ? null : i"
                >
                  <span class="text-sm text-base-content/70">{{ faq.q }}</span>
                  <svg class="w-3 h-3 shrink-0 ml-2 transition-transform" :class="openFaq === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-show="openFaq === i" class="pb-3 text-xs text-base-content/50 leading-relaxed">
                  {{ faq.a }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers Row -->
    <section class="py-16 px-6 lg:px-12 bg-base-200">
      <div class="max-w-7xl mx-auto">
        <h2 class="font-serif text-2xl md:text-3xl font-light text-center mb-10">Best Sellers</h2>
        <div class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">
          <div
            v-for="p in bestSellers"
            :key="p.id"
            class="snap-start shrink-0 w-[45%] md:w-[30%] lg:w-[18%]"
          >
            <ProductCard :product="p" />
          </div>
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
        <p class="text-base-content/50 text-sm mb-6">{{ product.name }} — {{ selectedFinish }} {{ formatPrice(getProductPrice(product)) }}</p>

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
