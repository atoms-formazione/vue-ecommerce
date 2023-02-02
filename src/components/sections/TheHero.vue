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
import HeroImage from "@/components/molecules/HeroImage.vue";
import HeroPresentation from "@/components/molecules/HeroPresentation.vue";
</script>

<style scoped>
.flex-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  box-sizing: border-box;
  padding: 0rem 1rem 4rem 8rem;
  padding-right: 1rem;
  padding-bottom: ;
}

/* * {
  border: solid 1px black;
} */
</style>
