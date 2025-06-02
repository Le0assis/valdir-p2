<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'

</script>

<template >
  <Header />

  <div class="bg-blue-200 p-8">
    <RouterView />
  </div>
  <Footer />
  
</template>
