<script setup lang="ts">
import Navbar from "./molecule/Navbar.vue";
import TheHero from "./molecule/TheHero.vue";
import TheFooter from "./molecule/TheFooter.vue";

const response = await fetch("https://dummyjson.com/products?limit=10").then(
  (res) => res.json()
);

console.log("response", response.product);
</script>

<template>
  <main>
    <div v-if="response">
      <div v-for="product in response.product" :key="product.add">
        <p>{{ product.title }} - {{ product.price }},00 €</p>
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
    </div>

    <div>
      <Suspense>
        <HomePage></HomePage>
      </Suspense>
    </div>
  </main>

  <div>
    <Navbar></Navbar>
    <div>
      <TheHero></TheHero>
    </div>
    <div class="footer">
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: black;
  margin-top: 60px;
}
</style>
