<script setup lang="ts">
useHead({ title: 'Contact — RNR Gold Jewelry' })

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="pt-20">
    <section class="py-24 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Info -->
          <div>
            <p class="text-xs tracking-[0.3em] uppercase text-primary/60 mb-3">Get in Touch</p>
            <h1 class="font-serif text-4xl md:text-5xl font-light mb-6">Contact Us</h1>
            <p class="text-base-content/50 leading-relaxed mb-8">
              Whether you're interested in a specific piece, have a custom request, or simply want to learn more — we'd love to hear from you.
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xs tracking-[0.2em] uppercase text-primary/60 mb-2">Visit Us</h3>
                <p class="text-base-content/60 text-sm">Manila, Philippines</p>
              </div>
              <div>
                <h3 class="text-xs tracking-[0.2em] uppercase text-primary/60 mb-2">Social</h3>
                <a
                  href="https://www.facebook.com/rnr.goldjewelry"
                  target="_blank"
                  rel="noopener"
                  class="text-base-content/60 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  RNR Gold Jewelry on Facebook
                </a>
              </div>
              <div>
                <h3 class="text-xs tracking-[0.2em] uppercase text-primary/60 mb-2">Hours</h3>
                <p class="text-base-content/60 text-sm">By appointment</p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <div v-if="!submitted" class="card bg-base-200 p-8">
              <form @submit.prevent="handleSubmit">
                <div class="space-y-5">
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend text-xs tracking-[0.2em] uppercase">Full Name</legend>
                    <input type="text" class="input w-full" placeholder="Juan Dela Cruz" required />
                  </fieldset>

                  <fieldset class="fieldset">
                    <legend class="fieldset-legend text-xs tracking-[0.2em] uppercase">Email Address</legend>
                    <input type="email" class="input w-full" placeholder="juan@email.com" required />
                  </fieldset>

                  <fieldset class="fieldset">
                    <legend class="fieldset-legend text-xs tracking-[0.2em] uppercase">Phone (optional)</legend>
                    <input type="tel" class="input w-full" placeholder="+63 9XX XXX XXXX" />
                  </fieldset>

                  <fieldset class="fieldset">
                    <legend class="fieldset-legend text-xs tracking-[0.2em] uppercase">Interested In</legend>
                    <select class="select w-full">
                      <option value="">Select a category</option>
                      <option value="rings">Rings</option>
                      <option value="necklaces">Necklaces</option>
                      <option value="earrings">Earrings</option>
                      <option value="bracelets">Bracelets</option>
                      <option value="pendants">Pendants</option>
                      <option value="custom">Custom Piece</option>
                      <option value="other">Other</option>
                    </select>
                  </fieldset>

                  <fieldset class="fieldset">
                    <legend class="fieldset-legend text-xs tracking-[0.2em] uppercase">Message</legend>
                    <textarea class="textarea w-full" rows="4" placeholder="Tell us what you're looking for..." required></textarea>
                  </fieldset>
                </div>

                <button type="submit" class="btn btn-primary w-full mt-8 tracking-[0.2em] uppercase text-xs">
                  Send Message
                </button>
              </form>
            </div>

            <!-- Success State -->
            <div v-else class="card bg-base-200 p-12 text-center">
              <div class="text-primary text-5xl font-serif mb-4">&#10003;</div>
              <h3 class="font-serif text-2xl mb-3">Message Sent</h3>
              <p class="text-base-content/50 text-sm mb-6">
                Thank you for your interest. We'll get back to you within 24 hours.
              </p>
              <button class="btn btn-ghost btn-sm tracking-[0.2em] uppercase text-xs" @click="submitted = false">
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
