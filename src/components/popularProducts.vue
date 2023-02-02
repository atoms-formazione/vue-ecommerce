<template>
  <div>
    <TitleSection title-name="Popular Products under 99.99€"></TitleSection>
    <!-- <p class="titolo">Popular Products under 499.99€</p> -->
    <div class="container" v-if="response">
      <template v-for="product in response.products" :key="product.id">
        <!-- <div v-if="product.brand === 'Apple' || product.brand === 'Samsung'"> -->
        <div v-if="product.price < 99.99">
          <div class="img-container">
            <img
              class="product-image"
              :src="product.thumbnail"
              :alt="product.title"
            />
          </div>
          <p class="product-title">{{ product.title }}</p>
          <p class="product-price">{{ product.price }}.00 €</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleSection from "./TitleSection.vue";

const response = await fetch(`https://dummyjson.com/products`)
  .then((res) => res.json())
  .catch((error) => error);
</script>

<style scoped>
.titolo {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  width: 360px;
  margin: 5%;
}
.container {
  display: flex;
  overflow-x: scroll;
  gap: 2rem;
  margin: 5%;
  padding-right: 1rem;
}

.container::-webkit-scrollbar {
  display: none;
}

.img-container {
  width: 17rem;
  height: 23rem;
  /* border: 1px solid #D9D9D9; */
  border-radius: 30px;
  box-shadow: 10px 5px 5px #d9d9d9;
}
.product-image {
  border-radius: 30px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-title {
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--black);
}
.product-price {
  font-weight: 400;
  font-size: 1rem;
  color: var(--black);
}
</style>
