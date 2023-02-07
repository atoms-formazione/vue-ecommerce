<template>
  <div class="foot">
    <h4>{{ title }}</h4>
    <p>{{ parte1 }}</p>
    <p>{{ parte2 }}</p>
    <p>{{ parte3 }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  parte1: String,
  parte2: String,
  parte3: String,
});
</script>
<style scoped>
.foot {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
h4{
  width: 120px;
  height: 22px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
  margin-bottom: .75rem;
}
p{
  width: 165px;
  height: 20px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
}
</style>
