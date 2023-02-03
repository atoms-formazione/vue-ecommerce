<template>
  <div class="sponsor-list">
    <SponsorIntro :blurb="sponsorCopy" />
    <SponsorLogoList :sponsorList="sponsorList" />
  </div>
</template>

<script setup lang="ts">
import SponsorLogoList from "@/components/atoms/SponsorLogoList.vue";
import SponsorIntro from "@/components/atoms/SponsorIntro.vue";

defineProps({
  sponsorCopy: String,
  sponsorList: { type: Array<string> },
});
</script>

<style scoped>
.sponsor-list {
  width: 100%;
  padding-top: 1rem;
}
</style>
