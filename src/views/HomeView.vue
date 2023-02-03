<script setup lang="ts">
import TheNavbar from "@/components/sections/TheNavbar.vue";
import TheHero from "@/components/sections/TheHero.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import CollabSection from "@/components/sections/CollabSection.vue";
import PPSection from "@/components/sections/PPSection.vue";
</script>

<template>
  <main>
    <TheNavbar />
    <TheHero></TheHero>
    <CollabSection></CollabSection>
    <PPSection :allBrands="true" brandName="''" :gridStyle="true"></PPSection>
    <PPSection
      :allBrands="false"
      :brandName="'Nike'"
      :gridStyle="false"
    ></PPSection>
    <FooterSection></FooterSection>
  </main>
</template>
