<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BrandSection from "./components/brands/BrandSection.vue";
import BrowseCategories from "./components/BrowseCategories.vue";
import FooterSection from "./components/footer/FooterSection.vue";
import Navbar from "./components/navbar/Navbar.vue";
import PopularProducts from "./components/popularProducts.vue";
import ProductsGrid from "./components/productsGrid/productsGrid.vue";
import TheHero from "./components/TheHero/TheHero.vue";
import WhyChoose from "./components/whyChooseUs/WhyChoose.vue";
</script>

<template>
  <Navbar></Navbar>
  <TheHero id="Home"></TheHero>
  <BrandSection></BrandSection>


  <BrowseCategories id="Categories"></BrowseCategories>

  <WhyChoose></WhyChoose>

  <Suspense>
    <ProductsGrid id="Products"></ProductsGrid>
  </Suspense>

  <Suspense>
    <PopularProducts></PopularProducts>
  </Suspense>

  <FooterSection></FooterSection>
  <!-- <RouterView /> -->
</template>

<!-- <style>
@media (width: 1024px) {
  .prova {
    min-height: 100vh;
    display: block;
    position: absolute;
    left:10rem;
    align-items: center;
  }
}
</style> -->