<template>
  <div class="brand-products-list">
    <IntroText :class="'left-align'" :blurb="brandProductListIntro" />
    <div class="product-list">
      <div
        v-for="(p, index) of filteredProducts"
        :key="index"
        class="product-container"
      >
        <ProductCard v-bind="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProductCard from "@/components/molecules/ProductCard.vue";
import IntroText from "@/components/atoms/IntroText.vue";

const props = defineProps({
  products: { type: Array<any> },
  brandProductListIntro: String,
  selectedBrandName: String,
});

const filteredProducts = computed(() => {
  return props.products?.filter((p) => p.brand === props.selectedBrandName);
});
</script>

<style scoped>
.brand-products-list {
  padding: 2rem 12rem;
}

.product-list {
  flex-wrap: nowrap;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--black);
  scrollbar-gutter: stable;
  height: fit-content;
  padding: 1.5rem 2rem;
}

.product-list::-webkit-scrollbar:vertical {
  display: none;
}

.product-list::-webkit-scrollbar-button {
  display: none;
}

.product-list::-webkit-scrollbar-track-piece {
  background-color: lightgray;
  border-radius: 20rem;
}
.product-list::-webkit-scrollbar-thumb {
  border-radius: 20rem;
  background-color: var(--black);
  width: 0.5rem;
  height: 0.5rem;
}

.product-list::-webkit-scrollbar {
  height: 0.5rem;
  border-radius: 20rem;
}

.product-list::-webkit-scrollbar:hover {
  height: 0.5rem;
  opacity: 0.6;
}

.product-container {
  height: fit-content;
  min-width: 12.5vw;
}
</style>
