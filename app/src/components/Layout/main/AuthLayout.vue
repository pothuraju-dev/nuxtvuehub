<script setup lang="ts">
import TopNavbar from '@/components/Layout/TopNavbar.vue'
import Footer from '../footer/Footer.vue';
</script>

<template>
  <div class="flex flex-col transition-[margin]">
    <TopNavbar />
    <main class="min-h-[calc(100vh-var(--header-height))]">
      <slot />
    </main>
    <Footer />
  </div>
</template>