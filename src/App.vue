<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'

</script>

<template >
  <Header />

  <div class="bg-neutral-100 p-8 h-full">
    <RouterView />
  </div>
  <Footer />
  
</template>
