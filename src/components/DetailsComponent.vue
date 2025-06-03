<template>
<div class="p-6 border rounded-2xl flex flex-col md:flex-row gap-6 bg-blue-200 shadow-md">
  <img 
    :src="product.thumbnail"
    :alt="product.title"
    class="w-full sm:w-2/3 md:w-1/3 h-auto object-cover rounded-xl shadow-lg"
  > 

  <div class="flex flex-col justify-between w-full gap-6">
    

    <div class="text-left space-y-3">
      <h1 class="text-2xl font-extrabold text-gray-800">{{ product.title }}</h1>
      <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
      <router-link
        class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition"
        to="/products"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>
        <span>Voltar</span>
      </router-link>

      <p class="text-2xl font-bold text-emerald-600">${{ product.price }}</p>

      <button @click="toggleCart" class="text-gray-700 hover:text-black transition">
        <span v-if="inCart" v-html="cartFilled" />
        <span v-else v-html="cartOutline" />
      </button>
    </div>

  </div>
</div>

</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
    product: Object
    })

    const inCart = ref(false)

    const toggleCart = () => {
    inCart.value = !inCart.value
    }

    const cartOutline = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>`

    const cartFilled =`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
        </svg>
    ` 
</script>
