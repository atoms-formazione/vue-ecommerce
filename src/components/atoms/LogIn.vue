<template>
  <div class="buttons">
    <button id="login">Login</button>
    <button id="register">Register</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: auto;
}
#login {
  background-color: white;
  color: black;
}
#register {
  background-color: #3c9379;
  color: white;
}

.buttons {
  display: flex;
}
</style>
