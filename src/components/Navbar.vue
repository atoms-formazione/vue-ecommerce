<script setup lang="ts">
import TopLinks from "./TopLinks.vue";
import LoginRegister from "./LoginRegister.vue";
</script>

<template>
  <div class="navbar">
    <p class="logo">
      <span class="black">Ba</span><span class="green">chira</span>
    </p>
    <TopLinks active="home" class="toplinks" />
    <LoginRegister class="loginregister" />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 5rem;
}

.logo {
  font-weight: 700;
  font-size: 36px;
  flex: 0.3;
  margin-left: 20px;
  margin-top: 0px;
}

.black {
  color: #101913;
}

.green {
  color: #3c9379;
}

.toplinks {
  flex: 1;
}

.loginregister {
  flex: 0.1;
  margin-right: 20px;
}
</style>
