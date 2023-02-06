<template>
  <div class="sponsor-list">
    <IntroText :blurb="sponsorCopy" :class="'centered'" />
    <SponsorLogoList :sponsorList="sponsorList" />
  </div>
</template>

<script setup lang="ts">
import SponsorLogoList from "@/components/atoms/SponsorLogoList.vue";
import IntroText from "@/components/atoms/IntroText.vue";

defineProps({
  sponsorCopy: String,
  sponsorList: { type: Array<string> },
});
</script>

<style scoped>
.sponsor-list {
  width: 100%;
  padding: 1rem 12rem;
}
</style>
