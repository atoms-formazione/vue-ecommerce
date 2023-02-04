<script setup lang="ts">
defineProps<{
  imgUrl: string;
  service: string;
  description: string;
}>();
</script>

<template>
  <div class="container-service">
    <img :src="imgUrl" :alt="service" />
    <h3>{{ service }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.container-service {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-service > img {
  height: 64px;
  margin: auto;
}

.container-service > h3 {
  margin: auto;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #101913;
}

.container-service > p {
  width: 266px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #535a56;
}
</style>
