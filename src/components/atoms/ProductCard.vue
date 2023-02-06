<template>
  <div class=" ">
    <h2 class="">
      Populer Products From
      All Brands
    </h2>
    <div class="">
      <div v-for="{ id, thumbnail, title, price, brand } in products" :key="id">
        <div class="">
          <div
            class=""
          >
            <img :src="thumbnail" :alt="title" class="">
          </div>
        </div>
        <h3 class="">
          {{ title }} - {{ brand }}
        </h3>
        <h4>{{ price }}$</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = ref([]);

await fetch('https://dummyjson.com/products/?limit=12')
  .then(res => res.json())
  .then(data => products.value = data.products)
</script>

<style scoped>
.card{

}

.image {
    width: 499px;
    height: 399px;

}
</style>