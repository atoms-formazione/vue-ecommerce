<script setup lang="ts">
  import TheNavBar from './TheNavBar.vue';
  import TheHeroComponent from './TheHeroComponent.vue';
  import TheFooter from './TheFooter.vue';
</script>

<template>
  <div>
    <TheNavBar></TheNavBar>
  </div>
  <div class="example">
  <TheHeroComponent></TheHeroComponent>
  </div>
  <div>
  <TheFooter></TheFooter>
  </div>
</template>

<style scoped>
  .example{
    width: 100%;
  }
</style>
