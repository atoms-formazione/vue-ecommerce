<script setup lang="ts">
fetch("https://dummyjson.com/products/12").then((res) => res.json());
import Item from "./Item.vue";
</script>

<template>
  <p class="text">Popular Products From<br />All Brands</p>
  <div class="items">
    <Item v-for="this.id in res.json" />
  </div>
</template>

<style scoped>
.text {
  font-weight: 700;
  font-size: 32px;
  margin-left: 15%;
}

.categories {
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  grid-auto-rows: auto;
  margin-left: 15%;
  margin-right: 15%;
}

.fashion {
  grid-column: 1 / 3;
  grid-row: 1;
  position: relative;
}

.skincare {
  grid-column: 1 / 3;
  grid-row: 2;
  position: relative;
}

.shoes {
  grid-column: 3;
  grid-row: 1 / 3;
  position: relative;
}

.electronic {
  grid-column: 4 / 6;
  grid-row: 1 / 3;
  position: relative;
}

img {
  border-radius: 30px;
}

.title {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;

  position: absolute;
  top: 10px;
  right: 15%;
}

.items {
  font-weight: 400;
  font-size: 16px;
}
</style>
