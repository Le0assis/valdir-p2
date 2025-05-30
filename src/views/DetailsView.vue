<template>
  <DetailsPage 
    v-if="product" 
    :product="product" 
  />
</template>

<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import DetailsPage from '../components/DetailsComponent.vue'

const product = ref(null)
const route = useRoute()
const id = route.params.id

onMounted(async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    product.value = response.data 
    console.log(product.value)
    
  } catch (error) {
    console.error('Erro ao buscar produto:', error.message)
  }
})
</script>
