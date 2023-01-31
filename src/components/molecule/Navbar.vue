<template>
  <div class="navigation">
    <Title></Title>
    <Sections></Sections>
    <Login></Login>
  </div>
</template>

<script setup lang="ts">
import Title from "../atoms/Title.vue";
import Sections from "../atoms/Sections.vue";
import Login from "../atoms/LogIn.vue";
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
