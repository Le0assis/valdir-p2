<template>
  <div
    class="max-w-xs w-full mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 items-center
     hover:scale-105 hover:shadow-blue-800 hover:shadow-md transition-shadow duration-400 p-2  text-center"
  >

    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="mx-auto h-32 md:h-40 lg:h-48 object-contain mb-4 rounded-md"
    />

     
    <h2 class="text-lg font-semibold text-slate-800 text-center">
      {{ product.title }}
    </h2>

     
    <p class="hidden sm:block text-sm text-gray-500 mb-2 capitalize">{{ product.category }}</p>

    <div class="flex items-center justify-between text-sm mb-3">
      <span class="text-emerald-600 font-bold">$ {{ product.price }}</span>
      <span class="text-yellow-500 flex items-center  ">
        ⭐ {{ product.rating }}
      </span>
      <span class="text-blue-600 font-medium flex items-center gap-1 whitespace-nowrap">
        📦 {{ product.stock }}
      </span>
    </div>

    <router-link :to="`/products/${product.id}`" class="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm 
    font-semibold py-1 px-3 rounded-lg font-medium rounded">
        Ver detalhes
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object
});
</script>
