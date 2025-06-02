<template>
    <div>
        <div class="relative w-full md:w-[500px] mx-auto items-center">
            <div class="relative">
                <input
                    type="text"
                    v-model="search"
                    placeholder="Buscar produto..."
                    class="w-full p-3 border border-gray-300 rounded"
                />

                <div
                    v-if="search && filteredProducts.length && showMenu == false"
                    class="absolute z-50 bg-white w-full border border-gray-300 rounded shadow max-h-60 overflow-y-auto"
                >
                    <ul>
                    <li
                        v-for="product in filteredProducts"
                        :key="product.id"
                        class="p-2 border-b hover:bg-gray-100 cursor-pointer"
                    >
                        <router-link :to= "`/products/${product.id}`">
                            {{ product.title }}
                        </router-link>
                    </li>
                    </ul>
                </div>
            </div>

            <div
            @click="toggleMenu"
            class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>

            <div v-if="showMenu"
            class="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                <ul class="py-2 text-sm text-gray-700">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mais vendidos</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Preço: menor</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Preço: maior</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Em promoção</li>
                </ul>
            </div>
        </div>


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
    import {ref, onMounted, computed} from 'vue'
    import axios from 'axios'
    import ProductCard from '../components/ProductsComponent.vue'

    const products = ref([])

    const offset = ref(0)
    const limit = 8
    const showMenu = ref(false)
    const search = ref('')
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

    function toggleMenu() {
     showMenu.value = !showMenu.value
    }
    
    const filteredProducts = computed(() =>
    products.value.filter(product =>
        product.title.toLowerCase().includes(search.value.toLowerCase())
    )
    )
    onMounted(getProducts)
</script>