<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/sections/TheHeader.vue";

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

  <RouterView />
</template>
