<template>
  <div class="the-header">
    <div class="header-logo">
      <span class="black">{{ logoTitle1 }}</span
      ><span class="green">{{ logoTitle2 }}</span>
    </div>
    <TheHeaderCenter :links="navbarLinks" />
    <TheHeaderRight />
  </div>
</template>

<script setup lang="ts">
import TheHeaderCenter from "@/components/molecules/TheHeaderCenter.vue";
import TheHeaderRight from "@/components/molecules/TheHeaderRight.vue";

defineProps({
  logoTitle1: String,
  logoTitle2: String,
  navbarLinks: [],
});
</script>

<style lang="css" scoped>
.black {
  color: #101913;
}
.green {
  color: #3c9379;
}

.the-header {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.header-logo {
  font-size: 2rem;
  font-weight: 700;
}
</style>
