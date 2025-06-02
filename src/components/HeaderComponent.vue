<template>
  <header class="bg-white shadow-md p-4 flex items-center justify-between">
    <div class="text-xl font-bold text-blue-600">Minha Loja</div>
    <nav>
      <RouterLink to="/HomeView" class="block py-2 md:py-0 hover:text-blue-600">Início</RouterLink>
      <RouterLink to="/ProductsView" class="block py-2 md:py-0 hover:text-blue-600">Produtos</RouterLink>
      <RouterLink to="ContactView" class="block py-2 md:py-0 hover:text-blue-600">Contato</RouterLink>
    </nav>
  </header>
</template>


<style scoped>

</style>
