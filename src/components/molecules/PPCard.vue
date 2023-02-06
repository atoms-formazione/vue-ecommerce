<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  price: string;
  urlImg: string;
}>();
</script>

<template>
  <div class="card" :id="'pp-card-' + id">
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

  object-fit: cover;

  cursor: pointer;
}

.card > div > img:hover {
  opacity: 0.6;
}

.card > h4 {
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.card > small {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: var(---black);
}
</style>
