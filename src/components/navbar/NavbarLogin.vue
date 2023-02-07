<template>
  <div class="login-register">
    <a class="login">Login</a>
    <button class="register">Register</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.register {
  border: none;
  background-color: var(--green);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 18px;
  padding-left: 18px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.login {
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
