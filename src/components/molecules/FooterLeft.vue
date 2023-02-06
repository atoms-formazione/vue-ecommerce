<template>
  <div class="footer-content">
    <CompanyLogo :white-text="true" v-bind="logoProperties" />
    <p class="blurbo-texto">{{ footerBlurb }}</p>
  </div>
</template>

<script setup lang="ts">
import CompanyLogo from "../atoms/CompanyLogo.vue";
defineProps({
  logoProperties: Object,
  footerBlurb: String,
});
</script>

<style scoped>
.footer-content {
  max-width: 100%;
}

.blurbo-texto {
  display: block;
  color: white;
  max-width: 23rem;
  font-size: 1rem;
  line-height: 1.3rem;
  letter-spacing: 0.02rem;
  font-weight: 400;
}
</style>
