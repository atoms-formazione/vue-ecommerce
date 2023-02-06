<template>
  <div class="product">
    <ImageCard :image-src="thumbnail" :linkPath="'/'" />
    <div
      v-if="brand !== undefined && title !== undefined && price !== undefined"
      class="product-info"
    >
      <p class="item-name">{{ brand }} {{ title }}</p>
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
  width: 100%;
  max-width: 15vw;
  aspect-ratio: 5/8;
}

.product:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
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
