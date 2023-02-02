<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/sections/TheHeader.vue";
import TheFooter from "./components/sections/TheFooter.vue";

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

const footerData = {
  year: new Date(),
  companyName: "Bachira",
  holderName: "Giatinaja",
  logoProperties: {
    logoTitle1: "Ba",
    logoTitle2: "chira",
  },
};
</script>

<template>
  <TheHeader v-bind="navbar" />
  <Suspense>
    <RouterView />
  </Suspense>
  <TheFooter v-bind="footerData" />
</template>
