S
<template>
  <div class=" ">
    <h2 class="">Populer Products From All Brands</h2>
    <div v-if="response">
      <div v-for="product in response.products" :key="product.id">
        <div class="">
          <div class="">
            <img :src="product.thumbnail" :alt="product.title" class="" />
          </div>
        </div>
        <h3 class="">{{ product.title }} - {{ product.brand }}</h3>
        <h4>{{ product.price }}$</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const response = await fetch("https://dummyjson.com/products?limit=10").then(
  (res) => res.json()
);
</script>

<style scoped>
.card {
}

.image {
  width: 499px;
  height: 399px;
}
</style>
