<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import TheHero from "./components/TheHero.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
    <TheHero></TheHero>
  </header>

  <RouterView />
</template>
