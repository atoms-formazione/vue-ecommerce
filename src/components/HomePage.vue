<script setup lang="ts">
import SponsorList from "./sections/SponsorList.vue";
import TheHero from "./sections/TheHero.vue";

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
});

// const heroProps = {
//   heroTextP1: "Best Place to Buy",
//   heroTextP2: "Everything.",
//   heroTextP3:
//     "At Bachira, you can shop for all your favorite beauty brands, clothes, household products and more at a single place.",
//   heroImageData: {
//     src: "Hero_Image.png",
//     alt: "shopping-lady",
//   },
// };
</script>

<template>
  <TheHero v-bind="heroProps" />
  <SponsorList v-bind="sponsorProps" />

  <div v-if="response">
    <div v-for="p in response.products" :key="p.id">
      {{ p.price }}
    </div>
  </div>
</template>

<style scoped></style>
