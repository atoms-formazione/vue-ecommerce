<template>
  <div class="flex-content">
    <div id="hero1">
      <HeroPresentation
        p1="Best Place to Buy"
        p2="Everything."
        p3="At Bachira, you can shop for all your favorite beauty brands, clothes,
    household products and more at a single place."
      ></HeroPresentation>
    </div>
    <div id="hero2">
      <HeroImage></HeroImage>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
import HeroPresentation from "./HeroPresentation.vue";
</script>

<style scoped>
.flex-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

#hero1 {
  flex: 3;
  margin-left: 4rem;
}
#hero2 {
  flex: 1;
}
</style>
