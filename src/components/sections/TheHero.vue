<script setup lang="ts">
import BigAvatarVue from "../molecules/BigAvatar.vue";
import WelcomeIntroVue from "../molecules/WelcomeIntro.vue";
</script>

<template>
  <div class="container-hero">
    <WelcomeIntroVue></WelcomeIntroVue>
    <BigAvatarVue></BigAvatarVue>
  </div>
</template>

<style scoped>
.container-hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 75px;
}
</style>
