<script setup lang="ts">
const props = defineProps({
  active: String,
});
</script>

<template>
  <div class="links">
    <p :class="{ active: active === 'home' }">Home</p>
    <p :class="{ active: active === 'products' }">Products</p>
    <p :class="{ active: active === 'categories' }">Categories</p>
    <p :class="{ active: active === 'brands' }">Brands</p>
    <p :class="{ active: active === 'pricing' }">Pricing</p>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  color: #535a56;
  font-weight: 500;
  font-size: 16px;
  gap: 5rem;
}
.active {
  color: #101913;
}
</style>
