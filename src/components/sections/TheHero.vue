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
  align-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 75px;
}

.welcome-component,
.big-avatar-component {
  width: 500px;
  height: 500px;
}
</style>
