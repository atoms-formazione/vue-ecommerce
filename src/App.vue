<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import TheHero from "./components/TheHero.vue";
import CategoriesList from "./components/CategoriesList.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
    <TheHero></TheHero>
  </header>
  <body>
    <CategoriesList></CategoriesList>
  </body>
  <RouterView />
</template>
