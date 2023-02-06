<template>
  <div class="the-header" ref="container">
    <CompanyLogo
      :logo-title1="logoTitle1"
      :logo-title2="logoTitle2"
      :white-text="whiteText"
    ></CompanyLogo>
    <TheHeaderCenter :links="navbarLinks" />
    <TheHeaderRight />
  </div>
</template>

<script setup lang="ts">
import TheHeaderCenter from "@/components/molecules/TheHeaderCenter.vue";
import TheHeaderRight from "@/components/molecules/TheHeaderRight.vue";
import CompanyLogo from "../atoms/CompanyLogo.vue";

defineProps({
  logoTitle1: String,
  logoTitle2: String,
  navbarLinks: { type: Array<Object> },
});

let whiteText: boolean = false;
</script>

<style lang="css" scoped>
.the-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
