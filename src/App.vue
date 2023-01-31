<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
import TheHero from "./components/TheHero/TheHero.vue";
</script>

<template>
  <Navbar></Navbar>
  <TheHero></TheHero>

  <!-- <RouterView /> -->
</template>
