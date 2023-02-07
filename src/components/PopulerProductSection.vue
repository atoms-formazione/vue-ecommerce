<template>
  <div class="list-products">
    <div id="products" class="titre">{{ titre }}</div>
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
import ProductComponent from "./ProductComponent.vue";
import { ref } from "vue";
const titre = ref("Populer Products From All Brands");
const products = await fetch("https://www.dummyjson.com/products?limit=12")
  .then((res) => res.json())
  .then((json) => {
    let res: any[] = [];
    json.products.forEach((e: any) => {
      res.push({
        id: e.id,
        name: e.title,
        price: e.price,
        urlImg: e.images[0],
      });
    });
    console.log(res);
    return res;
  });
</script>
<style scoped>
    .list-products{
        display: grid;
        grid-template-columns: repeat(4, 280px);
        grid-template-rows: 80px auto ;
        gap: 3rem;
        margin-left: 5rem;
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
    .product{
        
    }
</style>
