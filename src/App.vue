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
  footerBlurb:
    "Bachira is an online store dealing with all product Bachira provide cheap, high quality, products to customers",
  menus: [
    {
      listTitle: "For Beginner",
      listContent: [
        {
          linkName: "About",
          linkPath: "/",
        },
        {
          linkName: "Career",
          linkPath: "/",
        },
        {
          linkName: "Promotion",
          linkPath: "/",
        },
      ],
    },
    {
      listTitle: "Overview",
      listContent: [
        {
          linkName: "Product",
          linkPath: "/",
        },
        {
          linkName: "Categories",
          linkPath: "/",
        },
        {
          linkName: "Pricing",
          linkPath: "/",
        },
      ],
    },
    {
      listTitle: "Explore Us",
      listContent: [
        {
          linkName: "Our Career",
          linkPath: "/",
        },
        {
          linkName: "Privacy",
          linkPath: "/",
        },
        {
          linkName: "Terms & Conditions",
          linkPath: "/",
        },
      ],
    },
  ],
  contactInfo: {
    listTitle: "Connect Us",
    email: "support@bachira.com",
    phone: "021 - 555 -456",
    address: "Sudirman, South Jakarta",
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
