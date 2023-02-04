<script setup lang="ts">
import IconBox from "./IconBox.vue";
import Delivery from "./icons/Delivery.svg";
import Trusted from "./icons/Trusted.svg";
import Tw47 from "./icons/24-7.svg";
</script>

<template>
  <p class="title">
    <span class="black">Why Choose Ba</span><span class="green">chira</span
    ><span class="black">?</span>
  </p>
  <div class="boxes">
    <IconBox
      :icon="Delivery"
      :title="'Free Delivery'"
      :text="'Lorem ipsum dolor sit amet, consectetu\nadipiscing elit, sed do eiusmod tempor'"
    />
    <IconBox
      :icon="Trusted"
      :title="'Trusted Platform'"
      :text="'Lorem ipsum dolor sit amet, consectetu\nadipiscing elit, sed do eiusmod tempor'"
    />
    <IconBox
      :icon="Tw47"
      :title="'Here For You'"
      :text="'Lorem ipsum dolor sit amet, consectetu\nadipiscing elit, sed do eiusmod tempor'"
    />
  </div>
</template>

<style scoped>
.title {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
}

.black {
  color: #101913;
}

.green {
  color: #3c9379;
}
.boxes {
  display: flex;
  gap: 5%;
  white-space: pre-wrap;
  justify-content: center;
}
</style>
