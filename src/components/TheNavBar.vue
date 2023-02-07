<template>
  <div class="nav-bar">
    <LogoComponent :startLogo="'Bar'" :endLogo="'chira'" class="logo"></LogoComponent>
    <NavBarMenu id="home"></NavBarMenu>
    <LoginComponent class="login-register"></LoginComponent>
  </div>
</template>
<script setup lang="ts">
import LogoComponent from "./LogoComponent.vue";
import NavBarMenu from "./NavBarMenu.vue";
import LoginComponent from "./LoginComponent.vue";
</script>
<style>
.nav-bar {
  margin-top: 2rem;
  margin-left: 5rem;
  margin-right: 6.5rem;
  /*  padding-right: 3rem; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.logo{
  font-weight: bold;
}
/* .login-register{
  position: relative;
  right: 6rem;
} */
</style>
