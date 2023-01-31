<template>
  <div class="sponsor-list">
    <SponsorIntro :blurb="sponsorCopy" />
    <SponsorLogoList :sponsorList="sponsorList" />
  </div>
</template>

<script setup lang="ts">
import SponsorLogoList from "@/components/atoms/SponsorLogoList.vue";
import SponsorIntro from "@/components/atoms/SponsorIntro.vue";

const sponsorCopy: string =
  "We Collaborate With 250++ Leading Top E Commerce and Brands";

const sponsorList: string[] = [
  "tokopedia-logo.svg",
  "balenciaga-logo.svg",
  "adidas-logo.svg",
  "gucci-logo.svg",
  "bukalapak-logo.svg",
];
</script>

<style scoped>
.sponsor-list {
  width: 100%;
  padding-top: 1rem;
}
</style>
