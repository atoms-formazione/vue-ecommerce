<template>
  <div>
    <p>Copyright {{ year }} • All Rights Reserved Bachira by Giatinaja</p>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({
  year: Date,
});

const year = new Date().getFullYear;
</script>

<style scoped>
div {
  color: white;
}
</style>
