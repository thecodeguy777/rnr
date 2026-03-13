<template>
  <footer class="bg-base-300 border-t border-primary/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <RnrLogo height="48px" variant="white" class="mb-4" />
          <p class="text-sm text-base-content/50 leading-relaxed max-w-xs">
            Fine gold jewelry crafted with generational mastery. Investment-grade pieces meant to be treasured and passed down.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-xs tracking-widest uppercase text-base-content/40 mb-6">Explore</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/collections" class="text-base-content/60 hover:text-primary transition-colors">Collections</NuxtLink></li>
            <li><NuxtLink to="/our-story" class="text-base-content/60 hover:text-primary transition-colors">Our Story</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-base-content/60 hover:text-primary transition-colors">Contact &amp; Inquire</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs tracking-widest uppercase text-base-content/40 mb-6">Get in Touch</h4>
          <ul class="space-y-3 text-sm text-base-content/60">
            <li>
              <a href="https://www.facebook.com/rnr.goldjewelry" target="_blank" rel="noopener" class="hover:text-primary transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </li>
            <li>Manila, Philippines</li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-base-content/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-base-content/30 tracking-wider">
          &copy; {{ new Date().getFullYear() }} RNR Gold Jewelry. All rights reserved.
        </p>
        <p class="text-xs text-base-content/20 tracking-wider uppercase">
          Fine Gold Since 1978
        </p>
      </div>
    </div>
  </footer>
</template>
