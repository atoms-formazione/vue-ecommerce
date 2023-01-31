<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import TheHeader from "@/components/sections/TheHeader.vue";
import TheHero from "./components/sections/TheHero.vue";

const navbar = {
  logoTitle1: "Ba",
  logoTitle2: "chira",
  navbarLinks: [
    {
      linkName: "Home",
      linkPath: "",
    },
    {
      linkName: "Products",
      linkPath: "",
    },
    {
      linkName: "Categories",
      linkPath: "",
    },
    {
      linkName: "Brands",
      linkPath: "",
    },
    {
      linkName: "Pricing",
      linkPath: "",
    },
  ],
};
</script>

<template>
  <TheHeader v-bind="navbar" />
  <!-- <TheHero /> -->
  <Suspense>
    <RouterView />
  </Suspense>
</template>
