<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-100">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="mx-auto h-32 object-contain mb-4"
    />
    <h2 class="text-left capitalize font-bold text-black">
      {{ product.title }}
    </h2>
    <p class="text-sm text-gray-600">{{ product.category }}</p>

    <p class="my-4 text-gray-700">{{ product.description }}</p>

    <div class="space-x-2 flex items-left">
      <span class="text-green-600 font-bold">$ {{ product.price }}</span>
      <span class="text-yellow-500">⭐ {{ product.rating }}</span>
    </div>
  </div>
</template>

<script setup>
    defineProps({
    product: Object
    });
</script>