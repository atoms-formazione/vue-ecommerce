<template>
    <div class="nav-bar">
        <NavBarLogoComponent></NavBarLogoComponent>
        <NavBarMenu></NavBarMenu>
        <LoginComponent></LoginComponent>
    </div>
</template>
<script setup lang="ts">
import NavBarLogoComponent from './NavBarLogoComponent.vue';
import NavBarMenu from './NavBarMenu.vue';
import LoginComponent from './LoginComponent.vue';
</script>
<style>
.nav-bar{
    margin-top: 2rem;
    margin-left: 3rem;
    /* margin-right: 3rem; */
   /*  padding-right: 3rem; */
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    }
</style>