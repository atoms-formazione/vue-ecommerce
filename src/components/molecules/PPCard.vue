<script setup lang="ts">
const card = defineProps<{
  name: string;
  price: string;
  urlImg: string;
}>();
</script>

<template>
  <div class="card">
    <div>
      <img :src="urlImg" :alt="name" />
    </div>
    <h4>{{ name }}</h4>
    <small>{{ price }}</small>
  </div>
</template>

<style scoped>
.card > div {
  margin-bottom: 15px;
}

.card > div > img {
  width: 280px;
  height: 380px;
  border-radius: 30px;
}

.card > h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.card > small {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: var(---black);
}
</style>
