<script setup lang="ts">
import TheNavBar from "./TheNavBar.vue";
import TheHeroComponent from "./TheHeroComponent.vue";
import ThePartner from "./ThePartner.vue";
import TheFooter from "./TheFooter.vue";
import SectionCategory from "./SectionCategory.vue";
import ServicesSection from "./ServicesSection.vue";
</script>

<template>
  <div>
    <TheNavBar></TheNavBar>
  </div>
  <div class="example">
    <TheHeroComponent></TheHeroComponent>
  </div>
  <div>
    <ThePartner></ThePartner>
  </div>
  <div>
    <SectionCategory></SectionCategory>
  </div>
  <div>
    <ServicesSection></ServicesSection>
  </div>
  <div>
    <TheFooter></TheFooter>
  </div>
</template>

<style scoped>
.example {
  width: 100%;
}

</style>
