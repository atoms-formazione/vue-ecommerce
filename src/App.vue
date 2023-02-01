<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BrandSection from "./components/brands/BrandSection.vue";
import FooterSection from "./components/footer/FooterSection.vue";
import Navbar from "./components/navbar/Navbar.vue";
import PopularProducts from "./components/popularProducts.vue";
import ProductsGrid from "./components/productsGrid/productsGrid.vue";
import TheHero from "./components/TheHero/TheHero.vue";
</script>

<template>
  <Navbar></Navbar>
  <TheHero></TheHero>
  <BrandSection></BrandSection>
  
  <Suspense>
    <ProductsGrid></ProductsGrid>
  </Suspense>

  <Suspense>
    <PopularProducts></PopularProducts>
  </Suspense>
    
    <FooterSection></FooterSection>
    <!-- <RouterView /> -->
</template>
