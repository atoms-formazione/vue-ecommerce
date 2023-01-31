<script setup lang="ts"></script>

<template>
  <div class="buttons">
    <p class="login">Login</p>
    <button class="register">Register</button>
  </div>
</template>

<style>
.buttons {
  display: flex;
  font-weight: 500;
  font-size: 16px;
  gap: 1rem;
}
.login {
  color: #101913;
}

.register {
  background-color: #3c9379;
  color: #ffffff;
  border: 0px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  width: 102px;
  height: 50px;
}
</style>
