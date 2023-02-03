<template>
  <div>
    <nav class="navbar">
      <NavbarLogo first="Ba" second="chira"></NavbarLogo>
      <NavbarLinks :links="['Home','Products','Categories','Brands','Pricing']"></NavbarLinks>
      <NavbarLogin></NavbarLogin>
    </nav>
  </div>
</template>

<script setup lang="ts">
import NavbarLogo from "./NavbarLogo.vue";
import NavbarLinks from "./NavbarLinks.vue";
import NavbarLogin from "./NavbarLogin.vue";
</script>

<style scoped>
.navbar {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
