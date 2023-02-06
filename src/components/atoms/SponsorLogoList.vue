<template>
  <div class="sponsor-container">
    <div class="xsponsor-logo" v-for="(l, index) in sponsorList" :key="index">
      <img :src="'./static/images/' + l" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  sponsorList: { type: Array<string> },
});
</script>

<style scoped>
.sponsor-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  column-gap: 4rem;
  row-gap: 2rem;
  padding: 3rem 0rem;
}

.xsponsor-logo {
  width: 10rem;
}

.xsponsor-logo > img {
  width: 100%;
  object-fit: contain;
}
</style>
