<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue"; 
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <TheNavBar></TheNavBar>
  </header>

  <RouterView />
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>
<style>
* {
  font-family: "Manrope", sans-serif;
}
</style>
