<template>
  <div class="container">
    <div>
      <Title
        id="title"
        text="We Collaborate With 250++ Leading Top E Commerce and Brands"
      ></Title>
    </div>
    <div>
      <BrandList></BrandList>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandList from "./BrandList.vue";
import Title from "./Title.vue";
</script>

<style scoped>
.container {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
