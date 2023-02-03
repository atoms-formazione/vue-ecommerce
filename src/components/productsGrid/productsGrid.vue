<template>
  <div >
    <TitleSection title-name="Popular Products From All Brands"></TitleSection>
    <div class="wrapper" v-if="response">
      <div v-for="product in response.products" :key="product.id">
        <div class="img-container" >
            <img class="product-image" :src="product.thumbnail" :alt="product.title" >
            <div class="hide">{{ product.description }}</div>
        </div>
        <p class="product-title">{{ product.title }}</p>
        <p class="product-price">{{ product.price }}.00 €</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleSection from '../TitleSection.vue';

const response = await fetch(`https://dummyjson.com/products?limit=16`).then((res) => res.json()).catch((error) => error);
// console.log("response", response.products);

</script>

<style scoped>

.hide {
  display: none;
  background-color: white;
  opacity: .8;
  padding: 1rem;
  border-radius: 20px;
  z-index: 2;
  pointer-events: none;
  position: absolute;
  bottom: 5%;
  margin: 5%;
  color: red;
  font-weight: 700;
  z-index: 1;
}

.product-image:hover + .hide {
  display: block;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
align-self: center;
  margin: 5%;
}

.product-image:hover{
opacity: .5;
cursor: pointer;
}
.img-container{
width: 17rem;
height: 23rem;
/* border: 1px solid #D9D9D9; */
border-radius: 30px;
background-color: #D9D9D9;
box-shadow: 10px 5px 5px #D9D9D9;
}
.product-image{
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-title{
font-weight: 500;
font-size: 1.2rem;
color: var(--black);
}
.product-price{
font-weight: 400;
font-size: 1rem;
color: var(--black);
}

</style>
