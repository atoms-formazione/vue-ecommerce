<template>
  <div class="product">
    <ImageCard :image-src="thumbnail" :linkPath="'/'" />
    <div
      v-if="brand !== undefined && title !== undefined && price !== undefined"
      class="product-info"
    >
      <p class="item-brand">{{ brand }}</p>
      <p class="item-name">{{ title }}</p>
      <p class="item-prices">$ {{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCard from "@/components/atoms/ImageCard.vue";

defineProps({
  brand: String,
  title: String,
  thumbnail: String,
  price: Number,
});
</script>

<style scoped>
.product {
  height: 100%;
  width: 100%;
  max-width: 15vw;
  max-height: 24vw;
  aspect-ratio: 5/8;
}

.product:hover {
  transform: scale(1.1);
  transition-duration: var(--short-transition);
}

.product-thumbnail {
  width: 100%;
  display: block;
  aspect-ratio: 4/5;
}

.product-info {
  margin-top: 1rem;
}

.item-brand {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.1rem;
}
.item-name {
  font-size: 1.2rem;
  font-weight: 500;
  width: 100%;
  text-align: left;
}
.item-price {
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
}
</style>
