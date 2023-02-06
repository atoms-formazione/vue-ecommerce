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
</script>

<style lang="css" scoped>
.login {
  height: 100%;
  padding: 0.25rem 0.5rem;
  color: var(--black);
  display: block;
  user-select: none;
}
.login:hover {
  opacity: 0.8;
}

.login:active {
  opacity: 0.6;
}

.header-right {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
}
</style>
