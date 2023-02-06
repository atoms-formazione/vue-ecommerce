<script setup lang="ts">
import CategoriesMenu from "./sections/CategoriesMenu.vue";
import ProductList from "./sections/ProductList.vue";
import ProductListNike from "./sections/ProductListNike.vue";
import SponsorList from "./sections/SponsorList.vue";
import TheHero from "./sections/TheHero.vue";
import WhyChooseSection from "./sections/WhyChooseSection.vue";

const response = await fetch("https://dummyjson.com/products?limit=20").then(
  (res) => res.json()
);

const productData: Array<Object> = response.products.slice();

/*
    .then() => come nel try-catch ma se le cose vanno buon fine
    .catch() => se la chiamata API va a finire male
    .complete() => viene eseguito a prescindere, come il finally nel try-catch in Java
*/

defineProps({
  sponsorProps: Object,
  heroProps: Object,
  categoriesProps: Object,
  whyChooseProps: Object,
  productListIntro: String,
});
</script>

<template class="whole-page">
  <TheHero v-bind="heroProps" />
  <SponsorList v-bind="sponsorProps" />
  <CategoriesMenu v-bind="categoriesProps" />
  <WhyChooseSection v-bind="whyChooseProps" />
  <ProductList
    :products="productData"
    :product-list-intro="productListIntro"
    v-if="productData"
  />
  <ProductListNike />

  <!-- <div v-if="response">
    <div v-for="p in response.products" :key="p.id">
      {{ p.price }}
    </div>
  </div> -->
</template>

<style scoped>
.whole-page {
  width: 100vw;
}
</style>
