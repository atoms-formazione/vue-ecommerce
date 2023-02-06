<script setup lang="ts">
import CategoriesMenu from "./sections/CategoriesMenu.vue";
import SponsorList from "./sections/SponsorList.vue";
import TheHero from "./sections/TheHero.vue";
import WhyChooseSection from "./sections/WhyChooseSection.vue";

const response = await fetch("https://dummyjson.com/products?limit=10").then(
  (res) => res.json()
);

/*
    .then() => come nel try-catch ma se le cose vanno buon fine
    .catch() => se la chiamata API va a finire male
    .complete() => viene eseguito a prescindere, come il finally nel try-catch in Java
*/
console.log(response.products);

defineProps({
  sponsorProps: Object,
  heroProps: Object,
  categoriesProps: Object,
});
</script>

<template class="whole-page">
  <TheHero v-bind="heroProps" />
  <SponsorList v-bind="sponsorProps" />
  <CategoriesMenu v-bind="categoriesProps" />
  <WhyChooseSection />

  <div v-if="response">
    <div v-for="p in response.products" :key="p.id">
      {{ p.price }}
    </div>
  </div>
</template>

<style scoped>
.whole-page {
  width: 100vw;
}
</style>
