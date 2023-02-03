<template>
    <div v-if="response">
      <div v-for="product in response.product" :key="product.add">
        <div>
            <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div>
            <h5>
                {{ product.title }}
            </h5>
            <p> {{ product.price }},00 €</p>
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
.card{

}

.image {
    width: 499px;
    height: 399px;

}
</style>