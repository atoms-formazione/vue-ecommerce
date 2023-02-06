<script setup lang="ts">
defineProps<{
  id: number;
  categoryName: string;
  nItems: number;
  bgImg: string;
}>();
</script>

<template>
  <div
    class="bg-img"
    :class="'bg-img-' + id"
    :style="{ backgroundImage: bgImg }"
  >
    <div class="opacity-card"></div>
    <div class="info-card">
      <h4>{{ categoryName }}</h4>
      <p>{{ nItems }} items</p>
    </div>
  </div>
</template>

<style scoped>
.bg-img-1 {
  background-image: url("/src/components/icons/CategoryFashion.png");
  width: 500px;
  height: 180px;
}
.bg-img-2 {
  background-image: url("/src/components/icons/CategorySkincare.png");
  width: 500px;
  height: 180px;
}
.bg-img-3 {
  background-image: url("/src/components/icons/CategoryShoes.png");
  width: 287px;
  height: 386px;
}
.bg-img-4 {
  background-image: url("/src/components/icons/CategoryElectronic.png");
  width: 361px;
  height: 386px;
}

.bg-img {
  cursor: pointer;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}

.opacity-card {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: var(--black);
  opacity: 0.35;
}

.opacity-card:hover {
  opacity: 0.5;
}

.info-card {
  height: 50px;
  opacity: 1;

  position: absolute;
  right: 30px;
  top: 30px;
}

.info-card > h4 {
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #ffffff;
}

.info-card > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #ffffff;
}
</style>
