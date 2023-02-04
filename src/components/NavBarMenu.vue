<script setup lang="ts">
/* type NavBarMenuProps = {
    menu: string[]
}

const props = defineProps<NavBarMenuProps>();
 */
</script>
<template>
  <!-- <div>{{ menu }}</div> -->
  <div class="menu">
    <a href="#home">Home</a>
    <a href="#products">Products</a>
    <a href="#categories">Categories</a>
    <a href="#brands">Brands</a>
    <a href="#pricing">Pricing</a>
  </div>
</template>
<style>
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}
.menu a {
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  color: #101913;
}
</style>
