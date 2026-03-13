<script setup lang="ts">
const { spotPriceUSD, spotChange, priceFlash, direction, karatPrices, simulateFluctuation, BASE_SPOT_USD, GRAMS_PER_OZ, PHP_RATE } = useGoldPrice()

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animFrame: number

let priceHistory: number[] = []
let marketPrice = 0
let tickCounter = 0

function formatPHP(amount: number): string {
  return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 0 }).format(amount)
}

function initCanvas() {
  if (!canvas.value) return
  const c = canvas.value
  const dpr = window.devicePixelRatio || 1
  const rect = c.getBoundingClientRect()
  c.width = rect.width * dpr
  c.height = rect.height * dpr
  ctx = c.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  const w = Math.ceil(rect.width)
  if (priceHistory.length === 0) {
    priceHistory = []
    let p = 0
    let trend = 0.02
    let momentum = 0
    for (let i = 0; i < w; i++) {
      if (Math.random() < 0.015) trend = (Math.random() - 0.45) * 0.15
      momentum = momentum * 0.92 + (Math.random() - 0.48 + trend) * 0.5
      p += momentum
      if (Math.random() < 0.008) p += (Math.random() - 0.5) * 4
      priceHistory.push(p)
    }
    marketPrice = p
  }
}

function drawFrame() {
  if (!ctx || !canvas.value) return
  const w = canvas.value.getBoundingClientRect().width
  const h = canvas.value.getBoundingClientRect().height

  tickCounter++
  if (tickCounter >= 5) {
    tickCounter = 0
    const trendBias = 0.02
    const momentum = (marketPrice - (priceHistory[priceHistory.length - 2] || marketPrice)) * 0.3
    const noise = (Math.random() - 0.48 + trendBias) * 0.7
    const spike = Math.random() < 0.01 ? (Math.random() - 0.5) * 5 : 0
    marketPrice += momentum + noise + spike
    priceHistory.push(marketPrice)

    const maxPoints = Math.ceil(w)
    if (priceHistory.length > maxPoints) {
      priceHistory = priceHistory.slice(priceHistory.length - maxPoints)
    }
  }

  const visiblePoints = priceHistory.slice(-Math.ceil(w))
  const min = Math.min(...visiblePoints)
  const max = Math.max(...visiblePoints)
  const range = Math.max(max - min, 1)
  const padding = h * 0.15

  ctx.clearRect(0, 0, w, h)

  ctx.beginPath()
  const startX = w - visiblePoints.length
  for (let i = 0; i < visiblePoints.length; i++) {
    const x = startX + i
    const y = padding + ((max - visiblePoints[i]) / range) * (h - padding * 2)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.lineTo(w, h)
  ctx.lineTo(startX, h)
  ctx.closePath()
  ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)'
  ctx.lineWidth = 1.5
  ctx.shadowColor = 'rgba(255, 255, 255, 0.3)'
  ctx.shadowBlur = 4
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'

  for (let i = 0; i < visiblePoints.length; i++) {
    const x = startX + i
    const y = padding + ((max - visiblePoints[i]) / range) * (h - padding * 2)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.shadowBlur = 0

  if (visiblePoints.length > 0) {
    const lastY = padding + ((max - visiblePoints[visiblePoints.length - 1]) / range) * (h - padding * 2)
    ctx.beginPath()
    ctx.arc(w - 1, lastY, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 255, 255, 1)'
    ctx.shadowColor = 'rgba(255, 255, 255, 0.9)'
    ctx.shadowBlur = 8
    ctx.fill()
    ctx.shadowBlur = 0
  }

  animFrame = requestAnimationFrame(drawFrame)
}

let priceInterval: ReturnType<typeof setInterval>

onMounted(() => {
  simulateFluctuation()
  priceInterval = setInterval(simulateFluctuation, 4000)
  nextTick(() => {
    initCanvas()
    animFrame = requestAnimationFrame(drawFrame)
  })
  window.addEventListener('resize', initCanvas)
})

onUnmounted(() => {
  clearInterval(priceInterval)
  cancelAnimationFrame(animFrame)
  window.removeEventListener('resize', initCanvas)
})
</script>

<template>
  <div class="w-full z-[60] bg-base-200 border-b border-base-300 select-none">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex items-center h-14 gap-6">

        <!-- Left: All karat prices (desktop) -->
        <div class="hidden lg:flex items-center gap-5 text-[10px] tracking-wider shrink-0">
          <div v-for="price in karatPrices" :key="price.label" class="flex items-center gap-1.5 text-base-content/40">
            <span>{{ price.label }}</span>
            <span class="text-base-content/60 font-mono">{{ formatPHP(price.php) }}/g</span>
          </div>
        </div>

        <!-- Spacer pushes the price box to the right -->
        <div class="flex-1"></div>

        <!-- Right: Gold price box with market chart -->
        <div class="max-w-xs w-full lg:w-auto flex flex-col items-center ticker-orange-bg rounded-sm px-5 py-1 shrink-0">
          <!-- Price row -->
          <div class="flex items-center gap-2">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                :class="direction === 'up' ? 'bg-success' : 'bg-error'"
              ></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5"
                :class="direction === 'up' ? 'bg-success' : 'bg-error'"
              ></span>
            </span>
            <span class="text-[9px] tracking-[0.25em] uppercase text-white/60 font-semibold">Gold</span>
            <span
              class="font-mono text-sm font-bold tracking-wide transition-all duration-300"
              :class="[
                priceFlash ? 'scale-105' : 'scale-100',
                priceFlash && direction === 'up' ? 'text-success' : '',
                priceFlash && direction === 'down' ? 'text-error' : '',
                !priceFlash ? 'text-white' : '',
              ]"
            >
              ${{ spotPriceUSD.toFixed(2) }}
            </span>
            <span
              class="text-[9px] font-mono px-1 py-0.5 rounded-sm flex items-center gap-0.5"
              :class="spotChange >= 0 ? 'bg-white/15 text-white' : 'bg-white/15 text-white/80'"
            >
              <svg v-if="spotChange >= 0" xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ Math.abs(spotChange).toFixed(2) }}%
            </span>
          </div>

          <!-- Market chart line below the price -->
          <div class="w-full h-4 relative">
            <canvas ref="canvas" class="absolute inset-0 w-full h-full" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.ticker-orange-bg {
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"),
    linear-gradient(135deg, #8B3A0F 0%, #C65D1A 30%, #d5521d 50%, #C65D1A 70%, #8B3A0F 100%);
  background-blend-mode: overlay;
}
</style>
