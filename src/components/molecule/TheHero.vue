<template>
  <div class="hero">
    <diV class="subtitle">
      <SubTitle></SubTitle>
    </diV>
    <div class="image">
      <ImaageHero></ImaageHero>
    </div>
  </div>
  <div>
    <BottomWrite></BottomWrite>
  </div>
  <div>
    <SponsorShip></SponsorShip>
  </div>
</template>

<script setup lang="ts">
import SubTitle from "../atoms/SubTitle.vue";
import ImaageHero from "../atoms/ImageHero.vue";
import BottomWrite from "../atoms/BottomWrite.vue";
import SponsorShip from "../atoms/SponsorShip.vue";
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  width: 100%;
}
.subtitle {
  margin: 3rem;
  width: 70%;
}
.image {
  flex: 1;
  width: 30%;
}
</style>
