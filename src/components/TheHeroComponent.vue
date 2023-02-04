<template>
  <div class="hero">
    <DescriptionHero class="description-hero"></DescriptionHero>
    <AvatarHero class="image-hero"></AvatarHero>
  </div>
  <div class="image"></div>
</template>
<script setup lang="ts">
import DescriptionHero from "./DescriptionHero.vue";
import AvatarHero from "./AvatarHero.vue";
</script>
<style>
.hero {
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
}
.hero>.image-hero{
  margin-top: -4rem;
  display: flex;
  justify-content: flex-end;
  width: 760px;
}
</style>
