<template>
  <div class="flex-content">
    <div id="hero1">
      <HeroPresentation
        :p1="heroTextP1"
        :p2="heroTextP2"
        :p3="heroTextP3"
        :hero-button-data="heroButtonData"
      ></HeroPresentation>
    </div>
    <div id="hero2">
      <HeroImage v-bind="heroImageData"></HeroImage>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroImage from "@/components/molecules/HeroImage.vue";
import HeroPresentation from "@/components/molecules/HeroPresentation.vue";

defineProps({
  heroTextP1: String,
  heroTextP2: String,
  heroTextP3: String,
  heroButtonData: Object,
  heroImageData: Object,
});
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
}

/* * {
  border: solid 1px black;
} */
</style>
