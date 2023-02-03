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
});
</script>

<template>
  <TheHero />
  <SponsorList v-bind="sponsorProps" />
  <div v-if="response">
    <div v-for="p in response.products" :key="p.id">
      {{ p.price }}
    </div>
  </div>
</template>

<style scoped></style>
