<template>
  <div
    class="rounded-2xl p-4 text-black shadow-md bg-white hover:shadow-xl 
    transition-shadow duration-300 transform hover:scale-105  flex flex-col justify-between h-full "
  >

    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="mx-auto h-32 md:h-40 lg:h-48 object-contain mb-4 rounded-md"
    />

     
    <h2 class="text-left capitalize font-semibold text-lg mb-1 line-clamp-2">
      {{ product.title }}
    </h2>

     
    <p class="text-sm text-gray-500 mb-2 capitalize">{{ product.category }}</p>

    <div class="flex items-center justify-between text-sm mb-3">
      <span class="text-green-600 font-bold">$ {{ product.price }}</span>
      <span class="text-yellow-500 flex items-center gap-1">
        ⭐ {{ product.rating }}
      </span>
      <span class="text-blue-600 font-medium flex items-center gap-1 whitespace-nowrap">
        📦 {{ product.stock }}
      </span>
    </div>

    <router-link :to="`/products/${product.id}`" class="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm 
    font-semibold py-2 px-4 rounded-lg">
        Ver detalhes
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object
});
</script>
