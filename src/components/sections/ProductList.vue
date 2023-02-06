<template>
  <div class="product-list" v-if="products !== undefined">
    <IntroText :class="'left-align'" :blurb="productListIntro" />
    <div class="product-grid">
      <div
        class="product-grid-cell"
        v-for="(p, index) in products.slice(0, 12)"
        :key="index"
      >
        <ProductCard v-bind="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroText from "@/components/atoms/IntroText.vue";
import ProductCard from "@/components/molecules/ProductCard.vue";

defineProps({
  productListIntro: String,
  products: { type: Array },
});
</script>

<style scoped>
.product-list {
  width: 100%;
  padding: 2rem 12rem;
}

.product-grid {
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 2.5rem;
}

.product-grid-cell {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
}
</style>
