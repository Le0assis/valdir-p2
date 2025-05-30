<template>
    <div>
        <h1 class="text-3xl font-bold text-center mb-6"> Produtos</h1>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:-grid-cols-6">
            <ProductCard
                v-for="p in products"
                :key="p.name"
                :product="p"
            />

        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import ProductCard from '../components/ProductsComponent.vue'

    const products = ref([])

    const offset = ref(0)
    const limit = 6

    const api = axios.create({
        baseURL: 'https://dummyjson.com',
    });

    const getProducts = async() => {
        try {
            const response = await api.get(`/products?limit=${limit}&skip=${offset.value}`);
            const results = response.data.products

            console.log(results)

            products.value = results.map(product => ({
                id: product.id,
                title: product.title,
                category: product.category,
                description: product.description,
                thumbnail: product.thumbnail,
                price: product.price,
                rating: product.rating,
        }))
       console.log(products)
    }
            
        catch (error) {
            console.error('Erro ao buscar produtos:', error.message)
        }
    }

    
    onMounted(getProducts)
</script>