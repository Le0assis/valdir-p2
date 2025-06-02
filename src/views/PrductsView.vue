<template>
    <div>


        <div class="grid grid-cols-2 md:grid-cols-4 md:grid-raws-3 lg:-grid-cols-6 gap-8">
            <ProductCard
                v-for="p in products"
                :key="p.name"
                :product="p"
            />

        </div>
        
        <div class="flex justify-center gap-4 m-6">
            <button @click = "previusProducts" :disabled = "offset === 0" class="btn font-bold bg-purple-400 text-black px-4 py-2 rounded hover:bg-purple-700 hover:text-white disabled:bg-gray-300">
                Back</button>
            <button @click = "nextProducts" class="btn font-bold bg-purple-400 text-black px-4 py-2 rounded hover:bg-purple-700 hover:text-white ">
                Next</button>
        </div>

    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import ProductCard from '../components/ProductsComponent.vue'

    const products = ref([])

    const offset = ref(0)
    const limit = 8

    const api = axios.create({
        baseURL: 'https://dummyjson.com',
    });

    const getProducts = async() => {
        try {
            const response = await api.get(`/products?limit=${limit}&skip=${offset.value}`);
            const results = response.data.products

            console.log(results)

            products.value = results.map(product => ({
                id:product.id,
                title: product.title,
                category: product.category,
                stock: product.stock,
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
    const nextProducts = () =>{
        offset.value += limit
        getProducts()
    }
    const previusProducts = () =>{
        if(offset.value >= limit){
            offset.value -= limit
            getProducts()
        }
    }

    
    onMounted(getProducts)
</script>