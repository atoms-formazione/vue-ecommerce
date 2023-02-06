<script setup lang="ts">
import { ref } from "vue";
import Item from "./Item.vue";
const data = ref(null);
const error = ref(null);
await fetch("https://dummyjson.com/products?limit=12")
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));
</script>

<template>
  <p class="text">Popular Products From<br />All Brands</p>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data" class="items">
    <Item
      v-for="product in data.products"
      v-bind:key="product.id"
      :image="product.thumbnail"
      :title="product.title"
      :cost="product.price"
    />
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.text {
  font-weight: 700;
  font-size: 32px;
  margin-left: 15%;
}

.items {
  margin-left: 15%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: auto;
}
</style>
