<template>
    
        <div >
    <p class="titolo">Popular Products From Apple</p>
    <div class="container" v-if="response">
      <div v-for="product in response.products" :key="product.id">
        <div class="img-container">
            <img class="product-image" :src="product.thumbnail" :alt="product.title">
        </div>
        <p class="product-title">{{ product.title }}</p>
        <p class="product-price">{{ product.price }}.00 €</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const response = await fetch(`https://dummyjson.com/products?limit=16`).then((res) => res.json()).catch((error) => error);

// if(response.products.brand == 'Apple'){
// console.log("prodotto apple")
// }
</script>

<style scoped>
.titolo{
font-weight: 700;
font-size: 32px;
line-height: 40px;
letter-spacing: 0.3px;
width: 360px;
margin: 5%;
}
.container{
    display: flex;
    overflow-x: scroll;
    gap: 2rem;
    margin: 5%;
    margin-top: 0;
  }

.container::-webkit-scrollbar{
    display: none;
  }

.img-container{
width: 17rem;
height: 23rem;
/* border: 1px solid #D9D9D9; */
border-radius: 30px;
background-color: #D9D9D9;

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