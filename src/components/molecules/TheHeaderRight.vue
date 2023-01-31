<template>
  <div class="header-right">
    <a class="login">Login</a>
    <div class="register">
      <StandardButton buttonValue="Register" buttonPath="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import StandardButton from "@/components/atoms/StandardButton.vue";
import { createFunctionExpression } from "@vue/compiler-core";
</script>

<style lang="css" scoped>
.login {
  padding-top: 0.25rem;
  color: #101913;
  display: block;
}
.login:active {
  color: black;
  background-color: black;
}

.login:hover {
  background-color: grey;
}

.header-right {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
}
</style>
