import type { Product } from '~/data/products'

const PHP_RATE = 58.2
const BASE_SPOT_USD = 2945
const GRAMS_PER_OZ = 31.1035
const PROFIT_MARGIN = 0.20

const KARATS = [
  { label: '24K', purity: 1.0 },
  { label: '21K', purity: 0.875 },
  { label: '18K', purity: 0.75 },
  { label: '14K', purity: 0.583 },
]

// Shared reactive state (singleton across all components)
const spotPriceUSD = ref(BASE_SPOT_USD)
const spotChange = ref(0.42)
const priceFlash = ref(false)
const direction = ref<'up' | 'down'>('up')
const karatPrices = ref<{ label: string; php: number }[]>([])

function updatePrices() {
  const ppg = spotPriceUSD.value / GRAMS_PER_OZ
  karatPrices.value = KARATS.map(k => ({
    label: k.label,
    php: Math.round(ppg * k.purity * PHP_RATE),
  }))
}

// Initialize prices immediately
updatePrices()

function simulateFluctuation() {
  const prev = spotPriceUSD.value
  const delta = (Math.random() - 0.45) * BASE_SPOT_USD * 0.004
  spotPriceUSD.value = +(spotPriceUSD.value + delta).toFixed(2)
  spotChange.value = +(((spotPriceUSD.value - BASE_SPOT_USD) / BASE_SPOT_USD) * 100).toFixed(2)
  direction.value = spotPriceUSD.value >= prev ? 'up' : 'down'
  updatePrices()
  priceFlash.value = true
  setTimeout(() => { priceFlash.value = false }, 600)
}

function getKaratPricePerGram(karat: string): number {
  const entry = karatPrices.value.find(k => k.label === karat)
  return entry?.php ?? 0
}

function getProductPrice(product: Product): number {
  const rawGoldCost = product.weightGrams * getKaratPricePerGram(product.karat)
  if (rawGoldCost === 0) return product.price // fallback to static price
  return Math.round(rawGoldCost * (1 + PROFIT_MARGIN))
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
  }).format(price)
}

export function useGoldPrice() {
  return {
    // State
    spotPriceUSD,
    spotChange,
    priceFlash,
    direction,
    karatPrices,
    // Constants
    BASE_SPOT_USD,
    GRAMS_PER_OZ,
    PHP_RATE,
    PROFIT_MARGIN,
    // Methods
    simulateFluctuation,
    getKaratPricePerGram,
    getProductPrice,
    formatPrice,
  }
}
