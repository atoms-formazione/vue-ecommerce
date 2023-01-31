<script setup lang="ts">
import TheNavbar from "@/components/sections/TheNavbar.vue";
import TheHero from "@/components/sections/TheHero.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import CollabSection from "@/components/sections/CollabSection.vue";
import PopularProductsSection from "@/components/sections/PopularProductsSection.vue";
</script>

<template>
  <main>
    <TheNavbar />
    <TheHero></TheHero>
    <CollabSection></CollabSection>
    <PopularProductsSection></PopularProductsSection>
    <FooterSection></FooterSection>
  </main>
</template>
