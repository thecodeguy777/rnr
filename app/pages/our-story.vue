<script setup lang="ts">
useHead({ title: 'Our Story — RNR Gold Jewelry' })
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      image="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80"
      height="min-h-[60vh]"
    >
      <p class="text-xs tracking-[0.3em] uppercase text-primary/80 mb-4">Since 1978</p>
      <h1 class="font-serif text-4xl md:text-6xl font-light tracking-wide">Our Story</h1>
    </HeroSection>

    <!-- The Beginning -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">The Beginning</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light">Where It All Started</h2>
        </div>
        <div class="space-y-6 text-base-content/60 leading-relaxed text-center max-w-2xl mx-auto">
          <p>
            In the late 1970s, in a modest workshop in the Philippines, a young craftsman began working with gold. He had learned from the old masters — men who understood that gold was more than metal. It was trust, legacy, and love made tangible.
          </p>
          <p>
            With nothing but a torch, a crucible, and steady hands, he shaped his first pieces. Word spread. Families came — not for fashion, but for heirlooms. Pieces that would outlast their owners and be passed to the next generation.
          </p>
        </div>
      </div>
    </section>

    <!-- Full-width Image Break -->
    <div class="relative h-[50vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80"
        alt="Gold craftsmanship"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Generation to Generation -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">The Legacy</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light">Generation to Generation</h2>
        </div>
        <div class="space-y-6 text-base-content/60 leading-relaxed text-center max-w-2xl mx-auto">
          <p>
            The craft was passed from grandfather to father, and from father to the hands that shape gold today. Each generation refined the techniques, but the philosophy never changed: create pieces worthy of being inherited.
          </p>
          <p>
            We don't chase trends. We don't cut corners. Every ring, every chain, every bracelet is made with the same reverence for the material and the same dedication to permanence that defined our grandfather's work.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Grid -->
    <section class="py-24 px-6 lg:px-12 bg-base-200">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">What We Believe</p>
          <h2 class="font-serif text-3xl md:text-4xl font-light">Our Principles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center px-6">
            <div class="text-primary text-4xl font-serif mb-4">I</div>
            <h3 class="font-serif text-xl mb-3">Timeless Over Trendy</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              We design pieces that look as beautiful in fifty years as they do today. Gold doesn't go out of style — and neither should your jewelry.
            </p>
          </div>
          <div class="text-center px-6">
            <div class="text-primary text-4xl font-serif mb-4">II</div>
            <h3 class="font-serif text-xl mb-3">Craft Before Commerce</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              Every piece is made by hand. We take the time to get it right, because you deserve jewelry that was created with intention and care.
            </p>
          </div>
          <div class="text-center px-6">
            <div class="text-primary text-4xl font-serif mb-4">III</div>
            <h3 class="font-serif text-xl mb-3">Gold as Legacy</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              Fine gold holds its value. When you buy from us, you're not just purchasing jewelry — you're securing an asset your children will treasure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl font-light mb-6">Begin Your Legacy</h2>
        <p class="text-base-content/50 leading-relaxed mb-10">
          Browse our collections and find the piece that speaks to you. Every item in our catalog carries decades of mastery and the promise of permanence.
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-widest uppercase text-xs px-8">
            View Collections
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-ghost btn-sm tracking-widest uppercase text-xs border border-base-content/10 px-8">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
