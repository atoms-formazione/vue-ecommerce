<script setup lang="ts">
import OfferedServices from "../molecules/OfferedServices.vue";

const offeredServices = [
  {
    service: "Free Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "src/components/icons/DeliveryIcon.svg",
  },
  {
    service: "Trusted Platfrom",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "src/components/icons/TrustedIcon.svg",
  },
  {
    service: "Here For You",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    imgUrl: "src/components/icons/24-7Icon.svg",
  },
];
</script>

<template>
  <div class="container">
    <h2>Why Choose Ba<span class="text-green">chira</span>?</h2>
    <div>
      <OfferedServices
        v-for="(s, index) in offeredServices"
        :key="index"
        :imgUrl="s.imgUrl"
        :service="s.service"
        :description="s.description"
      ></OfferedServices>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 100px auto;
}

.container > h2 {
  width: 342px;
  margin: auto;
  margin-bottom: 60px;

  color: var(--black);
}

.container > h2,
.container > h2 > span {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
}

.container > div {
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
}
</style>
