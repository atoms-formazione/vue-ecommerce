<template>
    <div class="products-brand">
    <div id="brands" class="titre">{{ titre }}</div>
    <div class="product" v-for="product in products" :key="product.id">
      <ProductComponent
        :image="product.urlImg"
        :name="product.name"
        :price="product.price"
      ></ProductComponent>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductComponent from './ProductComponent.vue';
import { ref } from 'vue';
const titre = ref("Populer Products From Apple");
const products = await fetch("https://www.dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    let res: any[] = [];
    json.products.forEach((e: any) => {
      res.push({
        id: e.id,
        name: e.title,
        price: e.price,
        urlImg: e.images[0],
        brand: e.brand,
      });
    });
    console.log(res);
    return res;
    /* return res.filter(apple => apple.brand ==='Apple'); */

  });
</script>
<style scoped>
    .products-brand{
        display: grid;
        grid-template-columns: repeat(auto, 280px) ;
        grid-template-rows: 80px 380px ;
        gap: 3rem;
        margin-left: 5rem;
        margin-top: 3rem;
        overflow-x: scroll; 
    }
    .titre{
        grid-column: 1/5;
        grid-row: 1;
        width: 360px;
        height: 80px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.3px;
        color: #101913;
    }
</style>