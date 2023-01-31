<template>
  <div class="logo">
    <!--<h3>{{ logo }}</h3>-->
    <h3>Ba<span>chira</span></h3>
  </div>
</template>
<script setup lang="ts">
/*const props = defineProps({
  logo: string,
});*/
/*import { ref } from "vue";
const logo = ref("Bachira");*/
</script>
<style>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.logo h3 span{
  color: #3C9379;
}
.logo h3{
  color: #101913;
}
</style>
