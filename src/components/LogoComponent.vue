<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="logo">
    <h2>{{  startLogo }}<span>{{ endLogo }}</span></h2>
  </div>
</template>
<script setup lang="ts">
type LogoProps = {
  startLogo: string,
  endLogo: string,
}
const props = defineProps<LogoProps>();
</script>
<style>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: #101913;

}
.logo h2 span {
  color: #3c9379;
  width: 123px;
  height: 36px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1.5px;
}
.logo h2 {
  color: #101913;
  width: 123px;
  height: 36px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1.5px;
}
</style>
