<template>
  <div>
    <img src="{{ partner }}" alt="immage-partner" />
  </div>
</template>
<script setup lang="ts">
/* const props = ({
    partner: String,
}) */
type PartnerProps = {
  partner: string;
};
const props = defineProps<PartnerProps>();
</script>
<style></style>
