<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>

  <header>HEADER</header>

  <RouterView />
</template>
