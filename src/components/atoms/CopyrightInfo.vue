<template>
  <div class="copyright-container">
    <p :class="whiteText ? 'white' : 'black'">
      Copyright {{ year?.getFullYear() }} • All Rights Reserved
      {{ companyName }} by {{ holderName }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  year: Date,
  companyName: String,
  holderName: String,
  whiteText: Boolean,
});
</script>

<style scoped>
.copyright-container {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}

.black {
  color: black;
}
.white {
  color: white;
}
</style>
