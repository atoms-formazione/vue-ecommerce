<script setup lang="ts">
import Navbar from "./molecule/Navbar.vue";
import TheHero from "./molecule/TheHero.vue";
import TheFooter from "./molecule/TheFooter.vue";
</script>

<template>
  <div>
    <Navbar></Navbar>
    <div>
      <TheHero></TheHero>
    </div>
    <div class="footer">
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: black;
  margin-top: 60px;
}
</style>
