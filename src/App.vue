<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BrandSection from "./components/brands/BrandSection.vue";
import FooterSection from "./components/footer/FooterSection.vue";
import Navbar from "./components/navbar/Navbar.vue";
import TheHero from "./components/TheHero/TheHero.vue";
</script>

<template>
  <Navbar></Navbar>
  <TheHero></TheHero>
  <BrandSection></BrandSection>

  <FooterSection></FooterSection>
  <!-- <RouterView /> -->
</template>
