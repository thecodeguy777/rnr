<script setup lang="ts">
useHead({ title: 'Our Story — RNR Gold Jewelry' })
</script>

<template>
  <div>
    <!-- Hero: Full-bleed image -->
    <section class="relative min-h-[70vh] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80"
        alt="Goldsmith workshop"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
      <div class="relative z-10 px-6 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
        <p class="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-3">Since 1978</p>
        <h1 class="font-serif text-4xl md:text-6xl font-light tracking-wide text-white">Our Story</h1>
      </div>
    </section>

    <!-- The Beginning -->
    <section class="py-20 lg:py-28 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">The Beginning</p>
          <h2 class="font-serif text-2xl md:text-4xl font-light">Where It All Started</h2>
        </div>
        <div class="space-y-6 text-base-content/60 leading-relaxed text-center max-w-2xl mx-auto text-sm">
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
    </div>

    <!-- Generation to Generation: 50/50 Split -->
    <section class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center bg-base-200 p-10 lg:p-20">
        <div class="max-w-md">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-4">The Legacy</p>
          <h2 class="font-serif text-2xl md:text-4xl font-light leading-snug mb-6">
            Generation to<br />Generation
          </h2>
          <div class="space-y-4 text-base-content/50 leading-relaxed text-sm">
            <p>
              The craft was passed from grandfather to father, and from father to the hands that shape gold today. Each generation refined the techniques, but the philosophy never changed.
            </p>
            <p>
              We don't chase trends. We don't cut corners. Every ring, every chain, every bracelet is made with the same reverence for the material and the same dedication to permanence.
            </p>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden aspect-square lg:aspect-auto">
        <img
          src="https://images.unsplash.com/photo-1602752250015-52934bc45613?w=1000&q=80"
          alt="Gold necklace detail"
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <!-- Values Grid -->
    <section class="py-20 lg:py-28 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">What We Believe</p>
          <h2 class="font-serif text-2xl md:text-4xl font-light">Our Principles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="text-primary text-3xl font-serif mb-4">I</div>
            <h3 class="font-serif text-lg mb-3">Timeless Over Trendy</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              We design pieces that look as beautiful in fifty years as they do today. Gold doesn't go out of style.
            </p>
          </div>
          <div class="text-center">
            <div class="text-primary text-3xl font-serif mb-4">II</div>
            <h3 class="font-serif text-lg mb-3">Craft Before Commerce</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              Every piece is made by hand. We take the time to get it right — jewelry created with intention and care.
            </p>
          </div>
          <div class="text-center">
            <div class="text-primary text-3xl font-serif mb-4">III</div>
            <h3 class="font-serif text-lg mb-3">Gold as Legacy</h3>
            <p class="text-base-content/50 text-sm leading-relaxed">
              Fine gold holds its value. You're not just purchasing jewelry — you're securing an asset your children will treasure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-6 lg:px-12 bg-base-200">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-serif text-2xl md:text-4xl font-light mb-6">Begin Your Legacy</h2>
        <p class="text-base-content/50 leading-relaxed mb-8 text-sm">
          Browse our collections and find the piece that speaks to you.
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/collections" class="btn btn-primary btn-sm tracking-[0.2em] uppercase text-[10px] px-8">
            View Collections
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-ghost btn-sm tracking-[0.2em] uppercase text-[10px] border border-base-300 px-8">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
